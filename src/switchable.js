// Switchable
// -----------
// 可切换组件，核心特征是：有一组可切换的面板（Panel），可通过触点（Trigger）来触发。
// 感谢：
//  - https://github.com/kissyteam/kissy/tree/6707ecc4cdfddd59e21698c8eb4a50b65dbe7632/src/switchable

var $ = require('jquery');
var Widget = require('arale-widget');

var Effects = require('./plugins/effects');
var Autoplay = require('./plugins/autoplay');
var Circular = require('./plugins/circular');

var Switchable = Widget.extend({
  attrs: {

    // 用户传入的 triggers 和 panels
    // 可以是 Selector、jQuery 对象、或 DOM 元素集
    triggers: {
      value: [],
      getter: function (val) {
        return $(val);
      }
    },

    panels: {
      value: [],
      getter: function (val) {
        return $(val);
      }
    },

    classPrefix: 'ui-switchable',

    // 是否包含 triggers，用于没有传入 triggers 时，是否自动生成的判断标准
    hasTriggers: true,
    // 触发类型
    triggerType: 'hover',
    // or 'click'
    // 触发延迟
    delay: 100,

    // 初始切换到哪个面板
    activeIndex: {
      value: 0,
      setter: function (val) {
        return parseInt(val) || 0;
      }
    },

    // 一屏内有多少个 panels
    step: 1,
    // 有多少屏
    length: {
      readOnly: true,
      getter: function () {
        return Math.ceil(this.get('panels').length / this.get('step'));
      }
    },

    // 可见视图区域的大小。一般不需要设定此值，仅当获取值不正确时，用于手工指定大小
    viewSize: [],

    activeTriggerClass: {
      getter: function (val) {
        return val ? val : this.get("classPrefix") + '-active';
      }
    }
  },

  setup: function () {
    this._initConstClass();
    this._initElement();

    var role = this._getDatasetRole();
    this._initPanels(role);
    // 配置中的 triggers > dataset > 自动生成
    this._initTriggers(role);
    this._bindTriggers();
    this._initPlugins();

    // 渲染默认初始状态
    this.render();
  },

  _initConstClass: function () {
    this.CONST = constClass(this.get('classPrefix'));
  },
  _initElement: function () {
    this.element.addClass(this.CONST.UI_SWITCHABLE);
  },

  // 从 HTML 标记中获取各个 role, 替代原来的 markupType
  _getDatasetRole: function () {
    var self = this;
    var role = {};
    var roles = ['trigger', 'panel', 'nav', 'content'];
    $.each(roles, function (index, key) {
      var elems = self.$('[data-role=' + key + ']');
      if (elems.length) {
        role[key] = elems;
      }
    });
    return role;
  },

  _initPanels: function (role) {
    var panels = this.get('panels');

    // 先获取 panels 和 content
    if (panels.length > 0) {} else if (role.panel) {
      this.set('panels', panels = role.panel);
    } else if (role.content) {
      this.set('panels', panels = role.content.find('> *'));
      this.content = role.content;
    }

    if (panels.length === 0) {
      throw new Error('panels.length is ZERO');
    }
    if (!this.content) {
      this.content = panels.parent();
    }
    this.content.addClass(this.CONST.CONTENT_CLASS);
    this.get('panels').addClass(this.CONST.PANEL_CLASS);
  },

  _initTriggers: function (role) {
    var triggers = this.get('triggers');

    // 再获取 triggers 和 nav
    if (triggers.length > 0) {}
    // attr 里没找到时，才根据 data-role 来解析
    else if (role.trigger) {
      this.set('triggers', triggers = role.trigger);
    } else if (role.nav) {
      triggers = role.nav.find('> *');

      // 空的 nav 标记
      if (triggers.length === 0) {
        triggers = generateTriggersMarkup(
        this.get('length'), this.get('activeIndex'), this.get('activeTriggerClass'), true).appendTo(role.nav);
      }
      this.set('triggers', triggers);

      this.nav = role.nav;
    }
    // 用户没有传入 triggers，也没有通过 data-role 指定时，如果
    // hasTriggers 为 true，则自动生成 triggers
    else if (this.get('hasTriggers')) {
      this.nav = generateTriggersMarkup(
      this.get('length'), this.get('activeIndex'), this.get('activeTriggerClass')).appendTo(this.element);
      this.set('triggers', triggers = this.nav.children());
    }

    if (!this.nav && triggers.length) {
      this.nav = triggers.parent();
    }

    this.nav && this.nav.addClass(this.CONST.NAV_CLASS);
    triggers.addClass(this.CONST.TRIGGER_CLASS).each(function (i, trigger) {
      $(trigger).data('value', i);
    });
  },

  _bindTriggers: function () {
    var that = this,
        triggers = this.get('triggers');

    if (this.get('triggerType') === 'click') {
      triggers.click(focus);
    }
    // hover
    else {
      triggers.hover(focus, leave);
    }

    function focus(ev) {
      that._onFocusTrigger(ev.type, $(this).data('value'));
    }

    function leave() {
      clearTimeout(that._switchTimer);
    }
  },

  _onFocusTrigger: function (type, index) {
    var that = this;

    // click or tab 键激活时
    if (type === 'click') {
      this.switchTo(index);
    }

    // hover
    else {
      this._switchTimer = setTimeout(function () {
        that.switchTo(index);
      }, this.get('delay'));
    }
  },

  _initPlugins: function () {
    this._plugins = [];

    this._plug(Effects);
    this._plug(Autoplay);
    this._plug(Circular);
  },
  // 切换到指定 index
  switchTo: function (toIndex) {
    this.set('activeIndex', toIndex);
  },

  // change 事件触发的前提是当前值和先前值不一致, 所以无需验证 toIndex !== fromIndex
  _onRenderActiveIndex: function (toIndex, fromIndex) {
    this._switchTo(toIndex, fromIndex);
  },

  _switchTo: function (toIndex, fromIndex) {
    this.trigger('switch', toIndex, fromIndex);
    this._switchTrigger(toIndex, fromIndex);
    this._switchPanel(this._getPanelInfo(toIndex, fromIndex));
    this.trigger('switched', toIndex, fromIndex);

    // 恢复手工向后切换标识
    this._isBackward = undefined;
  },

  _switchTrigger: function (toIndex, fromIndex) {
    var triggers = this.get('triggers');
    if (triggers.length < 1) return;

    triggers.eq(fromIndex).removeClass(this.get('activeTriggerClass'));
    triggers.eq(toIndex).addClass(this.get('activeTriggerClass'));
  },

  _switchPanel: function (panelInfo) {
    // 默认是最简单的切换效果：直接隐藏/显示
    panelInfo.fromPanels.hide();
    panelInfo.toPanels.show();
  },

  _getPanelInfo: function (toIndex, fromIndex) {
    var panels = this.get('panels').get();
    var step = this.get('step');

    var fromPanels, toPanels;

    // 初始情况下 fromIndex 为 undefined
    if (fromIndex > -1) {
      fromPanels = panels.slice(fromIndex * step, (fromIndex + 1) * step);
    }

    toPanels = panels.slice(toIndex * step, (toIndex + 1) * step);

    return {
      toIndex: toIndex,
      fromIndex: fromIndex,
      toPanels: $(toPanels),
      fromPanels: $(fromPanels)
    };
  },

  // 切换到上一视图
  prev: function () {
    //  设置手工向后切换标识, 外部调用 prev 一样
    this._isBackward = true;

    var fromIndex = this.get('activeIndex');
    // 考虑循环切换的情况
    var index = (fromIndex - 1 + this.get('length')) % this.get('length');
    this.switchTo(index);
  },

  // 切换到下一视图
  next: function () {
    this._isBackward = false;

    var fromIndex = this.get('activeIndex');
    var index = (fromIndex + 1) % this.get('length');
    this.switchTo(index);
  },

  _plug: function (plugin) {
    var pluginAttrs = plugin.attrs;

    if (pluginAttrs) {
      for (var key in pluginAttrs) {
        if (pluginAttrs.hasOwnProperty(key) &&
        // 不覆盖用户传入的配置
        !(key in this.attrs)) {
          this.set(key, pluginAttrs[key]);
        }
      }
    }
    if (!plugin.isNeeded.call(this)) return;


    if (plugin.install) {
      plugin.install.call(this);
    }

    this._plugins.push(plugin);
  },


  destroy: function () {
    // todo: events
    var that = this;

    $.each(this._plugins, function (i, plugin) {
      if (plugin.destroy) {
        plugin.destroy.call(that);
      }
    });

    Switchable.superclass.destroy.call(this);
  }
});

module.exports = Switchable;


// Helpers
// -------

function generateTriggersMarkup(length, activeIndex, activeTriggerClass, justChildren) {
  var nav = $('<ul>');

  for (var i = 0; i < length; i++) {
    var className = i === activeIndex ? activeTriggerClass : '';

    $('<li>', {
      'class': className,
      'html': i + 1
    }).appendTo(nav);
  }

  return justChildren ? nav.children() : nav;
}


// 内部默认的 className


function constClass(classPrefix) {
  return {
    UI_SWITCHABLE: classPrefix || '',
    NAV_CLASS: classPrefix ? classPrefix + '-nav' : '',
    CONTENT_CLASS: classPrefix ? classPrefix + '-content' : '',
    TRIGGER_CLASS: classPrefix ? classPrefix + '-trigger' : '',
    PANEL_CLASS: classPrefix ? classPrefix + '-panel' : '',
    PREV_BTN_CLASS: classPrefix ? classPrefix + '-prev-btn' : '',
    NEXT_BTN_CLASS: classPrefix ? classPrefix + '-next-btn' : ''
  }
}