/*! jQRangeSlider 5.0.1 - 2013-03-07 - Copyright (C) Guillaume Gautreau 2012 - MIT and GPLv3 licenses.*/(function(t){"use strict";t.widget("ui.rangeSliderMouseTouch",t.ui.mouse,{_mouseInit:function(){var i=this;t.ui.mouse.prototype._mouseInit.apply(this),this._mouseDownEvent=!1,this.element.bind("touchstart."+this.widgetName,function(t){return i._touchStart(t)})},_mouseDestroy:function(){t(document).unbind("touchmove."+this.widgetName,this._touchMoveDelegate).unbind("touchend."+this.widgetName,this._touchEndDelegate),t.ui.mouse.prototype._mouseDestroy.apply(this)},_touchStart:function(i){i.which=1,i.preventDefault(),this._fillTouchEvent(i);var e=this,s=this._mouseDownEvent;this._mouseDown(i),s!==this._mouseDownEvent&&(this._touchEndDelegate=function(t){e._touchEnd(t)},this._touchMoveDelegate=function(t){e._touchMove(t)},t(document).bind("touchmove."+this.widgetName,this._touchMoveDelegate).bind("touchend."+this.widgetName,this._touchEndDelegate))},_touchEnd:function(i){this._fillTouchEvent(i),this._mouseUp(i),t(document).unbind("touchmove."+this.widgetName,this._touchMoveDelegate).unbind("touchend."+this.widgetName,this._touchEndDelegate),this._mouseDownEvent=!1,t(document).trigger("mouseup")},_touchMove:function(t){return t.preventDefault(),this._fillTouchEvent(t),this._mouseMove(t)},_fillTouchEvent:function(t){var i;i=t.targetTouches===undefined&&t.changedTouches===undefined?t.originalEvent.targetTouches[0]||t.originalEvent.changedTouches[0]:t.targetTouches[0]||t.changedTouches[0],t.pageX=i.pageX,t.pageY=i.pageY}})})(jQuery),function(t){"use strict";t.widget("ui.rangeSliderDraggable",t.ui.rangeSliderMouseTouch,{cache:null,options:{containment:null},_create:function(){setTimeout(t.proxy(this._initElement,this),10)},_initElement:function(){this._mouseInit(),this._cache()},_setOption:function(i,e){"containment"===i&&(this.options.containment=null===e||0===t(e).length?null:t(e))},_mouseStart:function(t){return this._cache(),this.cache.click={left:t.pageX,top:t.pageY},this.cache.initialOffset=this.element.offset(),this._triggerMouseEvent("mousestart"),!0},_mouseDrag:function(t){var i=t.pageX-this.cache.click.left;return i=this._constraintPosition(i+this.cache.initialOffset.left),this._applyPosition(i),this._triggerMouseEvent("sliderDrag"),!1},_mouseStop:function(){this._triggerMouseEvent("stop")},_constraintPosition:function(t){return 0!==this.element.parent().length&&null!==this.cache.parent.offset&&(t=Math.min(t,this.cache.parent.offset.left+this.cache.parent.width-this.cache.width.outer),t=Math.max(t,this.cache.parent.offset.left)),t},_applyPosition:function(t){var i={top:this.cache.offset.top,left:t};this.element.offset({left:t}),this.cache.offset=i},_cacheIfNecessary:function(){null===this.cache&&this._cache()},_cache:function(){this.cache={},this._cacheMargins(),this._cacheParent(),this._cacheDimensions(),this.cache.offset=this.element.offset()},_cacheMargins:function(){this.cache.margin={left:this._parsePixels(this.element,"marginLeft"),right:this._parsePixels(this.element,"marginRight"),top:this._parsePixels(this.element,"marginTop"),bottom:this._parsePixels(this.element,"marginBottom")}},_cacheParent:function(){if(null!==this.options.parent){var t=this.element.parent();this.cache.parent={offset:t.offset(),width:t.width()}}else this.cache.parent=null},_cacheDimensions:function(){this.cache.width={outer:this.element.outerWidth(),inner:this.element.width()}},_parsePixels:function(t,i){return parseInt(t.css(i),10)||0},_triggerMouseEvent:function(t){var i=this._prepareEventData();this.element.trigger(t,i)},_prepareEventData:function(){return{element:this.element,offset:this.cache.offset||null}}})}(jQuery),function(t){"use strict";t.widget("ui.rangeSlider",{options:{bounds:{min:0,max:100},defaultValues:{min:20,max:50},wheelMode:null,wheelSpeed:4,arrows:!0,valueLabels:"show",formatter:null,durationIn:0,durationOut:400,delayOut:200,range:{min:!1,max:!1},step:!1,scales:!1},_values:null,_valuesChanged:!1,bar:null,leftHandle:null,rightHandle:null,innerBar:null,container:null,arrows:null,labels:null,changing:{min:!1,max:!1},changed:{min:!1,max:!1},ruler:null,_create:function(){this._values={min:this.options.defaultValues.min,max:this.options.defaultValues.max},this.labels={left:null,right:null,leftDisplayed:!0,rightDisplayed:!0},this.arrows={left:null,right:null},this.changing={min:!1,max:!1},this.changed={min:!1,max:!1},this._createElements(),this._bindResize(),setTimeout(t.proxy(this.resize,this),1),setTimeout(t.proxy(this._initValues,this),1)},_bindResize:function(){var i=this;this._resizeProxy=function(t){i.resize(t)},t(window).resize(this._resizeProxy)},_initWidth:function(){this.container.css("width",this.element.width()-this.container.outerWidth(!0)+this.container.width()),this.innerBar.css("width",this.container.width()-this.innerBar.outerWidth(!0)+this.innerBar.width())},_initValues:function(){this.values(this._values.min,this._values.max)},_setOption:function(t,i){this._setWheelOption(t,i),this._setArrowsOption(t,i),this._setLabelsOption(t,i),this._setLabelsDurations(t,i),this._setFormatterOption(t,i),this._setBoundsOption(t,i),this._setRangeOption(t,i),this._setStepOption(t,i),this._setScalesOption(t,i)},_validProperty:function(t,i,e){return null===t||t[i]===undefined?e:t[i]},_setStepOption:function(t,i){"step"===t&&(this.options.step=i,this._leftHandle("option","step",i),this._rightHandle("option","step",i),this._changed(!0))},_setScalesOption:function(t,i){"scales"===t&&(i===!1||null===i?(this.options.scales=!1,this._destroyRuler()):i instanceof Array&&(this.options.scales=i,this._updateRuler()))},_setRangeOption:function(t,i){"range"===t&&(this._bar("option","range",i),this.options.range=this._bar("option","range"),this._changed(!0))},_setBoundsOption:function(t,i){"bounds"===t&&i.min!==undefined&&i.max!==undefined&&this.bounds(i.min,i.max)},_setWheelOption:function(t,i){("wheelMode"===t||"wheelSpeed"===t)&&(this._bar("option",t,i),this.options[t]=this._bar("option",t))},_setLabelsOption:function(t,i){if("valueLabels"===t){if("hide"!==i&&"show"!==i&&"change"!==i)return;this.options.valueLabels=i,"hide"!==i?(this._createLabels(),this._leftLabel("update"),this._rightLabel("update")):this._destroyLabels()}},_setFormatterOption:function(t,i){"formatter"===t&&null!==i&&"function"==typeof i&&(this.options.formatter=i,"hide"!==this.options.valueLabels&&(this._destroyLabels(),this._createLabels()))},_setArrowsOption:function(t,i){"arrows"!==t||i!==!0&&i!==!1||i===this.options.arrows||(i===!0?(this.element.removeClass("ui-rangeSlider-noArrow").addClass("ui-rangeSlider-withArrows"),this.arrows.left.css("display","block"),this.arrows.right.css("display","block"),this.options.arrows=!0):i===!1&&(this.element.addClass("ui-rangeSlider-noArrow").removeClass("ui-rangeSlider-withArrows"),this.arrows.left.css("display","none"),this.arrows.right.css("display","none"),this.options.arrows=!1),this._initWidth())},_setLabelsDurations:function(t,i){if("durationIn"===t||"durationOut"===t||"delayOut"===t){if(parseInt(i,10)!==i)return;null!==this.labels.left&&this._leftLabel("option",t,i),null!==this.labels.right&&this._rightLabel("option",t,i),this.options[t]=i}},_createElements:function(){"absolute"!==this.element.css("position")&&this.element.css("position","relative"),this.element.addClass("ui-rangeSlider"),this.container=t("<div class='ui-rangeSlider-container' />").css("position","absolute").appendTo(this.element),this.innerBar=t("<div class='ui-rangeSlider-innerBar' />").css("position","absolute").css("top",0).css("left",0),this._createHandles(),this._createBar(),this.container.prepend(this.innerBar),this._createArrows(),"hide"!==this.options.valueLabels?this._createLabels():this._destroyLabels(),this._updateRuler()},_createHandle:function(i){return t("<div />")[this._handleType()](i).bind("sliderDrag",t.proxy(this._changing,this)).bind("stop",t.proxy(this._changed,this))},_createHandles:function(){this.leftHandle=this._createHandle({isLeft:!0,bounds:this.options.bounds,value:this._values.min,step:this.options.step}).appendTo(this.container),this.rightHandle=this._createHandle({isLeft:!1,bounds:this.options.bounds,value:this._values.max,step:this.options.step}).appendTo(this.container)},_createBar:function(){this.bar=t("<div />").prependTo(this.container).bind("sliderDrag scroll zoom",t.proxy(this._changing,this)).bind("stop",t.proxy(this._changed,this)),this._bar({leftHandle:this.leftHandle,rightHandle:this.rightHandle,values:{min:this._values.min,max:this._values.max},type:this._handleType(),range:this.options.range,wheelMode:this.options.wheelMode,wheelSpeed:this.options.wheelSpeed}),this.options.range=this._bar("option","range"),this.options.wheelMode=this._bar("option","wheelMode"),this.options.wheelSpeed=this._bar("option","wheelSpeed")},_createArrows:function(){this.arrows.left=this._createArrow("left"),this.arrows.right=this._createArrow("right"),this.options.arrows?this.element.addClass("ui-rangeSlider-withArrows"):(this.arrows.left.css("display","none"),this.arrows.right.css("display","none"),this.element.addClass("ui-rangeSlider-noArrow"))},_createArrow:function(i){var e,s=t("<div class='ui-rangeSlider-arrow' />").append("<div class='ui-rangeSlider-arrow-inner' />").addClass("ui-rangeSlider-"+i+"Arrow").css("position","absolute").css(i,0).appendTo(this.element);return e="right"===i?t.proxy(this._scrollRightClick,this):t.proxy(this._scrollLeftClick,this),s.bind("mousedown touchstart",e),s},_proxy:function(t,i,e){var s=Array.prototype.slice.call(e);return t[i].apply(t,s)},_handleType:function(){return"rangeSliderHandle"},_barType:function(){return"rangeSliderBar"},_bar:function(){return this._proxy(this.bar,this._barType(),arguments)},_labelType:function(){return"rangeSliderLabel"},_leftLabel:function(){return this._proxy(this.labels.left,this._labelType(),arguments)},_rightLabel:function(){return this._proxy(this.labels.right,this._labelType(),arguments)},_leftHandle:function(){return this._proxy(this.leftHandle,this._handleType(),arguments)},_rightHandle:function(){return this._proxy(this.rightHandle,this._handleType(),arguments)},_getValue:function(t,i){return i===this.rightHandle&&(t-=i.outerWidth()),t*(this.options.bounds.max-this.options.bounds.min)/(this.container.innerWidth()-i.outerWidth(!0))+this.options.bounds.min},_trigger:function(t){var i=this;setTimeout(function(){i.element.trigger(t,{label:i.element,values:i.values()})},1)},_changing:function(){this._updateValues()&&(this._trigger("valuesChanging"),this._valuesChanged=!0)},_changed:function(t){(this._updateValues()||this._valuesChanged)&&(this._trigger("valuesChanged"),t!==!0&&this._trigger("userValuesChanged"),this._valuesChanged=!1)},_updateValues:function(){var t=this._leftHandle("value"),i=this._rightHandle("value"),e=this._min(t,i),s=this._max(t,i),n=e!==this._values.min||s!==this._values.max;return this._values.min=this._min(t,i),this._values.max=this._max(t,i),n},_min:function(t,i){return Math.min(t,i)},_max:function(t,i){return Math.max(t,i)},_createLabel:function(i,e){var s;return null===i?(s=this._getLabelConstructorParameters(i,e),i=t("<div />").appendTo(this.element)[this._labelType()](s)):(s=this._getLabelRefreshParameters(i,e),i[this._labelType()](s)),i},_getLabelConstructorParameters:function(t,i){return{handle:i,handleType:this._handleType(),formatter:this._getFormatter(),show:this.options.valueLabels,durationIn:this.options.durationIn,durationOut:this.options.durationOut,delayOut:this.options.delayOut}},_getLabelRefreshParameters:function(){return{formatter:this._getFormatter(),show:this.options.valueLabels,durationIn:this.options.durationIn,durationOut:this.options.durationOut,delayOut:this.options.delayOut}},_getFormatter:function(){return this.options.formatter===!1||null===this.options.formatter?this._defaultFormatter:this.options.formatter},_defaultFormatter:function(t){return Math.round(t)},_destroyLabel:function(t){return null!==t&&(t.remove(),t=null),t},_createLabels:function(){this.labels.left=this._createLabel(this.labels.left,this.leftHandle),this.labels.right=this._createLabel(this.labels.right,this.rightHandle),this._leftLabel("pair",this.labels.right)},_destroyLabels:function(){this.labels.left=this._destroyLabel(this.labels.left),this.labels.right=this._destroyLabel(this.labels.right)},_stepRatio:function(){return this._leftHandle("stepRatio")},_scrollRightClick:function(t){t.preventDefault(),this._bar("startScroll"),this._bindStopScroll(),this._continueScrolling("scrollRight",4*this._stepRatio(),1)},_continueScrolling:function(t,i,e,s){this._bar(t,e),s=s||5,s--;var n=this,o=16,a=Math.max(1,4/this._stepRatio());this._scrollTimeout=setTimeout(function(){0===s&&(i>o?i=Math.max(o,i/1.5):e=Math.min(a,2*e),s=5),n._continueScrolling(t,i,e,s)},i)},_scrollLeftClick:function(t){t.preventDefault(),this._bar("startScroll"),this._bindStopScroll(),this._continueScrolling("scrollLeft",4*this._stepRatio(),1)},_bindStopScroll:function(){var i=this;this._stopScrollHandle=function(t){t.preventDefault(),i._stopScroll()},t(document).bind("mouseup touchend",this._stopScrollHandle)},_stopScroll:function(){t(document).unbind("mouseup touchend",this._stopScrollHandle),this._bar("stopScroll"),clearTimeout(this._scrollTimeout)},_createRuler:function(){this.ruler=t("<div class='ui-rangeSlider-ruler' />").appendTo(this.innerBar)},_destroyRuler:function(){null!==this.ruler&&t.fn.ruler&&(this.ruler.ruler("destroy"),this.ruler.remove(),this.ruler=null)},_updateRuler:function(){this._destroyRuler(),this.options.scales!==!1&&t.fn.ruler&&(null===this.ruler&&this._createRuler(),this.ruler.ruler({min:this.options.bounds.min,max:this.options.bounds.max,scales:this.options.scales}))},values:function(t,i){var e=this._bar("values",t,i);return t!==undefined&&i!==undefined&&this._changed(!0),e},min:function(t){return this._values.min=this.values(t,this._values.max).min,this._values.min},max:function(t){return this._values.max=this.values(this._values.min,t).max,this._values.max},bounds:function(t,i){return this._isValidValue(t)&&this._isValidValue(i)&&i>t&&(this._setBounds(t,i),this._updateRuler(),this._changed(!0)),this.options.bounds},_isValidValue:function(t){return t!==undefined&&parseFloat(t)===t},_setBounds:function(t,i){this.options.bounds={min:t,max:i},this._leftHandle("option","bounds",this.options.bounds),this._rightHandle("option","bounds",this.options.bounds),this._bar("option","bounds",this.options.bounds)},zoomIn:function(t){this._bar("zoomIn",t)},zoomOut:function(t){this._bar("zoomOut",t)},scrollLeft:function(t){this._bar("startScroll"),this._bar("scrollLeft",t),this._bar("stopScroll")},scrollRight:function(t){this._bar("startScroll"),this._bar("scrollRight",t),this._bar("stopScroll")},resize:function(){this._initWidth(),this._leftHandle("update"),this._rightHandle("update"),this._bar("update")},destroy:function(){this.element.removeClass("ui-rangeSlider-withArrows").removeClass("ui-rangeSlider-noArrow"),this.bar.detach(),this.leftHandle.detach(),this.rightHandle.detach(),this.innerBar.detach(),this.container.detach(),this.arrows.left.detach(),this.arrows.right.detach(),this.element.removeClass("ui-rangeSlider"),this._destroyLabels(),delete this.options,t(window).unbind("resize",this._resizeProxy),t.Widget.prototype.destroy.apply(this,arguments)}})}(jQuery),function(t){"use strict";t.widget("ui.rangeSliderHandle",t.ui.rangeSliderDraggable,{currentMove:null,margin:0,parentElement:null,options:{isLeft:!0,bounds:{min:0,max:100},range:!1,value:0,step:!1},_value:0,_left:0,_create:function(){t.ui.rangeSliderDraggable.prototype._create.apply(this),this.element.css("position","absolute").css("top",0).addClass("ui-rangeSlider-handle").toggleClass("ui-rangeSlider-leftHandle",this.options.isLeft).toggleClass("ui-rangeSlider-rightHandle",!this.options.isLeft),this.element.append("<div class='ui-rangeSlider-handle-inner' />"),this._value=this._constraintValue(this.options.value)},_setOption:function(i,e){"isLeft"!==i||e!==!0&&e!==!1||e===this.options.isLeft?"step"===i&&this._checkStep(e)?(this.options.step=e,this.update()):"bounds"===i?(this.options.bounds=e,this.update()):"range"===i&&this._checkRange(e)&&(this.options.range=e,this.update()):(this.options.isLeft=e,this.element.toggleClass("ui-rangeSlider-leftHandle",this.options.isLeft).toggleClass("ui-rangeSlider-rightHandle",!this.options.isLeft),this._position(this._value),this.element.trigger("switch",this.options.isLeft)),t.ui.rangeSliderDraggable.prototype._setOption.apply(this,[i,e])},_checkRange:function(t){return t===!1||!this._isValidValue(t.min)&&!this._isValidValue(t.max)},_isValidValue:function(t){return t!==undefined&&t!==!1&&parseFloat(t)!==t},_checkStep:function(t){return t===!1||parseFloat(t)===t},_initElement:function(){t.ui.rangeSliderDraggable.prototype._initElement.apply(this),0===this.cache.parent.width||null===this.cache.parent.width?setTimeout(t.proxy(this._initElement,this),500):(this._position(this._value),this._triggerMouseEvent("initialize"))},_bounds:function(){return this.options.bounds},_cache:function(){t.ui.rangeSliderDraggable.prototype._cache.apply(this),this._cacheParent()},_cacheParent:function(){var t=this.element.parent();this.cache.parent={element:t,offset:t.offset(),padding:{left:this._parsePixels(t,"paddingLeft")},width:t.width()}},_position:function(t){var i=this._getPositionForValue(t);this._applyPosition(i)},_constraintPosition:function(t){var i=this._getValueForPosition(t);return this._getPositionForValue(i)},_applyPosition:function(i){t.ui.rangeSliderDraggable.prototype._applyPosition.apply(this,[i]),this._left=i,this._setValue(this._getValueForPosition(i)),this._triggerMouseEvent("moving")},_prepareEventData:function(){var i=t.ui.rangeSliderDraggable.prototype._prepareEventData.apply(this);return i.value=this._value,i},_setValue:function(t){t!==this._value&&(this._value=t)},_constraintValue:function(t){if(t=Math.min(t,this._bounds().max),t=Math.max(t,this._bounds().min),t=this._round(t),this.options.range!==!1){var i=this.options.range.min||!1,e=this.options.range.max||!1;i!==!1&&(t=Math.max(t,this._round(i))),e!==!1&&(t=Math.min(t,this._round(e))),t=Math.min(t,this._bounds().max),t=Math.max(t,this._bounds().min)}return t},_round:function(t){return this.options.step!==!1&&this.options.step>0?Math.round(t/this.options.step)*this.options.step:t},_getPositionForValue:function(t){if(!this.cache||!this.cache.parent||null===this.cache.parent.offset)return 0;t=this._constraintValue(t);var i=(t-this.options.bounds.min)/(this.options.bounds.max-this.options.bounds.min),e=this.cache.parent.width-this.cache.width.outer,s=this.cache.parent.offset.left;return i*e+s},_getValueForPosition:function(t){var i=this._getRawValueForPositionAndBounds(t,this.options.bounds.min,this.options.bounds.max);return this._constraintValue(i)},_getRawValueForPositionAndBounds:function(t,i,e){var s=null===this.cache.parent.offset?0:this.cache.parent.offset.left,n=this.cache.parent.width-this.cache.width.outer,o=(t-s)/n;return o*(e-i)+i},value:function(t){return t!==undefined&&(this._cache(),t=this._constraintValue(t),this._position(t)),this._value},update:function(){this._cache();var t=this._constraintValue(this._value),i=this._getPositionForValue(t);t!==this._value?(this._triggerMouseEvent("updating"),this._position(t),this._triggerMouseEvent("update")):i!==this.cache.offset.left&&(this._triggerMouseEvent("updating"),this._position(t),this._triggerMouseEvent("update"))},position:function(t){return t!==undefined&&(this._cache(),t=this._constraintPosition(t),this._applyPosition(t)),this._left},add:function(t,i){return t+i},substract:function(t,i){return t-i},stepsBetween:function(t,i){return this.options.step===!1?i-t:(i-t)/this.options.step},multiplyStep:function(t,i){return t*i},moveRight:function(t){var i;return this.options.step===!1?(i=this._left,this.position(this._left+t),this._left-i):(i=this._value,this.value(this.add(i,this.multiplyStep(this.options.step,t))),this.stepsBetween(i,this._value))},moveLeft:function(t){return-this.moveRight(-t)},stepRatio:function(){if(this.options.step===!1)return 1;var t=(this.options.bounds.max-this.options.bounds.min)/this.options.step;return this.cache.parent.width/t}})}(jQuery),function(t){"use strict";t.widget("ui.rangeSliderBar",t.ui.rangeSliderDraggable,{options:{leftHandle:null,rightHandle:null,bounds:{min:0,max:100},type:"rangeSliderHandle",range:!1,drag:function(){},stop:function(){},values:{min:0,max:20},wheelSpeed:4,wheelMode:null},_values:{min:0,max:20},_waitingToInit:2,_wheelTimeout:!1,_create:function(){t.ui.rangeSliderDraggable.prototype._create.apply(this),this.element.css("position","absolute").css("top",0).addClass("ui-rangeSlider-bar"),this.options.leftHandle.bind("initialize",t.proxy(this._onInitialized,this)).bind("mousestart",t.proxy(this._cache,this)).bind("stop",t.proxy(this._onHandleStop,this)),this.options.rightHandle.bind("initialize",t.proxy(this._onInitialized,this)).bind("mousestart",t.proxy(this._cache,this)).bind("stop",t.proxy(this._onHandleStop,this)),this._bindHandles(),this._values=this.options.values,this._setWheelModeOption(this.options.wheelMode)},_setOption:function(t,i){"range"===t?this._setRangeOption(i):"wheelSpeed"===t?this._setWheelSpeedOption(i):"wheelMode"===t&&this._setWheelModeOption(i)},_setRangeOption:function(t){if(("object"!=typeof t||null===t)&&(t=!1),t!==!1||this.options.range!==!1){if(t!==!1){var i=t.min===undefined?this.options.range.min||!1:t.min,e=t.max===undefined?this.options.range.max||!1:t.max;this.options.range={min:i,max:e}}else this.options.range=!1;this._setLeftRange(),this._setRightRange()}},_setWheelSpeedOption:function(t){"number"==typeof t&&t>0&&(this.options.wheelSpeed=t)},_setWheelModeOption:function(t){(null===t||t===!1||"zoom"===t||"scroll"===t)&&(this.options.wheelMode!==t&&this.element.parent().unbind("mousewheel.bar"),this._bindMouseWheel(t),this.options.wheelMode=t)},_bindMouseWheel:function(i){"zoom"===i?this.element.parent().bind("mousewheel.bar",t.proxy(this._mouseWheelZoom,this)):"scroll"===i&&this.element.parent().bind("mousewheel.bar",t.proxy(this._mouseWheelScroll,this))},_setLeftRange:function(){if(this.options.range===!1)return!1;var t=this._values.max,i={min:!1,max:!1};i.max=(this.options.range.min||!1)!==!1?this._leftHandle("substract",t,this.options.range.min):!1,i.min=(this.options.range.max||!1)!==!1?this._leftHandle("substract",t,this.options.range.max):!1,this._leftHandle("option","range",i)},_setRightRange:function(){var t=this._values.min,i={min:!1,max:!1};i.min=(this.options.range.min||!1)!==!1?this._rightHandle("add",t,this.options.range.min):!1,i.max=(this.options.range.max||!1)!==!1?this._rightHandle("add",t,this.options.range.max):!1,this._rightHandle("option","range",i)},_deactivateRange:function(){this._leftHandle("option","range",!1),this._rightHandle("option","range",!1)},_reactivateRange:function(){this._setRangeOption(this.options.range)},_onInitialized:function(){this._waitingToInit--,0===this._waitingToInit&&this._initMe()},_initMe:function(){this._cache(),this.min(this._values.min),this.max(this._values.max);var t=this._leftHandle("position"),i=this._rightHandle("position")+this.options.rightHandle.width();this.element.offset({left:t}),this.element.css("width",i-t)},_leftHandle:function(){return this._handleProxy(this.options.leftHandle,arguments)},_rightHandle:function(){return this._handleProxy(this.options.rightHandle,arguments)},_handleProxy:function(t,i){var e=Array.prototype.slice.call(i);return t[this.options.type].apply(t,e)},_cache:function(){t.ui.rangeSliderDraggable.prototype._cache.apply(this),this._cacheHandles()},_cacheHandles:function(){this.cache.rightHandle={},this.cache.rightHandle.width=this.options.rightHandle.width(),this.cache.rightHandle.offset=this.options.rightHandle.offset(),this.cache.leftHandle={},this.cache.leftHandle.offset=this.options.leftHandle.offset()},_mouseStart:function(i){t.ui.rangeSliderDraggable.prototype._mouseStart.apply(this,[i]),this._deactivateRange()},_mouseStop:function(i){t.ui.rangeSliderDraggable.prototype._mouseStop.apply(this,[i]),this._cacheHandles(),this._values.min=this._leftHandle("value"),this._values.max=this._rightHandle("value"),this._reactivateRange(),this._leftHandle().trigger("stop"),this._rightHandle().trigger("stop")},_onDragLeftHandle:function(t,i){return this._cacheIfNecessary(),this._switchedValues()?(this._switchHandles(),this._onDragRightHandle(t,i),undefined):(this._values.min=i.value,this.cache.offset.left=i.offset.left,this.cache.leftHandle.offset=i.offset,this._positionBar(),undefined)},_onDragRightHandle:function(t,i){return this._cacheIfNecessary(),this._switchedValues()?(this._switchHandles(),this._onDragLeftHandle(t,i),undefined):(this._values.max=i.value,this.cache.rightHandle.offset=i.offset,this._positionBar(),undefined)},_positionBar:function(){var t=this.cache.rightHandle.offset.left+this.cache.rightHandle.width-this.cache.leftHandle.offset.left;this.cache.width.inner=t,this.element.css("width",t).offset({left:this.cache.leftHandle.offset.left})},_onHandleStop:function(){this._setLeftRange(),this._setRightRange()},_switchedValues:function(){if(this.min()>this.max()){var t=this._values.min;return this._values.min=this._values.max,this._values.max=t,!0}return!1},_switchHandles:function(){var t=this.options.leftHandle;this.options.leftHandle=this.options.rightHandle,this.options.rightHandle=t,this._leftHandle("option","isLeft",!0),this._rightHandle("option","isLeft",!1),this._bindHandles(),this._cacheHandles()},_bindHandles:function(){this.options.leftHandle.unbind(".bar").bind("sliderDrag.bar update.bar moving.bar",t.proxy(this._onDragLeftHandle,this)),this.options.rightHandle.unbind(".bar").bind("sliderDrag.bar update.bar moving.bar",t.proxy(this._onDragRightHandle,this))},_constraintPosition:function(i){var e,s={};return s.left=t.ui.rangeSliderDraggable.prototype._constraintPosition.apply(this,[i]),s.left=this._leftHandle("position",s.left),e=this._rightHandle("position",s.left+this.cache.width.outer-this.cache.rightHandle.width),s.width=e-s.left+this.cache.rightHandle.width,s},_applyPosition:function(i){t.ui.rangeSliderDraggable.prototype._applyPosition.apply(this,[i.left]),this.element.width(i.width)},_mouseWheelZoom:function(i,e,s,n){var o=this._values.min+(this._values.max-this._values.min)/2,a={},h={};return this.options.range===!1||this.options.range.min===!1?(a.max=o,h.min=o):(a.max=o-this.options.range.min/2,h.min=o+this.options.range.min/2),this.options.range!==!1&&this.options.range.max!==!1&&(a.min=o-this.options.range.max/2,h.max=o+this.options.range.max/2),this._leftHandle("option","range",a),this._rightHandle("option","range",h),clearTimeout(this._wheelTimeout),this._wheelTimeout=setTimeout(t.proxy(this._wheelStop,this),200),this.zoomOut(n*this.options.wheelSpeed),!1},_mouseWheelScroll:function(i,e,s,n){return this._wheelTimeout===!1?this.startScroll():clearTimeout(this._wheelTimeout),this._wheelTimeout=setTimeout(t.proxy(this._wheelStop,this),200),this.scrollLeft(n*this.options.wheelSpeed),!1},_wheelStop:function(){this.stopScroll(),this._wheelTimeout=!1},min:function(t){return this._leftHandle("value",t)},max:function(t){return this._rightHandle("value",t)},startScroll:function(){this._deactivateRange()},stopScroll:function(){this._reactivateRange(),this._triggerMouseEvent("stop"),this._leftHandle().trigger("stop"),this._rightHandle().trigger("stop")},scrollLeft:function(t){return t=t||1,0>t?this.scrollRight(-t):(t=this._leftHandle("moveLeft",t),this._rightHandle("moveLeft",t),this.update(),this._triggerMouseEvent("scroll"),undefined)},scrollRight:function(t){return t=t||1,0>t?this.scrollLeft(-t):(t=this._rightHandle("moveRight",t),this._leftHandle("moveRight",t),this.update(),this._triggerMouseEvent("scroll"),undefined)},zoomIn:function(t){if(t=t||1,0>t)return this.zoomOut(-t);var i=this._rightHandle("moveLeft",t);t>i&&(i/=2,this._rightHandle("moveRight",i)),this._leftHandle("moveRight",i),this.update(),this._triggerMouseEvent("zoom")},zoomOut:function(t){if(t=t||1,0>t)return this.zoomIn(-t);var i=this._rightHandle("moveRight",t);t>i&&(i/=2,this._rightHandle("moveLeft",i)),this._leftHandle("moveLeft",i),this.update(),this._triggerMouseEvent("zoom")},values:function(t,i){if(t!==undefined&&i!==undefined){var e=Math.min(t,i),s=Math.max(t,i);this._deactivateRange(),this.options.leftHandle.unbind(".bar"),this.options.rightHandle.unbind(".bar"),this._values.min=this._leftHandle("value",e),this._values.max=this._rightHandle("value",s),this._bindHandles(),this._reactivateRange(),this.update()}return{min:this._values.min,max:this._values.max}},update:function(){this._values.min=this.min(),this._values.max=this.max(),this._cache(),this._positionBar()}})}(jQuery),function(t){"use strict";function i(i,e,s,n){this.label1=i,this.label2=e,this.type=s,this.options=n,this.handle1=this.label1[this.type]("option","handle"),this.handle2=this.label2[this.type]("option","handle"),this.cache=null,this.left=i,this.right=e,this.moving=!1,this.initialized=!1,this.updating=!1,this.Init=function(){this.BindHandle(this.handle1),this.BindHandle(this.handle2),"show"===this.options.show?(setTimeout(t.proxy(this.PositionLabels,this),1),this.initialized=!0):setTimeout(t.proxy(this.AfterInit,this),1e3)},this.AfterInit=function(){this.initialized=!0},this.Cache=function(){"none"!==this.label1.css("display")&&(this.cache={},this.cache.label1={},this.cache.label2={},this.cache.handle1={},this.cache.handle2={},this.cache.offsetParent={},this.CacheElement(this.label1,this.cache.label1),this.CacheElement(this.label2,this.cache.label2),this.CacheElement(this.handle1,this.cache.handle1),this.CacheElement(this.handle2,this.cache.handle2),this.CacheElement(this.label1.offsetParent(),this.cache.offsetParent))},this.CacheIfNecessary=function(){null===this.cache?this.Cache():(this.CacheWidth(this.label1,this.cache.label1),this.CacheWidth(this.label2,this.cache.label2),this.CacheHeight(this.label1,this.cache.label1),this.CacheHeight(this.label2,this.cache.label2),this.CacheWidth(this.label1.offsetParent(),this.cache.offsetParent))},this.CacheElement=function(t,i){this.CacheWidth(t,i),this.CacheHeight(t,i),i.offset=t.offset(),i.margin={left:this.ParsePixels("marginLeft",t),right:this.ParsePixels("marginRight",t)},i.border={left:this.ParsePixels("borderLeftWidth",t),right:this.ParsePixels("borderRightWidth",t)}},this.CacheWidth=function(t,i){i.width=t.width(),i.outerWidth=t.outerWidth()},this.CacheHeight=function(t,i){i.outerHeightMargin=t.outerHeight(!0)},this.ParsePixels=function(t,i){return parseInt(i.css(t),10)||0},this.BindHandle=function(i){i.bind("updating",t.proxy(this.onHandleUpdating,this)),i.bind("update",t.proxy(this.onHandleUpdated,this)),i.bind("moving",t.proxy(this.onHandleMoving,this)),i.bind("stop",t.proxy(this.onHandleStop,this))},this.PositionLabels=function(){if(this.CacheIfNecessary(),null!==this.cache){var t=this.GetRawPosition(this.cache.label1,this.cache.handle1),i=this.GetRawPosition(this.cache.label2,this.cache.handle2);this.ConstraintPositions(t,i),this.PositionLabel(this.label1,t.left,this.cache.label1),this.PositionLabel(this.label2,i.left,this.cache.label2)}},this.PositionLabel=function(t,i,e){var s,n,o,a=this.cache.offsetParent.offset.left+this.cache.offsetParent.border.left;a-i>=0?(t.css("right",""),t.offset({left:i})):(s=a+this.cache.offsetParent.width,n=i+e.margin.left+e.outerWidth+e.margin.right,o=s-n,t.css("left",""),t.css("right",o))},this.ConstraintPositions=function(t,i){t.center<i.center&&t.outerRight>i.outerLeft?(t=this.getLeftPosition(t,i),i=this.getRightPosition(t,i)):t.center>i.center&&i.outerRight>t.outerLeft&&(i=this.getLeftPosition(i,t),t=this.getRightPosition(i,t))},this.getLeftPosition=function(t,i){var e=(i.center+t.center)/2,s=e-t.cache.outerWidth-t.cache.margin.right+t.cache.border.left;return t.left=s,t},this.getRightPosition=function(t,i){var e=(i.center+t.center)/2;return i.left=e+i.cache.margin.left+i.cache.border.left,i},this.ShowIfNecessary=function(){"show"===this.options.show||this.moving||!this.initialized||this.updating||(this.label1.stop(!0,!0).fadeIn(this.options.durationIn||0),this.label2.stop(!0,!0).fadeIn(this.options.durationIn||0),this.moving=!0)
},this.HideIfNeeded=function(){this.moving===!0&&(this.label1.stop(!0,!0).delay(this.options.delayOut||0).fadeOut(this.options.durationOut||0),this.label2.stop(!0,!0).delay(this.options.delayOut||0).fadeOut(this.options.durationOut||0),this.moving=!1)},this.onHandleMoving=function(t,i){this.ShowIfNecessary(),this.CacheIfNecessary(),this.UpdateHandlePosition(i),this.PositionLabels()},this.onHandleUpdating=function(){this.updating=!0},this.onHandleUpdated=function(){this.updating=!1,this.cache=null},this.onHandleStop=function(){this.HideIfNeeded()},this.UpdateHandlePosition=function(t){null!==this.cache&&(t.element[0]===this.handle1[0]?this.UpdatePosition(t,this.cache.handle1):this.UpdatePosition(t,this.cache.handle2))},this.UpdatePosition=function(t,i){i.offset=t.offset},this.GetRawPosition=function(t,i){var e=i.offset.left+i.outerWidth/2,s=e-t.outerWidth/2,n=s+t.outerWidth-t.border.left-t.border.right,o=s-t.margin.left-t.border.left,a=i.offset.top-t.outerHeightMargin;return{left:s,outerLeft:o,top:a,right:n,outerRight:o+t.outerWidth+t.margin.left+t.margin.right,cache:t,center:e}},this.Init()}t.widget("ui.rangeSliderLabel",t.ui.rangeSliderMouseTouch,{options:{handle:null,formatter:!1,handleType:"rangeSliderHandle",show:"show",durationIn:0,durationOut:500,delayOut:500,isLeft:!1},cache:null,_positionner:null,_valueContainer:null,_innerElement:null,_create:function(){this.options.isLeft=this._handle("option","isLeft"),this.element.addClass("ui-rangeSlider-label").css("position","absolute").css("display","block"),this._createElements(),this._toggleClass(),this.options.handle.bind("moving",t.proxy(this._onMoving,this)).bind("update",t.proxy(this._onUpdate,this)).bind("switch",t.proxy(this._onSwitch,this)),"show"!==this.options.show&&this.element.hide(),this._mouseInit()},_createElements:function(){this._valueContainer=t("<div class='ui-rangeSlider-label-value' />").appendTo(this.element),this._innerElement=t("<div class='ui-rangeSlider-label-inner' />").appendTo(this.element)},_handle:function(){var t=Array.prototype.slice.apply(arguments);return this.options.handle[this.options.handleType].apply(this.options.handle,t)},_setOption:function(t,i){"show"===t?this._updateShowOption(i):("durationIn"===t||"durationOut"===t||"delayOut"===t)&&this._updateDurations(t,i)},_updateShowOption:function(t){this.options.show=t,"show"!==this.options.show?this.element.hide():(this.element.show(),this._display(this.options.handle[this.options.handleType]("value")),this._positionner.PositionLabels()),this._positionner.options.show=this.options.show},_updateDurations:function(t,i){parseInt(i,10)===i&&(this._positionner.options[t]=i,this.options[t]=i)},_display:function(t){this.options.formatter===!1?this._displayText(Math.round(t)):this._displayText(this.options.formatter(t))},_displayText:function(t){this._valueContainer.text(t)},_toggleClass:function(){this.element.toggleClass("ui-rangeSlider-leftLabel",this.options.isLeft).toggleClass("ui-rangeSlider-rightLabel",!this.options.isLeft)},_mouseDown:function(t){this.options.handle.trigger(t)},_mouseUp:function(t){this.options.handle.trigger(t)},_mouseMove:function(t){this.options.handle.trigger(t)},_onMoving:function(t,i){this._display(i.value)},_onUpdate:function(){"show"===this.options.show&&this.update()},_onSwitch:function(t,i){this.options.isLeft=i,this._toggleClass(),this._positionner.PositionLabels()},pair:function(t){null===this._positionner&&(this._positionner=new i(this.element,t,this.widgetName,{show:this.options.show,durationIn:this.options.durationIn,durationOut:this.options.durationOut,delayOut:this.options.delayOut}),t[this.widgetName]("positionner",this._positionner))},positionner:function(t){return t!==undefined&&(this._positionner=t),this._positionner},update:function(){this._positionner.cache=null,this._display(this._handle("value")),"show"===this.options.show&&this._positionner.PositionLabels()}})}(jQuery);