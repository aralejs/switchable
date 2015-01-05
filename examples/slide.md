# Slide - 卡盘轮播

- order: 3

---


<style>
.slide-demo {
    margin: 20px 0;
    padding: 0;
}
.hidden {
    display: none;
}
</style>

## Alipay 轮播: 数字形式

````css
#slide-demo-1 {
    position: relative;
    width: 740px;
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
    width: 740px;
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
new Slide({
    element: '#slide-demo-1',
    effect: 'scrollx',
    interval: 3000
}).render();
````


## Alipay 轮播: 原点形式

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
<div id="slide-demo-2" class="slide-demo">
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

````javascript
var Slide = require('src/slide');
new Slide({
    element: '#slide-demo-2',
    effect: 'fade',
    activeIndex: 1
}).render();
````



## Alipay 轮播: 文字条

````css
#slide-demo-3 {
    position: relative;
    width: 600px;
    height: 30px;
    padding: 0 60px 0 20px;
    line-height: 30px;
    overflow: hidden;
    background: #eaeaea;
    font-size: 12px;
}
#slide-demo-3 .wrapper, #slide-demo-3 .wrapper .ui-switchable-content .ui-switchable-panel {
    width: 600px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
}
#slide-demo-3 .wrapper .ui-switchable-content {
    margin: 0;
    padding: 0;
    list-style: none;
}
#slide-demo-3 .nav {
    position: absolute;
    top: 0;
    right: 10px;
    margin: 0;
}
#slide-demo-3 .nav a {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    width: 12px;
    height: 12px;
    line-height: 10px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #cdcdcd;
    color: #999;
    background: white;
}
#slide-demo-3 .nav a:hover {
    color: #f50;
}
#slide-demo-3 .nav #next {
    border-left: none;
}
````

````html
<div id="slide-demo-3" class="slide-demo">
    <div class="wrapper">
        <ul data-role="content" class="ui-switchable-content">
            <li class="ui-switchable-panel"><strong>公告1: </strong>Arale 立足于支付宝的前端需求和国内前端社区，基于 Sea.js 和 CMD 规范，致力发展小而美的前端模块架构，建立了一套从编码测试到部署的开发体系， 是一个开放、简单、易用的前端解决方案。</li>
            <li class="hidden ui-switchable-panel"><strong>公告2: </strong>Arale 立足于支付宝的前端需求和国内前端社区，基于 Sea.js 和 CMD 规范，致力发展小而美的前端模块架构，建立了一套从编码测试到部署的开发体系， 是一个开放、简单、易用的前端解决方案。</li>
            <li class="hidden ui-switchable-panel"><strong>公告3: </strong>Arale 立足于支付宝的前端需求和国内前端社区，基于 Sea.js 和 CMD 规范，致力发展小而美的前端模块架构，建立了一套从编码测试到部署的开发体系， 是一个开放、简单、易用的前端解决方案。</li>
        </ul>
    </div>
    <p class="nav">
        <a id="prev" href="#">‹</a>
        <a id="next" href="#">›</a>
    </p>
</div>
````

````js
var Slide = require('src/slide');
var $ = require('jquery');

var slide = new Slide({
    element: '#slide-demo-3',
    effect: 'scrollx',
    hasTriggers: false
}).render();

// 自定义 prev/next
$("#slide-demo-3 #prev").click(function(e) {
    e.preventDefault();
    slide.prev();
});

$("#slide-demo-3 #next").click(function(e) {
    e.preventDefault();
    slide.next();
});
````


## Alipay 轮播: 缩略形式

````css
#slide-demo-4 {
    position: relative;
    width: 500px;
    height: 200px;
    overflow: hidden;
}
#slide-demo-4 .ui-switchable-content {
    margin: 0;
    padding: 0;
    list-style: none;
}
#slide-demo-4 .ui-switchable-content .ui-switchable-panel {
    position: relative;
    width: 100%;
    height: 169px;
    overflow: hidden;
}
#slide-demo-4 .ui-switchable-content .ui-switchable-panel img {
    margin-left: -660px;
}
#slide-demo-4 .ui-switchable-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10000px;
    margin: 0;
    padding: 0;
    z-index: 99;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}
#slide-demo-4 .ui-switchable-nav .ui-switchable-trigger {
    position: relative;
    float: left;
    width: 167px;
    height: 30px;
    line-height: 30px;
    border-right: 1px solid white;
    cursor: pointer;
    list-style: none;
    background: #c7c7c7;
    color: white;
}
#slide-demo-4 .ui-switchable-nav .ui-switchable-active {
    background: #f60;
}
#slide-demo-4 .ui-switchable-nav .ui-switchable-trigger .arrow {
    position: absolute;
    left: 50%;
    top: -8px;
    margin-left: -8px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    width: 16px;
    height: 16px;
    line-height: 16px;

    visibility: hidden;
}
#slide-demo-4 .ui-switchable-nav .ui-switchable-active .arrow {
    visibility: visible;
    color: #f60;
}
````

````html
<div id="slide-demo-4" class="slide-demo">
    <ul data-role="content" class="ui-switchable-content">
        <li class="hidden ui-switchable-panel"><a href="#"><img src="./assets/slide_1.jpg" /></a></li>
        <li class="ui-switchable-panel"><a href="#"><img src="./assets/slide_2.jpg" /></a></li>
        <li class="hidden ui-switchable-panel"><a href="#"><img src="./assets/slide_3.jpg" /></a></li>
    </ul>
    <ul data-role="nav" class="ui-switchable-nav">
        <li class="ui-switchable-trigger"><span>缩略/标题一</span><b class="arrow">◆</b></li>
        <li class="ui-switchable-trigger ui-switchable-active"><span>缩略/标题二</span><b class="arrow">◆</b></li>
        <li class="ui-switchable-trigger"><span>缩略/标题三</span><b class="arrow">◆</b></li>
    </ul>
</div>
````

````js
var Slide = require('src/slide');
var slide = new Slide({
    element: '#slide-demo-4',
    effect: 'fade',
    activeIndex: 1
}).render();
````
