!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["custom-button"]=t():e["custom-button"]=t()}(window,function(){return n={},o.m=r=[function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return n});var u=r(0),c=r.n(u);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=a(r);return e=n?(e=a(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==o(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(o,u["Component"]);var e,t,r,n=l(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){return c.a.createElement("button",null,"Custom Button")}}])&&f(e.prototype,t),r&&f(e,r),o}()},function(e,t,r){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=r(3),n="function"==typeof Symbol&&Symbol.for,s=n?Symbol.for("react.element"):60103,p=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,i=n?Symbol.for("react.context"):60110,y=n?Symbol.for("react.forward_ref"):60112,r=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.memo"):60115,d=n?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function g(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||v}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==l(e)&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;n=_.prototype=new j;n.constructor=_,a(n,g.prototype),n.isPureReactComponent=!0;var O={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var i=Array(f),l=0;l<f;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:O.current}}function k(e){return"object"===l(e)&&null!==e&&e.$$typeof===s}var E=/\/+/g,C=[];function R(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,C.length<10&&C.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var u=l(t);"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case s:case p:c=!0}}if(c)return n(o,t,""===r?"."+M(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var i=r+M(u=t[f],f);c+=e(u,i,n,o)}else if("function"==typeof(i=null!==t&&"object"===l(t)&&"function"==typeof(i=m&&t[m]||t["@@iterator"])?i:null))for(t=i.call(t),f=0;!(u=t.next()).done;)c+=e(u=u.value,i=r+M(u,f++),n,o);else if("object"===u)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function M(e,t){return"object"===l(e)&&null!==e&&null!=e.key?(e=e.key,r={"=":"=0",":":"=2"},"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function I(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,function(e){return e}):null!=e&&(k(e)&&(r=o+(!(o=e).key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r,e={$$typeof:s,type:o.type,key:r,ref:o.ref,props:o.props,_owner:o._owner}),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(E,"$&/")+"/"),A(e,T,t=R(t,u,n,o)),$(t)}var U={current:null};function D(){var e=U.current;if(null===e)throw Error(h(321));return e}n={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,I,t=R(null,null,t,r)),$(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(e){return e}),t},only:function(e){if(!k(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=u,t.Suspense=r,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n,o=a({},e.props),u=e.key,c=e.ref,f=e._owner;if(null!=t)for(i in void 0!==t.ref&&(c=t.ref,f=O.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps&&(n=e.type.defaultProps),t)w.call(t,i)&&!P.hasOwnProperty(i)&&(o[i]=(void 0===t[i]&&void 0!==n?n:t)[i]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){n=Array(i);for(var l=0;l<i;l++)n[l]=arguments[l+2];o.children=n}return{$$typeof:s,type:e.type,key:u,ref:c,props:o,_owner:f}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:y,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return D().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,r){return D().useReducer(e,t,r)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="16.13.1"},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join("")?void 0:1}catch(e){return}}()?Object.assign:function(e,t){for(var r,n,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))l.call(r,c)&&(o[c]=r[c]);if(i){n=i(r);for(var f=0;f<n.length;f++)a.call(r,n[f])&&(o[n[f]]=r[n[f]])}}return o}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});