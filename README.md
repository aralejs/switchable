# Switchable

---

[![spm package](http://spmjs.io/badge/arale-switchable)](http://spmjs.io/package/arale-switchable)
[![Build Status](https://secure.travis-ci.org/aralejs/switchable.png)](https://travis-ci.org/aralejs/switchable)
[![Coverage Status](https://coveralls.io/repos/aralejs/switchable/badge.png?branch=master)](https://coveralls.io/r/aralejs/switchable)


Switchable 提供了切换的基本操作，并通过参数配置实现了自动播放，循环，切换等操作，并提供不同的特点封装成了Tabs, Slide, Carousel, Accordion模块。用户可以根据自己的需求引用不同的模块。

---

Switchable 继承了 [widget](http://aralejs.org/widget/)，可使用其中包括 [base](http://aralejs.org/base/)、[class](http://aralejs.org/class/)、[events](http://aralejs.org/events/)、[attribute](http://aralejs.org/base/docs/attribute.html)、[aspect](http://aralejs.org/base/docs/aspect.html) 的属性和方法。

## 配置说明

### triggers `String|Array`
    
触发器列表, 支持直接传入选择器，也可以是元素数组。
   
### panels `String|Array`

面板列表，支持直接传入选择器，也可以是元素数组。

**注意: 如果页面上有多个 Switchable 组件, triggers 和 panels 的 selector 最好写的更加精确些, 比如 `triggers: '#banner .ui-switchable-nav li'`,
而不是 `triggers: '.ui-switchable-nav li'`, 这样能避免多个组件引用 triggers/panels 的冲突.**

### triggerType `String`
    
触发类型，默认`hover`.还可以选择`click`
 
### delay `Number`

默认为`100`， 触发器延迟时间，单位为毫秒。
    
### activeTriggerClass `String`
    
触发器被选中时的class,默认`ui-switchable-active`。

### activeIndex `Number`

初始化时，自动切换到指定面板，默认为`0`，也就是第一个。

### step `Number`

步长，表示每次切换时需要间隔多少个panels, 默认为`1`。

### viewSize `Array`

可见视图区域的大小. 如果 css 中不设置 panel 的高宽或初始没有 panel , 则需要这里手工指定大小, 默认为 [].
  
`当 panel 的高宽 css 中不指定时，需要设置 viewSize 为单个 panel 的高宽.`
  
### autoplay `Boolean`

是否自动切换，默认为`false`, 开启后，不需要触发触发器，可以实现自动播放。

### interval `Number`

自动播放间隔时间, 以毫秒为单位, 默认为 `3000`。

### circular `Boolean`

是否循环切换, 默认为 `true`, 是否循环播放, 当切换到最初/最后一个时, 是否切换到最后/最初一个。
 
### effect `String`

动画效果函数, 默认没有特效, 可取 `scrollx`, `scrolly`, `fade` 或者直接传入自定义效果函数.

### duration `Number`

默认为 `500`, 以毫秒为单位， 动画的时长.

### easing `String|Function`

动画效果，目前支持,`easeNode`默认, `easeIn`, `easeOut`, `easeBoth`, `easeInStrong`, `easeOutStrong`, `easeBothStrong`, `elasticIn`, `elasticOut`, `elasticBoth`, `backIn`, `backOut`, `backBoth`, `bounceIn`, `bounceOut`, `bounceBoth`。


## DATA API 配置属性

目前项目支持data-api的形式配置相关属性，并以role的形式配置到项目中，主要有下面6个role.
前面4个是所有组件均有效，后面2个，只在 Carousel 组件中生效.

其中前面4个仅在在属性配置中没有发现对应的`panels` 和 `triggers` 相关配置时，才会生效。
并且如果同时配置了下面的role， panel的优先级高于content. trigger高于nav.
 
* `panel` 单个面板

* `content` 面板列表元素

* `trigger` 触发器

* `nav` 触发器容器

```html
<!-- 容器元素 -->
<div id="J_Slide">
    <span data-role="prev">上一页</span>
    <ul class="ui-switchable-nav" data-role="nav">
        <li data-role="trigger">标题 A</li>
        <li data-role="trigger">标题 B</li>
        <li data-role="trigger">标题 C</li>
        <li data-role="trigger">标题 D</li>
        <li data-role="trigger">标题 E</li>
    </ul>
    <div class="ui-switchable-content" data-role="content">  <!-- 面板列表 -->
        <div data-role="panel">内容 A</div>
        <div style="display: none" data-role="panel">内容 B</div>
        <div style="display: none" data-role="panel">内容 C</div>
        <div style="display: none" data-role="panel">内容 D</div>
    </div>
    <span data-role="next">下一页</span>
</div>
```
* `prev` 上一页 (仅在Carousel组件生效)

* `next` 下一页 (仅在Carousle组件中生效)

---

## 具体组件配置属性

有些属性在对应类型的模块可能有不同的默认值，还有一些特有的配置属性。

## Accordion (手风琴)

### triggerType `String`

在此模块中，默认值为`click`

### multiple `Boolean`
  
是否支持多个面板展开，默认为`false`。


## Carousel (旋转木马)

### circular `Boolean`

是否支持循环切换。默认`true`

### prevBtn `selector`
    
指定 `前一个`触发器. 默认会加上类名`ui-switchable-prev-btn`。

### nextBtn `selector`
  
指定 `后一个`触发器. 默认会加上类名 `ui-switchable-next-btn`。

### disabledBtnClass `String`

prev/next 按钮不可用状态时的样式类

## Slide (卡盘)

### autoplay `Boolean`

  是否自动切换，默认为`true`。

### circular `Boolean`

  是否循环切换，默认为`true`。


## Tabs (普通标签页)

配置和基础类相同。

### element `HTMLElement`

  容器元素。

### obj.get('triggers') `Array`

  触发器集合， 可能为空。

### obj.get('panels') `Array`

  切换面板结合，可以为空值。

### content `HTMLElement`

  存放面板的容器元素。

### length `Number`

  只读, 触发器或面板的个数。

### .switchTo(toIndex, fromIndex)

  切换到某个视图。
      toIndex {Number* 要切换到的项。
      fromInex {Number* 当前项.
      
### .prev()

  切换到上一视图。

### .next()

  切换到下一视图。

### .stop()

  停止自动切换。只有设置了 autoplay true 时有效。

### .start()

  开始自动切换。

### .destroy()

  组件销毁。

## 组件触发事件

在组件运行中，会触发相关事件，使用者可以根据自己的需要去监听对应的事件

### switch
  
  面板切换前触发。

  ```js
  instance.on('switch', function(toIndex, fromIndex) {
  });
  ```

### switched

  面板切换后触发。

  ```js
  instance.on('switched', function(toIndex, fromIndex) {
  });
  ```

### change:activeIndex

  面板改变时触发。

  ```js
  instance.on('change:activeIndex', function(toIndex, fromIndex) {
  });
  ```


## 最佳实践

1. 直接使用：

    ```js
    seajs.use(['tabs'], function(Tabs) {
        var t = new Tabs({
            element: '#demo1',
            switchTo: 1,
            effect: 'fade'
        });
    });
    ```

2. 也可以适用自动渲染。详情可以参考[examples/autorender.html](../examples/autorender.html)


