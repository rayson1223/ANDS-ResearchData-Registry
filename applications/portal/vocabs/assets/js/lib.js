function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}!function(a,b){function c(a){var b=a.length,c=fb.type(a);return fb.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||"function"!==c&&(0===b||"number"==typeof b&&b>0&&b-1 in a)}function d(a){var b=ob[a]={};return fb.each(a.match(hb)||[],function(a,c){b[c]=!0}),b}function e(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=fb.expando+Math.random()}function f(a,c,d){var e;if(d===b&&1===a.nodeType)if(e="data-"+c.replace(sb,"-$1").toLowerCase(),d=a.getAttribute(e),"string"==typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:+d+""===d?+d:rb.test(d)?JSON.parse(d):d}catch(f){}pb.set(a,c,d)}else d=b;return d}function g(){return!0}function h(){return!1}function i(){try{return T.activeElement}catch(a){}}function j(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function k(a,b,c){if(fb.isFunction(b))return fb.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return fb.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(Cb.test(b))return fb.filter(b,a,c);b=fb.filter(b,a)}return fb.grep(a,function(a){return bb.call(b,a)>=0!==c})}function l(a,b){return fb.nodeName(a,"table")&&fb.nodeName(1===b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function m(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function n(a){var b=Nb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function o(a,b){for(var c=a.length,d=0;c>d;d++)qb.set(a[d],"globalEval",!b||qb.get(b[d],"globalEval"))}function p(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(qb.hasData(a)&&(f=qb.access(a),g=qb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)fb.event.add(b,e,j[e][c])}pb.hasData(a)&&(h=pb.access(a),i=fb.extend({},h),pb.set(b,i))}}function q(a,c){var d=a.getElementsByTagName?a.getElementsByTagName(c||"*"):a.querySelectorAll?a.querySelectorAll(c||"*"):[];return c===b||c&&fb.nodeName(a,c)?fb.merge([a],d):d}function r(a,b){var c=b.nodeName.toLowerCase();"input"===c&&Kb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function s(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=_b.length;e--;)if(b=_b[e]+c,b in a)return b;return d}function t(a,b){return a=b||a,"none"===fb.css(a,"display")||!fb.contains(a.ownerDocument,a)}function u(b){return a.getComputedStyle(b,null)}function v(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=qb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&t(d)&&(f[g]=qb.access(d,"olddisplay",z(d.nodeName)))):f[g]||(e=t(d),(c&&"none"!==c||!e)&&qb.set(d,"olddisplay",e?c:fb.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function w(a,b,c){var d=Ub.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function x(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=fb.css(a,c+$b[f],!0,e)),d?("content"===c&&(g-=fb.css(a,"padding"+$b[f],!0,e)),"margin"!==c&&(g-=fb.css(a,"border"+$b[f]+"Width",!0,e))):(g+=fb.css(a,"padding"+$b[f],!0,e),"padding"!==c&&(g+=fb.css(a,"border"+$b[f]+"Width",!0,e)));return g}function y(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=u(a),g=fb.support.boxSizing&&"border-box"===fb.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Qb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Vb.test(e))return e;d=g&&(fb.support.boxSizingReliable||e===a.style[b]),e=parseFloat(e)||0}return e+x(a,b,c||(g?"border":"content"),d,f)+"px"}function z(a){var b=T,c=Xb[a];return c||(c=A(a,b),"none"!==c&&c||(Rb=(Rb||fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b.documentElement),b=(Rb[0].contentWindow||Rb[0].contentDocument).document,b.write("<!doctype html><html><body>"),b.close(),c=A(a,b),Rb.detach()),Xb[a]=c),c}function A(a,b){var c=fb(b.createElement(a)).appendTo(b.body),d=fb.css(c[0],"display");return c.remove(),d}function B(a,b,c,d){var e;if(fb.isArray(b))fb.each(b,function(b,e){c||bc.test(a)?d(a,e):B(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==fb.type(b))d(a,b);else for(e in b)B(a+"["+e+"]",b[e],c,d)}function C(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(hb)||[];if(fb.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function D(a,b,c,d){function e(h){var i;return f[h]=!0,fb.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===sc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function E(a,c){var d,e,f=fb.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);return e&&fb.extend(!0,a,e),a}function F(a,c,d){for(var e,f,g,h,i=a.contents,j=a.dataTypes;"*"===j[0];)j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("Content-Type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}return g?(g!==j[0]&&j.unshift(g),d[g]):void 0}function G(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function H(){return setTimeout(function(){Bc=b}),Bc=fb.now()}function I(a,b,c){for(var d,e=(Hc[b]||[]).concat(Hc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function J(a,b,c){var d,e,f=0,g=Gc.length,h=fb.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Bc||H(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:fb.extend({},b),opts:fb.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Bc||H(),duration:c.duration,tweens:[],createTween:function(b,c){var d=fb.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(K(k,j.opts.specialEasing);g>f;f++)if(d=Gc[f].call(j,a,k,j.opts))return d;return fb.map(k,I,j),fb.isFunction(j.opts.start)&&j.opts.start.call(a,j),fb.fx.timer(fb.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function K(a,b){var c,d,e,f,g;for(c in a)if(d=fb.camelCase(c),e=b[d],f=a[c],fb.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=fb.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function L(a,c,d){var e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&t(a),o=qb.get(a,"fxshow");d.queue||(i=fb._queueHooks(a,"fx"),null==i.unqueued&&(i.unqueued=0,j=i.empty.fire,i.empty.fire=function(){i.unqueued||j()}),i.unqueued++,k.always(function(){k.always(function(){i.unqueued--,fb.queue(a,"fx").length||i.empty.fire()})})),1===a.nodeType&&("height"in c||"width"in c)&&(d.overflow=[m.overflow,m.overflowX,m.overflowY],"inline"===fb.css(a,"display")&&"none"===fb.css(a,"float")&&(m.display="inline-block")),d.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=d.overflow[0],m.overflowX=d.overflow[1],m.overflowY=d.overflow[2]}));for(e in c)if(f=c[e],Dc.exec(f)){if(delete c[e],g=g||"toggle"===f,f===(n?"hide":"show")){if("show"!==f||!o||o[e]===b)continue;n=!0}l[e]=o&&o[e]||fb.style(a,e)}if(!fb.isEmptyObject(l)){o?"hidden"in o&&(n=o.hidden):o=qb.access(a,"fxshow",{}),g&&(o.hidden=!n),n?fb(a).show():k.done(function(){fb(a).hide()}),k.done(function(){var b;qb.remove(a,"fxshow");for(b in l)fb.style(a,b,l[b])});for(e in l)h=I(n?o[e]:0,e,k),e in o||(o[e]=h.start,n&&(h.end=h.start,h.start="width"===e||"height"===e?1:0))}}function M(a,b,c,d,e){return new M.prototype.init(a,b,c,d,e)}function N(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=$b[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function O(a){return fb.isWindow(a)?a:9===a.nodeType&&a.defaultView}var P,Q,R=typeof b,S=a.location,T=a.document,U=T.documentElement,V=a.jQuery,W=a.$,X={},Y=[],Z="2.0.3",$=Y.concat,_=Y.push,ab=Y.slice,bb=Y.indexOf,cb=X.toString,db=X.hasOwnProperty,eb=Z.trim,fb=function(a,b){return new fb.fn.init(a,b,P)},gb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,hb=/\S+/g,ib=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,jb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,kb=/^-ms-/,lb=/-([\da-z])/gi,mb=function(a,b){return b.toUpperCase()},nb=function(){T.removeEventListener("DOMContentLoaded",nb,!1),a.removeEventListener("load",nb,!1),fb.ready()};fb.fn=fb.prototype={jquery:Z,constructor:fb,init:function(a,c,d){var e,f;if(!a)return this;if("string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:ib.exec(a),!e||!e[1]&&c)return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);if(e[1]){if(c=c instanceof fb?c[0]:c,fb.merge(this,fb.parseHTML(e[1],c&&c.nodeType?c.ownerDocument||c:T,!0)),jb.test(e[1])&&fb.isPlainObject(c))for(e in c)fb.isFunction(this[e])?this[e](c[e]):this.attr(e,c[e]);return this}return f=T.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=T,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):fb.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),fb.makeArray(a,this))},selector:"",length:0,toArray:function(){return ab.call(this)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a){var b=fb.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return fb.each(this,a,b)},ready:function(a){return fb.ready.promise().done(a),this},slice:function(){return this.pushStack(ab.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},map:function(a){return this.pushStack(fb.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:_,sort:[].sort,splice:[].splice},fb.fn.init.prototype=fb.fn,fb.extend=fb.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[1]||{},i=2),"object"==typeof h||fb.isFunction(h)||(h={}),j===i&&(h=this,--i);j>i;i++)if(null!=(a=arguments[i]))for(c in a)d=h[c],e=a[c],h!==e&&(k&&e&&(fb.isPlainObject(e)||(f=fb.isArray(e)))?(f?(f=!1,g=d&&fb.isArray(d)?d:[]):g=d&&fb.isPlainObject(d)?d:{},h[c]=fb.extend(k,g,e)):e!==b&&(h[c]=e));return h},fb.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noConflict:function(b){return a.$===fb&&(a.$=W),b&&a.jQuery===fb&&(a.jQuery=V),fb},isReady:!1,readyWait:1,holdReady:function(a){a?fb.readyWait++:fb.ready(!0)},ready:function(a){(a===!0?--fb.readyWait:fb.isReady)||(fb.isReady=!0,a!==!0&&--fb.readyWait>0||(Q.resolveWith(T,[fb]),fb.fn.trigger&&fb(T).trigger("ready").off("ready")))},isFunction:function(a){return"function"===fb.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?X[cb.call(a)]||"object":typeof a},isPlainObject:function(a){if("object"!==fb.type(a)||a.nodeType||fb.isWindow(a))return!1;try{if(a.constructor&&!db.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||T;var d=jb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=fb.buildFragment([a],b,e),e&&fb(e).remove(),fb.merge([],d.childNodes))},parseJSON:JSON.parse,parseXML:function(a){var c,d;if(!a||"string"!=typeof a)return null;try{d=new DOMParser,c=d.parseFromString(a,"text/xml")}catch(e){c=b}return(!c||c.getElementsByTagName("parsererror").length)&&fb.error("Invalid XML: "+a),c},noop:function(){},globalEval:function(a){var b,c=eval;a=fb.trim(a),a&&(1===a.indexOf("use strict")?(b=T.createElement("script"),b.text=a,T.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(kb,"ms-").replace(lb,mb)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":eb.call(a)},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?fb.merge(d,"string"==typeof a?[a]:a):_.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:bb.call(b,a,c)},merge:function(a,c){var d=c.length,e=a.length,f=0;if("number"==typeof d)for(;d>f;f++)a[e++]=c[f];else for(;c[f]!==b;)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;for(c=!!c;g>f;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&(i[i.length]=e);else for(f in a)e=b(a[f],f,d),null!=e&&(i[i.length]=e);return $.apply([],i)},guid:1,proxy:function(a,c){var d,e,f;return"string"==typeof c&&(d=a[c],c=a,a=d),fb.isFunction(a)?(e=ab.call(arguments,2),f=function(){return a.apply(c||this,e.concat(ab.call(arguments)))},f.guid=a.guid=a.guid||fb.guid++,f):b},access:function(a,c,d,e,f,g,h){var i=0,j=a.length,k=null==d;if("object"===fb.type(d)){f=!0;for(i in d)fb.access(a,c,i,d[i],!0,g,h)}else if(e!==b&&(f=!0,fb.isFunction(e)||(h=!0),k&&(h?(c.call(a,e),c=null):(k=c,c=function(a,b,c){return k.call(fb(a),c)})),c))for(;j>i;i++)c(a[i],d,h?e:e.call(a[i],i,c(a[i],d)));return f?a:k?c.call(a):j?c(a[0],d):g},now:Date.now,swap:function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e}}),fb.ready.promise=function(b){return Q||(Q=fb.Deferred(),"complete"===T.readyState?setTimeout(fb.ready):(T.addEventListener("DOMContentLoaded",nb,!1),a.addEventListener("load",nb,!1))),Q.promise(b)},fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){X["[object "+b+"]"]=b.toLowerCase()}),P=fb(T),function(a,b){function c(a,b,c,d){var e,f,g,h,i,j,k,l,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=tb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return ab.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.getElementsByClassName)return ab.apply(c,b.getElementsByClassName(g)),c}if(x.qsa&&(!J||!J.test(a))){if(l=k=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=m(a),(k=b.getAttribute("id"))?l=k.replace(wb,"\\$&"):b.setAttribute("id",l),l="[id='"+l+"'] ",i=j.length;i--;)j[i]=l+n(j[i]);o=nb.test(a)&&b.parentNode||b,p=j.join(",")}if(p)try{return ab.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{k||b.removeAttribute("id")}}}return v(a.replace(kb,"$1"),b,c,d)}function d(){function a(c,d){return b.push(c+=" ")>z.cacheLength&&delete a[b.shift()],a[c]=d}var b=[];return a}function e(a){return a[N]=!0,a}function f(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function g(a,b){for(var c=a.split("|"),d=a.length;d--;)z.attrHandle[c[d]]=b}function h(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||X)-(~a.sourceIndex||X);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function i(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function j(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function k(a){return e(function(b){return b=+b,e(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function l(){}function m(a,b){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=z.preFilter;h;){(!d||(e=lb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=mb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(kb," ")}),h=h.slice(d.length));for(g in z.filter)!(e=rb[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return b?h.length:h?c.error(a):S(a,i).slice(0)}function n(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=P+" "+f;if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e)if(j=b[N]||(b[N]={}),(i=j[d])&&i[0]===k){if((h=i[1])===!0||h===y)return h===!0}else if(i=j[d]=[k],i[1]=a(b,c,g)||y,i[1]===!0)return!0}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,d,f,g){return d&&!d[N]&&(d=r(d)),f&&!f[N]&&(f=r(f,g)),e(function(e,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=e||u(b||"*",h.nodeType?[h]:h,[]),r=!a||!e&&b?p:q(p,m,a,h,i),s=c?f||(e?a:o||d)?[]:g:r;if(c&&c(r,s,h,i),d)for(j=q(s,n),d(j,[],h,i),k=j.length;k--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));if(e){if(f||a){if(f){for(j=[],k=s.length;k--;)(l=s[k])&&j.push(r[k]=l);f(null,s=[],j,i)}for(k=s.length;k--;)(l=s[k])&&(j=f?cb.call(e,l):m[k])>-1&&(e[j]=!(g[j]=l))}}else s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):ab.apply(g,s)})}function s(a){for(var b,c,d,e=a.length,f=z.relative[a[0].type],g=f||z.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return cb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=z.relative[a[h].type])k=[o(p(k),c)];else{if(c=z.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!z.relative[a[d].type];d++);return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(kb,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&n(a))}k.push(c)}return p(k)}function t(a,b){var d=0,f=b.length>0,g=a.length>0,h=function(e,h,i,j,k){var l,m,n,o=[],p=0,r="0",s=e&&[],t=null!=k,u=D,v=e||g&&z.find.TAG("*",k&&h.parentNode||h),w=P+=null==u?1:Math.random()||.1;for(t&&(D=h!==G&&h,y=d);null!=(l=v[r]);r++){if(g&&l){for(m=0;n=a[m++];)if(n(l,h,i)){j.push(l);break}t&&(P=w,y=++d)}f&&((l=!n&&l)&&p--,e&&s.push(l))}if(p+=r,f&&r!==p){for(m=0;n=b[m++];)n(s,o,h,i);if(e){if(p>0)for(;r--;)s[r]||o[r]||(o[r]=$.call(j));o=q(o)}ab.apply(j,o),t&&!e&&o.length>0&&p+b.length>1&&c.uniqueSort(j)}return t&&(P=w,D=u),s};return f?e(h):h}function u(a,b,d){for(var e=0,f=b.length;f>e;e++)c(a,b[e],d);return d}function v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&I&&z.relative[f[1].type]){if(b=(z.find.ID(g.matches[0].replace(xb,yb),b)||[])[0],!b)return c;a=a.slice(f.shift().value.length)}for(e=rb.needsContext.test(a)?0:f.length;e--&&(g=f[e],!z.relative[h=g.type]);)if((i=z.find[h])&&(d=i(g.matches[0].replace(xb,yb),nb.test(f[0].type)&&b.parentNode||b))){if(f.splice(e,1),a=d.length&&n(f),!a)return ab.apply(c,d),c;break}}return C(a,j)(d,b,!I,c,nb.test(a)),c}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=d(),S=d(),T=d(),U=!1,V=function(a,b){return a===b?(U=!0,0):0},W=typeof b,X=1<<31,Y={}.hasOwnProperty,Z=[],$=Z.pop,_=Z.push,ab=Z.push,bb=Z.slice,cb=Z.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},db="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",eb="[\\x20\\t\\r\\n\\f]",gb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",hb=gb.replace("w","w#"),ib="\\["+eb+"*("+gb+")"+eb+"*(?:([*^$|!~]?=)"+eb+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+hb+")|)|)"+eb+"*\\]",jb=":("+gb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ib.replace(3,8)+")*)|.*)\\)|)",kb=new RegExp("^"+eb+"+|((?:^|[^\\\\])(?:\\\\.)*)"+eb+"+$","g"),lb=new RegExp("^"+eb+"*,"+eb+"*"),mb=new RegExp("^"+eb+"*([>+~]|"+eb+")"+eb+"*"),nb=new RegExp(eb+"*[+~]"),ob=new RegExp("="+eb+"*([^\\]'\"]*)"+eb+"*\\]","g"),pb=new RegExp(jb),qb=new RegExp("^"+hb+"$"),rb={ID:new RegExp("^#("+gb+")"),CLASS:new RegExp("^\\.("+gb+")"),TAG:new RegExp("^("+gb.replace("w","w*")+")"),ATTR:new RegExp("^"+ib),PSEUDO:new RegExp("^"+jb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+eb+"*(even|odd|(([+-]|)(\\d*)n|)"+eb+"*(?:([+-]|)"+eb+"*(\\d+)|))"+eb+"*\\)|)","i"),bool:new RegExp("^(?:"+db+")$","i"),needsContext:new RegExp("^"+eb+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+eb+"*((?:-\\d)?\\d*)"+eb+"*\\)|)(?=[^-]|$)","i")},sb=/^[^{]+\{\s*\[native \w/,tb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ub=/^(?:input|select|textarea|button)$/i,vb=/^h\d$/i,wb=/'|\\/g,xb=new RegExp("\\\\([\\da-f]{1,6}"+eb+"?|("+eb+")|.)","ig"),yb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{ab.apply(Z=bb.call(O.childNodes),O.childNodes),Z[O.childNodes.length].nodeType}catch(zb){ab={apply:Z.length?function(a,b){_.apply(a,bb.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}B=c.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},x=c.support={},F=c.setDocument=function(a){var b=a?a.ownerDocument||a:O,c=b.defaultView;return b!==G&&9===b.nodeType&&b.documentElement?(G=b,H=b.documentElement,I=!B(b),c&&c.attachEvent&&c!==c.top&&c.attachEvent("onbeforeunload",function(){F()}),x.attributes=f(function(a){return a.className="i",!a.getAttribute("className")}),x.getElementsByTagName=f(function(a){return a.appendChild(b.createComment("")),!a.getElementsByTagName("*").length}),x.getElementsByClassName=f(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),x.getById=f(function(a){return H.appendChild(a).id=N,!b.getElementsByName||!b.getElementsByName(N).length}),x.getById?(z.find.ID=function(a,b){if(typeof b.getElementById!==W&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},z.filter.ID=function(a){var b=a.replace(xb,yb);return function(a){return a.getAttribute("id")===b}}):(delete z.find.ID,z.filter.ID=function(a){var b=a.replace(xb,yb);return function(a){var c=typeof a.getAttributeNode!==W&&a.getAttributeNode("id");return c&&c.value===b}}),z.find.TAG=x.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==W?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},z.find.CLASS=x.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==W&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(x.qsa=sb.test(b.querySelectorAll))&&(f(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||J.push("\\["+eb+"*(?:value|"+db+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),f(function(a){var c=b.createElement("input");c.setAttribute("type","hidden"),a.appendChild(c).setAttribute("t",""),a.querySelectorAll("[t^='']").length&&J.push("[*^$]="+eb+"*(?:''|\"\")"),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(x.matchesSelector=sb.test(L=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&f(function(a){x.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",jb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),M=sb.test(H.contains)||H.compareDocumentPosition?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=H.compareDocumentPosition?function(a,c){if(a===c)return U=!0,0;var d=c.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(c);return d?1&d||!x.sortDetached&&c.compareDocumentPosition(a)===d?a===b||M(O,a)?-1:c===b||M(O,c)?1:E?cb.call(E,a)-cb.call(E,c):0:4&d?-1:1:a.compareDocumentPosition?-1:1}:function(a,c){var d,e=0,f=a.parentNode,g=c.parentNode,i=[a],j=[c];if(a===c)return U=!0,0;if(!f||!g)return a===b?-1:c===b?1:f?-1:g?1:E?cb.call(E,a)-cb.call(E,c):0;if(f===g)return h(a,c);for(d=a;d=d.parentNode;)i.unshift(d);for(d=c;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?h(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},b):G},c.matches=function(a,b){return c(a,null,null,b)},c.matchesSelector=function(a,b){if((a.ownerDocument||a)!==G&&F(a),b=b.replace(ob,"='$1']"),!(!x.matchesSelector||!I||K&&K.test(b)||J&&J.test(b)))try{var d=L.call(a,b);if(d||x.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return c(b,G,null,[a]).length>0},c.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},c.attr=function(a,c){(a.ownerDocument||a)!==G&&F(a);var d=z.attrHandle[c.toLowerCase()],e=d&&Y.call(z.attrHandle,c.toLowerCase())?d(a,c,!I):b;return e===b?x.attributes||!I?a.getAttribute(c):(e=a.getAttributeNode(c))&&e.specified?e.value:null:e},c.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},c.uniqueSort=function(a){var b,c=[],d=0,e=0;if(U=!x.detectDuplicates,E=!x.sortStable&&a.slice(0),a.sort(V),U){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return a},A=c.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=A(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d];d++)c+=A(b);return c},z=c.selectors={cacheLength:50,createPseudo:e,match:rb,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(xb,yb),a[3]=(a[4]||a[5]||"").replace(xb,yb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||c.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&c.error(a[0]),a},PSEUDO:function(a){var c,d=!a[5]&&a[2];return rb.CHILD.test(a[0])?null:(a[3]&&a[4]!==b?a[2]=a[4]:d&&pb.test(d)&&(c=m(d,!0))&&(c=d.indexOf(")",d.length-c)-d.length)&&(a[0]=a[0].slice(0,c),a[2]=d.slice(0,c)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(xb,yb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+eb+")"+a+"("+eb+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==W&&a.getAttribute("class")||"")})},ATTR:function(a,b,d){return function(e){var f=c.attr(e,a);return null==f?"!="===b:b?(f+="","="===b?f===d:"!="===b?f!==d:"^="===b?d&&0===f.indexOf(d):"*="===b?d&&f.indexOf(d)>-1:"$="===b?d&&f.slice(-d.length)===d:"~="===b?(" "+f+" ").indexOf(d)>-1:"|="===b?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var d,f=z.pseudos[a]||z.setFilters[a.toLowerCase()]||c.error("unsupported pseudo: "+a);return f[N]?f(b):f.length>1?(d=[a,a,"",b],z.setFilters.hasOwnProperty(a.toLowerCase())?e(function(a,c){for(var d,e=f(a,b),g=e.length;g--;)d=cb.call(a,e[g]),a[d]=!(c[d]=e[g])}):function(a){return f(a,0,d)}):f}},pseudos:{not:e(function(a){var b=[],c=[],d=C(a.replace(kb,"$1"));return d[N]?e(function(a,b,c,e){for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:e(function(a){return function(b){return c(a,b).length>0}}),contains:e(function(a){return function(b){return(b.textContent||b.innerText||A(b)).indexOf(a)>-1}}),lang:e(function(a){return qb.test(a||"")||c.error("unsupported lang: "+a),a=a.replace(xb,yb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeName>"@"||3===a.nodeType||4===a.nodeType)return!1;return!0},parent:function(a){return!z.pseudos.empty(a)},header:function(a){return vb.test(a.nodeName)},input:function(a){return ub.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||b.toLowerCase()===a.type)},first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[0>c?c+b:c]}),even:k(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);
return a}),gt:k(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},z.pseudos.nth=z.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})z.pseudos[w]=i(w);for(w in{submit:!0,reset:!0})z.pseudos[w]=j(w);l.prototype=z.filters=z.pseudos,z.setFilters=new l,C=c.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=m(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d))}return f},x.sortStable=N.split("").sort(V).join("")===N,x.detectDuplicates=U,F(),x.sortDetached=f(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),f(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||g("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),x.attributes&&f(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||g("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),f(function(a){return null==a.getAttribute("disabled")})||g(db,function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&d.specified?d.value:a[b]===!0?b.toLowerCase():null}),fb.find=c,fb.expr=c.selectors,fb.expr[":"]=fb.expr.pseudos,fb.unique=c.uniqueSort,fb.text=c.getText,fb.isXMLDoc=c.isXML,fb.contains=c.contains}(a);var ob={};fb.Callbacks=function(a){a="string"==typeof a?ob[a]||d(a):fb.extend({},a);var c,e,f,g,h,i,j=[],k=!a.once&&[],l=function(b){for(c=a.memory&&b,e=!0,i=g||0,g=0,h=j.length,f=!0;j&&h>i;i++)if(j[i].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}f=!1,j&&(k?k.length&&l(k.shift()):c?j=[]:m.disable())},m={add:function(){if(j){var b=j.length;!function d(b){fb.each(b,function(b,c){var e=fb.type(c);"function"===e?a.unique&&m.has(c)||j.push(c):c&&c.length&&"string"!==e&&d(c)})}(arguments),f?h=j.length:c&&(g=b,l(c))}return this},remove:function(){return j&&fb.each(arguments,function(a,b){for(var c;(c=fb.inArray(b,j,c))>-1;)j.splice(c,1),f&&(h>=c&&h--,i>=c&&i--)}),this},has:function(a){return a?fb.inArray(a,j)>-1:!(!j||!j.length)},empty:function(){return j=[],h=0,this},disable:function(){return j=k=c=b,this},disabled:function(){return!j},lock:function(){return k=b,c||m.disable(),this},locked:function(){return!k},fireWith:function(a,b){return!j||e&&!k||(b=b||[],b=[a,b.slice?b.slice():b],f?k.push(b):l(b)),this},fire:function(){return m.fireWith(this,arguments),this},fired:function(){return!!e}};return m},fb.extend({Deferred:function(a){var b=[["resolve","done",fb.Callbacks("once memory"),"resolved"],["reject","fail",fb.Callbacks("once memory"),"rejected"],["notify","progress",fb.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return fb.Deferred(function(c){fb.each(b,function(b,f){var g=f[0],h=fb.isFunction(a[b])&&a[b];e[f[1]](function(){var a=h&&h.apply(this,arguments);a&&fb.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g+"With"](this===d?c.promise():this,h?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?fb.extend(a,d):d}},e={};return d.pipe=d.then,fb.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=ab.call(arguments),g=f.length,h=1!==g||a&&fb.isFunction(a.promise)?g:0,i=1===h?a:fb.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?ab.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&fb.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}}),fb.support=function(b){var c=T.createElement("input"),d=T.createDocumentFragment(),e=T.createElement("div"),f=T.createElement("select"),g=f.appendChild(T.createElement("option"));return c.type?(c.type="checkbox",b.checkOn=""!==c.value,b.optSelected=g.selected,b.reliableMarginRight=!0,b.boxSizingReliable=!0,b.pixelPosition=!1,c.checked=!0,b.noCloneChecked=c.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled,c=T.createElement("input"),c.value="t",c.type="radio",b.radioValue="t"===c.value,c.setAttribute("checked","t"),c.setAttribute("name","t"),d.appendChild(c),b.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked,b.focusinBubbles="onfocusin"in a,e.style.backgroundClip="content-box",e.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===e.style.backgroundClip,fb(function(){var c,d,f="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",g=T.getElementsByTagName("body")[0];g&&(c=T.createElement("div"),c.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",g.appendChild(c).appendChild(e),e.innerHTML="",e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",fb.swap(g,null!=g.style.zoom?{zoom:1}:{},function(){b.boxSizing=4===e.offsetWidth}),a.getComputedStyle&&(b.pixelPosition="1%"!==(a.getComputedStyle(e,null)||{}).top,b.boxSizingReliable="4px"===(a.getComputedStyle(e,null)||{width:"4px"}).width,d=e.appendChild(T.createElement("div")),d.style.cssText=e.style.cssText=f,d.style.marginRight=d.style.width="0",e.style.width="1px",b.reliableMarginRight=!parseFloat((a.getComputedStyle(d,null)||{}).marginRight)),g.removeChild(c))}),b):b}({});var pb,qb,rb=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,sb=/([A-Z])/g;e.uid=1,e.accepts=function(a){return a.nodeType?1===a.nodeType||9===a.nodeType:!0},e.prototype={key:function(a){if(!e.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=e.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,fb.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(fb.isEmptyObject(f))fb.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,c){var d=this.cache[this.key(a)];return c===b?d:d[c]},access:function(a,c,d){var e;return c===b||c&&"string"==typeof c&&d===b?(e=this.get(a,c),e!==b?e:this.get(a,fb.camelCase(c))):(this.set(a,c,d),d!==b?d:c)},remove:function(a,c){var d,e,f,g=this.key(a),h=this.cache[g];if(c===b)this.cache[g]={};else{fb.isArray(c)?e=c.concat(c.map(fb.camelCase)):(f=fb.camelCase(c),c in h?e=[c,f]:(e=f,e=e in h?[e]:e.match(hb)||[])),d=e.length;for(;d--;)delete h[e[d]]}},hasData:function(a){return!fb.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}},pb=new e,qb=new e,fb.extend({acceptData:e.accepts,hasData:function(a){return pb.hasData(a)||qb.hasData(a)},data:function(a,b,c){return pb.access(a,b,c)},removeData:function(a,b){pb.remove(a,b)},_data:function(a,b,c){return qb.access(a,b,c)},_removeData:function(a,b){qb.remove(a,b)}}),fb.fn.extend({data:function(a,c){var d,e,g=this[0],h=0,i=null;if(a===b){if(this.length&&(i=pb.get(g),1===g.nodeType&&!qb.get(g,"hasDataAttrs"))){for(d=g.attributes;h<d.length;h++)e=d[h].name,0===e.indexOf("data-")&&(e=fb.camelCase(e.slice(5)),f(g,e,i[e]));qb.set(g,"hasDataAttrs",!0)}return i}return"object"==typeof a?this.each(function(){pb.set(this,a)}):fb.access(this,function(c){var d,e=fb.camelCase(a);if(g&&c===b){if(d=pb.get(g,a),d!==b)return d;if(d=pb.get(g,e),d!==b)return d;if(d=f(g,e,b),d!==b)return d}else this.each(function(){var d=pb.get(this,e);pb.set(this,e,c),-1!==a.indexOf("-")&&d!==b&&pb.set(this,a,c)})},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){pb.remove(this,a)})}}),fb.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=qb.get(a,b),c&&(!d||fb.isArray(c)?d=qb.access(a,b,fb.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=fb.queue(a,b),d=c.length,e=c.shift(),f=fb._queueHooks(a,b),g=function(){fb.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return qb.get(a,c)||qb.access(a,c,{empty:fb.Callbacks("once memory").add(function(){qb.remove(a,[b+"queue",c])})})}}),fb.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),arguments.length<d?fb.queue(this[0],a):c===b?this:this.each(function(){var b=fb.queue(this,a,c);fb._queueHooks(this,a),"fx"===a&&"inprogress"!==b[0]&&fb.dequeue(this,a)})},dequeue:function(a){return this.each(function(){fb.dequeue(this,a)})},delay:function(a,b){return a=fb.fx?fb.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=fb.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};for("string"!=typeof a&&(c=a,a=b),a=a||"fx";h--;)d=qb.get(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var tb,ub,vb=/[\t\r\n\f]/g,wb=/\r/g,xb=/^(?:input|select|textarea|button)$/i;fb.fn.extend({attr:function(a,b){return fb.access(this,fb.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){fb.removeAttr(this,a)})},prop:function(a,b){return fb.access(this,fb.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[fb.propFix[a]||a]})},addClass:function(a){var b,c,d,e,f,g=0,h=this.length,i="string"==typeof a&&a;if(fb.isFunction(a))return this.each(function(b){fb(this).addClass(a.call(this,b,this.className))});if(i)for(b=(a||"").match(hb)||[];h>g;g++)if(c=this[g],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vb," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");c.className=fb.trim(d)}return this},removeClass:function(a){var b,c,d,e,f,g=0,h=this.length,i=0===arguments.length||"string"==typeof a&&a;if(fb.isFunction(a))return this.each(function(b){fb(this).removeClass(a.call(this,b,this.className))});if(i)for(b=(a||"").match(hb)||[];h>g;g++)if(c=this[g],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vb," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");c.className=a?fb.trim(d):""}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(fb.isFunction(a)?function(c){fb(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=fb(this),f=a.match(hb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===R||"boolean"===c)&&(this.className&&qb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":qb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vb," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];{if(arguments.length)return e=fb.isFunction(a),this.each(function(d){var f;1===this.nodeType&&(f=e?a.call(this,d,fb(this).val()):a,null==f?f="":"number"==typeof f?f+="":fb.isArray(f)&&(f=fb.map(f,function(a){return null==a?"":a+""})),c=fb.valHooks[this.type]||fb.valHooks[this.nodeName.toLowerCase()],c&&"set"in c&&c.set(this,f,"value")!==b||(this.value=f))});if(f)return c=fb.valHooks[f.type]||fb.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,"string"==typeof d?d.replace(wb,""):null==d?"":d)}}}),fb.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(fb.support.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&fb.nodeName(c.parentNode,"optgroup"))){if(b=fb(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=fb.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=fb.inArray(fb(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}},attr:function(a,c,d){var e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return typeof a.getAttribute===R?fb.prop(a,c,d):(1===g&&fb.isXMLDoc(a)||(c=c.toLowerCase(),e=fb.attrHooks[c]||(fb.expr.match.bool.test(c)?ub:tb)),d===b?e&&"get"in e&&null!==(f=e.get(a,c))?f:(f=fb.find.attr(a,c),null==f?b:f):null!==d?e&&"set"in e&&(f=e.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d):void fb.removeAttr(a,c))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(hb);if(f&&1===a.nodeType)for(;c=f[e++];)d=fb.propFix[c]||c,fb.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!fb.support.radioValue&&"radio"===b&&fb.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(a&&3!==h&&8!==h&&2!==h)return g=1!==h||!fb.isXMLDoc(a),g&&(c=fb.propFix[c]||c,f=fb.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||xb.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),ub={set:function(a,b,c){return b===!1?fb.removeAttr(a,c):a.setAttribute(c,c),c}},fb.each(fb.expr.match.bool.source.match(/\w+/g),function(a,c){var d=fb.expr.attrHandle[c]||fb.find.attr;fb.expr.attrHandle[c]=function(a,c,e){var f=fb.expr.attrHandle[c],g=e?b:(fb.expr.attrHandle[c]=b)!=d(a,c,e)?c.toLowerCase():null;return fb.expr.attrHandle[c]=f,g}}),fb.support.optSelected||(fb.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),fb.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){fb.propFix[this.toLowerCase()]=this}),fb.each(["radio","checkbox"],function(){fb.valHooks[this]={set:function(a,b){return fb.isArray(b)?a.checked=fb.inArray(fb(a).val(),b)>=0:void 0}},fb.support.checkOn||(fb.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var yb=/^key/,zb=/^(?:mouse|contextmenu)|click/,Ab=/^(?:focusinfocus|focusoutblur)$/,Bb=/^([^.]*)(?:\.(.+)|)$/;fb.event={global:{},add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r=qb.get(a);if(r){for(d.handler&&(g=d,d=g.handler,f=g.selector),d.guid||(d.guid=fb.guid++),(j=r.events)||(j=r.events={}),(h=r.handle)||(h=r.handle=function(a){return typeof fb===R||a&&fb.event.triggered===a.type?b:fb.event.dispatch.apply(h.elem,arguments)},h.elem=a),c=(c||"").match(hb)||[""],k=c.length;k--;)i=Bb.exec(c[k])||[],o=q=i[1],p=(i[2]||"").split(".").sort(),o&&(m=fb.event.special[o]||{},o=(f?m.delegateType:m.bindType)||o,m=fb.event.special[o]||{},l=fb.extend({type:o,origType:q,data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&fb.expr.match.needsContext.test(f),namespace:p.join(".")},g),(n=j[o])||(n=j[o]=[],n.delegateCount=0,m.setup&&m.setup.call(a,e,p,h)!==!1||a.addEventListener&&a.addEventListener(o,h,!1)),m.add&&(m.add.call(a,l),l.handler.guid||(l.handler.guid=d.guid)),f?n.splice(n.delegateCount++,0,l):n.push(l),fb.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=qb.hasData(a)&&qb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(hb)||[""],j=b.length;j--;)if(h=Bb.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=fb.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||fb.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)fb.event.remove(a,n+b[j],c,d,!0);fb.isEmptyObject(i)&&(delete q.handle,qb.remove(a,"events"))}},trigger:function(c,d,e,f){var g,h,i,j,k,l,m,n=[e||T],o=db.call(c,"type")?c.type:c,p=db.call(c,"namespace")?c.namespace.split("."):[];if(h=i=e=e||T,3!==e.nodeType&&8!==e.nodeType&&!Ab.test(o+fb.event.triggered)&&(o.indexOf(".")>=0&&(p=o.split("."),o=p.shift(),p.sort()),k=o.indexOf(":")<0&&"on"+o,c=c[fb.expando]?c:new fb.Event(o,"object"==typeof c&&c),c.isTrigger=f?2:3,c.namespace=p.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=b,c.target||(c.target=e),d=null==d?[c]:fb.makeArray(d,[c]),m=fb.event.special[o]||{},f||!m.trigger||m.trigger.apply(e,d)!==!1)){if(!f&&!m.noBubble&&!fb.isWindow(e)){for(j=m.delegateType||o,Ab.test(j+o)||(h=h.parentNode);h;h=h.parentNode)n.push(h),i=h;i===(e.ownerDocument||T)&&n.push(i.defaultView||i.parentWindow||a)}for(g=0;(h=n[g++])&&!c.isPropagationStopped();)c.type=g>1?j:m.bindType||o,l=(qb.get(h,"events")||{})[c.type]&&qb.get(h,"handle"),l&&l.apply(h,d),l=k&&h[k],l&&fb.acceptData(h)&&l.apply&&l.apply(h,d)===!1&&c.preventDefault();return c.type=o,f||c.isDefaultPrevented()||m._default&&m._default.apply(n.pop(),d)!==!1||!fb.acceptData(e)||k&&fb.isFunction(e[o])&&!fb.isWindow(e)&&(i=e[k],i&&(e[k]=null),fb.event.triggered=o,e[o](),fb.event.triggered=b,i&&(e[k]=i)),c.result}},dispatch:function(a){a=fb.event.fix(a);var c,d,e,f,g,h=[],i=ab.call(arguments),j=(qb.get(this,"events")||{})[a.type]||[],k=fb.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){for(h=fb.event.handlers.call(this,a,j),c=0;(f=h[c++])&&!a.isPropagationStopped();)for(a.currentTarget=f.elem,d=0;(g=f.handlers[d++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((fb.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),e!==b&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,c){var d,e,f,g,h=[],i=c.delegateCount,j=a.target;if(i&&j.nodeType&&(!a.button||"click"!==a.type))for(;j!==this;j=j.parentNode||this)if(j.disabled!==!0||"click"!==a.type){for(e=[],d=0;i>d;d++)g=c[d],f=g.selector+" ",e[f]===b&&(e[f]=g.needsContext?fb(f,this).index(j)>=0:fb.find(f,this,null,[j]).length),e[f]&&e.push(g);e.length&&h.push({elem:j,handlers:e})}return i<c.length&&h.push({elem:this,handlers:c.slice(i)}),h},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button;return null==a.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||T,e=d.documentElement,f=d.body,a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||g===b||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[fb.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=zb.test(e)?this.mouseHooks:yb.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new fb.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=T),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==i()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===i()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&fb.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return fb.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){a.result!==b&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=fb.extend(new fb.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?fb.event.trigger(e,null,b):fb.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},fb.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},fb.Event=function(a,b){return this instanceof fb.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.getPreventDefault&&a.getPreventDefault()?g:h):this.type=a,b&&fb.extend(this,b),this.timeStamp=a&&a.timeStamp||fb.now(),void(this[fb.expando]=!0)):new fb.Event(a,b)},fb.Event.prototype={isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=g,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=g,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=g,this.stopPropagation()}},fb.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){fb.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!fb.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),fb.support.focusinBubbles||fb.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){fb.event.simulate(b,a.target,fb.event.fix(a),!0)};fb.event.special[b]={setup:function(){0===c++&&T.addEventListener(a,d,!0)},teardown:function(){0===--c&&T.removeEventListener(a,d,!0)}}}),fb.fn.extend({on:function(a,c,d,e,f){var g,i;if("object"==typeof a){"string"!=typeof c&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],f);return this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,d=b):(e=d,d=c,c=b)),e===!1)e=h;else if(!e)return this;return 1===f&&(g=e,e=function(a){return fb().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=fb.guid++)),this.each(function(){fb.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,fb(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if("object"==typeof a){for(f in a)this.off(f,c,a[f]);return this}return(c===!1||"function"==typeof c)&&(d=c,c=b),d===!1&&(d=h),this.each(function(){fb.event.remove(this,a,d,c)})},trigger:function(a,b){return this.each(function(){fb.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?fb.event.trigger(a,b,c,!0):void 0}});var Cb=/^.[^:#\[\.,]*$/,Db=/^(?:parents|prev(?:Until|All))/,Eb=fb.expr.match.needsContext,Fb={children:!0,contents:!0,next:!0,prev:!0};fb.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(fb(a).filter(function(){for(b=0;e>b;b++)if(fb.contains(d[b],this))return!0}));for(b=0;e>b;b++)fb.find(a,d[b],c);return c=this.pushStack(e>1?fb.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},has:function(a){var b=fb(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(fb.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(k(this,a||[],!0))},filter:function(a){return this.pushStack(k(this,a||[],!1))},is:function(a){return!!k(this,"string"==typeof a&&Eb.test(a)?fb(a):a||[],!1).length},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=Eb.test(a)||"string"!=typeof a?fb(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&fb.find.matchesSelector(c,a))){c=f.push(c);break}return this.pushStack(f.length>1?fb.unique(f):f)},index:function(a){return a?"string"==typeof a?bb.call(fb(a),this[0]):bb.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){var c="string"==typeof a?fb(a,b):fb.makeArray(a&&a.nodeType?[a]:a),d=fb.merge(this.get(),c);return this.pushStack(fb.unique(d))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),fb.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return fb.dir(a,"parentNode")},parentsUntil:function(a,b,c){return fb.dir(a,"parentNode",c)},next:function(a){return j(a,"nextSibling")},prev:function(a){return j(a,"previousSibling")},nextAll:function(a){return fb.dir(a,"nextSibling")},prevAll:function(a){return fb.dir(a,"previousSibling")},nextUntil:function(a,b,c){return fb.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return fb.dir(a,"previousSibling",c)},siblings:function(a){return fb.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return fb.sibling(a.firstChild)},contents:function(a){return a.contentDocument||fb.merge([],a.childNodes)}},function(a,b){fb.fn[a]=function(c,d){var e=fb.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=fb.filter(d,e)),this.length>1&&(Fb[a]||fb.unique(e),Db.test(a)&&e.reverse()),this.pushStack(e)}}),fb.extend({filter:function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?fb.find.matchesSelector(d,a)?[d]:[]:fb.find.matches(a,fb.grep(b,function(a){return 1===a.nodeType}))},dir:function(a,c,d){for(var e=[],f=d!==b;(a=a[c])&&9!==a.nodeType;)if(1===a.nodeType){if(f&&fb(a).is(d))break;e.push(a)}return e},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Gb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Hb=/<([\w:]+)/,Ib=/<|&#?\w+;/,Jb=/<(?:script|style|link)/i,Kb=/^(?:checkbox|radio)$/i,Lb=/checked\s*(?:[^=]|=\s*.checked.)/i,Mb=/^$|\/(?:java|ecma)script/i,Nb=/^true\/(.*)/,Ob=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Pb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pb.optgroup=Pb.option,Pb.tbody=Pb.tfoot=Pb.colgroup=Pb.caption=Pb.thead,Pb.th=Pb.td,fb.fn.extend({text:function(a){return fb.access(this,function(a){return a===b?fb.text(this):this.empty().append((this[0]&&this[0].ownerDocument||T).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=l(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=l(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?fb.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||fb.cleanData(q(c)),c.parentNode&&(b&&fb.contains(c.ownerDocument,c)&&o(q(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(fb.cleanData(q(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return fb.clone(this,a,b)})},html:function(a){return fb.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b&&1===c.nodeType)return c.innerHTML;if("string"==typeof a&&!Jb.test(a)&&!Pb[(Hb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Gb,"<$1></$2>");try{for(;e>d;d++)c=this[d]||{},1===c.nodeType&&(fb.cleanData(q(c,!1)),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=fb.map(this,function(a){return[a.nextSibling,a.parentNode]}),b=0;return this.domManip(arguments,function(c){var d=a[b++],e=a[b++];e&&(d&&d.parentNode!==e&&(d=this.nextSibling),fb(this).remove(),e.insertBefore(c,d))},!0),b?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b,c){a=$.apply([],a);var d,e,f,g,h,i,j=0,k=this.length,l=this,o=k-1,p=a[0],r=fb.isFunction(p);if(r||!(1>=k||"string"!=typeof p||fb.support.checkClone)&&Lb.test(p))return this.each(function(d){var e=l.eq(d);r&&(a[0]=p.call(this,d,e.html())),e.domManip(a,b,c)});if(k&&(d=fb.buildFragment(a,this[0].ownerDocument,!1,!c&&this),e=d.firstChild,1===d.childNodes.length&&(d=e),e)){for(f=fb.map(q(d,"script"),m),g=f.length;k>j;j++)h=d,j!==o&&(h=fb.clone(h,!0,!0),g&&fb.merge(f,q(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,fb.map(f,n),j=0;g>j;j++)h=f[j],Mb.test(h.type||"")&&!qb.access(h,"globalEval")&&fb.contains(i,h)&&(h.src?fb._evalUrl(h.src):fb.globalEval(h.textContent.replace(Ob,"")))}return this}}),fb.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){fb.fn[a]=function(a){for(var c,d=[],e=fb(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),fb(e[g])[b](c),_.apply(d,c.get());return this.pushStack(d)}}),fb.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=fb.contains(a.ownerDocument,a);if(!(fb.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||fb.isXMLDoc(a)))for(g=q(h),f=q(a),d=0,e=f.length;e>d;d++)r(f[d],g[d]);if(b)if(c)for(f=f||q(a),g=g||q(h),d=0,e=f.length;e>d;d++)p(f[d],g[d]);else p(a,h);return g=q(h,"script"),g.length>0&&o(g,!i&&q(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=0,l=a.length,m=b.createDocumentFragment(),n=[];l>k;k++)if(e=a[k],e||0===e)if("object"===fb.type(e))fb.merge(n,e.nodeType?[e]:e);else if(Ib.test(e)){for(f=f||m.appendChild(b.createElement("div")),g=(Hb.exec(e)||["",""])[1].toLowerCase(),h=Pb[g]||Pb._default,f.innerHTML=h[1]+e.replace(Gb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;fb.merge(n,f.childNodes),f=m.firstChild,f.textContent=""}else n.push(b.createTextNode(e));for(m.textContent="",k=0;e=n[k++];)if((!d||-1===fb.inArray(e,d))&&(i=fb.contains(e.ownerDocument,e),f=q(m.appendChild(e),"script"),i&&o(f),c))for(j=0;e=f[j++];)Mb.test(e.type||"")&&c.push(e);return m},cleanData:function(a){for(var c,d,f,g,h,i,j=fb.event.special,k=0;(d=a[k])!==b;k++){if(e.accepts(d)&&(h=d[qb.expando],h&&(c=qb.cache[h]))){if(f=Object.keys(c.events||{}),f.length)for(i=0;(g=f[i])!==b;i++)j[g]?fb.event.remove(d,g):fb.removeEvent(d,g,c.handle);qb.cache[h]&&delete qb.cache[h]}delete pb.cache[d[pb.expando]]}},_evalUrl:function(a){return fb.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),fb.fn.extend({wrapAll:function(a){var b;return fb.isFunction(a)?this.each(function(b){fb(this).wrapAll(a.call(this,b))}):(this[0]&&(b=fb(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(fb.isFunction(a)?function(b){fb(this).wrapInner(a.call(this,b))}:function(){var b=fb(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=fb.isFunction(a);return this.each(function(c){fb(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){fb.nodeName(this,"body")||fb(this).replaceWith(this.childNodes)}).end()}});var Qb,Rb,Sb=/^(none|table(?!-c[ea]).+)/,Tb=/^margin/,Ub=new RegExp("^("+gb+")(.*)$","i"),Vb=new RegExp("^("+gb+")(?!px)[a-z%]+$","i"),Wb=new RegExp("^([+-])=("+gb+")","i"),Xb={BODY:"block"},Yb={position:"absolute",visibility:"hidden",display:"block"},Zb={letterSpacing:0,fontWeight:400},$b=["Top","Right","Bottom","Left"],_b=["Webkit","O","Moz","ms"];
fb.fn.extend({css:function(a,c){return fb.access(this,function(a,c,d){var e,f,g={},h=0;if(fb.isArray(c)){for(e=u(a),f=c.length;f>h;h++)g[c[h]]=fb.css(a,c[h],!1,e);return g}return d!==b?fb.style(a,c,d):fb.css(a,c)},a,c,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){t(this)?fb(this).show():fb(this).hide()})}}),fb.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Qb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h,i=fb.camelCase(c),j=a.style;return c=fb.cssProps[i]||(fb.cssProps[i]=s(j,i)),h=fb.cssHooks[c]||fb.cssHooks[i],d===b?h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c]:(g=typeof d,"string"===g&&(f=Wb.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(fb.css(a,c)),g="number"),null==d||"number"===g&&isNaN(d)||("number"!==g||fb.cssNumber[i]||(d+="px"),fb.support.clearCloneStyle||""!==d||0!==c.indexOf("background")||(j[c]="inherit"),h&&"set"in h&&(d=h.set(a,d,e))===b||(j[c]=d)),void 0)}},css:function(a,c,d,e){var f,g,h,i=fb.camelCase(c);return c=fb.cssProps[i]||(fb.cssProps[i]=s(a.style,i)),h=fb.cssHooks[c]||fb.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,d)),f===b&&(f=Qb(a,c,e)),"normal"===f&&c in Zb&&(f=Zb[c]),""===d||d?(g=parseFloat(f),d===!0||fb.isNumeric(g)?g||0:f):f}}),Qb=function(a,c,d){var e,f,g,h=d||u(a),i=h?h.getPropertyValue(c)||h[c]:b,j=a.style;return h&&(""!==i||fb.contains(a.ownerDocument,a)||(i=fb.style(a,c)),Vb.test(i)&&Tb.test(c)&&(e=j.width,f=j.minWidth,g=j.maxWidth,j.minWidth=j.maxWidth=j.width=i,i=h.width,j.width=e,j.minWidth=f,j.maxWidth=g)),i},fb.each(["height","width"],function(a,b){fb.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Sb.test(fb.css(a,"display"))?fb.swap(a,Yb,function(){return y(a,b,d)}):y(a,b,d):void 0},set:function(a,c,d){var e=d&&u(a);return w(a,c,d?x(a,b,d,fb.support.boxSizing&&"border-box"===fb.css(a,"boxSizing",!1,e),e):0)}}}),fb(function(){fb.support.reliableMarginRight||(fb.cssHooks.marginRight={get:function(a,b){return b?fb.swap(a,{display:"inline-block"},Qb,[a,"marginRight"]):void 0}}),!fb.support.pixelPosition&&fb.fn.position&&fb.each(["top","left"],function(a,b){fb.cssHooks[b]={get:function(a,c){return c?(c=Qb(a,b),Vb.test(c)?fb(a).position()[b]+"px":c):void 0}}})}),fb.expr&&fb.expr.filters&&(fb.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},fb.expr.filters.visible=function(a){return!fb.expr.filters.hidden(a)}),fb.each({margin:"",padding:"",border:"Width"},function(a,b){fb.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+$b[d]+b]=f[d]||f[d-2]||f[0];return e}},Tb.test(a)||(fb.cssHooks[a+b].set=w)});var ac=/%20/g,bc=/\[\]$/,cc=/\r?\n/g,dc=/^(?:submit|button|image|reset|file)$/i,ec=/^(?:input|select|textarea|keygen)/i;fb.fn.extend({serialize:function(){return fb.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=fb.prop(this,"elements");return a?fb.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!fb(this).is(":disabled")&&ec.test(this.nodeName)&&!dc.test(a)&&(this.checked||!Kb.test(a))}).map(function(a,b){var c=fb(this).val();return null==c?null:fb.isArray(c)?fb.map(c,function(a){return{name:b.name,value:a.replace(cc,"\r\n")}}):{name:b.name,value:c.replace(cc,"\r\n")}}).get()}}),fb.param=function(a,c){var d,e=[],f=function(a,b){b=fb.isFunction(b)?b():null==b?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(c===b&&(c=fb.ajaxSettings&&fb.ajaxSettings.traditional),fb.isArray(a)||a.jquery&&!fb.isPlainObject(a))fb.each(a,function(){f(this.name,this.value)});else for(d in a)B(d,a[d],c,f);return e.join("&").replace(ac,"+")},fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){fb.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),fb.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var fc,gc,hc=fb.now(),ic=/\?/,jc=/#.*$/,kc=/([?&])_=[^&]*/,lc=/^(.*?):[ \t]*([^\r\n]*)$/gm,mc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,nc=/^(?:GET|HEAD)$/,oc=/^\/\//,pc=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,qc=fb.fn.load,rc={},sc={},tc="*/".concat("*");try{gc=S.href}catch(uc){gc=T.createElement("a"),gc.href="",gc=gc.href}fc=pc.exec(gc.toLowerCase())||[],fb.fn.load=function(a,c,d){if("string"!=typeof a&&qc)return qc.apply(this,arguments);var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i),a=a.slice(0,i)),fb.isFunction(c)?(d=c,c=b):c&&"object"==typeof c&&(f="POST"),h.length>0&&fb.ajax({url:a,type:f,dataType:"html",data:c}).done(function(a){g=arguments,h.html(e?fb("<div>").append(fb.parseHTML(a)).find(e):a)}).complete(d&&function(a,b){h.each(d,g||[a.responseText,b,a])}),this},fb.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){fb.fn[b]=function(a){return this.on(b,a)}}),fb.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gc,type:"GET",isLocal:mc.test(fc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":fb.parseJSON,"text xml":fb.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?E(E(a,fb.ajaxSettings),b):E(fb.ajaxSettings,a)},ajaxPrefilter:C(rc),ajaxTransport:C(sc),ajax:function(a,c){function d(a,c,d,h){var j,l,s,t,v,x=c;2!==u&&(u=2,i&&clearTimeout(i),e=b,g=h||"",w.readyState=a>0?4:0,j=a>=200&&300>a||304===a,d&&(t=F(m,w,d)),t=G(m,t,w,j),j?(m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(fb.lastModified[f]=v),v=w.getResponseHeader("etag"),v&&(fb.etag[f]=v)),204===a||"HEAD"===m.type?x="nocontent":304===a?x="notmodified":(x=t.state,l=t.data,s=t.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),w.status=a,w.statusText=(c||x)+"",j?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=b,k&&o.trigger(j?"ajaxSuccess":"ajaxError",[w,m,j?l:s]),q.fireWith(n,[w,x]),k&&(o.trigger("ajaxComplete",[w,m]),--fb.active||fb.event.trigger("ajaxStop")))}"object"==typeof a&&(c=a,a=b),c=c||{};var e,f,g,h,i,j,k,l,m=fb.ajaxSetup({},c),n=m.context||m,o=m.context&&(n.nodeType||n.jquery)?fb(n):fb.event,p=fb.Deferred(),q=fb.Callbacks("once memory"),r=m.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!h)for(h={};b=lc.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return e&&e.abort(b),d(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,m.url=((a||m.url||gc)+"").replace(jc,"").replace(oc,fc[1]+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=fb.trim(m.dataType||"*").toLowerCase().match(hb)||[""],null==m.crossDomain&&(j=pc.exec(m.url.toLowerCase()),m.crossDomain=!(!j||j[1]===fc[1]&&j[2]===fc[2]&&(j[3]||("http:"===j[1]?"80":"443"))===(fc[3]||("http:"===fc[1]?"80":"443")))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=fb.param(m.data,m.traditional)),D(rc,m,c,w),2===u)return w;k=m.global,k&&0===fb.active++&&fb.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!nc.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(ic.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=kc.test(f)?f.replace(kc,"$1_="+hc++):f+(ic.test(f)?"&":"?")+"_="+hc++)),m.ifModified&&(fb.lastModified[f]&&w.setRequestHeader("If-Modified-Since",fb.lastModified[f]),fb.etag[f]&&w.setRequestHeader("If-None-Match",fb.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tc+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)w.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))return w.abort();v="abort";for(l in{success:1,error:1,complete:1})w[l](m[l]);if(e=D(sc,m,c,w)){w.readyState=1,k&&o.trigger("ajaxSend",[w,m]),m.async&&m.timeout>0&&(i=setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,e.send(s,d)}catch(x){if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return fb.get(a,b,c,"json")},getScript:function(a,c){return fb.get(a,b,c,"script")}}),fb.each(["get","post"],function(a,c){fb[c]=function(a,d,e,f){return fb.isFunction(d)&&(f=f||e,e=d,d=b),fb.ajax({url:a,type:c,dataType:f,data:d,success:e})}}),fb.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return fb.globalEval(a),a}}}),fb.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),fb.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=fb("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),T.head.appendChild(b[0])},abort:function(){c&&c()}}}});var vc=[],wc=/(=)\?(?=&|$)|\?\?/;fb.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=vc.pop()||fb.expando+"_"+hc++;return this[a]=!0,a}}),fb.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.jsonp!==!1&&(wc.test(c.url)?"url":"string"==typeof c.data&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&wc.test(c.data)&&"data");return i||"jsonp"===c.dataTypes[0]?(f=c.jsonpCallback=fb.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,i?c[i]=c[i].replace(wc,"$1"+f):c.jsonp!==!1&&(c.url+=(ic.test(c.url)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||fb.error(f+" was not called"),h[0]},c.dataTypes[0]="json",g=a[f],a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,vc.push(f)),h&&fb.isFunction(g)&&g(h[0]),h=g=b}),"script"):void 0}),fb.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var xc=fb.ajaxSettings.xhr(),yc={0:200,1223:204},zc=0,Ac={};a.ActiveXObject&&fb(a).on("unload",function(){for(var a in Ac)Ac[a]();Ac=b}),fb.support.cors=!!xc&&"withCredentials"in xc,fb.support.ajax=xc=!!xc,fb.ajaxTransport(function(a){var c;return fb.support.cors||xc&&!a.crossDomain?{send:function(d,e){var f,g,h=a.xhr();if(h.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(f in a.xhrFields)h[f]=a.xhrFields[f];a.mimeType&&h.overrideMimeType&&h.overrideMimeType(a.mimeType),a.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)h.setRequestHeader(f,d[f]);c=function(a){return function(){c&&(delete Ac[g],c=h.onload=h.onerror=null,"abort"===a?h.abort():"error"===a?e(h.status||404,h.statusText):e(yc[h.status]||h.status,h.statusText,"string"==typeof h.responseText?{text:h.responseText}:b,h.getAllResponseHeaders()))}},h.onload=c(),h.onerror=c("error"),c=Ac[g=zc++]=c("abort"),h.send(a.hasContent&&a.data||null)},abort:function(){c&&c()}}:void 0});var Bc,Cc,Dc=/^(?:toggle|show|hide)$/,Ec=new RegExp("^(?:([+-])=|)("+gb+")([a-z%]*)$","i"),Fc=/queueHooks$/,Gc=[L],Hc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ec.exec(b),f=e&&e[3]||(fb.cssNumber[a]?"":"px"),g=(fb.cssNumber[a]||"px"!==f&&+d)&&Ec.exec(fb.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,fb.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};fb.Animation=fb.extend(J,{tweener:function(a,b){fb.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Hc[c]=Hc[c]||[],Hc[c].unshift(b)},prefilter:function(a,b){b?Gc.unshift(a):Gc.push(a)}}),fb.Tween=M,M.prototype={constructor:M,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(fb.cssNumber[c]?"":"px")},cur:function(){var a=M.propHooks[this.prop];return a&&a.get?a.get(this):M.propHooks._default.get(this)},run:function(a){var b,c=M.propHooks[this.prop];return this.pos=b=this.options.duration?fb.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):M.propHooks._default.set(this),this}},M.prototype.init.prototype=M.prototype,M.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=fb.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){fb.fx.step[a.prop]?fb.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[fb.cssProps[a.prop]]||fb.cssHooks[a.prop])?fb.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},M.propHooks.scrollTop=M.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},fb.each(["toggle","show","hide"],function(a,b){var c=fb.fn[b];fb.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(N(b,!0),a,d,e)}}),fb.fn.extend({fadeTo:function(a,b,c,d){return this.filter(t).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=fb.isEmptyObject(a),f=fb.speed(b,c,d),g=function(){var b=J(this,fb.extend({},a),f);(e||qb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return"string"!=typeof a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=null!=a&&a+"queueHooks",f=fb.timers,g=qb.get(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&Fc.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem!==this||null!=a&&f[c].queue!==a||(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&fb.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=qb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=fb.timers,g=d?d.length:0;for(c.finish=!0,fb.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),fb.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){fb.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),fb.speed=function(a,b,c){var d=a&&"object"==typeof a?fb.extend({},a):{complete:c||!c&&b||fb.isFunction(a)&&a,duration:a,easing:c&&b||b&&!fb.isFunction(b)&&b};return d.duration=fb.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in fb.fx.speeds?fb.fx.speeds[d.duration]:fb.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){fb.isFunction(d.old)&&d.old.call(this),d.queue&&fb.dequeue(this,d.queue)},d},fb.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},fb.timers=[],fb.fx=M.prototype.init,fb.fx.tick=function(){var a,c=fb.timers,d=0;for(Bc=fb.now();d<c.length;d++)a=c[d],a()||c[d]!==a||c.splice(d--,1);c.length||fb.fx.stop(),Bc=b},fb.fx.timer=function(a){a()&&fb.timers.push(a)&&fb.fx.start()},fb.fx.interval=13,fb.fx.start=function(){Cc||(Cc=setInterval(fb.fx.tick,fb.fx.interval))},fb.fx.stop=function(){clearInterval(Cc),Cc=null},fb.fx.speeds={slow:600,fast:200,_default:400},fb.fx.step={},fb.expr&&fb.expr.filters&&(fb.expr.filters.animated=function(a){return fb.grep(fb.timers,function(b){return a===b.elem}).length}),fb.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){fb.offset.setOffset(this,a,b)});var c,d,e=this[0],f={top:0,left:0},g=e&&e.ownerDocument;if(g)return c=g.documentElement,fb.contains(c,e)?(typeof e.getBoundingClientRect!==R&&(f=e.getBoundingClientRect()),d=O(g),{top:f.top+d.pageYOffset-c.clientTop,left:f.left+d.pageXOffset-c.clientLeft}):f},fb.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=fb.css(a,"position"),l=fb(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=fb.css(a,"top"),i=fb.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),fb.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},fb.fn.extend({position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===fb.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),fb.nodeName(a[0],"html")||(d=a.offset()),d.top+=fb.css(a[0],"borderTopWidth",!0),d.left+=fb.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-fb.css(c,"marginTop",!0),left:b.left-d.left-fb.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||U;a&&!fb.nodeName(a,"html")&&"static"===fb.css(a,"position");)a=a.offsetParent;return a||U})}}),fb.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,d){var e="pageYOffset"===d;fb.fn[c]=function(f){return fb.access(this,function(c,f,g){var h=O(c);return g===b?h?h[d]:c[f]:void(h?h.scrollTo(e?a.pageXOffset:g,e?g:a.pageYOffset):c[f]=g)},c,f,arguments.length,null)}}),fb.each({Height:"height",Width:"width"},function(a,c){fb.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){fb.fn[e]=function(e,f){var g=arguments.length&&(d||"boolean"!=typeof e),h=d||(e===!0||f===!0?"margin":"border");return fb.access(this,function(c,d,e){var f;return fb.isWindow(c)?c.document.documentElement["client"+a]:9===c.nodeType?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?fb.css(c,d,h):fb.style(c,d,e,h)},c,g?e:b,g,null)}})}),fb.fn.size=function(){return this.length},fb.fn.andSelf=fb.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=fb:"function"==typeof define&&define.amd&&define("jquery",[],function(){return fb}),"object"==typeof a&&"object"==typeof a.document&&(a.jQuery=a.$=fb)}(window);var mejs=mejs||{};mejs.version="2.15.1",mejs.meIndex=0,mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube","application/x-mpegURL"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]},mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");return b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>',b.firstChild.href},getScriptPath:function(a){for(var b,c,d,e=0,f="",g="",h=document.getElementsByTagName("script"),i=h.length,j=a.length;i>e;e++){for(c=h[e].src,b=c.lastIndexOf("/"),b>-1?(d=c.substring(b+1),c=c.substring(0,b+1)):(d=c,c=""),b=0;j>b;b++)if(g=a[b],g=d.indexOf(g),g>-1){f=c;break}if(""!==f)break}return f},secondsToTimeCode:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25);var e=Math.floor(a/3600)%24,f=Math.floor(a/60)%60,g=Math.floor(a%60);return a=Math.floor((a%1*d).toFixed(3)),(b||e>0?(10>e?"0"+e:e)+":":"")+(10>f?"0"+f:f)+":"+(10>g?"0"+g:g)+(c?":"+(10>a?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25),a=a.split(":"),b=parseInt(a[0],10);var e=parseInt(a[1],10),f=parseInt(a[2],10),g=0,h=0;return c&&(g=parseInt(a[3])/d),h=3600*b+60*e+f+g},convertSMPTEtoSeconds:function(a){if("string"!=typeof a)return!1;a=a.replace(",",".");var b=0,c=-1!=a.indexOf(".")?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++)d=1,e>0&&(d=Math.pow(60,e)),b+=Number(a[e])*d;return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);b&&/object|embed/i.test(b.nodeName)&&(mejs.MediaFeatures.isIE?(b.style.display="none",function(){4==b.readyState?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)"function"==typeof a[b]&&(a[b]=null);a.parentNode.removeChild(a)}}},mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];return b[1]=b[1]||0,b[2]=b[2]||0,c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e,f=[0,0,0];if("undefined"!=typeof this.nav.plugins&&"object"==typeof this.nav.plugins[a]){if((c=this.nav.plugins[a].description)&&("undefined"==typeof this.nav.mimeTypes||!this.nav.mimeTypes[b]||this.nav.mimeTypes[b].enabledPlugin))for(f=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split("."),a=0;a<f.length;a++)f[a]=parseInt(f[a].match(/\d+/),10)}else if("undefined"!=typeof window.ActiveXObject)try{(e=new ActiveXObject(c))&&(f=d(e))}catch(g){}return f}},mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];return(a=a.GetVariable("$version"))&&(a=a.split(" ")[1].split(","),b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]),b}),mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(a,b,c,d){for(;a.isVersionSupported(b[0]+"."+b[1]+"."+b[2]+"."+b[3]);)b[c]+=d;b[c]-=d};return c(a,b,0,1),c(a,b,1,1),c(a,b,2,1e4),c(a,b,2,1e3),c(a,b,2,100),c(a,b,2,10),c(a,b,2,1),c(a,b,3,1),b}),mejs.MediaFeatures={init:function(){var a,b=this,c=document,d=mejs.PluginDetector.nav,e=mejs.PluginDetector.ua.toLowerCase(),f=["source","track","audio","video"];b.isiPad=null!==e.match(/ipad/i),b.isiPhone=null!==e.match(/iphone/i),b.isiOS=b.isiPhone||b.isiPad,b.isAndroid=null!==e.match(/android/i),b.isBustedAndroid=null!==e.match(/android 2\.[12]/),b.isBustedNativeHTTPS="https:"===location.protocol&&(null!==e.match(/android [12]\./)||null!==e.match(/macintosh.* version.* safari/)),b.isIE=-1!=d.appName.toLowerCase().indexOf("microsoft")||null!==d.appName.toLowerCase().match(/trident/gi),b.isChrome=null!==e.match(/chrome/gi),b.isChromium=null!==e.match(/chromium/gi),b.isFirefox=null!==e.match(/firefox/gi),b.isWebkit=null!==e.match(/webkit/gi),b.isGecko=null!==e.match(/gecko/gi)&&!b.isWebkit&&!b.isIE,b.isOpera=null!==e.match(/opera/gi),b.hasTouch="ontouchstart"in window,b.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(d=0;d<f.length;d++)a=document.createElement(f[d]);b.supportsMediaTag="undefined"!=typeof a.canPlayType||b.isBustedAndroid;try{a.canPlayType("video/mp4")}catch(g){b.supportsMediaTag=!1}b.hasSemiNativeFullScreen="undefined"!=typeof a.webkitEnterFullscreen,b.hasNativeFullscreen="undefined"!=typeof a.requestFullscreen,b.hasWebkitNativeFullScreen="undefined"!=typeof a.webkitRequestFullScreen,b.hasMozNativeFullScreen="undefined"!=typeof a.mozRequestFullScreen,b.hasMsNativeFullScreen="undefined"!=typeof a.msRequestFullscreen,b.hasTrueNativeFullScreen=b.hasWebkitNativeFullScreen||b.hasMozNativeFullScreen||b.hasMsNativeFullScreen,b.nativeFullScreenEnabled=b.hasTrueNativeFullScreen,b.hasMozNativeFullScreen?b.nativeFullScreenEnabled=document.mozFullScreenEnabled:b.hasMsNativeFullScreen&&(b.nativeFullScreenEnabled=document.msFullscreenEnabled),b.isChrome&&(b.hasSemiNativeFullScreen=!1),b.hasTrueNativeFullScreen&&(b.fullScreenEventName="",b.hasWebkitNativeFullScreen?b.fullScreenEventName="webkitfullscreenchange":b.hasMozNativeFullScreen?b.fullScreenEventName="mozfullscreenchange":b.hasMsNativeFullScreen&&(b.fullScreenEventName="MSFullscreenChange"),b.isFullScreen=function(){return b.hasMozNativeFullScreen?c.mozFullScreen:b.hasWebkitNativeFullScreen?c.webkitIsFullScreen:b.hasMsNativeFullScreen?null!==c.msFullscreenElement:void 0},b.requestFullScreen=function(a){b.hasWebkitNativeFullScreen?a.webkitRequestFullScreen():b.hasMozNativeFullScreen?a.mozRequestFullScreen():b.hasMsNativeFullScreen&&a.msRequestFullscreen()},b.cancelFullScreen=function(){b.hasWebkitNativeFullScreen?document.webkitCancelFullScreen():b.hasMozNativeFullScreen?document.mozCancelFullScreen():b.hasMsNativeFullScreen&&document.msExitFullscreen()}),b.hasSemiNativeFullScreen&&e.match(/mac os x 10_5/i)&&(b.hasNativeFullScreen=!1,b.hasSemiNativeFullScreen=!1)}},mejs.MediaFeatures.init(),mejs.HtmlMediaElement={pluginType:"native",isFullScreen:!1,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if("string"==typeof a)this.src=a;else{var c;for(b=0;b<a.length;b++)if(c=a[b],this.canPlayType(c.type)){this.src=c.src;break}}},setVideoSize:function(a,b){this.width=a,this.height=b}},mejs.PluginMediaElement=function(a,b,c){this.id=a,this.pluginType=b,this.src=c,this.events={},this.attributes={}},mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:!1,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:!0,ended:!1,seeking:!1,duration:0,error:null,tagName:"",muted:!1,volume:1,currentTime:0,play:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.playVideo():this.pluginApi.playMedia(),this.paused=!1)},load:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType||this.pluginApi.loadMedia(),this.paused=!1)},pause:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia(),this.paused=!0)},stop:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.stopVideo():this.pluginApi.stopMedia(),this.paused=!0)},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++)if(d=e[b],mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably";return""},positionFullscreenButton:function(a,b,c){null!=this.pluginApi&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){null!=this.pluginApi&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if("string"==typeof a)this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),this.src=mejs.Utility.absolutizeUrl(a);else{var b,c;for(b=0;b<a.length;b++)if(c=a[b],this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)),this.src=mejs.Utility.absolutizeUrl(a);break}}},setCurrentTime:function(a){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a),this.currentTime=a)},setVolume:function(a){null!=this.pluginApi&&(this.pluginApi.setVolume("youtube"==this.pluginType?100*a:a),this.volume=a)},setMuted:function(a){null!=this.pluginApi&&("youtube"==this.pluginType?(a?this.pluginApi.mute():this.pluginApi.unMute(),this.muted=a,this.dispatchEvent("volumechange")):this.pluginApi.setMuted(a),this.muted=a)},setVideoSize:function(a,b){this.pluginElement&&this.pluginElement.style&&(this.pluginElement.style.width=a+"px",this.pluginElement.style.height=b+"px"),null!=this.pluginApi&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!0)},exitFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!1)},addEventListener:function(a,b){this.events[a]=this.events[a]||[],this.events[a].push(b)},removeEventListener:function(a,b){if(!a)return this.events={},!0;var c=this.events[a];if(!c)return!0;if(!b)return this.events[a]=[],!0;for(var d=0;d<c.length;d++)if(c[d]===b)return this.events[a].splice(d,1),!0;return!1},dispatchEvent:function(a){var b,c,d=this.events[a];if(d)for(c=Array.prototype.slice.call(arguments,1),b=0;b<d.length;b++)d[b].apply(null,c)},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){return this.hasAttribute(a)?this.attributes[a]:""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id),mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}},mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b,this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a],delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case"flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case"silverlight":b.pluginElement=document.getElementById(b.id),b.pluginApi=b.pluginElement.Content.MediaElementJS}null!=b.pluginApi&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e;if(a=this.pluginMediaElements[a]){b={type:b,target:a};for(d in c)a[d]=c[d],b[d]=c[d];e=c.bufferedTime||0,b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1},a.dispatchEvent(b.type,b)}}},mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:!1,httpsBasicAuthSite:!1,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:!1,enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:.8,success:function(){},error:function(){}},mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)},mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d="string"==typeof a?document.getElementById(a):a,e=d.tagName.toLowerCase(),f="audio"===e||"video"===e,g=d.getAttribute(f?"src":"href");
e=d.getAttribute("poster");var h,i=d.getAttribute("autoplay"),j=d.getAttribute("preload"),k=d.getAttribute("controls");for(h in b)c[h]=b[h];return g="undefined"==typeof g||null===g||""==g?null:g,e="undefined"==typeof e||null===e?"":e,j="undefined"==typeof j||null===j||"false"===j?"none":j,i=!("undefined"==typeof i||null===i||"false"===i),k=!("undefined"==typeof k||null===k||"false"===k),h=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,f,g),h.url=null!==h.url?mejs.Utility.absolutizeUrl(h.url):"","native"==h.method?(mejs.MediaFeatures.isBustedAndroid&&(d.src=h.url,d.addEventListener("click",function(){d.play()},!1)),this.updateNative(h,c,i,j)):""!==h.method?this.createPlugin(h,c,e,i,j,k):(this.createErrorMessage(h,c,e),this)},determinePlayback:function(a,b,c,d,e){var f,g,h,i,j=[],k={method:"",url:"",htmlMediaElement:a,isVideo:"audio"!=a.tagName.toLowerCase()};if("undefined"!=typeof b.type&&""!==b.type)if("string"==typeof b.type)j.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)j.push({type:b.type[f],url:e});else if(null!==e)h=this.formatType(e,a.getAttribute("type")),j.push({type:h,url:e});else for(f=0;f<a.childNodes.length;f++)g=a.childNodes[f],1==g.nodeType&&"source"==g.tagName.toLowerCase()&&(e=g.getAttribute("src"),h=this.formatType(e,g.getAttribute("type")),g=g.getAttribute("media"),(!g||!window.matchMedia||window.matchMedia&&window.matchMedia(g).matches)&&j.push({type:h,url:e}));if(!d&&j.length>0&&null!==j[0].url&&this.getTypeFromFile(j[0].url).indexOf("audio")>-1&&(k.isVideo=!1),mejs.MediaFeatures.isBustedAndroid&&(a.canPlayType=function(a){return null!==a.match(/video\/(mp4|m4v)/gi)?"maybe":""}),mejs.MediaFeatures.isChromium&&(a.canPlayType=function(a){return null!==a.match(/video\/(webm|ogv|ogg)/gi)?"maybe":""}),!(!c||"auto"!==b.mode&&"auto_plugin"!==b.mode&&"native"!==b.mode||mejs.MediaFeatures.isBustedNativeHTTPS&&b.httpsBasicAuthSite===!0)){for(d||(f=document.createElement(k.isVideo?"video":"audio"),a.parentNode.insertBefore(f,a),a.style.display="none",k.htmlMediaElement=a=f),f=0;f<j.length;f++)if("video/m3u8"==j[f].type||""!==a.canPlayType(j[f].type).replace(/no/,"")||""!==a.canPlayType(j[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")||""!==a.canPlayType(j[f].type.replace(/m4a/,"mp4")).replace(/no/,"")){k.method="native",k.url=j[f].url;break}if("native"===k.method&&(null!==k.url&&(a.src=k.url),"auto_plugin"!==b.mode))return k}if("auto"===b.mode||"auto_plugin"===b.mode||"shim"===b.mode)for(f=0;f<j.length;f++)for(h=j[f].type,a=0;a<b.plugins.length;a++)for(e=b.plugins[a],g=mejs.plugins[e],c=0;c<g.length;c++)if(i=g[c],null==i.version||mejs.PluginDetector.hasPluginVersion(e,i.version))for(d=0;d<i.types.length;d++)if(h==i.types[d])return k.method=e,k.url=j[f].url,k;return"auto_plugin"===b.mode&&"native"===k.method?k:(""===k.method&&j.length>0&&(k.url=j[0].url),k)},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){return a=a.split("?")[0],a=a.substring(a.lastIndexOf(".")+1).toLowerCase(),(/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case"mp4":case"m4v":case"m4a":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px",e.style.height=d.height+"px"}catch(f){}e.innerHTML=b.customError?b.customError:""!==c?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>",d.parentNode.insertBefore(e,d),d.style.display="none",b.error(d)},createPlugin:function(a,b,c,d,e,f){c=a.htmlMediaElement;var g,h=1,i=1,j="me_"+a.method+"_"+mejs.meIndex++,k=new mejs.PluginMediaElement(j,a.method,a.url),l=document.createElement("div");for(k.tagName=c.tagName,g=0;g<c.attributes.length;g++){var m=c.attributes[g];1==m.specified&&k.setAttribute(m.name,m.value)}for(g=c.parentNode;null!==g&&"body"!==g.tagName.toLowerCase()&&null!=g.parentNode;){if("p"===g.parentNode.tagName.toLowerCase()){g.parentNode.parentNode.insertBefore(g,g.parentNode);break}g=g.parentNode}switch(a.isVideo?(h=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:null!==c.getAttribute("width")?c.getAttribute("width"):b.defaultVideoWidth,i=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:null!==c.getAttribute("height")?c.getAttribute("height"):b.defaultVideoHeight,h=mejs.Utility.encodeUrl(h),i=mejs.Utility.encodeUrl(i)):b.enablePluginDebug&&(h=320,i=240),k.success=b.success,mejs.MediaPluginBridge.registerPluginElement(j,k,c),l.className="me-plugin",l.id=j+"_container",a.isVideo?c.parentNode.insertBefore(l,c):document.body.insertBefore(l,document.body.childNodes[0]),d=["id="+j,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+h,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+i,"pseudostreamstart="+b.pseudoStreamingStartQueryParam],null!==a.url&&d.push("flash"==a.method?"file="+mejs.Utility.encodeUrl(a.url):"file="+a.url),b.enablePluginDebug&&d.push("debug=true"),b.enablePluginSmoothing&&d.push("smoothing=true"),b.enablePseudoStreaming&&d.push("pseudostreaming=true"),f&&d.push("controls=true"),b.pluginVars&&(d=d.concat(b.pluginVars)),a.method){case"silverlight":l.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+j+'" name="'+j+'" width="'+h+'" height="'+i+'" class="mejs-shim"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case"flash":mejs.MediaFeatures.isIE?(a=document.createElement("div"),l.appendChild(a),a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+j+'" width="'+h+'" height="'+i+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'):l.innerHTML='<embed id="'+j+'" name="'+j+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+h+'" height="'+i+'" scale="default"class="mejs-shim"></embed>';break;case"youtube":-1!=a.url.lastIndexOf("youtu.be")?(a=a.url.substr(a.url.lastIndexOf("/")+1),-1!=a.indexOf("?")&&(a=a.substr(0,a.indexOf("?")))):a=a.url.substr(a.url.lastIndexOf("=")+1),youtubeSettings={container:l,containerId:l.id,pluginMediaElement:k,pluginId:j,videoId:a,height:i,width:h},mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case"vimeo":if(b=j+"_player",k.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1),l.innerHTML='<iframe src="//player.vimeo.com/video/'+k.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+b+'" width="'+h+'" height="'+i+'" frameborder="0" class="mejs-shim" id="'+b+'"></iframe>',"function"==typeof $f){var n=$f(l.childNodes[0]);n.addEvent("ready",function(){function a(a,b,c,d){a={type:c,target:b},"timeupdate"==c&&(b.currentTime=a.currentTime=d.seconds,b.duration=a.duration=d.duration),b.dispatchEvent(a.type,a)}$.extend(n,{playVideo:function(){n.api("play")},stopVideo:function(){n.api("unload")},pauseVideo:function(){n.api("pause")},seekTo:function(a){n.api("seekTo",a)},setVolume:function(a){n.api("setVolume",a)},setMuted:function(a){a?(n.lastVolume=n.api("getVolume"),n.api("setVolume",0)):(n.api("setVolume",n.lastVolume),delete n.lastVolume)}}),n.addEvent("play",function(){a(n,k,"play"),a(n,k,"playing")}),n.addEvent("pause",function(){a(n,k,"pause")}),n.addEvent("finish",function(){a(n,k,"ended")}),n.addEvent("playProgress",function(b){a(n,k,"timeupdate",b)}),k.pluginElement=l,k.pluginApi=n,mejs.MediaPluginBridge.initPlugin(j)})}else console.warn("You need to include froogaloop for vimeo to work")}return c.style.display="none",c.removeAttribute("autoplay"),k},updateNative:function(a,b){var c,d=a.htmlMediaElement;for(c in mejs.HtmlMediaElement)d[c]=mejs.HtmlMediaElement[c];return b.success(d,d),d}},mejs.YouTubeApi={isIframeStarted:!1,isIframeLoaded:!1,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b),this.isIframeStarted=!0}},iframeQueue:[],enqueueIframe:function(a){this.isLoaded?this.createIframe(a):(this.loadIframeApi(),this.iframeQueue.push(a))},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c,mejs.MediaPluginBridge.initPlugin(a.pluginId),setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(a){mejs.YouTubeApi.handleStateChange(a.data,c,b)}}})},createEvent:function(a,b,c){if(c={type:c,target:b},a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime(),b.duration=c.duration=a.getDuration(),c.paused=b.paused,c.ended=b.ended,c.muted=a.isMuted(),c.volume=a.getVolume()/100,c.bytesTotal=a.getVideoBytesTotal(),c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=!0;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";mejs.MediaFeatures.isIE?(b=document.createElement("div"),a.container.appendChild(b),b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'):a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c,mejs.MediaPluginBridge.initPlugin(a),c.cueVideoById(b.videoId),a=b.containerId+"_callback",window[a]=function(a){mejs.YouTubeApi.handleStateChange(a,c,d)},c.addEventListener("onStateChange",a),setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250),mejs.YouTubeApi.createEvent(c,d,"canplay")},handleStateChange:function(a,b,c){switch(a){case-1:c.paused=!0,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=!1,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=!1,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"play"),mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=!0,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}},window.mejs=mejs,window.MediaElement=mejs.MediaElement,function(a,b){var c={locale:{language:"",strings:{}},methods:{}};c.getLanguage=function(){return(c.locale.language||window.navigator.userLanguage||window.navigator.language).substr(0,2).toLowerCase()},"undefined"!=typeof mejsL10n&&(c.locale.language=mejsL10n.language),c.methods.checkPlain=function(a){var b,c,d={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};a=String(a);for(b in d)d.hasOwnProperty(b)&&(c=RegExp(b,"g"),a=a.replace(c,d[b]));return a},c.methods.t=function(a,b){return c.locale.strings&&c.locale.strings[b.context]&&c.locale.strings[b.context][a]&&(a=c.locale.strings[b.context][a]),c.methods.checkPlain(a)},c.t=function(a,b){if("string"==typeof a&&a.length>0){var d=c.getLanguage();return b=b||{context:d},c.methods.t(a,b)}throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."}},b.i18n=c}(document,mejs),function(a){"undefined"!=typeof mejsL10n&&(a[mejsL10n.language]=mejsL10n.strings)}(mejs.i18n.locale.strings),function(a){"undefined"==typeof a.de&&(a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schließen"})}(mejs.i18n.locale.strings),function(a){"undefined"==typeof a.zh&&(a.zh={Fullscreen:"全螢幕","Go Fullscreen":"全屏模式","Turn off Fullscreen":"退出全屏模式",Close:"關閉"})}(mejs.i18n.locale.strings),"undefined"!=typeof jQuery?mejs.$=jQuery:"undefined"!=typeof ender&&(mejs.$=ender),function(a){mejs.MepDefaults={poster:"",showPosterWhenEnded:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return.05*a.duration},defaultSeekForwardInterval:function(a){return.05*a.duration},setDimensions:!0,audioWidth:-1,audioHeight:-1,startVolume:.8,loop:!1,autoRewind:!0,enableAutosize:!0,alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,autosizeProgress:!0,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,clickToPlayPause:!0,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:!0,enableKeyboard:!0,pauseOtherPlayers:!0,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),b.setVolume(Math.min(b.volume+.1,1))}},{keys:[40],action:function(a,b){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),b.setVolume(Math.max(b.volume-.1,0))}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){"undefined"!=typeof a.enterFullScreen&&(a.isFullScreen?a.exitFullScreen():a.enterFullScreen())}},{keys:[77],action:function(a){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),a.setMuted(a.media.muted?!1:!0)}}]},mejs.mepIndex=0,mejs.players={},mejs.MediaElementPlayer=function(b,c){return this instanceof mejs.MediaElementPlayer?(this.$media=this.$node=a(b),this.node=this.media=this.$media[0],"undefined"!=typeof this.node.player?this.node.player:(this.node.player=this,"undefined"==typeof c&&(c=this.$node.data("mejsoptions")),this.options=a.extend({},mejs.MepDefaults,c),this.id="mep_"+mejs.mepIndex++,mejs.players[this.id]=this,this.init(),this)):new mejs.MediaElementPlayer(b,c)},mejs.MediaElementPlayer.prototype={hasFocus:!1,controlsAreVisible:!0,init:function(){var b=this,c=mejs.MediaFeatures,d=a.extend(!0,{},b.options,{success:function(a,c){b.meReady(a,c)},error:function(a){b.handleError(a)}}),e=b.media.tagName.toLowerCase();b.isDynamic="audio"!==e&&"video"!==e,b.isVideo=b.isDynamic?b.options.isVideo:"audio"!==e&&b.options.isVideo,c.isiPad&&b.options.iPadUseNativeControls||c.isiPhone&&b.options.iPhoneUseNativeControls?(b.$media.attr("controls","controls"),c.isiPad&&null!==b.media.getAttribute("autoplay")&&b.play()):c.isAndroid&&b.options.AndroidUseNativeControls||(b.$media.removeAttr("controls"),b.container=a('<div id="'+b.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media),b.container.addClass((c.isAndroid?"mejs-android ":"")+(c.isiOS?"mejs-ios ":"")+(c.isiPad?"mejs-ipad ":"")+(c.isiPhone?"mejs-iphone ":"")+(b.isVideo?"mejs-video ":"mejs-audio ")),c.isiOS?(c=b.$media.clone(),b.container.find(".mejs-mediaelement").append(c),b.$media.remove(),b.$node=b.$media=c,b.node=b.media=c[0]):b.container.find(".mejs-mediaelement").append(b.$media),b.controls=b.container.find(".mejs-controls"),b.layers=b.container.find(".mejs-layers"),c=b.isVideo?"video":"audio",e=c.substring(0,1).toUpperCase()+c.substring(1),b.width=b.options[c+"Width"]>0||b.options[c+"Width"].toString().indexOf("%")>-1?b.options[c+"Width"]:""!==b.media.style.width&&null!==b.media.style.width?b.media.style.width:null!==b.media.getAttribute("width")?b.$media.attr("width"):b.options["default"+e+"Width"],b.height=b.options[c+"Height"]>0||b.options[c+"Height"].toString().indexOf("%")>-1?b.options[c+"Height"]:""!==b.media.style.height&&null!==b.media.style.height?b.media.style.height:null!==b.$media[0].getAttribute("height")?b.$media.attr("height"):b.options["default"+e+"Height"],b.setPlayerSize(b.width,b.height),d.pluginWidth=b.width,d.pluginHeight=b.height),mejs.MediaElement(b.$media[0],d),"undefined"!=typeof b.container&&b.controlsAreVisible&&b.container.trigger("controlsshown")},showControls:function(a){var b=this;a="undefined"==typeof a||a,b.controlsAreVisible||(a?(b.controls.css("visibility","visible").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0,b.container.trigger("controlsshown")}),b.container.find(".mejs-control").css("visibility","visible").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0})):(b.controls.css("visibility","visible").css("display","block"),b.container.find(".mejs-control").css("visibility","visible").css("display","block"),b.controlsAreVisible=!0,b.container.trigger("controlsshown")),b.setControlsSize())},hideControls:function(b){var c=this;b="undefined"==typeof b||b,c.controlsAreVisible&&!c.options.alwaysShowControls&&(b?(c.controls.stop(!0,!0).fadeOut(200,function(){a(this).css("visibility","hidden").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")}),c.container.find(".mejs-control").stop(!0,!0).fadeOut(200,function(){a(this).css("visibility","hidden").css("display","block")})):(c.controls.css("visibility","hidden").css("display","block"),c.container.find(".mejs-control").css("visibility","hidden").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")))},controlsTimer:null,startControlsTimer:function(a){var b=this;a="undefined"!=typeof a?a:1500,b.killControlsTimer("start"),b.controlsTimer=setTimeout(function(){b.hideControls(),b.killControlsTimer("hide")},a)},killControlsTimer:function(){null!==this.controlsTimer&&(clearTimeout(this.controlsTimer),delete this.controlsTimer,this.controlsTimer=null)},controlsEnabled:!0,disableControls:function(){this.killControlsTimer(),this.hideControls(!1),this.controlsEnabled=!1},enableControls:function(){this.showControls(!1),this.controlsEnabled=!0},meReady:function(a,b){var c=this,d=mejs.MediaFeatures,e=b.getAttribute("autoplay");e=!("undefined"==typeof e||null===e||"false"===e);var f;if(!c.created){if(c.created=!0,c.media=a,c.domNode=b,!(d.isAndroid&&c.options.AndroidUseNativeControls||d.isiPad&&c.options.iPadUseNativeControls||d.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media),c.buildkeyboard(c,c.controls,c.layers,c.media),c.buildoverlays(c,c.controls,c.layers,c.media),c.findTracks();for(f in c.options.features)if(d=c.options.features[f],c["build"+d])try{c["build"+d](c,c.controls,c.layers,c.media)}catch(g){}c.container.trigger("controlsready"),c.setPlayerSize(c.width,c.height),c.setControlsSize(),c.isVideo&&(mejs.MediaFeatures.hasTouch?c.$media.bind("touchstart",function(){c.controlsAreVisible?c.hideControls(!1):c.controlsEnabled&&c.showControls(!1)}):(c.clickToPlayPauseCallback=function(){c.options.clickToPlayPause&&(c.media.paused?c.play():c.pause())},c.media.addEventListener("click",c.clickToPlayPauseCallback,!1),c.container.bind("mouseenter mouseover",function(){c.controlsEnabled&&(c.options.alwaysShowControls||(c.killControlsTimer("enter"),c.showControls(),c.startControlsTimer(2500)))}).bind("mousemove",function(){c.controlsEnabled&&(c.controlsAreVisible||c.showControls(),c.options.alwaysShowControls||c.startControlsTimer(2500))}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&c.startControlsTimer(1e3)})),c.options.hideVideoControlsOnLoad&&c.hideControls(!1),e&&!c.options.alwaysShowControls&&c.hideControls(),c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(a){c.options.videoHeight<=0&&null===c.domNode.getAttribute("height")&&!isNaN(a.target.videoHeight)&&(c.setPlayerSize(a.target.videoWidth,a.target.videoHeight),c.setControlsSize(),c.media.setVideoSize(a.target.videoWidth,a.target.videoHeight))},!1)),a.addEventListener("play",function(){for(var a in mejs.players){var b=mejs.players[a];b.id!=c.id&&c.options.pauseOtherPlayers&&!b.paused&&!b.ended&&b.pause(),b.hasFocus=!1}c.hasFocus=!0},!1),c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(a){}c.media.pause(),c.setProgressRail&&c.setProgressRail(),c.setCurrentRail&&c.setCurrentRail(),c.options.loop?c.play():!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},!1),c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&c.updateDuration(),c.updateCurrent&&c.updateCurrent(),c.isFullScreen||(c.setPlayerSize(c.width,c.height),c.setControlsSize())},!1),setTimeout(function(){c.setPlayerSize(c.width,c.height),c.setControlsSize()},50),c.globalBind("resize",function(){c.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height),c.setControlsSize()}),"youtube"==c.media.pluginType&&c.options.autoplay&&c.container.find(".mejs-overlay-play").hide()}e&&"native"==a.pluginType&&c.play(),c.options.success&&("string"==typeof c.options.success?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c))}},handleError:function(a){this.controls.hide(),this.options.error&&this.options.error(a)},setPlayerSize:function(b,c){if(!this.options.setDimensions)return!1;if("undefined"!=typeof b&&(this.width=b),"undefined"!=typeof c&&(this.height=c),this.height.toString().indexOf("%")>0||"100%"===this.$node.css("max-width")||this.$node[0].currentStyle&&"100%"===this.$node[0].currentStyle.maxWidth){var d=this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:null!==this.media.getAttribute("width")?this.media.getAttribute("width"):this.options.defaultVideoWidth:this.options.defaultAudioWidth,e=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:null!==this.media.getAttribute("height")?this.media.getAttribute("height"):this.options.defaultVideoHeight:this.options.defaultAudioHeight,f=this.container.parent().closest(":visible").width(),g=this.container.parent().closest(":visible").height();d=this.isVideo||!this.options.autosizeProgress?parseInt(f*e/d,10):e,(isNaN(d)||0!=g&&d>g)&&(d=g),"body"===this.container.parent()[0].tagName.toLowerCase()&&(f=a(window).width(),d=a(window).height()),0!=d&&0!=f&&(this.container.width(f).height(d),this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%"),this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(f,d),this.layers.children(".mejs-layer").width("100%").height("100%"))}else this.container.width(this.width).height(this.height),this.layers.children(".mejs-layer").width(this.width).height(this.height);f=this.layers.find(".mejs-overlay-play"),g=f.find(".mejs-overlay-button"),f.height(this.container.height()-this.controls.height()),g.css("margin-top","-"+(g.height()/2-this.controls.height()/2).toString()+"px")},setControlsSize:function(){var b=0,c=0,d=this.controls.find(".mejs-time-rail"),e=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current"),this.controls.find(".mejs-time-loaded");var f=d.siblings(),g=f.last(),h=null;if(this.container.is(":visible")&&d.length&&d.is(":visible")){this.options&&!this.options.autosizeProgress&&(c=parseInt(d.css("width"))),0!==c&&c||(f.each(function(){var c=a(this);"absolute"!=c.css("position")&&c.is(":visible")&&(b+=a(this).outerWidth(!0))}),c=this.controls.width()-b-(d.outerWidth(!0)-d.width()));do d.width(c),e.width(c-(e.outerWidth(!0)-e.width())),"absolute"!=g.css("position")&&(h=g.position(),c--);while(null!=h&&h.top>0&&c>0);this.setProgressRail&&this.setProgressRail(),this.setCurrentRail&&this.setCurrentRail()}},buildposter:function(b,c,d,e){var f=a('<div class="mejs-poster mejs-layer"></div>').appendTo(d);c=b.$media.attr("poster"),""!==b.options.poster&&(c=b.options.poster),""!==c&&null!=c?this.setPoster(c):f.hide(),e.addEventListener("play",function(){f.hide()},!1),b.options.showPosterWhenEnded&&b.options.autoRewind&&e.addEventListener("ended",function(){f.show()},!1)},setPoster:function(b){var c=this.container.find(".mejs-poster"),d=c.find("img");0==d.length&&(d=a('<img width="100%" height="100%" />').appendTo(c)),d.attr("src",b),c.css({"background-image":"url("+b+")"})},buildoverlays:function(b,c,d,e){var f=this;if(b.isVideo){var g=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),h=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),i=a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click",function(){f.options.clickToPlayPause&&e.paused&&e.play()});e.addEventListener("play",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("playing",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("seeking",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("seeked",function(){g.hide(),c.find(".mejs-time-buffering").hide()},!1),e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||i.show()},!1),e.addEventListener("waiting",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("loadeddata",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("canplay",function(){g.hide(),c.find(".mejs-time-buffering").hide()},!1),e.addEventListener("error",function(){g.hide(),c.find(".mejs-time-buffering").hide(),h.show(),h.find("mejs-overlay-error").html("Error loading this resource")},!1),e.addEventListener("keydown",function(a){f.onkeydown(b,e,a)},!1)}},buildkeyboard:function(b,c,d,e){var f=this;f.globalBind("keydown",function(a){return f.onkeydown(b,e,a)}),f.globalBind("click",function(c){b.hasFocus=0!=a(c.target).closest(".mejs-container").length})},onkeydown:function(a,b,c){if(a.hasFocus&&a.options.enableKeyboard)for(var d=0,e=a.options.keyActions.length;e>d;d++)for(var f=a.options.keyActions[d],g=0,h=f.keys.length;h>g;g++)if(c.keyCode==f.keys[g])return"function"==typeof c.preventDefault&&c.preventDefault(),f.action(a,b,c.keyCode),!1;return!0},findTracks:function(){var b=this,c=b.$media.find("track");b.tracks=[],c.each(function(c,d){d=a(d),b.tracks.push({srclang:d.attr("srclang")?d.attr("srclang").toLowerCase():"",src:d.attr("src"),kind:d.attr("kind"),label:d.attr("label")||"",entries:[],isLoaded:!1})})},changeSkin:function(a){this.container[0].className="mejs-container "+a,this.setPlayerSize(this.width,this.height),this.setControlsSize()},play:function(){this.load(),this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load(),this.isLoaded=!0},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b;for(a in this.options.features)if(b=this.options.features[a],this["clean"+b])try{this["clean"+b](this)}catch(c){}this.isDynamic?this.$node.insertBefore(this.container):(this.$media.prop("controls",!0),this.$node.clone().insertBefore(this.container).show(),this.$node.remove()),"native"!==this.media.pluginType&&this.media.remove(),delete mejs.players[this.id],"object"==typeof this.container&&this.container.remove(),this.globalUnbind(),delete this.node.player}},function(){function b(b,d){var e={d:[],w:[]};return a.each((b||"").split(" "),function(a,b){var f=b+"."+d;0===f.indexOf(".")?(e.d.push(f),e.w.push(f)):e[c.test(b)?"w":"d"].push(f)}),e.d=e.d.join(" "),e.w=e.w.join(" "),e}var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,d,e){c=b(c,this.id),c.d&&a(document).bind(c.d,d,e),c.w&&a(window).bind(c.w,d,e)},mejs.MediaElementPlayer.prototype.globalUnbind=function(c,d){c=b(c,this.id),c.d&&a(document).unbind(c.d,d),c.w&&a(window).unbind(c.w,d)}}(),"undefined"!=typeof a&&(a.fn.mediaelementplayer=function(b){return this.each(b===!1?function(){var b=a(this).data("mediaelementplayer");b&&b.remove(),a(this).removeData("mediaelementplayer")}:function(){a(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,b))}),this},a(document).ready(function(){a(".mejs-player").mediaelementplayer()})),window.MediaElementPlayer=mejs.MediaElementPlayer}(mejs.$),function(a){a.extend(mejs.MepDefaults,{playpauseText:mejs.i18n.t("Play/Pause")}),a.extend(MediaElementPlayer.prototype,{buildplaypause:function(b,c,d,e){var f=a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'" aria-label="'+this.options.playpauseText+'"></button></div>').appendTo(c).click(function(a){return a.preventDefault(),e.paused?e.play():e.pause(),!1});e.addEventListener("play",function(){f.removeClass("mejs-play").addClass("mejs-pause")},!1),e.addEventListener("playing",function(){f.removeClass("mejs-play").addClass("mejs-pause")},!1),e.addEventListener("pause",function(){f.removeClass("mejs-pause").addClass("mejs-play")},!1),e.addEventListener("paused",function(){f.removeClass("mejs-pause").addClass("mejs-play")},!1)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{stopText:"Stop"}),a.extend(MediaElementPlayer.prototype,{buildstop:function(b,c,d,e){a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'" aria-label="'+this.options.stopText+'"></button></div>').appendTo(c).click(function(){e.paused||e.pause(),e.currentTime>0&&(e.setCurrentTime(0),e.pause(),c.find(".mejs-time-current").width("0px"),c.find(".mejs-time-handle").css("left","0px"),c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)),c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)),d.find(".mejs-poster").show())
})}})}(mejs.$),function(a){a.extend(MediaElementPlayer.prototype,{buildprogress:function(b,c,d,e){a('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c),c.find(".mejs-time-buffering").hide();var f=this,g=c.find(".mejs-time-total");d=c.find(".mejs-time-loaded");var h=c.find(".mejs-time-current"),i=c.find(".mejs-time-handle"),j=c.find(".mejs-time-float"),k=c.find(".mejs-time-float-current"),l=function(a){a=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.pageX;var b=g.offset(),c=g.outerWidth(!0),d=0,f=d=0;e.duration&&(a<b.left?a=b.left:a>c+b.left&&(a=c+b.left),f=a-b.left,d=f/c,d=.02>=d?0:d*e.duration,m&&d!==e.currentTime&&e.setCurrentTime(d),mejs.MediaFeatures.hasTouch||(j.css("left",f),k.html(mejs.Utility.secondsToTimeCode(d)),j.show()))},m=!1;g.bind("mousedown touchstart",function(a){return 1===a.which||0===a.which?(m=!0,l(a),f.globalBind("mousemove.dur touchmove.dur",function(a){l(a)}),f.globalBind("mouseup.dur touchend.dur",function(){m=!1,j.hide(),f.globalUnbind(".dur")}),!1):void 0}).bind("mouseenter",function(){f.globalBind("mousemove.dur",function(a){l(a)}),mejs.MediaFeatures.hasTouch||j.show()}).bind("mouseleave",function(){m||(f.globalUnbind(".dur"),j.hide())}),e.addEventListener("progress",function(a){b.setProgressRail(a),b.setCurrentRail(a)},!1),e.addEventListener("timeupdate",function(a){b.setProgressRail(a),b.setCurrentRail(a)},!1),f.loaded=d,f.total=g,f.current=h,f.handle=i},setProgressRail:function(a){var b=void 0!=a?a.target:this.media,c=null;b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration?c=b.buffered.end(0)/b.duration:b&&void 0!=b.bytesTotal&&b.bytesTotal>0&&void 0!=b.bufferedBytes?c=b.bufferedBytes/b.bytesTotal:a&&a.lengthComputable&&0!=a.total&&(c=a.loaded/a.total),null!==c&&(c=Math.min(1,Math.max(0,c)),this.loaded&&this.total&&this.loaded.width(this.total.width()*c))},setCurrentRail:function(){if(void 0!=this.media.currentTime&&this.media.duration&&this.total&&this.handle){var a=Math.round(this.total.width()*this.media.currentTime/this.media.duration),b=a-Math.round(this.handle.outerWidth(!0)/2);this.current.width(a),this.handle.css("left",b)}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"}),a.extend(MediaElementPlayer.prototype,{buildcurrent:function(b,c,d,e){a('<div class="mejs-time"><span class="mejs-currenttime">'+(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(c),this.currenttime=this.controls.find(".mejs-currenttime"),e.addEventListener("timeupdate",function(){b.updateCurrent()},!1)},buildduration:function(b,c,d,e){c.children().last().find(".mejs-currenttime").length>0?a(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(c.find(".mejs-time")):(c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"),a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(c)),this.durationD=this.controls.find(".mejs-duration"),e.addEventListener("timeupdate",function(){b.updateDuration()},!1)},updateCurrent:function(){this.currenttime&&this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600),this.durationD&&(this.options.duration>0||this.media.duration)&&this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration>0?this.options.duration:this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical"}),a.extend(MediaElementPlayer.prototype,{buildvolume:function(b,c,d,e){if(!mejs.MediaFeatures.isAndroid&&!mejs.MediaFeatures.isiOS||!this.options.hideVolumeOnTouchDevices){var f=this,g=f.isVideo?f.options.videoVolume:f.options.audioVolume,h="horizontal"==g?a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(c):a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(c),i=f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),j=f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),k=f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),l=f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),m=function(a,b){if(i.is(":visible")||"undefined"!=typeof b)if(a=Math.max(0,a),a=Math.min(a,1),0==a?h.removeClass("mejs-mute").addClass("mejs-unmute"):h.removeClass("mejs-unmute").addClass("mejs-mute"),"vertical"==g){var c=j.height(),d=j.position(),e=c-c*a;l.css("top",Math.round(d.top+e-l.height()/2)),k.height(c-e),k.css("top",d.top+e)}else c=j.width(),d=j.position(),c*=a,l.css("left",Math.round(d.left+c-l.width()/2)),k.width(Math.round(c));else i.show(),m(a,!0),i.hide()},n=function(a){var b=null,c=j.offset();if("vertical"==g){if(b=j.height(),parseInt(j.css("top").replace(/px/,""),10),b=(b-(a.pageY-c.top))/b,0==c.top||0==c.left)return}else b=j.width(),b=(a.pageX-c.left)/b;b=Math.max(0,b),b=Math.min(b,1),m(b),e.setMuted(0==b?!0:!1),e.setVolume(b)},o=!1,p=!1;h.hover(function(){i.show(),p=!0},function(){p=!1,!o&&"vertical"==g&&i.hide()}),i.bind("mouseover",function(){p=!0}).bind("mousedown",function(a){return n(a),f.globalBind("mousemove.vol",function(a){n(a)}),f.globalBind("mouseup.vol",function(){o=!1,f.globalUnbind(".vol"),!p&&"vertical"==g&&i.hide()}),o=!0,!1}),h.find("button").click(function(){e.setMuted(!e.muted)}),e.addEventListener("volumechange",function(){o||(e.muted?(m(0),h.removeClass("mejs-mute").addClass("mejs-unmute")):(m(e.volume),h.removeClass("mejs-unmute").addClass("mejs-mute")))},!1),f.container.is(":visible")&&(m(b.options.startVolume),0===b.options.startVolume&&e.setMuted(!0),"native"===e.pluginType&&e.setVolume(b.options.startVolume))}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{usePluginFullScreen:!0,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")}),a.extend(MediaElementPlayer.prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,buildfullscreen:function(b,c,d,e){if(b.isVideo){b.isInIframe=window.location!=window.parent.location,mejs.MediaFeatures.hasTrueNativeFullScreen&&b.globalBind(mejs.MediaFeatures.fullScreenEventName,function(){b.isFullScreen&&(mejs.MediaFeatures.isFullScreen()?(b.isNativeFullScreen=!0,b.setControlsSize()):(b.isNativeFullScreen=!1,b.exitFullScreen()))});var f=this,g=a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+f.id+'" title="'+f.options.fullscreenText+'" aria-label="'+f.options.fullscreenText+'"></button></div>').appendTo(c);if("native"===f.media.pluginType||!f.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||b.isFullScreen?b.exitFullScreen():b.enterFullScreen()});else{var h=null;if(function(){var a=document.createElement("x"),b=document.documentElement,c=window.getComputedStyle;return"pointerEvents"in a.style?(a.style.pointerEvents="auto",a.style.pointerEvents="x",b.appendChild(a),c=c&&"auto"===c(a,"").pointerEvents,b.removeChild(a),!!c):!1}()&&!mejs.MediaFeatures.isOpera){var i=!1,j=function(){if(i){for(var a in k)k[a].hide();g.css("pointer-events",""),f.controls.css("pointer-events",""),f.media.removeEventListener("click",f.clickToPlayPauseCallback),i=!1}},k={};c=["top","left","right","bottom"];var l,m=function(){var a=g.offset().left-f.container.offset().left,b=g.offset().top-f.container.offset().top,c=g.outerWidth(!0),d=g.outerHeight(!0),e=f.container.width(),h=f.container.height();for(l in k)k[l].css({position:"absolute",top:0,left:0});k.top.width(e).height(b),k.left.width(a).height(d).css({top:b}),k.right.width(e-a-c).height(d).css({top:b,left:a+c}),k.bottom.width(e).height(h-d-b).css({top:b+d})};for(f.globalBind("resize",function(){m()}),l=0,d=c.length;d>l;l++)k[c[l]]=a('<div class="mejs-fullscreen-hover" />').appendTo(f.container).mouseover(j).hide();g.on("mouseover",function(){if(!f.isFullScreen){var a=g.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!1),g.css("pointer-events","none"),f.controls.css("pointer-events","none"),f.media.addEventListener("click",f.clickToPlayPauseCallback);for(l in k)k[l].show();m(),i=!0}}),e.addEventListener("fullscreenchange",function(){f.isFullScreen=!f.isFullScreen,f.isFullScreen?f.media.removeEventListener("click",f.clickToPlayPauseCallback):f.media.addEventListener("click",f.clickToPlayPauseCallback),j()}),f.globalBind("mousemove",function(a){if(i){var b=g.offset();(a.pageY<b.top||a.pageY>b.top+g.outerHeight(!0)||a.pageX<b.left||a.pageX>b.left+g.outerWidth(!0))&&(g.css("pointer-events",""),f.controls.css("pointer-events",""),i=!1)}})}else g.on("mouseover",function(){null!==h&&(clearTimeout(h),delete h);var a=g.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!0)}).on("mouseout",function(){null!==h&&(clearTimeout(h),delete h),h=setTimeout(function(){e.hideFullscreenButton()},1500)})}b.fullscreenBtn=g,f.globalBind("keydown",function(a){(mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||f.isFullScreen)&&27==a.keyCode&&b.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},containerSizeTimeout:null,enterFullScreen:function(){var b=this;if("native"===b.media.pluginType||!mejs.MediaFeatures.isFirefox&&!b.options.usePluginFullScreen){if(a(document.documentElement).addClass("mejs-fullscreen"),normalHeight=b.container.height(),normalWidth=b.container.width(),"native"===b.media.pluginType)if(mejs.MediaFeatures.hasTrueNativeFullScreen)mejs.MediaFeatures.requestFullScreen(b.container[0]),b.isInIframe&&setTimeout(function d(){if(b.isNativeFullScreen){var c=(window.devicePixelRatio||1)*a(window).width(),e=screen.width;Math.abs(e-c)>.002*e?b.exitFullScreen():setTimeout(d,500)}},500);else if(mejs.MediaFeatures.hasSemiNativeFullScreen)return void b.media.webkitEnterFullscreen();if(b.isInIframe){var c=b.options.newWindowCallback(this);if(""!==c){if(!mejs.MediaFeatures.hasTrueNativeFullScreen)return b.pause(),void window.open(c,b.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");setTimeout(function(){b.isNativeFullScreen||(b.pause(),window.open(c,b.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no"))},250)}}b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"),b.containerSizeTimeout=setTimeout(function(){b.container.css({width:"100%",height:"100%"}),b.setControlsSize()},500),"native"===b.media.pluginType?b.$media.width("100%").height("100%"):(b.container.find(".mejs-shim").width("100%").height("100%"),b.media.setVideoSize(a(window).width(),a(window).height())),b.layers.children("div").width("100%").height("100%"),b.fullscreenBtn&&b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"),b.setControlsSize(),b.isFullScreen=!0,b.container.find(".mejs-captions-text").css("font-size",screen.width/b.width*1*100+"%"),b.container.find(".mejs-captions-position").css("bottom","45px")}},exitFullScreen:function(){clearTimeout(this.containerSizeTimeout),"native"!==this.media.pluginType&&mejs.MediaFeatures.isFirefox?this.media.setFullscreen(!1):(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||this.isFullScreen)&&mejs.MediaFeatures.cancelFullScreen(),a(document.documentElement).removeClass("mejs-fullscreen"),this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight),"native"===this.media.pluginType?this.$media.width(normalWidth).height(normalHeight):(this.container.find(".mejs-shim").width(normalWidth).height(normalHeight),this.media.setVideoSize(normalWidth,normalHeight)),this.layers.children("div").width(normalWidth).height(normalHeight),this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"),this.setControlsSize(),this.isFullScreen=!1,this.container.find(".mejs-captions-text").css("font-size",""),this.container.find(".mejs-captions-position").css("bottom",""))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{speeds:["1.50","1.25","1.00","0.75"],defaultSpeed:"1.00"}),a.extend(MediaElementPlayer.prototype,{buildspeed:function(b,c,d,e){if("native"==this.media.pluginType){d='<div class="mejs-button mejs-speed-button"><button type="button">'+this.options.defaultSpeed+'x</button><div class="mejs-speed-selector"><ul>';var f;for(-1===a.inArray(this.options.defaultSpeed,this.options.speeds)&&this.options.speeds.push(this.options.defaultSpeed),this.options.speeds.sort(function(a,b){return parseFloat(b)-parseFloat(a)}),f=0;f<this.options.speeds.length;f++)d+='<li><input type="radio" name="speed" value="'+this.options.speeds[f]+'" id="'+this.options.speeds[f]+'" ',this.options.speeds[f]==this.options.defaultSpeed?(d+="checked=true ",d+='/><label for="'+this.options.speeds[f]+'" class="mejs-speed-selected">'+this.options.speeds[f]+"x</label></li>"):d+='/><label for="'+this.options.speeds[f]+'">'+this.options.speeds[f]+"x</label></li>";d+="</ul></div></div>",b.speedButton=a(d).appendTo(c),b.playbackspeed=this.options.defaultSpeed,b.speedButton.on("click","input[type=radio]",function(){b.playbackspeed=a(this).attr("value"),e.playbackRate=parseFloat(b.playbackspeed),b.speedButton.find("button").text(b.playbackspeed+"x"),b.speedButton.find(".mejs-speed-selected").removeClass("mejs-speed-selected"),b.speedButton.find("input[type=radio]:checked").next().addClass("mejs-speed-selected")}),c=b.speedButton.find(".mejs-speed-selector"),c.height(this.speedButton.find(".mejs-speed-selector ul").outerHeight(!0)+b.speedButton.find(".mejs-speed-translations").outerHeight(!0)),c.css("top",-1*c.height()+"px")}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),a.extend(MediaElementPlayer.prototype,{hasChapters:!1,buildtracks:function(b,c,d,e){if(0!==b.tracks.length){var f;if(this.domNode.textTracks)for(f=this.domNode.textTracks.length-1;f>=0;f--)this.domNode.textTracks[f].mode="hidden";for(b.chapters=a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(),b.captions=a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(),b.captionsText=b.captions.find(".mejs-captions-text"),b.captionsButton=a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'" aria-label="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+b.id+'_captions" id="'+b.id+'_captions_none" value="none" checked="checked" /><label for="'+b.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(c),f=c=0;f<b.tracks.length;f++)"subtitles"==b.tracks[f].kind&&c++;for(this.options.toggleCaptionsButtonWhenOnlyOne&&1==c?b.captionsButton.on("click",function(){lang=null===b.selectedTrack?b.tracks[0].srclang:"none",b.setTrack(lang)}):(b.captionsButton.on("mouseenter focusin",function(){a(this).find(".mejs-captions-selector").css("visibility","visible")}).on("click","input[type=radio]",function(){lang=this.value,b.setTrack(lang)}),b.captionsButton.on("mouseleave focusout",function(){a(this).find(".mejs-captions-selector").css("visibility","hidden")})),b.options.alwaysShowControls?b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):b.container.bind("controlsshown",function(){b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")}),b.trackToLoad=-1,b.selectedTrack=null,b.isLoadingTrack=!1,f=0;f<b.tracks.length;f++)"subtitles"==b.tracks[f].kind&&b.addTrackButton(b.tracks[f].srclang,b.tracks[f].label);b.loadNextTrack(),e.addEventListener("timeupdate",function(){b.displayCaptions()},!1),""!==b.options.slidesSelector&&(b.slidesContainer=a(b.options.slidesSelector),e.addEventListener("timeupdate",function(){b.displaySlides()},!1)),e.addEventListener("loadedmetadata",function(){b.displayChapters()},!1),b.container.hover(function(){b.hasChapters&&(b.chapters.css("visibility","visible"),b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))},function(){b.hasChapters&&!e.paused&&b.chapters.fadeOut(200,function(){a(this).css("visibility","hidden"),a(this).css("display","block")})}),null!==b.node.getAttribute("autoplay")&&b.chapters.css("visibility","hidden")}},setTrack:function(a){var b;if("none"==a)this.selectedTrack=null,this.captionsButton.removeClass("mejs-captions-enabled");else for(b=0;b<this.tracks.length;b++)if(this.tracks[b].srclang==a){null===this.selectedTrack&&this.captionsButton.addClass("mejs-captions-enabled"),this.selectedTrack=this.tracks[b],this.captions.attr("lang",this.selectedTrack.srclang),this.displayCaptions();break}},loadNextTrack:function(){this.trackToLoad++,this.trackToLoad<this.tracks.length?(this.isLoadingTrack=!0,this.loadTrack(this.trackToLoad)):(this.isLoadingTrack=!1,this.checkForTracks())},loadTrack:function(b){var c=this,d=c.tracks[b];a.ajax({url:d.src,dataType:"text",success:function(a){d.entries="string"==typeof a&&/<tt\s+xml/gi.exec(a)?mejs.TrackFormatParser.dfxp.parse(a):mejs.TrackFormatParser.webvtt.parse(a),d.isLoaded=!0,c.enableTrackButton(d.srclang,d.label),c.loadNextTrack(),"chapters"==d.kind&&c.media.addEventListener("play",function(){c.media.duration>0&&c.displayChapters(d)},!1),"slides"==d.kind&&c.setupSlides(d)},error:function(){c.loadNextTrack()}})},enableTrackButton:function(b,c){""===c&&(c=mejs.language.codes[b]||b),this.captionsButton.find("input[value="+b+"]").prop("disabled",!1).siblings("label").html(c),this.options.startLanguage==b&&a("#"+this.id+"_captions_"+b).prop("checked",!0).trigger("click"),this.adjustLanguageBox()},addTrackButton:function(b,c){""===c&&(c=mejs.language.codes[b]||b),this.captionsButton.find("ul").append(a('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+b+'" value="'+b+'" disabled="disabled" /><label for="'+this.id+"_captions_"+b+'">'+c+" (loading)</label></li>")),this.adjustLanguageBox(),this.container.find(".mejs-captions-translations option[value="+b+"]").remove()},adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0)+this.captionsButton.find(".mejs-captions-translations").outerHeight(!0))},checkForTracks:function(){var a=!1;if(this.options.hideCaptionsButtonWhenEmpty){for(i=0;i<this.tracks.length;i++)if("subtitles"==this.tracks[i].kind){a=!0;break}a||(this.captionsButton.hide(),this.setControlsSize())}},displayCaptions:function(){if("undefined"!=typeof this.tracks){var a,b=this.selectedTrack;if(null!==b&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop)return this.captionsText.html(b.entries.text[a]).attr("class","mejs-captions-text "+(b.entries.times[a].identifier||"")),void this.captions.show().height(0);this.captions.hide()}},setupSlides:function(a){this.slides=a,this.slides.entries.imgs=[this.slides.entries.text.length],this.showSlide(0)},showSlide:function(b){if("undefined"!=typeof this.tracks&&"undefined"!=typeof this.slidesContainer){var c=this,d=c.slides.entries.text[b],e=c.slides.entries.imgs[b];"undefined"==typeof e||"undefined"==typeof e.fadeIn?c.slides.entries.imgs[b]=e=a('<img src="'+d+'">').on("load",function(){e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()}):!e.is(":visible")&&!e.is(":animated")&&e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if("undefined"!=typeof this.slides){var a,b=this.slides;for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop){this.showSlide(a);break}}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if("chapters"==this.tracks[a].kind&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]),this.hasChapters=!0;break}},drawChapters:function(b){var c,d,e=this,f=d=0;for(e.chapters.empty(),c=0;c<b.entries.times.length;c++)d=b.entries.times[c].stop-b.entries.times[c].start,d=Math.floor(d/e.media.duration*100),(d+f>100||c==b.entries.times.length-1&&100>d+f)&&(d=100-f),e.chapters.append(a('<div class="mejs-chapter" rel="'+b.entries.times[c].start+'" style="left: '+f.toString()+"%;width: "+d.toString()+'%;"><div class="mejs-chapter-block'+(c==b.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+b.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(b.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(b.entries.times[c].stop)+"</span></div></div>")),f+=d;e.chapters.find("div.mejs-chapter").click(function(){e.media.setCurrentTime(parseFloat(a(this).attr("rel"))),e.media.paused&&e.media.play()}),e.chapters.show()}}),mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",fl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}},mejs.TrackFormatParser={webvtt:{pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(b){var c=0;b=mejs.TrackFormatParser.split2(b,/\r?\n/);for(var d,e,f,g={text:[],times:[]};c<b.length;c++){if((d=this.pattern_timecode.exec(b[c]))&&c<b.length){for(c-1>=0&&""!==b[c-1]&&(f=b[c-1]),c++,e=b[c],c++;""!==b[c]&&c<b.length;)e=e+"\n"+b[c],c++;e=a.trim(e).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),g.text.push(e),g.times.push({identifier:f,start:0===mejs.Utility.convertSMPTEtoSeconds(d[1])?.2:mejs.Utility.convertSMPTEtoSeconds(d[1]),stop:mejs.Utility.convertSMPTEtoSeconds(d[3]),settings:d[5]})}f=""}return g}},dfxp:{parse:function(b){b=a(b).filter("tt");var c=0;c=b.children("div").eq(0);var d=c.find("p");c=b.find("#"+c.attr("style"));var e,f;if(b={text:[],times:[]},c.length&&(f=c.removeAttr("id").get(0).attributes,f.length))for(e={},c=0;c<f.length;c++)e[f[c].name.split(":")[1]]=f[c].value;for(c=0;c<d.length;c++){var g;if(f={start:null,stop:null,style:null},d.eq(c).attr("begin")&&(f.start=mejs.Utility.convertSMPTEtoSeconds(d.eq(c).attr("begin"))),!f.start&&d.eq(c-1).attr("end")&&(f.start=mejs.Utility.convertSMPTEtoSeconds(d.eq(c-1).attr("end"))),d.eq(c).attr("end")&&(f.stop=mejs.Utility.convertSMPTEtoSeconds(d.eq(c).attr("end"))),!f.stop&&d.eq(c+1).attr("begin")&&(f.stop=mejs.Utility.convertSMPTEtoSeconds(d.eq(c+1).attr("begin"))),e){g="";for(var h in e)g+=h+":"+e[h]+";"}g&&(f.style=g),0===f.start&&(f.start=.2),b.times.push(f),f=a.trim(d.eq(c).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),b.text.push(f),0===b.times.start&&(b.times.start=2)}return b}},split2:function(a,b){return a.split(b)}},3!="x\n\ny".split(/\n/gi).length&&(mejs.TrackFormatParser.split2=function(a,b){var c,d=[],e="";for(c=0;c<a.length;c++)e+=a.substring(c,c+1),b.test(e)&&(d.push(e.replace(b,"")),e="");return d.push(e),d})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){return"undefined"==typeof a.enterFullScreen?null:mejs.i18n.t(a.isFullScreen?"Turn off Fullscreen":"Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return mejs.i18n.t(a.media.muted?"Unmute":"Mute")},click:function(a){a.setMuted(a.media.muted?!1:!0)}},{isSeparator:!0},{render:function(){return mejs.i18n.t("Download Video")},click:function(a){window.location.href=a.media.currentSrc}}]}),a.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(b){b.contextMenu=a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(),b.container.bind("contextmenu",function(a){return b.isContextMenuEnabled?(a.preventDefault(),b.renderContextMenu(a.clientX-1,a.clientY-1),!1):void 0}),b.container.bind("click",function(){b.contextMenu.hide()}),b.contextMenu.bind("mouseleave",function(){b.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},isContextMenuEnabled:!0,enableContextMenu:function(){this.isContextMenuEnabled=!0},disableContextMenu:function(){this.isContextMenuEnabled=!1},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer(),a.contextMenuTimer=setTimeout(function(){a.hideContextMenu(),a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;null!=a&&(clearTimeout(a),delete a)},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(b,c){for(var d=this,e="",f=d.options.contextMenuItems,g=0,h=f.length;h>g;g++)if(f[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var i=f[g].render(d);null!=i&&(e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+1e6*Math.random()+'">'+i+"</div>")}d.contextMenu.empty().append(a(e)).css({top:c,left:b}).show(),d.contextMenu.find(".mejs-contextmenu-item").each(function(){var b=a(this),c=parseInt(b.data("itemindex"),10),e=d.options.contextMenuItems[c];"undefined"!=typeof e.show&&e.show(b,d),b.click(function(){"undefined"!=typeof e.click&&e.click(d),d.contextMenu.hide()})}),setTimeout(function(){d.killControlsTimer("rev3")},100)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")}),a.extend(MediaElementPlayer.prototype,{buildpostroll:function(b,c,d){var e=this.container.find('link[rel="postroll"]').attr("href");"undefined"!=typeof e&&(b.postroll=a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(),this.media.addEventListener("ended",function(){a.ajax({dataType:"html",url:e,success:function(a){d.find(".mejs-postroll-layer-content").html(a)}}),b.postroll.show()},!1))}})}(mejs.$),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;
e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),function(){function a(){var a=!1;a&&j("keydown",e),s.keyboardSupport&&!a&&i("keydown",e)}function b(){if(document.body){var b=document.body,c=document.documentElement,d=window.innerHeight,e=b.scrollHeight;if(x=document.compatMode.indexOf("CSS")>=0?c:b,q=b,a(),w=!0,top!=self)u=!0;else if(e>d&&(b.offsetHeight<=d||c.offsetHeight<=d)){var f=!1,g=function(){f||c.scrollHeight==document.height||(f=!0,setTimeout(function(){c.style.height=document.height+"px",f=!1},500))};if(c.style.height="auto",setTimeout(g,10),x.offsetHeight<=d){var h=document.createElement("div");h.style.clear="both",b.appendChild(h)}}s.fixedBackground||t||(b.style.backgroundAttachment="scroll",c.style.backgroundAttachment="scroll")}}function c(a,b,c,d){if(d||(d=1e3),l(b,c),1!=s.accelerationMax){var e=+new Date,f=e-C;if(f<s.accelerationDelta){var g=(1+30/f)/2;g>1&&(g=Math.min(g,s.accelerationMax),b*=g,c*=g)}C=+new Date}if(A.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!B){var h=a===document.body,i=function(){for(var e=+new Date,f=0,g=0,j=0;j<A.length;j++){var k=A[j],l=e-k.start,m=l>=s.animationTime,n=m?1:l/s.animationTime;s.pulseAlgorithm&&(n=p(n));var o=k.x*n-k.lastX>>0,q=k.y*n-k.lastY>>0;f+=o,g+=q,k.lastX+=o,k.lastY+=q,m&&(A.splice(j,1),j--)}h?window.scrollBy(f,g):(f&&(a.scrollLeft+=f),g&&(a.scrollTop+=g)),b||c||(A=[]),A.length?G(i,a,d/s.frameRate+1):B=!1};G(i,a,0),B=!0}}function d(a){w||b();var d=a.target,e=h(d);if(!e||a.defaultPrevented||k(q,"embed")||k(d,"embed")&&/\.pdf/i.test(d.src))return!0;var f=a.wheelDeltaX||0,g=a.wheelDeltaY||0;return f||g||(g=a.wheelDelta||0),!s.touchpadSupport&&m(g)?!0:(Math.abs(f)>1.2&&(f*=s.stepSize/120),Math.abs(g)>1.2&&(g*=s.stepSize/120),c(e,-f,-g),void a.preventDefault())}function e(a){var b=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==z.spacebar;if(/input|textarea|select|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||d)return!0;if(k(b,"button")&&a.keyCode===z.spacebar)return!0;var e,f=0,g=0,i=h(q),j=i.clientHeight;switch(i==document.body&&(j=window.innerHeight),a.keyCode){case z.up:g=-s.arrowScroll;break;case z.down:g=s.arrowScroll;break;case z.spacebar:e=a.shiftKey?1:-1,g=-e*j*.9;break;case z.pageup:g=.9*-j;break;case z.pagedown:g=.9*j;break;case z.home:g=-i.scrollTop;break;case z.end:var l=i.scrollHeight-i.scrollTop-j;g=l>0?l+10:0;break;case z.left:f=-s.arrowScroll;break;case z.right:f=s.arrowScroll;break;default:return!0}c(i,f,g),a.preventDefault()}function f(a){q=a.target}function g(a,b){for(var c=a.length;c--;)D[F(a[c])]=b;return b}function h(a){var b=[],c=x.scrollHeight;do{var d=D[F(a)];if(d)return g(b,d);if(b.push(a),c===a.scrollHeight){if(!u||x.clientHeight+10<c)return g(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return g(b,a)}while(a=a.parentNode)}function i(a,b,c){window.addEventListener(a,b,c||!1)}function j(a,b,c){window.removeEventListener(a,b,c||!1)}function k(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function l(a,b){a=a>0?1:-1,b=b>0?1:-1,(v.x!==a||v.y!==b)&&(v.x=a,v.y=b,A=[],C=0)}function m(a){if(a){a=Math.abs(a),y.push(a),y.shift(),clearTimeout(E);var b=n(y[0],120)&&n(y[1],120)&&n(y[2],120);return!b}}function n(a,b){return Math.floor(a/b)==a/b}function o(a){var b,c,d;return a*=s.pulseScale,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),a-=1,d=1-Math.exp(-a),b=c+d*(1-c)),b*s.pulseNormalize}function p(a){return a>=1?1:0>=a?0:(1==s.pulseNormalize&&(s.pulseNormalize/=o(1)),o(a))}var q,r={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},s=r,t=!1,u=!1,v={x:0,y:0},w=!1,x=document.documentElement,y=[120,120,120],z={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},s=r,A=[],B=!1,C=+new Date,D={};
setInterval(function(){D={}},1e4);var E,F=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),G=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),H=/chrome/i.test(window.navigator.userAgent),I=null;"onwheel"in document.createElement("div")?I="wheel":"onmousewheel"in document.createElement("div")&&(I="mousewheel"),I&&H&&(i(I,d),i("mousedown",f),i("load",b))}(),function(a,b){"use strict";var c,d=a.document,e=d.documentElement,f=a.Modernizr,g=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},h="Moz Webkit O Ms".split(" "),i=function(a){var b,c=e.style;if("string"==typeof c[a])return a;a=g(a);for(var d=0,f=h.length;f>d;d++)if(b=h[d]+a,"string"==typeof c[b])return b},j=i("transform"),k=i("transitionProperty"),l={csstransforms:function(){return!!j},csstransforms3d:function(){var a=!!i("perspective");if(a&&"webkitPerspective"in e.style){var c=b("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"),d=b('<div id="modernizr" />').appendTo("html");a=3===d.height(),d.remove(),c.remove()}return a},csstransitions:function(){return!!k}};if(f)for(c in l)f.hasOwnProperty(c)||f.addTest(c,l[c]);else{f=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m,n=" ";for(c in l)m=l[c](),f[c]=m,n+=" "+(m?"":"no-")+c;b("html").addClass(n)}if(f.csstransforms){var o=f.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e,f,g=b.data(a,"isoTransform")||{},h={},i={};h[c]=d,b.extend(g,h);for(e in g)f=g[e],i[e]=o[e](f);var k=i.translate||"",l=i.scale||"",m=k+l;b.data(a,"isoTransform",g),a.style[j]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a){var c=b.data(a,"isoTransform");return c&&c.scale?c.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a){var c=b.data(a,"isoTransform");return c&&c.translate?c.translate:[0,0]}}}var q,r;f.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[k],r=i("transitionDuration"));var s,t=b.event,u=b.event.handle?"handle":"dispatch";t.special.smartresize={setup:function(){b(this).bind("resize",t.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",t.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",s&&clearTimeout(s),s=setTimeout(function(){t[u].apply(c,d)},"execAsap"===b?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;g>f;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return 1===b.nodeType}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+g(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a,b=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(b){case"css":case"none":a=!1;break;case"jquery":a=!0;break;default:a=!f.csstransitions}this.isUsingJQueryAnimation=a,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&f.csstransforms&&f.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=""===this.options.filter?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if("*"!==b){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d,e,f=this,g=this.options.getSortData;a.each(function(){d=b(this),e={};for(var a in g)e[a]=c||"original-order"!==a?g[a](d,f):b.data(this,"isotope-sort-data")[a];b.data(this,"isotope-sort-data",e)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&"original-order"!==a&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:g>f?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;if(this["_"+c+"Layout"](a),this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d,e,g,h,i=this.isLaidOut&&this.isUsingJQueryAnimation?"animate":"css",j=this.options.animationOptions,k=this.options.onLayout;if(e=function(a,b){b.$el[i](b.style,j)},this._isInserting&&this.isUsingJQueryAnimation)e=function(a,b){d=b.$el.hasClass("no-transition")?"css":i,b.$el[d](b.style,j)};else if(c||k||j.complete){var l=!1,m=[c,k,j.complete],n=this;if(g=!0,h=function(){if(!l){for(var b,c=0,d=m.length;d>c;c++)b=m[c],"function"==typeof b&&b.call(n.element,a,n);l=!0}},this.isUsingJQueryAnimation&&"animate"===i)j.complete=h,g=!1;else if(f.csstransitions){for(var o,p=0,s=this.styleQueue[0],t=s&&s.$el;!t||!t.length;){if(o=this.styleQueue[p++],!o)return;t=o.$el}var u=parseFloat(getComputedStyle(t[0])[r]);u>0&&(e=function(a,b){b.$el[i](b.style,j).one(q,h)},g=!1)}}b.each(this.styleQueue,e),g&&h(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[j]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b,c=this.options.layoutMode,d=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",h=this.element[e](),i=this.options[c]&&this.options[c][d]||this.$filteredAtoms["outer"+g(e)](!0)||h;b=Math.floor(h/i),b=Math.max(b,1),this[c][f]=b,this[c][d]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;for(this.masonry.colYs=[];a--;)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);if(e=Math.min(e,d.cols),1===e)c._masonryPlaceBrick(a,d.colYs);else{var f,g,h=d.cols+1-e,i=[];for(g=0;h>g;g++)f=d.colYs.slice(g,g+e),i[g]=Math.max.apply(Math,f);c._masonryPlaceBrick(a,i)}})},_masonryPlaceBrick:function(a,b){for(var c=Math.min.apply(Math,b),d=0,e=0,f=b.length;f>e;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;j>e;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);0!==e.x&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(){var a=b(this);c._pushPosition(a,0,c.straightDown.y),c.straightDown.y+=a.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;for(this.masonryHorizontal.rowXs=[];a--;)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);if(e=Math.min(e,d.rows),1===e)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f,g,h=d.rows+1-e,i=[];for(g=0;h>g;g++)f=d.rowXs.slice(g,g+e),i[g]=Math.max.apply(Math,f);c._masonryHorizontalPlaceBrick(a,i)}})},_masonryHorizontalPlaceBrick:function(a,b){for(var c=Math.min.apply(Math,b),d=0,e=0,f=b.length;f>e;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;j>e;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);0!==e.y&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(){var a=b(this);c._pushPosition(a,c.straightAcross.x,0),c.straightAcross.x+=a.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function c(){a.call(e,f)}function d(a){var e=a.target;e.src!==h&&-1===b.inArray(e,i)&&(i.push(e),--g<=0&&(setTimeout(c),f.unbind(".imagesLoaded",d)))}var e=this,f=e.find("img").add(e.filter("img")),g=f.length,h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i=[];return g||c(),f.bind("load.imagesLoaded error.imagesLoaded",d).each(function(){var a=this.src;this.src=h,this.src=a}),e};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if("string"==typeof a){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");return c?b.isFunction(c[a])&&"_"!==a.charAt(0)?void c[a].apply(c,d):void x("no such method '"+a+"' for isotope instance"):void x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'")})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}}(window,jQuery),function(a){var b,c,d,e,f,g,h,i="Close",j="BeforeClose",k="AfterClose",l="BeforeAppend",m="MarkupParse",n="Open",o="Change",p="mfp",q="."+p,r="mfp-ready",s="mfp-removing",t="mfp-prevent-close",u=function(){},v=!!window.jQuery,w=a(window),x=function(a,c){b.ev.on(p+a+q,c)},y=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},z=function(c,d){b.ev.triggerHandler(p+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},A=function(c){return c===h&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),h=c),b.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(b=new u,b.init(),a.magnificPopup.instance=b)},C=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};u.prototype={constructor:u,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=C(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document.body),e=a(document),b.popupsCache={}},open:function(c){var d;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var f,h=c.items;for(d=0;d<h.length;d++)if(f=h[d],f.parsed&&(f=f.el[0]),f===c.el[0]){b.index=d;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],g="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):e,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=y("bg").on("click"+q,function(){b.close()}),b.wrap=y("wrap").attr("tabindex",-1).on("click"+q,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=y("container",b.wrap)),b.contentContainer=y("content"),b.st.preloader&&(b.preloader=y("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(d=0;d<i.length;d++){var j=i[d];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}z("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(x(m,function(a,b,c,d){c.close_replaceWith=A(d.type)}),g+=" mfp-close-btn-in"):b.wrap.append(A())),b.st.alignTop&&(g+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:w.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:e.height(),position:"absolute"}),b.st.enableEscapeKey&&e.on("keyup"+q,function(a){27===a.keyCode&&b.close()}),w.on("resize"+q,function(){b.updateSize()}),b.st.closeOnContentClick||(g+=" mfp-auto-cursor"),g&&b.wrap.addClass(g);var k=b.wH=w.height(),l={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(l.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):l.overflow="hidden");var p=b.st.mainClass;return b.isIE7&&(p+=" mfp-ie7"),p&&b._addClassToMFP(p),b.updateItemHTML(),z("BuildControls"),a("html").css(l),b.bgOverlay.add(b.wrap).prependTo(document.body),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(r),b._setFocus()):b.bgOverlay.addClass(r),e.on("focusin"+q,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),z(n),c},close:function(){b.isOpen&&(z(j),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(s),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){z(i);var c=s+" "+r+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var d={marginRight:""};b.isIE7?a("body, html").css("overflow",""):d.overflow="",a("html").css(d)}e.off("keyup"+q+" focusin"+q),b.ev.off(q),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,z(k)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||w.height();b.fixedContentPos||b.wrap.css("height",b.wH),z("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(z("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var e=b.st[d]?b.st[d].markup:!1;z("FirstMarkupParse",e),b.currTemplate[d]=e?a(e):!0}f&&f!==c.type&&b.container.removeClass("mfp-"+f+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,z(o,c),f=c.type,b.container.prepend(b.contentContainer),z("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(A()):b.content=a:b.content="",z(l),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d=b.items[c],e=d.type;if(d=d.tagName?{el:a(d)}:{data:d,src:d.src},d.el){for(var f=b.types,g=0;g<f.length;g++)if(d.el.hasClass("mfp-"+f[g])){e=f[g];break}d.src=d.el.attr("data-mfp-src"),d.src||(d.src=d.el.attr("href"))}return d.type=e||b.st.type||"inline",d.index=c,d.parsed=!0,b.items[c]=d,z("ElementParse",d),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(w.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};z("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(t)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?e.height():document.body.scrollHeight)>(a||w.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),z(m,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(q+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(q+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:u.prototype,modules:[],open:function(b,c){return B(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){B();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=v?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),v?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var D,E,F,G="inline",H=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(G,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(G),x(i+"."+G,function(){H()})},getInline:function(c,d){if(H(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(E||(D=e.hiddenClass,E=y(D),D="mfp-"+D),F=f.after(E).detach().removeClass(D)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var I,J="ajax",K=function(){I&&d.removeClass(I)},L=function(){K(),b.req&&b.req.abort()};a.magnificPopup.registerModule(J,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(J),I=b.st.ajax.cursor,x(i+"."+J,L),x("BeforeChange."+J,L)},getAjax:function(c){I&&d.addClass(I),b.updateStatus("loading");var e=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};z("ParseAjax",g),b.appendContent(a(g.data),J),c.finished=!0,K(),b._setFocus(),setTimeout(function(){b.wrap.addClass(r)},16),b.updateStatus("ready"),z("AjaxContentAdded")},error:function(){K(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(e),""}}});var M,N=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=b.st.image,c=".image";b.types.push("image"),x(n+c,function(){"image"===b.currItem.type&&a.cursor&&d.addClass(a.cursor)}),x(i+c,function(){a.cursor&&d.removeClass(a.cursor),w.off("resize"+q)}),x("Resize"+c,b.resizeImage),b.isLowIE&&x("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,M&&clearInterval(M),a.isCheckingImgSize=!1,z("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){M&&clearInterval(M),M=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(M),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,z("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),c.img[0].naturalWidth>0&&(c.hasSize=!0)}return b._parseMarkup(d,{title:N(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(M&&clearInterval(M),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var O,P=function(){return void 0===O&&(O=void 0!==document.createElement("p").style.MozTransform),O};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,h=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};x("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=h(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,z("ZoomAnimationEnded")},16)},g)},16)}}),x(j+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=h(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),x(i+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(v?d.innerHeight():d[0].offsetHeight)-g-f};return P()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var Q="iframe",R="//about:blank",S=function(a){if(b.currTemplate[Q]){var c=b.currTemplate[Q].find("iframe");c.length&&(a||(c[0].src=R),b.isIE8&&c.css("display",a?"block":"none"))
}};a.magnificPopup.registerModule(Q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(Q),x("BeforeChange",function(a,b,c){b!==c&&(b===Q?S():c===Q&&S(!0))}),x(i+"."+Q,function(){S()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var T=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},U=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,d=".mfp-gallery",f=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(g+=" mfp-gallery",x(n+d,function(){c.navigateByImgClick&&b.wrap.on("click"+d,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),e.on("keydown"+d,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),x("UpdateStatus"+d,function(a,c){c.text&&(c.text=U(c.text,b.currItem.index,b.items.length))}),x(m+d,function(a,d,e,f){var g=b.items.length;e.counter=g>1?U(c.tCounter,f.index,g):""}),x("BuildControls"+d,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(t),g=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(t),h=f?"mfpFastClick":"click";e[h](function(){b.prev()}),g[h](function(){b.next()}),b.isIE7&&(y("b",e[0],!1,!0),y("a",e[0],!1,!0),y("b",g[0],!1,!0),y("a",g[0],!1,!0)),b.container.append(e.add(g))}}),x(o+d,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void x(i+d,function(){e.off(d),b.wrap.off("click"+d),b.arrowLeft&&f&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=T(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=T(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=T(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),z("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,z("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var V="retina";a.magnificPopup.registerModule(V,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(x("ImageHasSize."+V,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),x("ElementParse."+V,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){w.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,w.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&w.off("touchmove"+f+" touchend"+f)}}(),B()}(window.jQuery||window.Zepto),function(a,b){"object"==typeof exports?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing="string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}}),function(){var a=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},b=[].slice;!function(a,b){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(c){return b(c,a)}):b(a.jQuery,a)}(window,function(c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;return e=c(d),l=a.call(d,"ontouchstart")>=0,h={horizontal:{},vertical:{}},i=1,k={},j="waypoints-context-id",o="resize.waypoints",p="scroll.waypoints",q=1,r="waypoints-waypoint-ids",s="waypoint",t="waypoints",f=function(){function a(a){var b=this;this.$element=a,this.element=a[0],this.didResize=!1,this.didScroll=!1,this.id="context"+i++,this.oldScroll={x:a.scrollLeft(),y:a.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[j]=this.id,k[this.id]=this,a.bind(p,function(){var a;return b.didScroll||l?void 0:(b.didScroll=!0,a=function(){return b.doScroll(),b.didScroll=!1},d.setTimeout(a,c[t].settings.scrollThrottle))}),a.bind(o,function(){var a;return b.didResize?void 0:(b.didResize=!0,a=function(){return c[t]("refresh"),b.didResize=!1},d.setTimeout(a,c[t].settings.resizeThrottle))})}return a.prototype.doScroll=function(){var a,b=this;return a={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!l||a.vertical.oldScroll&&a.vertical.newScroll||c[t]("refresh"),c.each(a,function(a,d){var e,f,g;return g=[],f=d.newScroll>d.oldScroll,e=f?d.forward:d.backward,c.each(b.waypoints[a],function(a,b){var c,e;return d.oldScroll<(c=b.offset)&&c<=d.newScroll?g.push(b):d.newScroll<(e=b.offset)&&e<=d.oldScroll?g.push(b):void 0}),g.sort(function(a,b){return a.offset-b.offset}),f||g.reverse(),c.each(g,function(a,b){return b.options.continuous||a===g.length-1?b.trigger([e]):void 0})}),this.oldScroll={x:a.horizontal.newScroll,y:a.vertical.newScroll}},a.prototype.refresh=function(){var a,b,d,e=this;return d=c.isWindow(this.element),b=this.$element.offset(),this.doScroll(),a={horizontal:{contextOffset:d?0:b.left,contextScroll:d?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:d?0:b.top,contextScroll:d?0:this.oldScroll.y,contextDimension:d?c[t]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},c.each(a,function(a,b){return c.each(e.waypoints[a],function(a,d){var e,f,g,h,i;return e=d.options.offset,g=d.offset,f=c.isWindow(d.element)?0:d.$element.offset()[b.offsetProp],c.isFunction(e)?e=e.apply(d.element):"string"==typeof e&&(e=parseFloat(e),d.options.offset.indexOf("%")>-1&&(e=Math.ceil(b.contextDimension*e/100))),d.offset=f-b.contextOffset+b.contextScroll-e,d.options.onlyOnScroll&&null!=g||!d.enabled?void 0:null!==g&&g<(h=b.oldScroll)&&h<=d.offset?d.trigger([b.backward]):null!==g&&g>(i=b.oldScroll)&&i>=d.offset?d.trigger([b.forward]):null===g&&b.oldScroll>=d.offset?d.trigger([b.forward]):void 0})})},a.prototype.checkEmpty=function(){return c.isEmptyObject(this.waypoints.horizontal)&&c.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([o,p].join(" ")),delete k[this.id]):void 0},a}(),g=function(){function a(a,b,d){var e,f;"bottom-in-view"===d.offset&&(d.offset=function(){var a;return a=c[t]("viewportHeight"),c.isWindow(b.element)||(a=b.$element.height()),a-c(this).outerHeight()}),this.$element=a,this.element=a[0],this.axis=d.horizontal?"horizontal":"vertical",this.callback=d.handler,this.context=b,this.enabled=d.enabled,this.id="waypoints"+q++,this.offset=null,this.options=d,b.waypoints[this.axis][this.id]=this,h[this.axis][this.id]=this,e=null!=(f=this.element[r])?f:[],e.push(this.id),this.element[r]=e}return a.prototype.trigger=function(a){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,a),this.options.triggerOnce?this.destroy():void 0):void 0},a.prototype.disable=function(){return this.enabled=!1},a.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},a.prototype.destroy=function(){return delete h[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},a.getWaypointsByElement=function(a){var b,d;return(d=a[r])?(b=c.extend({},h.horizontal,h.vertical),c.map(d,function(a){return b[a]})):[]},a}(),n={init:function(a,b){var d;return b=c.extend({},c.fn[s].defaults,b),null==(d=b.handler)&&(b.handler=a),this.each(function(){var a,d,e,h;return a=c(this),e=null!=(h=b.context)?h:c.fn[s].defaults.context,c.isWindow(e)||(e=a.closest(e)),e=c(e),d=k[e[0][j]],d||(d=new f(e)),new g(a,d,b)}),c[t]("refresh"),this},disable:function(){return n._invoke.call(this,"disable")},enable:function(){return n._invoke.call(this,"enable")},destroy:function(){return n._invoke.call(this,"destroy")},prev:function(a,b){return n._traverse.call(this,a,b,function(a,b,c){return b>0?a.push(c[b-1]):void 0})},next:function(a,b){return n._traverse.call(this,a,b,function(a,b,c){return b<c.length-1?a.push(c[b+1]):void 0})},_traverse:function(a,b,e){var f,g;return null==a&&(a="vertical"),null==b&&(b=d),g=m.aggregate(b),f=[],this.each(function(){var b;return b=c.inArray(this,g[a]),e(f,b,g[a])}),this.pushStack(f)},_invoke:function(a){return this.each(function(){var b;return b=g.getWaypointsByElement(this),c.each(b,function(b,c){return c[a](),!0})}),this}},c.fn[s]=function(){var a,d;return d=arguments[0],a=2<=arguments.length?b.call(arguments,1):[],n[d]?n[d].apply(this,a):c.isFunction(d)?n.init.apply(this,arguments):c.isPlainObject(d)?n.init.apply(this,[null,d]):c.error(d?"The "+d+" method does not exist in jQuery Waypoints.":"jQuery Waypoints needs a callback function or handler option.")},c.fn[s].defaults={context:d,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},m={refresh:function(){return c.each(k,function(a,b){return b.refresh()})},viewportHeight:function(){var a;return null!=(a=d.innerHeight)?a:e.height()},aggregate:function(a){var b,d,e;return b=h,a&&(b=null!=(e=k[c(a)[0][j]])?e.waypoints:void 0),b?(d={horizontal:[],vertical:[]},c.each(d,function(a,e){return c.each(b[a],function(a,b){return e.push(b)}),e.sort(function(a,b){return a.offset-b.offset}),d[a]=c.map(e,function(a){return a.element}),d[a]=c.unique(d[a])}),d):[]},above:function(a){return null==a&&(a=d),m._filter(a,"vertical",function(a,b){return b.offset<=a.oldScroll.y})},below:function(a){return null==a&&(a=d),m._filter(a,"vertical",function(a,b){return b.offset>a.oldScroll.y})},left:function(a){return null==a&&(a=d),m._filter(a,"horizontal",function(a,b){return b.offset<=a.oldScroll.x})},right:function(a){return null==a&&(a=d),m._filter(a,"horizontal",function(a,b){return b.offset>a.oldScroll.x})},enable:function(){return m._invoke("enable")},disable:function(){return m._invoke("disable")},destroy:function(){return m._invoke("destroy")},extendFn:function(a,b){return n[a]=b},_invoke:function(a){var b;return b=c.extend({},h.vertical,h.horizontal),c.each(b,function(b,c){return c[a](),!0})},_filter:function(a,b,d){var e,f;return(e=k[c(a)[0][j]])?(f=[],c.each(e.waypoints[b],function(a,b){return d(e,b)?f.push(b):void 0}),f.sort(function(a,b){return a.offset-b.offset}),c.map(f,function(a){return a.element})):[]}},c[t]=function(){var a,c;return c=arguments[0],a=2<=arguments.length?b.call(arguments,1):[],m[c]?m[c].apply(null,a):m.aggregate.call(null,c)},c[t].settings={resizeThrottle:100,scrollThrottle:30},e.on("load.waypoints",function(){return c[t]("refresh")})})}.call(this),function(){!function(a,b){return"function"==typeof define&&define.amd?define(["jquery","waypoints"],b):b(a.jQuery)}(window,function(a){var b,c;return b={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},c=function(a,b){var c;return a.wrap(b.wrapper),c=a.parent(),c.data("isWaypointStickyWrapper",!0)},a.waypoints("extendFn","sticky",function(d){var e,f,g;return f=a.extend({},a.fn.waypoint.defaults,b,d),e=c(this,f),g=f.handler,f.handler=function(b){var c,d;return c=a(this).children(":first"),d=-1!==f.direction.indexOf(b),c.toggleClass(f.stuckClass,d),e.height(d?c.outerHeight():""),null!=g?g.call(this,b):void 0},e.waypoint(f),this.data("stuckClass",f.stuckClass)}),a.waypoints("extendFn","unsticky",function(){var a;return a=this.parent(),a.data("isWaypointStickyWrapper")?(a.waypoint("destroy"),this.unwrap(),this.removeClass(this.data("stuckClass"))):this})})}.call(this),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}var c=a.prototype;c.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},c.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},c.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},c.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},c.on=c.addListener,c.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},c.once=c.addOnceListener,c.defineEvent=function(a){return this.getListeners(a),this},c.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},c.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},c.off=c.removeListener,c.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},c.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},c.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},c.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},c.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],f=c.listener.apply(this,b||[]),(f===this._getOnceReturnValue()||c.once===!0)&&this.removeListener(a,g[e][d].listener);return this},c.trigger=c.emitEvent,c.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},c.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},c._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},c._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){"use strict";var b=document.documentElement,c=function(){};b.addEventListener?c=function(a,b,c){a.addEventListener(b,c,!1)}:b.attachEvent&&(c=function(b,c,d){b[c+d]=d.handleEvent?function(){var b=a.event;b.target=b.target||b.srcElement,d.handleEvent.call(d,b)}:function(){var c=a.event;c.target=c.target||c.srcElement,d.call(b,c)},b.attachEvent("on"+c,b[c+d])});var d=function(){};b.removeEventListener?d=function(a,b,c){a.removeEventListener(b,c,!1)}:b.detachEvent&&(d=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var e={bind:c,unbind:d};"function"==typeof define&&define.amd?define(e):a.eventie=e}(this),function(a){"use strict";function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===i.call(a)}function d(a){var b=[];if(c(a))b=a;else if("number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,c){function e(a,c,g){if(!(this instanceof e))return new e(a,c);"string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=d(a),this.options=b({},this.options),"function"==typeof c?g=c:b(this.options,c),g&&this.on("always",g),this.getImages(),f&&(this.jqDeferred=new f.Deferred);var h=this;setTimeout(function(){h.check()})}function i(a){this.img=a}e.prototype=new a,e.prototype.options={},e.prototype.getImages=function(){this.images=[];for(var a=0,b=this.elements.length;b>a;a++){var c=this.elements[a];"IMG"===c.nodeName&&this.addImage(c);for(var d=c.querySelectorAll("img"),e=0,f=d.length;f>e;e++){var g=d[e];this.addImage(g)}}},e.prototype.addImage=function(a){var b=new i(a);this.images.push(b)},e.prototype.check=function(){function a(a,e){return b.options.debug&&h&&g.log("confirm",a,e),b.progress(a),c++,c===d&&b.complete(),!0}var b=this,c=0,d=this.images.length;if(this.hasAnyBroken=!1,!d)return void this.complete();for(var e=0;d>e;e++){var f=this.images[e];f.on("confirm",a),f.check()}},e.prototype.progress=function(a){this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded;var b=this;setTimeout(function(){b.emit("progress",b,a),b.jqDeferred&&b.jqDeferred.notify(b,a)})},e.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var b=this;setTimeout(function(){if(b.emit(a,b),b.emit("always",b),b.jqDeferred){var c=b.hasAnyBroken?"reject":"resolve";b.jqDeferred[c](b)}})},f&&(f.fn.imagesLoaded=function(a,b){var c=new e(this,a,b);return c.jqDeferred.promise(f(this))});var j={};return i.prototype=new a,i.prototype.check=function(){var a=j[this.img.src];if(a)return void this.useCached(a);if(j[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var b=this.proxyImage=new Image;c.bind(b,"load",this),c.bind(b,"error",this),b.src=this.img.src},i.prototype.useCached=function(a){if(a.isConfirmed)this.confirm(a.isLoaded,"cached was confirmed");else{var b=this;a.on("confirm",function(a){return b.confirm(a.isLoaded,"cache emitted confirmed"),!0})}},i.prototype.confirm=function(a,b){this.isConfirmed=!0,this.isLoaded=a,this.emit("confirm",this,b)},i.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},i.prototype.unbindProxyEvents=function(){c.unbind(this.proxyImage,"load",this),c.unbind(this.proxyImage,"error",this)},e}var f=a.jQuery,g=a.console,h="undefined"!=typeof g,i=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],e):a.imagesLoaded=e(a.EventEmitter,a.eventie)}(window),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],f="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML=f,e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==g()&&d.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function g(){try{return b.activeElement}catch(a){}}var h,i,j="[object OperaMini]"==Object.prototype.toString.call(a.operamini),k="placeholder"in b.createElement("input")&&!j,l="placeholder"in b.createElement("textarea")&&!j,m=c.fn,n=c.valHooks,o=c.propHooks;k&&l?(i=m.placeholder=function(){return this},i.input=i.textarea=!0):(i=m.placeholder=function(){var a=this;return a.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},i.input=k,i.textarea=l,h={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),h=d.data("placeholder-password");return h?h[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=g()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},k||(n.input=h,o.value=h),l||(n.textarea=h,o.value=h),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b){return a.isFunction(b)||"object"==typeof b?b:{top:b,left:b}}var c=a.scrollTo=function(b,c,d){return a(window).scrollTo(b,c,d)};return c.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},c.window=function(){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||-1!=a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||"BackCompat"==d.compatMode?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),"max"==d&&(d=9e9),f=a.extend({},c.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=b(f.offset),f.over=b(f.over),this._scrollable().each(function(){function g(a){j.animate(l,e,f.easing,a&&function(){a.call(this,k,f)})}if(null!=d){var h,i=this,j=a(i),k=d,l={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}if(k=m?a(k):a(k,this),!k.length)return;case"object":(k.is||k.style)&&(h=(k=a(k)).offset())}var n=a.isFunction(f.offset)&&f.offset(i,k)||f.offset;a.each(f.axis.split(""),function(a,b){var d="x"==b?"Left":"Top",e=d.toLowerCase(),o="scroll"+d,p=i[o],q=c.max(i,b);if(h)l[o]=h[e]+(m?0:p-j.offset()[e]),f.margin&&(l[o]-=parseInt(k.css("margin"+d))||0,l[o]-=parseInt(k.css("border"+d+"Width"))||0),l[o]+=n[e]||0,f.over[e]&&(l[o]+=k["x"==b?"width":"height"]()*f.over[e]);else{var r=k[e];l[o]=r.slice&&"%"==r.slice(-1)?parseFloat(r)/100*q:r}f.limit&&/^\d+$/.test(l[o])&&(l[o]=l[o]<=0?0:Math.min(l[o],q)),!a&&f.queue&&(p!=l[o]&&g(f.onAfterFirst),delete l[o])}),g(f.onAfter)}}).end()},c.max=function(b,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])},c}),function(a,b,c){"use strict";b.infinitescroll=function(a,c,d){this.element=b(d),this._create(a,c)||(this.failed=!0)},b.infinitescroll.defaults={loading:{finished:c,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:c},state:{isDuringAjax:!1,isInvalidPage:!1,isDestroyed:!1,isDone:!1,isPaused:!1,isBeyondMaxPage:!1,currPage:1},debug:!1,behavior:c,binder:b(a),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:!1,pathParse:c,dataType:"html",appendCallback:!0,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:c,path:c,prefill:!1,maxPage:c},b.infinitescroll.prototype={_binding:function(a){var b=this,d=b.options;
return d.v="2.0b2.120520",d.behavior&&this["_binding_"+d.behavior]!==c?void this["_binding_"+d.behavior].call(this):"bind"!==a&&"unbind"!==a?(this._debug("Binding value  "+a+" not valid"),!1):("unbind"===a?this.options.binder.unbind("smartscroll.infscr."+b.options.infid):this.options.binder[a]("smartscroll.infscr."+b.options.infid,function(){b.scroll()}),void this._debug("Binding",a))},_create:function(d,e){var f=b.extend(!0,{},b.infinitescroll.defaults,d);this.options=f;var g=b(a),h=this;if(!h._validate(d))return!1;var i=b(f.nextSelector).attr("href");if(!i)return this._debug("Navigation selector not found"),!1;f.path=f.path||this._determinepath(i),f.contentSelector=f.contentSelector||this.element,f.loading.selector=f.loading.selector||f.contentSelector,f.loading.msg=f.loading.msg||b('<div id="infscr-loading"><img alt="Loading..." src="'+f.loading.img+'" /><div>'+f.loading.msgText+"</div></div>"),(new Image).src=f.loading.img,f.pixelsFromNavToBottom===c&&(f.pixelsFromNavToBottom=b(document).height()-b(f.navSelector).offset().top,this._debug("pixelsFromNavToBottom: "+f.pixelsFromNavToBottom));var j=this;return f.loading.start=f.loading.start||function(){b(f.navSelector).hide(),f.loading.msg.appendTo(f.loading.selector).show(f.loading.speed,b.proxy(function(){this.beginAjax(f)},j))},f.loading.finished=f.loading.finished||function(){f.state.isBeyondMaxPage||f.loading.msg.fadeOut(f.loading.speed)},f.callback=function(a,d,h){f.behavior&&a["_callback_"+f.behavior]!==c&&a["_callback_"+f.behavior].call(b(f.contentSelector)[0],d,h),e&&e.call(b(f.contentSelector)[0],d,f,h),f.prefill&&g.bind("resize.infinite-scroll",a._prefill)},d.debug&&(!Function.prototype.bind||"object"!=typeof console&&"function"!=typeof console||"object"!=typeof console.log||["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(a){console[a]=this.call(console[a],console)},Function.prototype.bind)),this._setup(),f.prefill&&this._prefill(),!0},_prefill:function(){function c(){return d.options.contentSelector.height()<=e.height()}var d=this,e=b(a);this._prefill=function(){c()&&d.scroll(),e.bind("resize.infinite-scroll",function(){c()&&(e.unbind("resize.infinite-scroll"),d.scroll())})},this._prefill()},_debug:function(){!0===this.options.debug&&("undefined"!=typeof console&&"function"==typeof console.log?console.log(1===Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?Array.prototype.slice.call(arguments).toString():Array.prototype.slice.call(arguments)):Function.prototype.bind||"undefined"==typeof console||"object"!=typeof console.log||Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments)))},_determinepath:function(a){var b=this.options;if(b.behavior&&this["_determinepath_"+b.behavior]!==c)return this["_determinepath_"+b.behavior].call(this,a);if(b.pathParse)return this._debug("pathParse manual"),b.pathParse(a,this.options.state.currPage+1);if(a.match(/^(.*?)\b2\b(.*?$)/))a=a.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(a.match(/^(.*?)2(.*?$)/)){if(a.match(/^(.*?page=)2(\/.*|$)/))return a=a.match(/^(.*?page=)2(\/.*|$)/).slice(1);a=a.match(/^(.*?)2(.*?$)/).slice(1)}else{if(a.match(/^(.*?page=)1(\/.*|$)/))return a=a.match(/^(.*?page=)1(\/.*|$)/).slice(1);this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."),b.state.isInvalidPage=!0}return this._debug("determinePath",a),a},_error:function(a){var b=this.options;return b.behavior&&this["_error_"+b.behavior]!==c?void this["_error_"+b.behavior].call(this,a):("destroy"!==a&&"end"!==a&&(a="unknown"),this._debug("Error",a),("end"===a||b.state.isBeyondMaxPage)&&this._showdonemsg(),b.state.isDone=!0,b.state.currPage=1,b.state.isPaused=!1,b.state.isBeyondMaxPage=!1,void this._binding("unbind"))},_loadcallback:function(d,e,f){var g,h=this.options,i=this.options.callback,j=h.state.isDone?"done":h.appendCallback?"append":"no-append";if(h.behavior&&this["_loadcallback_"+h.behavior]!==c)return void this["_loadcallback_"+h.behavior].call(this,d,e);switch(j){case"done":return this._showdonemsg(),!1;case"no-append":"html"===h.dataType&&(e="<div>"+e+"</div>",e=b(e).find(h.itemSelector));break;case"append":var k=d.children();if(0===k.length)return this._error("end");for(g=document.createDocumentFragment();d[0].firstChild;)g.appendChild(d[0].firstChild);this._debug("contentSelector",b(h.contentSelector)[0]),b(h.contentSelector)[0].appendChild(g),e=k.get()}if(h.loading.finished.call(b(h.contentSelector)[0],h),h.animate){var l=b(a).scrollTop()+b(h.loading.msg).height()+h.extraScrollPx+"px";b("html,body").animate({scrollTop:l},800,function(){h.state.isDuringAjax=!1})}h.animate||(h.state.isDuringAjax=!1),i(this,e,f),h.prefill&&this._prefill()},_nearbottom:function(){var d=this.options,e=0+b(document).height()-d.binder.scrollTop()-b(a).height();return d.behavior&&this["_nearbottom_"+d.behavior]!==c?this["_nearbottom_"+d.behavior].call(this):(this._debug("math:",e,d.pixelsFromNavToBottom),e-d.bufferPx<d.pixelsFromNavToBottom)},_pausing:function(a){var b=this.options;if(b.behavior&&this["_pausing_"+b.behavior]!==c)return void this["_pausing_"+b.behavior].call(this,a);switch("pause"!==a&&"resume"!==a&&null!==a&&this._debug("Invalid argument. Toggling pause value instead"),a=!a||"pause"!==a&&"resume"!==a?"toggle":a){case"pause":b.state.isPaused=!0;break;case"resume":b.state.isPaused=!1;break;case"toggle":b.state.isPaused=!b.state.isPaused}return this._debug("Paused",b.state.isPaused),!1},_setup:function(){var a=this.options;return a.behavior&&this["_setup_"+a.behavior]!==c?void this["_setup_"+a.behavior].call(this):(this._binding("bind"),!1)},_showdonemsg:function(){var a=this.options;return a.behavior&&this["_showdonemsg_"+a.behavior]!==c?void this["_showdonemsg_"+a.behavior].call(this):(a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({opacity:1},2e3,function(){b(this).parent().fadeOut(a.loading.speed)}),void a.errorCallback.call(b(a.contentSelector)[0],"done"))},_validate:function(a){for(var c in a)if(c.indexOf&&c.indexOf("Selector")>-1&&0===b(a[c]).length)return this._debug("Your "+c+" found no elements."),!1;return!0},bind:function(){this._binding("bind")},destroy:function(){return this.options.state.isDestroyed=!0,this.options.loading.finished(),this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(a){var d,e,f,g,h=this,i=a.path;if(a.state.currPage++,a.maxPage!=c&&a.state.currPage>a.maxPage)return a.state.isBeyondMaxPage=!0,void this.destroy();switch(d=b(b(a.contentSelector).is("table, tbody")?"<tbody/>":"<div/>"),e="function"==typeof i?i(a.state.currPage):i.join(a.state.currPage),h._debug("heading into ajax",e),f="html"===a.dataType||"json"===a.dataType?a.dataType:"html+callback",a.appendCallback&&"html"===a.dataType&&(f+="+callback"),f){case"html+callback":h._debug("Using HTML via .load() method"),d.load(e+" "+a.itemSelector,c,function(a){h._loadcallback(d,a,e)});break;case"html":h._debug("Using "+f.toUpperCase()+" via $.ajax() method"),b.ajax({url:e,dataType:a.dataType,complete:function(a,b){g="undefined"!=typeof a.isResolved?a.isResolved():"success"===b||"notmodified"===b,g?h._loadcallback(d,a.responseText,e):h._error("end")}});break;case"json":h._debug("Using "+f.toUpperCase()+" via $.ajax() method"),b.ajax({dataType:"json",type:"GET",url:e,success:function(b,f,i){if(g="undefined"!=typeof i.isResolved?i.isResolved():"success"===f||"notmodified"===f,a.appendCallback)if(a.template!==c){var j=a.template(b);d.append(j),g?h._loadcallback(d,j):h._error("end")}else h._debug("template must be defined."),h._error("end");else g?h._loadcallback(d,b,e):h._error("end")},error:function(){h._debug("JSON ajax request failed."),h._error("end")}})}},retrieve:function(a){a=a||null;var d=this,e=d.options;return e.behavior&&this["retrieve_"+e.behavior]!==c?void this["retrieve_"+e.behavior].call(this,a):e.state.isDestroyed?(this._debug("Instance is destroyed"),!1):(e.state.isDuringAjax=!0,void e.loading.start.call(b(e.contentSelector)[0],e))},scroll:function(){var a=this.options,b=a.state;return a.behavior&&this["scroll_"+a.behavior]!==c?void this["scroll_"+a.behavior].call(this):void(b.isDuringAjax||b.isInvalidPage||b.isDone||b.isDestroyed||b.isPaused||this._nearbottom()&&this.retrieve())},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(a){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))}},b.fn.infinitescroll=function(a,c){var d=typeof a;switch(d){case"string":var e=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"infinitescroll");return c&&b.isFunction(c[a])&&"_"!==a.charAt(0)?void c[a].apply(c,e):!1});break;case"object":this.each(function(){var d=b.data(this,"infinitescroll");d?d.update(a):(d=new b.infinitescroll(a,c,this),d.failed||b.data(this,"infinitescroll",d))})}return this};var d,e=b.event;e.special.smartscroll={setup:function(){b(this).bind("scroll",e.special.smartscroll.handler)},teardown:function(){b(this).unbind("scroll",e.special.smartscroll.handler)},handler:function(a,c){var e=this,f=arguments;a.type="smartscroll",d&&clearTimeout(d),d=setTimeout(function(){b(e).trigger("smartscroll",f)},"execAsap"===c?0:100)}},b.fn.smartscroll=function(a){return a?this.bind("smartscroll",a):this.trigger("smartscroll",["execAsap"])}}(window,jQuery),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){return function(b){var c=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(c)for(var e=0,f=c.length;f>e;++e){var g=c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),i=new RegExp(g[0]),j=g[1]||"",k=g[3]||"",l=null;g=g[2],h.hasOwnProperty(g)&&(l=h[g],l=Number(a[l])),null!==l&&("!"===j&&(l=d(k,l)),""===j&&10>l&&(l="0"+l.toString()),b=b.replace(i,l.toString()))}return b=b.replace(/%%/,"%")}}function d(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var e=100,f=[],g=[];g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var h={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},i=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)),this.setFinalDate(c),this.start()};a.extend(i.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},e)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop(),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){return 0===this.$el.closest("html").length?void this.remove():(this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)},void(0===this.totalSecsLeft?(this.stop(),this.dispatchEvent("finish")):this.dispatchEvent("update")))},dispatchEvent:function(b){var d=a.Event(b+".countdown");d.finalDate=this.finalDate,d.offset=a.extend({},this.offset),d.strftime=c(this.offset),this.$el.trigger(d)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];i.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new i(this,b[0],b[1])})}}),function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var e,f=d.vars.namespace,g=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,h=("ontouchstart"in window||g||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,i="click touchend MSPointerUp keyup",j="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var c=d.getTarget(0>b?"next":"prev");d.flexAnimate(c,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),h&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(f+"active-slide").eq(d.currentItem).addClass(f+"active-slide"),g?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(i,function(b){b.preventDefault();var c=a(this),e=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(f+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(f+"active-slide")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var b,c,e="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",g=1;if(d.controlNavScaffold=a('<ol class="'+f+"control-nav "+f+e+'"></ol>'),d.pagingCount>1)for(var h=0;h<d.pagingCount;h++){if(c=d.slides.eq(h),b="thumbnails"===d.vars.controlNav?'<img src="'+c.attr("data-thumb")+'"/>':"<a>"+g+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=c.attr("data-thumbcaption");""!=k&&void 0!=k&&(b+='<span class="'+f+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+b+"</li>"),g++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",i,function(b){if(b.preventDefault(),""===j||j===b.type){var c=a(this),e=d.controlNav.index(c);c.hasClass(f+"active")||(d.direction=e>d.currentSlide?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction))}""===j&&(j=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(i,function(b){if(b.preventDefault(),""===j||j===b.type){var c=a(this),e=d.controlNav.index(c);c.hasClass(f+"active")||(d.direction=e>d.currentSlide?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction))}""===j&&(j=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+f+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(f+"active").eq(d.animatingTo).addClass(f+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+f+'direction-nav"><li><a class="'+f+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+f+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+f+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+f+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(i,function(b){b.preventDefault();var c;(""===j||j===b.type)&&(c=d.getTarget(a(this).hasClass(f+"next")?"next":"prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===j&&(j=b.type),p.setToClearWatchedEvent()})},update:function(){var a=f+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+f+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+f+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+f+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+f+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+f+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?f+"pause":f+"play"),d.pausePlay.bind(i,function(b){b.preventDefault(),(""===j||j===b.type)&&(a(this).hasClass(f+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===j&&(j=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(f+"pause").addClass(f+"play").html(d.vars.playText):d.pausePlay.removeClass(f+"play").addClass(f+"pause").html(d.vars.pauseText)}},touch:function(){function a(a){d.animating?a.preventDefault():(window.navigator.msPointerEnabled||1===a.touches.length)&&(d.pause(),q=k?d.h:d.w,s=Number(new Date),u=a.touches[0].pageX,v=a.touches[0].pageY,p=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*q:(d.currentSlide+d.cloneOffset)*q,j=k?v:u,o=k?u:v,b.addEventListener("touchmove",c,!1),b.addEventListener("touchend",e,!1))}function c(a){u=a.touches[0].pageX,v=a.touches[0].pageY,r=k?j-v:j-u,t=k?Math.abs(r)<Math.abs(u-o):Math.abs(r)<Math.abs(v-o);var b=500;(!t||Number(new Date)-s>b)&&(a.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(r/=0===d.currentSlide&&0>r||d.currentSlide===d.last&&r>0?Math.abs(r)/q+2:1),d.setProps(p+r,"setTouch")))}function e(){if(b.removeEventListener("touchmove",c,!1),d.animatingTo===d.currentSlide&&!t&&null!==r){var a=l?-r:r,f=d.getTarget(a>0?"next":"prev");d.canAdvance(f)&&(Number(new Date)-s<550&&Math.abs(a)>50||Math.abs(a)>q/2)?d.flexAnimate(f,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",e,!1),j=null,o=null,r=null,p=null}function f(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),w=0,q=k?d.h:d.w,s=Number(new Date),p=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*q:(d.currentSlide+d.cloneOffset)*q)}function h(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,e=-a.translationY;return w+=k?e:d,r=w,t=k?Math.abs(w)<Math.abs(-d):Math.abs(w)<Math.abs(-e),a.detail===a.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){b._gesture.stop()}):void((!t||Number(new Date)-s>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(r=w/(0===c.currentSlide&&0>w||c.currentSlide===c.last&&w>0?Math.abs(w)/q+2:1)),c.setProps(p+r,"setTouch"))))}}function i(a){a.stopPropagation();var b=a.target._slider;if(b){if(b.animatingTo===b.currentSlide&&!t&&null!==r){var c=l?-r:r,d=b.getTarget(c>0?"next":"prev");b.canAdvance(d)&&(Number(new Date)-s<550&&Math.abs(c)>50||Math.abs(c)>q/2)?b.flexAnimate(d,b.vars.pauseOnAction):n||b.flexAnimate(b.currentSlide,b.vars.pauseOnAction,!0)}j=null,o=null,r=null,p=null,w=0}}var j,o,p,q,r,s,t=!1,u=0,v=0,w=0;g?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",f,!1),b._slider=d,b.addEventListener("MSGestureChange",h,!1),b.addEventListener("MSGestureEnd",i,!1)):b.addEventListener("touchstart",a,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.filter("[id]").add(b.find("[id]")).each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(e),e=setTimeout(function(){j=""},3e3)}},d.flexAnimate=function(b,c,e,g,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||e)&&d.is(":visible")){if(o&&g){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)h?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(t)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var q,r,s,t=k?d.slides.filter(":first").height():d.computedW;m?(q=d.vars.itemMargin,s=(d.itemW+q)*d.move*d.animatingTo,r=s>d.limit&&1!==d.visible?d.limit:s):r=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*t:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*t:l?(d.count-1-b+d.cloneOffset)*t:(b+d.cloneOffset)*t,d.setProps(r,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(t)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(t)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(t)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(h?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):0==d.vars.fadeFirstSlide?d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).css({opacity:1}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,e;"init"===b&&(d.viewport=a('<div class="'+f+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(e=a.makeArray(d.slides).reverse(),d.slides=a(e),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),d.container.append(p.uniqueID(d.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(p.uniqueID(d.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(f+"active-slide").eq(d.currentSlide).addClass(f+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding
},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=[].slice;q='<span class="odometer-value"></span>',n='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+q+"</span></span>",d='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+n+"</span></span>",g='<span class="odometer-formatting-mark"></span>',c="(,ddd).dd",h=/^\(?([^)]*)\)?(?:(.)(d+))?$/,i=30,f=2e3,a=20,j=2,e=.5,k=1e3/i,b=1e3/a,o="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",y=document.createElement("div").style,p=null!=y.transition||null!=y.webkitTransition||null!=y.mozTransition||null!=y.oTransition,w=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,l=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,s=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.children[0]},v=function(a,b){return a.className=a.className.replace(new RegExp("(^| )"+b.split(" ").join("|")+"( |$)","gi")," ")},r=function(a,b){return v(a,b),a.className+=" "+b},z=function(a,b){var c;return null!=document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c)):void 0},u=function(){var a,b;return null!=(a=null!=(b=window.performance)&&"function"==typeof b.now?b.now():void 0)?a:+new Date},x=function(a,b){return null==b&&(b=0),b?(a*=Math.pow(10,b),a+=.5,a=Math.floor(a),a/=Math.pow(10,b)):Math.round(a)},A=function(a){return 0>a?Math.ceil(a):Math.floor(a)},t=function(a){return a-x(a)},C=!1,(B=function(){var a,b,c,d,e;if(!C&&null!=window.jQuery){for(C=!0,d=["html","text"],e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(function(a){var b;return b=window.jQuery.fn[a],window.jQuery.fn[a]=function(a){var c;return null==a||null==(null!=(c=this[0])?c.odometer:void 0)?b.apply(this,arguments):this[0].odometer.update(a)}}(a));return e}})(),setTimeout(B,0),m=function(){function a(b){var c,d,e,g,h,i,l,m,n,o,p=this;if(this.options=b,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;this.el.odometer=this,m=a.options;for(d in m)g=m[d],null==this.options[d]&&(this.options[d]=g);null==(h=this.options).duration&&(h.duration=f),this.MAX_VALUES=this.options.duration/k/j|0,this.resetFormat(),this.value=this.cleanValue(null!=(n=this.options.value)?n:""),this.renderInside(),this.render();try{for(o=["innerHTML","innerText","textContent"],i=0,l=o.length;l>i;i++)e=o[i],null!=this.el[e]&&!function(a){return Object.defineProperty(p.el,a,{get:function(){var b;return"innerHTML"===a?p.inside.outerHTML:null!=(b=p.inside.innerText)?b:p.inside.textContent},set:function(a){return p.update(a)}})}(e)}catch(q){c=q,this.watchForMutations()}}return a.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},a.prototype.watchForMutations=function(){var a,b=this;if(null!=l)try{return null==this.observer&&(this.observer=new l(function(){var a;return a=b.el.innerText,b.renderInside(),b.render(b.value),b.update(a)})),this.watchMutations=!0,this.startWatchingMutations()}catch(c){a=c}},a.prototype.startWatchingMutations=function(){return this.watchMutations?this.observer.observe(this.el,{childList:!0}):void 0},a.prototype.stopWatchingMutations=function(){var a;return null!=(a=this.observer)?a.disconnect():void 0},a.prototype.cleanValue=function(a){var b;return"string"==typeof a&&(a=a.replace(null!=(b=this.format.radix)?b:".","<radix>"),a=a.replace(/[.,]/g,""),a=a.replace("<radix>","."),a=parseFloat(a,10)||0),x(a,this.format.precision)},a.prototype.bindTransitionEnd=function(){var a,b,c,d,e,f,g=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,b=!1,e=o.split(" "),f=[],c=0,d=e.length;d>c;c++)a=e[c],f.push(this.el.addEventListener(a,function(){return b?!0:(b=!0,setTimeout(function(){return g.render(),b=!1,z(g.el,"odometerdone")},0),!0)},!1));return f}},a.prototype.resetFormat=function(){var a,b,d,e,f,g,i,j;if(a=null!=(i=this.options.format)?i:c,a||(a="d"),d=h.exec(a),!d)throw new Error("Odometer: Unparsable digit format");return j=d.slice(1,4),g=j[0],f=j[1],b=j[2],e=(null!=b?b.length:void 0)||0,this.format={repeating:g,radix:f,precision:e}},a.prototype.render=function(a){var b,c,d,e,f,g,h;for(null==a&&(a=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",f=this.options.theme,b=this.el.className.split(" "),e=[],g=0,h=b.length;h>g;g++)c=b[g],c.length&&((d=/^odometer-theme-(.+)$/.exec(c))?f=d[1]:/^odometer(-|$)/.test(c)||e.push(c));return e.push("odometer"),p||e.push("odometer-no-transitions"),e.push(f?"odometer-theme-"+f:"odometer-auto-theme"),this.el.className=e.join(" "),this.ribbons={},this.formatDigits(a),this.startWatchingMutations()},a.prototype.formatDigits=function(a){var b,c,d,e,f,g,h,i,j,k;if(this.digits=[],this.options.formatFunction)for(d=this.options.formatFunction(a),j=d.split("").reverse(),f=0,h=j.length;h>f;f++)c=j[f],c.match(/0-9/)?(b=this.renderDigit(),b.querySelector(".odometer-value").innerHTML=c,this.digits.push(b),this.insertDigit(b)):this.addSpacer(c);else for(e=!this.format.precision||!t(a)||!1,k=a.toString().split("").reverse(),g=0,i=k.length;i>g;g++)b=k[g],"."===b&&(e=!0),this.addDigit(b,e)},a.prototype.update=function(a){var b,c=this;return a=this.cleanValue(a),(b=a-this.value)?(v(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),b>0?r(this.el,"odometer-animating-up"):r(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(a),this.startWatchingMutations(),setTimeout(function(){return c.el.offsetHeight,r(c.el,"odometer-animating")},0),this.value=a):void 0},a.prototype.renderDigit=function(){return s(d)},a.prototype.insertDigit=function(a,b){return null!=b?this.inside.insertBefore(a,b):this.inside.children.length?this.inside.insertBefore(a,this.inside.children[0]):this.inside.appendChild(a)},a.prototype.addSpacer=function(a,b,c){var d;return d=s(g),d.innerHTML=a,c&&r(d,c),this.insertDigit(d,b)},a.prototype.addDigit=function(a,b){var c,d,e,f;if(null==b&&(b=!0),"-"===a)return this.addSpacer(a,null,"odometer-negation-mark");if("."===a)return this.addSpacer(null!=(f=this.format.radix)?f:".",null,"odometer-radix-mark");if(b)for(e=!1;;){if(!this.format.repeating.length){if(e)throw new Error("Bad odometer format without digits");this.resetFormat(),e=!0}if(c=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===c)break;this.addSpacer(c)}return d=this.renderDigit(),d.querySelector(".odometer-value").innerHTML=a,this.digits.push(d),this.insertDigit(d)},a.prototype.animate=function(a){return p&&"count"!==this.options.animation?this.animateSlide(a):this.animateCount(a)},a.prototype.animateCount=function(a){var c,d,e,f,g,h=this;return(d=+a-this.value)?(f=e=u(),c=this.value,(g=function(){var i,j,k;return u()-f>h.options.duration?(h.value=a,h.render(),void z(h.el,"odometerdone")):(i=u()-e,i>b&&(e=u(),k=i/h.options.duration,j=d*k,c+=j,h.render(Math.round(c))),null!=w?w(g):setTimeout(g,b))})()):void 0},a.prototype.getDigitCount=function(){var a,b,c,d,e,f;for(d=1<=arguments.length?G.call(arguments,0):[],a=e=0,f=d.length;f>e;a=++e)c=d[a],d[a]=Math.abs(c);return b=Math.max.apply(Math,d),Math.ceil(Math.log(b+1)/Math.log(10))},a.prototype.getFractionalDigitCount=function(){var a,b,c,d,e,f,g;for(e=1<=arguments.length?G.call(arguments,0):[],b=/^\-?\d*\.(\d*?)0*$/,a=f=0,g=e.length;g>f;a=++f)d=e[a],e[a]=d.toString(),c=b.exec(e[a]),e[a]=null==c?0:c[1].length;return Math.max.apply(Math,e)},a.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},a.prototype.animateSlide=function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x,y,z,B,C,D,E;if(s=this.value,j=this.getFractionalDigitCount(s,a),j&&(a*=Math.pow(10,j),s*=Math.pow(10,j)),d=a-s){for(this.bindTransitionEnd(),f=this.getDigitCount(s,a),g=[],b=0,m=v=0;f>=0?f>v:v>f;m=f>=0?++v:--v){if(t=A(s/Math.pow(10,f-m-1)),i=A(a/Math.pow(10,f-m-1)),h=i-t,Math.abs(h)>this.MAX_VALUES){for(l=[],n=h/(this.MAX_VALUES+this.MAX_VALUES*b*e),c=t;h>0&&i>c||0>h&&c>i;)l.push(Math.round(c)),c+=n;l[l.length-1]!==i&&l.push(i),b++}else l=function(){E=[];for(var a=t;i>=t?i>=a:a>=i;i>=t?a++:a--)E.push(a);return E}.apply(this);for(m=w=0,y=l.length;y>w;m=++w)k=l[m],l[m]=Math.abs(k%10);g.push(l)}for(this.resetDigits(),D=g.reverse(),m=x=0,z=D.length;z>x;m=++x)for(l=D[m],this.digits[m]||this.addDigit(" ",m>=j),null==(u=this.ribbons)[m]&&(u[m]=this.digits[m].querySelector(".odometer-ribbon-inner")),this.ribbons[m].innerHTML="",0>d&&(l=l.reverse()),o=C=0,B=l.length;B>C;o=++C)k=l[o],q=document.createElement("div"),q.className="odometer-value",q.innerHTML=k,this.ribbons[m].appendChild(q),o===l.length-1&&r(q,"odometer-last-value"),0===o&&r(q,"odometer-first-value");return 0>t&&this.addDigit("-"),p=this.inside.querySelector(".odometer-radix-mark"),null!=p&&p.parent.removeChild(p),j?this.addSpacer(this.format.radix,this.digits[j-1],"odometer-radix-mark"):void 0}},a}(),m.options=null!=(E=window.odometerOptions)?E:{},setTimeout(function(){var a,b,c,d,e;if(window.odometerOptions){d=window.odometerOptions,e=[];for(a in d)b=d[a],e.push(null!=(c=m.options)[a]?(c=m.options)[a]:c[a]=b);return e}},0),m.init=function(){var a,b,c,d,e,f;if(null!=document.querySelectorAll){for(b=document.querySelectorAll(m.options.selector||".odometer"),f=[],c=0,d=b.length;d>c;c++)a=b[c],f.push(a.odometer=new m({el:a,value:null!=(e=a.innerText)?e:a.textContent}));return f}},null!=(null!=(F=document.documentElement)?F.doScroll:void 0)&&null!=document.createEventObject?(D=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&m.options.auto!==!1&&m.init(),null!=D?D.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){return m.options.auto!==!1?m.init():void 0},!1),"function"==typeof define&&define.amd?define(["jquery"],function(){return m}):typeof exports===!1?module.exports=m:window.Odometer=m}.call(this),function(){"use strict";var a=this,b=a.Chart,c=function(a){this.canvas=a.canvas,this.ctx=a;this.width=a.canvas.width,this.height=a.canvas.height;return this.aspectRatio=this.width/this.height,d.retinaScale(this),this};c.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,showTooltips:!0,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},c.types={};var d=c.helpers={},e=d.each=function(a,b,c){var d=Array.prototype.slice.call(arguments,3);if(a)if(a.length===+a.length){var e;for(e=0;e<a.length;e++)b.apply(c,[a[e],e].concat(d))}else for(var f in a)b.apply(c,[a[f],f].concat(d))},f=d.clone=function(a){var b={};return e(a,function(c,d){a.hasOwnProperty(d)&&(b[d]=c)}),b},g=d.extend=function(a){return e(Array.prototype.slice.call(arguments,1),function(b){e(b,function(c,d){b.hasOwnProperty(d)&&(a[d]=c)})}),a},h=d.merge=function(){var a=Array.prototype.slice.call(arguments,0);return a.unshift({}),g.apply(null,a)},i=d.indexOf=function(a,b){if(Array.prototype.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},j=d.inherits=function(a){var b=this,c=a&&a.hasOwnProperty("constructor")?a.constructor:function(){return b.apply(this,arguments)},d=function(){this.constructor=c};return d.prototype=b.prototype,c.prototype=new d,c.extend=j,a&&g(c.prototype,a),c.__super__=b.prototype,c},k=d.noop=function(){},l=d.uid=function(){var a=0;return function(){return"chart-"+a++}}(),m=d.warn=function(a){window.console&&"function"==typeof window.console.warn&&console.warn(a)},n=d.amd="function"==typeof a.define&&a.define.amd,o=d.isNumber=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},p=d.max=function(a){return Math.max.apply(Math,a)},q=d.min=function(a){return Math.min.apply(Math,a)},r=(d.cap=function(a,b,c){if(o(b)){if(a>b)return b}else if(o(c)&&c>a)return c;return a},d.getDecimalPlaces=function(a){return a%1!==0&&o(a)?a.toString().split(".")[1].length:0}),s=d.radians=function(a){return a*(Math.PI/180)},t=(d.getAngleFromPoint=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=Math.sqrt(c*c+d*d),f=2*Math.PI+Math.atan2(d,c);return 0>c&&0>d&&(f+=2*Math.PI),{angle:f,distance:e}},d.aliasPixel=function(a){return a%2===0?0:.5}),u=(d.splineCurve=function(a,b,c,d){var e=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)),f=Math.sqrt(Math.pow(c.x-b.x,2)+Math.pow(c.y-b.y,2)),g=d*e/(e+f),h=d*f/(e+f);return{inner:{x:b.x-g*(c.x-a.x),y:b.y-g*(c.y-a.y)},outer:{x:b.x+h*(c.x-a.x),y:b.y+h*(c.y-a.y)}}},d.calculateOrderOfMagnitude=function(a){return Math.floor(Math.log(a)/Math.LN10)}),v=(d.calculateScaleRange=function(a,b,c,d,e){var f=2,g=Math.floor(b/(1.5*c)),h=f>=g,i=p(a),j=q(a);i===j&&(i+=.5,j>=.5&&!d?j-=.5:i+=.5);for(var k=Math.abs(i-j),l=u(k),m=Math.ceil(i/(1*Math.pow(10,l)))*Math.pow(10,l),n=d?0:Math.floor(j/(1*Math.pow(10,l)))*Math.pow(10,l),o=m-n,r=Math.pow(10,l),s=Math.round(o/r);(s>g||g>2*s)&&!h;)if(s>g)r*=2,s=Math.round(o/r),s%1!==0&&(h=!0);else if(e&&l>=0){if(r/2%1!==0)break;r/=2,s=Math.round(o/r)}else r/=2,s=Math.round(o/r);return h&&(s=f,r=o/s),{steps:s,stepValue:r,min:n,max:n+s*r}},d.template=function(a,b){function c(a,b){var c=/\W/.test(a)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):d[a]=d[a];return b?c(b):c}var d={};return c(a,b)}),w=(d.generateLabels=function(a,b,c,d){var f=new Array(b);return labelTemplateString&&e(f,function(b,e){f[e]=v(a,{value:c+d*(e+1)})}),f},d.easingEffects={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*a*(a-2)},easeInOutQuad:function(a){return(a/=.5)<1?.5*a*a:-0.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-0.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0===a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1===a?1:1*(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return a>=1?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return(a/=.5)<1?-0.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:1==(a/=1)?1:(c||(c=.3),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),-(d*Math.pow(2,10*(a-=1))*Math.sin(2*(1*a-b)*Math.PI/c)))},easeOutElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:1==(a/=1)?1:(c||(c=.3),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),d*Math.pow(2,-10*a)*Math.sin(2*(1*a-b)*Math.PI/c)+1)},easeInOutElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:2==(a/=.5)?1:(c||(c=.3*1.5),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),1>a?-.5*d*Math.pow(2,10*(a-=1))*Math.sin(2*(1*a-b)*Math.PI/c):d*Math.pow(2,-10*(a-=1))*Math.sin(2*(1*a-b)*Math.PI/c)*.5+1)},easeInBack:function(a){var b=1.70158;return 1*(a/=1)*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return 1*((a=a/1-1)*a*((b+1)*a+b)+1)},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},easeInBounce:function(a){return 1-w.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?7.5625*a*a:2/2.75>a?1*(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1*(7.5625*(a-=2.25/2.75)*a+.9375):1*(7.5625*(a-=2.625/2.75)*a+.984375)},easeInOutBounce:function(a){return.5>a?.5*w.easeInBounce(2*a):.5*w.easeOutBounce(2*a-1)+.5}}),x=d.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return window.setTimeout(a,1e3/60)}}(),y=(d.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(a){return window.clearTimeout(a,1e3/60)}}(),d.animationLoop=function(a,b,c,d,e,f){var g=0,h=w[c]||w.linear,i=function(){g++;var c=g/b,j=h(c);a.call(f,j,c,g),d.call(f,j,c),b>g?f.animationFrame=x(i):e.apply(f)};x(i)},d.getRelativePosition=function(a){var b,c,d=a.originalEvent||a,e=a.currentTarget||a.srcElement,f=e.getBoundingClientRect();return d.touches?(b=d.touches[0].clientX-f.left,c=d.touches[0].clientY-f.top):(b=d.clientX-f.left,c=d.clientY-f.top),{x:b,y:c}},d.addEvent=function(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}),z=d.removeEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=k},A=(d.bindEvents=function(a,b,c){a.events||(a.events={}),e(b,function(b){a.events[b]=function(){c.apply(a,arguments)},y(a.chart.canvas,b,a.events[b])})},d.unbindEvents=function(a,b){e(b,function(b,c){z(a.chart.canvas,c,b)})}),B=d.getMaximumSize=function(a){var b=a.parentNode;return b.clientWidth},C=d.retinaScale=function(a){var b=a.ctx,c=a.canvas.width,d=a.canvas.height;window.devicePixelRatio&&(b.canvas.style.width=c+"px",b.canvas.style.height=d+"px",b.canvas.height=d*window.devicePixelRatio,b.canvas.width=c*window.devicePixelRatio,b.scale(window.devicePixelRatio,window.devicePixelRatio))},D=d.clear=function(a){a.ctx.clearRect(0,0,a.width,a.height)},E=d.fontString=function(a,b,c){return b+" "+a+"px "+c},F=d.longestText=function(a,b,c){a.font=b;var d=0;return e(c,function(b){var c=a.measureText(b).width;d=c>d?c:d}),d},G=d.drawRoundedRectangle=function(a,b,c,d,e,f){a.beginPath(),a.moveTo(b+f,c),a.lineTo(b+d-f,c),a.quadraticCurveTo(b+d,c,b+d,c+f),a.lineTo(b+d,c+e-f),a.quadraticCurveTo(b+d,c+e,b+d-f,c+e),a.lineTo(b+f,c+e),a.quadraticCurveTo(b,c+e,b,c+e-f),a.lineTo(b,c+f),a.quadraticCurveTo(b,c,b+f,c),a.closePath()};c.instances={},c.Type=function(a,b,d){this.options=b,this.chart=d,this.id=l(),c.instances[this.id]=this,b.responsive&&this.resize(),this.initialize.call(this,a)},g(c.Type.prototype,{initialize:function(){return this},clear:function(){return D(this.chart),this},stop:function(){return d.cancelAnimFrame.call(a,this.animationFrame),this},resize:function(a){this.stop();var b=this.chart.canvas,c=B(this.chart.canvas),d=c/this.chart.aspectRatio;return b.width=this.chart.width=c,b.height=this.chart.height=d,C(this.chart),"function"==typeof a&&a.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:k,render:function(a){return a&&this.reflow(),this.options.animation&&!a?d.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return v(this.options.legendTemplate,this)},destroy:function(){this.clear(),A(this,this.events),delete c.instances[this.id]},showTooltip:function(a,b){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var f=function(a){var b=!1;return a.length!==this.activeElements.length?b=!0:(e(a,function(a,c){a!==this.activeElements[c]&&(b=!0)},this),b)}.call(this,a);if(f||b){if(this.activeElements=a,this.draw(),a.length>0)if(this.datasets&&this.datasets.length>1){for(var g,h,j=this.datasets.length-1;j>=0&&(g=this.datasets[j].points||this.datasets[j].bars||this.datasets[j].segments,h=i(g,a[0]),-1===h);j--);var k=[],l=[],m=function(){var a,b,c,e,f,g=[],i=[],j=[];return d.each(this.datasets,function(b){a=b.points||b.bars||b.segments,a[h]&&g.push(a[h])}),d.each(g,function(a){i.push(a.x),j.push(a.y),k.push(d.template(this.options.multiTooltipTemplate,a)),l.push({fill:a._saved.fillColor||a.fillColor,stroke:a._saved.strokeColor||a.strokeColor})},this),f=q(j),c=p(j),e=q(i),b=p(i),{x:e>this.chart.width/2?e:b,y:(f+c)/2}}.call(this,h);new c.MultiTooltip({x:m.x,y:m.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:k,legendColors:l,legendColorBackground:this.options.multiTooltipKeyBackground,title:a[0].label,chart:this.chart,ctx:this.chart.ctx}).draw()}else e(a,function(a){var b=a.tooltipPosition();new c.Tooltip({x:Math.round(b.x),y:Math.round(b.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:v(this.options.tooltipTemplate,a),chart:this.chart}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),c.Type.extend=function(a){var b=this,d=function(){return b.apply(this,arguments)};if(d.prototype=f(b.prototype),g(d.prototype,a),d.extend=c.Type.extend,a.name||b.prototype.name){var e=a.name||b.prototype.name,i=c.defaults[b.prototype.name]?f(c.defaults[b.prototype.name]):{};c.defaults[e]=g(i,a.defaults),c.types[e]=d,c.prototype[e]=function(a,b){var f=h(c.defaults.global,c.defaults[e],b||{});return new d(a,f,this)}}else m("Name not provided for this chart, so it hasn't been registered");return b},c.Element=function(a){g(this,a),this.initialize.apply(this,arguments),this.save()},g(c.Element.prototype,{initialize:function(){},restore:function(a){return a?e(a,function(a){this[a]=this._saved[a]},this):g(this,this._saved),this},save:function(){return this._saved=f(this),delete this._saved._saved,this},update:function(a){return e(a,function(a,b){this._saved[b]=this[b],this[b]=a},this),this},transition:function(a,b){return e(a,function(a,c){this[c]=(a-this._saved[c])*b+this._saved[c]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}}}),c.Element.extend=j,c.Point=c.Element.extend({display:!0,inRange:function(a,b){var c=this.hitDetectionRadius+this.radius;return Math.pow(a-this.x,2)+Math.pow(b-this.y,2)<Math.pow(c,2)},draw:function(){if(this.display){var a=this.ctx;a.beginPath(),a.arc(this.x,this.y,this.radius,0,2*Math.PI),a.closePath(),a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.fillStyle=this.fillColor,a.fill(),a.stroke()}}}),c.Arc=c.Element.extend({inRange:function(a,b){var c=d.getAngleFromPoint(this,{x:a,y:b}),e=c.angle>=this.startAngle&&c.angle<=this.endAngle,f=c.distance>=this.innerRadius&&c.distance<=this.outerRadius;return e&&f},tooltipPosition:function(){var a=this.startAngle+(this.endAngle-this.startAngle)/2,b=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(a)*b,y:this.y+Math.sin(a)*b}},draw:function(a){var b=this.ctx;b.beginPath(),b.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),b.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),b.closePath(),b.strokeStyle=this.strokeColor,b.lineWidth=this.strokeWidth,b.fillStyle=this.fillColor,b.fill(),b.lineJoin="bevel",this.showStroke&&b.stroke()}}),c.Rectangle=c.Element.extend({draw:function(){var a=this.ctx,b=this.width/2,c=this.x-b,d=this.x+b,e=this.base-(this.base-this.y),f=this.strokeWidth/2;this.showStroke&&(c+=f,d-=f,e+=f),a.beginPath(),a.fillStyle=this.fillColor,a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.moveTo(c,this.base),a.lineTo(c,e),a.lineTo(d,e),a.lineTo(d,this.base),a.fill(),this.showStroke&&a.stroke()},height:function(){return this.base-this.y},inRange:function(a,b){return a>=this.x-this.width/2&&a<=this.x+this.width/2&&b>=this.y&&b<=this.base}}),c.Tooltip=c.Element.extend({draw:function(){var a=this.chart.ctx;a.font=E(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var b=2,c=a.measureText(this.text).width+2*this.xPadding,d=this.fontSize+2*this.yPadding,e=d+this.caretHeight+b;this.x+c/2>this.chart.width?this.xAlign="left":this.x-c/2<0&&(this.xAlign="right"),this.y-e<0&&(this.yAlign="below");var f=this.x-c/2,g=this.y-e;switch(a.fillStyle=this.fillColor,this.yAlign){case"above":a.beginPath(),a.moveTo(this.x,this.y-b),a.lineTo(this.x+this.caretHeight,this.y-(b+this.caretHeight)),a.lineTo(this.x-this.caretHeight,this.y-(b+this.caretHeight)),a.closePath(),a.fill();break;case"below":g=this.y+b+this.caretHeight,a.beginPath(),a.moveTo(this.x,this.y+b),a.lineTo(this.x+this.caretHeight,this.y+b+this.caretHeight),a.lineTo(this.x-this.caretHeight,this.y+b+this.caretHeight),a.closePath(),a.fill()}switch(this.xAlign){case"left":f=this.x-c+(this.cornerRadius+this.caretHeight);break;case"right":f=this.x-(this.cornerRadius+this.caretHeight)}G(a,f,g,c,d,this.cornerRadius),a.fill(),a.fillStyle=this.textColor,a.textAlign="center",a.textBaseline="middle",a.fillText(this.text,f+c/2,g+d/2)}}),c.MultiTooltip=c.Element.extend({initialize:function(){this.font=E(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=E(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var a=this.ctx.measureText(this.title).width,b=F(this.ctx,this.font,this.labels)+this.fontSize+3,c=p([b,a]);this.width=c+2*this.xPadding;var d=this.height/2;this.y-d<0?this.y=d:this.y+d>this.chart.height&&(this.y=this.chart.height-d),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(a){var b=this.y-this.height/2+this.yPadding,c=a-1;return 0===a?b+this.titleFontSize/2:b+(1.5*this.fontSize*c+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){G(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var a=this.ctx;a.fillStyle=this.fillColor,a.fill(),a.closePath(),a.textAlign="left",a.textBaseline="middle",a.fillStyle=this.titleTextColor,a.font=this.titleFont,a.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),a.font=this.font,d.each(this.labels,function(b,c){a.fillStyle=this.textColor,a.fillText(b,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(c+1)),a.fillStyle=this.legendColorBackground,a.fillRect(this.x+this.xPadding,this.getLineHeight(c+1)-this.fontSize/2,this.fontSize,this.fontSize),a.fillStyle=this.legendColors[c].fill,a.fillRect(this.x+this.xPadding,this.getLineHeight(c+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}),c.Scale=c.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var a=r(this.stepValue),b=0;b<=this.steps;b++)this.yLabels.push(v(this.templateString,{value:(this.min+b*this.stepValue).toFixed(a)}));this.yLabelWidth=this.display&&this.showLabels?F(this.ctx,this.font,this.yLabels):0},addXLabel:function(a){this.xLabels.push(a),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var a,b=this.endPoint-this.startPoint;for(this.calculateYRange(b),this.buildYLabels(),this.calculateXLabelRotation();b>this.endPoint-this.startPoint;)b=this.endPoint-this.startPoint,a=this.yLabelWidth,this.calculateYRange(b),this.buildYLabels(),a<this.yLabelWidth&&this.calculateXLabelRotation()
},calculateXLabelRotation:function(){this.ctx.font=this.font;var a,b,c=this.ctx.measureText(this.xLabels[0]).width,d=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=d/2+3,this.xScalePaddingLeft=c/2>this.yLabelWidth+10?c/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var e,f=F(this.ctx,this.font,this.xLabels);this.xLabelWidth=f;for(var g=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>g&&0===this.xLabelRotation||this.xLabelWidth>g&&this.xLabelRotation<=90&&this.xLabelRotation>0;)e=Math.cos(s(this.xLabelRotation)),a=e*c,b=e*d,a+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=a+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=e*f;this.xLabelRotation>0&&(this.endPoint-=Math.sin(s(this.xLabelRotation))*f+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:k,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(a){var b=this.drawingArea()/(this.min-this.max);return this.endPoint-b*(a-this.min)},calculateX:function(a){var b=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),c=b/(this.valuesCount-(this.offsetGridLines?0:1)),d=c*a+this.xScalePaddingLeft;return this.offsetGridLines&&(d+=c/2),Math.round(d)},update:function(a){d.extend(this,a),this.fit()},draw:function(){var a=this.ctx,b=(this.endPoint-this.startPoint)/this.steps,c=Math.round(this.xScalePaddingLeft);this.display&&(a.fillStyle=this.textColor,a.font=this.font,e(this.yLabels,function(e,f){var g=this.endPoint-b*f,h=Math.round(g);a.textAlign="right",a.textBaseline="middle",this.showLabels&&a.fillText(e,c-10,g),a.beginPath(),f>0?(a.lineWidth=this.gridLineWidth,a.strokeStyle=this.gridLineColor):(a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor),h+=d.aliasPixel(a.lineWidth),a.moveTo(c,h),a.lineTo(this.width,h),a.stroke(),a.closePath(),a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor,a.beginPath(),a.moveTo(c-5,h),a.lineTo(c,h),a.stroke(),a.closePath()},this),e(this.xLabels,function(b,c){var d=this.calculateX(c)+t(this.lineWidth),e=this.calculateX(c-(this.offsetGridLines?.5:0))+t(this.lineWidth),f=this.xLabelRotation>0;a.beginPath(),c>0?(a.lineWidth=this.gridLineWidth,a.strokeStyle=this.gridLineColor):(a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor),a.moveTo(e,this.endPoint),a.lineTo(e,this.startPoint-3),a.stroke(),a.closePath(),a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor,a.beginPath(),a.moveTo(e,this.endPoint),a.lineTo(e,this.endPoint+5),a.stroke(),a.closePath(),a.save(),a.translate(d,f?this.endPoint+12:this.endPoint+8),a.rotate(-1*s(this.xLabelRotation)),a.font=this.font,a.textAlign=f?"right":"center",a.textBaseline=f?"middle":"top",a.fillText(b,0,0),a.restore()},this))}}),c.RadialScale=c.Element.extend({initialize:function(){this.size=q([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(a){var b=this.drawingArea/(this.max-this.min);return(a-this.min)*b},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var a=r(this.stepValue),b=0;b<=this.steps;b++)this.yLabels.push(v(this.templateString,{value:(this.min+b*this.stepValue).toFixed(a)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var a,b,c,d,e,f,g,h,i,j,k,l,m=q([this.height/2-this.pointLabelFontSize-5,this.width/2]),n=this.width,p=0;for(this.ctx.font=E(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),b=0;b<this.valuesCount;b++)a=this.getPointPosition(b,m),c=this.ctx.measureText(v(this.templateString,{value:this.labels[b]})).width+5,0===b||b===this.valuesCount/2?(d=c/2,a.x+d>n&&(n=a.x+d,e=b),a.x-d<p&&(p=a.x-d,g=b)):b<this.valuesCount/2?a.x+c>n&&(n=a.x+c,e=b):b>this.valuesCount/2&&a.x-c<p&&(p=a.x-c,g=b);i=p,j=Math.ceil(n-this.width),f=this.getIndexAngle(e),h=this.getIndexAngle(g),k=j/Math.sin(f+Math.PI/2),l=i/Math.sin(h+Math.PI/2),k=o(k)?k:0,l=o(l)?l:0,this.drawingArea=m-(l+k)/2,this.setCenterPoint(l,k)},setCenterPoint:function(a,b){var c=this.width-b-this.drawingArea,d=a+this.drawingArea;this.xCenter=(d+c)/2,this.yCenter=this.height/2},getIndexAngle:function(a){var b=2*Math.PI/this.valuesCount;return a*b-Math.PI/2},getPointPosition:function(a,b){var c=this.getIndexAngle(a);return{x:Math.cos(c)*b+this.xCenter,y:Math.sin(c)*b+this.yCenter}},draw:function(){if(this.display){var a=this.ctx;if(e(this.yLabels,function(b,c){if(c>0){var d,e=c*(this.drawingArea/this.steps),f=this.yCenter-e;if(this.lineWidth>0)if(a.strokeStyle=this.lineColor,a.lineWidth=this.lineWidth,this.lineArc)a.beginPath(),a.arc(this.xCenter,this.yCenter,e,0,2*Math.PI),a.closePath(),a.stroke();else{a.beginPath();for(var g=0;g<this.valuesCount;g++)d=this.getPointPosition(g,this.calculateCenterOffset(this.min+c*this.stepValue)),0===g?a.moveTo(d.x,d.y):a.lineTo(d.x,d.y);a.closePath(),a.stroke()}if(this.showLabels){if(a.font=E(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=a.measureText(b).width;a.fillStyle=this.backdropColor,a.fillRect(this.xCenter-h/2-this.backdropPaddingX,f-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}a.textAlign="center",a.textBaseline="middle",a.fillStyle=this.fontColor,a.fillText(b,this.xCenter,f)}}},this),!this.lineArc){a.lineWidth=this.angleLineWidth,a.strokeStyle=this.angleLineColor;for(var b=this.valuesCount-1;b>=0;b--){if(this.angleLineWidth>0){var c=this.getPointPosition(b,this.calculateCenterOffset(this.max));a.beginPath(),a.moveTo(this.xCenter,this.yCenter),a.lineTo(c.x,c.y),a.stroke(),a.closePath()}var d=this.getPointPosition(b,this.calculateCenterOffset(this.max)+5);a.font=E(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),a.fillStyle=this.pointLabelFontColor;var f=this.labels.length,g=this.labels.length/2,h=g/2,i=h>b||b>f-h,j=b===h||b===f-h;a.textAlign=0===b?"center":b===g?"center":g>b?"left":"right",a.textBaseline=j?"middle":i?"bottom":"top",a.fillText(this.labels[b],d.x,d.y)}}}}}),d.addEvent(window,"resize",function(){var a;return function(){clearTimeout(a),a=setTimeout(function(){e(c.instances,function(a){a.options.responsive&&a.resize(a.render,!0)})},50)}}()),n?define(function(){return c}):"object"==typeof module&&module.exports&&(module.exports=c),a.Chart=c,c.noConflict=function(){return a.Chart=b,c}}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers,d={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};b.Type.extend({name:"Bar",defaults:d,initialize:function(a){var d=this.options;this.ScaleClass=b.Scale.extend({offsetGridLines:!0,calculateBarX:function(a,b,c){var e=this.calculateBaseWidth(),f=this.calculateX(c)-e/2,g=this.calculateBarWidth(a);return f+g*b+b*d.barDatasetSpacing+g/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*d.barValueSpacing},calculateBarWidth:function(a){var b=this.calculateBaseWidth()-(a-1)*d.barDatasetSpacing;return b/a}}),this.datasets=[],this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getBarsAtEvent(a):[];this.eachBars(function(a){a.restore(["fillColor","strokeColor"])}),c.each(b,function(a){a.fillColor=a.highlightFill,a.strokeColor=a.highlightStroke}),this.showTooltip(b)}),this.BarClass=b.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),c.each(a.datasets,function(b){var d={label:b.label||null,fillColor:b.fillColor,strokeColor:b.strokeColor,bars:[]};this.datasets.push(d),c.each(b.data,function(e,f){c.isNumber(e)&&d.bars.push(new this.BarClass({value:e,label:a.labels[f],datasetLabel:b.label,strokeColor:b.strokeColor,fillColor:b.fillColor,highlightFill:b.highlightFill||b.fillColor,highlightStroke:b.highlightStroke||b.strokeColor}))},this)},this),this.buildScale(a.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(a,b,d){c.extend(a,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,d,b),y:this.scale.endPoint}),a.save()},this),this.render()},update:function(){this.scale.update(),c.each(this.activeElements,function(a){a.restore(["fillColor","strokeColor"])}),this.eachBars(function(a){a.save()}),this.render()},eachBars:function(a){c.each(this.datasets,function(b,d){c.each(b.bars,a,this,d)},this)},getBarsAtEvent:function(a){for(var b,d=[],e=c.getRelativePosition(a),f=function(a){d.push(a.bars[b])},g=0;g<this.datasets.length;g++)for(b=0;b<this.datasets[g].bars.length;b++)if(this.datasets[g].bars[b].inRange(e.x,e.y))return c.each(this.datasets,f),d;return d},buildScale:function(a){var b=this,d=function(){var a=[];return b.eachBars(function(b){a.push(b.value)}),a},e={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:a.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(a){var b=c.calculateScaleRange(d(),a,this.fontSize,this.beginAtZero,this.integersOnly);c.extend(this,b)},xLabels:a,font:c.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&c.extend(e,{calculateYRange:c.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(e)},addData:function(a,b){c.each(a,function(a,d){c.isNumber(a)&&this.datasets[d].bars.push(new this.BarClass({value:a,label:b,x:this.scale.calculateBarX(this.datasets.length,d,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[d].strokeColor,fillColor:this.datasets[d].fillColor}))},this),this.scale.addXLabel(b),this.update()},removeData:function(){this.scale.removeXLabel(),c.each(this.datasets,function(a){a.bars.shift()},this),this.update()},reflow:function(){c.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var a=c.extend({height:this.chart.height,width:this.chart.width});this.scale.update(a)},draw:function(a){var b=a||1;this.clear();this.chart.ctx;this.scale.draw(b),c.each(this.datasets,function(a,d){c.each(a.bars,function(a,c){a.base=this.scale.endPoint,a.transition({x:this.scale.calculateBarX(this.datasets.length,d,c),y:this.scale.calculateY(a.value),width:this.scale.calculateBarWidth(this.datasets.length)},b).draw()},this)},this)}})}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers,d={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};b.Type.extend({name:"Doughnut",defaults:d,initialize:function(a){this.segments=[],this.outerRadius=(c.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=b.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getSegmentsAtEvent(a):[];c.each(this.segments,function(a){a.restore(["fillColor"])}),c.each(b,function(a){a.fillColor=a.highlightColor}),this.showTooltip(b)}),this.calculateTotal(a),c.each(a,function(a,b){this.addData(a,b,!0)},this),this.render()},getSegmentsAtEvent:function(a){var b=[],d=c.getRelativePosition(a);return c.each(this.segments,function(a){a.inRange(d.x,d.y)&&b.push(a)},this),b},addData:function(a,b,c){var d=b||this.segments.length;this.segments.splice(d,0,new this.SegmentArc({value:a.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:a.color,highlightColor:a.highlight||a.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(a.value),label:a.label})),c||(this.reflow(),this.update())},calculateCircumference:function(a){return 2*Math.PI*(a/this.total)},calculateTotal:function(a){this.total=0,c.each(a,function(a){this.total+=a.value},this)},update:function(){this.calculateTotal(this.segments),c.each(this.activeElements,function(a){a.restore(["fillColor"])}),c.each(this.segments,function(a){a.save()}),this.render()},removeData:function(a){var b=c.isNumber(a)?a:this.segments.length-1;this.segments.splice(b,1),this.reflow(),this.update()},reflow:function(){c.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(c.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,c.each(this.segments,function(a){a.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(a){var b=a?a:1;this.clear(),c.each(this.segments,function(a,c){a.transition({circumference:this.calculateCircumference(a.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},b),a.endAngle=a.startAngle+a.circumference,a.draw(),0===c&&(a.startAngle=1.5*Math.PI),c<this.segments.length-1&&(this.segments[c+1].startAngle=a.endAngle)},this)}}),b.types.Doughnut.extend({name:"Pie",defaults:c.merge(d,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers,d={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};b.Type.extend({name:"Line",defaults:d,initialize:function(a){this.PointClass=b.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(a){return Math.pow(a-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getPointsAtEvent(a):[];this.eachPoints(function(a){a.restore(["fillColor","strokeColor"])}),c.each(b,function(a){a.fillColor=a.highlightFill,a.strokeColor=a.highlightStroke}),this.showTooltip(b)}),c.each(a.datasets,function(b){var d={label:b.label||null,fillColor:b.fillColor,strokeColor:b.strokeColor,pointColor:b.pointColor,pointStrokeColor:b.pointStrokeColor,points:[]};this.datasets.push(d),c.each(b.data,function(e,f){c.isNumber(e)&&d.points.push(new this.PointClass({value:e,label:a.labels[f],datasetLabel:b.label,strokeColor:b.pointStrokeColor,fillColor:b.pointColor,highlightFill:b.pointHighlightFill||b.pointColor,highlightStroke:b.pointHighlightStroke||b.pointStrokeColor}))},this),this.buildScale(a.labels),this.eachPoints(function(a,b){c.extend(a,{x:this.scale.calculateX(b),y:this.scale.endPoint}),a.save()},this)},this),this.render()},update:function(){this.scale.update(),c.each(this.activeElements,function(a){a.restore(["fillColor","strokeColor"])}),this.eachPoints(function(a){a.save()}),this.render()},eachPoints:function(a){c.each(this.datasets,function(b){c.each(b.points,a,this)},this)},getPointsAtEvent:function(a){var b=[],d=c.getRelativePosition(a);return c.each(this.datasets,function(a){c.each(a.points,function(a){a.inRange(d.x,d.y)&&b.push(a)})},this),b},buildScale:function(a){var d=this,e=function(){var a=[];return d.eachPoints(function(b){a.push(b.value)}),a},f={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:a.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(a){var b=c.calculateScaleRange(e(),a,this.fontSize,this.beginAtZero,this.integersOnly);c.extend(this,b)},xLabels:a,font:c.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&c.extend(f,{calculateYRange:c.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new b.Scale(f)},addData:function(a,b){c.each(a,function(a,d){c.isNumber(a)&&this.datasets[d].points.push(new this.PointClass({value:a,label:b,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[d].pointStrokeColor,fillColor:this.datasets[d].pointColor}))},this),this.scale.addXLabel(b),this.update()},removeData:function(){this.scale.removeXLabel(),c.each(this.datasets,function(a){a.points.shift()},this),this.update()},reflow:function(){var a=c.extend({height:this.chart.height,width:this.chart.width});this.scale.update(a)},draw:function(a){var b=a||1;this.clear();var d=this.chart.ctx;this.scale.draw(b),c.each(this.datasets,function(a){c.each(a.points,function(a,c){a.transition({y:this.scale.calculateY(a.value),x:this.scale.calculateX(c)},b)},this),this.options.bezierCurve&&c.each(a.points,function(b,d){b.controlPoints=0===d?c.splineCurve(b,b,a.points[d+1],0):d>=a.points.length-1?c.splineCurve(a.points[d-1],b,b,0):c.splineCurve(a.points[d-1],b,a.points[d+1],this.options.bezierCurveTension)},this),d.lineWidth=this.options.datasetStrokeWidth,d.strokeStyle=a.strokeColor,d.beginPath(),c.each(a.points,function(b,c){c>0?this.options.bezierCurve?d.bezierCurveTo(a.points[c-1].controlPoints.outer.x,a.points[c-1].controlPoints.outer.y,b.controlPoints.inner.x,b.controlPoints.inner.y,b.x,b.y):d.lineTo(b.x,b.y):d.moveTo(b.x,b.y)},this),d.stroke(),this.options.datasetFill&&(d.lineTo(a.points[a.points.length-1].x,this.scale.endPoint),d.lineTo(this.scale.calculateX(0),this.scale.endPoint),d.fillStyle=a.fillColor,d.closePath(),d.fill()),c.each(a.points,function(a){a.draw()})},this)}})}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers,d={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};b.Type.extend({name:"PolarArea",defaults:d,initialize:function(a){this.segments=[],this.SegmentArc=b.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new b.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:a.length}),this.updateScaleRange(a),this.scale.update(),c.each(a,function(a,b){this.addData(a,b,!0)},this),this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getSegmentsAtEvent(a):[];c.each(this.segments,function(a){a.restore(["fillColor"])}),c.each(b,function(a){a.fillColor=a.highlightColor}),this.showTooltip(b)}),this.render()},getSegmentsAtEvent:function(a){var b=[],d=c.getRelativePosition(a);return c.each(this.segments,function(a){a.inRange(d.x,d.y)&&b.push(a)},this),b},addData:function(a,b,c){var d=b||this.segments.length;this.segments.splice(d,0,new this.SegmentArc({fillColor:a.color,highlightColor:a.highlight||a.color,label:a.label,value:a.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(a.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),c||(this.reflow(),this.update())},removeData:function(a){var b=c.isNumber(a)?a:this.segments.length-1;this.segments.splice(b,1),this.reflow(),this.update()},calculateTotal:function(a){this.total=0,c.each(a,function(a){this.total+=a.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(a){var b=[];c.each(a,function(a){b.push(a.value)});var d=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:c.calculateScaleRange(b,c.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);c.extend(this.scale,d,{size:c.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),c.each(this.segments,function(a){a.save()}),this.render()},reflow:function(){c.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),c.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),c.each(this.segments,function(a){a.update({outerRadius:this.scale.calculateCenterOffset(a.value)})},this)},draw:function(a){var b=a||1;this.clear(),c.each(this.segments,function(a,c){a.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(a.value)},b),a.endAngle=a.startAngle+a.circumference,0===c&&(a.startAngle=1.5*Math.PI),c<this.segments.length-1&&(this.segments[c+1].startAngle=a.endAngle),a.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers;b.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(a){this.PointClass=b.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(a),this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getPointsAtEvent(a):[];this.eachPoints(function(a){a.restore(["fillColor","strokeColor"])}),c.each(b,function(a){a.fillColor=a.highlightFill,a.strokeColor=a.highlightStroke}),this.showTooltip(b)}),c.each(a.datasets,function(b){var d={label:b.label||null,fillColor:b.fillColor,strokeColor:b.strokeColor,pointColor:b.pointColor,pointStrokeColor:b.pointStrokeColor,points:[]};this.datasets.push(d),c.each(b.data,function(e,f){if(c.isNumber(e)){var g;this.scale.animation||(g=this.scale.getPointPosition(f,this.scale.calculateCenterOffset(e))),d.points.push(new this.PointClass({value:e,label:a.labels[f],datasetLabel:b.label,x:this.options.animation?this.scale.xCenter:g.x,y:this.options.animation?this.scale.yCenter:g.y,strokeColor:b.pointStrokeColor,fillColor:b.pointColor,highlightFill:b.pointHighlightFill||b.pointColor,highlightStroke:b.pointHighlightStroke||b.pointStrokeColor}))}},this)},this),this.render()},eachPoints:function(a){c.each(this.datasets,function(b){c.each(b.points,a,this)},this)},getPointsAtEvent:function(a){var b=c.getRelativePosition(a),d=c.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},b),e=2*Math.PI/this.scale.valuesCount,f=Math.round((d.angle-1.5*Math.PI)/e),g=[];return(f>=this.scale.valuesCount||0>f)&&(f=0),d.distance<=this.scale.drawingArea&&c.each(this.datasets,function(a){g.push(a.points[f])}),g},buildScale:function(a){this.scale=new b.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:a.labels,valuesCount:a.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(a.datasets),this.scale.buildYLabels()},updateScaleRange:function(a){var b=function(){var b=[];return c.each(a,function(a){a.data?b=b.concat(a.data):c.each(a.points,function(a){b.push(a.value)})}),b}(),d=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:c.calculateScaleRange(b,c.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);c.extend(this.scale,d)},addData:function(a,b){this.scale.valuesCount++,c.each(a,function(a,d){if(c.isNumber(a)){var e=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(a));this.datasets[d].points.push(new this.PointClass({value:a,label:b,x:e.x,y:e.y,strokeColor:this.datasets[d].pointStrokeColor,fillColor:this.datasets[d].pointColor}))}},this),this.scale.labels.push(b),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),c.each(this.datasets,function(a){a.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(a){a.save()}),this.reflow(),this.render()},reflow:function(){c.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:c.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(a){var b=a||1,d=this.chart.ctx;this.clear(),this.scale.draw(),c.each(this.datasets,function(a){c.each(a.points,function(a,c){a.transition(this.scale.getPointPosition(c,this.scale.calculateCenterOffset(a.value)),b)},this),d.lineWidth=this.options.datasetStrokeWidth,d.strokeStyle=a.strokeColor,d.beginPath(),c.each(a.points,function(a,b){0===b?d.moveTo(a.x,a.y):d.lineTo(a.x,a.y)},this),d.closePath(),d.stroke(),d.fillStyle=a.fillColor,d.fill(),c.each(a.points,function(a){a.draw()})},this)}})}.call(this),function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";return h?(f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1):void 0}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,1>6*c?a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a("<p>")[0],o=a.each;
n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){return null!=g[b.idx]?c=g[b.idx]===f[b.idx]:void 0})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},f=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,S(),gb=this,c=c||{},lb=c.constants||{},c.easing)for(var d in c.easing)V[d]=c.easing[d];sb=c.edgeStrategy||"set",jb={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},kb=c.forceHeight!==!1,kb&&(Jb=c.scale||1),mb=c.mobileDeceleration||y,ob=c.smoothScrolling!==!1,pb=c.smoothScrollingDuration||z,qb={targetTop:gb.getScrollTop()},Rb=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Rb?(ib=b.getElementById("skrollr-body"),ib&&fb(),W(),Db(e,[s,v],[t])):Db(e,[s,u],[t]),gb.refresh(),vb(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Ob||a!==Nb)&&(Ob=b,Nb=a,Pb=!0)});var g=T();return function h(){Z(),ub=g(h)}(),gb}var e,f,g={get:function(){return gb},init:function(a){return gb||new d(a)},VERSION:"0.6.26"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z=200,A="start",B="end",C="center",D="bottom",E="___skrollable_id",F=/^(?:input|textarea|button|select)$/i,G=/^\s+|\s+$/g,H=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,I=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,J=/^(@?[a-z\-]+)\[(\w+)\]$/,K=/-([a-z0-9_])/g,L=function(a,b){return b.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,N=/\{\?\}/g,O=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,P=/[a-z\-]+-gradient/g,Q="",R="",S=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(Q=c.match(a)||+c==c&&b[c].match(a))break;if(!Q)return void(Q=R="");Q=Q[0],"-"===Q.slice(0,1)?(R=Q,Q={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[Q]):R="-"+Q.toLowerCase()+"-"}},T=function(){var b=a.requestAnimationFrame||a[Q.toLowerCase()+"RequestAnimationFrame"],c=Gb();return(Rb||!b)&&(b=function(b){var d=Gb()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Gb(),b()},e)}),b},U=function(){var b=a.cancelAnimationFrame||a[Q.toLowerCase()+"CancelAnimationFrame"];return(Rb||!b)&&(b=function(b){return a.clearTimeout(b)}),b},V={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,hb=[],Qb=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=ob,k=sb,l=!1;if(f&&E in g&&delete g[E],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(H);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(K,L)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==A&&u!==B?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===B?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Jb))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&E in g?(y=g[E],w=hb[y].styleAttr,x=hb[y].classAttr):(y=g[E]=Qb++,w=g.style.cssText,x=Cb(g)),hb[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Db(g,[o],[])}}}for(zb(),d=0,e=a.length;e>d;d++){var z=hb[a[d][E]];z!==c&&($(z),ab(z))}return gb},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===D?g-=d:b===C&&(g-=d/2),c===D?g+=h:c===C&&(g+=h/2),g+=gb.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Gb(),e=gb.getScrollTop();return nb={startTop:e,topDiff:a-e,targetTop:a,duration:b.duration||x,startTime:d,endTime:d+(b.duration||x),easing:V[b.easing||w],done:b.done},nb.topDiff||(nb.done&&nb.done.call(gb,!1),nb=c),gb},d.prototype.stopAnimateTo=function(){nb&&nb.done&&nb.done.call(gb,!0),nb=c},d.prototype.isAnimatingTo=function(){return!!nb},d.prototype.isMobile=function(){return Rb},d.prototype.setScrollTop=function(b,c){return rb=c===!0,Rb?Sb=i.min(i.max(b,0),Ib):a.scrollTo(0,b),gb},d.prototype.getScrollTop=function(){return Rb?Sb:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ib},d.prototype.on=function(a,b){return jb[a]=b,gb},d.prototype.off=function(a){return delete jb[a],gb},d.prototype.destroy=function(){var a=U();a(ub),xb(),Db(e,[t],[s,u,v]);for(var b=0,d=hb.length;d>b;b++)eb(hb[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ib&&g.setStyle(ib,"transform","none"),gb=c,ib=c,jb=c,kb=c,Ib=0,Jb=1,lb=c,mb=c,Kb="down",Lb=-1,Nb=0,Ob=0,Pb=!1,nb=c,ob=c,pb=c,qb=c,rb=c,Qb=0,sb=c,Rb=!1,Sb=0,tb=c};var W=function(){var d,g,h,j,o,p,q,r,s,t,u,v;vb(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,F.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),gb.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:F.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,gb.setScrollTop(Sb-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!F.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/mb),B=z*A+.5*mb*A*A,C=gb.getScrollTop()-B,D=0;C>Ib?(D=(Ib-C)/B,C=Ib):0>C&&(D=-C/B,C=0),A*=1-D,gb.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},X=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ab();for(j=0,k=hb.length;k>j;j++)for(a=hb[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(eb(b),h.frame=gb.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,eb(b,!0)),h.frame+=m,kb&&!h.isEnd&&h.frame>Ib&&(Ib=h.frame);for(Ib=i.max(Ib,Bb()),j=0,k=hb.length;k>j;j++){for(a=hb[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ib-h.offset+m);a.keyFrames.sort(Hb)}},Y=function(a,b){for(var c=0,d=hb.length;d>c;c++){var e,f,i=hb[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Db(j,[p],[r,q]),w&&x>-1&&(yb(j,n.eventType,Kb),i.lastFrameIndex=-1)):(Db(j,[r],[p,q]),w&&m>x&&(yb(j,s.eventType,Kb),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":eb(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=db(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Db(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=cb(A.props[e].value,B.props[e].value,C),f=db(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===Kb?yb(j,A.eventType,Kb):yb(j,B.eventType,Kb),i.lastFrameIndex=z);break}}},Z=function(){Pb&&(Pb=!1,zb());var a,b,d=gb.getScrollTop(),e=Gb();if(nb)e>=nb.endTime?(d=nb.targetTop,a=nb.done,nb=c):(b=nb.easing((e-nb.startTime)/nb.duration),d=nb.startTop+b*nb.topDiff|0),gb.setScrollTop(d,!0);else if(!rb){var f=qb.targetTop-d;f&&(qb={startTop:Lb,topDiff:d-Lb,targetTop:d,startTime:Mb,endTime:Mb+pb}),e<=qb.endTime&&(b=V.sqrt((e-qb.startTime)/pb),d=qb.startTop+b*qb.topDiff|0)}if(Rb&&ib&&g.setStyle(ib,"transform","translate(0, "+-Sb+"px) "+tb),rb||Lb!==d){Kb=d>Lb?"down":Lb>d?"up":Kb,rb=!1;var h={curTop:d,lastTop:Lb,maxTop:Ib,direction:Kb},i=jb.beforerender&&jb.beforerender.call(gb,h);i!==!1&&(Y(d,gb.getScrollTop()),Lb=d,jb.render&&jb.render.call(gb,h)),a&&a.call(gb,!1)}Mb=e},$=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=I.exec(h.props));)f=g[1],e=g[2],d=f.match(J),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?_(e):[e.slice(1)],i[f]={value:e,easing:V[d]};h.props=i}},_=function(a){var b=[];return O.lastIndex=0,a=a.replace(O,function(a){return a.replace(M,function(a){return a/255*100+"%"})}),R&&(P.lastIndex=0,a=a.replace(P,function(a){return R+a})),a=a.replace(M,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ab=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)bb(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)bb(a.keyFrames[b],d)},bb=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},cb=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},db=function(a){var b=1;return N.lastIndex=0,a[0].replace(N,function(){return a[b++]})},eb=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=hb[d[E]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Db(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Cb(d),d.style.cssText=c.styleAttr,Db(d,c.classAttr)))},fb=function(){tb="translateZ(0)",g.setStyle(ib,"transform",tb);var a=j(ib),b=a.getPropertyValue("transform"),c=a.getPropertyValue(R+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(tb="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(K,L).replace("-",""),"zIndex"===b)d[b]=isNaN(c)?c:""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{Q&&(d[Q+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Tb.push({element:b,name:f,listener:d})},wb=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},xb=function(){for(var a,b=0,c=Tb.length;c>b;b++)a=Tb[b],wb(a.element,a.name,a.listener);Tb=[]},yb=function(a,b,c){jb.keyframe&&jb.keyframe.call(gb,a,b,c)},zb=function(){var a=gb.getScrollTop();Ib=0,kb&&!Rb&&(f.style.height=""),X(),kb&&!Rb&&(f.style.height=Ib+e.clientHeight+"px"),Rb?gb.setScrollTop(i.min(gb.getScrollTop(),Ib)):gb.setScrollTop(a,!0),rb=!0},Ab=function(){var a,b,c=e.clientHeight,d={};for(a in lb)b=lb[a],"function"==typeof b?b=b.call(gb):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Bb=function(){var a=ib&&ib.offsetHeight||0,b=i.max(a,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight);return b-e.clientHeight},Cb=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Db=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Fb(g).replace(Fb(e[h])," ");g=Eb(g);for(var j=0,k=d.length;k>j;j++)-1===Fb(g).indexOf(Fb(d[j]))&&(g+=" "+d[j]);b[f]=Eb(g)},Eb=function(a){return a.replace(G,"")},Fb=function(a){return" "+a+" "},Gb=Date.now||function(){return+new Date},Hb=function(a,b){return a.frame-b.frame},Ib=0,Jb=1,Kb="down",Lb=-1,Mb=Gb(),Nb=0,Ob=0,Pb=!1,Qb=0,Rb=!1,Sb=0,Tb=[];"function"==typeof define&&define.amd?define("skrollr",function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);;(function(){
    'use strict';
    /*
     * angular-ui-bootstrap
     * http://angular-ui.github.io/bootstrap/

     * Version: 0.10.0 - 2014-01-13
     * License: MIT
     */
    angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
    angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/popup.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
    angular.module('ui.bootstrap.transition', [])

    /**
     * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
     * @param  {DOMElement} element  The DOMElement that will be animated.
     * @param  {string|object|function} trigger  The thing that will cause the transition to start:
     *   - As a string, it represents the css class to be added to the element.
     *   - As an object, it represents a hash of style attributes to be applied to the element.
     *   - As a function, it represents a function to be called that will cause the transition to occur.
     * @return {Promise}  A promise that is resolved when the transition finishes.
     */
    .factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {

      var $transition = function(element, trigger, options) {
        options = options || {};
        var deferred = $q.defer();
        var endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

        var transitionEndHandler = function(event) {
          $rootScope.$apply(function() {
            element.unbind(endEventName, transitionEndHandler);
            deferred.resolve(element);
          });
        };

        if (endEventName) {
          element.bind(endEventName, transitionEndHandler);
        }

        // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
        $timeout(function() {
          if ( angular.isString(trigger) ) {
            element.addClass(trigger);
          } else if ( angular.isFunction(trigger) ) {
            trigger(element);
          } else if ( angular.isObject(trigger) ) {
            element.css(trigger);
          }
          //If browser does not support transitions, instantly resolve
          if ( !endEventName ) {
            deferred.resolve(element);
          }
        });

        // Add our custom cancel function to the promise that is returned
        // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
        // i.e. it will therefore never raise a transitionEnd event for that transition
        deferred.promise.cancel = function() {
          if ( endEventName ) {
            element.unbind(endEventName, transitionEndHandler);
          }
          deferred.reject('Transition cancelled');
        };

        return deferred.promise;
      };

      // Work out the name of the transitionEnd event
      var transElement = document.createElement('trans');
      var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
      var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };
      function findEndEventName(endEventNames) {
        for (var name in endEventNames){
          if (transElement.style[name] !== undefined) {
            return endEventNames[name];
          }
        }
      }
      $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
      $transition.animationEndEventName = findEndEventName(animationEndEventNames);
      return $transition;
    }]);

    angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition'])

      .directive('collapse', ['$transition', function ($transition, $timeout) {

        return {
          link: function (scope, element, attrs) {

            var initialAnimSkip = true;
            var currentTransition;

            function doTransition(change) {
              var newTransition = $transition(element, change);
              if (currentTransition) {
                currentTransition.cancel();
              }
              currentTransition = newTransition;
              newTransition.then(newTransitionDone, newTransitionDone);
              return newTransition;

              function newTransitionDone() {
                // Make sure it's this transition, otherwise, leave it alone.
                if (currentTransition === newTransition) {
                  currentTransition = undefined;
                }
              }
            }

            function expand() {
              if (initialAnimSkip) {
                initialAnimSkip = false;
                expandDone();
              } else {
                element.removeClass('collapse').addClass('collapsing');
                doTransition({ height: element[0].scrollHeight + 'px' }).then(expandDone);
              }
            }

            function expandDone() {
              element.removeClass('collapsing');
              element.addClass('collapse in');
              element.css({height: 'auto'});
            }

            function collapse() {
              if (initialAnimSkip) {
                initialAnimSkip = false;
                collapseDone();
                element.css({height: 0});
              } else {
                // CSS transitions don't work with height: auto, so we have to manually change the height to a specific value
                element.css({ height: element[0].scrollHeight + 'px' });
                //trigger reflow so a browser realizes that height was updated from auto to a specific value
                var x = element[0].offsetWidth;

                element.removeClass('collapse in').addClass('collapsing');

                doTransition({ height: 0 }).then(collapseDone);
              }
            }

            function collapseDone() {
              element.removeClass('collapsing');
              element.addClass('collapse');
            }

            scope.$watch(attrs.collapse, function (shouldCollapse) {
              if (shouldCollapse) {
                collapse();
              } else {
                expand();
              }
            });
          }
        };
      }]);

    angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

    .constant('accordionConfig', {
      closeOthers: true
    })

    .controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

      // This array keeps track of the accordion groups
      this.groups = [];

      // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
      this.closeOthers = function(openGroup) {
        var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
        if ( closeOthers ) {
          angular.forEach(this.groups, function (group) {
            if ( group !== openGroup ) {
              group.isOpen = false;
            }
          });
        }
      };

      // This is called from the accordion-group directive to add itself to the accordion
      this.addGroup = function(groupScope) {
        var that = this;
        this.groups.push(groupScope);

        groupScope.$on('$destroy', function (event) {
          that.removeGroup(groupScope);
        });
      };

      // This is called from the accordion-group directive when to remove itself
      this.removeGroup = function(group) {
        var index = this.groups.indexOf(group);
        if ( index !== -1 ) {
          this.groups.splice(this.groups.indexOf(group), 1);
        }
      };

    }])

    // The accordion directive simply sets up the directive controller
    // and adds an accordion CSS class to itself element.
    .directive('accordion', function () {
      return {
        restrict:'EA',
        controller:'AccordionController',
        transclude: true,
        replace: false,
        templateUrl: 'template/accordion/accordion.html'
      };
    })

    // The accordion-group directive indicates a block of html that will expand and collapse in an accordion
    .directive('accordionGroup', ['$parse', function($parse) {
      return {
        require:'^accordion',         // We need this directive to be inside an accordion
        restrict:'EA',
        transclude:true,              // It transcludes the contents of the directive into the template
        replace: true,                // The element containing the directive will be replaced with the template
        templateUrl:'template/accordion/accordion-group.html',
        scope:{ heading:'@' },        // Create an isolated scope and interpolate the heading attribute onto this scope
        controller: function() {
          this.setHeading = function(element) {
            this.heading = element;
          };
        },
        link: function(scope, element, attrs, accordionCtrl) {
          var getIsOpen, setIsOpen;

          accordionCtrl.addGroup(scope);

          scope.isOpen = false;

          if ( attrs.isOpen ) {
            getIsOpen = $parse(attrs.isOpen);
            setIsOpen = getIsOpen.assign;

            scope.$parent.$watch(getIsOpen, function(value) {
              scope.isOpen = !!value;
            });
          }

          scope.$watch('isOpen', function(value) {
            if ( value ) {
              accordionCtrl.closeOthers(scope);
            }
            if ( setIsOpen ) {
              setIsOpen(scope.$parent, value);
            }
          });
        }
      };
    }])

    // Use accordion-heading below an accordion-group to provide a heading containing HTML
    // <accordion-group>
    //   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
    // </accordion-group>
    .directive('accordionHeading', function() {
      return {
        restrict: 'EA',
        transclude: true,   // Grab the contents to be used as the heading
        template: '',       // In effect remove this element!
        replace: true,
        require: '^accordionGroup',
        compile: function(element, attr, transclude) {
          return function link(scope, element, attr, accordionGroupCtrl) {
            // Pass the heading to the accordion-group controller
            // so that it can be transcluded into the right place in the template
            // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
            accordionGroupCtrl.setHeading(transclude(scope, function() {}));
          };
        }
      };
    })

    // Use in the accordion-group template to indicate where you want the heading to be transcluded
    // You must provide the property on the accordion-group controller that will hold the transcluded element
    // <div class="accordion-group">
    //   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
    //   ...
    // </div>
    .directive('accordionTransclude', function() {
      return {
        require: '^accordionGroup',
        link: function(scope, element, attr, controller) {
          scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
            if ( heading ) {
              element.html('');
              element.append(heading);
            }
          });
        }
      };
    });

    angular.module("ui.bootstrap.alert", [])

    .controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
      $scope.closeable = 'close' in $attrs;
    }])

    .directive('alert', function () {
      return {
        restrict:'EA',
        controller:'AlertController',
        templateUrl:'template/alert/alert.html',
        transclude:true,
        replace:true,
        scope: {
          type: '=',
          close: '&'
        }
      };
    });

    angular.module('ui.bootstrap.bindHtml', [])

      .directive('bindHtmlUnsafe', function () {
        return function (scope, element, attr) {
          element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
          scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
            element.html(value || '');
          });
        };
      });
    angular.module('ui.bootstrap.buttons', [])

    .constant('buttonConfig', {
      activeClass: 'active',
      toggleEvent: 'click'
    })

    .controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
      this.activeClass = buttonConfig.activeClass || 'active';
      this.toggleEvent = buttonConfig.toggleEvent || 'click';
    }])

    .directive('btnRadio', function () {
      return {
        require: ['btnRadio', 'ngModel'],
        controller: 'ButtonsController',
        link: function (scope, element, attrs, ctrls) {
          var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

          //model -> UI
          ngModelCtrl.$render = function () {
            element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
          };

          //ui->model
          element.bind(buttonsCtrl.toggleEvent, function () {
            if (!element.hasClass(buttonsCtrl.activeClass)) {
              scope.$apply(function () {
                ngModelCtrl.$setViewValue(scope.$eval(attrs.btnRadio));
                ngModelCtrl.$render();
              });
            }
          });
        }
      };
    })

    .directive('btnCheckbox', function () {
      return {
        require: ['btnCheckbox', 'ngModel'],
        controller: 'ButtonsController',
        link: function (scope, element, attrs, ctrls) {
          var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

          function getTrueValue() {
            return getCheckboxValue(attrs.btnCheckboxTrue, true);
          }

          function getFalseValue() {
            return getCheckboxValue(attrs.btnCheckboxFalse, false);
          }

          function getCheckboxValue(attributeValue, defaultValue) {
            var val = scope.$eval(attributeValue);
            return angular.isDefined(val) ? val : defaultValue;
          }

          //model -> UI
          ngModelCtrl.$render = function () {
            element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
          };

          //ui->model
          element.bind(buttonsCtrl.toggleEvent, function () {
            scope.$apply(function () {
              ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
              ngModelCtrl.$render();
            });
          });
        }
      };
    });

    /**
    * @ngdoc overview
    * @name ui.bootstrap.carousel
    *
    * @description
    * AngularJS version of an image carousel.
    *
    */
    angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
    .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
      var self = this,
        slides = self.slides = [],
        currentIndex = -1,
        currentTimeout, isPlaying;
      self.currentSlide = null;

      var destroyed = false;
      /* direction: "prev" or "next" */
      self.select = function(nextSlide, direction) {
        var nextIndex = slides.indexOf(nextSlide);
        //Decide direction if it's not given
        if (direction === undefined) {
          direction = nextIndex > currentIndex ? "next" : "prev";
        }
        if (nextSlide && nextSlide !== self.currentSlide) {
          if ($scope.$currentTransition) {
            $scope.$currentTransition.cancel();
            //Timeout so ng-class in template has time to fix classes for finished slide
            $timeout(goNext);
          } else {
            goNext();
          }
        }
        function goNext() {
          // Scope has been destroyed, stop here.
          if (destroyed) { return; }
          //If we have a slide to transition from and we have a transition type and we're allowed, go
          if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
            //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
            nextSlide.$element.addClass(direction);
            var reflow = nextSlide.$element[0].offsetWidth; //force reflow

            //Set all other slides to stop doing their stuff for the new transition
            angular.forEach(slides, function(slide) {
              angular.extend(slide, {direction: '', entering: false, leaving: false, active: false});
            });
            angular.extend(nextSlide, {direction: direction, active: true, entering: true});
            angular.extend(self.currentSlide||{}, {direction: direction, leaving: true});

            $scope.$currentTransition = $transition(nextSlide.$element, {});
            //We have to create new pointers inside a closure since next & current will change
            (function(next,current) {
              $scope.$currentTransition.then(
                function(){ transitionDone(next, current); },
                function(){ transitionDone(next, current); }
              );
            }(nextSlide, self.currentSlide));
          } else {
            transitionDone(nextSlide, self.currentSlide);
          }
          self.currentSlide = nextSlide;
          currentIndex = nextIndex;
          //every time you change slides, reset the timer
          restartTimer();
        }
        function transitionDone(next, current) {
          angular.extend(next, {direction: '', active: true, leaving: false, entering: false});
          angular.extend(current||{}, {direction: '', active: false, leaving: false, entering: false});
          $scope.$currentTransition = null;
        }
      };
      $scope.$on('$destroy', function () {
        destroyed = true;
      });

      /* Allow outside people to call indexOf on slides array */
      self.indexOfSlide = function(slide) {
        return slides.indexOf(slide);
      };

      $scope.next = function() {
        var newIndex = (currentIndex + 1) % slides.length;

        //Prevent this user-triggered transition from occurring if there is already one in progress
        if (!$scope.$currentTransition) {
          return self.select(slides[newIndex], 'next');
        }
      };

      $scope.prev = function() {
        var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;

        //Prevent this user-triggered transition from occurring if there is already one in progress
        if (!$scope.$currentTransition) {
          return self.select(slides[newIndex], 'prev');
        }
      };

      $scope.select = function(slide) {
        self.select(slide);
      };

      $scope.isActive = function(slide) {
         return self.currentSlide === slide;
      };

      $scope.slides = function() {
        return slides;
      };

      $scope.$watch('interval', restartTimer);
      $scope.$on('$destroy', resetTimer);

      function restartTimer() {
        resetTimer();
        var interval = +$scope.interval;
        if (!isNaN(interval) && interval>=0) {
          currentTimeout = $timeout(timerFn, interval);
        }
      }

      function resetTimer() {
        if (currentTimeout) {
          $timeout.cancel(currentTimeout);
          currentTimeout = null;
        }
      }

      function timerFn() {
        if (isPlaying) {
          $scope.next();
          restartTimer();
        } else {
          $scope.pause();
        }
      }

      $scope.play = function() {
        if (!isPlaying) {
          isPlaying = true;
          restartTimer();
        }
      };
      $scope.pause = function() {
        if (!$scope.noPause) {
          isPlaying = false;
          resetTimer();
        }
      };

      self.addSlide = function(slide, element) {
        slide.$element = element;
        slides.push(slide);
        //if this is the first slide or the slide is set to active, select it
        if(slides.length === 1 || slide.active) {
          self.select(slides[slides.length-1]);
          if (slides.length == 1) {
            $scope.play();
          }
        } else {
          slide.active = false;
        }
      };

      self.removeSlide = function(slide) {
        //get the index of the slide inside the carousel
        var index = slides.indexOf(slide);
        slides.splice(index, 1);
        if (slides.length > 0 && slide.active) {
          if (index >= slides.length) {
            self.select(slides[index-1]);
          } else {
            self.select(slides[index]);
          }
        } else if (currentIndex > index) {
          currentIndex--;
        }
      };

    }])

    /**
     * @ngdoc directive
     * @name ui.bootstrap.carousel.directive:carousel
     * @restrict EA
     *
     * @description
     * Carousel is the outer container for a set of image 'slides' to showcase.
     *
     * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
     * @param {boolean=} noTransition Whether to disable transitions on the carousel.
     * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
     *
     * @example
    <example module="ui.bootstrap">
      <file name="index.html">
        <carousel>
          <slide>
            <img src="http://placekitten.com/150/150" style="margin:auto;">
            <div class="carousel-caption">
              <p>Beautiful!</p>
            </div>
          </slide>
          <slide>
            <img src="http://placekitten.com/100/150" style="margin:auto;">
            <div class="carousel-caption">
              <p>D'aww!</p>
            </div>
          </slide>
        </carousel>
      </file>
      <file name="demo.css">
        .carousel-indicators {
          top: auto;
          bottom: 15px;
        }
      </file>
    </example>
     */
    .directive('carousel', [function() {
      return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        controller: 'CarouselController',
        require: 'carousel',
        templateUrl: 'template/carousel/carousel.html',
        scope: {
          interval: '=',
          noTransition: '=',
          noPause: '='
        }
      };
    }])

    /**
     * @ngdoc directive
     * @name ui.bootstrap.carousel.directive:slide
     * @restrict EA
     *
     * @description
     * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
     *
     * @param {boolean=} active Model binding, whether or not this slide is currently active.
     *
     * @example
    <example module="ui.bootstrap">
      <file name="index.html">
    <div ng-controller="CarouselDemoCtrl">
      <carousel>
        <slide ng-repeat="slide in slides" active="slide.active">
          <img ng-src="{{slide.image}}" style="margin:auto;">
          <div class="carousel-caption">
            <h4>Slide {{$index}}</h4>
            <p>{{slide.text}}</p>
          </div>
        </slide>
      </carousel>
      <div class="row-fluid">
        <div class="span6">
          <ul>
            <li ng-repeat="slide in slides">
              <button class="btn btn-mini" ng-class="{'btn-info': !slide.active, 'btn-success': slide.active}" ng-disabled="slide.active" ng-click="slide.active = true">select</button>
              {{$index}}: {{slide.text}}
            </li>
          </ul>
          <a class="btn" ng-click="addSlide()">Add Slide</a>
        </div>
        <div class="span6">
          Interval, in milliseconds: <input type="number" ng-model="myInterval">
          <br />Enter a negative number to stop the interval.
        </div>
      </div>
    </div>
      </file>
      <file name="script.js">
    function CarouselDemoCtrl($scope) {
      $scope.myInterval = 5000;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
        slides.push({
          image: 'http://placekitten.com/' + newWidth + '/200',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' '
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) $scope.addSlide();
    }
      </file>
      <file name="demo.css">
        .carousel-indicators {
          top: auto;
          bottom: 15px;
        }
      </file>
    </example>
    */

    .directive('slide', ['$parse', function($parse) {
      return {
        require: '^carousel',
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: 'template/carousel/slide.html',
        scope: {
        },
        link: function (scope, element, attrs, carouselCtrl) {
          //Set up optional 'active' = binding
          if (attrs.active) {
            var getActive = $parse(attrs.active);
            var setActive = getActive.assign;
            var lastValue = scope.active = getActive(scope.$parent);
            scope.$watch(function parentActiveWatch() {
              var parentActive = getActive(scope.$parent);

              if (parentActive !== scope.active) {
                // we are out of sync and need to copy
                if (parentActive !== lastValue) {
                  // parent changed and it has precedence
                  lastValue = scope.active = parentActive;
                } else {
                  // if the parent can be assigned then do so
                  setActive(scope.$parent, parentActive = lastValue = scope.active);
                }
              }
              return parentActive;
            });
          }

          carouselCtrl.addSlide(scope, element);
          //when the scope is destroyed then remove the slide from the current slides array
          scope.$on('$destroy', function() {
            carouselCtrl.removeSlide(scope);
          });

          scope.$watch('active', function(active) {
            if (active) {
              carouselCtrl.select(scope);
            }
          });
        }
      };
    }]);

    angular.module('ui.bootstrap.position', [])

    /**
     * A set of utility methods that can be use to retrieve position of DOM elements.
     * It is meant to be used where we need to absolute-position DOM elements in
     * relation to other, existing elements (this is the case for tooltips, popovers,
     * typeahead suggestions etc.).
     */
      .factory('$position', ['$document', '$window', function ($document, $window) {

        function getStyle(el, cssprop) {
          if (el.currentStyle) { //IE
            return el.currentStyle[cssprop];
          } else if ($window.getComputedStyle) {
            return $window.getComputedStyle(el)[cssprop];
          }
          // finally try and get inline style
          return el.style[cssprop];
        }

        /**
         * Checks if a given element is statically positioned
         * @param element - raw DOM element
         */
        function isStaticPositioned(element) {
          return (getStyle(element, "position") || 'static' ) === 'static';
        }

        /**
         * returns the closest, non-statically positioned parentOffset of a given element
         * @param element
         */
        var parentOffsetEl = function (element) {
          var docDomEl = $document[0];
          var offsetParent = element.offsetParent || docDomEl;
          while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || docDomEl;
        };

        return {
          /**
           * Provides read-only equivalent of jQuery's position function:
           * http://api.jquery.com/position/
           */
          position: function (element) {
            var elBCR = this.offset(element);
            var offsetParentBCR = { top: 0, left: 0 };
            var offsetParentEl = parentOffsetEl(element[0]);
            if (offsetParentEl != $document[0]) {
              offsetParentBCR = this.offset(angular.element(offsetParentEl));
              offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
              offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
            }

            var boundingClientRect = element[0].getBoundingClientRect();
            return {
              width: boundingClientRect.width || element.prop('offsetWidth'),
              height: boundingClientRect.height || element.prop('offsetHeight'),
              top: elBCR.top - offsetParentBCR.top,
              left: elBCR.left - offsetParentBCR.left
            };
          },

          /**
           * Provides read-only equivalent of jQuery's offset function:
           * http://api.jquery.com/offset/
           */
          offset: function (element) {
            var boundingClientRect = element[0].getBoundingClientRect();
            return {
              width: boundingClientRect.width || element.prop('offsetWidth'),
              height: boundingClientRect.height || element.prop('offsetHeight'),
              top: boundingClientRect.top + ($window.pageYOffset || $document[0].body.scrollTop || $document[0].documentElement.scrollTop),
              left: boundingClientRect.left + ($window.pageXOffset || $document[0].body.scrollLeft  || $document[0].documentElement.scrollLeft)
            };
          }
        };
      }]);

    angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.position'])

    .constant('datepickerConfig', {
      dayFormat: 'dd',
      monthFormat: 'MMMM',
      yearFormat: 'yyyy',
      dayHeaderFormat: 'EEE',
      dayTitleFormat: 'MMMM yyyy',
      monthTitleFormat: 'yyyy',
      showWeeks: true,
      startingDay: 0,
      yearRange: 20,
      minDate: null,
      maxDate: null
    })

    .controller('DatepickerController', ['$scope', '$attrs', 'dateFilter', 'datepickerConfig', function($scope, $attrs, dateFilter, dtConfig) {
      var format = {
        day:        getValue($attrs.dayFormat,        dtConfig.dayFormat),
        month:      getValue($attrs.monthFormat,      dtConfig.monthFormat),
        year:       getValue($attrs.yearFormat,       dtConfig.yearFormat),
        dayHeader:  getValue($attrs.dayHeaderFormat,  dtConfig.dayHeaderFormat),
        dayTitle:   getValue($attrs.dayTitleFormat,   dtConfig.dayTitleFormat),
        monthTitle: getValue($attrs.monthTitleFormat, dtConfig.monthTitleFormat)
      },
      startingDay = getValue($attrs.startingDay,      dtConfig.startingDay),
      yearRange =   getValue($attrs.yearRange,        dtConfig.yearRange);

      this.minDate = dtConfig.minDate ? new Date(dtConfig.minDate) : null;
      this.maxDate = dtConfig.maxDate ? new Date(dtConfig.maxDate) : null;

      function getValue(value, defaultValue) {
        return angular.isDefined(value) ? $scope.$parent.$eval(value) : defaultValue;
      }

      function getDaysInMonth( year, month ) {
        return new Date(year, month, 0).getDate();
      }

      function getDates(startDate, n) {
        var dates = new Array(n);
        var current = startDate, i = 0;
        while (i < n) {
          dates[i++] = new Date(current);
          current.setDate( current.getDate() + 1 );
        }
        return dates;
      }

      function makeDate(date, format, isSelected, isSecondary) {
        return { date: date, label: dateFilter(date, format), selected: !!isSelected, secondary: !!isSecondary };
      }

      this.modes = [
        {
          name: 'day',
          getVisibleDates: function(date, selected) {
            var year = date.getFullYear(), month = date.getMonth(), firstDayOfMonth = new Date(year, month, 1);
            var difference = startingDay - firstDayOfMonth.getDay(),
            numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
            firstDate = new Date(firstDayOfMonth), numDates = 0;

            if ( numDisplayedFromPreviousMonth > 0 ) {
              firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
              numDates += numDisplayedFromPreviousMonth; // Previous
            }
            numDates += getDaysInMonth(year, month + 1); // Current
            numDates += (7 - numDates % 7) % 7; // Next


              // This was customised here as per this post: http://stackoverflow.com/questions/22865429/angular-ui-bootstrap-current-date-today-highlight-without-selecting

            var today = new Date();
            var days = getDates(firstDate, numDates), labels = new Array(7);
            for (var i = 0; i < numDates; i++) {
                var dt = new Date(days[i]);
                var highlight = (selected && selected.getDate() === dt.getDate() && selected.getMonth() === dt.getMonth() && selected.getFullYear() === dt.getFullYear());
                if (!highlight) {
                    highlight = (today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth() && today.getFullYear() === dt.getFullYear());
                }
                days[i] = makeDate(dt, format.day, highlight, dt.getMonth() !== month);
            }
            for (var j = 0; j < 7; j++) {
              labels[j] = dateFilter(days[j].date, format.dayHeader);
            }
            return { objects: days, title: dateFilter(date, format.dayTitle), labels: labels };
          },
          compare: function(date1, date2) {
            return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
          },
          split: 7,
          step: { months: 1 }
        },
        {
          name: 'month',
          getVisibleDates: function(date, selected) {
            var months = new Array(12), year = date.getFullYear();
            for ( var i = 0; i < 12; i++ ) {
              var dt = new Date(year, i, 1);
              months[i] = makeDate(dt, format.month, (selected && selected.getMonth() === i && selected.getFullYear() === year));
            }
            return { objects: months, title: dateFilter(date, format.monthTitle) };
          },
          compare: function(date1, date2) {
            return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
          },
          split: 3,
          step: { years: 1 }
        },
        {
          name: 'year',
          getVisibleDates: function(date, selected) {
            var years = new Array(yearRange), year = date.getFullYear(), startYear = parseInt((year - 1) / yearRange, 10) * yearRange + 1;
            for ( var i = 0; i < yearRange; i++ ) {
              var dt = new Date(startYear + i, 0, 1);
              years[i] = makeDate(dt, format.year, (selected && selected.getFullYear() === dt.getFullYear()));
            }
            return { objects: years, title: [years[0].label, years[yearRange - 1].label].join(' - ') };
          },
          compare: function(date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
          },
          split: 5,
          step: { years: yearRange }
        }
      ];

      this.isDisabled = function(date, mode) {
        var currentMode = this.modes[mode || 0];
        return ((this.minDate && currentMode.compare(date, this.minDate) < 0) || (this.maxDate && currentMode.compare(date, this.maxDate) > 0) || ($scope.dateDisabled && $scope.dateDisabled({date: date, mode: currentMode.name})));
      };
    }])

    .directive( 'datepicker', ['dateFilter', '$parse', 'datepickerConfig', '$log', function (dateFilter, $parse, datepickerConfig, $log) {
      return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/datepicker/datepicker.html',
        scope: {
          dateDisabled: '&'
        },
        require: ['datepicker', '?^ngModel'],
        controller: 'DatepickerController',
        link: function(scope, element, attrs, ctrls) {
          var datepickerCtrl = ctrls[0], ngModel = ctrls[1];

          if (!ngModel) {
            return; // do nothing if no ng-model
          }

          // Configuration parameters
          var mode = 0, selected = new Date(), showWeeks = datepickerConfig.showWeeks;

          if (attrs.showWeeks) {
            scope.$parent.$watch($parse(attrs.showWeeks), function(value) {
              showWeeks = !! value;
              updateShowWeekNumbers();
            });
          } else {
            updateShowWeekNumbers();
          }

          if (attrs.min) {
            scope.$parent.$watch($parse(attrs.min), function(value) {
              datepickerCtrl.minDate = value ? new Date(value) : null;
              refill();
            });
          }
          if (attrs.max) {
            scope.$parent.$watch($parse(attrs.max), function(value) {
              datepickerCtrl.maxDate = value ? new Date(value) : null;
              refill();
            });
          }

          function updateShowWeekNumbers() {
            scope.showWeekNumbers = mode === 0 && showWeeks;
          }

          // Split array into smaller arrays
          function split(arr, size) {
            var arrays = [];
            while (arr.length > 0) {
              arrays.push(arr.splice(0, size));
            }
            return arrays;
          }

          function refill( updateSelected ) {
            var date = null, valid = true;

            if ( ngModel.$modelValue ) {
              date = new Date( ngModel.$modelValue );

              if ( isNaN(date) ) {
                valid = false;
                $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
              } else if ( updateSelected ) {
                selected = date;
              }
            }
            ngModel.$setValidity('date', valid);

            var currentMode = datepickerCtrl.modes[mode], data = currentMode.getVisibleDates(selected, date);
            angular.forEach(data.objects, function(obj) {
              obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
            });

            ngModel.$setValidity('date-disabled', (!date || !datepickerCtrl.isDisabled(date)));

            scope.rows = split(data.objects, currentMode.split);
            scope.labels = data.labels || [];
            scope.title = data.title;
          }

          function setMode(value) {
            mode = value;
            updateShowWeekNumbers();
            refill();
          }

          ngModel.$render = function() {
            refill( true );
          };

          scope.select = function( date ) {
            if ( mode === 0 ) {
              var dt = ngModel.$modelValue ? new Date( ngModel.$modelValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
              dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
              ngModel.$setViewValue( dt );
              refill( true );
            } else {
              selected = date;
              setMode( mode - 1 );
            }
          };
          scope.move = function(direction) {
            var step = datepickerCtrl.modes[mode].step;
            selected.setMonth( selected.getMonth() + direction * (step.months || 0) );
            selected.setFullYear( selected.getFullYear() + direction * (step.years || 0) );
            refill();
          };
          scope.toggleMode = function() {
            setMode( (mode + 1) % datepickerCtrl.modes.length );
          };
          scope.getWeekNumber = function(row) {
            return ( mode === 0 && scope.showWeekNumbers && row.length === 7 ) ? getISO8601WeekNumber(row[0].date) : null;
          };

          function getISO8601WeekNumber(date) {
            var checkDate = new Date(date);
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
            var time = checkDate.getTime();
            checkDate.setMonth(0); // Compare with Jan 1
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
          }
        }
      };
    }])

    .constant('datepickerPopupConfig', {
      dateFormat: 'yyyy-MM-dd',
      currentText: 'Today',
      toggleWeeksText: 'Weeks',
      clearText: 'Clear',
      closeText: 'Done',
      closeOnDateSelection: true,
      appendToBody: false,
      showButtonBar: true
    })

    .directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'datepickerPopupConfig', 'datepickerConfig',
    function ($compile, $parse, $document, $position, dateFilter, datepickerPopupConfig, datepickerConfig) {
      return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(originalScope, element, attrs, ngModel) {
          var scope = originalScope.$new(), // create a child scope so we are not polluting original one
              dateFormat,
              closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? originalScope.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
              appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? originalScope.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

          attrs.$observe('datepickerPopup', function(value) {
              dateFormat = value || datepickerPopupConfig.dateFormat;
              ngModel.$render();
          });

          scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? originalScope.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

          originalScope.$on('$destroy', function() {
            $popup.remove();
            scope.$destroy();
          });

          attrs.$observe('currentText', function(text) {
            scope.currentText = angular.isDefined(text) ? text : datepickerPopupConfig.currentText;
          });
          attrs.$observe('toggleWeeksText', function(text) {
            scope.toggleWeeksText = angular.isDefined(text) ? text : datepickerPopupConfig.toggleWeeksText;
          });
          attrs.$observe('clearText', function(text) {
            scope.clearText = angular.isDefined(text) ? text : datepickerPopupConfig.clearText;
          });
          attrs.$observe('closeText', function(text) {
            scope.closeText = angular.isDefined(text) ? text : datepickerPopupConfig.closeText;
          });

          var getIsOpen, setIsOpen;
          if ( attrs.isOpen ) {
            getIsOpen = $parse(attrs.isOpen);
            setIsOpen = getIsOpen.assign;

            originalScope.$watch(getIsOpen, function updateOpen(value) {
              scope.isOpen = !! value;
            });
          }
          scope.isOpen = getIsOpen ? getIsOpen(originalScope) : false; // Initial state

          function setOpen( value ) {
            if (setIsOpen) {
              setIsOpen(originalScope, !!value);
            } else {
              scope.isOpen = !!value;
            }
          }

          var documentClickBind = function(event) {
            if (scope.isOpen && event.target !== element[0]) {
              scope.$apply(function() {
                setOpen(false);
              });
            }
          };

          var elementFocusBind = function() {
            scope.$apply(function() {
              setOpen( true );
            });
          };

          // popup element used to display calendar
          var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
          popupEl.attr({
            'ng-model': 'date',
            'ng-change': 'dateSelection()'
          });
          var datepickerEl = angular.element(popupEl.children()[0]),
              datepickerOptions = {};
          if (attrs.datepickerOptions) {
            datepickerOptions = originalScope.$eval(attrs.datepickerOptions);
            datepickerEl.attr(angular.extend({}, datepickerOptions));
          }

          // TODO: reverse from dateFilter string to Date object
          function parseDate(viewValue) {
            if (!viewValue) {
              ngModel.$setValidity('date', true);
              return null;
            } else if (angular.isDate(viewValue)) {
              ngModel.$setValidity('date', true);
              return viewValue;
            } else if (angular.isString(viewValue)) {
              var date = new Date(viewValue);
              if (isNaN(date)) {
                ngModel.$setValidity('date', false);
                return undefined;
              } else {
                ngModel.$setValidity('date', true);
                return date;
              }
            } else {
              ngModel.$setValidity('date', false);
              return undefined;
            }
          }
          ngModel.$parsers.unshift(parseDate);

          // Inner change
          scope.dateSelection = function(dt) {
            if (angular.isDefined(dt)) {
              scope.date = dt;
            }
            ngModel.$setViewValue(scope.date);
            ngModel.$render();

            if (closeOnDateSelection) {
              setOpen( false );
            }
          };

          element.bind('input change keyup', function() {
            scope.$apply(function() {
              scope.date = ngModel.$modelValue;
            });
          });

          // Outter change
          ngModel.$render = function() {
            var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
            element.val(date);
            scope.date = ngModel.$modelValue;
          };

          function addWatchableAttribute(attribute, scopeProperty, datepickerAttribute) {
            if (attribute) {
              originalScope.$watch($parse(attribute), function(value){
                scope[scopeProperty] = value;
              });
              datepickerEl.attr(datepickerAttribute || scopeProperty, scopeProperty);
            }
          }
          addWatchableAttribute(attrs.min, 'min');
          addWatchableAttribute(attrs.max, 'max');
          if (attrs.showWeeks) {
            addWatchableAttribute(attrs.showWeeks, 'showWeeks', 'show-weeks');
          } else {
            scope.showWeeks = 'show-weeks' in datepickerOptions ? datepickerOptions['show-weeks'] : datepickerConfig.showWeeks;
            datepickerEl.attr('show-weeks', 'showWeeks');
          }
          if (attrs.dateDisabled) {
            datepickerEl.attr('date-disabled', attrs.dateDisabled);
          }

          function updatePosition() {
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');
          }

          var documentBindingInitialized = false, elementFocusInitialized = false;
          scope.$watch('isOpen', function(value) {
            if (value) {
              updatePosition();
              $document.bind('click', documentClickBind);
              if(elementFocusInitialized) {
                element.unbind('focus', elementFocusBind);
              }
              element[0].focus();
              documentBindingInitialized = true;
            } else {
              if(documentBindingInitialized) {
                $document.unbind('click', documentClickBind);
              }
              element.bind('focus', elementFocusBind);
              elementFocusInitialized = true;
            }

            if ( setIsOpen ) {
              setIsOpen(originalScope, value);
            }
          });

          scope.today = function() {
            scope.dateSelection(new Date());
          };
          scope.clear = function() {
            scope.dateSelection(null);
          };

          var $popup = $compile(popupEl)(scope);
          if ( appendToBody ) {
            $document.find('body').append($popup);
          } else {
            element.after($popup);
          }
        }
      };
    }])

    .directive('datepickerPopupWrap', function() {
      return {
        restrict:'EA',
        replace: true,
        transclude: true,
        templateUrl: 'template/datepicker/popup.html',
        link:function (scope, element, attrs) {
          element.bind('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
          });
        }
      };
    });

    /*
     * dropdownToggle - Provides dropdown menu functionality in place of bootstrap js
     * @restrict class or attribute
     * @example:
       <li class="dropdown">
         <a class="dropdown-toggle">My Dropdown Menu</a>
         <ul class="dropdown-menu">
           <li ng-repeat="choice in dropChoices">
             <a ng-href="{{choice.href}}">{{choice.text}}</a>
           </li>
         </ul>
       </li>
     */

    angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', ['$document', '$location', function ($document, $location) {
      var openElement = null,
          closeMenu   = angular.noop;
      return {
        restrict: 'CA',
        link: function(scope, element, attrs) {
          scope.$watch('$location.path', function() { closeMenu(); });
          element.parent().bind('click', function() { closeMenu(); });
          element.bind('click', function (event) {

            var elementWasOpen = (element === openElement);

            event.preventDefault();
            event.stopPropagation();

            if (!!openElement) {
              closeMenu();
            }

            if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
              element.parent().addClass('open');
              openElement = element;
              closeMenu = function (event) {
                if (event) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                $document.unbind('click', closeMenu);
                element.parent().removeClass('open');
                closeMenu = angular.noop;
                openElement = null;
              };
              $document.bind('click', closeMenu);
            }
          });
        }
      };
    }]);

    angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition'])

    /**
     * A helper, internal data structure that acts as a map but also allows getting / removing
     * elements in the LIFO order
     */
      .factory('$$stackedMap', function () {
        return {
          createNew: function () {
            var stack = [];

            return {
              add: function (key, value) {
                stack.push({
                  key: key,
                  value: value
                });
              },
              get: function (key) {
                for (var i = 0; i < stack.length; i++) {
                  if (key == stack[i].key) {
                    return stack[i];
                  }
                }
              },
              keys: function() {
                var keys = [];
                for (var i = 0; i < stack.length; i++) {
                  keys.push(stack[i].key);
                }
                return keys;
              },
              top: function () {
                return stack[stack.length - 1];
              },
              remove: function (key) {
                var idx = -1;
                for (var i = 0; i < stack.length; i++) {
                  if (key == stack[i].key) {
                    idx = i;
                    break;
                  }
                }
                return stack.splice(idx, 1)[0];
              },
              removeTop: function () {
                return stack.splice(stack.length - 1, 1)[0];
              },
              length: function () {
                return stack.length;
              }
            };
          }
        };
      })

    /**
     * A helper directive for the $modal service. It creates a backdrop element.
     */
      .directive('modalBackdrop', ['$timeout', function ($timeout) {
        return {
          restrict: 'EA',
          replace: true,
          templateUrl: 'template/modal/backdrop.html',
          link: function (scope) {

            scope.animate = false;

            //trigger CSS transitions
            $timeout(function () {
              scope.animate = true;
            });
          }
        };
      }])

      .directive('modalWindow', ['$modalStack', '$timeout', function ($modalStack, $timeout) {
        return {
          restrict: 'EA',
          scope: {
            index: '@',
            animate: '='
          },
          replace: true,
          transclude: true,
          templateUrl: 'template/modal/window.html',
          link: function (scope, element, attrs) {
            scope.windowClass = attrs.windowClass || '';

            $timeout(function () {
              // trigger CSS transitions
              scope.animate = true;
              // focus a freshly-opened modal
              element[0].focus();
            });

            scope.close = function (evt) {
              var modal = $modalStack.getTop();
              if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
                evt.preventDefault();
                evt.stopPropagation();
                $modalStack.dismiss(modal.key, 'backdrop click');
              }
            };
          }
        };
      }])

      .factory('$modalStack', ['$transition', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
        function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {

          var OPENED_MODAL_CLASS = 'modal-open';

          var backdropDomEl, backdropScope;
          var openedWindows = $$stackedMap.createNew();
          var $modalStack = {};

          function backdropIndex() {
            var topBackdropIndex = -1;
            var opened = openedWindows.keys();
            for (var i = 0; i < opened.length; i++) {
              if (openedWindows.get(opened[i]).value.backdrop) {
                topBackdropIndex = i;
              }
            }
            return topBackdropIndex;
          }

          $rootScope.$watch(backdropIndex, function(newBackdropIndex){
            if (backdropScope) {
              backdropScope.index = newBackdropIndex;
            }
          });

          function removeModalWindow(modalInstance) {

            var body = $document.find('body').eq(0);
            var modalWindow = openedWindows.get(modalInstance).value;

            //clean up the stack
            openedWindows.remove(modalInstance);

            //remove window DOM element
            removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, checkRemoveBackdrop);
            body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
          }

          function checkRemoveBackdrop() {
              //remove backdrop if no longer needed
              if (backdropDomEl && backdropIndex() == -1) {
                var backdropScopeRef = backdropScope;
                removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
                  backdropScopeRef.$destroy();
                  backdropScopeRef = null;
                });
                backdropDomEl = undefined;
                backdropScope = undefined;
              }
          }

          function removeAfterAnimate(domEl, scope, emulateTime, done) {
            // Closing animation
            scope.animate = false;

            var transitionEndEventName = $transition.transitionEndEventName;
            if (transitionEndEventName) {
              // transition out
              var timeout = $timeout(afterAnimating, emulateTime);

              domEl.bind(transitionEndEventName, function () {
                $timeout.cancel(timeout);
                afterAnimating();
                scope.$apply();
              });
            } else {
              // Ensure this call is async
              $timeout(afterAnimating, 0);
            }

            function afterAnimating() {
              if (afterAnimating.done) {
                return;
              }
              afterAnimating.done = true;

              domEl.remove();
              if (done) {
                done();
              }
            }
          }

          $document.bind('keydown', function (evt) {
            var modal;

            if (evt.which === 27) {
              modal = openedWindows.top();
              if (modal && modal.value.keyboard) {
                $rootScope.$apply(function () {
                  $modalStack.dismiss(modal.key);
                });
              }
            }
          });

          $modalStack.open = function (modalInstance, modal) {

            openedWindows.add(modalInstance, {
              deferred: modal.deferred,
              modalScope: modal.scope,
              backdrop: modal.backdrop,
              keyboard: modal.keyboard
            });

            var body = $document.find('body').eq(0),
                currBackdropIndex = backdropIndex();

            if (currBackdropIndex >= 0 && !backdropDomEl) {
              backdropScope = $rootScope.$new(true);
              backdropScope.index = currBackdropIndex;
              backdropDomEl = $compile('<div modal-backdrop></div>')(backdropScope);
              body.append(backdropDomEl);
            }

            var angularDomEl = angular.element('<div modal-window></div>');
            angularDomEl.attr('window-class', modal.windowClass);
            angularDomEl.attr('index', openedWindows.length() - 1);
            angularDomEl.attr('animate', 'animate');
            angularDomEl.html(modal.content);

            var modalDomEl = $compile(angularDomEl)(modal.scope);
            openedWindows.top().value.modalDomEl = modalDomEl;
            body.append(modalDomEl);
            body.addClass(OPENED_MODAL_CLASS);
          };

          $modalStack.close = function (modalInstance, result) {
            var modalWindow = openedWindows.get(modalInstance).value;
            if (modalWindow) {
              modalWindow.deferred.resolve(result);
              removeModalWindow(modalInstance);
            }
          };

          $modalStack.dismiss = function (modalInstance, reason) {
            var modalWindow = openedWindows.get(modalInstance).value;
            if (modalWindow) {
              modalWindow.deferred.reject(reason);
              removeModalWindow(modalInstance);
            }
          };

          $modalStack.dismissAll = function (reason) {
            var topModal = this.getTop();
            while (topModal) {
              this.dismiss(topModal.key, reason);
              topModal = this.getTop();
            }
          };

          $modalStack.getTop = function () {
            return openedWindows.top();
          };

          return $modalStack;
        }])

      .provider('$modal', function () {

        var $modalProvider = {
          options: {
            backdrop: true, //can be also false or 'static'
            keyboard: true
          },
          $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$modalStack',
            function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {

              var $modal = {};

              function getTemplatePromise(options) {
                return options.template ? $q.when(options.template) :
                  $http.get(options.templateUrl, {cache: $templateCache}).then(function (result) {
                    return result.data;
                  });
              }

              function getResolvePromises(resolves) {
                var promisesArr = [];
                angular.forEach(resolves, function (value, key) {
                  if (angular.isFunction(value) || angular.isArray(value)) {
                    promisesArr.push($q.when($injector.invoke(value)));
                  }
                });
                return promisesArr;
              }

              $modal.open = function (modalOptions) {

                var modalResultDeferred = $q.defer();
                var modalOpenedDeferred = $q.defer();

                //prepare an instance of a modal to be injected into controllers and returned to a caller
                var modalInstance = {
                  result: modalResultDeferred.promise,
                  opened: modalOpenedDeferred.promise,
                  close: function (result) {
                    $modalStack.close(modalInstance, result);
                  },
                  dismiss: function (reason) {
                    $modalStack.dismiss(modalInstance, reason);
                  }
                };

                //merge and clean up options
                modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
                modalOptions.resolve = modalOptions.resolve || {};

                //verify options
                if (!modalOptions.template && !modalOptions.templateUrl) {
                  throw new Error('One of template or templateUrl options is required.');
                }

                var templateAndResolvePromise =
                  $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


                templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

                  var modalScope = (modalOptions.scope || $rootScope).$new();
                  modalScope.$close = modalInstance.close;
                  modalScope.$dismiss = modalInstance.dismiss;

                  var ctrlInstance, ctrlLocals = {};
                  var resolveIter = 1;

                  //controllers
                  if (modalOptions.controller) {
                    ctrlLocals.$scope = modalScope;
                    ctrlLocals.$modalInstance = modalInstance;
                    angular.forEach(modalOptions.resolve, function (value, key) {
                      ctrlLocals[key] = tplAndVars[resolveIter++];
                    });

                    ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                  }

                  $modalStack.open(modalInstance, {
                    scope: modalScope,
                    deferred: modalResultDeferred,
                    content: tplAndVars[0],
                    backdrop: modalOptions.backdrop,
                    keyboard: modalOptions.keyboard,
                    windowClass: modalOptions.windowClass
                  });

                }, function resolveError(reason) {
                  modalResultDeferred.reject(reason);
                });

                templateAndResolvePromise.then(function () {
                  modalOpenedDeferred.resolve(true);
                }, function () {
                  modalOpenedDeferred.reject(false);
                });

                return modalInstance;
              };

              return $modal;
            }]
        };

        return $modalProvider;
      });

    angular.module('ui.bootstrap.pagination', [])

    .controller('PaginationController', ['$scope', '$attrs', '$parse', '$interpolate', function ($scope, $attrs, $parse, $interpolate) {
      var self = this,
          setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

      this.init = function(defaultItemsPerPage) {
        if ($attrs.itemsPerPage) {
          $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
            self.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = self.calculateTotalPages();
          });
        } else {
          this.itemsPerPage = defaultItemsPerPage;
        }
      };

      this.noPrevious = function() {
        return this.page === 1;
      };
      this.noNext = function() {
        return this.page === $scope.totalPages;
      };

      this.isActive = function(page) {
        return this.page === page;
      };

      this.calculateTotalPages = function() {
        var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };

      this.getAttributeValue = function(attribute, defaultValue, interpolate) {
        return angular.isDefined(attribute) ? (interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute)) : defaultValue;
      };

      this.render = function() {
        this.page = parseInt($scope.page, 10) || 1;
        if (this.page > 0 && this.page <= $scope.totalPages) {
          $scope.pages = this.getPages(this.page, $scope.totalPages);
        }
      };

      $scope.selectPage = function(page) {
        if ( ! self.isActive(page) && page > 0 && page <= $scope.totalPages) {
          $scope.page = page;
          $scope.onSelectPage({ page: page });
        }
      };

      $scope.$watch('page', function() {
        self.render();
      });

      $scope.$watch('totalItems', function() {
        $scope.totalPages = self.calculateTotalPages();
      });

      $scope.$watch('totalPages', function(value) {
        setNumPages($scope.$parent, value); // Readonly variable

        if ( self.page > value ) {
          $scope.selectPage(value);
        } else {
          self.render();
        }
      });
    }])

    .constant('paginationConfig', {
      itemsPerPage: 10,
      boundaryLinks: false,
      directionLinks: true,
      firstText: 'First',
      previousText: 'Previous',
      nextText: 'Next',
      lastText: 'Last',
      rotate: true
    })

    .directive('pagination', ['$parse', 'paginationConfig', function($parse, config) {
      return {
        restrict: 'EA',
        scope: {
          page: '=',
          totalItems: '=',
          onSelectPage:' &'
        },
        controller: 'PaginationController',
        templateUrl: 'template/pagination/pagination.html',
        replace: true,
        link: function(scope, element, attrs, paginationCtrl) {

          // Setup configuration parameters
          var maxSize,
          boundaryLinks  = paginationCtrl.getAttributeValue(attrs.boundaryLinks,  config.boundaryLinks      ),
          directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks     ),
          firstText      = paginationCtrl.getAttributeValue(attrs.firstText,      config.firstText,     true),
          previousText   = paginationCtrl.getAttributeValue(attrs.previousText,   config.previousText,  true),
          nextText       = paginationCtrl.getAttributeValue(attrs.nextText,       config.nextText,      true),
          lastText       = paginationCtrl.getAttributeValue(attrs.lastText,       config.lastText,      true),
          rotate         = paginationCtrl.getAttributeValue(attrs.rotate,         config.rotate);

          paginationCtrl.init(config.itemsPerPage);

          if (attrs.maxSize) {
            scope.$parent.$watch($parse(attrs.maxSize), function(value) {
              maxSize = parseInt(value, 10);
              paginationCtrl.render();
            });
          }

          // Create page object used in template
          function makePage(number, text, isActive, isDisabled) {
            return {
              number: number,
              text: text,
              active: isActive,
              disabled: isDisabled
            };
          }

          paginationCtrl.getPages = function(currentPage, totalPages) {
            var pages = [];

            // Default page limits
            var startPage = 1, endPage = totalPages;
            var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

            // recompute if maxSize
            if ( isMaxSized ) {
              if ( rotate ) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
                endPage   = startPage + maxSize - 1;

                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                  endPage   = totalPages;
                  startPage = endPage - maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + maxSize - 1, totalPages);
              }
            }

            // Add page number links
            for (var number = startPage; number <= endPage; number++) {
              var page = makePage(number, number, paginationCtrl.isActive(number), false);
              pages.push(page);
            }

            // Add links to move between page sets
            if ( isMaxSized && ! rotate ) {
              if ( startPage > 1 ) {
                var previousPageSet = makePage(startPage - 1, '...', false, false);
                pages.unshift(previousPageSet);
              }

              if ( endPage < totalPages ) {
                var nextPageSet = makePage(endPage + 1, '...', false, false);
                pages.push(nextPageSet);
              }
            }

            // Add previous & next links
            if (directionLinks) {
              var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
              pages.unshift(previousPage);

              var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
              pages.push(nextPage);
            }

            // Add first & last links
            if (boundaryLinks) {
              var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
              pages.unshift(firstPage);

              var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
              pages.push(lastPage);
            }

            return pages;
          };
        }
      };
    }])

    .constant('pagerConfig', {
      itemsPerPage: 10,
      previousText: '« Previous',
      nextText: 'Next »',
      align: true
    })

    .directive('pager', ['pagerConfig', function(config) {
      return {
        restrict: 'EA',
        scope: {
          page: '=',
          totalItems: '=',
          onSelectPage:' &'
        },
        controller: 'PaginationController',
        templateUrl: 'template/pagination/pager.html',
        replace: true,
        link: function(scope, element, attrs, paginationCtrl) {

          // Setup configuration parameters
          var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
          nextText         = paginationCtrl.getAttributeValue(attrs.nextText,     config.nextText,     true),
          align            = paginationCtrl.getAttributeValue(attrs.align,        config.align);

          paginationCtrl.init(config.itemsPerPage);

          // Create page object used in template
          function makePage(number, text, isDisabled, isPrevious, isNext) {
            return {
              number: number,
              text: text,
              disabled: isDisabled,
              previous: ( align && isPrevious ),
              next: ( align && isNext )
            };
          }

          paginationCtrl.getPages = function(currentPage) {
            return [
              makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
              makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
            ];
          };
        }
      };
    }]);

    /**
     * The following features are still outstanding: animation as a
     * function, placement as a function, inside, support for more triggers than
     * just mouse enter/leave, html tooltips, and selector delegation.
     */
    angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

    /**
     * The $tooltip service creates tooltip- and popover-like directives as well as
     * houses global options for them.
     */
    .provider( '$tooltip', function () {
      // The default options tooltip and popover.
      var defaultOptions = {
        placement: 'top',
        animation: true,
        popupDelay: 0
      };

      // Default hide triggers for each show trigger
      var triggerMap = {
        'mouseenter': 'mouseleave',
        'click': 'click',
        'focus': 'blur'
      };

      // The options specified to the provider globally.
      var globalOptions = {};

      /**
       * `options({})` allows global configuration of all tooltips in the
       * application.
       *
       *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
       *     // place tooltips left instead of top by default
       *     $tooltipProvider.options( { placement: 'left' } );
       *   });
       */
        this.options = function( value ) {
            angular.extend( globalOptions, value );
        };

      /**
       * This allows you to extend the set of trigger mappings available. E.g.:
       *
       *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
       */
      this.setTriggers = function setTriggers ( triggers ) {
        angular.extend( triggerMap, triggers );
      };

      /**
       * This is a helper function for translating camel-case to snake-case.
       */
      function snake_case(name){
        var regexp = /[A-Z]/g;
        var separator = '-';
        return name.replace(regexp, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }

      /**
       * Returns the actual instance of the $tooltip service.
       * TODO support multiple triggers
       */
      this.$get = [ '$window', '$compile', '$timeout', '$parse', '$document', '$position', '$interpolate', function ( $window, $compile, $timeout, $parse, $document, $position, $interpolate ) {
        return function $tooltip ( type, prefix, defaultTriggerShow ) {
          var options = angular.extend( {}, defaultOptions, globalOptions );

          /**
           * Returns an object of show and hide triggers.
           *
           * If a trigger is supplied,
           * it is used to show the tooltip; otherwise, it will use the `trigger`
           * option passed to the `$tooltipProvider.options` method; else it will
           * default to the trigger supplied to this directive factory.
           *
           * The hide trigger is based on the show trigger. If the `trigger` option
           * was passed to the `$tooltipProvider.options` method, it will use the
           * mapped trigger from `triggerMap` or the passed trigger if the map is
           * undefined; otherwise, it uses the `triggerMap` value of the show
           * trigger; else it will just use the show trigger.
           */
          function getTriggers ( trigger ) {
            var show = trigger || options.trigger || defaultTriggerShow;
            var hide = triggerMap[show] || show;
            return {
              show: show,
              hide: hide
            };
          }

          var directiveName = snake_case( type );

          var startSym = $interpolate.startSymbol();
          var endSym = $interpolate.endSymbol();
          var template =
            '<div '+ directiveName +'-popup '+
              'title="'+startSym+'tt_title'+endSym+'" '+
              'content="'+startSym+'tt_content'+endSym+'" '+
              'placement="'+startSym+'tt_placement'+endSym+'" '+
              'animation="tt_animation" '+
              'is-open="tt_isOpen"'+
              '>'+
            '</div>';

          return {
            restrict: 'EA',
            scope: true,
            compile: function (tElem, tAttrs) {
              var tooltipLinker = $compile( template );

              return function link ( scope, element, attrs ) {
                var tooltip;
                var transitionTimeout;
                var popupTimeout;
                var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
                var triggers = getTriggers( undefined );
                var hasRegisteredTriggers = false;
                var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);

                var positionTooltip = function (){
                  var position,
                    ttWidth,
                    ttHeight,
                    ttPosition;
                  // Get the position of the directive element.
                  position = appendToBody ? $position.offset( element ) : $position.position( element );

                  // Get the height and width of the tooltip so we can center it.
                  ttWidth = tooltip.prop( 'offsetWidth' );
                  ttHeight = tooltip.prop( 'offsetHeight' );

                  // Calculate the tooltip's top and left coordinates to center it with
                  // this directive.
                  switch ( scope.tt_placement ) {
                    case 'right':
                      ttPosition = {
                        top: position.top + position.height / 2 - ttHeight / 2,
                        left: position.left + position.width
                      };
                      break;
                    case 'bottom':
                      ttPosition = {
                        top: position.top + position.height,
                        left: position.left + position.width / 2 - ttWidth / 2
                      };
                      break;
                    case 'left':
                      ttPosition = {
                        top: position.top + position.height / 2 - ttHeight / 2,
                        left: position.left - ttWidth
                      };
                      break;
                    default:
                      ttPosition = {
                        top: position.top - ttHeight,
                        left: position.left + position.width / 2 - ttWidth / 2
                      };
                      break;
                  }

                  ttPosition.top += 'px';
                  ttPosition.left += 'px';

                  // Now set the calculated positioning.
                  tooltip.css( ttPosition );

                };

                // By default, the tooltip is not open.
                // TODO add ability to start tooltip opened
                scope.tt_isOpen = false;

                function toggleTooltipBind () {
                  if ( ! scope.tt_isOpen ) {
                    showTooltipBind();
                  } else {
                    hideTooltipBind();
                  }
                }

                // Show the tooltip with delay if specified, otherwise show it immediately
                function showTooltipBind() {
                  if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
                    return;
                  }
                  if ( scope.tt_popupDelay ) {
                    popupTimeout = $timeout( show, scope.tt_popupDelay, false );
                    popupTimeout.then(function(reposition){reposition();});
                  } else {
                    show()();
                  }
                }

                function hideTooltipBind () {
                  scope.$apply(function () {
                    hide();
                  });
                }

                // Show the tooltip popup element.
                function show() {


                  // Don't show empty tooltips.
                  if ( ! scope.tt_content ) {
                    return angular.noop;
                  }

                  createTooltip();

                  // If there is a pending remove transition, we must cancel it, lest the
                  // tooltip be mysteriously removed.
                  if ( transitionTimeout ) {
                    $timeout.cancel( transitionTimeout );
                  }

                  // Set the initial positioning.
                  tooltip.css({ top: 0, left: 0, display: 'block' });

                  // Now we add it to the DOM because need some info about it. But it's not
                  // visible yet anyway.
                  if ( appendToBody ) {
                      $document.find( 'body' ).append( tooltip );
                  } else {
                    element.after( tooltip );
                  }

                  positionTooltip();

                  // And show the tooltip.
                  scope.tt_isOpen = true;
                  scope.$digest(); // digest required as $apply is not called

                  // Return positioning function as promise callback for correct
                  // positioning after draw.
                  return positionTooltip;
                }

                // Hide the tooltip popup element.
                function hide() {
                  // First things first: we don't show it anymore.
                  scope.tt_isOpen = false;

                  //if tooltip is going to be shown after delay, we must cancel this
                  $timeout.cancel( popupTimeout );

                  // And now we remove it from the DOM. However, if we have animation, we
                  // need to wait for it to expire beforehand.
                  // FIXME: this is a placeholder for a port of the transitions library.
                  if ( scope.tt_animation ) {
                    transitionTimeout = $timeout(removeTooltip, 500);
                  } else {
                    removeTooltip();
                  }
                }

                function createTooltip() {
                  // There can only be one tooltip element per directive shown at once.
                  if (tooltip) {
                    removeTooltip();
                  }
                  tooltip = tooltipLinker(scope, function () {});

                  // Get contents rendered into the tooltip
                  scope.$digest();
                }

                function removeTooltip() {
                  if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                  }
                }

                /**
                 * Observe the relevant attributes.
                 */
                attrs.$observe( type, function ( val ) {
                  scope.tt_content = val;

                  if (!val && scope.tt_isOpen ) {
                    hide();
                  }
                });

                attrs.$observe( prefix+'Title', function ( val ) {
                  scope.tt_title = val;
                });

                attrs.$observe( prefix+'Placement', function ( val ) {
                  scope.tt_placement = angular.isDefined( val ) ? val : options.placement;
                });

                attrs.$observe( prefix+'PopupDelay', function ( val ) {
                  var delay = parseInt( val, 10 );
                  scope.tt_popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
                });

                var unregisterTriggers = function() {
                  if (hasRegisteredTriggers) {
                    element.unbind( triggers.show, showTooltipBind );
                    element.unbind( triggers.hide, hideTooltipBind );
                  }
                };

                attrs.$observe( prefix+'Trigger', function ( val ) {
                  unregisterTriggers();

                  triggers = getTriggers( val );

                  if ( triggers.show === triggers.hide ) {
                    element.bind( triggers.show, toggleTooltipBind );
                  } else {
                    element.bind( triggers.show, showTooltipBind );
                    element.bind( triggers.hide, hideTooltipBind );
                  }

                  hasRegisteredTriggers = true;
                });

                var animation = scope.$eval(attrs[prefix + 'Animation']);
                scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation;

                attrs.$observe( prefix+'AppendToBody', function ( val ) {
                  appendToBody = angular.isDefined( val ) ? $parse( val )( scope ) : appendToBody;
                });

                // if a tooltip is attached to <body> we need to remove it on
                // location change as its parent scope will probably not be destroyed
                // by the change.
                if ( appendToBody ) {
                  scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
                  if ( scope.tt_isOpen ) {
                    hide();
                  }
                });
                }

                // Make sure tooltip is destroyed and removed.
                scope.$on('$destroy', function onDestroyTooltip() {
                  $timeout.cancel( transitionTimeout );
                  $timeout.cancel( popupTimeout );
                  unregisterTriggers();
                  removeTooltip();
                });
              };
            }
          };
        };
      }];
    })

    .directive( 'tooltipPopup', function () {
      return {
        restrict: 'EA',
        replace: true,
        scope: { content: '@', placement: '@', animation: '&', isOpen: '&' },
        templateUrl: 'template/tooltip/tooltip-popup.html'
      };
    })

    .directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
      return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
    }])

    .directive( 'tooltipHtmlUnsafePopup', function () {
      return {
        restrict: 'EA',
        replace: true,
        scope: { content: '@', placement: '@', animation: '&', isOpen: '&' },
        templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
      };
    })

    .directive( 'tooltipHtmlUnsafe', [ '$tooltip', function ( $tooltip ) {
      return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
    }]);

    /**
     * The following features are still outstanding: popup delay, animation as a
     * function, placement as a function, inside, support for more triggers than
     * just mouse enter/leave, html popovers, and selector delegatation.
     */
    angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

    .directive( 'popoverPopup', function () {
      return {
        restrict: 'EA',
        replace: true,
        scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
        templateUrl: 'template/popover/popover.html'
      };
    })

    .directive( 'popover', [ '$tooltip', function ( $tooltip ) {
      return $tooltip( 'popover', 'popover', 'click' );
    }]);

    angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition'])

    .constant('progressConfig', {
      animate: true,
      max: 100
    })

    .controller('ProgressController', ['$scope', '$attrs', 'progressConfig', '$transition', function($scope, $attrs, progressConfig, $transition) {
        var self = this,
            bars = [],
            max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max,
            animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

        this.addBar = function(bar, element) {
            var oldValue = 0, index = bar.$parent.$index;
            if ( angular.isDefined(index) &&  bars[index] ) {
                oldValue = bars[index].value;
            }
            bars.push(bar);

            this.update(element, bar.value, oldValue);

            bar.$watch('value', function(value, oldValue) {
                if (value !== oldValue) {
                    self.update(element, value, oldValue);
                }
            });

            bar.$on('$destroy', function() {
                self.removeBar(bar);
            });
        };

        // Update bar element width
        this.update = function(element, newValue, oldValue) {
            var percent = this.getPercentage(newValue);

            if (animate) {
                element.css('width', this.getPercentage(oldValue) + '%');
                $transition(element, {width: percent + '%'});
            } else {
                element.css({'transition': 'none', 'width': percent + '%'});
            }
        };

        this.removeBar = function(bar) {
            bars.splice(bars.indexOf(bar), 1);
        };

        this.getPercentage = function(value) {
            return Math.round(100 * value / max);
        };
    }])

    .directive('progress', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            controller: 'ProgressController',
            require: 'progress',
            scope: {},
            template: '<div class="progress" ng-transclude></div>'
            //templateUrl: 'template/progressbar/progress.html' // Works in AngularJS 1.2
        };
    })

    .directive('bar', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            require: '^progress',
            scope: {
                value: '=',
                type: '@'
            },
            templateUrl: 'template/progressbar/bar.html',
            link: function(scope, element, attrs, progressCtrl) {
                progressCtrl.addBar(scope, element);
            }
        };
    })

    .directive('progressbar', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            controller: 'ProgressController',
            scope: {
                value: '=',
                type: '@'
            },
            templateUrl: 'template/progressbar/progressbar.html',
            link: function(scope, element, attrs, progressCtrl) {
                progressCtrl.addBar(scope, angular.element(element.children()[0]));
            }
        };
    });
    angular.module('ui.bootstrap.rating', [])

    .constant('ratingConfig', {
      max: 5,
      stateOn: null,
      stateOff: null
    })

    .controller('RatingController', ['$scope', '$attrs', '$parse', 'ratingConfig', function($scope, $attrs, $parse, ratingConfig) {

      this.maxRange = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
      this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
      this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

      this.createRateObjects = function(states) {
        var defaultOptions = {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        };

        for (var i = 0, n = states.length; i < n; i++) {
          states[i] = angular.extend({ index: i }, defaultOptions, states[i]);
        }
        return states;
      };

      // Get objects used in template
      $scope.range = angular.isDefined($attrs.ratingStates) ?  this.createRateObjects(angular.copy($scope.$parent.$eval($attrs.ratingStates))): this.createRateObjects(new Array(this.maxRange));

      $scope.rate = function(value) {
        if ( $scope.value !== value && !$scope.readonly ) {
          $scope.value = value;
        }
      };

      $scope.enter = function(value) {
        if ( ! $scope.readonly ) {
          $scope.val = value;
        }
        $scope.onHover({value: value});
      };

      $scope.reset = function() {
        $scope.val = angular.copy($scope.value);
        $scope.onLeave();
      };

      $scope.$watch('value', function(value) {
        $scope.val = value;
      });

      $scope.readonly = false;
      if ($attrs.readonly) {
        $scope.$parent.$watch($parse($attrs.readonly), function(value) {
          $scope.readonly = !!value;
        });
      }
    }])

    .directive('rating', function() {
      return {
        restrict: 'EA',
        scope: {
          value: '=',
          onHover: '&',
          onLeave: '&'
        },
        controller: 'RatingController',
        templateUrl: 'template/rating/rating.html',
        replace: true
      };
    });

    /**
     * @ngdoc overview
     * @name ui.bootstrap.tabs
     *
     * @description
     * AngularJS version of the tabs directive.
     */

    angular.module('ui.bootstrap.tabs', [])

    .controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
      var ctrl = this,
          tabs = ctrl.tabs = $scope.tabs = [];

      ctrl.select = function(tab) {
        angular.forEach(tabs, function(tab) {
          tab.active = false;
        });
        tab.active = true;
      };

      ctrl.addTab = function addTab(tab) {
        tabs.push(tab);
        if (tabs.length === 1 || tab.active) {
          ctrl.select(tab);
        }
      };

      ctrl.removeTab = function removeTab(tab) {
        var index = tabs.indexOf(tab);
        //Select a new tab if the tab to be removed is selected
        if (tab.active && tabs.length > 1) {
          //If this is the last tab, select the previous tab. else, the next tab.
          var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
          ctrl.select(tabs[newActiveIndex]);
        }
        tabs.splice(index, 1);
      };
    }])

    /**
     * @ngdoc directive
     * @name ui.bootstrap.tabs.directive:tabset
     * @restrict EA
     *
     * @description
     * Tabset is the outer container for the tabs directive
     *
     * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
     * @param {boolean=} justified Whether or not to use justified styling for the tabs.
     *
     * @example
    <example module="ui.bootstrap">
      <file name="index.html">
        <tabset>
          <tab heading="Tab 1"><b>First</b> Content!</tab>
          <tab heading="Tab 2"><i>Second</i> Content!</tab>
        </tabset>
        <hr />
        <tabset vertical="true">
          <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
          <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
        </tabset>
        <tabset justified="true">
          <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
          <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
        </tabset>
      </file>
    </example>
     */
    .directive('tabset', function() {
      return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {},
        controller: 'TabsetController',
        templateUrl: 'template/tabs/tabset.html',
        link: function(scope, element, attrs) {
          scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
          scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
          scope.type = angular.isDefined(attrs.type) ? scope.$parent.$eval(attrs.type) : 'tabs';
        }
      };
    })

    /**
     * @ngdoc directive
     * @name ui.bootstrap.tabs.directive:tab
     * @restrict EA
     *
     * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
     * @param {string=} select An expression to evaluate when the tab is selected.
     * @param {boolean=} active A binding, telling whether or not this tab is selected.
     * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
     *
     * @description
     * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
     *
     * @example
    <example module="ui.bootstrap">
      <file name="index.html">
        <div ng-controller="TabsDemoCtrl">
          <button class="btn btn-small" ng-click="items[0].active = true">
            Select item 1, using active binding
          </button>
          <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
            Enable/disable item 2, using disabled binding
          </button>
          <br />
          <tabset>
            <tab heading="Tab 1">First Tab</tab>
            <tab select="alertMe()">
              <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
              Second Tab, with alert callback and html heading!
            </tab>
            <tab ng-repeat="item in items"
              heading="{{item.title}}"
              disabled="item.disabled"
              active="item.active">
              {{item.content}}
            </tab>
          </tabset>
        </div>
      </file>
      <file name="script.js">
        function TabsDemoCtrl($scope) {
          $scope.items = [
            { title:"Dynamic Title 1", content:"Dynamic Item 0" },
            { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
          ];

          $scope.alertMe = function() {
            setTimeout(function() {
              alert("You've selected the alert tab!");
            });
          };
        };
      </file>
    </example>
     */

    /**
     * @ngdoc directive
     * @name ui.bootstrap.tabs.directive:tabHeading
     * @restrict EA
     *
     * @description
     * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
     *
     * @example
    <example module="ui.bootstrap">
      <file name="index.html">
        <tabset>
          <tab>
            <tab-heading><b>HTML</b> in my titles?!</tab-heading>
            And some content, too!
          </tab>
          <tab>
            <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
            That's right.
          </tab>
        </tabset>
      </file>
    </example>
     */
    .directive('tab', ['$parse', function($parse) {
      return {
        require: '^tabset',
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/tabs/tab.html',
        transclude: true,
        scope: {
          heading: '@',
          onSelect: '&select', //This callback is called in contentHeadingTransclude
                              //once it inserts the tab's content into the dom
          onDeselect: '&deselect'
        },
        controller: function() {
          //Empty controller so other directives can require being 'under' a tab
        },
        compile: function(elm, attrs, transclude) {
          return function postLink(scope, elm, attrs, tabsetCtrl) {
            var getActive, setActive;
            if (attrs.active) {
              getActive = $parse(attrs.active);
              setActive = getActive.assign;
              scope.$parent.$watch(getActive, function updateActive(value, oldVal) {
                // Avoid re-initializing scope.active as it is already initialized
                // below. (watcher is called async during init with value ===
                // oldVal)
                if (value !== oldVal) {
                  scope.active = !!value;
                }
              });
              scope.active = getActive(scope.$parent);
            } else {
              setActive = getActive = angular.noop;
            }

            scope.$watch('active', function(active) {
              // Note this watcher also initializes and assigns scope.active to the
              // attrs.active expression.
              setActive(scope.$parent, active);
              if (active) {
                tabsetCtrl.select(scope);
                scope.onSelect();
              } else {
                scope.onDeselect();
              }
            });

            scope.disabled = false;
            if ( attrs.disabled ) {
              scope.$parent.$watch($parse(attrs.disabled), function(value) {
                scope.disabled = !! value;
              });
            }

            scope.select = function() {
              if ( ! scope.disabled ) {
                scope.active = true;
              }
            };

            tabsetCtrl.addTab(scope);
            scope.$on('$destroy', function() {
              tabsetCtrl.removeTab(scope);
            });


            //We need to transclude later, once the content container is ready.
            //when this link happens, we're inside a tab heading.
            scope.$transcludeFn = transclude;
          };
        }
      };
    }])

    .directive('tabHeadingTransclude', [function() {
      return {
        restrict: 'A',
        require: '^tab',
        link: function(scope, elm, attrs, tabCtrl) {
          scope.$watch('headingElement', function updateHeadingElement(heading) {
            if (heading) {
              elm.html('');
              elm.append(heading);
            }
          });
        }
      };
    }])

    .directive('tabContentTransclude', function() {
      return {
        restrict: 'A',
        require: '^tabset',
        link: function(scope, elm, attrs) {
          var tab = scope.$eval(attrs.tabContentTransclude);

          //Now our tab is ready to be transcluded: both the tab heading area
          //and the tab content area are loaded.  Transclude 'em both.
          tab.$transcludeFn(tab.$parent, function(contents) {
            angular.forEach(contents, function(node) {
              if (isTabHeading(node)) {
                //Let tabHeadingTransclude know.
                tab.headingElement = node;
              } else {
                elm.append(node);
              }
            });
          });
        }
      };
      function isTabHeading(node) {
        return node.tagName &&  (
          node.hasAttribute('tab-heading') ||
          node.hasAttribute('data-tab-heading') ||
          node.tagName.toLowerCase() === 'tab-heading' ||
          node.tagName.toLowerCase() === 'data-tab-heading'
        );
      }
    })

    ;

    angular.module('ui.bootstrap.timepicker', [])

    .constant('timepickerConfig', {
      hourStep: 1,
      minuteStep: 1,
      showMeridian: true,
      meridians: null,
      readonlyInput: false,
      mousewheel: true
    })

    .directive('timepicker', ['$parse', '$log', 'timepickerConfig', '$locale', function ($parse, $log, timepickerConfig, $locale) {
      return {
        restrict: 'EA',
        require:'?^ngModel',
        replace: true,
        scope: {},
        templateUrl: 'template/timepicker/timepicker.html',
        link: function(scope, element, attrs, ngModel) {
          if ( !ngModel ) {
            return; // do nothing if no ng-model
          }

          var selected = new Date(),
              meridians = angular.isDefined(attrs.meridians) ? scope.$parent.$eval(attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

          var hourStep = timepickerConfig.hourStep;
          if (attrs.hourStep) {
            scope.$parent.$watch($parse(attrs.hourStep), function(value) {
              hourStep = parseInt(value, 10);
            });
          }

          var minuteStep = timepickerConfig.minuteStep;
          if (attrs.minuteStep) {
            scope.$parent.$watch($parse(attrs.minuteStep), function(value) {
              minuteStep = parseInt(value, 10);
            });
          }

          // 12H / 24H mode
          scope.showMeridian = timepickerConfig.showMeridian;
          if (attrs.showMeridian) {
            scope.$parent.$watch($parse(attrs.showMeridian), function(value) {
              scope.showMeridian = !!value;

              if ( ngModel.$error.time ) {
                // Evaluate from template
                var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
                if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
                  selected.setHours( hours );
                  refresh();
                }
              } else {
                updateTemplate();
              }
            });
          }

          // Get scope.hours in 24H mode if valid
          function getHoursFromTemplate ( ) {
            var hours = parseInt( scope.hours, 10 );
            var valid = ( scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
            if ( !valid ) {
              return undefined;
            }

            if ( scope.showMeridian ) {
              if ( hours === 12 ) {
                hours = 0;
              }
              if ( scope.meridian === meridians[1] ) {
                hours = hours + 12;
              }
            }
            return hours;
          }

          function getMinutesFromTemplate() {
            var minutes = parseInt(scope.minutes, 10);
            return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
          }

          function pad( value ) {
            return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value;
          }

          // Input elements
          var inputs = element.find('input'), hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1);

          // Respond on mousewheel spin
          var mousewheel = (angular.isDefined(attrs.mousewheel)) ? scope.$eval(attrs.mousewheel) : timepickerConfig.mousewheel;
          if ( mousewheel ) {

            var isScrollingUp = function(e) {
              if (e.originalEvent) {
                e = e.originalEvent;
              }
              //pick correct delta variable depending on event
              var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
              return (e.detail || delta > 0);
            };

            hoursInputEl.bind('mousewheel wheel', function(e) {
              scope.$apply( (isScrollingUp(e)) ? scope.incrementHours() : scope.decrementHours() );
              e.preventDefault();
            });

            minutesInputEl.bind('mousewheel wheel', function(e) {
              scope.$apply( (isScrollingUp(e)) ? scope.incrementMinutes() : scope.decrementMinutes() );
              e.preventDefault();
            });
          }

          scope.readonlyInput = (angular.isDefined(attrs.readonlyInput)) ? scope.$eval(attrs.readonlyInput) : timepickerConfig.readonlyInput;
          if ( ! scope.readonlyInput ) {

            var invalidate = function(invalidHours, invalidMinutes) {
              ngModel.$setViewValue( null );
              ngModel.$setValidity('time', false);
              if (angular.isDefined(invalidHours)) {
                scope.invalidHours = invalidHours;
              }
              if (angular.isDefined(invalidMinutes)) {
                scope.invalidMinutes = invalidMinutes;
              }
            };

            scope.updateHours = function() {
              var hours = getHoursFromTemplate();

              if ( angular.isDefined(hours) ) {
                selected.setHours( hours );
                refresh( 'h' );
              } else {
                invalidate(true);
              }
            };

            hoursInputEl.bind('blur', function(e) {
              if ( !scope.validHours && scope.hours < 10) {
                scope.$apply( function() {
                  scope.hours = pad( scope.hours );
                });
              }
            });

            scope.updateMinutes = function() {
              var minutes = getMinutesFromTemplate();

              if ( angular.isDefined(minutes) ) {
                selected.setMinutes( minutes );
                refresh( 'm' );
              } else {
                invalidate(undefined, true);
              }
            };

            minutesInputEl.bind('blur', function(e) {
              if ( !scope.invalidMinutes && scope.minutes < 10 ) {
                scope.$apply( function() {
                  scope.minutes = pad( scope.minutes );
                });
              }
            });
          } else {
            scope.updateHours = angular.noop;
            scope.updateMinutes = angular.noop;
          }

          ngModel.$render = function() {
            var date = ngModel.$modelValue ? new Date( ngModel.$modelValue ) : null;

            if ( isNaN(date) ) {
              ngModel.$setValidity('time', false);
              $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
            } else {
              if ( date ) {
                selected = date;
              }
              makeValid();
              updateTemplate();
            }
          };

          // Call internally when we know that model is valid.
          function refresh( keyboardChange ) {
            makeValid();
            ngModel.$setViewValue( new Date(selected) );
            updateTemplate( keyboardChange );
          }

          function makeValid() {
            ngModel.$setValidity('time', true);
            scope.invalidHours = false;
            scope.invalidMinutes = false;
          }

          function updateTemplate( keyboardChange ) {
            var hours = selected.getHours(), minutes = selected.getMinutes();

            if ( scope.showMeridian ) {
              hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
            }
            scope.hours =  keyboardChange === 'h' ? hours : pad(hours);
            scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
            scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
          }

          function addMinutes( minutes ) {
            var dt = new Date( selected.getTime() + minutes * 60000 );
            selected.setHours( dt.getHours(), dt.getMinutes() );
            refresh();
          }

          scope.incrementHours = function() {
            addMinutes( hourStep * 60 );
          };
          scope.decrementHours = function() {
            addMinutes( - hourStep * 60 );
          };
          scope.incrementMinutes = function() {
            addMinutes( minuteStep );
          };
          scope.decrementMinutes = function() {
            addMinutes( - minuteStep );
          };
          scope.toggleMeridian = function() {
            addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
          };
        }
      };
    }]);

    angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

    /**
     * A helper service that can parse typeahead's syntax (string provided by users)
     * Extracted to a separate service for ease of unit testing
     */
      .factory('typeaheadParser', ['$parse', function ($parse) {

      //                      00000111000000000000022200000000000000003333333333333330000000000044000
      var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;

      return {
        parse:function (input) {

          var match = input.match(TYPEAHEAD_REGEXP), modelMapper, viewMapper, source;
          if (!match) {
            throw new Error(
              "Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_'" +
                " but got '" + input + "'.");
          }

          return {
            itemName:match[3],
            source:$parse(match[4]),
            viewMapper:$parse(match[2] || match[1]),
            modelMapper:$parse(match[1])
          };
        }
      };
    }])

      .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
        function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

      var HOT_KEYS = [9, 13, 27, 38, 40];

      return {
        require:'ngModel',
        link:function (originalScope, element, attrs, modelCtrl) {

          //SUPPORTED ATTRIBUTES (OPTIONS)

          //minimal no of characters that needs to be entered before typeahead kicks-in
          // ahneo :: before
          //var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
          // ahneo :: after (changed minimal no of characters to 0 by default)
          var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 0;

          //minimal wait time after last character typed before typehead kicks-in
          var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

          //should it restrict model values to the ones selected from the popup only?
          var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

          //binding to a variable that indicates if matches are being retrieved asynchronously
          var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

          //a callback executed when a match is selected
          var onSelectCallback = $parse(attrs.typeaheadOnSelect);

          var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

          var appendToBody =  attrs.typeaheadAppendToBody ? $parse(attrs.typeaheadAppendToBody) : false;

          //INTERNAL VARIABLES

          //model setter executed upon match selection
          var $setModelValue = $parse(attrs.ngModel).assign;

          //expressions used by typeahead
          var parserResult = typeaheadParser.parse(attrs.typeahead);

          var hasFocus;

          //pop-up element used to display matches
          var popUpEl = angular.element('<div typeahead-popup></div>');
          popUpEl.attr({
            matches: 'matches',
            active: 'activeIdx',
            select: 'select(activeIdx)',
            query: 'query',
            position: 'position'
          });
          //custom item template
          if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
            popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
          }

          //create a child scope for the typeahead directive so we are not polluting original scope
          //with typeahead-specific data (matches, query etc.)
          var scope = originalScope.$new();
          originalScope.$on('$destroy', function(){
            scope.$destroy();
          });

          var resetMatches = function() {
            scope.matches = [];
            scope.activeIdx = -1;
          };

          var getMatchesAsync = function(inputValue) {

            var locals = {$viewValue: inputValue};
            isLoadingSetter(originalScope, true);
            $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

              //it might happen that several async queries were in progress if a user were typing fast
              //but we are interested only in responses that correspond to the current view value
              if (inputValue === modelCtrl.$viewValue && hasFocus) {
                if (matches.length > 0) {

                  scope.activeIdx = 0;
                  scope.matches.length = 0;

                  //transform labels
                  for(var i=0; i<matches.length; i++) {
                    locals[parserResult.itemName] = matches[i];
                    scope.matches.push({
                      label: parserResult.viewMapper(scope, locals),
                      model: matches[i]
                    });
                  }

                  scope.query = inputValue;
                  //position pop-up with matches - we need to re-calculate its position each time we are opening a window
                  //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
                  //due to other elements being rendered
                  scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                  scope.position.top = scope.position.top + element.prop('offsetHeight');

                } else {
                  resetMatches();
                }
                isLoadingSetter(originalScope, false);
              }
            }, function(){
              resetMatches();
              isLoadingSetter(originalScope, false);
            });
          };

          resetMatches();

          //we need to propagate user's query so we can higlight matches
          scope.query = undefined;

          //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
          var timeoutPromise;

          //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
          //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
          modelCtrl.$parsers.unshift(function (inputValue) {

            // ahneo :: new (set input value to empty string if it contains " " string value)
            if (inputValue === " ") {
                inputValue = "";
                modelCtrl.$setViewValue("");
            }

            hasFocus = true;

            // ahneo :: before
            //if (inputValue && inputValue.length >= minSearch) {
            // ahneo :: after (add new condition to get matches for min search = 0)
            if (minSearch === 0 || inputValue && inputValue.length >= minSearch) {
              if (waitTime > 0) {
                if (timeoutPromise) {
                  $timeout.cancel(timeoutPromise);//cancel previous timeout
                }
                timeoutPromise = $timeout(function () {
                  getMatchesAsync(inputValue);
                }, waitTime);
              } else {
                getMatchesAsync(inputValue);
              }
            } else {
              isLoadingSetter(originalScope, false);
              resetMatches();
            }

            if (isEditable) {
              return inputValue;
            } else {
              if (!inputValue) {
                // Reset in case user had typed something previously.
                modelCtrl.$setValidity('editable', true);
                return inputValue;
              } else {
                modelCtrl.$setValidity('editable', false);
                return undefined;
              }
            }
          });

          modelCtrl.$formatters.push(function (modelValue) {

            var candidateViewValue, emptyViewValue;
            var locals = {};

            if (inputFormatter) {

              locals['$model'] = modelValue;
              return inputFormatter(originalScope, locals);

            } else {

              //it might happen that we don't have enough info to properly render input value
              //we need to check for this situation and simply return model value if we can't apply custom formatting
              locals[parserResult.itemName] = modelValue;
              candidateViewValue = parserResult.viewMapper(originalScope, locals);
              locals[parserResult.itemName] = undefined;
              emptyViewValue = parserResult.viewMapper(originalScope, locals);

              return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
            }
          });

          scope.select = function (activeIdx) {
            //called from within the $digest() cycle
            var locals = {};
            var model, item;

            locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
            model = parserResult.modelMapper(originalScope, locals);
            $setModelValue(originalScope, model);
            modelCtrl.$setValidity('editable', true);

            onSelectCallback(originalScope, {
              $item: item,
              $model: model,
              $label: parserResult.viewMapper(originalScope, locals)
            });

            resetMatches();

            //return focus to the input element if a mach was selected via a mouse click event
            element[0].focus();
          };

          //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
          element.bind('keydown', function (evt) {

            //typeahead is open and an "interesting" key was pressed
            if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
              return;
            }

            evt.preventDefault();

            if (evt.which === 40) {
              scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
              scope.$digest();

            } else if (evt.which === 38) {
              scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
              scope.$digest();

            } else if (evt.which === 13 || evt.which === 9) {
              scope.$apply(function () {
                scope.select(scope.activeIdx);
              });

            } else if (evt.which === 27) {
              evt.stopPropagation();

              resetMatches();
              scope.$digest();
            }
          });

          element.bind('blur', function (evt) {
            hasFocus = false;
          });

          // ahneo :: new (bind element to focus event to trigger modelCtrl.$parsers.unshift method)
          element.bind('focus', function (evt) {
              if (modelCtrl.$viewValue === "") {
                  modelCtrl.$setViewValue(" ");
              }
          });

          // Keep reference to click handler to unbind it.
          var dismissClickHandler = function (evt) {
            if (element[0] !== evt.target) {
              resetMatches();
              scope.$digest();
            }
          };

          $document.bind('click', dismissClickHandler);

          originalScope.$on('$destroy', function(){
            $document.unbind('click', dismissClickHandler);
          });

          var $popup = $compile(popUpEl)(scope);
          if ( appendToBody ) {
            $document.find('body').append($popup);
          } else {
            element.after($popup);
          }
        }
      };

    }])

      .directive('typeaheadPopup', function () {
        return {
          restrict:'EA',
          scope:{
            matches:'=',
            query:'=',
            active:'=',
            position:'=',
            select:'&'
          },
          replace:true,
          templateUrl:'template/typeahead/typeahead-popup.html',
          link:function (scope, element, attrs) {

            scope.templateUrl = attrs.templateUrl;

            scope.isOpen = function () {
              return scope.matches.length > 0;
            };

            scope.isActive = function (matchIdx) {
              return scope.active == matchIdx;
            };

            scope.selectActive = function (matchIdx) {
              scope.active = matchIdx;
            };

            scope.selectMatch = function (activeIdx) {
              scope.select({activeIdx:activeIdx});
            };
          }
        };
      })

      .directive('typeaheadMatch', ['$http', '$templateCache', '$compile', '$parse', function ($http, $templateCache, $compile, $parse) {
        return {
          restrict:'EA',
          scope:{
            index:'=',
            match:'=',
            query:'='
          },
          link:function (scope, element, attrs) {
            var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
            $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
               element.replaceWith($compile(tplContent.trim())(scope));
            });
          }
        };
      }])

      .filter('typeaheadHighlight', function() {

        function escapeRegexp(queryToEscape) {
          return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        }

        return function(matchItem, query) {
          return query ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
        };
      });
    angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/accordion/accordion-group.html",
        "<div class=\"panel panel-default\">\n" +
        "  <div class=\"panel-heading\">\n" +
        "    <h4 class=\"panel-title\">\n" +
        "      <a class=\"accordion-toggle\" ng-click=\"isOpen = !isOpen\" accordion-transclude=\"heading\">{{heading}}</a>\n" +
        "    </h4>\n" +
        "  </div>\n" +
        "  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n" +
        "     <div class=\"panel-body\" ng-transclude></div>\n" +
        "  </div>\n" +
        "</div>");
    }]);

    angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/accordion/accordion.html",
        "<div class=\"panel-group\" ng-transclude></div>");
    }]);

    angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/alert/alert.html",
        "<div class='alert' ng-class='\"alert-\" + (type || \"warning\")'>\n" +
        "    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n" +
        "    <div ng-transclude></div>\n" +
        "</div>\n" +
        "");
    }]);

    angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/carousel/carousel.html",
        "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">\n" +
        "    <ol class=\"carousel-indicators\" ng-show=\"slides().length > 1\">\n" +
        "        <li ng-repeat=\"slide in slides()\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
        "    </ol>\n" +
        "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
        "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides().length > 1\"><span class=\"icon-prev\"></span></a>\n" +
        "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides().length > 1\"><span class=\"icon-next\"></span></a>\n" +
        "</div>\n" +
        "");
    }]);

    angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/carousel/slide.html",
        "<div ng-class=\"{\n" +
        "    'active': leaving || (active && !entering),\n" +
        "    'prev': (next || active) && direction=='prev',\n" +
        "    'next': (next || active) && direction=='next',\n" +
        "    'right': direction=='prev',\n" +
        "    'left': direction=='next'\n" +
        "  }\" class=\"item text-center\" ng-transclude></div>\n" +
        "");
    }]);
    // Datepicker template modified
    // This was customised here as per this post: http://stackoverflow.com/questions/22865429/angular-ui-bootstrap-current-date-today-highlight-without-selecting


    angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/datepicker.html",
        "<table>\n" +
        "  <thead>\n" +
        "    <tr>\n" +
        "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
        "      <th colspan=\"{{rows[0].length - 2 + showWeekNumbers}}\"><button type=\"button\" class=\"btn btn-default btn-sm btn-block\" ng-click=\"toggleMode()\"><strong>{{title}}</strong></button></th>\n" +
        "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
        "    </tr>\n" +
        "    <tr ng-show=\"labels.length > 0\" class=\"h6\">\n" +
        "      <th ng-show=\"showWeekNumbers\" class=\"text-center\">#</th>\n" +
        "      <th ng-repeat=\"label in labels\" class=\"text-center\">{{label}}</th>\n" +
        "    </tr>\n" +
        "  </thead>\n" +
        "  <tbody>\n" +
        "    <tr ng-repeat=\"row in rows\">\n" +
        "      <td ng-show=\"showWeekNumbers\" class=\"text-center\"><em>{{ getWeekNumber(row) }}</em></td>\n" +
        "      <td ng-repeat=\"dt in row\" class=\"text-center\">\n" +
        "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, 'btn-today':dt.CurrentDay}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\"><span ng-class=\"{'text-muted': dt.secondary}\">{{dt.label}}</span></button>\n" +
        "      </td>\n" +
        "    </tr>\n" +
        "  </tbody>\n" +
        "</table>\n" +
        "");
    }]);

    angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/popup.html",
        "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n" +
        "   <li ng-transclude></li>\n" +
        "   <li ng-show=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
        "       <span class=\"btn-group\">\n" +
        "           <button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"today()\">{{currentText}}</button>\n" +
        "           <button type=\"button\" class=\"btn btn-sm btn-default\" ng-click=\"showWeeks = ! showWeeks\" ng-class=\"{active: showWeeks}\">{{toggleWeeksText}}</button>\n" +
        "           <button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"clear()\">{{clearText}}</button>\n" +
        "       </span>\n" +
        "       <button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"isOpen = false\">{{closeText}}</button>\n" +
        "   </li>\n" +
        "</ul>\n" +
        "");
    }]);

    angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/modal/backdrop.html",
        "<div class=\"modal-backdrop fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1040 + index*10}\"></div>");
    }]);

    angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/modal/window.html",
        "<div tabindex=\"-1\" class=\"modal fade {{ windowClass }}\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
        "    <div class=\"modal-dialog\"><div class=\"modal-content\" ng-transclude></div></div>\n" +
        "</div>");
    }]);

    angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/pagination/pager.html",
        "<ul class=\"pager\">\n" +
        "  <li ng-repeat=\"page in pages\" ng-class=\"{disabled: page.disabled, previous: page.previous, next: page.next}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
        "</ul>");
    }]);

    angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/pagination/pagination.html",
        "<ul class=\"pagination\">\n" +
        "  <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
        "</ul>");
    }]);

    angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
        "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"tooltip-arrow\"></div>\n" +
        "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
        "</div>\n" +
        "");
    }]);

    angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tooltip/tooltip-popup.html",
        "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"tooltip-arrow\"></div>\n" +
        "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
        "</div>\n" +
        "");
    }]);

    angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/popover/popover.html",
        "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"arrow\"></div>\n" +
        "\n" +
        "  <div class=\"popover-inner\">\n" +
        "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
        "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
    }]);

    angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/progressbar/bar.html",
        "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" ng-transclude></div>");
    }]);

    angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/progressbar/progress.html",
        "<div class=\"progress\" ng-transclude></div>");
    }]);

    angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/progressbar/progressbar.html",
        "<div class=\"progress\"><div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" ng-transclude></div></div>");
    }]);

    angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/rating/rating.html",
        "<span ng-mouseleave=\"reset()\">\n" +
        "    <i ng-repeat=\"r in range\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < val && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\"></i>\n" +
        "</span>");
    }]);

    angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tabs/tab.html",
        "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
        "  <a ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
        "</li>\n" +
        "");
    }]);

    angular.module("template/tabs/tabset-titles.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tabs/tabset-titles.html",
        "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n" +
        "</ul>\n" +
        "");
    }]);

    angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tabs/tabset.html",
        "\n" +
        "<div class=\"tabbable\">\n" +
        "  <ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
        "  <div class=\"tab-content\">\n" +
        "    <div class=\"tab-pane\" \n" +
        "         ng-repeat=\"tab in tabs\" \n" +
        "         ng-class=\"{active: tab.active}\"\n" +
        "         tab-content-transclude=\"tab\">\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
    }]);

    angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/timepicker/timepicker.html",
        "<table>\n" +
        "   <tbody>\n" +
        "       <tr class=\"text-center\">\n" +
        "           <td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
        "           <td>&nbsp;</td>\n" +
        "           <td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
        "           <td ng-show=\"showMeridian\"></td>\n" +
        "       </tr>\n" +
        "       <tr>\n" +
        "           <td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
        "               <input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
        "           </td>\n" +
        "           <td>:</td>\n" +
        "           <td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
        "               <input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
        "           </td>\n" +
        "           <td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
        "       </tr>\n" +
        "       <tr class=\"text-center\">\n" +
        "           <td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
        "           <td>&nbsp;</td>\n" +
        "           <td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
        "           <td ng-show=\"showMeridian\"></td>\n" +
        "       </tr>\n" +
        "   </tbody>\n" +
        "</table>\n" +
        "");
    }]);

    angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/typeahead/typeahead-match.html",
        "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
    }]);

    angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/typeahead/typeahead-popup.html",
        "<ul class=\"dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" +
        "    <li ng-repeat=\"match in matches\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\">\n" +
        "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
        "    </li>\n" +
        "</ul>");
    }]);

})();