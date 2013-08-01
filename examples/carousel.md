# Carousel

- order: 5

---


<h2>Carousel - 旋转木马</h2>

调整 step 和 viewSize 的情况. step 为步长, 即每切换一次, 移动多少个 panels. 而 viewSize 为滑动窗口的大小, 一般为 panels 的整数倍.
另外, viewSize 默认是自动计算, 但有时设置不准确, 特别是 panels 和容器设置了乱七八糟的 padding 时. 所以这是需要手工指定 viewSize.


````css
    #carousel-demo-1 {
        position: relative;
        width: 664px;
        margin: 40px 0 20px;
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
<div id="carousel-demo-1">
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


````js
seajs.use(['carousel', '$'], function(Carousel, $) {
    carousel = new Carousel({
        element: '#carousel-demo-1',
        hasTriggers: false,
        easing: 'easeOutStrong',
        effect: 'scrollx',
        step: 2,
        viewSize: [332],
        circular: false,
        autoplay: true
    }).render();
});

````