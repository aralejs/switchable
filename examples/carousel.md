# Carousel

- order: 5

---

## 设置 step/viewSize 的情况

step 为步长, 即每切换一次, 移动多少个 panels. 而 viewSize 为滑动窗口的大小, 一般为 panels 的整数倍.
另外, viewSize 默认是自动计算, 但有时设置不准确, 特别是 panels 和容器设置了乱七八糟的 padding 时. 所以这是需要手工指定 viewSize.

<style>
.carousel-demo {
    margin: 40px 0 20px;
    padding: 0;
}
.hidden {
    display: none;
}
</style>

````css
#carousel-demo-1 {
    position: relative;
    width: 664px;
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
    width: 190px;
    height: 80px;
    margin: 0 15px;
    border: 1px solid #ccc;
}
````

````html
<div id="carousel-demo-1" class="carousel-demo">
    <span class="ui-switchable-prev-btn" data-role="prev">&lsaquo; 上一页</span>
    <span class="ui-switchable-next-btn" data-role="next">下一页 &rsaquo;</span>
    <div class="scroller">
        <div class="ui-switchable-content" data-role="content">
            <img src="" alt="1" class="ui-switchable-panel">
            <img src="" alt="2" class="ui-switchable-panel">
            <img src="" alt="3" class="ui-switchable-panel">
            <img src="" alt="4" class="ui-switchable-panel">
            <img src="" alt="5" class="ui-switchable-panel">
        </div>
    </div>
</div>
````


````js
var Carousel = require('arale-switchable').Carousel;
var $ = require('jquery');

var panelLength = $('#carousel-demo-1 .ui-switchable-panel').length;
new Carousel({
    element: '#carousel-demo-1',
    hasTriggers: false,
    easing: 'easeOutStrong',
    effect: 'scrollx',
    step: panelLength/(panelLength - 2),
    viewSize: [232],
    circular: false,
    autoplay: true
}).render();
````

## 使用 Carousel 实现的 Slide

````css
#carousel-demo-2 {
    position: relative;
    width: 740px;
    height: 120px;
}
#carousel-demo-2 .ui-switchable-prev-btn, #carousel-demo-2 .ui-switchable-next-btn {
    position: absolute;
    top: -30px;
    color: #666;
    cursor: pointer;
}
#carousel-demo-2 .ui-switchable-prev-btn {
    left: 10px;
}
#carousel-demo-2 .ui-switchable-next-btn {
    right: 10px;
}
#carousel-demo-2 .ui-switchable-disabled-btn {
    color: #ddd;
    cursor: default;
}

#carousel-demo-2 .scroller {
    width: 740px;
    height: 200px;
    overflow: hidden;
}
#carousel-demo-2 .scroller .ui-switchable-content {
    padding: 0;
    margin: 0;
}
#carousel-demo-2 .scroller .ui-switchable-content img {
    float: left;
    display: block;
    width: 740px;
    height: 120px;
}
#carousel-demo-2 .ui-switchable-nav {
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin: 0;
    padding: 0;
    z-index: 99;
    font-size: 12px;
}
#carousel-demo-2 .ui-switchable-nav .ui-switchable-trigger {
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
#carousel-demo-2 .ui-switchable-nav .ui-switchable-active {
    color: #FFF;
    background-color: #e96c3e;
    opacity: 1;
    filter: alpha(opacity=100);
}
````

````html
<div id="carousel-demo-2" class="carousel-demo">
    <span class="ui-switchable-prev-btn" data-role="prev">&lsaquo; 上一页</span>
    <span class="ui-switchable-next-btn" data-role="next">下一页 &rsaquo;</span>
    <div class="scroller">
        <div class="ui-switchable-content" data-role="content">
            <img src="./assets/slide_1.jpg" alt="" class="ui-switchable-panel">
            <img src="./assets/slide_2.jpg" alt="" class="ui-switchable-panel">
            <img src="./assets/slide_2.jpg" alt="" class="ui-switchable-panel">
            <img src="./assets/slide_2.jpg" alt="" class="ui-switchable-panel">
            <img src="./assets/slide_3.jpg" alt="" class="ui-switchable-panel">
        </div>
    </div>
</div>
````


````js
var Carousel = require('arale-switchable').Carousel;
new Carousel({
    element: '#carousel-demo-2',
    easing: 'easeOutStrong',
    effect: 'scrollx',
    autoplay: true
}).render();
````
