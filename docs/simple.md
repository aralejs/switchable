# Switchable Simple

---

Switchable Simple提供了切换的最基本操作，并通过参数配置实现了切换，data-api，简单动画效果，数据延时加载等操作，并封装成了Tabs模块。

---


## 配置说明

### triggers `String|Array`
    
触发器列表, 支持直接传入选择器，也可以是元素数组。
   
### panels `String|Array`

面板列表，支持直接传入选择器，也可以是元素数组。

### triggerType `String`
    
触发类型，默认`hover`.还可以选择`click`
 
### delay `Number`

默认为`100`， 触发器延迟时间，单位为毫秒。
    
### activeTriggerClass `String`
    
触发器被选中时的class,默认`ui-switchable-active`。

### activeIndex `Number`

初始化时，自动切换到指定面板，默认为`0`，也就是第一个。

### effect `String`

动画效果函数, 默认没有特效, 可取 `scrollx`, `scrolly`, `fade` 或者直接传入自定义效果函数.

### duration `Number`

默认为 `500`, 以毫秒为单位， 动画的时长.

### easing `String|Function`

动画效果，目前支持,`easeNode`默认, `easeIn`, `easeOut`, `easeBoth`, `easeInStrong`, `easeOutStrong`, `easeBothStrong`, `elasticIn`, `elasticOut`, `elasticBoth`, `backIn`, `backOut`, `backBoth`, `bounceIn`, `bounceOut`, `bounceBoth`。

## DATA API 配置属性

目前项目支持data-api的形式配置相关属性，并以role的形式配置到项目中，主要有下面5个role。

其中前面4个仅在属性配置中没有发现对应的`panels` 和 `triggers` 相关配置时，才会生效。
并且如果同时配置了下面的role， panel的优先级高于content. trigger高于nav.
 
* `panel` 单个面板

* `content` 面板列表元素

* `trigger` 触发器

* `nav` 触发器容器

```html
<!-- 容器元素 -->
<div id="J_Slide">
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
        <div style="display: none" data-role="panel">
        	<textarea data-role="lazy">
        		我是内容 E，只在 switch 到我的时候才插入 dom 上
        	</textarea>
        </div>
    </div>
</div>
```

* `lazy` 在 lazy（使用textarea） value 中的内容会在被 switch 到的时候才插入到 dom 树上

`content` 及 `nav` 更像是语法糖般的存在

---

## 具体组件配置属性

## Tabs (普通标签页)

配置和基础类相同。

## 属性

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

## 实例方法

### .switchTo(toIndex, fromIndex)

  切换到某个视图。
      toIndex {Number} 要切换到的项。
      fromInex {Number} 当前项.
      
### .prev()

  切换到上一 panel。

### .next()

  切换到下一 panel。

### .destroy()

  组件销毁。

## 实例事件

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