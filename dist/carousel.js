define("#switchable/0.9.5/carousel",["./switchable","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#base/0.9.16/aspect","#base/0.9.16/attribute","#events/0.9.1/events","#class/0.9.2/class"],function(require,exports,module){var Switchable=require("./switchable"),$=require("#jquery/1.7.2/jquery"),CONST=require("./const");module.exports=Switchable.extend({attrs:{circular:!0,prevBtn:{getter:function(val){return $(val).eq(0)}},nextBtn:{getter:function(val){return $(val).eq(0)}}},_parseRole:function(){Switchable.prototype._parseRole.call(this);var role=this.dataset.role;if(!role)return;var prevBtn=this.get("prevBtn"),nextBtn=this.get("nextBtn");!prevBtn[0]&&role.prev&&(prevBtn=this.$(role.prev),this.set("prevBtn",prevBtn)),!nextBtn[0]&&role.next&&(nextBtn=this.$(role.next),this.set("nextBtn",nextBtn)),prevBtn.addClass(CONST.PREV_BTN_CLASS),nextBtn.addClass(CONST.NEXT_BTN_CLASS)},_initTriggers:function(){Switchable.prototype._initTriggers.call(this);var that=this,circular=this.get("circular");this.get("prevBtn").click(function(ev){ev.preventDefault(),(circular||that.get("activeIndex")>0)&&that.prev()}),this.get("nextBtn").click(function(ev){ev.preventDefault();var len=that.get("length")-1;(circular||that.get("activeIndex")<len)&&that.next()}),circular||this.on("switch",function(toIndex){that._updateButtonStatus(toIndex)})},_updateButtonStatus:function(toIndex){var prevBtn=this.get("prevBtn"),nextBtn=this.get("nextBtn");prevBtn.removeClass(CONST.DISABLED_BTN_CLASS),nextBtn.removeClass(CONST.DISABLED_BTN_CLASS),toIndex===0?prevBtn.addClass(CONST.DISABLED_BTN_CLASS):toIndex===this.get("length")-1&&nextBtn.addClass(CONST.DISABLED_BTN_CLASS)}})});