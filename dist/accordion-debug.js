define("arale/switchable/0.9.12/accordion-debug", [ "./switchable-debug", "$-debug", "arale/easing/1.0.0/easing-debug", "arale/widget/1.0.3/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug" ], function(require, exports, module) {
    var Switchable = require("./switchable-debug");
    // 手风琴组件
    var Accordion = Switchable.extend({
        attrs: {
            triggerType: "click",
            // 是否运行展开多个
            multiple: false
        }
    });
    module.exports = Accordion;
});