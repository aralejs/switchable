//mocha.setup({ignoreLeaks: true});
var $ = require('jquery');
var sinon = require('sinon');
var expect = require('expect.js');
var Switchable = require('../switchable');
var Carousel = Switchable.Carousel;
var Slide = Switchable.Slide;
var Accordion = Switchable.Accordion;

describe('Switchable', function () {

  var element1, element2, element3;
  $(document.body).css('margin', 0);
  var activeClass = 'ui-switchable-active';

  function testTriggerAndPanelActive(sw, active) {
    var triggers = sw.triggers;
    var panels = sw.panels;
    var trigger, panel;
    for (var i = 0, len = sw.length; i < len; i++) {
      trigger = $(triggers[i]);
      panel = $(panels[i]);
      if (active == i) {
        expect(trigger.attr('class')).to.contain(activeClass);
        expect(panel.css('display')).to.be('block');
      } else {
        expect(trigger.attr('class')).not.to.contain(activeClass);
        expect(panel.css('display')).to.equal('none');
      }
    }
  }

  beforeEach(function () {
    // 测试元素1
    var elem = [];
    elem.push('<div id="demo1">');
    elem.push('<span id="scroller-prev" class="prev"');
    elem.push(' data-role="prev">上一页</span>');
    elem.push('<span id="scroller-next" class="next" ');
    elem.push(' data-role="next">下一页</span>');
    elem.push('<ul class="ui-switchable-nav" data-role="nav"> ');
    elem.push('<li>NA</li>><li>NB</li>><li>NC</li></ul>');
    elem.push('<div class="ui-switchable-content"');
    elem.push(' data-role="content">');
    elem.push('<div style="display: none">CA</div>');
    elem.push('<div style="display: none">CB</div>');
    elem.push('<div style="display: none">CC</div></div>');
    elem.push('</div>');
    element1 = $(elem.join('')).appendTo(document.body);
    // 测试元素2
    var elem2 = [];
    elem2.push('<div id="demo2">');
    elem2.push('<ul>');
    elem2.push('<li>NA</li>><li>NB</li>><li>NC</li></ul>');
    elem2.push('<div>');
    elem2.push('<div class="panel" style="display:none">CA</div>');
    elem2.push('<div class="panel" style="display:none">CB</div>');
    elem2.push('<div class="panel" style="display:none">CC</div>');
    elem2.push('</div>');
    elem2.push('</div>');
    element2 = $(elem2.join('')).appendTo(document.body);
    // 测试元素3
    var elem3 = [];
    elem3.push('<div id="demo3">');
    elem3.push('<div class="ui-switchable-content"');
    elem3.push(' data-role="content">');
    elem3.push('<div>CA</div>');
    elem3.push('<div style="display: none">CB</div>');
    elem3.push('<div style="display: none">CC</div></div>');
    elem3.push('</div>');
    element3 = $(elem3.join('')).appendTo(document.body);

  });

  afterEach(function () {
    element1.remove();
    element2.remove();
    element3.remove();
  });

  it('Switchable初始化', function () {
    var switchable = new Switchable({
      element: '#demo1'
    });
    expect(switchable instanceof Switchable).to.be(true);
    expect(switchable.get('triggers').length).to.be(3);
    expect(switchable.get('panels').length).to.be(3);
    var navClass = 'ui-switchable-nav';
    var contentClass = 'ui-switchable-content';
    expect($('.' + navClass).attr('class')).to.contain(navClass);
    expect($('.' + contentClass).attr('class')).to.contain(contentClass);
  });

  it('panels和triggers传入', function () {
    var switchable = new Switchable({
      element: '#demo2',
      triggers: $('#demo2 li'),
      panels: $('#demo2 .panel')
    });

    expect(switchable instanceof Switchable).to.be(true);
    expect(switchable.get('triggers').length).to.be(3);
    expect(switchable.get('panels').length).to.be(3);
  });

  it('Switchable 属性配置', function () {
    var switchable = new Switchable({
      element: '#demo1',
      triggerType: 'click',
      activeIndex: 1
    });
    expect(switchable.get('triggerType')).to.be('click');
    expect(switchable.get('activeIndex')).to.be(1);
  });

  it('triggers自动初始化', function () {
    var switchable = new Switchable({
      element: '#demo3',
      navClass: 'ui-switchable-nav'
    });
    expect(switchable.get('triggers').length).to.be(3);
    expect(switchable.get('panels').length).to.be(3);
    expect($(switchable.get('triggers')[0]).html()).to.be('1');
    expect($(switchable.get('triggers')[1]).html()).to.be('2');
  });

  it('触发默认位置', function () {
    var sw = new Switchable({
      element: '#demo1',
      activeIndex: 1
    });
    testTriggerAndPanelActive(sw, 1);
  });

  it('switchTo', function () {
    var sw = new Switchable({
      element: '#demo1'
    });
    testTriggerAndPanelActive(sw, 0);
    sw.switchTo(2);
    testTriggerAndPanelActive(sw, 2);

    // test critical value
    // 暂时不支持字符串和特殊值。
    /**
     sw.switchTo(5);
     testTriggerAndPanelActive(sw, 2);
     sw.switchTo(-1);
     testTriggerAndPanelActive(sw, 0);
     sw.switchTo('abc');
     testTriggerAndPanelActive(sw, 0);
     **/
  });

  it('triggerType click', function () {
    var sw = new Switchable({
      element: '#demo1'
    });

    testTriggerAndPanelActive(sw, 0);
    var triggers = sw.get('triggers');

    $(triggers[1]).trigger('click');
    testTriggerAndPanelActive(sw, 1);

    $(triggers[0]).trigger('click');
    testTriggerAndPanelActive(sw, 0);

    $(triggers[2]).trigger('click');
    testTriggerAndPanelActive(sw, 2);
  });

  it('triggerType hover', function () {
    var sw = new Switchable({
      element: '#demo1',
      triggerType: 'hover'
    });

    testTriggerAndPanelActive(sw, 0);
    var triggers = sw.get('triggers');

    $(triggers[1]).trigger('click');
    testTriggerAndPanelActive(sw, 1);

    $(triggers[2]).trigger('mouseover');
    var clock = sinon.useFakeTimers();
    clock.tick(500);
    testTriggerAndPanelActive(sw, 2);

    $(triggers[0]).trigger('mouseover');
    clock.tick(500);
    testTriggerAndPanelActive(sw, 0);
    $(triggers[1]).trigger('mouseover');

    clock.tick(500);
    testTriggerAndPanelActive(sw, 1);

    clock.restore();
  });

  it('activeIndex事件监听', function () {
    var sw = new Switchable({
      element: '#demo1'
    });
    sw.set('activeIndex', 2);
    testTriggerAndPanelActive(sw, 2);
  });

  it('prev next', function () {
    var sw = new Switchable({
      element: '#demo1'
    });

    sw.next();
    testTriggerAndPanelActive(sw, 1);
    sw.next();
    testTriggerAndPanelActive(sw, 2);
    sw.next();

    testTriggerAndPanelActive(sw, 0);

    sw.prev();
    testTriggerAndPanelActive(sw, 2);
    sw.prev();
    testTriggerAndPanelActive(sw, 1);
    sw.prev();
    testTriggerAndPanelActive(sw, 0);
    sw.prev();
    testTriggerAndPanelActive(sw, 2);

  });

  it('Carousel', function () {
    var cc = new Carousel({
      element: '#demo1'
    });
    expect(cc.get('circular')).to.be.ok();
    cc.switchTo(2);

    cc.next();
    testTriggerAndPanelActive(cc, 0);

    cc.prev();
    testTriggerAndPanelActive(cc, 2);
  });

  it('Carousel disabled', function () {
    var cc2 = new Carousel({
      element: '#demo1',
      circular: false,
      prevButtonClass: '.prev',
      nextButtonClass: '.next'
    }).render();
    expect(cc2.get('circular')).to.not.be.ok();
    var disabelClass = 'ui-switchable-disabled-btn';
    expect($(cc2.get('prevBtn')).attr('class')).
    to.contain(disabelClass);

    cc2.switchTo(2);
    expect($(cc2.get('nextBtn')).
    attr('class')).to.contain(disabelClass);

    cc2.get('prevBtn').click();
    cc2.get('nextBtn').click();

  });

  it('Slide', function () {
    new Slide({
      element: '#demo1'
    });
  });

  it('Accordion', function () {
    var ac = new Accordion({
      element: '#demo1'
    });
    expect(ac.get('multiple')).not.to.be.ok();
    expect(ac.get('triggerType')).to.equal('click');
  });

  it('插件安装 一', function () {
    var sw = new Switchable({
      element: '#demo1'
    });
    expect(sw.get('autoplay')).to.not.be.ok();
    expect(sw.get('circular')).to.not.be.ok();
    expect(sw.get('effect')).to.equal('none');
    expect(sw._plugins.length).to.be(0);

    var slide = new Slide({
      element: '#demo2',
      triggers: $('ul').children(),
      panels: $('.panel'),
      effect: 'scrollx'
    });
    expect(slide.get('autoplay')).to.be.ok();
    expect(slide.get('circular')).to.be.ok();
    expect(slide._plugins.length).to.be(3);

    var sw2 = new Switchable({
      element: '#demo3',
      navClass: 'ui-switchable-nav',
      effect: 'scrollx'
    });
    expect(sw2._plugins.length).to.be(1);
  });

  it('插件安装 二', function () {
    var sw = new Switchable({
      element: '#demo1',
      autoplay: true,
      effect: 'scrollx'
    });
    expect(sw._plugins.length).to.be(2);
  });


  it('destroy', function () {

    var sw = new Switchable({
      element: '#demo1',
      autoplay: true,
      effect: 'scrollx'
    });

    sw.destroy()
    expect(sw._plugins).to.be(undefined);
  })

});
