define(function(require, exports, module) {

    // 内部默认的 className
  
    module.exports = function(classPrefix){
        return {
            UI_SWITCHABLE: classPrefix || '',
            NAV_CLASS: classPrefix ? classPrefix + '-nav' : '',
            CONTENT_CLASS: classPrefix ? classPrefix + '-content' : '',
            TRIGGER_CLASS: classPrefix ? classPrefix + '-trigger' : '',
            PANEL_CLASS: classPrefix ? classPrefix + '-panel' : '',
            PREV_BTN_CLASS: classPrefix ? classPrefix + '-prev-btn' : '',
            NEXT_BTN_CLASS: classPrefix ? classPrefix + '-next-btn' : ''
       }
    };
});
