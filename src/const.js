define(function(require, exports, module) {

    // 内部默认的 className
  
    module.exports = function(classPrefix){
        return {
            UI_SWITCHABLE: classPrefix,
            NAV_CLASS: classPrefix + '-nav',
            CONTENT_CLASS: classPrefix + '-content',
            TRIGGER_CLASS: classPrefix + '-trigger',
            PANEL_CLASS: classPrefix + '-panel',
            ACTIVE_CLASS: classPrefix + '-active',
            PREV_BTN_CLASS: classPrefix + '-prev-btn',
            NEXT_BTN_CLASS: classPrefix + '-next-btn',
            DISABLED_BTN_CLASS: classPrefix + '-disabled-btn'
       }
    };
});
