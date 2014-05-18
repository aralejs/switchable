var Switchable = require('./switchable');


// 手风琴组件
var Accordion = Switchable.extend({
  attrs: {
    triggerType: 'click',

    // 是否运行展开多个
    multiple: false,

    autoplay: false
  },
  switchTo: function (toIndex) {
    if (this.get('multiple')) {
      this._switchTo(toIndex, toIndex);
    } else {
      Switchable.prototype.switchTo.call(this, toIndex);
    }
  },

  _switchTrigger: function (toIndex, fromIndex) {
    if (this.get('multiple')) {
      this.get('triggers').eq(toIndex).toggleClass(this.get('activeTriggerClass'));
    } else {
      Switchable.prototype._switchTrigger.call(this, toIndex, fromIndex);
    }
  },

  _switchPanel: function (panelInfo) {
    if (this.get('multiple')) {
      panelInfo.toPanels.toggle();
    } else {
      Switchable.prototype._switchPanel.call(this, panelInfo);
    }
  }
});

module.exports = Accordion;