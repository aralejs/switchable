# Carousel

- order: 6

---


<h2>Carousel - 旋转木马</h2>

调整 step 和 viewSize 的情况. step 为步长, 即每切换一次, 移动多少个 panels. 而 viewSize 为滑动窗口的大小, 一般为 panels 的整数倍.
另外, viewSize 默认是自动计算, 但有时设置不准确, 特别是 panels 和容器设置了乱七八糟的 padding 时. 所以这是需要手工指定 viewSize.


<style>
    .scrollable {
        position: relative;
        width: 794px;
        margin: 40px 0;
    }
    .scrollable .prev, .scrollable .next {
        position: absolute;
        top: -30px;
        color: #666;
        cursor: pointer;
    }
    .scrollable .prev { 
        left: 10px; 
    }
    .scrollable .next { right: 10px; }
    .scrollable .disable { color: #ddd; cursor: default; }

    .scroller {
        width: 792px;
        height: 120px;
        border: 1px solid #ccc;
        background-color: #F9F9F9;
        overflow: hidden;
    }
    .scroller .ui-switchable-content {
        padding: 20px 0;
        height: 81px;
    }
    .scroller .ui-switchable-content img {
        float: left;
        width: 360px;
        height: 75px;
        padding: 2px;
        margin: 0 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        display: inline !important; /* fix ie6 双边距 bug */
    }
</style>


<div id="demo4" class="section scrollable">
    <span id="scroller-prev" class="prev" data-role="prev">&lsaquo; 上一页</span>
    <span id="scroller-next" class="next" data-role="next">下一页 &rsaquo;</span>
    <div class="scroller">
        <div class="ui-switchable-content" data-role="content">
            <img src="https://i.alipayobjects.com/e/201306/SzpUxptFt.png" alt="" class="ui-switchable-panel">
            <img src="https://i.alipayobjects.com/e/201306/SzpaKukGz.png" alt="" class="ui-switchable-panel">
            <img src="https://i.alipayobjects.com/e/201306/SzpBApQi5.png" alt="" class="ui-switchable-panel">
        </div>
    </div>
</div>



````javascript
seajs.use(['carousel', '$'], function(Carousel, $) {
    carousel = new Carousel({
        element: '#demo4',
        panels: '#demo4 .ui-switchable-content img',
        //triggers: '#demo4 .ui-switchable-nav li',
        hasTriggers: false,
        easing: 'easeOutStrong',
        effect: 'scrollx',
        step: 2,
        viewSize: [396],
        circular: false,
        autoplay: true,
        prevBtn: '#scroller-prev',
        nextBtn: '#scroller-next'
    }).render();
});


````