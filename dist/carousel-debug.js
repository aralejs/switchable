define("arale/switchable/0.9.12/carousel-debug", [ "./switchable-debug", "$-debug", "arale/easing/1.0.0/easing-debug", "arale/widget/1.0.3/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug" ], function(require, exports, module) {
    var Switchable = require("./switchable-debug");
    var $ = require("$-debug");
    // 旋转木马组件
    module.exports = Switchable.extend({
        attrs: {
            circular: true,
            prevBtn: {
                getter: function(val) {
                    return $(val).eq(0);
                }
            },
            nextBtn: {
                getter: function(val) {
                    return $(val).eq(0);
                }
            },
            _isNext: false
        },
        _parseRole: function(role) {
            role = Switchable.prototype._getDatasetRole.call(this) || {};
            role = this._getDatasetRole(role);
            Switchable.prototype._parseRole.call(this, role);
            // var role = this.dataset && this.dataset.role;
            if (!role) return;
            // attr 里没找到时，才根据 data-role 来解析
            var prevBtn = this.get("prevBtn");
            var nextBtn = this.get("nextBtn");
            if (!prevBtn[0] && role.prev) {
                prevBtn = role.prev;
                this.set("prevBtn", prevBtn);
            }
            if (!nextBtn[0] && role.next) {
                nextBtn = role.next;
                this.set("nextBtn", nextBtn);
            }
            prevBtn.addClass(this.CONST.PREV_BTN_CLASS);
            nextBtn.addClass(this.CONST.NEXT_BTN_CLASS);
        },
        _getDatasetRole: function(role) {
            var isHaveRole = false;
            var element = this.element;
            var roles = [ "next", "prev" ];
            $.each(roles, function(index, key) {
                var elems = $("[data-role=" + key + "]", element);
                if (elems.length) {
                    role[key] = elems;
                    isHaveRole = true;
                }
            });
            if (!isHaveRole) return null;
            return role;
        },
        _initTriggers: function() {
            Switchable.prototype._initTriggers.call(this);
            var that = this;
            var circular = this.get("circular");
            this.get("prevBtn").click(function(ev) {
                ev.preventDefault();
                if (circular || that.get("activeIndex") > 0) {
                    that.set("_isNext", false);
                    that.prev();
                }
            });
            this.get("nextBtn").click(function(ev) {
                ev.preventDefault();
                var len = that.get("length") - 1;
                if (circular || that.get("activeIndex") < len) {
                    that.set("_isNext", true);
                    that.next();
                }
            });
            // 注册 switch 事件，处理 prevBtn/nextBtn 的 disable 状态
            // circular = true 时，无需处理
            if (!circular) {
                this.on("switch", function(toIndex) {
                    that._updateButtonStatus(toIndex);
                });
            }
        },
        _updateButtonStatus: function(toIndex) {
            var prevBtn = this.get("prevBtn");
            var nextBtn = this.get("nextBtn");
            prevBtn.removeClass(this.CONST.DISABLED_BTN_CLASS);
            nextBtn.removeClass(this.CONST.DISABLED_BTN_CLASS);
            if (toIndex === 0) {
                prevBtn.addClass(this.CONST.DISABLED_BTN_CLASS);
            } else if (toIndex === this.get("length") - 1) {
                nextBtn.addClass(this.CONST.DISABLED_BTN_CLASS);
            }
        }
    });
});