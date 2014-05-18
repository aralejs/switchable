# History

---

## 1.1.0

`tag:changed` 迁移 spm@3.x

## 1.0.3

`tag:changed` [#40](https://github.com/aralejs/switchable/issues/40) data-switchable-role 应该换成 data-role 暂时先改回来.


## 1.0.2

`tag:improved` 有些地方 `$(selector, element)` 改成 `this.$(selector)`, 查找当前 element 下的元素

`tag:changed` [#32](https://github.com/aralejs/switchable/issues/32) data-role 应该换成 data-switchable-role

`tag:fixed` [#33](https://github.com/aralejs/switchable/issues/33) Effect width max value in 360.

## 1.0.1

`tag:fixed` [#29](https://github.com/aralejs/switchable/issues/29) 循环切换首个到末个时, 无须经过中间 panel , 而应直接切换.

`tag:fixed` [#28](https://github.com/aralejs/switchable/issues/28) Effect width max value.

## 1.0.0

`tag:fixed` [#20](https://github.com/aralejs/switchable/issues/20) Circular bugfix.

`tag:changed` 去除配置项 pauseOnHover, pauseOnScroll.

`tag:changed` 去除 obj.triggers/obj.panels, 以 obj.get('triggers')/obj.get('panels') 取代之

`tag:changed` 去除 new Obj() 之后的 render(). 对于 Switchable 来说, 不需要手工调用 render(), 直接 new 完就是初始状态.
不过如果用户再次调用 render(), 也没关系. render 中有判断是否已经 render 过, 也不会重复绑定事件和插入 DOM

## 0.9.15

`tag:improved` 升级 arale/widget@1.1.1

## 0.9.14

`tag:improved` 对 arale/widget 的依赖从 1.0.3 升级到 1.1.0 。

## 0.9.12

`tag:fixed` [#9](https://github.com/aralejs/switchable/issues/9) Carousel 上页滚屏的时候出现空白页。

`tag:fixed` [#10](https://github.com/aralejs/switchable/issues/10) className 可以通过配置取消。

`tag:improved` 依赖升级到 arale.widget@1.0.3 。

