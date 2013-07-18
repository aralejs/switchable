define(function (require, exports, module) {

    var Switchable = require('./switchable');


    // 手风琴组件
    var Accordion = Switchable.extend({

        attrs: {
            triggerType: 'click',

            // 是否运行展开多个
            multiple: false
        },
        switchTo: function (toIndex) {
            this._switchTo(toIndex, toIndex);
        },

        _switchTrigger: function (toIndex) {
            this.get('triggers').eq(toIndex).toggleClass(this.get('activeTriggerClass'));
        },


        _switchPanel: function (panelInfo) {
            panelInfo.toPanels.toggle();
        }
    });

    module.exports = Accordion;

});
