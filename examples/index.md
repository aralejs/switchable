# 基本用法

- order: 1

---

<style>
    .loading { background: #EBF5FA url(assets/loading.gif) no-repeat 50% 50%; }
</style>

<h2>Tabs - 普通标签页</h2>
<style>
    .ui-switchable * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #demo1 { position: relative; width: 750px; padding-top: 29px; }
    #demo1 .ui-switchable-nav { position: absolute; left: 20px; margin-top: -29px; z-index: 99;list-style-type: none; }
    #demo1 .ui-switchable-nav li {
        float: left;
        width: 130px;
        height: 27px;
        line-height: 21px;
        text-align: center;
        background: url(assets/tabs-sprite.gif) no-repeat 0 6px;
        margin-right: 3px;
        padding-top: 8px;
        cursor: pointer;
    }
    #demo1 .ui-switchable-nav li.ui-switchable-active { background-position: 0 -40px; cursor: default; }
    #demo1 .ui-switchable-content {
        position: relative;
        height: 120px;
        padding: 20px;
        border: 1px solid #AEC7E5;
    }
</style>

<div id="demo1" class="section">
    <ul class="ui-switchable-nav">
        <li>标题 A</li>
        <li>标题 B</li>
        <li>标题 C</li>
        <li>标题 D</li>
        <li>标题 E</li>
    </ul>
    <div class="ui-switchable-content">
        <div>内容 A</div>
        <div style="display: none">内容 B</div>
        <div style="display: none">内容 C</div>
        <div style="display: none">内容 D</div>
        <div style="display: none">内容 E</div>
    </div>
</div>

````javascript
seajs.use(['tabs', '$'], function(Tabs, $) {
    tabs = new Tabs({
    element: '#demo1',
        triggers: '#demo1 .ui-switchable-nav li',
        panels: '#demo1 .ui-switchable-content div',
        activeIndex: 2,
        effect: 'fade'
    }).render();
});
````

<h2>Slide - 卡盘</h2>
<style>
    #demo2 { position: relative; width: 710px; height: 176px; border: 1px solid #B6D1E6; overflow: hidden; }
    #demo2 .ui-switchable-nav { position: absolute; bottom: 5px; right: 5px; z-index: 99; }
    #demo2 .ui-switchable-nav li {
        float: left;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-left: -1px;
        background-color: #FCF2CF;
        border: 1px solid #F47500;
        color: #D94B01;
        text-align: center;
        cursor: pointer;
    }
    #demo2 .ui-switchable-nav li.ui-switchable-active {
        width: 18px;
        height: 18px;
        line-height: 18px;
        margin-top: -1px;
        color: #FFF;
        background-color: #FFB442;
        font-weight: bold;
    }
    #demo2 .ui-switchable-content li { height: 176px; width: 710px; overflow: hidden; }
    /* for countdown plugin */
    #demo2 .ui-switchable-nav li,
    #demo2 .ui-switchable-trigger-content {
        position: relative;
    }
    #demo2 .ui-switchable-trigger-mask {
        position: absolute;
        right: 0;
        width: 18px;
        height: 18px;
        background-color: #FF9415;
        visibility: hidden
    }
    #demo2 .ui-switchable-active .ui-switchable-trigger-mask {
        visibility: visible
    }
</style>
<div id="demo2" class="section loading">
    <ol class="ui-switchable-content">
        <li><a href="http://fun.alipay.com/buy/index.htm?src=5buy03" target="_blank"><img alt="" src="https://i.alipayobjects.com/e/201205/2lOsygtTn7.jpg"/></a></li>
        <li class="hidden"><a target="_blank" href="http://fun.alipay.com/hkwhb/index.htm?_adType=aedacbacdeajaefcehdg"><img alt="" width="710" height="175" border="0" src="https://i.alipayobjects.com/e/201205/3H1Kii949r.jpg"/></a></li>
        <li class="hidden"><a target="_blank" href="http://fun.alipay.com/lvmama/index.htm"><img alt="" width="710" height="175" border="0" src="https://i.alipayobjects.com/e/201206/2muugwqegL.png"/></a></li>
        <li class="hidden"><a href="http://fun.alipay.com/sj/index.htm" target="_blank"><img alt="" src="https://i.alipayobjects.com/e/201205/37t81c9HYx.jpg"/></a></li>
        <li class="hidden">
            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="710" height="175" class="holiday-logo">
                <param name="movie" value="http://img04.taobaocdn.com/tps/i4/T1bblrXfBrXXXXXXXX.swf"/>
                <param name="quality" value="high"/>
                <param name="swfversion" value="8.0.0"/>
                <param name="wmode" value="opaque"/>
                <object type="application/x-shockwave-flash" data="http://img04.taobaocdn.com/tps/i4/T1bblrXfBrXXXXXXXX.swf" width="470" height="150" name="holiday-logo" class="holiday-logo">
                    <param name="wmode" value="opaque"/>
                </object>
            </object>
        </li>
    </ol>
</div>

````javascript
seajs.use(['slide', '$'], function(Slide, $) {
    slide1 = new Slide({
        element: '#demo2',
        panels: '#demo2 .ui-switchable-content li',
        effect: 'fade',
        easing: 'easeOutStrong',
        interval: 2000
    }).render();
});
````

<h2>Slide - 有啊首页卡盘</h2>
<style>
    #demo3 {
        position: relative;
        width: 515px;
        height: 220px;
        border: 1px solid #D3D2D2;
        padding: 1px;
        overflow: hidden;
    }
    #demo3 .yslider-stick {
        position: absolute;
        top: 0;
        right: 0;
        width: 106px;
        font-size: 14px;
        background: #fff;
        margin: 1px;
        z-index: 99;
    }
    #demo3 .yslider-stick li {
        border-bottom: 1px solid #EDEDED;
    }
    #demo3 .yslider-stick li a {
        display: block;
        text-indent: 15px;
        padding: 8px 5px;
        color: #666;
    }
    #demo3 .yslider-stick li.ui-switchable-active {
        background-color: #C8282B;
    }
    #demo3 .yslider-stick li.ui-switchable-active a {
        color: #fff;
        border-left: 3px solid #B30024;
    }
    #demo3 .yslider-stage {
        height: 220px;
        width: 405px;
    }
</style>

<div id="demo3" class="section" data-widget="slide" data-delay="200" data-effect="fade" data-easing="easeBoth" data-duration="200" data-autoplay="false">
    <div class="yslider-stage" data-role="content">
        <p><a href="http://co.youa.baidu.com/content/promo/zhongjimiaoshazong/index.html" target="_blank"><img width="405" height="220" alt="终极秒杀场" src="http://co.youa.baidu.com/picture/r/image/2009-12-25/236d430f443d05925ad7291d9ad6b560.jpg"/></a></p>
        <p><a href="http://youa.baidu.com/zc" target="_blank"><img width="405" height="220" alt="9折话费" src="http://co.youa.baidu.com/picture/r/image/2009-12-25/4b2e801b6d174648ec77678d4a9f32e8.jpg"/></a></p>
        <p><a href="http://co.youa.baidu.com/content/lottery/chrislotact/index.html?c=676" target="_blank"><img  width="405" height="220" alt="彩票大派送" src="http://co.youa.baidu.com/picture/r/image/2009-12-21/eb76df2598316e6b5e52cd94ae2e3f1b.jpg"/></a></p>
        <p><a href="http://co.youa.baidu.com/content/promo/nianzhongjihe/index.html" target="_blank"><img  width="405" height="220" alt="限量抢购" src="http://co.youa.baidu.com/picture/r/image/2009-12-25/cc60334e6a75fab260e680cfc2b35ea7.jpg"/></a></p>
        <p><a href="http://youa.baidu.com/shop/3710a13d15c375285841ef08/tab/0344b67328e77dc92132cad9" target="_blank"><img  width="405" height="220" alt="周末购" src="http://co.youa.baidu.com/picture/r/image/2009-12-27/74538ac61dc0836f5d40d29b181868fc.jpg"/></a></p>
        <p><a href="http://co.youa.baidu.com/content/promo/xmas09/index.html?c=740" target="_blank"><img  width="405" height="220" alt="年终风暴" src="http://co.youa.baidu.com/picture/r/image/2009-12-23/d69f75d92daf625053bd0f92f2b5e586.jpg"/></a></p>
    </div>
    <ul class="yslider-stick" data-role="nav">
        <li class="selected"><a href="http://co.youa.baidu.com/content/promo/xmas09/index.html?c=740" target="_blank">年终风暴</a></li>
        <li><a href="http://co.youa.baidu.com/content/promo/zhongjimiaoshazong/index.html" target="_blank">终极秒杀场</a></li>
        <li><a href="http://youa.baidu.com/zc" target="_blank">9折话费</a></li>
        <li><a href="http://co.youa.baidu.com/content/lottery/chrislotact/index.html?c=676" target="_blank">彩票大派送</a></li>
        <li><a href="http://co.youa.baidu.com/content/promo/nianzhongjihe/index.html" target="_blank">限量抢购</a></li>
        <li><a href="http://youa.baidu.com/shop/3710a13d15c375285841ef08/tab/0344b67328e77dc92132cad9" target="_blank">周末购</a></li>
    </ul>
</div>

````javascript
seajs.use(['slide', '$'], function(Slide, $) {
    slide2 = new Slide({
        element: '#demo3',
        panels: '#demo3 .yslider-stage p',
        triggers: '#demo3 .yslider-stick li',
        effect: 'fade',
        easing: 'easeBoth',
        interval: 200,
        autoplay: false
    }).render();
});
````

<h2>Carousel - 旋转木马</h2>
<style>
    .scrollable {
        position: relative;
        width: 820px;
    }
    .scrollable .prev, .scrollable .next {
        position: absolute;
        top: 50px;
        color: #666;
        cursor: pointer;
    }
    .scrollable .prev { 
        left: 10px; 
    }
    .scrollable .next { right: 10px; }
    .scrollable .disable { color: #ddd; cursor: default; }
    .scrollable .ui-switchable-nav {
        position: absolute;
        right: 30px;
        top: -20px;
    }
    .scrollable .ui-switchable-nav li {
        float: left;
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
    }
    .scrollable .ui-switchable-nav li.ui-switchable-active {
        color: #C8282B;
    }
    .scroller {
        position: relative;
        width: 680px;
        height: 120px;
        border: 1px solid #ccc;
        background-color: #F9F9F9;
        margin: auto;
        overflow: hidden;
    }
    .scroller .ui-switchable-content img {
        float: left;
        width: 100px;
        height: 75px;
        padding: 2px;
        margin: 20px 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        display: inline !important; /* fix ie6 双边距 bug */
    }
</style>
<div id="demo4" class="section scrollable" data-widget="carousel" data-effect="scrollx" data-easing="easeOutStrong" data-step="5" data-view-size="[680]" data-circular="true">
    <span id="scroller-prev" class="prev" data-role="prev">&lsaquo; 上一页</span>
    <span id="scroller-next" class="next" data-role="next">下一页 &rsaquo;</span>
    <div class="scroller">
        <div class="ui-switchable-content" data-role="content">
            <img alt="" src="http://farm1.static.flickr.com/143/321464099_a7cfcb95cf_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3089/2796719087_c3ee89a730_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/79/244441862_08ec9b6b49_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/28/66523124_b468cf4978_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/164/399223606_b875ddf797_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/163/399223609_db47d35b7c_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/135/321464104_c010dbf34c_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/40/117346184_9760f3aabc_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/153/399232237_6928a527c1_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/50/117346182_1fded507fa_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3629/3323896446_3b87a8bf75_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3023/3323897466_e61624f6de_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3650/3323058611_d35c894fab_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3635/3323893254_3183671257_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3624/3323893148_8318838fbd_t.jpg"/>
        </div>
        <ul class="ui-switchable-nav" data-role="nav">
            <li class="ui-switchable-active">&bull;</li>
            <li>&bull;</li>
            <li>&bull;</li>
        </ul>
    </div>
</div>

````javascript
seajs.use(['carousel', '$'], function(Carousel, $) {
    carousel = new Carousel({
        element: '#demo4',
        panels: '#demo4 .ui-switchable-content img',
        triggers: '#demo4 .ui-switchable-nav li',
        easing: 'easeOutStrong',
        effect: 'scrollx',
        step: 5,
        viewSize: [680],
        circular: true,
        prevBtn: '#scroller-prev',
        nextBtn: '#scroller-next'
    }).render();
});
````

<h2>Slide - 有啊滚动新闻条</h2>
<style>
    .scroll-news { height: 20px; overflow: hidden; }
    .scroll-news a { color: #FF7E00; }
</style>
<div id="demo5" class="scroll-news">
    <ul class="news-items">
        <li><a target="_blank" href="http://youa.baidu.com/shop/72e01b38fb26b4ebc5db0136">“一分钱”轻松体验有啊网购流程</a></li>
        <li><a target="_blank" href="http://co.youa.baidu.com/content/payhelp/b12/zhaoshang/">开通网银，百付宝为您一路护航</a></li>
        <li><a target="_blank" href="http://co.youa.baidu.com/picture/r/mall/guide/index.html">新手买家？帮助教程带您走通有啊</a></li>
        <li><a target="_blank" href="http://youa.baidu.com/static/help/quality_form_build.html">尽情挥洒你的创意，共建百度有啊</a></li>
        <li><a target="_blank" href="http://co.youa.baidu.com/content/help/A10/2008-09-06/153433185574.html">认准标识，精选实力卖家任您选择</a></li>
        <li><a target="_blank" href="http://co.youa.baidu.com/content/help/A3/2/2008-09-01/143723181295.html#10">收藏</a> + <a target="_blank" href="http://co.youa.baidu.com/content/help/A3/2009-01-08/112820209991.html">购物车</a>，逛街搜店更便捷</li>
    </ul>
</div>

````javascript
seajs.use(['slide', '$'], function(Slide, $) {
    slide3 = new Slide({
        element: '#demo5',
        panels: '#demo5 .news-items li',
        hasTriggers: false, 
        easing: 'easeOutStrong',
        duration: 2000
    }).render();
});
````

<h2>Accordion - 手风琴</h2>
<style>
    #accordion1 {width:300px;border:1px solid #ccc;}
    #accordion1 .ui-switchable-trigger{padding:3px 10px;cursor:pointer;border-bottom:1px solid #ddd;background:#f3f3f3;overflow:hidden; height: 18px;}
    #accordion1 .ui-switchable-trigger h3{float: left; width: 100px; margin-left: 5px; }
    #accordion1 .ui-switchable-panel{height:150px;padding:3px 10px;border-bottom:1px solid #ddd;}
    #accordion1 .ui-icon{float:left;width:12px;height:12px;overflow:hidden;margin-top:2px;font-size:0;vertical-align:middle;background:url(assets/accordion-sprite.png) no-repeat 0 0;}
    #accordion1 .ui-switchable-active .ui-icon{background-position:-20px 0;}
    #accordion1 .last-trigger { border-bottom-width: 0 }
    #accordion1 .ui-switchable-active { border-bottom-width: 1px }
    #accordion1 .last-panel { border-bottom: none }
</style>
<div id="accordion1" class="section">
    <div class="ui-switchable-trigger ui-switchable-active"><i class="ui-icon"></i><h3>标题A</h3></div>
    <div class="ui-switchable-panel">
        1、支持鼠标滑过和点击触点两种方式<br/>
        2、支持同时展开多个面板
    </div>
    <div class="ui-switchable-trigger"><i class="ui-icon"></i><h3>标题B</h3></div>
    <div class="ui-switchable-panel" style="display:none;" data-role="panel">内容B<br/>内容B<br/>内容B</div>
    <div class="ui-switchable-trigger"><i class="ui-icon"></i><h3>标题C</h3></div>
    <div class="ui-switchable-panel" style="display:none;">内容C<br/>内容C<br/>内容C<br/>内容C<br/>内容C</div>
    <div class="ui-switchable-trigger last-trigger"><i class="ui-icon"></i><h3>标题D</h3></div>
    <div class="ui-switchable-panel last-panel" style="display:none;">内容D<br/>内容D<br/>内容D</div>
</div>

````javascript
seajs.use(['accordion', '$'], function(Accordion, $) {
    accordion = new Accordion({
        element: '#accordion1',
        triggers: $('#accordion1 .ui-switchable-trigger'),
        panels: $('#accordion1 .ui-switchable-panel')
    }).render();
});
````

<h2>超大轮播</h2>
<style>
    #big { position: relative; border: 1px solid #B6D1E6; overflow: hidden; }
    #big .ui-switchable-nav { position: absolute; bottom: 5px; right: 5px; z-index: 99; }
    #big .ui-switchable-nav li {
        float: left;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-left: 3px;
        background-color: #FCF2CF;
        border: 1px solid #F47500;
        color: #D94B01;
        text-align: center;
        cursor: pointer;
    }
    #big .ui-switchable-nav li.ui-switchable-active {
        width: 18px;
        height: 18px;
        line-height: 18px;
        margin-top: -1px;
        color: #FFF;
        background-color: #FFB442;
        font-weight: bold;
    }
</style>
<div id="big" class="section" style="height:450px;">
    <ul class="ui-switchable-content">
        <li><a href="http://item.taobao.com/item.htm?id=7002076261" style="height:450px;" target="_blank"><img src="http://img02.taobaocdn.com/imgextra/i2/438942225/T27Z0bXeRdXXXXXXXX_!!438942225.jpg" alt=""/></a></li>
        <li><a href="http://gearband.tmall.com/view_page-74632436.htm" style="height:450px;" target="_blank"><img src="http://img03.taobaocdn.com/imgextra/i3/438942225/T2eMBHXkFaXXXXXXXX_!!438942225.jpg" alt=""/></a></li>
    </ul>
</div>

````javascript
seajs.use(['slide'], function(Slide) {
    slide4 = new Slide({
        element: '#big',
        panels: '#big .ui-switchable-content li',
        effect: 'fade'
    }).render();
});
````

