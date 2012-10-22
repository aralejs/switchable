define("#switchable/0.9.10/accordion-debug", ["./switchable-debug", "#jquery/1.7.2/jquery-debug", "#easing/1.0.0/easing-debug", "#widget/1.0.0/widget-debug", "#base/1.0.0/base-debug", "#class/1.0.0/class-debug", "#events/1.0.0/events-debug"], function(require, exports, module) {

    var Switchable = require('./switchable-debug');


    // 手风琴组件
    var Accordion = Switchable.extend({

        attrs: {
            triggerType: 'click',

            // 是否运行展开多个
            multiple: false
        }
    });

    module.exports = Accordion;

});
