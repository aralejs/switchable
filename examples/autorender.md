# DATA API 方式

- order: 6

---

## Tabs

<style>
.tab-demo, .slide-demo, .carousel-demo, .accordion-demo {
    margin: 20px 0;
    padding: 0;
}
.hidden {
    display: none;
}
</style>


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
<div id="tab-demo-1" class="tab-demo" data-widget="src/tabs">
    <ul class="ui-switchable-nav" data-role="nav">
        <li>标题 A</li>
        <li>标题 B</li>
        <li>标题 C</li>
        <li>标题 D</li>
    </ul>
    <div class="ui-switchable-content" data-role="content">
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

## Slide

````css
#slide-demo-2 {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}
#slide-demo-2 .ui-switchable-content {
    margin: 0;
    padding: 0;
    list-style: none;
}
#slide-demo-2 .ui-switchable-content .ui-switchable-panel {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}
#slide-demo-2 .ui-switchable-content .ui-switchable-panel img {
    margin-left: -660px;
}
#slide-demo-2 .ui-switchable-nav {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 99;
    text-align: center;
}
#slide-demo-2 .ui-switchable-nav .ui-switchable-trigger {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    margin-left: 5px;
    font-size: 12px;
    line-height: 1.5;
    opacity: .5;
    filter: alpha(opacity=50);
    color: white;
    cursor: pointer;
    list-style: none;
}
#slide-demo-2 .ui-switchable-nav .ui-switchable-active {
    opacity: 1;
    filter: alpha(opacity=100);
}
````

````html
<div id="slide-demo-2" class="slide-demo" data-widget="src/slide" data-active-index="1" data-effect="fade" data-interval="2000" data-easing="easeOutStrong">
    <ul data-role="content" class="ui-switchable-content">
        <li class="hidden ui-switchable-panel"><a href="#"><img src="./assets/slide_1.jpg" /></a></li>
        <li class="ui-switchable-panel"><a href="#"><img src="./assets/slide_2.jpg" /></a></li>
        <li class="hidden ui-switchable-panel"><a href="#"><img src="./assets/slide_3.jpg" /></a></li>
    </ul>
    <ul data-role="nav" class="ui-switchable-nav">
        <li class="ui-switchable-trigger">●</li>
        <li class="ui-switchable-trigger ui-switchable-active">●</li>
        <li class="ui-switchable-trigger">●</li>
    </ul>
</div>
````

## Carousel


````css
#carousel-demo-1 {
    position: relative;
    width: 664px;
    margin-top: 40px;
}
#carousel-demo-1 .ui-switchable-prev-btn, #carousel-demo-1 .ui-switchable-next-btn {
    position: absolute;
    top: -30px;
    color: #666;
    cursor: pointer;
}
#carousel-demo-1 .ui-switchable-prev-btn {
    left: 10px;
}
#carousel-demo-1 .ui-switchable-next-btn {
    right: 10px;
}
#carousel-demo-1 .ui-switchable-disabled-btn {
    color: #ddd;
    cursor: default;
}

#carousel-demo-1 .scroller {
    width: 664px;
    height: 120px;
    border: 1px solid #ccc;
    background-color: #F9F9F9;
    overflow: hidden;
}
#carousel-demo-1 .scroller .ui-switchable-content {
    padding: 20px 0;
    height: 80px;
}
#carousel-demo-1 .scroller .ui-switchable-content img {
    float: left;
    display: block;
    width: 300px;
    height: 80px;
    margin: 0 15px;
    border: 1px solid #ccc;
}
````

````html
<div id="carousel-demo-1" class="carousel-demo" data-widget="src/carousel" data-has-triggers="false" data-effect="scrollx" data-easing="easeOutStrong" data-step="2" data-view-size="[332]" data-circular="false" data-autoplay="true">
    <span class="ui-switchable-prev-btn" data-role="prev">&lsaquo; 上一页</span>
    <span class="ui-switchable-next-btn" data-role="next">下一页 &rsaquo;</span>
    <div class="scroller">
        <div class="ui-switchable-content" data-role="content">
            <img src="https://i.alipayobjects.com/e/201306/SzpUxptFt.png" alt="" class="ui-switchable-panel">
            <img src="https://i.alipayobjects.com/e/201306/SzpaKukGz.png" alt="" class="ui-switchable-panel">
            <img src="https://i.alipayobjects.com/e/201306/SzpBApQi5.png" alt="" class="ui-switchable-panel">
        </div>
    </div>
</div>
````


## Accordion

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
<div id="accordion-demo-1" class="accordion-demo" data-widget="src/accordion">
    <div class="ui-switchable-trigger ui-switchable-active" data-role="trigger"><h3>标题A</h3></div>
    <div class="ui-switchable-panel" data-role="panel">
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

````javascript
seajs.use(['arale-widget'], function(Widget) {
    Widget.autoRenderAll();
});
````
