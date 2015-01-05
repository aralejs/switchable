# Accordion - 手风琴

- order: 4

---

## multiple: false 时

<style>
.accordion-demo {
    margin: 20px 0;
    padding: 0;
}
.hidden {
    display: none;
}
</style>

````css
#accordion-demo-1 {
    width: 300px;
    border: 1px solid #ccc;
}

#accordion-demo-1 .ui-switchable-trigger {
    height: 30px;
    line-height: 34px;
    padding: 0 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    background: #f3f3f3;
    overflow: hidden;
}

#accordion-demo-1 .ui-switchable-trigger h3 {
    margin: 0;
    padding-left: 20px;
    background: transparent url(assets/accordion-sprite.png) no-repeat 0 10px;
}

#accordion-demo-1 .ui-switchable-panel {
    height: 150px;
    padding: 3px 10px;
    border-bottom: 1px solid #ddd;
}

#accordion-demo-1 .ui-switchable-active h3 {
    background-position: 0 -14px;
}

#accordion-demo-1 .last-trigger {
    border-bottom-width: 0
}

#accordion-demo-1 .ui-switchable-active {
    border-bottom-width: 1px
}

#accordion-demo-1 .last-panel {
    border-bottom: none
}
````

````html
<div id="accordion-demo-1" class="accordion-demo">
    <div class="ui-switchable-trigger" data-role="trigger"><h3>标题A</h3></div>
    <div class="ui-switchable-panel hidden" data-role="panel">
        1、支持鼠标滑过和点击触点两种方式<br/>
        2、支持同时展开多个面板
    </div>
    <div class="ui-switchable-trigger" data-role="trigger"><h3>标题B</h3></div>
    <div class="ui-switchable-panel hidden" data-role="panel">内容B<br/>内容B<br/>内容B</div>
    <div class="ui-switchable-trigger" data-role="trigger"><h3>标题C</h3></div>
    <div class="ui-switchable-panel hidden" data-role="panel">内容C<br/>内容C<br/>内容C<br/>内容C<br/>内容C</div>
    <div class="ui-switchable-trigger last-trigger" data-role="trigger"><h3>标题D</h3></div>
    <div class="ui-switchable-panel last-panel hidden" data-role="panel">内容D<br/>内容D<br/>内容D</div>
</div>
````

````js
var Accordion = require('src/accordion');
new Accordion({
    element: '#accordion-demo-1'
}).render();
````

## multiple: true 时


````css
#accordion-demo-2 {
    width: 300px;
    border: 1px solid #ccc;
}

#accordion-demo-2 .ui-switchable-trigger {
    height: 30px;
    line-height: 34px;
    padding: 0 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    background: #f3f3f3;
    overflow: hidden;
}

#accordion-demo-2 .ui-switchable-trigger h3 {
    margin: 0;
    padding-left: 20px;
    background: transparent url(assets/accordion-sprite.png) no-repeat 0 10px;
}

#accordion-demo-2 .ui-switchable-panel {
    height: 150px;
    padding: 3px 10px;
    border-bottom: 1px solid #ddd;
}

#accordion-demo-2 .ui-switchable-active h3 {
    background-position: 0 -14px;
}

#accordion-demo-2 .last-trigger {
    border-bottom-width: 0
}

#accordion-demo-2 .ui-switchable-active {
    border-bottom-width: 1px
}

#accordion-demo-2 .last-panel {
    border-bottom: none
}
````

````html
<div id="accordion-demo-2" class="accordion-demo">
    <div class="ui-switchable-trigger" data-role="trigger"><h3>标题A</h3></div>
    <div class="ui-switchable-panel hidden" data-role="panel">
        1、支持鼠标滑过和点击触点两种方式<br/>
        2、支持同时展开多个面板
    </div>
    <div class="ui-switchable-trigger" data-role="trigger"><h3>标题B</h3></div>
    <div class="ui-switchable-panel hidden" data-role="panel">内容B<br/>内容B<br/>内容B</div>
    <div class="ui-switchable-trigger" data-role="trigger"><h3>标题C</h3></div>
    <div class="ui-switchable-panel hidden" data-role="panel">内容C<br/>内容C<br/>内容C<br/>内容C<br/>内容C</div>
    <div class="ui-switchable-trigger last-trigger" data-role="trigger"><h3>标题D</h3></div>
    <div class="ui-switchable-panel last-panel hidden" data-role="panel">内容D<br/>内容D<br/>内容D</div>
</div>
````

````js
var Accordion = require('src/accordion');
accordion = new Accordion({
    element: '#accordion-demo-2',
    multiple: true,
    activeIndex: -99
}).render();
````
