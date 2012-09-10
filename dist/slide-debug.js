define("#switchable/0.9.10/slide-debug", ["./switchable-debug", "#jquery/1.7.2/jquery-debug", "#easing/1.0.0/easing-debug", "#widget/1.0.0/widget-debug", "#base/1.0.0/base-debug", "#class/1.0.0/class-debug", "#events/1.0.0/events-debug"], function(require, exports, module) {
    var Switchable = require('./switchable-debug');

    // 卡盘轮播组件
    module.exports = Switchable.extend({
        attrs: {
            autoplay: true,
            circular: true
        }
    });
});
