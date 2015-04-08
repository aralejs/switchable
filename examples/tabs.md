# Tabs - 普通标签页

- order: 2

---

<style>
.tab-demo {
    margin: 20px 0;
    padding: 0;
}
.hidden {
    display: none;
}
</style>


### 常规设置

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
var Tabs = require('arale-switchable').Tabs;
new Tabs({
    element: '#tab-demo-1',
    triggers: '#tab-demo-1 .ui-switchable-nav li',
    panels: '#tab-demo-1 .ui-switchable-content div',
    activeIndex: 2,
    effect: 'fade'
});

setTimeout(function() {
    tabs.set("activeIndex", 0);
}, 3000);
````


### 高度自适应

注意: 内容区高度自适应时, 请不要设置 `effect` 和 `.ui-switchable-content` 的高度.

````css
#tab-demo-2 {
    font: 14px/1.5 'Xin Gothic', 'PT Sans', 'Hiragino Sans GB', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    width: 750px;
    padding-top: 29px;
}

#tab-demo-2 .ui-switchable-nav {
    position: absolute;
    top: 0;
    left: 20px;
    margin: 0;
    padding: 0;
    z-index: 99;
    list-style: none;
}

#tab-demo-2 .ui-switchable-nav li {
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

#tab-demo-2 .ui-switchable-nav .ui-switchable-active {
    background-position: 0 -40px;
    cursor: default;
}

#tab-demo-2 .ui-switchable-content {
    position: relative;
    padding: 20px;
    border: 1px solid #AEC7E5;
}
````

````html
<div id="tab-demo-2" class="tab-demo">
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
var Tabs = require('arale-switchable').Tabs;
new Tabs({
    element: '#tab-demo-2',
    triggers: '#tab-demo-2 .ui-switchable-nav li',
    panels: '#tab-demo-2 .ui-switchable-content div',
    activeIndex: 2
});

setTimeout(function() {
    tabs.set("activeIndex", 0);
}, 3000);
````
