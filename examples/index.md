# 基本用法

- order: 1

---

## 指定 Triggers/Panels

<style>
.tab-demo, .slide-demo {
    margin: 20px 0;
    padding: 0;
}
.hidden {
    display: none;
}
</style>

**注意: 所有示例中, 每个示例的 CSS, HTML, JS 都是独立的, 按照示例的代码复制并修改即可, 不需要引入当前页面的其他样式!!**

````css
#tab-demo-1 {
    font: 14px/1.5 'Xin Gothic', 'PT Sans', 'Hiragino Sans GB', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    width: 750px;
    padding-top: 29px;
}

#tab-demo-1 .ui-switchable-nav {
    position: absolute;
    top: 0;
    left: 20px;
    margin: 0;
    padding: 0;
    z-index: 99;
    list-style: none;
}

#tab-demo-1 .ui-switchable-nav li {
    float: left;
    width: 130px;
    height: 27px;
    line-height: 21px;
    text-align: center;
    background: url(assets/tabs-sprite.gif) no-repeat 0 6px;
    margin-right: 3px;
    padding-top: 8px;
    cursor: pointer;
    list-style: none;
}

#tab-demo-1 .ui-switchable-nav .ui-switchable-active {
    background-position: 0 -40px;
    cursor: default;
}

#tab-demo-1 .ui-switchable-content {
    position: relative;
    height: 150px;
    padding: 20px;
    border: 1px solid #AEC7E5;
}
````

````html
<div id="tab-demo-1" class="tab-demo">
    <ul class="ui-switchable-nav">
        <li>标题 A</li>
        <li>标题 B</li>
        <li>标题 C</li>
        <li>标题 D</li>
    </ul>
    <div class="ui-switchable-content">
        <div class="hidden">
            内容 A
            <pre>
              - 在当前 trigger 中 mouseover/mouseout, click, focus, 不触发
              - 鼠标快速滑过非当前 trigger, 不触发
              - mouseover 到非当前 trigger, 停留时间到达延迟时，触发
              - click 或 Tab 切换到 trigger, 立即触发
              - switch / switched 事件的触发
            </pre>
        </div>
        <div class="hidden">内容 B</div>
        <div class="hidden">内容 C</div>
        <div class="hidden">内容 D</div>
    </div>
</div>
````

````js
var Tabs = require('src/tabs');
new Tabs({
    element: '#tab-demo-1',
    triggers: '.ui-switchable-nav li',
    panels: '.ui-switchable-content div',
    activeIndex: 2,
    effect: 'fade'
});
````


## data-role 形式

````css
#slide-demo-1 {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}
#slide-demo-1 .ui-switchable-content {
    margin: 0;
    padding: 0;
    list-style: none;
}
#slide-demo-1 .ui-switchable-content .ui-switchable-panel {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}
#slide-demo-1 .ui-switchable-content .ui-switchable-panel img {
    margin-left: -660px;
}
#slide-demo-1 .ui-switchable-nav {
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin: 0;
    padding: 0;
    z-index: 99;
    font-size: 12px;
}
#slide-demo-1 .ui-switchable-nav .ui-switchable-trigger {
    float: left;
    width: 15px;
    height: 15px;
    line-height: 17px;
    margin-left: 5px;
    background-color: #FFF;
    opacity: .5;
    filter: alpha(opacity=50);
    text-align: center;
    color: black;
    cursor: pointer;
    list-style: none;
}
#slide-demo-1 .ui-switchable-nav .ui-switchable-active {
    color: #FFF;
    background-color: #e96c3e;
    opacity: 1;
    filter: alpha(opacity=100);
}
````

````html
<div id="slide-demo-1" class="slide-demo">
    <ul class="ui-switchable-content" data-role="content">
        <li class="ui-switchable-panel"><a href="#"><img src="./assets/slide_1.jpg" /></a></li>
        <li class="hidden ui-switchable-panel"><a href="#"><img src="./assets/slide_2.jpg" /></a></li>
        <li class="hidden ui-switchable-panel"><a href="#"><img src="./assets/slide_3.jpg" /></a></li>
    </ul>
</div>
````

````javascript
var Slide = require('src/slide');
slide = new Slide({
    element: '#slide-demo-1',
    effect: 'scrolly',
    interval: 3000
});
````



## 自定义 Class

DOM 中, 默认会给 element 添加  `${classPrefix}` 类, data-role="content" 添加 `${classPrefix}-content`, data-role="nav" 添加 `${classPrefix}-nav`,
data-role="panel" 添加 `${classPrefix}-panel`, data-role="trigger" 添加 `${classPrefix}-trigger`,
data-role="prev" 添加 `${classPrefix}-prev-btn`, data-role="next" 添加 `${classPrefix}-next-btn`, prev/next 元素不可用状态时添加 `${classPrefix}-disabled-btn`,
当前激活的 trigger 添加 `${classPrefix}-active`.

可以通过设置 classPrefix 为 `null` 或 `''` , 这样不会在 DOM 中添加 class.

````css
#tab-demo-x {
    font: 14px/1.5 'Xin Gothic', 'PT Sans', 'Hiragino Sans GB', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    width: 750px;
    padding-top: 29px;
}

#tab-demo-x .nav {
    position: absolute;
    top: 0;
    left: 20px;
    margin: 0;
    padding: 0;
    z-index: 99;
    list-style: none;
}

#tab-demo-x .nav li {
    float: left;
    width: 130px;
    height: 27px;
    line-height: 21px;
    text-align: center;
    background: url(assets/tabs-sprite.gif) no-repeat 0 6px;
    margin-right: 3px;
    padding-top: 8px;
    cursor: pointer;
    list-style: none;
}

#tab-demo-x .nav .active {
    background-position: 0 -40px;
    cursor: default;
}

#tab-demo-x .content {
    position: relative;
    height: 150px;
    padding: 20px;
    border: 1px solid #AEC7E5;
}
````

````html
<div id="tab-demo-x" class="tab-demo">
    <ul class="nav">
        <li>标题 A</li>
        <li>标题 B</li>
        <li>标题 C</li>
        <li>标题 D</li>
    </ul>
    <div class="content">
        <div class="hidden">
            内容 A
            <pre>
              - 在当前 trigger 中 mouseover/mouseout, click, focus, 不触发
              - 鼠标快速滑过非当前 trigger, 不触发
              - mouseover 到非当前 trigger, 停留时间到达延迟时，触发
              - click 或 Tab 切换到 trigger, 立即触发
              - switch / switched 事件的触发
            </pre>
        </div>
        <div class="hidden">内容 B</div>
        <div class="hidden">内容 C</div>
        <div class="hidden">内容 D</div>
    </div>
</div>
````

````js
var Tabs = require('src/tabs');

 new Tabs({
    classPrefix: '',
    element: '#tab-demo-x',
    triggers: '.nav li',
    panels: '.content div',
    activeIndex: 2,
    effect: 'fade',
    activeTriggerClass: 'active'
});
````
