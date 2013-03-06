define("arale/switchable/0.9.12/slide-debug", [ "./switchable-debug", "$-debug", "arale/easing/1.0.0/easing-debug", "arale/widget/1.0.3/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug" ], function(require, exports, module) {
    var Switchable = require("./switchable-debug");
    // 卡盘轮播组件
    module.exports = Switchable.extend({
        attrs: {
            autoplay: true,
            circular: true
        }
    });
});