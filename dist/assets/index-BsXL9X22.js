(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function eM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R0={exports:{}},Cu={},P0={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),tM=Symbol.for("react.portal"),nM=Symbol.for("react.fragment"),iM=Symbol.for("react.strict_mode"),rM=Symbol.for("react.profiler"),sM=Symbol.for("react.provider"),oM=Symbol.for("react.context"),aM=Symbol.for("react.forward_ref"),lM=Symbol.for("react.suspense"),uM=Symbol.for("react.memo"),cM=Symbol.for("react.lazy"),Rp=Symbol.iterator;function fM(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,D0={};function uo(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||b0}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I0(){}I0.prototype=uo.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||b0}var Yd=Xd.prototype=new I0;Yd.constructor=Xd;L0(Yd,uo.prototype);Yd.isPureReactComponent=!0;var Pp=Array.isArray,N0=Object.prototype.hasOwnProperty,qd={current:null},U0={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)N0.call(e,i)&&!U0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:s,ref:o,props:r,_owner:qd.current}}function dM(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function hM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bp=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hM(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case tM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+oc(o,0):i,Pp(r)?(n="",t!=null&&(n=t.replace(bp,"$&/")+"/"),Cl(r,e,n,"",function(u){return u})):r!=null&&(Kd(r)&&(r=dM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+oc(s,a);o+=Cl(s,e,n,l,r)}else if(l=fM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+oc(s,a++),o+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function pM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Rl={transition:null},mM={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:qd};function O0(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=uo;ke.Fragment=nM;ke.Profiler=rM;ke.PureComponent=Xd;ke.StrictMode=iM;ke.Suspense=lM;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mM;ke.act=O0;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=L0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)N0.call(e,l)&&!U0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:oM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sM,_context:t},t.Consumer=t};ke.createElement=F0;ke.createFactory=function(t){var e=F0.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:aM,render:t}};ke.isValidElement=Kd;ke.lazy=function(t){return{$$typeof:cM,_payload:{_status:-1,_result:t},_init:pM}};ke.memo=function(t,e){return{$$typeof:uM,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};ke.unstable_act=O0;ke.useCallback=function(t,e){return Qt.current.useCallback(t,e)};ke.useContext=function(t){return Qt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Qt.current.useEffect(t,e)};ke.useId=function(){return Qt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Qt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};ke.useRef=function(t){return Qt.current.useRef(t)};ke.useState=function(t){return Qt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Qt.current.useTransition()};ke.version="18.3.1";P0.exports=ke;var me=P0.exports;const gM=eM(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=me,_M=Symbol.for("react.element"),yM=Symbol.for("react.fragment"),xM=Object.prototype.hasOwnProperty,SM=vM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MM={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xM.call(e,i)&&!MM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_M,type:t,key:s,ref:o,props:r,_owner:SM.current}}Cu.Fragment=yM;Cu.jsx=k0;Cu.jsxs=k0;R0.exports=Cu;var b=R0.exports,Af={},B0={exports:{}},Sn={},z0={exports:{}},V0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Y){var Z=I.length;I.push(Y);e:for(;0<Z;){var oe=Z-1>>>1,xe=I[oe];if(0<r(xe,Y))I[oe]=Y,I[Z]=xe,Z=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Y=I[0],Z=I.pop();if(Z!==Y){I[0]=Z;e:for(var oe=0,xe=I.length,Ge=xe>>>1;oe<Ge;){var G=2*(oe+1)-1,ne=I[G],de=G+1,ae=I[de];if(0>r(ne,Z))de<xe&&0>r(ae,ne)?(I[oe]=ae,I[de]=Z,oe=de):(I[oe]=ne,I[G]=Z,oe=G);else if(de<xe&&0>r(ae,Z))I[oe]=ae,I[de]=Z,oe=de;else break e}}return Y}function r(I,Y){var Z=I.sortIndex-Y.sortIndex;return Z!==0?Z:I.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=I)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function S(I){if(y=!1,v(I),!_)if(n(l)!==null)_=!0,j(C);else{var Y=n(u);Y!==null&&W(S,Y.startTime-I)}}function C(I,Y){_=!1,y&&(y=!1,h(R),R=-1),p=!0;var Z=d;try{for(v(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||I&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var xe=oe(f.expirationTime<=Y);Y=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),v(Y)}else i(l);f=n(l)}if(f!==null)var Ge=!0;else{var G=n(u);G!==null&&W(S,G.startTime-Y),Ge=!1}return Ge}finally{f=null,d=Z,p=!1}}var w=!1,A=null,R=-1,T=5,x=-1;function L(){return!(t.unstable_now()-x<T)}function H(){if(A!==null){var I=t.unstable_now();x=I;var Y=!0;try{Y=A(!0,I)}finally{Y?z():(w=!1,A=null)}}else w=!1}var z;if(typeof g=="function")z=function(){g(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,K=q.port2;q.port1.onmessage=H,z=function(){K.postMessage(null)}}else z=function(){m(H,0)};function j(I){A=I,w||(w=!0,z())}function W(I,Y){R=m(function(){I(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,j(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var Z=d;d=Y;try{return I()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=d;d=I;try{return Y()}finally{d=Z}},t.unstable_scheduleCallback=function(I,Y,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Z+xe,I={id:c++,callback:Y,priorityLevel:I,startTime:Z,expirationTime:xe,sortIndex:-1},Z>oe?(I.sortIndex=Z,e(u,I),n(l)===null&&I===n(u)&&(y?(h(R),R=-1):y=!0,W(S,Z-oe))):(I.sortIndex=xe,e(l,I),_||p||(_=!0,j(C))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var Y=d;return function(){var Z=d;d=Y;try{return I.apply(this,arguments)}finally{d=Z}}}})(V0);z0.exports=V0;var EM=z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TM=me,yn=EM;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,Qo={};function Zr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Qo[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,wM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Dp={};function AM(t){return Cf.call(Dp,t)?!0:Cf.call(Lp,t)?!1:wM.test(t)?Dp[t]=!0:(Lp[t]=!0,!1)}function CM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RM(t,e,n,i){if(e===null||typeof e>"u"||CM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Zd);zt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Zd);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Zd);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RM(e,n,r,i)&&(n=null),i||r===null?AM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=TM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),ys=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),W0=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),bf=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),j0=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,ac;function Lo(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function PM(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function Lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ys:return"Portal";case Rf:return"Profiler";case Jd:return"StrictMode";case Pf:return"Suspense";case bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:Lf(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return Lf(t(e))}catch{}}return null}function bM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LM(t){var e=X0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=LM(t))}function Y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=X0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function If(t,e){q0(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Do(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function K0(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DM=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){DM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function Q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IM=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Of(t,e){if(e){if(IM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,ks=null,Bs=null;function kp(t){if(t=Ma(t)){if(typeof zf!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Du(e),zf(t.stateNode,t.type,e))}}function e_(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function t_(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function n_(t,e){return t(e)}function i_(){}var cc=!1;function r_(t,e,n){if(cc)return t(e,n);cc=!0;try{return n_(t,e,n)}finally{cc=!1,(ks!==null||Bs!==null)&&(i_(),t_())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Vf=!1;if(Ai)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Vf=!1}function NM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var zo=!1,Wl=null,jl=!1,Hf=null,UM={onError:function(t){zo=!0,Wl=t}};function FM(t,e,n,i,r,s,o,a,l){zo=!1,Wl=null,NM.apply(UM,arguments)}function OM(t,e,n,i,r,s,o,a,l){if(FM.apply(this,arguments),zo){if(zo){var u=Wl;zo=!1,Wl=null}else throw Error(te(198));jl||(jl=!0,Hf=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(Qr(t)!==t)throw Error(te(188))}function kM(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bp(r),t;if(s===i)return Bp(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function o_(t){return t=kM(t),t!==null?a_(t):null}function a_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a_(t);if(e!==null)return e;t=t.sibling}return null}var l_=yn.unstable_scheduleCallback,zp=yn.unstable_cancelCallback,BM=yn.unstable_shouldYield,zM=yn.unstable_requestPaint,xt=yn.unstable_now,VM=yn.unstable_getCurrentPriorityLevel,ih=yn.unstable_ImmediatePriority,u_=yn.unstable_UserBlockingPriority,Xl=yn.unstable_NormalPriority,HM=yn.unstable_LowPriority,c_=yn.unstable_IdlePriority,Ru=null,ri=null;function GM(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:XM,WM=Math.log,jM=Math.LN2;function XM(t){return t>>>=0,t===0?32:31-(WM(t)/jM|0)|0}var za=64,Va=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function YM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=YM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f_(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function KM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function d_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h_,sh,p_,m_,g_,Wf=!1,Ha=[],$i=null,Zi=null,Qi=null,ta=new Map,na=new Map,Wi=[],$M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ZM(t,e,n,i,r){switch(e){case"focusin":return $i=yo($i,t,e,n,i,r),!0;case"dragenter":return Zi=yo(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=yo(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,yo(ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,yo(na.get(s)||null,t,e,n,i,r)),!0}return!1}function v_(t){var e=Ur(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=s_(n),e!==null){t.blockedOn=e,g_(t.priority,function(){p_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bf=i,n.target.dispatchEvent(i),Bf=null}else return e=Ma(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Pl(t)&&n.delete(e)}function QM(){Wf=!1,$i!==null&&Pl($i)&&($i=null),Zi!==null&&Pl(Zi)&&(Zi=null),Qi!==null&&Pl(Qi)&&(Qi=null),ta.forEach(Hp),na.forEach(Hp)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,QM)))}function ia(t){function e(r){return xo(r,t)}if(0<Ha.length){xo(Ha[0],t);for(var n=1;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&xo($i,t),Zi!==null&&xo(Zi,t),Qi!==null&&xo(Qi,t),ta.forEach(e),na.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)v_(n),n.blockedOn===null&&Wi.shift()}var zs=Di.ReactCurrentBatchConfig,ql=!0;function JM(t,e,n,i){var r=Je,s=zs.transition;zs.transition=null;try{Je=1,oh(t,e,n,i)}finally{Je=r,zs.transition=s}}function eE(t,e,n,i){var r=Je,s=zs.transition;zs.transition=null;try{Je=4,oh(t,e,n,i)}finally{Je=r,zs.transition=s}}function oh(t,e,n,i){if(ql){var r=jf(t,e,n,i);if(r===null)Sc(t,e,i,Kl,n),Vp(t,i);else if(ZM(r,t,e,n,i))i.stopPropagation();else if(Vp(t,i),e&4&&-1<$M.indexOf(t)){for(;r!==null;){var s=Ma(r);if(s!==null&&h_(s),s=jf(t,e,n,i),s===null&&Sc(t,e,i,Kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Sc(t,e,i,null,n)}}var Kl=null;function jf(t,e,n,i){if(Kl=null,t=nh(i),t=Ur(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function __(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VM()){case ih:return 1;case u_:return 4;case Xl:case HM:return 16;case c_:return 536870912;default:return 16}default:return 16}}var Yi=null,ah=null,bl=null;function y_(){if(bl)return bl;var t,e=ah,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Gp(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:Gp,this.isPropagationStopped=Gp,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=Mn(co),Sa=dt({},co,{view:0,detail:0}),tE=Mn(Sa),dc,hc,So,Pu=dt({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(dc=t.screenX-So.screenX,hc=t.screenY-So.screenY):hc=dc=0,So=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Wp=Mn(Pu),nE=dt({},Pu,{dataTransfer:0}),iE=Mn(nE),rE=dt({},Sa,{relatedTarget:0}),pc=Mn(rE),sE=dt({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),oE=Mn(sE),aE=dt({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lE=Mn(aE),uE=dt({},co,{data:0}),jp=Mn(uE),cE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dE[t])?!!e[t]:!1}function uh(){return hE}var pE=dt({},Sa,{key:function(t){if(t.key){var e=cE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mE=Mn(pE),gE=dt({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Mn(gE),vE=dt({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),_E=Mn(vE),yE=dt({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),xE=Mn(yE),SE=dt({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=Mn(SE),EE=[9,13,27,32],ch=Ai&&"CompositionEvent"in window,Vo=null;Ai&&"documentMode"in document&&(Vo=document.documentMode);var TE=Ai&&"TextEvent"in window&&!Vo,x_=Ai&&(!ch||Vo&&8<Vo&&11>=Vo),Yp=" ",qp=!1;function S_(t,e){switch(t){case"keyup":return EE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function wE(t,e){switch(t){case"compositionend":return M_(e);case"keypress":return e.which!==32?null:(qp=!0,Yp);case"textInput":return t=e.data,t===Yp&&qp?null:t;default:return null}}function AE(t,e){if(Ss)return t==="compositionend"||!ch&&S_(t,e)?(t=y_(),bl=ah=Yi=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x_&&e.locale!=="ko"?null:e.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CE[t.type]:e==="textarea"}function E_(t,e,n,i){e_(i),e=$l(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ho=null,ra=null;function RE(t){N_(t,0)}function bu(t){var e=Ts(t);if(Y0(e))return t}function PE(t,e){if(t==="change")return e}var T_=!1;if(Ai){var mc;if(Ai){var gc="oninput"in document;if(!gc){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),gc=typeof $p.oninput=="function"}mc=gc}else mc=!1;T_=mc&&(!document.documentMode||9<document.documentMode)}function Zp(){Ho&&(Ho.detachEvent("onpropertychange",w_),ra=Ho=null)}function w_(t){if(t.propertyName==="value"&&bu(ra)){var e=[];E_(e,ra,t,nh(t)),r_(RE,e)}}function bE(t,e,n){t==="focusin"?(Zp(),Ho=e,ra=n,Ho.attachEvent("onpropertychange",w_)):t==="focusout"&&Zp()}function LE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bu(ra)}function DE(t,e){if(t==="click")return bu(e)}function IE(t,e){if(t==="input"||t==="change")return bu(e)}function NE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:NE;function sa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cf.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UE(t){var e=C_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(i!==null&&fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jp(n,s);var o=Jp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FE=Ai&&"documentMode"in document&&11>=document.documentMode,Ms=null,Xf=null,Go=null,Yf=!1;function em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yf||Ms==null||Ms!==Gl(i)||(i=Ms,"selectionStart"in i&&fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Go&&sa(Go,i)||(Go=i,i=$l(Xf,"onSelect"),0<i.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},vc={},R_={};Ai&&(R_=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Lu(t){if(vc[t])return vc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R_)return vc[t]=e[n];return t}var P_=Lu("animationend"),b_=Lu("animationiteration"),L_=Lu("animationstart"),D_=Lu("transitionend"),I_=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){I_.set(t,e),Zr(e,[t])}for(var _c=0;_c<tm.length;_c++){var yc=tm[_c],OE=yc.toLowerCase(),kE=yc[0].toUpperCase()+yc.slice(1);hr(OE,"on"+kE)}hr(P_,"onAnimationEnd");hr(b_,"onAnimationIteration");hr(L_,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(D_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,OM(i,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;nm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;nm(r,a,u),s=l}}}if(jl)throw t=Hf,jl=!1,Hf=null,t}function rt(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var i=t+"__bubble";n.has(i)||(U_(e,t,2,!1),n.add(i))}function xc(t,e,n){var i=0;e&&(i|=4),U_(n,t,i,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[ja]){t[ja]=!0,H0.forEach(function(n){n!=="selectionchange"&&(BE.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,xc("selectionchange",!1,e))}}function U_(t,e,n,i){switch(__(e)){case 1:var r=JM;break;case 4:r=eE;break;default:r=oh}n=r.bind(null,e,n,t),r=void 0,!Vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Sc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}r_(function(){var u=s,c=nh(n),f=[];e:{var d=I_.get(t);if(d!==void 0){var p=lh,_=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=mE;break;case"focusin":_="focus",p=pc;break;case"focusout":_="blur",p=pc;break;case"beforeblur":case"afterblur":p=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_E;break;case P_:case b_:case L_:p=oE;break;case D_:p=xE;break;case"scroll":p=tE;break;case"wheel":p=ME;break;case"copy":case"cut":case"paste":p=lE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xp}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=ea(g,h),S!=null&&y.push(aa(g,S,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,_,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Bf&&(_=n.relatedTarget||n.fromElement)&&(Ur(_)||_[Ci]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Ur(_):null,_!==null&&(m=Qr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Wp,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xp,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:Ts(p),v=_==null?d:Ts(_),d=new y(S,g+"leave",p,n,c),d.target=m,d.relatedTarget=v,S=null,Ur(c)===u&&(y=new y(h,g+"enter",_,n,c),y.target=v,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,h=_,g=0,v=y;v;v=es(v))g++;for(v=0,S=h;S;S=es(S))v++;for(;0<g-v;)y=es(y),g--;for(;0<v-g;)h=es(h),v--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=es(y),h=es(h)}y=null}else y=null;p!==null&&im(f,d,p,y,!1),_!==null&&m!==null&&im(f,m,_,y,!0)}}e:{if(d=u?Ts(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=PE;else if(Kp(d))if(T_)C=IE;else{C=LE;var w=bE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=DE);if(C&&(C=C(t,u))){E_(f,C,n,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Nf(d,"number",d.value)}switch(w=u?Ts(u):window,t){case"focusin":(Kp(w)||w.contentEditable==="true")&&(Ms=w,Xf=u,Go=null);break;case"focusout":Go=Xf=Ms=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,em(f,n,c);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":em(f,n,c)}var A;if(ch)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ss?S_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(x_&&n.locale!=="ko"&&(Ss||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ss&&(A=y_()):(Yi=c,ah="value"in Yi?Yi.value:Yi.textContent,Ss=!0)),w=$l(u,R),0<w.length&&(R=new jp(R,t,null,n,c),f.push({event:R,listeners:w}),A?R.data=A:(A=M_(n),A!==null&&(R.data=A)))),(A=TE?wE(t,n):AE(t,n))&&(u=$l(u,"onBeforeInput"),0<u.length&&(c=new jp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}N_(f,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(t,n),s!=null&&i.unshift(aa(t,s,r)),s=ea(t,e),s!=null&&i.push(aa(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):r||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zE=/\r\n?/g,VE=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(zE,`
`).replace(VE,"")}function Xa(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(te(425))}function Zl(){}var qf=null,Kf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zf=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,GE=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(WE)}:Zf;function WE(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ti="__reactFiber$"+fo,la="__reactProps$"+fo,Ci="__reactContainer$"+fo,Qf="__reactEvents$"+fo,jE="__reactListeners$"+fo,XE="__reactHandles$"+fo;function Ur(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=om(t);t!==null;){if(n=t[ti])return n;t=om(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[ti]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Du(t){return t[la]||null}var Jf=[],ws=-1;function pr(t){return{current:t}}function ot(t){0>ws||(t.current=Jf[ws],Jf[ws]=null,ws--)}function nt(t,e){ws++,Jf[ws]=t.current,t.current=e}var ar={},Yt=pr(ar),sn=pr(!1),jr=ar;function Ys(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Ql(){ot(sn),ot(Yt)}function am(t,e,n){if(Yt.current!==ar)throw Error(te(168));nt(Yt,e),nt(sn,n)}function F_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,bM(t)||"Unknown",r));return dt({},n,i)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,jr=Yt.current,nt(Yt,t),nt(sn,sn.current),!0}function lm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=F_(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,ot(sn),ot(Yt),nt(Yt,t)):ot(sn),nt(sn,n)}var vi=null,Iu=!1,Ec=!1;function O_(t){vi===null?vi=[t]:vi.push(t)}function YE(t){Iu=!0,O_(t)}function mr(){if(!Ec&&vi!==null){Ec=!0;var t=0,e=Je;try{var n=vi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Iu=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),l_(ih,mr),r}finally{Je=e,Ec=!1}}return null}var As=[],Cs=0,eu=null,tu=0,Cn=[],Rn=0,Xr=null,yi=1,xi="";function Cr(t,e){As[Cs++]=tu,As[Cs++]=eu,eu=t,tu=e}function k_(t,e,n){Cn[Rn++]=yi,Cn[Rn++]=xi,Cn[Rn++]=Xr,Xr=t;var i=yi;t=xi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-jn(e)+r|n<<r|i,xi=s+t}else yi=1<<s|n<<r|i,xi=t}function dh(t){t.return!==null&&(Cr(t,1),k_(t,1,0))}function hh(t){for(;t===eu;)eu=As[--Cs],As[Cs]=null,tu=As[--Cs],As[Cs]=null;for(;t===Xr;)Xr=Cn[--Rn],Cn[Rn]=null,xi=Cn[--Rn],Cn[Rn]=null,yi=Cn[--Rn],Cn[Rn]=null}var gn=null,mn=null,at=!1,Gn=null;function B_(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(at){var e=mn;if(e){var n=e;if(!um(t,e)){if(ed(t))throw Error(te(418));e=Ji(n.nextSibling);var i=gn;e&&um(t,e)?B_(i,n):(t.flags=t.flags&-4097|2,at=!1,gn=t)}}else{if(ed(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,gn=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Ya(t){if(t!==gn)return!1;if(!at)return cm(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=mn)){if(ed(t))throw z_(),Error(te(418));for(;e;)B_(t,e),e=Ji(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Ji(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=mn;t;)t=Ji(t.nextSibling)}function qs(){mn=gn=null,at=!1}function ph(t){Gn===null?Gn=[t]:Gn.push(t)}var qE=Di.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function V_(t){function e(h,g){if(t){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=ir(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,v,S){return g===null||g.tag!==6?(g=bc(v,h.mode,S),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,S){var C=v.type;return C===xs?c(h,g,v.props.children,S,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hi&&fm(C)===g.type)?(S=r(g,v.props),S.ref=Mo(h,g,v),S.return=h,S):(S=kl(v.type,v.key,v.props,null,h.mode,S),S.ref=Mo(h,g,v),S.return=h,S)}function u(h,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Lc(v,h.mode,S),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function c(h,g,v,S,C){return g===null||g.tag!==7?(g=Hr(v,h.mode,S,C),g.return=h,g):(g=r(g,v),g.return=h,g)}function f(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=bc(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:return v=kl(g.type,g.key,g.props,null,h.mode,v),v.ref=Mo(h,null,g),v.return=h,v;case ys:return g=Lc(g,h.mode,v),g.return=h,g;case Hi:var S=g._init;return f(h,S(g._payload),v)}if(Do(g)||vo(g))return g=Hr(g,h.mode,v,null),g.return=h,g;qa(h,g)}return null}function d(h,g,v,S){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oa:return v.key===C?l(h,g,v,S):null;case ys:return v.key===C?u(h,g,v,S):null;case Hi:return C=v._init,d(h,g,C(v._payload),S)}if(Do(v)||vo(v))return C!==null?null:c(h,g,v,S,null);qa(h,v)}return null}function p(h,g,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(g,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oa:return h=h.get(S.key===null?v:S.key)||null,l(g,h,S,C);case ys:return h=h.get(S.key===null?v:S.key)||null,u(g,h,S,C);case Hi:var w=S._init;return p(h,g,v,w(S._payload),C)}if(Do(S)||vo(S))return h=h.get(v)||null,c(g,h,S,C,null);qa(g,S)}return null}function _(h,g,v,S){for(var C=null,w=null,A=g,R=g=0,T=null;A!==null&&R<v.length;R++){A.index>R?(T=A,A=null):T=A.sibling;var x=d(h,A,v[R],S);if(x===null){A===null&&(A=T);break}t&&A&&x.alternate===null&&e(h,A),g=s(x,g,R),w===null?C=x:w.sibling=x,w=x,A=T}if(R===v.length)return n(h,A),at&&Cr(h,R),C;if(A===null){for(;R<v.length;R++)A=f(h,v[R],S),A!==null&&(g=s(A,g,R),w===null?C=A:w.sibling=A,w=A);return at&&Cr(h,R),C}for(A=i(h,A);R<v.length;R++)T=p(A,h,R,v[R],S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?R:T.key),g=s(T,g,R),w===null?C=T:w.sibling=T,w=T);return t&&A.forEach(function(L){return e(h,L)}),at&&Cr(h,R),C}function y(h,g,v,S){var C=vo(v);if(typeof C!="function")throw Error(te(150));if(v=C.call(v),v==null)throw Error(te(151));for(var w=C=null,A=g,R=g=0,T=null,x=v.next();A!==null&&!x.done;R++,x=v.next()){A.index>R?(T=A,A=null):T=A.sibling;var L=d(h,A,x.value,S);if(L===null){A===null&&(A=T);break}t&&A&&L.alternate===null&&e(h,A),g=s(L,g,R),w===null?C=L:w.sibling=L,w=L,A=T}if(x.done)return n(h,A),at&&Cr(h,R),C;if(A===null){for(;!x.done;R++,x=v.next())x=f(h,x.value,S),x!==null&&(g=s(x,g,R),w===null?C=x:w.sibling=x,w=x);return at&&Cr(h,R),C}for(A=i(h,A);!x.done;R++,x=v.next())x=p(A,h,R,x.value,S),x!==null&&(t&&x.alternate!==null&&A.delete(x.key===null?R:x.key),g=s(x,g,R),w===null?C=x:w.sibling=x,w=x);return t&&A.forEach(function(H){return e(h,H)}),at&&Cr(h,R),C}function m(h,g,v,S){if(typeof v=="object"&&v!==null&&v.type===xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Oa:e:{for(var C=v.key,w=g;w!==null;){if(w.key===C){if(C=v.type,C===xs){if(w.tag===7){n(h,w.sibling),g=r(w,v.props.children),g.return=h,h=g;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hi&&fm(C)===w.type){n(h,w.sibling),g=r(w,v.props),g.ref=Mo(h,w,v),g.return=h,h=g;break e}n(h,w);break}else e(h,w);w=w.sibling}v.type===xs?(g=Hr(v.props.children,h.mode,S,v.key),g.return=h,h=g):(S=kl(v.type,v.key,v.props,null,h.mode,S),S.ref=Mo(h,g,v),S.return=h,h=S)}return o(h);case ys:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Lc(v,h.mode,S),g.return=h,h=g}return o(h);case Hi:return w=v._init,m(h,g,w(v._payload),S)}if(Do(v))return _(h,g,v,S);if(vo(v))return y(h,g,v,S);qa(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,v),g.return=h,h=g):(n(h,g),g=bc(v,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var Ks=V_(!0),H_=V_(!1),nu=pr(null),iu=null,Rs=null,mh=null;function gh(){mh=Rs=iu=null}function vh(t){var e=nu.current;ot(nu),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){iu=t,mh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(iu===null)throw Error(te(308));Rs=t,iu.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Fr=null;function _h(t){Fr===null?Fr=[t]:Fr.push(t)}function G_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_h(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,_h(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}function dm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=dt({},f,d);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=f}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ea={},si=pr(Ea),ua=pr(Ea),ca=pr(Ea);function Or(t){if(t===Ea)throw Error(te(174));return t}function xh(t,e){switch(nt(ca,e),nt(ua,t),nt(si,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ff(e,t)}ot(si),nt(si,e)}function $s(){ot(si),ot(ua),ot(ca)}function j_(t){Or(ca.current);var e=Or(si.current),n=Ff(e,t.type);e!==n&&(nt(ua,t),nt(si,n))}function Sh(t){ua.current===t&&(ot(si),ot(ua))}var ut=pr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Mh(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Il=Di.ReactCurrentDispatcher,wc=Di.ReactCurrentBatchConfig,Yr=0,ft=null,wt=null,It=null,ou=!1,Wo=!1,fa=0,KE=0;function Vt(){throw Error(te(321))}function Eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Th(t,e,n,i,r,s){if(Yr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?JE:e1,t=n(i,r),Wo){s=0;do{if(Wo=!1,fa=0,25<=s)throw Error(te(301));s+=1,It=wt=null,e.updateQueue=null,Il.current=t1,t=n(i,r)}while(Wo)}if(Il.current=au,e=wt!==null&&wt.next!==null,Yr=0,It=wt=ft=null,ou=!1,e)throw Error(te(300));return t}function wh(){var t=fa!==0;return fa=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?ft.memoizedState=It=t:It=It.next=t,It}function Nn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=It===null?ft.memoizedState:It.next;if(e!==null)It=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},It===null?ft.memoizedState=It=t:It=It.next=t}return It}function da(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ft.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function X_(){}function Y_(t,e){var n=ft,i=Nn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Ah($_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ha(9,K_.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(te(349));Yr&30||q_(n,e,r)}return r}function q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K_(t,e,n,i){e.value=n,e.getSnapshot=i,Z_(e)&&Q_(t)}function $_(t,e,n){return n(function(){Z_(e)&&Q_(t)})}function Z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Q_(t){var e=Ri(t,1);e!==null&&Xn(e,t,1,-1)}function pm(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=QE.bind(null,ft,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function J_(){return Nn().memoizedState}function Nl(t,e,n,i){var r=Zn();ft.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Eh(i,o.deps)){r.memoizedState=ha(e,n,s,i);return}}ft.flags|=t,r.memoizedState=ha(1|e,n,s,i)}function mm(t,e){return Nl(8390656,8,t,e)}function Ah(t,e){return Nu(2048,8,t,e)}function ey(t,e){return Nu(4,2,t,e)}function ty(t,e){return Nu(4,4,t,e)}function ny(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iy(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,ny.bind(null,e,t),n)}function Ch(){}function ry(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sy(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function oy(t,e,n){return Yr&21?(Yn(n,e)||(n=f_(),ft.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function $E(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=wc.transition;wc.transition={};try{t(!1),e()}finally{Je=n,wc.transition=i}}function ay(){return Nn().memoizedState}function ZE(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ly(t))uy(e,n);else if(n=G_(t,e,n,i),n!==null){var r=Zt();Xn(n,t,i,r),cy(n,e,i)}}function QE(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ly(t))uy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,_h(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=G_(t,e,r,i),n!==null&&(r=Zt(),Xn(n,t,i,r),cy(n,e,i))}}function ly(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function uy(t,e){Wo=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}var au={readContext:In,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},JE={readContext:In,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,ny.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZE.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:Ch,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=$E.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Zn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ut===null)throw Error(te(349));Yr&30||q_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mm($_.bind(null,i,s,t),[t]),i.flags|=2048,ha(9,K_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ut.identifierPrefix;if(at){var n=xi,i=yi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},e1={readContext:In,useCallback:ry,useContext:In,useEffect:Ah,useImperativeHandle:iy,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:Ac,useRef:J_,useState:function(){return Ac(da)},useDebugValue:Ch,useDeferredValue:function(t){var e=Nn();return oy(e,wt.memoizedState,t)},useTransition:function(){var t=Ac(da)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:Y_,useId:ay,unstable_isNewReconciler:!1},t1={readContext:In,useCallback:ry,useContext:In,useEffect:Ah,useImperativeHandle:iy,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:Cc,useRef:J_,useState:function(){return Cc(da)},useDebugValue:Ch,useDeferredValue:function(t){var e=Nn();return wt===null?e.memoizedState=t:oy(e,wt.memoizedState,t)},useTransition:function(){var t=Cc(da)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:Y_,useId:ay,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uu={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=nr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Xn(e,t,r,i),Dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=nr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Xn(e,t,r,i),Dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=nr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Xn(e,t,i,n),Dl(e,t,i))}};function gm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,i)||!sa(r,s):!0}function fy(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=on(e)?jr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uu.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=on(e)?jr:Yt.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uu.enqueueReplaceState(r,r.state,null),ru(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=PM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function dy(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uu||(uu=!0,md=i),sd(t,e)},n}function hy(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _m(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new n1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=g1.bind(null,t,e,n),e.then(t,t))}function ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var i1=Di.ReactCurrentOwner,rn=!1;function $t(t,e,n,i){e.child=t===null?H_(e,null,n,i):Ks(e,t.child,n,i)}function Sm(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=Th(t,e,n,i,s,r),n=wh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(at&&n&&dh(e),e.flags|=1,$t(t,e,i,r),e.child)}function Mm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,py(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function py(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(sa(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return od(t,e,n,i,r)}function my(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(bs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(bs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(bs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(bs,pn),pn|=i;return $t(t,e,r,n),e.child}function gy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var s=on(n)?jr:Yt.current;return s=Ys(e,s),Vs(e,r),n=Th(t,e,n,i,s,r),i=wh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(at&&i&&dh(e),e.flags|=1,$t(t,e,n,r),e.child)}function Em(t,e,n,i,r){if(on(n)){var s=!0;Jl(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Ul(t,e),fy(e,n,i),rd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=on(n)?jr:Yt.current,u=Ys(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vm(e,o,i,u),Gi=!1;var d=e.memoizedState;o.state=d,ru(e,i,o,r),l=e.memoizedState,a!==i||d!==l||sn.current||Gi?(typeof c=="function"&&(id(e,n,c,i),l=e.memoizedState),(a=Gi||gm(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,W_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=on(n)?jr:Yt.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&vm(e,o,i,l),Gi=!1,d=e.memoizedState,o.state=d,ru(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||sn.current||Gi?(typeof p=="function"&&(id(e,n,p,i),_=e.memoizedState),(u=Gi||gm(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,s,r)}function ad(t,e,n,i,r,s){gy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lm(e,n,!1),Pi(t,e,s);i=e.stateNode,i1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&lm(e,n,!0),e.child}function vy(t){var e=t.stateNode;e.pendingContext?am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&am(t,e.context,!1),xh(t,e.containerInfo)}function Tm(t,e,n,i,r){return qs(),ph(r),e.flags|=256,$t(t,e,n,i),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function _y(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ku(o,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=ld,t):Rh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return r1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ld,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rh(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&ph(i),Ks(e,t.child,null,n),t=Rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Rc(Error(te(422))),Ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,s);if(!(e.mode&1))return Ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Rc(s,i,void 0),Ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Xn(i,t,r,-1))}return Nh(),i=Rc(Error(te(421))),Ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=v1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Ji(r.nextSibling),gn=e,at=!0,Gn=null,t!==null&&(Cn[Rn++]=yi,Cn[Rn++]=xi,Cn[Rn++]=Xr,yi=t.id,xi=t.overflow,Xr=e),e=Rh(e,i.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&su(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function s1(t,e,n){switch(e.tag){case 3:vy(e),qs();break;case 5:j_(e);break;case 1:on(e.type)&&Jl(e);break;case 4:xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?_y(t,e,n):(nt(ut,ut.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,my(t,e,n)}return Pi(t,e,n)}var xy,cd,Sy,My;xy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};Sy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(si.current);var s=null;switch(n){case"input":r=Df(t,r),i=Df(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=Uf(t,r),i=Uf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}Of(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};My=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function o1(t,e,n){var i=e.pendingProps;switch(hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return on(e.type)&&Ql(),Ht(e),null;case 3:return i=e.stateNode,$s(),ot(sn),ot(Yt),Mh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(_d(Gn),Gn=null))),cd(t,e),Ht(e),null;case 5:Sh(e);var r=Or(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)Sy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ht(e),null}if(t=Or(si.current),Ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[la]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)rt(No[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Np(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Fp(i,s),rt("invalid",i)}Of(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":ka(i),Up(i,s,!0);break;case"textarea":ka(i),Op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[la]=i,xy(t,e,!1,!1),e.stateNode=t;e:{switch(o=kf(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)rt(No[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Np(t,i),r=Df(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Fp(t,i),r=Uf(t,i),rt("invalid",t);break;default:r=i}Of(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?J0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jo(t,l):typeof l=="number"&&Jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Qd(t,s,l,o))}switch(n){case"input":ka(t),Up(t,i,!1);break;case"textarea":ka(t),Op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)My(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Or(ca.current),Or(si.current),Ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Ht(e),null;case 13:if(ot(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&mn!==null&&e.mode&1&&!(e.flags&128))z_(),qs(),e.flags|=98560,s=!1;else if(s=Ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ti]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Gn!==null&&(_d(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?At===0&&(At=3):Nh())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return $s(),cd(t,e),t===null&&oa(e.stateNode.containerInfo),Ht(e),null;case 10:return vh(e.type._context),Ht(e),null;case 17:return on(e.type)&&Ql(),Ht(e),null;case 19:if(ot(ut),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Qs&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=su(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ht(e),null}else 2*xt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Ih(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function a1(t,e){switch(hh(e),e.tag){case 1:return on(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),ot(sn),ot(Yt),Mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sh(e),null;case 13:if(ot(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ut),null;case 4:return $s(),null;case 10:return vh(e.type._context),null;case 22:case 23:return Ih(),null;case 24:return null;default:return null}}var $a=!1,Xt=!1,l1=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Am=!1;function u1(t,e){if(qf=ql,t=C_(),fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},ql=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Am,Am=!1,_}function jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fd(e,n,s)}r=r.next}while(r!==i)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ey(t){var e=t.alternate;e!==null&&(t.alternate=null,Ey(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[la],delete e[Qf],delete e[jE],delete e[XE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ty(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ty(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Ot=null,Vn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)wy(t,e,n),n=n.sibling}function wy(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:Xt||Ps(n,e);case 6:var i=Ot,r=Vn;Ot=null,Ni(t,e,n),Ot=i,Vn=r,Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),ia(t)):Mc(Ot,n.stateNode));break;case 4:i=Ot,r=Vn,Ot=n.stateNode.containerInfo,Vn=!0,Ni(t,e,n),Ot=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fd(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Xt&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ni(t,e,n),Xt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l1),e.forEach(function(i){var r=_1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Vn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ot===null)throw Error(te(160));wy(s,o,r),Ot=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ay(e,t),e=e.sibling}function Ay(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),$n(t),i&4){try{jo(3,t,t.return),Fu(3,t)}catch(y){gt(t,t.return,y)}try{jo(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Un(e,t),$n(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Un(e,t),$n(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Jo(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q0(r,s),kf(a,o);var u=kf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?J0(r,f):c==="dangerouslySetInnerHTML"?Z0(r,f):c==="children"?Jo(r,f):Qd(r,c,f,u)}switch(a){case"input":If(r,s);break;case"textarea":K0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Os(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Un(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Un(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Un(e,t),$n(t);break;case 13:Un(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lh=xt())),i&4&&Rm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||c,Un(e,t),Xt=u):Un(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ge=t,c=t.child;c!==null;){for(f=ge=c;ge!==null;){switch(d=ge,p=d.child,d.tag){case 0:case 11:case 14:case 15:jo(4,d,d.return);break;case 1:Ps(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:Ps(d,d.return);break;case 22:if(d.memoizedState!==null){bm(f);continue}}p!==null?(p.return=d,ge=p):bm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q0("display",o))}catch(y){gt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){gt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),$n(t),i&4&&Rm(t);break;case 21:break;default:Un(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ty(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jo(r,""),i.flags&=-33);var s=Cm(t);pd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cm(t);hd(t,a,o);break;default:throw Error(te(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c1(t,e,n){ge=t,Cy(t)}function Cy(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=$a;var u=Xt;if($a=o,(Xt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Lm(r):l!==null?(l.return=o,ge=l):Lm(r);for(;s!==null;)ge=s,Cy(s),s=s.sibling;ge=r,$a=a,Xt=u}Pm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Pm(t)}}function Pm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&dd(e)}catch(d){gt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function bm(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Lm(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{dd(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{dd(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var f1=Math.ceil,lu=Di.ReactCurrentDispatcher,Ph=Di.ReactCurrentOwner,Dn=Di.ReactCurrentBatchConfig,je=0,Ut=null,Et=null,Bt=0,pn=0,bs=pr(0),At=0,pa=null,qr=0,Ou=0,bh=0,Xo=null,tn=null,Lh=0,Qs=1/0,gi=null,uu=!1,md=null,tr=null,Za=!1,qi=null,cu=0,Yo=0,gd=null,Fl=-1,Ol=0;function Zt(){return je&6?xt():Fl!==-1?Fl:Fl=xt()}function nr(t){return t.mode&1?je&2&&Bt!==0?Bt&-Bt:qE.transition!==null?(Ol===0&&(Ol=f_()),Ol):(t=Je,t!==0||(t=window.event,t=t===void 0?16:__(t.type)),t):1}function Xn(t,e,n,i){if(50<Yo)throw Yo=0,gd=null,Error(te(185));xa(t,n,i),(!(je&2)||t!==Ut)&&(t===Ut&&(!(je&2)&&(Ou|=n),At===4&&ji(t,Bt)),an(t,i),n===1&&je===0&&!(e.mode&1)&&(Qs=xt()+500,Iu&&mr()))}function an(t,e){var n=t.callbackNode;qM(t,e);var i=Yl(t,t===Ut?Bt:0);if(i===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?YE(Dm.bind(null,t)):O_(Dm.bind(null,t)),GE(function(){!(je&6)&&mr()}),n=null;else{switch(d_(i)){case 1:n=ih;break;case 4:n=u_;break;case 16:n=Xl;break;case 536870912:n=c_;break;default:n=Xl}n=Uy(n,Ry.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ry(t,e){if(Fl=-1,Ol=0,je&6)throw Error(te(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Yl(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fu(t,i);else{e=i;var r=je;je|=2;var s=by();(Ut!==t||Bt!==e)&&(gi=null,Qs=xt()+500,Vr(t,e));do try{p1();break}catch(a){Py(t,a)}while(!0);gh(),lu.current=s,je=r,Et!==null?e=0:(Ut=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=Gf(t),r!==0&&(i=r,e=vd(t,r))),e===1)throw n=pa,Vr(t,0),ji(t,i),an(t,xt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!d1(r)&&(e=fu(t,i),e===2&&(s=Gf(t),s!==0&&(i=s,e=vd(t,s))),e===1))throw n=pa,Vr(t,0),ji(t,i),an(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Rr(t,tn,gi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Lh+500-xt(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zf(Rr.bind(null,t,tn,gi),e);break}Rr(t,tn,gi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*f1(i/1960))-i,10<i){t.timeoutHandle=Zf(Rr.bind(null,t,tn,gi),i);break}Rr(t,tn,gi);break;case 5:Rr(t,tn,gi);break;default:throw Error(te(329))}}}return an(t,xt()),t.callbackNode===n?Ry.bind(null,t):null}function vd(t,e){var n=Xo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=fu(t,e),t!==2&&(e=tn,tn=n,e!==null&&_d(e)),t}function _d(t){tn===null?tn=t:tn.push.apply(tn,t)}function d1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~bh,e&=~Ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(je&6)throw Error(te(327));Hs();var e=Yl(t,0);if(!(e&1))return an(t,xt()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var i=Gf(t);i!==0&&(e=i,n=vd(t,i))}if(n===1)throw n=pa,Vr(t,0),ji(t,e),an(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,tn,gi),an(t,xt()),null}function Dh(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Qs=xt()+500,Iu&&mr())}}function Kr(t){qi!==null&&qi.tag===0&&!(je&6)&&Hs();var e=je;je|=1;var n=Dn.transition,i=Je;try{if(Dn.transition=null,Je=1,t)return t()}finally{Je=i,Dn.transition=n,je=e,!(je&6)&&mr()}}function Ih(){pn=bs.current,ot(bs)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HE(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ql();break;case 3:$s(),ot(sn),ot(Yt),Mh();break;case 5:Sh(i);break;case 4:$s();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:vh(i.type._context);break;case 22:case 23:Ih()}n=n.return}if(Ut=t,Et=t=ir(t.current,null),Bt=pn=e,At=0,pa=null,bh=Ou=qr=0,tn=Xo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function Py(t,e){do{var n=Et;try{if(gh(),Il.current=au,ou){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ou=!1}if(Yr=0,It=wt=ft=null,Wo=!1,fa=0,Ph.current=null,n===null||n.return===null){At=1,pa=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ym(o);if(p!==null){p.flags&=-257,xm(p,o,a,s,e),p.mode&1&&_m(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){_m(s,u,e),Nh();break e}l=Error(te(426))}}else if(at&&a.mode&1){var m=ym(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),xm(m,o,a,s,e),ph(Zs(l,a));break e}}s=l=Zs(l,a),At!==4&&(At=2),Xo===null?Xo=[s]:Xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=dy(s,l,e);dm(s,h);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tr===null||!tr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=hy(s,a,e);dm(s,S);break e}}s=s.return}while(s!==null)}Dy(n)}catch(C){e=C,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function by(){var t=lu.current;return lu.current=au,t===null?au:t}function Nh(){(At===0||At===3||At===2)&&(At=4),Ut===null||!(qr&268435455)&&!(Ou&268435455)||ji(Ut,Bt)}function fu(t,e){var n=je;je|=2;var i=by();(Ut!==t||Bt!==e)&&(gi=null,Vr(t,e));do try{h1();break}catch(r){Py(t,r)}while(!0);if(gh(),je=n,lu.current=i,Et!==null)throw Error(te(261));return Ut=null,Bt=0,At}function h1(){for(;Et!==null;)Ly(Et)}function p1(){for(;Et!==null&&!BM();)Ly(Et)}function Ly(t){var e=Ny(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Dy(t):Et=e,Ph.current=null}function Dy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a1(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=o1(n,e,pn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function Rr(t,e,n){var i=Je,r=Dn.transition;try{Dn.transition=null,Je=1,m1(t,e,n,i)}finally{Dn.transition=r,Je=i}return null}function m1(t,e,n,i){do Hs();while(qi!==null);if(je&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KM(t,s),t===Ut&&(Et=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,Uy(Xl,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Je;Je=1;var a=je;je|=4,Ph.current=null,u1(t,n),Ay(n,t),UE(Kf),ql=!!qf,Kf=qf=null,t.current=n,c1(n),zM(),je=a,Je=o,Dn.transition=s}else t.current=n;if(Za&&(Za=!1,qi=t,cu=r),s=t.pendingLanes,s===0&&(tr=null),GM(n.stateNode),an(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uu)throw uu=!1,t=md,md=null,t;return cu&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===gd?Yo++:(Yo=0,gd=t):Yo=0,mr(),null}function Hs(){if(qi!==null){var t=d_(cu),e=Dn.transition,n=Je;try{if(Dn.transition=null,Je=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,cu=0,je&6)throw Error(te(331));var r=je;for(je|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:jo(8,c,s)}var f=c.child;if(f!==null)f.return=c,ge=f;else for(;ge!==null;){c=ge;var d=c.sibling,p=c.return;if(Ey(c),c===u){ge=null;break}if(d!==null){d.return=p,ge=d;break}ge=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){o=ge;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ge=v;else e:for(o=g;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(C){gt(a,a.return,C)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(je=r,mr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Ru,t)}catch{}i=!0}return i}finally{Je=n,Dn.transition=e}}return!1}function Im(t,e,n){e=Zs(n,e),e=dy(t,e,1),t=er(t,e,1),e=Zt(),t!==null&&(xa(t,1,e),an(t,e))}function gt(t,e,n){if(t.tag===3)Im(t,t,n);else for(;e!==null;){if(e.tag===3){Im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Zs(n,t),t=hy(e,t,1),e=er(e,t,1),t=Zt(),e!==null&&(xa(e,1,t),an(e,t));break}}e=e.return}}function g1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(At===4||At===3&&(Bt&130023424)===Bt&&500>xt()-Lh?Vr(t,0):bh|=n),an(t,e)}function Iy(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=Zt();t=Ri(t,e),t!==null&&(xa(t,e,n),an(t,n))}function v1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iy(t,n)}function _1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Iy(t,n)}var Ny;Ny=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,s1(t,e,n);rn=!!(t.flags&131072)}else rn=!1,at&&e.flags&1048576&&k_(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Ys(e,Yt.current);Vs(e,n),r=Th(null,e,i,t,r,n);var s=wh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yh(e),r.updater=Uu,e.stateNode=r,r._reactInternals=e,rd(e,i,t,n),e=ad(null,e,i,!0,s,n)):(e.tag=0,at&&s&&dh(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=x1(i),t=zn(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=Em(null,e,i,t,n);break e;case 11:e=Sm(null,e,i,t,n);break e;case 14:e=Mm(null,e,i,zn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Em(t,e,i,r,n);case 3:e:{if(vy(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W_(t,e),ru(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(te(423)),e),e=Tm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(te(424)),e),e=Tm(t,e,i,n,r);break e}else for(mn=Ji(e.stateNode.containerInfo.firstChild),gn=e,at=!0,Gn=null,n=H_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Pi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return j_(e),t===null&&td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$f(i,r)?o=null:s!==null&&$f(i,s)&&(e.flags|=32),gy(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return _y(t,e,n);case 4:return xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Sm(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(nu,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!sn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=In(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Mm(t,e,i,r,n);case 15:return py(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ul(t,e),e.tag=1,on(i)?(t=!0,Jl(e)):t=!1,Vs(e,n),fy(e,i,r),rd(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return yy(t,e,n);case 22:return my(t,e,n)}throw Error(te(156,e.tag))};function Uy(t,e){return l_(t,e)}function y1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new y1(t,e,n,i)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function x1(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return Hr(n.children,r,s,e);case Jd:o=8,r|=8;break;case Rf:return t=bn(12,n,e,r|2),t.elementType=Rf,t.lanes=s,t;case Pf:return t=bn(13,n,e,r),t.elementType=Pf,t.lanes=s,t;case bf:return t=bn(19,n,e,r),t.elementType=bf,t.lanes=s,t;case j0:return ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:o=10;break e;case W0:o=9;break e;case eh:o=11;break e;case th:o=14;break e;case Hi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=bn(22,t,i,e),t.elementType=j0,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function S1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fh(t,e,n,i,r,s,o,a,l){return t=new S1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(s),t}function M1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fy(t){if(!t)return ar;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(on(n))return F_(t,n,e)}return e}function Oy(t,e,n,i,r,s,o,a,l){return t=Fh(n,i,!0,t,r,s,o,a,l),t.context=Fy(null),n=t.current,i=Zt(),r=nr(n),s=Ei(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,xa(t,r,i),an(t,i),t}function Bu(t,e,n,i){var r=e.current,s=Zt(),o=nr(r);return n=Fy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Xn(t,r,o,s),Dl(t,r,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Oh(t,e){Nm(t,e),(t=t.alternate)&&Nm(t,e)}function E1(){return null}var ky=typeof reportError=="function"?reportError:function(t){console.error(t)};function kh(t){this._internalRoot=t}zu.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Bu(t,e,null,null)};zu.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Bu(null,t,null,null)}),e[Ci]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&v_(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function T1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=du(o);s.call(u)}}var o=Oy(e,i,t,0,null,!1,!1,"",Um);return t._reactRootContainer=o,t[Ci]=o.current,oa(t.nodeType===8?t.parentNode:t),Kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=du(l);a.call(u)}}var l=Fh(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=l,t[Ci]=l.current,oa(t.nodeType===8?t.parentNode:t),Kr(function(){Bu(e,l,n,i)}),l}function Hu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=du(o);a.call(l)}}Bu(e,o,t,r)}else o=T1(n,e,t,r,i);return du(o)}h_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(rh(e,n|1),an(e,xt()),!(je&6)&&(Qs=xt()+500,mr()))}break;case 13:Kr(function(){var i=Ri(t,1);if(i!==null){var r=Zt();Xn(i,t,1,r)}}),Oh(t,1)}};sh=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=Zt();Xn(e,t,134217728,n)}Oh(t,134217728)}};p_=function(t){if(t.tag===13){var e=nr(t),n=Ri(t,e);if(n!==null){var i=Zt();Xn(n,t,e,i)}Oh(t,e)}};m_=function(){return Je};g_=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};zf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Du(i);if(!r)throw Error(te(90));Y0(i),If(i,r)}}}break;case"textarea":K0(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};n_=Dh;i_=Kr;var w1={usingClientEntryPoint:!1,Events:[Ma,Ts,Du,e_,t_,Dh]},To={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A1={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||E1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Ru=Qa.inject(A1),ri=Qa}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(te(200));return M1(t,e,null,n)};Sn.createRoot=function(t,e){if(!Bh(t))throw Error(te(299));var n=!1,i="",r=ky;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fh(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,oa(t.nodeType===8?t.parentNode:t),new kh(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Kr(t)};Sn.hydrate=function(t,e,n){if(!Vu(e))throw Error(te(200));return Hu(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ky;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Oy(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zu(e)};Sn.render=function(t,e,n){if(!Vu(e))throw Error(te(200));return Hu(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(te(40));return t._reactRootContainer?(Kr(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Sn.unstable_batchedUpdates=Dh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Hu(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function By(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(By)}catch(t){console.error(t)}}By(),B0.exports=Sn;var C1=B0.exports,Fm=C1;Af.createRoot=Fm.createRoot,Af.hydrateRoot=Fm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="165",R1=0,Om=1,P1=2,zy=1,b1=2,mi=3,lr=0,ln=1,_i=2,rr=0,Gs=1,km=2,Bm=3,zm=4,L1=5,Ir=100,D1=101,I1=102,N1=103,U1=104,F1=200,O1=201,k1=202,B1=203,yd=204,xd=205,z1=206,V1=207,H1=208,G1=209,W1=210,j1=211,X1=212,Y1=213,q1=214,K1=0,$1=1,Z1=2,hu=3,Q1=4,J1=5,eT=6,tT=7,Vy=0,nT=1,iT=2,sr=0,rT=1,sT=2,oT=3,aT=4,lT=5,uT=6,cT=7,Hy=300,Js=301,eo=302,Sd=303,Md=304,Gu=306,Ed=1e3,kr=1001,Td=1002,Ln=1003,fT=1004,Ja=1005,Wn=1006,Dc=1007,Br=1008,ur=1009,dT=1010,hT=1011,pu=1012,Gy=1013,to=1014,Ki=1015,Wu=1016,Wy=1017,jy=1018,no=1020,pT=35902,mT=1021,gT=1022,ii=1023,vT=1024,_T=1025,Ws=1026,io=1027,yT=1028,Xy=1029,xT=1030,Yy=1031,qy=1033,Ic=33776,Nc=33777,Uc=33778,Fc=33779,Vm=35840,Hm=35841,Gm=35842,Wm=35843,jm=36196,Xm=37492,Ym=37496,qm=37808,Km=37809,$m=37810,Zm=37811,Qm=37812,Jm=37813,eg=37814,tg=37815,ng=37816,ig=37817,rg=37818,sg=37819,og=37820,ag=37821,Oc=36492,lg=36494,ug=36495,ST=36283,cg=36284,fg=36285,dg=36286,MT=3200,ET=3201,TT=0,wT=1,Xi="",Qn="srgb",gr="srgb-linear",Vh="display-p3",ju="display-p3-linear",mu="linear",st="srgb",gu="rec709",vu="p3",ts=7680,hg=519,AT=512,CT=513,RT=514,Ky=515,PT=516,bT=517,LT=518,DT=519,pg=35044,mg="300 es",Si=2e3,_u=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,wd=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function IT(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,r,s,o,a,l,u){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],g=r[1],v=r[4],S=r[7],C=r[2],w=r[5],A=r[8];return s[0]=o*y+a*g+l*C,s[3]=o*m+a*v+l*w,s[6]=o*h+a*S+l*A,s[1]=u*y+c*g+f*C,s[4]=u*m+c*v+f*w,s[7]=u*h+c*S+f*A,s[2]=d*y+p*g+_*C,s[5]=d*m+p*v+_*w,s[8]=d*h+p*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new De;function $y(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NT(){const t=yu("canvas");return t.style.display="block",t}const gg={};function Zy(t){t in gg||(gg[t]=!0,console.warn(t))}function UT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const vg=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_g=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[gr]:{transfer:mu,primaries:gu,toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:st,primaries:gu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ju]:{transfer:mu,primaries:vu,toReference:t=>t.applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg)},[Vh]:{transfer:st,primaries:vu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg).convertLinearToSRGB()}},FT=new Set([gr,ju]),Ze={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!FT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=el[e].toReference,r=el[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return el[t].primaries},getTransfer:function(t){return t===Xi?mu:el[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ns;class OT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=yu("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ns}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kT=0;class Qy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hc(r[o].image)):s.push(Hc(r[o]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?OT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BT=0;class un extends ho{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=kr,r=kr,s=Wn,o=Br,a=ii,l=ur,u=un.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Ta(),this.name="",this.source=new Qy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Hy;un.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,C=(h+1)/2,w=(c+d)/4,A=(f+y)/4,R=(_+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-y)/g,this.z=(d-c)/g,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zT extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends zT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jy extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VT extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||u!==p||c!==_){let m=1-a;const h=l*d+u*p+c*_+f*y,g=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,h*g);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*g;if(l=l*m+d*S,u=u*m+p*S,c=c*m+_*S,f=f*m+y*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*p-u*d,e[n+1]=l*_+c*d+u*f-a*p,e[n+2]=u*_+c*p+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new B,yg=new wa;class Aa{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),nl.subVectors(this.max,Ao),is.subVectors(e.a,Ao),rs.subVectors(e.b,Ao),ss.subVectors(e.c,Ao),Ui.subVectors(rs,is),Fi.subVectors(ss,rs),xr.subVectors(is,ss);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-xr.z,xr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,xr.z,0,-xr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-xr.y,xr.x,0];return!Wc(n,is,rs,ss,nl)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,is,rs,ss,nl))?!1:(il.crossVectors(Ui,Fi),n=[il.x,il.y,il.z],Wc(n,is,rs,ss,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,tl=new Aa,is=new B,rs=new B,ss=new B,Ui=new B,Fi=new B,xr=new B,Ao=new B,nl=new B,il=new B,Sr=new B;function Wc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),u=n.dot(Sr),c=i.dot(Sr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const HT=new Aa,Co=new B,jc=new B;class Xu{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(jc)),this.expandByPoint(Co.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new B,Xc=new B,rl=new B,Oi=new B,Yc=new B,sl=new B,qc=new B;class ex{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=Oi.dot(this.direction),l=-Oi.dot(rl),u=Oi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const y=1/c;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xc).addScaledVector(rl,d),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),sl.subVectors(i,e),qc.crossVectors(Yc,sl);let o=this.direction.dot(qc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(Oi,sl));if(l<0)return null;const u=a*this.direction.dot(Yc.cross(Oi));if(u<0||l+u>o)return null;const c=-a*Oi.dot(qc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,y=u*f;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,y=u*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=_*u-p,n[8]=d*u+y,n[1]=l*f,n[5]=y*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+y,n[5]=o*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*c,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GT,e,WT)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ki.crossVectors(i,dn),ki.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ki.crossVectors(i,dn)),ki.normalize(),ol.crossVectors(dn,ki),r[0]=ki.x,r[4]=ol.x,r[8]=dn.x,r[1]=ki.y,r[5]=ol.y,r[9]=dn.y,r[2]=ki.z,r[6]=ol.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],g=i[3],v=i[7],S=i[11],C=i[15],w=r[0],A=r[4],R=r[8],T=r[12],x=r[1],L=r[5],H=r[9],z=r[13],q=r[2],K=r[6],j=r[10],W=r[14],I=r[3],Y=r[7],Z=r[11],oe=r[15];return s[0]=o*w+a*x+l*q+u*I,s[4]=o*A+a*L+l*K+u*Y,s[8]=o*R+a*H+l*j+u*Z,s[12]=o*T+a*z+l*W+u*oe,s[1]=c*w+f*x+d*q+p*I,s[5]=c*A+f*L+d*K+p*Y,s[9]=c*R+f*H+d*j+p*Z,s[13]=c*T+f*z+d*W+p*oe,s[2]=_*w+y*x+m*q+h*I,s[6]=_*A+y*L+m*K+h*Y,s[10]=_*R+y*H+m*j+h*Z,s[14]=_*T+y*z+m*W+h*oe,s[3]=g*w+v*x+S*q+C*I,s[7]=g*A+v*L+S*K+C*Y,s[11]=g*R+v*H+S*j+C*Z,s[15]=g*T+v*z+S*W+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],g=f*m*u-y*d*u+y*l*p-a*m*p-f*l*h+a*d*h,v=_*d*u-c*m*u-_*l*p+o*m*p+c*l*h-o*d*h,S=c*y*u-_*f*u+_*a*p-o*y*p-c*a*h+o*f*h,C=_*f*l-c*y*l-_*a*d+o*y*d+c*a*m-o*f*m,w=n*g+i*v+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(c*m*s-_*d*s+_*r*p-n*m*p-c*r*h+n*d*h)*A,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*h-n*l*h)*A,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(_*f*s-c*y*s-_*i*p+n*y*p+c*i*h-n*f*h)*A,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*h+n*a*h)*A,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(c*y*r-_*f*r+_*i*d-n*y*d-c*i*m+n*f*m)*A,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,y=o*c,m=o*f,h=a*f,g=l*u,v=l*c,S=l*f,C=i.x,w=i.y,A=i.z;return r[0]=(1-(y+h))*C,r[1]=(p+S)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(d+h))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,c=1/o,f=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Si)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===_u)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let _,y;if(a===Si)_=(o+s)*f,y=-2*f;else if(a===_u)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new B,On=new Tt,GT=new B(0,0,0),WT=new B(1,1,1),ki=new B,ol=new B,dn=new B,xg=new Tt,Sg=new wa;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";let tx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jT=0;const Mg=new B,as=new wa,di=new Tt,al=new B,Ro=new B,XT=new B,YT=new wa,Eg=new B(1,0,0),Tg=new B(0,1,0),wg=new B(0,0,1),Ag={type:"added"},qT={type:"removed"},ls={type:"childadded",child:null},Kc={type:"childremoved",child:null};class cn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new B,n=new bi,i=new wa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new De}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ro,al,this.up):di.lookAt(al,Ro,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),as.setFromRotationMatrix(di),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qT),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,XT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,YT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new B(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new B,hi=new B,$c=new B,pi=new B,us=new B,cs=new B,Cg=new B,Zc=new B,Qc=new B,Jc=new B;class ni{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),hi.subVectors(i,n),$c.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(hi),l=kn.dot($c),u=hi.dot(hi),c=hi.dot($c),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),hi.subVectors(e,n),kn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),kn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),cs.subVectors(s,i),Zc.subVectors(e,i);const l=us.dot(Zc),u=cs.dot(Zc);if(l<=0&&u<=0)return n.copy(i);Qc.subVectors(e,r);const c=us.dot(Qc),f=cs.dot(Qc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(us,o);Jc.subVectors(e,s);const p=us.dot(Jc),_=cs.dot(Jc);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(cs,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return Cg.subVectors(s,r),a=(f-c)/(f-c+(p-_)),n.copy(r).addScaledVector(Cg,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(us,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ll={h:0,s:0,l:0};function ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=IT(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ef(o,s,e+1/3),this.g=ef(o,s,e),this.b=ef(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=nx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ze.fromWorkingColorSpace(Wt.copy(this),e),Math.round(nn(Wt.r*255,0,255))*65536+Math.round(nn(Wt.g*255,0,255))*256+Math.round(nn(Wt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Qn){Ze.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(ll);const i=Bc(Bi.h,ll.h,n),r=Bc(Bi.s,ll.s,n),s=Bc(Bi.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Qe;Qe.NAMES=nx;let KT=0;class Ca extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=Gs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=xd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=hu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yd&&(i.blendSrc=this.blendSrc),this.blendDst!==xd&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ix extends Ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Vy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,ul=new Ke;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pg&&(e.usage=this.usage),e}}class rx extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sx extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gr extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $T=0;const Tn=new Tt,tf=new cn,fs=new B,hn=new Aa,Po=new Aa,Lt=new B;class li extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?sx:rx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,Po.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,Po.max),hn.expandByPoint(Lt)):(hn.expandByPoint(Po.min),hn.expandByPoint(Po.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(fs.fromBufferAttribute(e,u),Lt.add(fs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new B,l[R]=new B;const u=new B,c=new B,f=new B,d=new Ke,p=new Ke,_=new Ke,y=new B,m=new B;function h(R,T,x){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,x),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),a[R].add(y),a[T].add(y),a[x].add(y),l[R].add(m),l[T].add(m),l[x].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,T=g.length;R<T;++R){const x=g[R],L=x.start,H=x.count;for(let z=L,q=L+H;z<q;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new B,S=new B,C=new B,w=new B;function A(R){C.fromBufferAttribute(r,R),w.copy(C);const T=a[R];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(w,T);const L=S.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,T=g.length;R<T;++R){const x=g[R],L=x.start,H=x.count;for(let z=L,q=L+H;z<q;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new vn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new Tt,Mr=new ex,cl=new Xu,Pg=new B,ds=new B,hs=new B,ps=new B,nf=new B,fl=new B,dl=new Ke,hl=new Ke,pl=new Ke,bg=new B,Lg=new B,Dg=new B,ml=new B,gl=new B;class Mi extends cn{constructor(e=new li,n=new ix){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(nf.fromBufferAttribute(f,e),o?fl.addScaledVector(nf,c):fl.addScaledVector(nf.sub(n),c))}n.add(fl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(cl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(cl,Pg)===null||Mr.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Rg.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=v;S<C;S+=3){const w=a.getX(S),A=a.getX(S+1),R=a.getX(S+2);r=vl(this,h,e,i,u,c,f,w,A,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const g=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=vl(this,o,e,i,u,c,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=v;S<C;S+=3){const w=S,A=S+1,R=S+2;r=vl(this,h,e,i,u,c,f,w,A,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const g=m,v=m+1,S=m+2;r=vl(this,o,e,i,u,c,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ZT(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;gl.copy(a),gl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(gl);return u<n.near||u>n.far?null:{distance:u,point:gl.clone(),object:t}}function vl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ds),t.getVertexPosition(l,hs),t.getVertexPosition(u,ps);const c=ZT(t,e,n,i,ds,hs,ps,ml);if(c){r&&(dl.fromBufferAttribute(r,a),hl.fromBufferAttribute(r,l),pl.fromBufferAttribute(r,u),c.uv=ni.getInterpolation(ml,ds,hs,ps,dl,hl,pl,new Ke)),s&&(dl.fromBufferAttribute(s,a),hl.fromBufferAttribute(s,l),pl.fromBufferAttribute(s,u),c.uv1=ni.getInterpolation(ml,ds,hs,ps,dl,hl,pl,new Ke)),o&&(bg.fromBufferAttribute(o,a),Lg.fromBufferAttribute(o,l),Dg.fromBufferAttribute(o,u),c.normal=ni.getInterpolation(ml,ds,hs,ps,bg,Lg,Dg,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new B,materialIndex:0};ni.getNormal(ds,hs,ps,f.normal),c.face=f}return c}class Ra extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gr(u,3)),this.setAttribute("normal",new Gr(c,3)),this.setAttribute("uv",new Gr(f,2));function _(y,m,h,g,v,S,C,w,A,R,T){const x=S/A,L=C/R,H=S/2,z=C/2,q=w/2,K=A+1,j=R+1;let W=0,I=0;const Y=new B;for(let Z=0;Z<j;Z++){const oe=Z*L-z;for(let xe=0;xe<K;xe++){const Ge=xe*x-H;Y[y]=Ge*g,Y[m]=oe*v,Y[h]=q,u.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[h]=w>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(xe/A),f.push(1-Z/R),W+=1}}for(let Z=0;Z<R;Z++)for(let oe=0;oe<A;oe++){const xe=d+oe+K*Z,Ge=d+oe+K*(Z+1),G=d+(oe+1)+K*(Z+1),ne=d+(oe+1)+K*Z;l.push(xe,Ge,ne),l.push(Ge,G,ne),I+=6}a.addGroup(p,I,T),p+=I,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function QT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ox(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const JT={clone:ro,merge:Kt};var ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ew,this.fragmentShader=tw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=QT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ax extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new B,Ig=new Ke,Ng=new Ke;class Pn extends ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Ig,Ng),n.subVectors(Ng,Ig)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class nw extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Pn(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new Pn(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(ms,gs,e,n);l.layers=this.layers,this.add(l);const u=new Pn(ms,gs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lx extends un{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iw extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ra(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:rr});s.uniforms.tEquirect.value=n;const o=new Mi(r,s),a=n.minFilter;return n.minFilter===Br&&(n.minFilter=Wn),new nw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const rf=new B,rw=new B,sw=new De;class Pr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rf.subVectors(i,n).cross(rw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sw.getNormalMatrix(e),r=this.coplanarPoint(rf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Xu,_l=new B;class ux{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-h).normalize(),i[1].setComponents(l+s,d+u,m+p,S+h).normalize(),i[2].setComponents(l+o,d+c,m+_,S+g).normalize(),i[3].setComponents(l-o,d-c,m-_,S-g).normalize(),i[4].setComponents(l-a,d-f,m-y,S-v).normalize(),n===Si)i[5].setComponents(l+a,d+f,m+y,S+v).normalize();else if(n===_u)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ow(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),f.count===-1&&d.length===0&&t.bufferSubData(u,0,c),d.length!==0){for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Yu extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],_=[],y=[],m=[];for(let h=0;h<c;h++){const g=h*d-o;for(let v=0;v<u;v++){const S=v*f-s;_.push(S,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const v=g+u*h,S=g+u*(h+1),C=g+1+u*(h+1),w=g+1+u*h;p.push(v,S,w),p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new Gr(_,3)),this.setAttribute("normal",new Gr(y,3)),this.setAttribute("uv",new Gr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}var aw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,bw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ow="gl_FragColor = linearToOutputTexel( gl_FragColor );",kw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:aw,alphahash_pars_fragment:lw,alphamap_fragment:uw,alphamap_pars_fragment:cw,alphatest_fragment:fw,alphatest_pars_fragment:dw,aomap_fragment:hw,aomap_pars_fragment:pw,batching_pars_vertex:mw,batching_vertex:gw,begin_vertex:vw,beginnormal_vertex:_w,bsdfs:yw,iridescence_fragment:xw,bumpmap_pars_fragment:Sw,clipping_planes_fragment:Mw,clipping_planes_pars_fragment:Ew,clipping_planes_pars_vertex:Tw,clipping_planes_vertex:ww,color_fragment:Aw,color_pars_fragment:Cw,color_pars_vertex:Rw,color_vertex:Pw,common:bw,cube_uv_reflection_fragment:Lw,defaultnormal_vertex:Dw,displacementmap_pars_vertex:Iw,displacementmap_vertex:Nw,emissivemap_fragment:Uw,emissivemap_pars_fragment:Fw,colorspace_fragment:Ow,colorspace_pars_fragment:kw,envmap_fragment:Bw,envmap_common_pars_fragment:zw,envmap_pars_fragment:Vw,envmap_pars_vertex:Hw,envmap_physical_pars_fragment:Jw,envmap_vertex:Gw,fog_vertex:Ww,fog_pars_vertex:jw,fog_fragment:Xw,fog_pars_fragment:Yw,gradientmap_pars_fragment:qw,lightmap_pars_fragment:Kw,lights_lambert_fragment:$w,lights_lambert_pars_fragment:Zw,lights_pars_begin:Qw,lights_toon_fragment:eA,lights_toon_pars_fragment:tA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:rA,lights_physical_pars_fragment:sA,lights_fragment_begin:oA,lights_fragment_maps:aA,lights_fragment_end:lA,logdepthbuf_fragment:uA,logdepthbuf_pars_fragment:cA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:dA,map_fragment:hA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:vA,metalnessmap_pars_fragment:_A,morphinstance_vertex:yA,morphcolor_vertex:xA,morphnormal_vertex:SA,morphtarget_pars_vertex:MA,morphtarget_vertex:EA,normal_fragment_begin:TA,normal_fragment_maps:wA,normal_pars_fragment:AA,normal_pars_vertex:CA,normal_vertex:RA,normalmap_pars_fragment:PA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:LA,clearcoat_pars_fragment:DA,iridescence_pars_fragment:IA,opaque_fragment:NA,packing:UA,premultiplied_alpha_fragment:FA,project_vertex:OA,dithering_fragment:kA,dithering_pars_fragment:BA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:VA,shadowmap_pars_fragment:HA,shadowmap_pars_vertex:GA,shadowmap_vertex:WA,shadowmask_pars_fragment:jA,skinbase_vertex:XA,skinning_pars_vertex:YA,skinning_vertex:qA,skinnormal_vertex:KA,specularmap_fragment:$A,specularmap_pars_fragment:ZA,tonemapping_fragment:QA,tonemapping_pars_fragment:JA,transmission_fragment:eC,transmission_pars_fragment:tC,uv_pars_fragment:nC,uv_pars_vertex:iC,uv_vertex:rC,worldpos_vertex:sC,background_vert:oC,background_frag:aC,backgroundCube_vert:lC,backgroundCube_frag:uC,cube_vert:cC,cube_frag:fC,depth_vert:dC,depth_frag:hC,distanceRGBA_vert:pC,distanceRGBA_frag:mC,equirect_vert:gC,equirect_frag:vC,linedashed_vert:_C,linedashed_frag:yC,meshbasic_vert:xC,meshbasic_frag:SC,meshlambert_vert:MC,meshlambert_frag:EC,meshmatcap_vert:TC,meshmatcap_frag:wC,meshnormal_vert:AC,meshnormal_frag:CC,meshphong_vert:RC,meshphong_frag:PC,meshphysical_vert:bC,meshphysical_frag:LC,meshtoon_vert:DC,meshtoon_frag:IC,points_vert:NC,points_frag:UC,shadow_vert:FC,shadow_frag:OC,sprite_vert:kC,sprite_frag:BC},le={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ei={basic:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Kt([le.points,le.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Kt([le.common,le.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Kt([le.sprite,le.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Kt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Kt([le.lights,le.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ei.physical={uniforms:Kt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const yl={r:0,b:0,g:0},Tr=new bi,zC=new Tt;function VC(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const S=_(g);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===Gu)?(c===void 0&&(c=new Mi(new Ra(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:ro(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Tr.copy(v.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zC.makeRotationFromEuler(Tr)),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Mi(new Yu(2,2),new cr({name:"BackgroundMaterial",uniforms:ro(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function h(g,v){g.getRGB(yl,ox(t)),i.buffers.color.setClear(yl.r,yl.g,yl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:y,addToRenderList:m}}function HC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,L,H,z,q){let K=!1;const j=f(z,H,L);s!==j&&(s=j,u(s.object)),K=p(x,z,H,q),K&&_(x,z,H,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(x,L,H,z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function f(x,L,H){const z=H.wireframe===!0;let q=i[x.id];q===void 0&&(q={},i[x.id]=q);let K=q[L.id];K===void 0&&(K={},q[L.id]=K);let j=K[z];return j===void 0&&(j=d(l()),K[z]=j),j}function d(x){const L=[],H=[],z=[];for(let q=0;q<n;q++)L[q]=0,H[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,L,H,z){const q=s.attributes,K=L.attributes;let j=0;const W=H.getAttributes();for(const I in W)if(W[I].location>=0){const Z=q[I];let oe=K[I];if(oe===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function _(x,L,H,z){const q={},K=L.attributes;let j=0;const W=H.getAttributes();for(const I in W)if(W[I].location>=0){let Z=K[I];Z===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),q[I]=oe,j++}s.attributes=q,s.attributesNum=j,s.index=z}function y(){const x=s.newAttributes;for(let L=0,H=x.length;L<H;L++)x[L]=0}function m(x){h(x,0)}function h(x,L){const H=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;H[x]=1,z[x]===0&&(t.enableVertexAttribArray(x),z[x]=1),q[x]!==L&&(t.vertexAttribDivisor(x,L),q[x]=L)}function g(){const x=s.newAttributes,L=s.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==x[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function v(x,L,H,z,q,K,j){j===!0?t.vertexAttribIPointer(x,L,H,q,K):t.vertexAttribPointer(x,L,H,z,q,K)}function S(x,L,H,z){y();const q=z.attributes,K=H.getAttributes(),j=L.defaultAttributeValues;for(const W in K){const I=K[W];if(I.location>=0){let Y=q[W];if(Y===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const Z=Y.normalized,oe=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;const Ge=xe.buffer,G=xe.type,ne=xe.bytesPerElement,de=G===t.INT||G===t.UNSIGNED_INT||Y.gpuType===Gy;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Fe=ae.stride,Ie=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<I.locationSize;We++)h(I.location+We,ae.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<I.locationSize;We++)m(I.location+We);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let We=0;We<I.locationSize;We++)v(I.location+We,oe/I.locationSize,G,Z,Fe*ne,(Ie+oe/I.locationSize*We)*ne,de)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)h(I.location+ae,Y.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<I.locationSize;ae++)m(I.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ae=0;ae<I.locationSize;ae++)v(I.location+ae,oe/I.locationSize,G,Z,oe*ne,oe/I.locationSize*ae*ne,de)}}else if(j!==void 0){const Z=j[W];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(I.location,Z);break;case 3:t.vertexAttrib3fv(I.location,Z);break;case 4:t.vertexAttrib4fv(I.location,Z);break;default:t.vertexAttrib1fv(I.location,Z)}}}}g()}function C(){R();for(const x in i){const L=i[x];for(const H in L){const z=L[H];for(const q in z)c(z[q].object),delete z[q];delete L[H]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const H in L){const z=L[H];for(const q in z)c(z[q].object),delete z[q];delete L[H]}delete i[x.id]}function A(x){for(const L in i){const H=i[L];if(H[x.id]===void 0)continue;const z=H[x.id];for(const q in z)c(z[q].object),delete z[q];delete H[x.id]}}function R(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function GC(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(u[p],c[p]);else{d.multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];n.update(p,i,1)}}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=c[y];for(let y=0;y<d.length;y++)n.update(_,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ii&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===Wu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ur&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ki&&!A)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:S,maxSamples:C}}function jC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let S=h.clippingState||null;l.value=S,S=c(_,d,v,p);for(let C=0;C!==v;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==y;++v,S+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function XC(t){let e=new WeakMap;function n(o,a){return a===Sd?o.mapping=Js:a===Md&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sd||a===Md)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new iw(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class YC extends ax{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,Ug=[.125,.215,.35,.446,.526,.582],Nr=20,sf=new YC,Fg=new Qe;let of=null,af=0,lf=0,uf=!1;const br=(1+Math.sqrt(5))/2,vs=1/br,Og=[new B(-br,vs,0),new B(br,vs,0),new B(-vs,0,br),new B(vs,0,br),new B(0,br,-vs),new B(0,br,vs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),this._renderer.xr.enabled=uf,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Wu,format:ii,colorSpace:gr,depthBuffer:!1},r=Bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qC(s)),this._blurMaterial=KC(s,e,n)}return r}_compileMaterial(e){const n=new Mi(this._lodPlanes[0],e);this._renderer.compile(n,sf)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Fg),c.toneMapping=sr,c.autoClear=!1;const p=new ix({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Mi(new Ra,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Fg),y=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;xl(r,g*v,h>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Js||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Og[(r-s-1)%Og.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Mi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const h=[];let g=0;for(let A=0;A<Nr;++A){const R=A/y,T=Math.exp(-R*R/2);h.push(T),A===0?g+=T:A<m&&(g+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Ls?r-v+Ls:0),w=4*(this._cubeSize-S);xl(n,C,w,3*S,2*S),l.setRenderTarget(n),l.render(f,sf)}}function qC(t){const e=[],n=[],i=[];let r=t;const s=t-Ls+1+Ug.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ls?l=Ug[o-t+Ls-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,y=3,m=2,h=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,R=w>2?0:-1,T=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];g.set(T,y*_*w),v.set(d,m*_*w);const x=[w,w,w,w,w,w];S.set(x,h*_*w)}const C=new li;C.setAttribute("position",new vn(g,y)),C.setAttribute("uv",new vn(v,m)),C.setAttribute("faceIndex",new vn(S,h)),e.push(C),r>Ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bg(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KC(t,e,n){const i=new Float32Array(Nr),r=new B(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function zg(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Vg(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $C(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Sd||l===Md,c=l===Js||l===eo;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new kg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new kg(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ZC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zy("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,S=g.length;v<S;v+=3){const C=g[v+0],w=g[v+1],A=g[v+2];d.push(C,w,w,A,A,C)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const C=v+0,w=v+1,A=v+2;d.push(C,w,w,A,A,C)}}else return;const m=new($y(d)?sx:rx)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function JC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function c(d,p,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_;m++)this.render(d[m]/o,p[m]);else{y.multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}}function f(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g];for(let g=0;g<y.length;g++)n.update(h,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function eR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tR(t,e,n){const i=new WeakMap,r=new kt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*f),R=new Jy(A,C,w,f);R.type=Ki,R.needsUpdate=!0;const T=S*4;for(let L=0;L<f;L++){const H=h[L],z=g[L],q=v[L],K=C*w*4*L;for(let j=0;j<H.count;j++){const W=j*T;_===!0&&(r.fromBufferAttribute(H,j),A[K+W+0]=r.x,A[K+W+1]=r.y,A[K+W+2]=r.z,A[K+W+3]=0),y===!0&&(r.fromBufferAttribute(z,j),A[K+W+4]=r.x,A[K+W+5]=r.y,A[K+W+6]=r.z,A[K+W+7]=0),m===!0&&(r.fromBufferAttribute(q,j),A[K+W+8]=r.x,A[K+W+9]=r.y,A[K+W+10]=r.z,A[K+W+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Ke(C,w)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function nR(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class fx extends un{constructor(e,n,i,r,s,o,a,l,u,c=Ws){if(c!==Ws&&c!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ws&&(i=to),i===void 0&&c===io&&(i=no),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const dx=new un,hx=new fx(1,1);hx.compareFunction=Ky;const px=new Jy,mx=new VT,gx=new lx,Hg=[],Gg=[],Wg=new Float32Array(16),jg=new Float32Array(9),Xg=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hg[r];if(s===void 0&&(s=new Float32Array(r),Hg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qu(t,e){let n=Gg[e];n===void 0&&(n=new Int32Array(e),Gg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function aR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),Rt(n,i)}}function lR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;jg.set(i),t.uniformMatrix3fv(this.addr,!1,jg),Rt(n,i)}}function uR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Wg.set(i),t.uniformMatrix4fv(this.addr,!1,Wg),Rt(n,i)}}function cR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function dR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function hR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function pR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function gR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function _R(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?hx:dx;n.setTexture2D(e||s,r)}function yR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mx,r)}function xR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gx,r)}function SR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||px,r)}function MR(t){switch(t){case 5126:return iR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return aR;case 35675:return lR;case 35676:return uR;case 5124:case 35670:return cR;case 35667:case 35671:return fR;case 35668:case 35672:return dR;case 35669:case 35673:return hR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return _R;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return SR}}function ER(t,e){t.uniform1fv(this.addr,e)}function TR(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function wR(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function AR(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function CR(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RR(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PR(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bR(t,e){t.uniform1iv(this.addr,e)}function LR(t,e){t.uniform2iv(this.addr,e)}function DR(t,e){t.uniform3iv(this.addr,e)}function IR(t,e){t.uniform4iv(this.addr,e)}function NR(t,e){t.uniform1uiv(this.addr,e)}function UR(t,e){t.uniform2uiv(this.addr,e)}function FR(t,e){t.uniform3uiv(this.addr,e)}function OR(t,e){t.uniform4uiv(this.addr,e)}function kR(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||dx,s[o])}function BR(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||mx,s[o])}function zR(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||gx,s[o])}function VR(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||px,s[o])}function HR(t){switch(t){case 5126:return ER;case 35664:return TR;case 35665:return wR;case 35666:return AR;case 35674:return CR;case 35675:return RR;case 35676:return PR;case 5124:case 35670:return bR;case 35667:case 35671:return LR;case 35668:case 35672:return DR;case 35669:case 35673:return IR;case 5125:return NR;case 36294:return UR;case 36295:return FR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return kR;case 35679:case 36299:case 36307:return BR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return VR}}class GR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MR(n.type)}}class WR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HR(n.type)}}class jR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function Yg(t,e){t.seq.push(e),t.map[e.id]=e}function XR(t,e,n){const i=t.name,r=i.length;for(cf.lastIndex=0;;){const s=cf.exec(i),o=cf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Yg(n,u===void 0?new GR(a,t,e):new WR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new jR(a),Yg(n,f)),n=f}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);XR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YR=37297;let qR=0;function KR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function $R(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===vu&&n===gu?i="LinearDisplayP3ToLinearSRGB":e===gu&&n===vu&&(i="LinearSRGBToLinearDisplayP3"),t){case gr:case ju:return[i,"LinearTransferOETF"];case Qn:case Vh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+KR(t.getShaderSource(e),o)}else return r}function ZR(t,e){const n=$R(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function QR(t,e){let n;switch(e){case rT:n="Linear";break;case sT:n="Reinhard";break;case oT:n="OptimizedCineon";break;case aT:n="ACESFilmic";break;case uT:n="AgX";break;case cT:n="Neutral";break;case lT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function JR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function e2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function t2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Uo(t){return t!==""}function $g(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(t){return t.replace(n2,r2)}const i2=new Map;function r2(t,e){let n=Le[e];if(n===void 0){const i=i2.get(e);if(i!==void 0)n=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ad(n)}const s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(s2,o2)}function o2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===b1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function l2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function c2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vy:e="ENVMAP_BLENDING_MULTIPLY";break;case nT:e="ENVMAP_BLENDING_MIX";break;case iT:e="ENVMAP_BLENDING_ADD";break}return e}function f2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function d2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=a2(n),u=l2(n),c=u2(n),f=c2(n),d=f2(n),p=JR(n),_=e2(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Uo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Uo).join(`
`),h.length>0&&(h+=`
`)):(m=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),h=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Le.tonemapping_pars_fragment:"",n.toneMapping!==sr?QR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,ZR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Ad(o),o=$g(o,n),o=Zg(o,n),a=Ad(a),a=$g(a,n),a=Zg(a,n),o=Qg(o),a=Qg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+o,S=g+h+a,C=qg(r,r.VERTEX_SHADER,v),w=qg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(w).trim();let K=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,w);else{const W=Kg(r,C,"vertex"),I=Kg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+W+`
`+I)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||q==="")&&(j=!1);j&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:h}})}r.deleteShader(C),r.deleteShader(w),R=new Bl(r,y),T=t2(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,YR)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}let h2=0;class p2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m2(e),n.set(e,i)),i}}class m2{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}}function g2(t,e,n,i,r,s,o){const a=new tx,l=new p2,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,x,L,H,z){const q=H.fog,K=z.geometry,j=T.isMeshStandardMaterial?H.environment:null,W=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),I=W&&W.mapping===Gu?W.image.height:null,Y=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Z=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=Z!==void 0?Z.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let Ge,G,ne,de;if(Y){const et=ei[Y];Ge=et.vertexShader,G=et.fragmentShader}else Ge=T.vertexShader,G=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),de=l.getFragmentShaderID(T);const ae=t.getRenderTarget(),Fe=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,We=!!T.map,N=!!T.matcap,He=!!W,ze=!!T.aoMap,lt=!!T.lightMap,we=!!T.bumpMap,Xe=!!T.normalMap,Oe=!!T.displacementMap,be=!!T.emissiveMap,St=!!T.metalnessMap,P=!!T.roughnessMap,M=T.anisotropy>0,V=T.clearcoat>0,Q=T.dispersion>0,J=T.iridescence>0,ee=T.sheen>0,Me=T.transmission>0,ue=M&&!!T.anisotropyMap,ce=V&&!!T.clearcoatMap,Ne=V&&!!T.clearcoatNormalMap,ie=V&&!!T.clearcoatRoughnessMap,ye=J&&!!T.iridescenceMap,Be=J&&!!T.iridescenceThicknessMap,Re=ee&&!!T.sheenColorMap,fe=ee&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ve=!!T.specularColorMap,vt=!!T.specularIntensityMap,D=Me&&!!T.transmissionMap,he=Me&&!!T.thicknessMap,X=!!T.gradientMap,$=!!T.alphaMap,se=T.alphaTest>0,Pe=!!T.alphaHash,Ye=!!T.extensions;let _t=sr;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Pt={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:G,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:gr,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:N,envMap:He,envMapMode:He&&W.mapping,envMapCubeUVHeight:I,aoMap:ze,lightMap:lt,bumpMap:we,normalMap:Xe,displacementMap:d&&Oe,emissiveMap:be,normalMapObjectSpace:Xe&&T.normalMapType===wT,normalMapTangentSpace:Xe&&T.normalMapType===TT,metalnessMap:St,roughnessMap:P,anisotropy:M,anisotropyMap:ue,clearcoat:V,clearcoatMap:ce,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:Be,sheen:ee,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:Ue,specularColorMap:Ve,specularIntensityMap:vt,transmission:Me,transmissionMap:D,thicknessMap:he,gradientMap:X,opaque:T.transparent===!1&&T.blending===Gs&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:se,alphaHash:Pe,combine:T.combine,mapUv:We&&y(T.map.channel),aoMapUv:ze&&y(T.aoMap.channel),lightMapUv:lt&&y(T.lightMap.channel),bumpMapUv:we&&y(T.bumpMap.channel),normalMapUv:Xe&&y(T.normalMap.channel),displacementMapUv:Oe&&y(T.displacementMap.channel),emissiveMapUv:be&&y(T.emissiveMap.channel),metalnessMapUv:St&&y(T.metalnessMap.channel),roughnessMapUv:P&&y(T.roughnessMap.channel),anisotropyMapUv:ue&&y(T.anisotropyMap.channel),clearcoatMapUv:ce&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(T.sheenRoughnessMap.channel),specularMapUv:Ue&&y(T.specularMap.channel),specularColorMapUv:Ve&&y(T.specularColorMap.channel),specularIntensityMapUv:vt&&y(T.specularIntensityMap.channel),transmissionMapUv:D&&y(T.transmissionMap.channel),thicknessMapUv:he&&y(T.thicknessMap.channel),alphaMapUv:$&&y(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xe||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(We||$),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_i,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=u.has(1),Pt.vertexUv2s=u.has(2),Pt.vertexUv3s=u.has(3),u.clear(),Pt}function h(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)x.push(L),x.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(g(x,T),v(x,T),x.push(t.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function g(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function v(T,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),T.push(a.mask)}function S(T){const x=_[T.type];let L;if(x){const H=ei[x];L=JT.clone(H.uniforms)}else L=T.uniforms;return L}function C(T,x){let L;for(let H=0,z=c.length;H<z;H++){const q=c[H];if(q.cacheKey===x){L=q,++L.usedTimes;break}}return L===void 0&&(L=new d2(t,x,T,s),c.push(L)),L}function w(T){if(--T.usedTimes===0){const x=c.indexOf(T);c[x]=c[c.length-1],c.pop(),T.destroy()}}function A(T){l.remove(T)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:R}}function v2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ev(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||_2),i.length>1&&i.sort(d||ev),r.length>1&&r.sort(d||ev)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function y2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new tv,t.set(i,[o])):r>=s.length?(o=new tv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function x2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Qe};break;case"SpotLight":n={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function S2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M2=0;function E2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T2(t){const e=new x2,n=S2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Tt,o=new Tt;function a(u){let c=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,y=0,m=0,h=0,g=0,v=0,S=0,C=0,w=0,A=0;u.sort(E2);for(let T=0,x=u.length;T<x;T++){const L=u[T],H=L.color,z=L.intensity,q=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=H.r*z,f+=H.g*z,d+=H.b*z;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],z);A++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,I=n.get(L);I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(H).multiplyScalar(z),j.distance=q,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[y]=j;const W=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,W.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=W.matrix,L.castShadow){const I=n.get(L);I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=K,S++}y++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(H).multiplyScalar(z),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const W=L.shadow,I=n.get(L);I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=j,_++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(z),j.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[h]=j,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=A,i.version=M2++)}function l(u,c){let f=0,d=0,p=0,_=0,y=0;const m=c.matrixWorldInverse;for(let h=0,g=u.length;h<g;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function nv(t){const e=new T2(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function w2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nv(t),e.set(r,[a])):s>=o.length?(a=new nv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class A2 extends Ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C2 extends Ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function b2(t,e,n){let i=new ux;const r=new Ke,s=new Ke,o=new kt,a=new A2({depthPacking:ET}),l=new C2,u={},c=n.maxTextureSize,f={[lr]:ln,[ln]:lr,[_i]:_i},d=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:R2,fragmentShader:P2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zy;let h=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=t.getRenderTarget(),x=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(rr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=h!==mi&&this.type===mi,q=h===mi&&this.type!==mi;for(let K=0,j=w.length;K<j;K++){const W=w[K],I=W.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Y=I.getFrameExtents();if(r.multiply(Y),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,I.mapSize.y=s.y)),I.map===null||z===!0||q===!0){const oe=this.type!==mi?{minFilter:Ln,magFilter:Ln}:{};I.map!==null&&I.map.dispose(),I.map=new $r(r.x,r.y,oe),I.map.texture.name=W.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Z=I.getViewportCount();for(let oe=0;oe<Z;oe++){const xe=I.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(o),I.updateMatrices(W,oe),i=I.getFrustum(),S(A,R,I.camera,W,this.type)}I.isPointLightShadow!==!0&&this.type===mi&&g(I,R),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,x,L)};function g(w,A){const R=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $r(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,R,d,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,R,p,y,null)}function v(w,A,R,T){let x=null;const L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=x.uuid,z=A.uuid;let q=u[H];q===void 0&&(q={},u[H]=q);let K=q[z];K===void 0&&(K=x.clone(),q[z]=K,A.addEventListener("dispose",C)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,T===mi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=t.properties.get(x);H.light=R}return x}function S(w,A,R,T,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===mi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=e.update(w),q=w.material;if(Array.isArray(q)){const K=z.groups;for(let j=0,W=K.length;j<W;j++){const I=K[j],Y=q[I.materialIndex];if(Y&&Y.visible){const Z=v(w,Y,T,x);w.onBeforeShadow(t,w,A,R,z,Z,I),t.renderBufferDirect(R,null,z,Z,w,I),w.onAfterShadow(t,w,A,R,z,Z,I)}}}else if(q.visible){const K=v(w,q,T,x);w.onBeforeShadow(t,w,A,R,z,K,null),t.renderBufferDirect(R,null,z,K,w,null),w.onAfterShadow(t,w,A,R,z,K,null)}}const H=w.children;for(let z=0,q=H.length;z<q;z++)S(H[z],A,R,T,x)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const T=u[R],x=w.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}function L2(t){function e(){let D=!1;const he=new kt;let X=null;const $=new kt(0,0,0,0);return{setMask:function(se){X!==se&&!D&&(t.colorMask(se,se,se,se),X=se)},setLocked:function(se){D=se},setClear:function(se,Pe,Ye,_t,Pt){Pt===!0&&(se*=_t,Pe*=_t,Ye*=_t),he.set(se,Pe,Ye,_t),$.equals(he)===!1&&(t.clearColor(se,Pe,Ye,_t),$.copy(he))},reset:function(){D=!1,X=null,$.set(-1,0,0,0)}}}function n(){let D=!1,he=null,X=null,$=null;return{setTest:function(se){se?de(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(se){he!==se&&!D&&(t.depthMask(se),he=se)},setFunc:function(se){if(X!==se){switch(se){case K1:t.depthFunc(t.NEVER);break;case $1:t.depthFunc(t.ALWAYS);break;case Z1:t.depthFunc(t.LESS);break;case hu:t.depthFunc(t.LEQUAL);break;case Q1:t.depthFunc(t.EQUAL);break;case J1:t.depthFunc(t.GEQUAL);break;case eT:t.depthFunc(t.GREATER);break;case tT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=se}},setLocked:function(se){D=se},setClear:function(se){$!==se&&(t.clearDepth(se),$=se)},reset:function(){D=!1,he=null,X=null,$=null}}}function i(){let D=!1,he=null,X=null,$=null,se=null,Pe=null,Ye=null,_t=null,Pt=null;return{setTest:function(et){D||(et?de(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(et){he!==et&&!D&&(t.stencilMask(et),he=et)},setFunc:function(et,qn,Kn){(X!==et||$!==qn||se!==Kn)&&(t.stencilFunc(et,qn,Kn),X=et,$=qn,se=Kn)},setOp:function(et,qn,Kn){(Pe!==et||Ye!==qn||_t!==Kn)&&(t.stencilOp(et,qn,Kn),Pe=et,Ye=qn,_t=Kn)},setLocked:function(et){D=et},setClear:function(et){Pt!==et&&(t.clearStencil(et),Pt=et)},reset:function(){D=!1,he=null,X=null,$=null,se=null,Pe=null,Ye=null,_t=null,Pt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,h=null,g=null,v=null,S=null,C=null,w=new Qe(0,0,0),A=0,R=!1,T=null,x=null,L=null,H=null,z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=j>=2);let I=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new kt().fromArray(Z),Ge=new kt().fromArray(oe);function G(D,he,X,$){const se=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(D,Pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<X;Ye++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(he+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return Pe}const ne={};ne[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(hu),we(!1),Xe(Om),de(t.CULL_FACE),ze(rr);function de(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ae(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Fe(D,he){return c[D]!==he?(t.bindFramebuffer(D,he),c[D]=he,D===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ie(D,he){let X=d,$=!1;if(D){X=f.get(he),X===void 0&&(X=[],f.set(he,X));const se=D.textures;if(X.length!==se.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Ye=se.length;Pe<Ye;Pe++)X[Pe]=t.COLOR_ATTACHMENT0+Pe;X.length=se.length,$=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,$=!0);$&&t.drawBuffers(X)}function We(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const N={[Ir]:t.FUNC_ADD,[D1]:t.FUNC_SUBTRACT,[I1]:t.FUNC_REVERSE_SUBTRACT};N[N1]=t.MIN,N[U1]=t.MAX;const He={[F1]:t.ZERO,[O1]:t.ONE,[k1]:t.SRC_COLOR,[yd]:t.SRC_ALPHA,[W1]:t.SRC_ALPHA_SATURATE,[H1]:t.DST_COLOR,[z1]:t.DST_ALPHA,[B1]:t.ONE_MINUS_SRC_COLOR,[xd]:t.ONE_MINUS_SRC_ALPHA,[G1]:t.ONE_MINUS_DST_COLOR,[V1]:t.ONE_MINUS_DST_ALPHA,[j1]:t.CONSTANT_COLOR,[X1]:t.ONE_MINUS_CONSTANT_COLOR,[Y1]:t.CONSTANT_ALPHA,[q1]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(D,he,X,$,se,Pe,Ye,_t,Pt,et){if(D===rr){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),D!==L1){if(D!==y||et!==R){if((m!==Ir||v!==Ir)&&(t.blendEquation(t.FUNC_ADD),m=Ir,v=Ir),et)switch(D){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case km:t.blendFunc(t.ONE,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case km:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,g=null,S=null,C=null,w.set(0,0,0),A=0,y=D,R=et}return}se=se||he,Pe=Pe||X,Ye=Ye||$,(he!==m||se!==v)&&(t.blendEquationSeparate(N[he],N[se]),m=he,v=se),(X!==h||$!==g||Pe!==S||Ye!==C)&&(t.blendFuncSeparate(He[X],He[$],He[Pe],He[Ye]),h=X,g=$,S=Pe,C=Ye),(_t.equals(w)===!1||Pt!==A)&&(t.blendColor(_t.r,_t.g,_t.b,Pt),w.copy(_t),A=Pt),y=D,R=!1}function lt(D,he){D.side===_i?ae(t.CULL_FACE):de(t.CULL_FACE);let X=D.side===ln;he&&(X=!X),we(X),D.blending===Gs&&D.transparent===!1?ze(rr):ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){T!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),T=D)}function Xe(D){D!==R1?(de(t.CULL_FACE),D!==x&&(D===Om?t.cullFace(t.BACK):D===P1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),x=D}function Oe(D){D!==L&&(K&&t.lineWidth(D),L=D)}function be(D,he,X){D?(de(t.POLYGON_OFFSET_FILL),(H!==he||z!==X)&&(t.polygonOffset(he,X),H=he,z=X)):ae(t.POLYGON_OFFSET_FILL)}function St(D){D?de(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function P(D){D===void 0&&(D=t.TEXTURE0+q-1),I!==D&&(t.activeTexture(D),I=D)}function M(D,he,X){X===void 0&&(I===null?X=t.TEXTURE0+q-1:X=I);let $=Y[X];$===void 0&&($={type:void 0,texture:void 0},Y[X]=$),($.type!==D||$.texture!==he)&&(I!==X&&(t.activeTexture(X),I=X),t.bindTexture(D,he||ne[D]),$.type=D,$.texture=he)}function V(){const D=Y[I];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){xe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function fe(D){Ge.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function Ue(D,he){let X=l.get(he);X===void 0&&(X=new WeakMap,l.set(he,X));let $=X.get(D);$===void 0&&($=t.getUniformBlockIndex(he,D.name),X.set(D,$))}function Ve(D,he){const $=l.get(he).get(D);a.get(he)!==$&&(t.uniformBlockBinding(he,$,D.__bindingPointIndex),a.set(he,$))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,Y={},c={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,h=null,g=null,v=null,S=null,C=null,w=new Qe(0,0,0),A=0,R=!1,T=null,x=null,L=null,H=null,z=null,xe.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ae,bindFramebuffer:Fe,drawBuffers:Ie,useProgram:We,setBlending:ze,setMaterial:lt,setFlipSided:we,setCullFace:Xe,setLineWidth:Oe,setPolygonOffset:be,setScissorTest:St,activeTexture:P,bindTexture:M,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ye,texImage3D:Be,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:Ne,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ce,scissor:Re,viewport:fe,reset:vt}}function D2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return p?new OffscreenCanvas(P,M):yu("canvas")}function y(P,M,V){let Q=1;const J=St(P);if((J.width>V||J.height>V)&&(Q=V/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(Q*J.width),Me=Math.floor(Q*J.height);f===void 0&&(f=_(ee,Me));const ue=M?_(ee,Me):f;return ue.width=ee,ue.height=Me,ue.getContext("2d").drawImage(P,0,0,ee,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+Me+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Ln&&P.minFilter!==Wn}function h(P){t.generateMipmap(P)}function g(P,M,V,Q,J=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=M;if(M===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),M===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),M===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Me=J?mu:Ze.getTransfer(Q);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Me===st?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(P,M){let V;return P?M===null||M===to||M===no?V=t.DEPTH24_STENCIL8:M===Ki?V=t.DEPTH32F_STENCIL8:M===pu&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===to||M===no?V=t.DEPTH_COMPONENT24:M===Ki?V=t.DEPTH_COMPONENT32F:M===pu&&(V=t.DEPTH_COMPONENT16),V}function S(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&c.delete(M)}function w(P){const M=P.target;M.removeEventListener("dispose",w),T(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const V=P.source,Q=d.get(V);if(Q){const J=Q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(P),Object.keys(Q).length===0&&d.delete(V)}i.remove(P)}function R(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const V=P.source,Q=d.get(V);delete Q[M.__cacheKey],o.memory.textures--}function T(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let J=0;J<M.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let Q=0,J=V.length;Q<J;Q++){const ee=i.get(V[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(P)}let x=0;function L(){x=0}function H(){const P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function z(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function q(P,M){const V=i.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(V,P,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function K(P,M){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ge(V,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function j(P,M){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ge(V,P,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function W(P,M){const V=i.get(P);if(P.version>0&&V.__version!==P.version){G(V,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const I={[Ed]:t.REPEAT,[kr]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},Y={[Ln]:t.NEAREST,[fT]:t.NEAREST_MIPMAP_NEAREST,[Ja]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[Dc]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},Z={[AT]:t.NEVER,[DT]:t.ALWAYS,[CT]:t.LESS,[Ky]:t.LEQUAL,[RT]:t.EQUAL,[LT]:t.GEQUAL,[PT]:t.GREATER,[bT]:t.NOTEQUAL};function oe(P,M){if(M.type===Ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===Dc||M.magFilter===Ja||M.magFilter===Br||M.minFilter===Wn||M.minFilter===Dc||M.minFilter===Ja||M.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==Ja&&M.minFilter!==Br||M.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function xe(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const Q=M.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const ee=z(M);if(ee!==P.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[ee].usedTimes++;const Me=J[P.__cacheKey];Me!==void 0&&(J[P.__cacheKey].usedTimes--,Me.usedTimes===0&&R(M)),P.__cacheKey=ee,P.__webglTexture=J[ee].texture}return V}function Ge(P,M,V){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const J=xe(P,M),ee=M.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+V);const Me=i.get(ee);if(ee.version!==Me.__version||J===!0){n.activeTexture(t.TEXTURE0+V);const ue=Ze.getPrimaries(Ze.workingColorSpace),ce=M.colorSpace===Xi?null:Ze.getPrimaries(M.colorSpace),Ne=M.colorSpace===Xi||ue===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ie=y(M.image,!1,r.maxTextureSize);ie=be(M,ie);const ye=s.convert(M.format,M.colorSpace),Be=s.convert(M.type);let Re=g(M.internalFormat,ye,Be,M.colorSpace,M.isVideoTexture);oe(Q,M);let fe;const Ue=M.mipmaps,Ve=M.isVideoTexture!==!0,vt=Me.__version===void 0||J===!0,D=ee.dataReady,he=S(M,ie);if(M.isDepthTexture)Re=v(M.format===io,M.type),vt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,ye,Be,null));else if(M.isDataTexture)if(Ue.length>0){Ve&&vt&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ue[0].width,Ue[0].height);for(let X=0,$=Ue.length;X<$;X++)fe=Ue[X],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,fe.width,fe.height,ye,Be,fe.data):n.texImage2D(t.TEXTURE_2D,X,Re,fe.width,fe.height,0,ye,Be,fe.data);M.generateMipmaps=!1}else Ve?(vt&&n.texStorage2D(t.TEXTURE_2D,he,Re,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,Be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,ye,Be,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,Ue[0].width,Ue[0].height,ie.depth);for(let X=0,$=Ue.length;X<$;X++)if(fe=Ue[X],M.format!==ii)if(ye!==null)if(Ve){if(D)if(M.layerUpdates.size>0){for(const se of M.layerUpdates){const Pe=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,se,fe.width,fe.height,1,ye,fe.data.slice(Pe*se,Pe*(se+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ie.depth,ye,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Re,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ie.depth,ye,Be,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Re,fe.width,fe.height,ie.depth,0,ye,Be,fe.data)}else{Ve&&vt&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ue[0].width,Ue[0].height);for(let X=0,$=Ue.length;X<$;X++)fe=Ue[X],M.format!==ii?ye!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,fe.width,fe.height,ye,Be,fe.data):n.texImage2D(t.TEXTURE_2D,X,Re,fe.width,fe.height,0,ye,Be,fe.data)}else if(M.isDataArrayTexture)if(Ve){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){let X;switch(Be){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:X=1;break;case t.LUMINANCE:X=1;break;case t.LUMINANCE_ALPHA:X=2;break;case t.RGB:X=3;break;case t.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${Be}.`)}const $=ie.width*ie.height*X;for(const se of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,ie.width,ie.height,1,ye,Be,ie.data.slice($*se,$*(se+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,ye,Be,ie.data);else if(M.isData3DTexture)Ve?(vt&&n.texStorage3D(t.TEXTURE_3D,he,Re,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,ye,Be,ie.data);else if(M.isFramebufferTexture){if(vt)if(Ve)n.texStorage2D(t.TEXTURE_2D,he,Re,ie.width,ie.height);else{let X=ie.width,$=ie.height;for(let se=0;se<he;se++)n.texImage2D(t.TEXTURE_2D,se,Re,X,$,0,ye,Be,null),X>>=1,$>>=1}}else if(Ue.length>0){if(Ve&&vt){const X=St(Ue[0]);n.texStorage2D(t.TEXTURE_2D,he,Re,X.width,X.height)}for(let X=0,$=Ue.length;X<$;X++)fe=Ue[X],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ye,Be,fe):n.texImage2D(t.TEXTURE_2D,X,Re,ye,Be,fe);M.generateMipmaps=!1}else if(Ve){if(vt){const X=St(ie);n.texStorage2D(t.TEXTURE_2D,he,Re,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,ye,Be,ie);m(M)&&h(Q),Me.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function G(P,M,V){if(M.image.length!==6)return;const Q=xe(P,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+V);const ee=i.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+V);const Me=Ze.getPrimaries(Ze.workingColorSpace),ue=M.colorSpace===Xi?null:Ze.getPrimaries(M.colorSpace),ce=M.colorSpace===Xi||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let $=0;$<6;$++)!Ne&&!ie?ye[$]=y(M.image[$],!0,r.maxCubemapSize):ye[$]=ie?M.image[$].image:M.image[$],ye[$]=be(M,ye[$]);const Be=ye[0],Re=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),Ue=g(M.internalFormat,Re,fe,M.colorSpace),Ve=M.isVideoTexture!==!0,vt=ee.__version===void 0||Q===!0,D=J.dataReady;let he=S(M,Be);oe(t.TEXTURE_CUBE_MAP,M);let X;if(Ne){Ve&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ue,Be.width,Be.height);for(let $=0;$<6;$++){X=ye[$].mipmaps;for(let se=0;se<X.length;se++){const Pe=X[se];M.format!==ii?Re!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,Pe.width,Pe.height,Re,fe,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,Ue,Pe.width,Pe.height,0,Re,fe,Pe.data)}}}else{if(X=M.mipmaps,Ve&&vt){X.length>0&&he++;const $=St(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ue,$.width,$.height)}for(let $=0;$<6;$++)if(ie){Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye[$].width,ye[$].height,Re,fe,ye[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,ye[$].width,ye[$].height,0,Re,fe,ye[$].data);for(let se=0;se<X.length;se++){const Ye=X[se].image[$].image;Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,Ye.width,Ye.height,Re,fe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,Ue,Ye.width,Ye.height,0,Re,fe,Ye.data)}}else{Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re,fe,ye[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,Re,fe,ye[$]);for(let se=0;se<X.length;se++){const Pe=X[se];Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,Re,fe,Pe.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,Ue,Re,fe,Pe.image[$])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),ee.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,V,Q,J,ee){const Me=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),ce=g(V.internalFormat,Me,ue,V.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>ee),ye=Math.max(1,M.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,ce,ie,ye,M.depth,0,Me,ue,null):n.texImage2D(J,ee,ce,ie,ye,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,i.get(V).__webglTexture,0,we(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,i.get(V).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(P,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const Q=M.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,ee=v(M.stencilBuffer,J),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=we(M);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ee,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,P)}else{const Q=M.textures;for(let J=0;J<Q.length;J++){const ee=Q[J],Me=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),ce=g(ee.internalFormat,Me,ue,ee.colorSpace),Ne=we(M);V&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ce,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ce,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,J=we(M);if(M.depthTexture.format===Ws)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===io)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const M=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,P)}else if(V){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),de(M.__webglDepthbuffer[Q],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(P,M,V){const Q=i.get(P);M!==void 0&&ne(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Fe(P)}function We(P){const M=P.texture,V=i.get(P),Q=i.get(M);P.addEventListener("dispose",w);const J=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let ce=0;ce<M.mipmaps.length;ce++)V.__webglFramebuffer[ue][ce]=t.createFramebuffer()}else V.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)V.__webglFramebuffer[ue]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,ce=J.length;ue<ce;ue++){const Ne=i.get(J[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Xe(P)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const ce=J[ue];V.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ne=s.convert(ce.format,ce.colorSpace),ie=s.convert(ce.type),ye=g(ce.internalFormat,Ne,ie,ce.colorSpace,P.isXRRenderTarget===!0),Be=we(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ye,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),de(V.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)ne(V.__webglFramebuffer[ue][ce],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else ne(V.__webglFramebuffer[ue],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,ce=J.length;ue<ce;ue++){const Ne=J[ue],ie=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),oe(t.TEXTURE_2D,Ne),ne(V.__webglFramebuffer,P,Ne,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Ne)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),oe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)ne(V.__webglFramebuffer[ce],P,M,t.COLOR_ATTACHMENT0,ue,ce);else ne(V.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&h(ue),n.unbindTexture()}P.depthBuffer&&Fe(P)}function N(P){const M=P.textures;for(let V=0,Q=M.length;V<Q;V++){const J=M[V];if(m(J)){const ee=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(J).__webglTexture;n.bindTexture(ee,Me),h(ee),n.unbindTexture()}}}const He=[],ze=[];function lt(P){if(P.samples>0){if(Xe(P)===!1){const M=P.textures,V=P.width,Q=P.height;let J=t.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(P),ue=M.length>1;if(ue)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Ne=i.get(M[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,V,Q,0,0,V,Q,J,t.NEAREST),l===!0&&(He.length=0,ze.length=0,He.push(t.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(ee),ze.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Ne=i.get(M[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function we(P){return Math.min(r.maxSamples,P.samples)}function Xe(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Oe(P){const M=o.render.frame;c.get(P)!==M&&(c.set(P,M),P.update())}function be(P,M){const V=P.colorSpace,Q=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==gr&&V!==Xi&&(Ze.getTransfer(V)===st?(Q!==ii||J!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function St(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Ie,this.setupRenderTarget=We,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function I2(t,e){function n(i,r=Xi){let s;const o=Ze.getTransfer(r);if(i===ur)return t.UNSIGNED_BYTE;if(i===Wy)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jy)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pT)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dT)return t.BYTE;if(i===hT)return t.SHORT;if(i===pu)return t.UNSIGNED_SHORT;if(i===Gy)return t.INT;if(i===to)return t.UNSIGNED_INT;if(i===Ki)return t.FLOAT;if(i===Wu)return t.HALF_FLOAT;if(i===mT)return t.ALPHA;if(i===gT)return t.RGB;if(i===ii)return t.RGBA;if(i===vT)return t.LUMINANCE;if(i===_T)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===io)return t.DEPTH_STENCIL;if(i===yT)return t.RED;if(i===Xy)return t.RED_INTEGER;if(i===xT)return t.RG;if(i===Yy)return t.RG_INTEGER;if(i===qy)return t.RGBA_INTEGER;if(i===Ic||i===Nc||i===Uc||i===Fc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vm||i===Hm||i===Gm||i===Wm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jm||i===Xm||i===Ym)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jm||i===Xm)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ym)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qm||i===Km||i===$m||i===Zm||i===Qm||i===Jm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qm)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Km)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$m)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zm)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qm)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jm)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eg)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tg)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ng)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ig)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rg)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sg)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===og)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ag)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===lg||i===ug)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ug)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ST||i===cg||i===fg||i===dg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===no?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class N2 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U2={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const F2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:F2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mi(new Yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class B2 extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const y=new k2,m=n.getContextAttributes();let h=null,g=null;const v=[],S=[],C=new Ke;let w=null;const A=new Pn;A.layers.enable(1),A.viewport=new kt;const R=new Pn;R.layers.enable(2),R.viewport=new kt;const T=[A,R],x=new N2;x.layers.enable(1),x.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=v[G];return ne===void 0&&(ne=new ff,v[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=v[G];return ne===void 0&&(ne=new ff,v[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=v[G];return ne===void 0&&(ne=new ff,v[G]=ne),ne.getHandSpace()};function z(G){const ne=S.indexOf(G.inputSource);if(ne===-1)return;const de=v[ne];de!==void 0&&(de.update(G.inputSource,G.frame,u||o),de.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let G=0;G<v.length;G++){const ne=S[G];ne!==null&&(S[G]=null,v[G].disconnect(ne))}L=null,H=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,g=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new $r(p.framebufferWidth,p.framebufferHeight,{format:ii,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?io:Ws,de=m.stencil?no:to);const Fe={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new $r(d.textureWidth,d.textureHeight,{format:ii,type:ur,depthTexture:new fx(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(G){for(let ne=0;ne<G.removed.length;ne++){const de=G.removed[ne],ae=S.indexOf(de);ae>=0&&(S[ae]=null,v[ae].disconnect(de))}for(let ne=0;ne<G.added.length;ne++){const de=G.added[ne];let ae=S.indexOf(de);if(ae===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=S.length){S.push(de),ae=Ie;break}else if(S[Ie]===null){S[Ie]=de,ae=Ie;break}if(ae===-1)break}const Fe=v[ae];Fe&&Fe.connect(de)}}const j=new B,W=new B;function I(G,ne,de){j.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const ae=j.distanceTo(W),Fe=ne.projectionMatrix.elements,Ie=de.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),N=Fe[14]/(Fe[10]+1),He=(Fe[9]+1)/Fe[5],ze=(Fe[9]-1)/Fe[5],lt=(Fe[8]-1)/Fe[0],we=(Ie[8]+1)/Ie[0],Xe=We*lt,Oe=We*we,be=ae/(-lt+we),St=be*-lt;ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(St),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const P=We+be,M=N+be,V=Xe-St,Q=Oe+(ae-St),J=He*N/M*P,ee=ze*N/M*P;G.projectionMatrix.makePerspective(V,Q,J,ee,P,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.texture!==null&&(G.near=y.depthNear,G.far=y.depthFar),x.near=R.near=A.near=G.near,x.far=R.far=A.far=G.far,(L!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,H=x.far,A.near=L,A.far=H,R.near=L,R.far=H,A.updateProjectionMatrix(),R.updateProjectionMatrix(),G.updateProjectionMatrix());const ne=G.parent,de=x.cameras;Y(x,ne);for(let ae=0;ae<de.length;ae++)Y(de[ae],ne);de.length===2?I(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),Z(G,x,ne)};function Z(G,ne,de){de===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=wd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let oe=null;function xe(G,ne){if(c=ne.getViewerPose(u||o),_=ne,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ae=!1;de.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Ie=0;Ie<de.length;Ie++){const We=de[Ie];let N=null;if(p!==null)N=p.getViewport(We);else{const ze=f.getViewSubImage(d,We);N=ze.viewport,Ie===0&&(e.setRenderTargetTextures(g,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(g))}let He=T[Ie];He===void 0&&(He=new Pn,He.layers.enable(Ie),He.viewport=new kt,T[Ie]=He),He.matrix.fromArray(We.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(We.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(N.x,N.y,N.width,N.height),Ie===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(He)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ie=f.getDepthInformation(de[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let de=0;de<v.length;de++){const ae=S[de],Fe=v[de];ae!==null&&Fe!==void 0&&Fe.update(ae,ne,u||o)}oe&&oe(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Ge=new cx;Ge.setAnimationLoop(xe),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const wr=new bi,z2=new Tt;function V2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ox(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,wr.copy(S),wr.x*=-1,wr.y*=-1,wr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(z2.makeRotationFromEuler(wr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function u(g,v){let S=r[g.id];S===void 0&&(_(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const w=e.render.frame;s[g.id]!==w&&(d(g),s[g.id]=w)}function c(g){const v=f();g.__bindingPointIndex=v;const S=t.createBuffer(),C=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,A=S.length;w<A;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let T=0,x=R.length;T<x;T++){const L=R[T];if(p(L,w,T,C)===!0){const H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let K=0;K<z.length;K++){const j=z[K],W=y(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,H+q,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,C){const w=g.value,A=v+"_"+S;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const R=C[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(g){const v=g.uniforms;let S=0;const C=16;for(let A=0,R=v.length;A<R;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,L=T.length;x<L;x++){const H=T[x],z=Array.isArray(H.value)?H.value:[H.value];for(let q=0,K=z.length;q<K;q++){const j=z[q],W=y(j),I=S%C;I!==0&&C-I<W.boundary&&(S+=C-I),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=W.storage}}}const w=S%C;return w>0&&(S+=C-w),g.__size=S,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class G2{constructor(e={}){const{canvas:n=NT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=sr,this.toneMappingExposure=1;const v=this;let S=!1,C=0,w=0,A=null,R=-1,T=null;const x=new kt,L=new kt;let H=null;const z=new Qe(0);let q=0,K=n.width,j=n.height,W=1,I=null,Y=null;const Z=new kt(0,0,K,j),oe=new kt(0,0,K,j);let xe=!1;const Ge=new ux;let G=!1,ne=!1;const de=new Tt,ae=new B,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function We(){return A===null?W:1}let N=i;function He(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zh}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",X,!1),n.addEventListener("webglcontextcreationerror",$,!1),N===null){const U="webgl2";if(N=He(U,E),N===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,lt,we,Xe,Oe,be,St,P,M,V,Q,J,ee,Me,ue,ce,Ne,ie,ye,Be,Re,fe,Ue,Ve;function vt(){ze=new ZC(N),ze.init(),fe=new I2(N,ze),lt=new WC(N,ze,e,fe),we=new L2(N),Xe=new eR(N),Oe=new v2,be=new D2(N,ze,we,Oe,lt,fe,Xe),St=new XC(v),P=new $C(v),M=new ow(N),Ue=new HC(N,M),V=new QC(N,M,Xe,Ue),Q=new nR(N,V,M,Xe),ye=new tR(N,lt,be),ce=new jC(Oe),J=new g2(v,St,P,ze,lt,Ue,ce),ee=new V2(v,Oe),Me=new y2,ue=new w2(ze),ie=new VC(v,St,P,we,Q,d,l),Ne=new b2(v,Q,lt),Ve=new H2(N,Xe,lt,we),Be=new GC(N,ze,Xe),Re=new JC(N,ze,Xe),Xe.programs=J.programs,v.capabilities=lt,v.extensions=ze,v.properties=Oe,v.renderLists=Me,v.shadowMap=Ne,v.state=we,v.info=Xe}vt();const D=new B2(v,N);this.xr=D,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(K,j,!1))},this.getSize=function(E){return E.set(K,j)},this.setSize=function(E,U,O=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,j=U,n.width=Math.floor(E*W),n.height=Math.floor(U*W),O===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(K*W,j*W).floor()},this.setDrawingBufferSize=function(E,U,O){K=E,j=U,W=O,n.width=Math.floor(E*O),n.height=Math.floor(U*O),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,O,k){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,O,k),we.viewport(x.copy(Z).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,U,O,k){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,O,k),we.scissor(L.copy(oe).multiplyScalar(W).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){we.setScissorTest(xe=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,U=!0,O=!0){let k=0;if(E){let F=!1;if(A!==null){const re=A.texture.format;F=re===qy||re===Yy||re===Xy}if(F){const re=A.texture.type,pe=re===ur||re===to||re===pu||re===no||re===Wy||re===jy,ve=ie.getClearColor(),_e=ie.getClearAlpha(),Ae=ve.r,Ce=ve.g,Ee=ve.b;pe?(p[0]=Ae,p[1]=Ce,p[2]=Ee,p[3]=_e,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Ae,_[1]=Ce,_[2]=Ee,_[3]=_e,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT),O&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",X,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Me.dispose(),ue.dispose(),Oe.dispose(),St.dispose(),P.dispose(),Q.dispose(),Ue.dispose(),Ve.dispose(),J.dispose(),D.dispose(),D.removeEventListener("sessionstart",qn),D.removeEventListener("sessionend",Kn),_r.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Xe.autoReset,U=Ne.enabled,O=Ne.autoUpdate,k=Ne.needsUpdate,F=Ne.type;vt(),Xe.autoReset=E,Ne.enabled=U,Ne.autoUpdate=O,Ne.needsUpdate=k,Ne.type=F}function $(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const U=E.target;U.removeEventListener("dispose",se),Pe(U)}function Pe(E){Ye(E),Oe.remove(E)}function Ye(E){const U=Oe.get(E).programs;U!==void 0&&(U.forEach(function(O){J.releaseProgram(O)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,O,k,F,re){U===null&&(U=Fe);const pe=F.isMesh&&F.matrixWorld.determinant()<0,ve=$S(E,U,O,k,F);we.setMaterial(k,pe);let _e=O.index,Ae=1;if(k.wireframe===!0){if(_e=V.getWireframeAttribute(O),_e===void 0)return;Ae=2}const Ce=O.drawRange,Ee=O.attributes.position;let qe=Ce.start*Ae,ht=(Ce.start+Ce.count)*Ae;re!==null&&(qe=Math.max(qe,re.start*Ae),ht=Math.min(ht,(re.start+re.count)*Ae)),_e!==null?(qe=Math.max(qe,0),ht=Math.min(ht,_e.count)):Ee!=null&&(qe=Math.max(qe,0),ht=Math.min(ht,Ee.count));const pt=ht-qe;if(pt<0||pt===1/0)return;Ue.setup(F,k,ve,O,_e);let fn,$e=Be;if(_e!==null&&(fn=M.get(_e),$e=Re,$e.setIndex(fn)),F.isMesh)k.wireframe===!0?(we.setLineWidth(k.wireframeLinewidth*We()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(F.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),we.setLineWidth(Se*We()),F.isLineSegments?$e.setMode(N.LINES):F.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else F.isPoints?$e.setMode(N.POINTS):F.isSprite&&$e.setMode(N.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?$e.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):$e.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)$e.renderInstances(qe,pt,F.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,qt=Math.min(O.instanceCount,Se);$e.renderInstances(qe,pt,qt)}else $e.render(qe,pt)};function _t(E,U,O){E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,Na(E,U,O),E.side=lr,E.needsUpdate=!0,Na(E,U,O),E.side=_i):Na(E,U,O)}this.compile=function(E,U,O=null){O===null&&(O=E),m=ue.get(O),m.init(U),g.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==O&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const k=new Set;return E.traverse(function(F){const re=F.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const ve=re[pe];_t(ve,O,F),k.add(ve)}else _t(re,O,F),k.add(re)}),g.pop(),m=null,k},this.compileAsync=function(E,U,O=null){const k=this.compile(E,U,O);return new Promise(F=>{function re(){if(k.forEach(function(pe){Oe.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){F(E);return}setTimeout(re,10)}ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Pt=null;function et(E){Pt&&Pt(E)}function qn(){_r.stop()}function Kn(){_r.start()}const _r=new cx;_r.setAnimationLoop(et),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(E){Pt=E,D.setAnimationLoop(E),E===null?_r.stop():_r.start()},D.addEventListener("sessionstart",qn),D.addEventListener("sessionend",Kn),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(U),U=D.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,A),m=ue.get(E,g.length),m.init(U),g.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(de),ne=this.localClippingEnabled,G=ce.init(this.clippingPlanes,ne),y=Me.get(E,h.length),y.init(),h.push(y),D.enabled===!0&&D.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&nc(re,U,-1/0,v.sortObjects)}nc(E,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,Y),Ie=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Ie&&ie.addToRenderList(y,E),this.info.render.frame++,G===!0&&ce.beginShadows();const O=m.state.shadowsArray;Ne.render(O,E,U),G===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,F=y.transmissive;if(m.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let pe=0,ve=re.length;pe<ve;pe++){const _e=re[pe];Ep(k,F,E,_e)}Ie&&ie.render(E);for(let pe=0,ve=re.length;pe<ve;pe++){const _e=re[pe];Mp(y,E,_e,_e.viewport)}}else F.length>0&&Ep(k,F,E,U),Ie&&ie.render(E),Mp(y,E,U);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,U),Ue.resetDefaultState(),R=-1,T=null,g.pop(),g.length>0?(m=g[g.length-1],G===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function nc(E,U,O,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ge.intersectsSprite(E)){k&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const pe=Q.update(E),ve=E.material;ve.visible&&y.push(E,pe,ve,O,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ge.intersectsObject(E))){const pe=Q.update(E),ve=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(ve)){const _e=pe.groups;for(let Ae=0,Ce=_e.length;Ae<Ce;Ae++){const Ee=_e[Ae],qe=ve[Ee.materialIndex];qe&&qe.visible&&y.push(E,pe,qe,O,ae.z,Ee)}}else ve.visible&&y.push(E,pe,ve,O,ae.z,null)}}const re=E.children;for(let pe=0,ve=re.length;pe<ve;pe++)nc(re[pe],U,O,k)}function Mp(E,U,O,k){const F=E.opaque,re=E.transmissive,pe=E.transparent;m.setupLightsView(O),G===!0&&ce.setGlobalState(v.clippingPlanes,O),k&&we.viewport(x.copy(k)),F.length>0&&Ia(F,U,O),re.length>0&&Ia(re,U,O),pe.length>0&&Ia(pe,U,O),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ep(E,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new $r(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Wu:ur,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=m.state.transmissionRenderTarget[k.id],pe=k.viewport||x;re.setSize(pe.z,pe.w);const ve=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),Ie?ie.render(O):v.clear();const _e=v.toneMapping;v.toneMapping=sr;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),G===!0&&ce.setGlobalState(v.clippingPlanes,k),Ia(E,O,k),be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,qe=U.length;Ee<qe;Ee++){const ht=U[Ee],pt=ht.object,fn=ht.geometry,$e=ht.material,Se=ht.group;if($e.side===_i&&pt.layers.test(k.layers)){const qt=$e.side;$e.side=ln,$e.needsUpdate=!0,Tp(pt,O,k,fn,$e,Se),$e.side=qt,$e.needsUpdate=!0,Ce=!0}}Ce===!0&&(be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re))}v.setRenderTarget(ve),v.setClearColor(z,q),Ae!==void 0&&(k.viewport=Ae),v.toneMapping=_e}function Ia(E,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=E.length;F<re;F++){const pe=E[F],ve=pe.object,_e=pe.geometry,Ae=k===null?pe.material:k,Ce=pe.group;ve.layers.test(O.layers)&&Tp(ve,U,O,_e,Ae,Ce)}}function Tp(E,U,O,k,F,re){E.onBeforeRender(v,U,O,k,F,re),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,U,O,k,E,re),F.transparent===!0&&F.side===_i&&F.forceSinglePass===!1?(F.side=ln,F.needsUpdate=!0,v.renderBufferDirect(O,U,k,F,E,re),F.side=lr,F.needsUpdate=!0,v.renderBufferDirect(O,U,k,F,E,re),F.side=_i):v.renderBufferDirect(O,U,k,F,E,re),E.onAfterRender(v,U,O,k,F,re)}function Na(E,U,O){U.isScene!==!0&&(U=Fe);const k=Oe.get(E),F=m.state.lights,re=m.state.shadowsArray,pe=F.state.version,ve=J.getParameters(E,F.state,re,U,O),_e=J.getProgramCacheKey(ve);let Ae=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?P:St).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",se),Ae=new Map,k.programs=Ae);let Ce=Ae.get(_e);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===pe)return Ap(E,ve),Ce}else ve.uniforms=J.getUniforms(E),E.onBuild(O,ve,v),E.onBeforeCompile(ve,v),Ce=J.acquireProgram(ve,_e),Ae.set(_e,Ce),k.uniforms=ve.uniforms;const Ee=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ce.uniform),Ap(E,ve),k.needsLights=QS(E),k.lightsStateVersion=pe,k.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function wp(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Bl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ap(E,U){const O=Oe.get(E);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function $S(E,U,O,k,F){U.isScene!==!0&&(U=Fe),be.resetTextureUnits();const re=U.fog,pe=k.isMeshStandardMaterial?U.environment:null,ve=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gr,_e=(k.isMeshStandardMaterial?P:St).get(k.envMap||pe),Ae=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!O.morphAttributes.position,qe=!!O.morphAttributes.normal,ht=!!O.morphAttributes.color;let pt=sr;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=v.toneMapping);const fn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=fn!==void 0?fn.length:0,Se=Oe.get(k),qt=m.state.lights;if(G===!0&&(ne===!0||E!==T)){const En=E===T&&k.id===R;ce.setState(k,E,En)}let tt=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==qt.state.version||Se.outputColorSpace!==ve||F.isBatchedMesh&&Se.batching===!1||!F.isBatchedMesh&&Se.batching===!0||F.isBatchedMesh&&Se.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Se.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Se.instancing===!1||!F.isInstancedMesh&&Se.instancing===!0||F.isSkinnedMesh&&Se.skinning===!1||!F.isSkinnedMesh&&Se.skinning===!0||F.isInstancedMesh&&Se.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Se.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Se.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Se.instancingMorph===!1&&F.morphTexture!==null||Se.envMap!==_e||k.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ce.numPlanes||Se.numIntersection!==ce.numIntersection)||Se.vertexAlphas!==Ae||Se.vertexTangents!==Ce||Se.morphTargets!==Ee||Se.morphNormals!==qe||Se.morphColors!==ht||Se.toneMapping!==pt||Se.morphTargetsCount!==$e)&&(tt=!0):(tt=!0,Se.__version=k.version);let ui=Se.currentProgram;tt===!0&&(ui=Na(k,U,F));let Ua=!1,yr=!1,ic=!1;const bt=ui.getUniforms(),Ii=Se.uniforms;if(we.useProgram(ui.program)&&(Ua=!0,yr=!0,ic=!0),k.id!==R&&(R=k.id,yr=!0),Ua||T!==E){bt.setValue(N,"projectionMatrix",E.projectionMatrix),bt.setValue(N,"viewMatrix",E.matrixWorldInverse);const En=bt.map.cameraPosition;En!==void 0&&En.setValue(N,ae.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,yr=!0,ic=!0)}if(F.isSkinnedMesh){bt.setOptional(N,F,"bindMatrix"),bt.setOptional(N,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),bt.setValue(N,"boneTexture",En.boneTexture,be))}F.isBatchedMesh&&(bt.setOptional(N,F,"batchingTexture"),bt.setValue(N,"batchingTexture",F._matricesTexture,be),bt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&bt.setValue(N,"batchingColorTexture",F._colorsTexture,be));const rc=O.morphAttributes;if((rc.position!==void 0||rc.normal!==void 0||rc.color!==void 0)&&ye.update(F,O,ui),(yr||Se.receiveShadow!==F.receiveShadow)&&(Se.receiveShadow=F.receiveShadow,bt.setValue(N,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ii.envMap.value=_e,Ii.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ii.envMapIntensity.value=U.environmentIntensity),yr&&(bt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&ZS(Ii,ic),re&&k.fog===!0&&ee.refreshFogUniforms(Ii,re),ee.refreshMaterialUniforms(Ii,k,W,j,m.state.transmissionRenderTarget[E.id]),Bl.upload(N,wp(Se),Ii,be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Bl.upload(N,wp(Se),Ii,be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(N,"center",F.center),bt.setValue(N,"modelViewMatrix",F.modelViewMatrix),bt.setValue(N,"normalMatrix",F.normalMatrix),bt.setValue(N,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const En=k.uniformsGroups;for(let sc=0,JS=En.length;sc<JS;sc++){const Cp=En[sc];Ve.update(Cp,ui),Ve.bind(Cp,ui)}}return ui}function ZS(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function QS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,O){Oe.get(E.texture).__webglTexture=U,Oe.get(E.depthTexture).__webglTexture=O;const k=Oe.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const O=Oe.get(E);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,O=0){A=E,C=U,w=O;let k=!0,F=null,re=!1,pe=!1;if(E){const _e=Oe.get(E);_e.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):_e.__webglFramebuffer===void 0?be.setupRenderTarget(E):_e.__hasExternalTextures&&be.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Ce=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?F=Ce[U][O]:F=Ce[U],re=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?F=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[O]:F=Ce,x.copy(E.viewport),L.copy(E.scissor),H=E.scissorTest}else x.copy(Z).multiplyScalar(W).floor(),L.copy(oe).multiplyScalar(W).floor(),H=xe;if(we.bindFramebuffer(N.FRAMEBUFFER,F)&&k&&we.drawBuffers(E,F),we.viewport(x),we.scissor(L),we.setScissorTest(H),re){const _e=Oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,O)}else if(pe){const _e=Oe.get(E.texture),Ae=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.__webglTexture,O||0,Ae)}R=-1},this.readRenderTargetPixels=function(E,U,O,k,F,re,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){we.bindFramebuffer(N.FRAMEBUFFER,ve);try{const _e=E.texture,Ae=_e.format,Ce=_e.type;if(!lt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&O>=0&&O<=E.height-F&&N.readPixels(U,O,k,F,fe.convert(Ae),fe.convert(Ce),re)}finally{const _e=A!==null?Oe.get(A).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,U,O,k,F,re,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){we.bindFramebuffer(N.FRAMEBUFFER,ve);try{const _e=E.texture,Ae=_e.format,Ce=_e.type;if(!lt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&O>=0&&O<=E.height-F){const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(U,O,k,F,fe.convert(Ae),fe.convert(Ce),0),N.flush();const qe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await UT(N,qe,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re)}finally{N.deleteBuffer(Ee),N.deleteSync(qe)}return re}}finally{const _e=A!==null?Oe.get(A).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(E,U=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-O),F=Math.floor(E.image.width*k),re=Math.floor(E.image.height*k),pe=U!==null?U.x:0,ve=U!==null?U.y:0;be.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,pe,ve,F,re),we.unbindTexture()},this.copyTextureToTexture=function(E,U,O=null,k=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let re,pe,ve,_e,Ae,Ce;O!==null?(re=O.max.x-O.min.x,pe=O.max.y-O.min.y,ve=O.min.x,_e=O.min.y):(re=E.image.width,pe=E.image.height,ve=0,_e=0),k!==null?(Ae=k.x,Ce=k.y):(Ae=0,Ce=0);const Ee=fe.convert(U.format),qe=fe.convert(U.type);be.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=N.getParameter(N.UNPACK_ROW_LENGTH),pt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),$e=N.getParameter(N.UNPACK_SKIP_ROWS),Se=N.getParameter(N.UNPACK_SKIP_IMAGES),qt=E.isCompressedTexture?E.mipmaps[F]:E.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,qt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,_e),E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Ae,Ce,re,pe,Ee,qe,qt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Ae,Ce,qt.width,qt.height,Ee,qt.data):N.texSubImage2D(N.TEXTURE_2D,F,Ae,Ce,Ee,qe,qt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Se),F===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,U,O=null,k=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let re,pe,ve,_e,Ae,Ce,Ee,qe,ht;const pt=E.isCompressedTexture?E.mipmaps[F]:E.image;O!==null?(re=O.max.x-O.min.x,pe=O.max.y-O.min.y,ve=O.max.z-O.min.z,_e=O.min.x,Ae=O.min.y,Ce=O.min.z):(re=pt.width,pe=pt.height,ve=pt.depth,_e=0,Ae=0,Ce=0),k!==null?(Ee=k.x,qe=k.y,ht=k.z):(Ee=0,qe=0,ht=0);const fn=fe.convert(U.format),$e=fe.convert(U.type);let Se;if(U.isData3DTexture)be.setTexture3D(U,0),Se=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)be.setTexture2DArray(U,0),Se=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ui=N.getParameter(N.UNPACK_SKIP_PIXELS),Ua=N.getParameter(N.UNPACK_SKIP_ROWS),yr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Se,F,Ee,qe,ht,re,pe,ve,fn,$e,pt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,F,Ee,qe,ht,re,pe,ve,fn,pt.data):N.texSubImage3D(Se,F,Ee,qe,ht,re,pe,ve,fn,$e,pt),N.pixelStorei(N.UNPACK_ROW_LENGTH,qt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ui),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ua),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yr),F===0&&U.generateMipmaps&&N.generateMipmap(Se),we.unbindTexture()},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,we.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vh?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===ju?"display-p3":"srgb"}}class W2 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Cd extends Ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iv=new Tt,Rd=new ex,Ml=new Xu,El=new B;class rv extends cn{constructor(e=new li,n=new Cd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;iv.copy(r).invert(),Rd.copy(e.ray).applyMatrix4(iv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,y=p;_<y;_++){const m=u.getX(_);El.fromBufferAttribute(f,m),sv(El,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,y=p;_<y;_++)El.fromBufferAttribute(f,_),sv(El,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sv(t,e,n,i,r,s,o){const a=Rd.distanceSqToPoint(t);if(a<n){const l=new B;Rd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);function j2(){const t=me.useRef(null);return me.useEffect(()=>{const e=t.current,n=new G2({canvas:e,alpha:!0,antialias:!1});n.setPixelRatio(Math.min(devicePixelRatio,1.5)),n.setSize(innerWidth,innerHeight);const i=new W2,r=new Pn(70,innerWidth/innerHeight,.1,500);r.position.z=35;const s=1800,o=new Float32Array(s*3),a=new Float32Array(s*3);for(let w=0;w<s;w++){o[w*3]=(Math.random()-.5)*100,o[w*3+1]=(Math.random()-.5)*100,o[w*3+2]=(Math.random()-.5)*50;const A=Math.random();a[w*3]=A*.66,a[w*3+1]=(1-A)*.96,a[w*3+2]=1}const l=new li;l.setAttribute("position",new vn(o,3)),l.setAttribute("color",new vn(a,3));const u=new Cd({size:.18,vertexColors:!0,transparent:!0,opacity:.55,sizeAttenuation:!0}),c=new rv(l,u);i.add(c);const f=280,d=new Float32Array(f*3);for(let w=0;w<f;w++){const A=w/f,R=A*Math.PI*14,T=w%2===0?1:-1;d[w*3]=Math.cos(R)*4*T-14,d[w*3+1]=(A-.5)*70,d[w*3+2]=Math.sin(R)*4-10}const p=new li;p.setAttribute("position",new vn(d,3));const _=new Cd({size:.3,color:62975,transparent:!0,opacity:.22}),y=new rv(p,_);i.add(y);let m=0,h=0;const g=w=>{m=(w.clientX/innerWidth-.5)*.6,h=(w.clientY/innerHeight-.5)*.6};addEventListener("mousemove",g);let v;const S=()=>{v=requestAnimationFrame(S);const w=Date.now()*1e-4;c.rotation.y=w*.4+m,c.rotation.x=w*.15+h*.4,y.rotation.y=w*1,n.render(i,r)};S();const C=()=>{r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight)};return addEventListener("resize",C),()=>{cancelAnimationFrame(v),removeEventListener("mousemove",g),removeEventListener("resize",C),n.dispose()}},[]),b.jsx("canvas",{ref:t,style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ft=(t,e)=>{const n=me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>me.createElement("svg",{ref:c,...X2,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Y2(t)}`,a].join(" "),...u},[...e.map(([f,d])=>me.createElement(f,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=Ft("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=Ft("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=Ft("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=Ft("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=Ft("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=Ft("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=Ft("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=Ft("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=Ft("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Ft("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=Ft("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=Ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=Ft("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=Ft("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Ft("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=Ft("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=Ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cv=["About","Education","Projects","Contact"];function sP(){const[t,e]=me.useState(null),[n,i]=me.useState(!1);return me.useEffect(()=>{const r=()=>{window.innerWidth>=768&&i(!1)};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),b.jsxs("nav",{className:"site-nav",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"14px clamp(16px, 4vw, 40px)",background:"rgba(5,8,16,0.72)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:[b.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[b.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#00f5ff",display:"inline-block",animation:"pulse-dot 2s ease infinite"}}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:11,letterSpacing:"0.08em",color:"rgba(0,245,255,0.75)"},children:"DEV_MODE: ACTIVE"})]}),b.jsxs("div",{className:"site-nav-links",style:{display:"flex",gap:30},children:[cv.map(r=>b.jsx("a",{href:`#${r.toLowerCase()}`,style:{fontSize:13,fontWeight:500,color:t===r?"#00f5ff":"#94a3b8",textDecoration:"none",transition:"color 0.2s ease"},onMouseEnter:()=>e(r),onMouseLeave:()=>e(null),children:r},r)),b.jsxs("a",{href:"/Youness-El-Fadil-CV.pdf",target:"_blank",rel:"noopener noreferrer",style:{fontSize:13,fontWeight:600,color:"#00f5ff",textDecoration:"none",display:"flex",alignItems:"center",gap:6},children:[b.jsx(Gh,{size:14})," Resume"]})]}),b.jsx("span",{className:"site-nav-version",style:{fontFamily:"'Space Mono', monospace",fontSize:9,letterSpacing:"0.1em",color:"rgba(0,245,255,0.25)"},children:"v2.0.26"}),b.jsx("button",{type:"button",className:"site-nav-toggle","aria-label":n?"Close menu":"Open menu","aria-expanded":n,onClick:()=>i(r=>!r),style:{display:"none",width:40,height:40,borderRadius:10,border:"1px solid rgba(0,245,255,0.2)",background:"rgba(0,245,255,0.05)",color:"#00f5ff",alignItems:"center",justifyContent:"center"},children:n?b.jsx(rP,{size:18}):b.jsx(tP,{size:18})})]}),n&&b.jsxs("div",{className:"site-nav-mobile",style:{maxWidth:1120,margin:"12px auto 0",padding:12,borderRadius:16,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(7,12,24,0.94)",display:"none",flexDirection:"column",gap:8},children:[cv.map(r=>b.jsx("a",{href:`#${r.toLowerCase()}`,onClick:()=>i(!1),style:{padding:"10px 12px",borderRadius:10,color:"#cbd5e1",textDecoration:"none",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)"},children:r},r)),b.jsx("a",{href:"/Youness-El-Fadil-CV.pdf",target:"_blank",rel:"noopener noreferrer",onClick:()=>i(!1),style:{padding:"10px 12px",borderRadius:10,color:"#00f5ff",textDecoration:"none",background:"rgba(0,245,255,0.05)",border:"1px solid rgba(0,245,255,0.16)"},children:"Resume"})]})]})}const _x=me.createContext({});function yx(t){const e=me.useRef(null);return e.current===null&&(e.current=t()),e.current}const Wh=me.createContext(null),Ku=me.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function oP(t=!0){const e=me.useContext(Wh);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=me.useId();me.useEffect(()=>{t&&r(s)},[t]);const o=me.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const jh=typeof window<"u",xx=jh?me.useLayoutEffect:me.useEffect,_n=t=>t;let Sx=_n;function Xh(t){let e;return()=>(e===void 0&&(e=t()),e)}const so=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ti=t=>t*1e3,wi=t=>t/1e3,aP={useManualTiming:!1};function lP(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,f=!1)=>{const p=f&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const Tl=["read","resolveKeyframes","update","preRender","render","postRender"],uP=40;function Mx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Tl.reduce((h,g)=>(h[g]=lP(s),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,uP),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},_=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Tl.reduce((h,g)=>{const v=o[g];return h[g]=(S,C=!1,w=!1)=>(n||_(),v.schedule(S,C,w)),h},{}),cancel:h=>{for(let g=0;g<Tl.length;g++)o[Tl[g]].cancel(h)},state:r,steps:o}}const{schedule:it,cancel:fr,state:Dt,steps:hf}=Mx(typeof requestAnimationFrame<"u"?requestAnimationFrame:_n,!0),Ex=me.createContext({strict:!1}),fv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},oo={};for(const t in fv)oo[t]={isEnabled:e=>fv[t].some(n=>!!e[n])};function cP(t){for(const e in t)oo[e]={...oo[e],...t[e]}}const fP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||fP.has(t)}let Tx=t=>!xu(t);function dP(t){t&&(Tx=e=>e.startsWith("on")?!xu(e):t(e))}try{dP(require("@emotion/is-prop-valid").default)}catch{}function hP(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Tx(r)||n===!0&&xu(r)||!e&&!xu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function pP(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const $u=me.createContext({});function ma(t){return typeof t=="string"||Array.isArray(t)}function Zu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Yh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qh=["initial",...Yh];function Qu(t){return Zu(t.animate)||qh.some(e=>ma(t[e]))}function wx(t){return!!(Qu(t)||t.variants)}function mP(t,e){if(Qu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ma(n)?n:void 0,animate:ma(i)?i:void 0}}return t.inherit!==!1?e:{}}function gP(t){const{initial:e,animate:n}=mP(t,me.useContext($u));return me.useMemo(()=>({initial:e,animate:n}),[dv(e),dv(n)])}function dv(t){return Array.isArray(t)?t.join(" "):t}const vP=Symbol.for("motionComponentSymbol");function Ds(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function _P(t,e,n){return me.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ds(n)&&(n.current=i))},[e])}const Kh=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yP="framerAppearId",Ax="data-"+Kh(yP),{schedule:$h}=Mx(queueMicrotask,!1),Cx=me.createContext({});function xP(t,e,n,i,r){var s,o;const{visualElement:a}=me.useContext($u),l=me.useContext(Ex),u=me.useContext(Wh),c=me.useContext(Ku).reducedMotion,f=me.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const d=f.current,p=me.useContext(Cx);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&SP(f.current,n,r,p);const _=me.useRef(!1);me.useInsertionEffect(()=>{d&&_.current&&d.update(n,u)});const y=n[Ax],m=me.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return xx(()=>{d&&(_.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),$h.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),me.useEffect(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),m.current=!1))}),d}function SP(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Rx(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ds(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function Rx(t){if(t)return t.options.allowProjection!==!1?t.projection:Rx(t.parent)}function MP({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&cP(t);function a(u,c){let f;const d={...me.useContext(Ku),...u,layoutId:EP(u)},{isStatic:p}=d,_=gP(u),y=i(u,p);if(!p&&jh){TP();const m=wP(d);f=m.MeasureLayout,_.visualElement=xP(r,y,d,e,m.ProjectionNode)}return b.jsxs($u.Provider,{value:_,children:[f&&_.visualElement?b.jsx(f,{visualElement:_.visualElement,...d}):null,n(r,u,_P(y,_.visualElement,c),y,p,_.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=me.forwardRef(a);return l[vP]=r,l}function EP({layoutId:t}){const e=me.useContext(_x).id;return e&&t!==void 0?e+"-"+t:t}function TP(t,e){me.useContext(Ex).strict}function wP(t){const{drag:e,layout:n}=oo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const AP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Zh(t){return typeof t!="string"||t.includes("-")?!1:!!(AP.indexOf(t)>-1||/[A-Z]/u.test(t))}function hv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Qh(t,e,n,i){if(typeof e=="function"){const[r,s]=hv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=hv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Pd=t=>Array.isArray(t),CP=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),RP=t=>Pd(t)?t[t.length-1]||0:t,Nt=t=>!!(t&&t.getVelocity);function zl(t){const e=Nt(t)?t.get():t;return CP(e)?e.toValue():e}function PP({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:bP(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Px=t=>(e,n)=>{const i=me.useContext($u),r=me.useContext(Wh),s=()=>PP(t,e,i,r);return n?s():yx(s)};function bP(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=zl(s[d]);let{initial:o,animate:a}=t;const l=Qu(t),u=wx(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!Zu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const _=Qh(t,d[p]);if(_){const{transitionEnd:y,transition:m,...h}=_;for(const g in h){let v=h[g];if(Array.isArray(v)){const S=c?v.length-1:0;v=v[S]}v!==null&&(r[g]=v)}for(const g in y)r[g]=y[g]}}}return r}const mo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jr=new Set(mo),bx=t=>e=>typeof e=="string"&&e.startsWith(t),Lx=bx("--"),LP=bx("var(--"),Jh=t=>LP(t)?DP.test(t.split("/*")[0].trim()):!1,DP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Dx=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Li=(t,e,n)=>n>e?e:n<t?t:n,go={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ga={...go,transform:t=>Li(0,1,t)},wl={...go,default:1},Pa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Vi=Pa("deg"),oi=Pa("%"),Te=Pa("px"),IP=Pa("vh"),NP=Pa("vw"),pv={...oi,parse:t=>oi.parse(t)/100,transform:t=>oi.transform(t*100)},UP={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,radius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,backgroundPositionX:Te,backgroundPositionY:Te},FP={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:wl,scaleX:wl,scaleY:wl,scaleZ:wl,skew:Vi,skewX:Vi,skewY:Vi,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:ga,originX:pv,originY:pv,originZ:Te},mv={...go,transform:Math.round},ep={...UP,...FP,zIndex:mv,size:Te,fillOpacity:ga,strokeOpacity:ga,numOctaves:mv},OP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},kP=mo.length;function BP(t,e,n){let i="",r=!0;for(let s=0;s<kP;s++){const o=mo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=Dx(a,ep[o]);if(!l){r=!1;const c=OP[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function tp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(Jr.has(l)){o=!0;continue}else if(Lx(l)){r[l]=u;continue}else{const c=Dx(u,ep[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=BP(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const zP={offset:"stroke-dashoffset",array:"stroke-dasharray"},VP={offset:"strokeDashoffset",array:"strokeDasharray"};function HP(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?zP:VP;t[s.offset]=Te.transform(-i);const o=Te.transform(e),a=Te.transform(n);t[s.array]=`${o} ${a}`}function gv(t,e,n){return typeof t=="string"?t:Te.transform(e+n*t)}function GP(t,e,n){const i=gv(e,t.x,t.width),r=gv(n,t.y,t.height);return`${i} ${r}`}function np(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(tp(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:_}=t;d.transform&&(_&&(p.transform=d.transform),delete d.transform),_&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=GP(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&HP(d,o,a,l,!1)}const ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ix=()=>({...ip(),attrs:{}}),rp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Nx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Ux=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fx(t,e,n,i){Nx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Ux.has(r)?r:Kh(r),e.attrs[r])}const Su={};function WP(t){Object.assign(Su,t)}function Ox(t,{layout:e,layoutId:n}){return Jr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Su[t]||t==="opacity")}function sp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Nt(r[o])||e.style&&Nt(e.style[o])||Ox(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function kx(t,e,n){const i=sp(t,e,n);for(const r in t)if(Nt(t[r])||Nt(e[r])){const s=mo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function jP(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const vv=["x","y","width","height","cx","cy","r"],XP={useVisualState:Px({scrapeMotionValuesFromProps:kx,createRenderState:Ix,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Jr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<vv.length;a++){const l=vv[a];t[l]!==e[l]&&(o=!0)}o&&it.read(()=>{jP(n,i),it.render(()=>{np(i,r,rp(n.tagName),t.transformTemplate),Fx(n,i)})})}})},YP={useVisualState:Px({scrapeMotionValuesFromProps:sp,createRenderState:ip})};function Bx(t,e,n){for(const i in e)!Nt(e[i])&&!Ox(i,n)&&(t[i]=e[i])}function qP({transformTemplate:t},e){return me.useMemo(()=>{const n=ip();return tp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function KP(t,e){const n=t.style||{},i={};return Bx(i,n,t),Object.assign(i,qP(t,e)),i}function $P(t,e){const n={},i=KP(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function ZP(t,e,n,i){const r=me.useMemo(()=>{const s=Ix();return np(s,e,rp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Bx(s,t.style,t),r.style={...s,...r.style}}return r}function QP(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Zh(n)?ZP:$P)(i,s,o,n),u=hP(i,typeof n=="string",t),c=n!==me.Fragment?{...u,...l,ref:r}:{},{children:f}=i,d=me.useMemo(()=>Nt(f)?f.get():f,[f]);return me.createElement(n,{...c,children:d})}}function JP(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Zh(i)?XP:YP,preloadedFeatures:t,useRender:QP(r),createVisualElement:e,Component:i};return MP(o)}}function zx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ju(t,e,n){const i=t.getProps();return Qh(i,e,n!==void 0?n:i.custom,t)}const eb=Xh(()=>window.ScrollTimeline!==void 0);class tb{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(eb()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class nb extends tb{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function op(t,e){return t?t[e]||t.default||t:void 0}const bd=2e4;function Vx(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<bd;)e+=n,i=t.next(e);return e>=bd?1/0:e}function ap(t){return typeof t=="function"}function _v(t,e){t.timeline=e,t.onfinish=null}const lp=t=>Array.isArray(t)&&typeof t[0]=="number",ib={linearEasing:void 0};function rb(t,e){const n=Xh(t);return()=>{var i;return(i=ib[e])!==null&&i!==void 0?i:n()}}const Mu=rb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Hx=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(so(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Gx(t){return!!(typeof t=="function"&&Mu()||!t||typeof t=="string"&&(t in Ld||Mu())||lp(t)||Array.isArray(t)&&t.every(Gx))}const Fo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ld={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fo([0,.65,.55,1]),circOut:Fo([.55,0,1,.45]),backIn:Fo([.31,.01,.66,-.59]),backOut:Fo([.33,1.53,.69,.99])};function Wx(t,e){if(t)return typeof t=="function"&&Mu()?Hx(t,e):lp(t)?Fo(t):Array.isArray(t)?t.map(n=>Wx(n,e)||Ld.easeOut):Ld[t]}const Bn={x:!1,y:!1};function jx(){return Bn.x||Bn.y}function Xx(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Yx(t,e){const n=Xx(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function yv(t){return e=>{e.pointerType==="touch"||jx()||t(e)}}function sb(t,e,n={}){const[i,r,s]=Yx(t,n),o=yv(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=yv(f=>{u(f),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const qx=(t,e)=>e?t===e?!0:qx(t,e.parentElement):!1,up=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,ob=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ab(t){return ob.has(t.tagName)||t.tabIndex!==-1}const Oo=new WeakSet;function xv(t){return e=>{e.key==="Enter"&&t(e)}}function pf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const lb=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=xv(()=>{if(Oo.has(n))return;pf(n,"down");const r=xv(()=>{pf(n,"up")}),s=()=>pf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Sv(t){return up(t)&&!jx()}function ub(t,e,n={}){const[i,r,s]=Yx(t,n),o=a=>{const l=a.currentTarget;if(!Sv(a)||Oo.has(l))return;Oo.add(l);const u=e(a),c=(p,_)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!Sv(p)||!Oo.has(l))&&(Oo.delete(l),typeof u=="function"&&u(p,{success:_}))},f=p=>{c(p,n.useGlobalTarget||qx(l,p.target))},d=p=>{c(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!ab(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>lb(u,r),r)}),s}function cb(t){return t==="x"||t==="y"?Bn[t]?null:(Bn[t]=!0,()=>{Bn[t]=!1}):Bn.x||Bn.y?null:(Bn.x=Bn.y=!0,()=>{Bn.x=Bn.y=!1})}const Kx=new Set(["width","height","top","left","right","bottom",...mo]);let Vl;function fb(){Vl=void 0}const ai={now:()=>(Vl===void 0&&ai.set(Dt.isProcessing||aP.useManualTiming?Dt.timestamp:performance.now()),Vl),set:t=>{Vl=t,queueMicrotask(fb)}};function cp(t,e){t.indexOf(e)===-1&&t.push(e)}function fp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class dp{constructor(){this.subscriptions=[]}add(e){return cp(this.subscriptions,e),()=>fp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $x(t,e){return e?t*(1e3/e):0}const Mv=30,db=t=>!isNaN(parseFloat(t));class hb{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ai.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ai.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=db(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new dp);const i=this.events[e].add(n);return e==="change"?()=>{i(),it.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Mv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Mv);return $x(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ao(t,e){return new hb(t,e)}function pb(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ao(n))}function mb(t,e){const n=Ju(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=RP(s[o]);pb(t,o,a)}}function gb(t){return!!(Nt(t)&&t.add)}function Dd(t,e){const n=t.getValue("willChange");if(gb(n))return n.add(e)}function Zx(t){return t.props[Ax]}const Qx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,vb=1e-7,_b=12;function yb(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Qx(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>vb&&++a<_b);return o}function ba(t,e,n,i){if(t===e&&n===i)return _n;const r=s=>yb(s,0,1,t,n);return s=>s===0||s===1?s:Qx(r(s),e,i)}const Jx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,eS=t=>e=>1-t(1-e),tS=ba(.33,1.53,.69,.99),hp=eS(tS),nS=Jx(hp),iS=t=>(t*=2)<1?.5*hp(t):.5*(2-Math.pow(2,-10*(t-1))),pp=t=>1-Math.sin(Math.acos(t)),rS=eS(pp),sS=Jx(pp),oS=t=>/^0[^.\s]+$/u.test(t);function xb(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||oS(t):!0}const qo=t=>Math.round(t*1e5)/1e5,mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Sb(t){return t==null}const Mb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gp=(t,e)=>n=>!!(typeof n=="string"&&Mb.test(n)&&n.startsWith(t)||e&&!Sb(n)&&Object.prototype.hasOwnProperty.call(n,e)),aS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(mp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Eb=t=>Li(0,255,t),mf={...go,transform:t=>Math.round(Eb(t))},zr={test:gp("rgb","red"),parse:aS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+mf.transform(t)+", "+mf.transform(e)+", "+mf.transform(n)+", "+qo(ga.transform(i))+")"};function Tb(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Id={test:gp("#"),parse:Tb,transform:zr.transform},Is={test:gp("hsl","hue"),parse:aS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+oi.transform(qo(e))+", "+oi.transform(qo(n))+", "+qo(ga.transform(i))+")"},jt={test:t=>zr.test(t)||Id.test(t)||Is.test(t),parse:t=>zr.test(t)?zr.parse(t):Is.test(t)?Is.parse(t):Id.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?zr.transform(t):Is.transform(t)},wb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ab(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(mp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(wb))===null||n===void 0?void 0:n.length)||0)>0}const lS="number",uS="color",Cb="var",Rb="var(",Ev="${}",Pb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function va(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Pb,l=>(jt.test(l)?(i.color.push(s),r.push(uS),n.push(jt.parse(l))):l.startsWith(Rb)?(i.var.push(s),r.push(Cb),n.push(l)):(i.number.push(s),r.push(lS),n.push(parseFloat(l))),++s,Ev)).split(Ev);return{values:n,split:a,indexes:i,types:r}}function cS(t){return va(t).values}function fS(t){const{split:e,types:n}=va(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===lS?s+=qo(r[o]):a===uS?s+=jt.transform(r[o]):s+=r[o]}return s}}const bb=t=>typeof t=="number"?0:t;function Lb(t){const e=cS(t);return fS(t)(e.map(bb))}const dr={test:Ab,parse:cS,createTransformer:fS,getAnimatableNone:Lb},Db=new Set(["brightness","contrast","saturate","opacity"]);function Ib(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(mp)||[];if(!i)return t;const r=n.replace(i,"");let s=Db.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Nb=/\b([a-z-]*)\(.*?\)/gu,Nd={...dr,getAnimatableNone:t=>{const e=t.match(Nb);return e?e.map(Ib).join(" "):t}},Ub={...ep,color:jt,backgroundColor:jt,outlineColor:jt,fill:jt,stroke:jt,borderColor:jt,borderTopColor:jt,borderRightColor:jt,borderBottomColor:jt,borderLeftColor:jt,filter:Nd,WebkitFilter:Nd},vp=t=>Ub[t];function dS(t,e){let n=vp(t);return n!==Nd&&(n=dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Fb=new Set(["auto","none","0"]);function Ob(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Fb.has(s)&&va(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=dS(n,r)}const Tv=t=>t===go||t===Te,wv=(t,e)=>parseFloat(t.split(", ")[e]),Av=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return wv(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?wv(s[1],t):0}},kb=new Set(["x","y","z"]),Bb=mo.filter(t=>!kb.has(t));function zb(t){const e=[];return Bb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const lo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Av(4,13),y:Av(5,14)};lo.translateX=lo.x;lo.translateY=lo.y;const Wr=new Set;let Ud=!1,Fd=!1;function hS(){if(Fd){const t=Array.from(Wr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=zb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Fd=!1,Ud=!1,Wr.forEach(t=>t.complete()),Wr.clear()}function pS(){Wr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fd=!0)})}function Vb(){pS(),hS()}class _p{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Wr.add(this),Ud||(Ud=!0,it.read(pS),it.resolveKeyframes(hS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Wr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Wr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const mS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Hb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Gb(t){const e=Hb.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function gS(t,e,n=1){const[i,r]=Gb(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return mS(o)?parseFloat(o):o}return Jh(r)?gS(r,e,n+1):r}const vS=t=>e=>e.test(t),Wb={test:t=>t==="auto",parse:t=>t},_S=[go,Te,oi,Vi,NP,IP,Wb],Cv=t=>_S.find(vS(t));class yS extends _p{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Jh(u))){const c=gS(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Kx.has(i)||e.length!==2)return;const[r,s]=e,o=Cv(r),a=Cv(s);if(o!==a)if(Tv(o)&&Tv(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)xb(e[r])&&i.push(r);i.length&&Ob(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=lo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=lo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const Rv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(dr.test(t)||t==="0")&&!t.startsWith("url("));function jb(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Xb(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Rv(r,e),a=Rv(s,e);return!o||!a?!1:jb(t)||(n==="spring"||ap(n))&&i}const Yb=t=>t!==null;function ec(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Yb),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const qb=40;class xS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ai.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>qb?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Vb(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ai.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Xb(e,i,r,s))if(o)this.options.duration=0;else{l&&l(ec(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ct=(t,e,n)=>t+(e-t)*n;function gf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Kb({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=gf(l,a,t+1/3),s=gf(l,a,t),o=gf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Eu(t,e){return n=>n>0?e:t}const vf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},$b=[Id,zr,Is],Zb=t=>$b.find(e=>e.test(t));function Pv(t){const e=Zb(t);if(!e)return!1;let n=e.parse(t);return e===Is&&(n=Kb(n)),n}const bv=(t,e)=>{const n=Pv(t),i=Pv(e);if(!n||!i)return Eu(t,e);const r={...n};return s=>(r.red=vf(n.red,i.red,s),r.green=vf(n.green,i.green,s),r.blue=vf(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),zr.transform(r))},Qb=(t,e)=>n=>e(t(n)),La=(...t)=>t.reduce(Qb),Od=new Set(["none","hidden"]);function Jb(t,e){return Od.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function eL(t,e){return n=>ct(t,e,n)}function yp(t){return typeof t=="number"?eL:typeof t=="string"?Jh(t)?Eu:jt.test(t)?bv:iL:Array.isArray(t)?SS:typeof t=="object"?jt.test(t)?bv:tL:Eu}function SS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>yp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function tL(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=yp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function nL(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const iL=(t,e)=>{const n=dr.createTransformer(e),i=va(t),r=va(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Od.has(t)&&!r.values.length||Od.has(e)&&!i.values.length?Jb(t,e):La(SS(nL(i,r),r.values),n):Eu(t,e)};function MS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):yp(t)(t,e)}const rL=5;function ES(t,e,n){const i=Math.max(e-rL,0);return $x(n-t(i),e-i)}const mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_f=.001;function sL({duration:t=mt.duration,bounce:e=mt.bounce,velocity:n=mt.velocity,mass:i=mt.mass}){let r,s,o=1-e;o=Li(mt.minDamping,mt.maxDamping,o),t=Li(mt.minDuration,mt.maxDuration,wi(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,p=kd(u,o),_=Math.exp(-f);return _f-d/p*_},s=u=>{const f=u*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,_=Math.exp(-f),y=kd(Math.pow(u,2),o);return(-r(u)+_f>0?-1:1)*((d-p)*_)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-_f+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=aL(r,s,a);if(t=Ti(t),isNaN(l))return{stiffness:mt.stiffness,damping:mt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const oL=12;function aL(t,e,n){let i=n;for(let r=1;r<oL;r++)i=i-t(i)/e(i);return i}function kd(t,e){return t*Math.sqrt(1-e*e)}const lL=["duration","bounce"],uL=["stiffness","damping","mass"];function Lv(t,e){return e.some(n=>t[n]!==void 0)}function cL(t){let e={velocity:mt.velocity,stiffness:mt.stiffness,damping:mt.damping,mass:mt.mass,isResolvedFromDuration:!1,...t};if(!Lv(t,uL)&&Lv(t,lL))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Li(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:mt.mass,stiffness:r,damping:s}}else{const n=sL(t);e={...e,...n,mass:mt.mass},e.isResolvedFromDuration=!0}return e}function TS(t=mt.visualDuration,e=mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:p}=cL({...n,velocity:-wi(n.velocity||0)}),_=d||0,y=u/(2*Math.sqrt(l*c)),m=o-s,h=wi(Math.sqrt(l/c)),g=Math.abs(m)<5;i||(i=g?mt.restSpeed.granular:mt.restSpeed.default),r||(r=g?mt.restDelta.granular:mt.restDelta.default);let v;if(y<1){const C=kd(h,y);v=w=>{const A=Math.exp(-y*h*w);return o-A*((_+y*h*m)/C*Math.sin(C*w)+m*Math.cos(C*w))}}else if(y===1)v=C=>o-Math.exp(-h*C)*(m+(_+h*m)*C);else{const C=h*Math.sqrt(y*y-1);v=w=>{const A=Math.exp(-y*h*w),R=Math.min(C*w,300);return o-A*((_+y*h*m)*Math.sinh(R)+C*m*Math.cosh(R))/C}}const S={calculatedDuration:p&&f||null,next:C=>{const w=v(C);if(p)a.done=C>=f;else{let A=0;y<1&&(A=C===0?Ti(_):ES(v,C,w));const R=Math.abs(A)<=i,T=Math.abs(o-w)<=r;a.done=R&&T}return a.value=a.done?o:w,a},toString:()=>{const C=Math.min(Vx(S),bd),w=Hx(A=>S.next(C*A).value,C,30);return C+"ms "+w}};return S}function Dv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,_=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let y=n*e;const m=f+y,h=o===void 0?m:o(m);h!==m&&(y=h-f);const g=R=>-y*Math.exp(-R/i),v=R=>h+g(R),S=R=>{const T=g(R),x=v(R);d.done=Math.abs(T)<=u,d.value=d.done?h:x};let C,w;const A=R=>{p(d.value)&&(C=R,w=TS({keyframes:[d.value,_(d.value)],velocity:ES(v,R,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return A(0),{calculatedDuration:null,next:R=>{let T=!1;return!w&&C===void 0&&(T=!0,S(R),A(R)),C!==void 0&&R>=C?w.next(R-C):(!T&&S(R),d)}}}const fL=ba(.42,0,1,1),dL=ba(0,0,.58,1),wS=ba(.42,0,.58,1),hL=t=>Array.isArray(t)&&typeof t[0]!="number",pL={linear:_n,easeIn:fL,easeInOut:wS,easeOut:dL,circIn:pp,circInOut:sS,circOut:rS,backIn:hp,backInOut:nS,backOut:tS,anticipate:iS},Iv=t=>{if(lp(t)){Sx(t.length===4);const[e,n,i,r]=t;return ba(e,n,i,r)}else if(typeof t=="string")return pL[t];return t};function mL(t,e,n){const i=[],r=n||MS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||_n:e;a=La(l,a)}i.push(a)}return i}function gL(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Sx(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=mL(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const d=so(t[f],t[f+1],c);return a[f](d)};return n?c=>u(Li(t[0],t[s-1],c)):u}function vL(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=so(0,e,i);t.push(ct(n,1,r))}}function _L(t){const e=[0];return vL(e,t.length-1),e}function yL(t,e){return t.map(n=>n*e)}function xL(t,e){return t.map(()=>e||wS).splice(0,t.length-1)}function Tu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=hL(i)?i.map(Iv):Iv(i),s={done:!1,value:e[0]},o=yL(n&&n.length===e.length?n:_L(e),t),a=gL(o,e,{ease:Array.isArray(r)?r:xL(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const SL=t=>{const e=({timestamp:n})=>t(n);return{start:()=>it.update(e,!0),stop:()=>fr(e),now:()=>Dt.isProcessing?Dt.timestamp:ai.now()}},ML={decay:Dv,inertia:Dv,tween:Tu,keyframes:Tu,spring:TS},EL=t=>t/100;class tc extends xS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||_p,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=ap(n)?n:ML[n]||Tu;let l,u;a!==Tu&&typeof e[0]!="number"&&(l=La(EL,MS(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Vx(c));const{calculatedDuration:f}=c,d=f+r,p=d*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:R}=this.options;return{done:!0,value:R[R.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:_,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-d*(this.speed>=0?1:-1),g=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,S=s;if(p){const R=Math.min(this.currentTime,c)/f;let T=Math.floor(R),x=R%1;!x&&R>=1&&(x=1),x===1&&T--,T=Math.min(T,p+1),!!(T%2)&&(_==="reverse"?(x=1-x,y&&(x-=y/f)):_==="mirror"&&(S=o)),v=Li(0,1,x)*f}const C=g?{done:!1,value:l[0]}:S.next(v);a&&(C.value=a(C.value));let{done:w}=C;!g&&u!==null&&(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return A&&r!==void 0&&(C.value=ec(l,this.options,r)),m&&m(C.value),A&&this.finish(),C}get duration(){const{resolved:e}=this;return e?wi(e.calculatedDuration):0}get time(){return wi(this.currentTime)}set time(e){e=Ti(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=wi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=SL,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function TL(t){return new tc(t)}const wL=new Set(["opacity","clipPath","filter","transform"]);function AL(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Wx(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const CL=Xh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),wu=10,RL=2e4;function PL(t){return ap(t.type)||t.type==="spring"||!Gx(t.ease)}function bL(t,e){const n=new tc({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<RL;)i=n.sample(s),r.push(i.value),s+=wu;return{times:void 0,keyframes:r,duration:s-wu,ease:"linear"}}const AS={anticipate:iS,backInOut:nS,circInOut:sS};function LL(t){return t in AS}class Nv extends xS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new yS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Mu()&&LL(s)&&(s=AS[s]),PL(this.options)){const{onComplete:f,onUpdate:d,motionValue:p,element:_,...y}=this.options,m=bL(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const c=AL(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(_v(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(ec(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return wi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return wi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ti(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return _n;const{animation:i}=n;_v(i,e)}return _n}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...p}=this.options,_=new tc({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Ti(this.time);u.setWithVelocity(_.sample(y-wu).value,_.sample(y).value,wu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return CL()&&i&&wL.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const DL={type:"spring",stiffness:500,damping:25,restSpeed:10},IL=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),NL={type:"keyframes",duration:.8},UL={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},FL=(t,{keyframes:e})=>e.length>2?NL:Jr.has(t)?t.startsWith("scale")?IL(e[1]):DL:UL;function OL({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const xp=(t,e,n,i={},r,s)=>o=>{const a=op(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Ti(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};OL(a)||(c={...c,...FL(t,c)}),c.duration&&(c.duration=Ti(c.duration)),c.repeatDelay&&(c.repeatDelay=Ti(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const d=ec(c.keyframes,a);if(d!==void 0)return it.update(()=>{c.onUpdate(d),c.onComplete()}),new nb([])}return!s&&Nv.supports(c)?new Nv(c):new tc(c)};function kL({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function CS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||c&&kL(c,f))continue;const _={delay:n,...op(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const h=Zx(t);if(h){const g=window.MotionHandoffAnimation(h,f,it);g!==null&&(_.startTime=g,y=!0)}}Dd(t,f),d.start(xp(f,d,p,t.shouldReduceMotion&&Kx.has(f)?{type:!1}:_,t,y));const m=d.animation;m&&u.push(m)}return a&&Promise.all(u).then(()=>{it.update(()=>{a&&mb(t,a)})}),u}function Bd(t,e,n={}){var i;const r=Ju(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(CS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=s;return BL(t,e,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function BL(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(zL).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Bd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function zL(t,e){return t.sortNodePosition(e)}function VL(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Bd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Bd(t,e,n);else{const r=typeof e=="function"?Ju(t,e,n.custom):e;i=Promise.all(CS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const HL=qh.length;function RS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?RS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<HL;n++){const i=qh[n],r=t.props[i];(ma(r)||r===!1)&&(e[i]=r)}return e}const GL=[...Yh].reverse(),WL=Yh.length;function jL(t){return e=>Promise.all(e.map(({animation:n,options:i})=>VL(t,n,i)))}function XL(t){let e=jL(t),n=Uv(),i=!0;const r=l=>(u,c)=>{var f;const d=Ju(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:_,...y}=d;u={...u,...y,..._}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=RS(t.parent)||{},f=[],d=new Set;let p={},_=1/0;for(let m=0;m<WL;m++){const h=GL[m],g=n[h],v=u[h]!==void 0?u[h]:c[h],S=ma(v),C=h===l?g.isActive:null;C===!1&&(_=m);let w=v===c[h]&&v!==u[h]&&S;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),g.protectedKeys={...p},!g.isActive&&C===null||!v&&!g.prevProp||Zu(v)||typeof v=="boolean")continue;const A=YL(g.prevProp,v);let R=A||h===l&&g.isActive&&!w&&S||m>_&&S,T=!1;const x=Array.isArray(v)?v:[v];let L=x.reduce(r(h),{});C===!1&&(L={});const{prevResolvedValues:H={}}=g,z={...H,...L},q=W=>{R=!0,d.has(W)&&(T=!0,d.delete(W)),g.needsAnimating[W]=!0;const I=t.getValue(W);I&&(I.liveStyle=!1)};for(const W in z){const I=L[W],Y=H[W];if(p.hasOwnProperty(W))continue;let Z=!1;Pd(I)&&Pd(Y)?Z=!zx(I,Y):Z=I!==Y,Z?I!=null?q(W):d.add(W):I!==void 0&&d.has(W)?q(W):g.protectedKeys[W]=!0}g.prevProp=v,g.prevResolvedValues=L,g.isActive&&(p={...p,...L}),i&&t.blockInitialAnimation&&(R=!1),R&&(!(w&&A)||T)&&f.push(...x.map(W=>({animation:W,options:{type:h}})))}if(d.size){const m={};d.forEach(h=>{const g=t.getBaseTarget(h),v=t.getValue(h);v&&(v.liveStyle=!0),m[h]=g??null}),f.push({animation:m})}let y=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Uv(),i=!0}}}function YL(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!zx(e,t):!1}function Ar(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Uv(){return{animate:Ar(!0),whileInView:Ar(),whileHover:Ar(),whileTap:Ar(),whileDrag:Ar(),whileFocus:Ar(),exit:Ar()}}class vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class qL extends vr{constructor(e){super(e),e.animationState||(e.animationState=XL(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Zu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let KL=0;class $L extends vr{constructor(){super(...arguments),this.id=KL++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const ZL={animation:{Feature:qL},exit:{Feature:$L}};function _a(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Da(t){return{point:{x:t.pageX,y:t.pageY}}}const QL=t=>e=>up(e)&&t(e,Da(e));function Ko(t,e,n,i){return _a(t,e,QL(n),i)}const Fv=(t,e)=>Math.abs(t-e);function JL(t,e){const n=Fv(t.x,e.x),i=Fv(t.y,e.y);return Math.sqrt(n**2+i**2)}class PS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=xf(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=JL(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:_}=f,{timestamp:y}=Dt;this.history.push({..._,timestamp:y});const{onStart:m,onMove:h}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=yf(d,this.transformPagePoint),it.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=xf(f.type==="pointercancel"?this.lastMoveEventInfo:yf(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),_&&_(f,m)},!up(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Da(e),a=yf(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Dt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,xf(a,this.history)),this.removeListeners=La(Ko(this.contextWindow,"pointermove",this.handlePointerMove),Ko(this.contextWindow,"pointerup",this.handlePointerUp),Ko(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),fr(this.updatePoint)}}function yf(t,e){return e?{point:e(t.point)}:t}function Ov(t,e){return{x:t.x-e.x,y:t.y-e.y}}function xf({point:t},e){return{point:t,delta:Ov(t,bS(e)),offset:Ov(t,eD(e)),velocity:tD(e,.1)}}function eD(t){return t[0]}function bS(t){return t[t.length-1]}function tD(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=bS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ti(e)));)n--;if(!i)return{x:0,y:0};const s=wi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const LS=1e-4,nD=1-LS,iD=1+LS,DS=.01,rD=0-DS,sD=0+DS;function xn(t){return t.max-t.min}function oD(t,e,n){return Math.abs(t-e)<=n}function kv(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=xn(n)/xn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=nD&&t.scale<=iD||isNaN(t.scale))&&(t.scale=1),(t.translate>=rD&&t.translate<=sD||isNaN(t.translate))&&(t.translate=0)}function $o(t,e,n,i){kv(t.x,e.x,n.x,i?i.originX:void 0),kv(t.y,e.y,n.y,i?i.originY:void 0)}function Bv(t,e,n){t.min=n.min+e.min,t.max=t.min+xn(e)}function aD(t,e,n){Bv(t.x,e.x,n.x),Bv(t.y,e.y,n.y)}function zv(t,e,n){t.min=e.min-n.min,t.max=t.min+xn(e)}function Zo(t,e,n){zv(t.x,e.x,n.x),zv(t.y,e.y,n.y)}function lD(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Vv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function uD(t,{top:e,left:n,bottom:i,right:r}){return{x:Vv(t.x,n,r),y:Vv(t.y,e,i)}}function Hv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function cD(t,e){return{x:Hv(t.x,e.x),y:Hv(t.y,e.y)}}function fD(t,e){let n=.5;const i=xn(t),r=xn(e);return r>i?n=so(e.min,e.max-i,t.min):i>r&&(n=so(t.min,t.max-r,e.min)),Li(0,1,n)}function dD(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const zd=.35;function hD(t=zd){return t===!1?t=0:t===!0&&(t=zd),{x:Gv(t,"left","right"),y:Gv(t,"top","bottom")}}function Gv(t,e,n){return{min:Wv(t,e),max:Wv(t,n)}}function Wv(t,e){return typeof t=="number"?t:t[e]||0}const jv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ns=()=>({x:jv(),y:jv()}),Xv=()=>({min:0,max:0}),yt=()=>({x:Xv(),y:Xv()});function An(t){return[t("x"),t("y")]}function IS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function pD({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function mD(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Sf(t){return t===void 0||t===1}function Vd({scale:t,scaleX:e,scaleY:n}){return!Sf(t)||!Sf(e)||!Sf(n)}function Lr(t){return Vd(t)||NS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function NS(t){return Yv(t.x)||Yv(t.y)}function Yv(t){return t&&t!=="0%"}function Au(t,e,n){const i=t-n,r=e*i;return n+r}function qv(t,e,n,i,r){return r!==void 0&&(t=Au(t,r,i)),Au(t,n,i)+e}function Hd(t,e=0,n=1,i,r){t.min=qv(t.min,e,n,i,r),t.max=qv(t.max,e,n,i,r)}function US(t,{x:e,y:n}){Hd(t.x,e.translate,e.scale,e.originPoint),Hd(t.y,n.translate,n.scale,n.originPoint)}const Kv=.999999999999,$v=1.0000000000001;function gD(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,US(t,o)),i&&Lr(s.latestValues)&&Fs(t,s.latestValues))}e.x<$v&&e.x>Kv&&(e.x=1),e.y<$v&&e.y>Kv&&(e.y=1)}function Us(t,e){t.min=t.min+e,t.max=t.max+e}function Zv(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);Hd(t,e,n,s,i)}function Fs(t,e){Zv(t.x,e.x,e.scaleX,e.scale,e.originX),Zv(t.y,e.y,e.scaleY,e.scale,e.originY)}function FS(t,e){return IS(mD(t.getBoundingClientRect(),e))}function vD(t,e,n){const i=FS(t,n),{scroll:r}=e;return r&&(Us(i.x,r.offset.x),Us(i.y,r.offset.y)),i}const OS=({current:t})=>t?t.ownerDocument.defaultView:null,_D=new WeakMap;class yD{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Da(c).point)},s=(c,f)=>{const{drag:d,dragPropagation:p,onDragStart:_}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=cb(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(m=>{let h=this.getAxisMotionValue(m).get()||0;if(oi.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[m];v&&(h=xn(v)*(parseFloat(h)/100))}}this.originPoint[m]=h}),_&&it.postRender(()=>_(c,f)),Dd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:_,onDrag:y}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=xD(m),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(c,f)},a=(c,f)=>this.stop(c,f),l=()=>An(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new PS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:OS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&it.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Al(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=lD(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ds(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=uD(r.layoutBox,n):this.constraints=!1,this.elastic=hD(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&An(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=dD(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ds(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=vD(i,r.root,this.visualElement.getTransformPagePoint());let o=cD(r.layout.layoutBox,s);if(n){const a=n(pD(o));this.hasMutatedConstraints=!!a,a&&(o=IS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=An(c=>{if(!Al(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,_)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Dd(this.visualElement,e),i.start(xp(e,i,0,n,this.visualElement,!1))}stopAnimation(){An(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){An(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){An(n=>{const{drag:i}=this.getProps();if(!Al(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ct(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ds(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};An(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=fD({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),An(o=>{if(!Al(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(ct(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;_D.set(this.visualElement,this);const e=this.visualElement.current,n=Ko(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ds(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),it.read(i);const o=_a(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(An(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=zd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Al(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function xD(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class SD extends vr{constructor(e){super(e),this.removeGroupControls=_n,this.removeListeners=_n,this.controls=new yD(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_n}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qv=t=>(e,n)=>{t&&it.postRender(()=>t(e,n))};class MD extends vr{constructor(){super(...arguments),this.removePointerDownListener=_n}onPointerDown(e){this.session=new PS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:OS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Qv(e),onStart:Qv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&it.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ko(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Hl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=Jv(t,e.target.x),i=Jv(t,e.target.y);return`${n}% ${i}%`}},ED={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=dr.parse(t);if(r.length>5)return i;const s=dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=ct(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class TD extends me.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;WP(wD),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Hl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||it.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$h.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function kS(t){const[e,n]=oP(),i=me.useContext(_x);return b.jsx(TD,{...t,layoutGroup:i,switchLayoutGroup:me.useContext(Cx),isPresent:e,safeToRemove:n})}const wD={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:ED};function AD(t,e,n){const i=Nt(t)?t:ao(t);return i.start(xp("",i,e,n)),i.animation}function CD(t){return t instanceof SVGElement&&t.tagName!=="svg"}const RD=(t,e)=>t.depth-e.depth;class PD{constructor(){this.children=[],this.isDirty=!1}add(e){cp(this.children,e),this.isDirty=!0}remove(e){fp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(RD),this.isDirty=!1,this.children.forEach(e)}}function bD(t,e){const n=ai.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(fr(i),t(s-e))};return it.read(i,!0),()=>fr(i)}const BS=["TopLeft","TopRight","BottomLeft","BottomRight"],LD=BS.length,e0=t=>typeof t=="string"?parseFloat(t):t,t0=t=>typeof t=="number"||Te.test(t);function DD(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity!==void 0?n.opacity:1,ID(i)),t.opacityExit=ct(e.opacity!==void 0?e.opacity:1,0,ND(i))):s&&(t.opacity=ct(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<LD;o++){const a=`border${BS[o]}Radius`;let l=n0(e,a),u=n0(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||t0(l)===t0(u)?(t[a]=Math.max(ct(e0(l),e0(u),i),0),(oi.test(u)||oi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function n0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ID=zS(0,.5,rS),ND=zS(.5,.95,_n);function zS(t,e,n){return i=>i<t?0:i>e?1:n(so(t,e,i))}function i0(t,e){t.min=e.min,t.max=e.max}function wn(t,e){i0(t.x,e.x),i0(t.y,e.y)}function r0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function s0(t,e,n,i,r){return t-=e,t=Au(t,1/n,i),r!==void 0&&(t=Au(t,1/r,i)),t}function UD(t,e=0,n=1,i=.5,r,s=t,o=t){if(oi.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ct(s.min,s.max,i);t===s&&(a-=e),t.min=s0(t.min,e,n,a,r),t.max=s0(t.max,e,n,a,r)}function o0(t,e,[n,i,r],s,o){UD(t,e[n],e[i],e[r],e.scale,s,o)}const FD=["x","scaleX","originX"],OD=["y","scaleY","originY"];function a0(t,e,n,i){o0(t.x,e,FD,n?n.x:void 0,i?i.x:void 0),o0(t.y,e,OD,n?n.y:void 0,i?i.y:void 0)}function l0(t){return t.translate===0&&t.scale===1}function VS(t){return l0(t.x)&&l0(t.y)}function u0(t,e){return t.min===e.min&&t.max===e.max}function kD(t,e){return u0(t.x,e.x)&&u0(t.y,e.y)}function c0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function HS(t,e){return c0(t.x,e.x)&&c0(t.y,e.y)}function f0(t){return xn(t.x)/xn(t.y)}function d0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class BD{constructor(){this.members=[]}add(e){cp(this.members,e),e.scheduleRender()}remove(e){if(fp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zD(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:p,skewY:_}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Dr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,Mf=["","X","Y","Z"],VD={visibility:"hidden"},h0=1e3;let HD=0;function Ef(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function GS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Zx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",it,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&GS(i)}function WS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=HD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(Dr.totalNodes=Dr.resolvedTargetDeltas=Dr.recalculatedProjection=0),this.nodes.forEach(jD),this.nodes.forEach($D),this.nodes.forEach(ZD),this.nodes.forEach(XD),ko&&window.MotionDebug.record(Dr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new PD)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new dp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=CD(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=bD(d,250),Hl.hasAnimatedSinceResize&&(Hl.hasAnimatedSinceResize=!1,this.nodes.forEach(m0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||n3,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=c.getProps(),g=!this.targetLayout||!HS(this.targetLayout,_)||p,v=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const S={...op(y,"layout"),onPlay:m,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else d||m0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QD),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&GS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(p0);return}this.isUpdating||this.nodes.forEach(qD),this.isUpdating=!1,this.nodes.forEach(KD),this.nodes.forEach(GD),this.nodes.forEach(WD),this.clearAllSnapshots();const a=ai.now();Dt.delta=Li(0,1e3/60,a-Dt.timestamp),Dt.timestamp=a,Dt.isProcessing=!0,hf.update.process(Dt),hf.preRender.process(Dt),hf.render.process(Dt),Dt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$h.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(YD),this.sharedNodes.forEach(JD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,it.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){it.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!VS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Lr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),i3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return yt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(r3))){const{scroll:c}=this.root;c&&(Us(l.x,c.offset.x),Us(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=yt();if(wn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&wn(l,o),Us(l.x,f.offset.x),Us(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=yt();wn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Fs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Lr(c.latestValues)&&Fs(l,c.latestValues)}return Lr(this.latestValues)&&Fs(l,this.latestValues),l}removeTransform(o){const a=yt();wn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Lr(u.latestValues))continue;Vd(u.latestValues)&&u.updateSnapshot();const c=yt(),f=u.measurePageBox();wn(c,f),a0(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Lr(this.latestValues)&&a0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Dt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Dt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),Zo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),wn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=yt(),this.targetWithTransforms=yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wn(this.target,this.layout.layoutBox),US(this.target,this.targetDelta)):wn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),Zo(this.relativeTargetOrigin,this.target,p.target),wn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&Dr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||NS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Dt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;wn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;gD(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=yt());const{target:_}=a;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(r0(this.prevProjectionDelta.x,this.projectionDelta.x),r0(this.prevProjectionDelta.y,this.projectionDelta.y)),$o(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!d0(this.projectionDelta.x,this.prevProjectionDelta.x)||!d0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),ko&&Dr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ns(),this.projectionDelta=Ns(),this.projectionDeltaWithTransform=Ns()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Ns();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=yt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,m=this.getStack(),h=!m||m.members.length<=1,g=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(t3));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const C=S/1e3;g0(f.x,o.x,C),g0(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),e3(this.relativeTarget,this.relativeTargetOrigin,d,C),v&&kD(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=yt()),wn(v,this.relativeTarget)),y&&(this.animationValues=c,DD(c,u,this.latestValues,C,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=it.update(()=>{Hl.hasAnimatedSinceResize=!0,this.currentAnimation=AD(0,h0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(h0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&jS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||yt();const f=xn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=xn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}wn(a,l),Fs(a,c),$o(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new BD),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Ef("z",o,u,this.animationValues);for(let c=0;c<Mf.length;c++)Ef(`rotate${Mf[c]}`,o,u,this.animationValues),Ef(`skew${Mf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return VD;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=zl(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=zl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Lr(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=zD(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:p,y:_}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Su){if(d[y]===void 0)continue;const{correct:m,applyTo:h}=Su[y],g=u.transform==="none"?d[y]:m(d[y],f);if(h){const v=h.length;for(let S=0;S<v;S++)u[h[S]]=g}else u[y]=g}return this.options.layoutId&&(u.pointerEvents=f===this?zl(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(p0),this.root.sharedNodes.clear()}}}function GD(t){t.updateLayout()}function WD(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?An(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=xn(d);d.min=i[f].min,d.max=d.min+p}):jS(s,n.layoutBox,i)&&An(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=xn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Ns();$o(a,i,n.layoutBox);const l=Ns();o?$o(l,t.applyTransform(r,!0),n.measuredBox):$o(l,i,n.layoutBox);const u=!VS(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const _=yt();Zo(_,n.layoutBox,d.layoutBox);const y=yt();Zo(y,i,p.layoutBox),HS(_,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=_,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function jD(t){ko&&Dr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function XD(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function YD(t){t.clearSnapshot()}function p0(t){t.clearMeasurements()}function qD(t){t.isLayoutDirty=!1}function KD(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function m0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $D(t){t.resolveTargetDelta()}function ZD(t){t.calcProjection()}function QD(t){t.resetSkewAndRotation()}function JD(t){t.removeLeadSnapshot()}function g0(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function v0(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function e3(t,e,n,i){v0(t.x,e.x,n.x,i),v0(t.y,e.y,n.y,i)}function t3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const n3={duration:.45,ease:[.4,0,.1,1]},_0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),y0=_0("applewebkit/")&&!_0("chrome/")?Math.round:_n;function x0(t){t.min=y0(t.min),t.max=y0(t.max)}function i3(t){x0(t.x),x0(t.y)}function jS(t,e,n){return t==="position"||t==="preserve-aspect"&&!oD(f0(e),f0(n),.2)}function r3(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const s3=WS({attachResizeListener:(t,e)=>_a(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Tf={current:void 0},XS=WS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Tf.current){const t=new s3({});t.mount(window),t.setOptions({layoutScroll:!0}),Tf.current=t}return Tf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),o3={pan:{Feature:MD},drag:{Feature:SD,ProjectionNode:XS,MeasureLayout:kS}};function S0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&it.postRender(()=>s(e,Da(e)))}class a3 extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=sb(e,n=>(S0(this.node,n,"Start"),i=>S0(this.node,i,"End"))))}unmount(){}}class l3 extends vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=La(_a(this.node.current,"focus",()=>this.onFocus()),_a(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function M0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&it.postRender(()=>s(e,Da(e)))}class u3 extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=ub(e,n=>(M0(this.node,n,"Start"),(i,{success:r})=>M0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Gd=new WeakMap,wf=new WeakMap,c3=t=>{const e=Gd.get(t.target);e&&e(t)},f3=t=>{t.forEach(c3)};function d3({root:t,...e}){const n=t||document;wf.has(n)||wf.set(n,{});const i=wf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(f3,{root:t,...e})),i[r]}function h3(t,e,n){const i=d3(e);return Gd.set(t,n),i.observe(t),()=>{Gd.delete(t),i.unobserve(t)}}const p3={some:0,all:1};class m3 extends vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:p3[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return h3(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(g3(e,n))&&this.startObserver()}unmount(){}}function g3({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const v3={inView:{Feature:m3},tap:{Feature:u3},focus:{Feature:l3},hover:{Feature:a3}},_3={layout:{ProjectionNode:XS,MeasureLayout:kS}},Wd={current:null},YS={current:!1};function y3(){if(YS.current=!0,!!jh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Wd.current=t.matches;t.addListener(e),e()}else Wd.current=!1}const x3=[..._S,jt,dr],S3=t=>x3.find(vS(t)),E0=new WeakMap;function M3(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Nt(r))t.addValue(i,r);else if(Nt(s))t.addValue(i,ao(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ao(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const T0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class E3{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=_p,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ai.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,it.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Qu(n),this.isVariantNode=wx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const _=d[p];l[p]!==void 0&&Nt(_)&&_.set(l[p],!1)}}mount(e){this.current=e,E0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),YS.current||y3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){E0.delete(this.current),this.projection&&this.projection.unmount(),fr(this.notifyUpdate),fr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Jr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&it.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in oo){const n=oo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<T0.length;i++){const r=T0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=M3(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ao(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(mS(r)||oS(r))?r=parseFloat(r):!S3(r)&&dr.test(n)&&(r=dS(e,n)),this.setBaseTarget(e,Nt(r)?r.get():r)),Nt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Qh(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Nt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new dp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class qS extends E3{constructor(){super(...arguments),this.KeyframeResolver=yS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Nt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function T3(t){return window.getComputedStyle(t)}class w3 extends qS{constructor(){super(...arguments),this.type="html",this.renderInstance=Nx}readValueFromInstance(e,n){if(Jr.has(n)){const i=vp(n);return i&&i.default||0}else{const i=T3(e),r=(Lx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return FS(e,n)}build(e,n,i){tp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return sp(e,n,i)}}class A3 extends qS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Jr.has(n)){const i=vp(n);return i&&i.default||0}return n=Ux.has(n)?n:Kh(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return kx(e,n,i)}build(e,n,i){np(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Fx(e,n,i,r)}mount(e){this.isSVGTag=rp(e.tagName),super.mount(e)}}const C3=(t,e)=>Zh(t)?new A3(e):new w3(e,{allowProjection:t!==me.Fragment}),R3=JP({...ZL,...v3,...o3,..._3},C3),Jn=pP(R3);function jd(t){const e=yx(()=>ao(t)),{isStatic:n}=me.useContext(Ku);if(n){const[,i]=me.useState(t);me.useEffect(()=>e.on("change",i),[])}return e}function w0(t){return typeof t=="number"?t:parseFloat(t)}function A0(t,e={}){const{isStatic:n}=me.useContext(Ku),i=me.useRef(null),r=jd(Nt(t)?w0(t.get()):t),s=me.useRef(r.get()),o=me.useRef(()=>{}),a=()=>{const u=i.current;u&&u.time===0&&u.sample(Dt.delta),l(),i.current=TL({keyframes:[r.get(),s.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return me.useInsertionEffect(()=>r.attach((u,c)=>n?c(u):(s.current=u,o.current=c,it.update(a),r.get()),l),[JSON.stringify(e)]),xx(()=>{if(Nt(t))return t.on("change",u=>r.set(w0(u)))},[r]),r}const P3={some:0,all:1};function b3(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Xx(t),o=new WeakMap,a=u=>{u.forEach(c=>{const f=o.get(c.target);if(c.isIntersecting!==!!f)if(c.isIntersecting){const d=e(c);typeof d=="function"?o.set(c.target,d):l.unobserve(c.target)}else typeof f=="function"&&(f(c),o.delete(c.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:P3[r]});return s.forEach(u=>l.observe(u)),()=>l.disconnect()}function Sp(t,{root:e,margin:n,amount:i,once:r=!1}={}){const[s,o]=me.useState(!1);return me.useEffect(()=>{if(!t.current||r&&s)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),l={root:e&&e.current||void 0,margin:n,amount:i};return b3(t.current,a,l)},[e,t,n,r,i]),s}const L3="/assets/photo-D3LPsgWT.jpg";function D3(){return b.jsxs("div",{style:{position:"relative",width:"min(230px, 72vw)",height:"min(230px, 72vw)",animation:"float 4s ease-in-out infinite"},children:[b.jsx("svg",{style:{position:"absolute",inset:0,animation:"spin-cw 10s linear infinite"},viewBox:"0 0 230 230",width:"100%",height:"100%",children:b.jsx("circle",{cx:"115",cy:"115",r:"111",fill:"none",stroke:"rgba(0,245,255,0.25)",strokeWidth:"1.2",strokeDasharray:"9 5"})}),b.jsx("svg",{style:{position:"absolute",inset:0,animation:"spin-ccw 7s linear infinite"},viewBox:"0 0 230 230",width:"100%",height:"100%",children:b.jsx("circle",{cx:"115",cy:"115",r:"97",fill:"none",stroke:"rgba(168,85,247,0.22)",strokeWidth:"1",strokeDasharray:"5 9"})}),b.jsxs("svg",{style:{position:"absolute",inset:0},viewBox:"0 0 230 230",width:"100%",height:"100%",children:[b.jsx("path",{d:"M28 52 L28 28 L52 28",fill:"none",stroke:"#00f5ff",strokeWidth:"2.2"}),b.jsx("path",{d:"M178 28 L202 28 L202 52",fill:"none",stroke:"#00f5ff",strokeWidth:"2.2"}),b.jsx("path",{d:"M28 178 L28 202 L52 202",fill:"none",stroke:"#00f5ff",strokeWidth:"2.2"}),b.jsx("path",{d:"M178 202 L202 202 L202 178",fill:"none",stroke:"#00f5ff",strokeWidth:"2.2"}),b.jsx("circle",{cx:"28",cy:"28",r:"3",fill:"#00f5ff",opacity:"0.6"}),b.jsx("circle",{cx:"202",cy:"28",r:"3",fill:"#00f5ff",opacity:"0.6"}),b.jsx("circle",{cx:"28",cy:"202",r:"3",fill:"#00f5ff",opacity:"0.6"}),b.jsx("circle",{cx:"202",cy:"202",r:"3",fill:"#00f5ff",opacity:"0.6"}),b.jsx("line",{x1:"115",y1:"6",x2:"115",y2:"22",stroke:"rgba(0,245,255,0.4)",strokeWidth:"1"}),b.jsx("line",{x1:"115",y1:"208",x2:"115",y2:"224",stroke:"rgba(0,245,255,0.4)",strokeWidth:"1"}),b.jsx("line",{x1:"6",y1:"115",x2:"22",y2:"115",stroke:"rgba(0,245,255,0.4)",strokeWidth:"1"}),b.jsx("line",{x1:"208",y1:"115",x2:"224",y2:"115",stroke:"rgba(0,245,255,0.4)",strokeWidth:"1"})]}),b.jsxs("div",{style:{position:"absolute",top:"16%",left:"16%",right:"16%",bottom:"16%",borderRadius:"50%",overflow:"hidden",background:"linear-gradient(145deg, rgba(0,245,255,0.08), rgba(168,85,247,0.08))",border:"1.5px solid rgba(0,245,255,0.22)",boxShadow:"0 0 40px rgba(0,245,255,0.12)"},children:[b.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, #060b1a, #0c1630)",fontSize:38,fontWeight:800,color:"rgba(0,245,255,0.75)",letterSpacing:"-0.02em",animation:"glow-pulse 3s ease-in-out infinite"},children:b.jsx("img",{src:L3,alt:"Youness",className:"w-full h-full object-cover",style:{objectPosition:"center 24%",transform:"scale(1.08)"}})}),b.jsx("div",{style:{position:"absolute",left:0,right:0,height:2,background:"linear-gradient(90deg, transparent, #00f5ff 40%, rgba(0,245,255,0.6) 60%, transparent)",boxShadow:"0 0 10px rgba(0,245,255,0.9)",animation:"scanline 2.8s ease-in-out infinite"}})]}),b.jsx("div",{className:"mono",style:{position:"absolute",bottom:-22,left:0,right:0,textAlign:"center"},children:"ID_LOCK :: VERIFIED"})]})}function I3({lang:t,pct:e,label:n}){const i=me.useRef(null),r=Sp(i,{once:!0});return b.jsxs("div",{ref:i,style:{display:"flex",alignItems:"center",gap:10},children:[b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"var(--faint)",width:50,flexShrink:0},children:t}),b.jsx("div",{style:{flex:1,height:3,background:"rgba(255,255,255,0.05)",borderRadius:2,overflow:"hidden"},children:b.jsx(Jn.div,{initial:{width:0},animate:{width:r?`${e}%`:0},transition:{duration:1.1,delay:.3,ease:[.16,1,.3,1]},style:{height:"100%",background:"linear-gradient(90deg, #00f5ff, #a855f7)",borderRadius:2}})}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:9,color:"var(--faint)",width:68,textAlign:"right",flexShrink:0},children:n})]})}function _s({label:t,purple:e=!1}){return b.jsx("span",{className:`tech-tag ${e?"tech-tag-purple":""}`,children:t})}const N3=["Spring Boot","Angular","React","MySQL","MongoDB","Java","PHP","TypeScript","REST API","Docker"],U3=[{k:"STATUS",v:"AVAILABLE",c:"#22c55e"},{k:"BASE",v:"MOROCCO",c:"#00f5ff"},{k:"DEGREE",v:"MSC STUDENT",c:"#a855f7"},{k:"FOCUS",v:"JAVA • REACT",c:"#f59e0b"}],F3=[{lang:"Arabic",pct:100,label:"Native"},{lang:"French",pct:72,label:"Intermediate"},{lang:"English",pct:68,label:"Intermediate"}],C0=[.16,1,.3,1];function O3(){return b.jsx("section",{id:"about",style:{minHeight:"100vh",display:"flex",alignItems:"center",padding:"110px clamp(16px,5%,80px) 80px"},children:b.jsxs("div",{className:"hero-grid",style:{maxWidth:1120,margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(340px, 100%), 1fr))",gap:"clamp(40px,6vw,90px)",alignItems:"center"},children:[b.jsxs("div",{className:"hero-copy",children:[b.jsxs(Jn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.15},style:{display:"flex",alignItems:"center",gap:10,marginBottom:22,flexWrap:"wrap"},children:[b.jsx("span",{className:"mono",children:"33.9716 N, 6.8498 W"}),b.jsx("span",{className:"mono",style:{opacity:.4},children:"// MOROCCO"})]}),b.jsxs(Jn.h1,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.7,delay:.25,ease:C0},style:{fontSize:"clamp(2.6rem,5.5vw,4.8rem)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.05,marginBottom:14},children:["Youness",b.jsx("br",{}),b.jsx("span",{style:{color:"#00f5ff",textShadow:"0 0 30px rgba(0,245,255,0.45)"},children:"EL FADIL"})]}),b.jsxs(Jn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.35},style:{display:"flex",alignItems:"center",gap:9,marginBottom:22,flexWrap:"wrap"},children:[b.jsx(iP,{size:15,color:"#a855f7",strokeWidth:1.5}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:13,color:"#a855f7"},children:"Full-Stack Developer"}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:13,color:"rgba(255,255,255,0.18)",animation:"blink 1s step-end infinite"},children:"_"})]}),b.jsx(Jn.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.45},style:{color:"#94a3b8",lineHeight:1.7,fontSize:14.5,marginBottom:28,maxWidth:"50ch"},children:"Software engineering student building full-stack web applications with Java Spring Boot, React, Angular, and relational databases. Focused on clean backend architecture, secure APIs, and polished user interfaces."}),b.jsx(Jn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.55},style:{display:"flex",flexWrap:"wrap",gap:7,marginBottom:34},children:N3.map(t=>b.jsx(_s,{label:t},t))}),b.jsxs(Jn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.65},style:{display:"flex",flexWrap:"wrap",gap:10},children:[b.jsxs("a",{href:"#projects",style:{padding:"10px 22px",borderRadius:8,background:"rgba(0,245,255,0.08)",border:"1px solid rgba(0,245,255,0.4)",color:"#00f5ff",fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6,transition:"background 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(0,245,255,0.17)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(0,245,255,0.08)"},children:["View Projects ",b.jsx(q2,{size:13})]}),b.jsxs("a",{href:"/Youness-El-Fadil-CV.pdf",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px 22px",borderRadius:8,background:"rgba(168,85,247,0.08)",border:"1px solid rgba(168,85,247,0.35)",color:"#d8b4fe",fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6,transition:"background 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(168,85,247,0.16)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(168,85,247,0.08)"},children:[b.jsx(Gh,{size:13})," Download CV"]}),b.jsxs("a",{href:"#contact",style:{padding:"10px 22px",borderRadius:8,background:"transparent",border:"1px solid rgba(255,255,255,0.1)",color:"#94a3b8",fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6,transition:"all 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.borderColor="rgba(168,85,247,0.45)",t.currentTarget.style.color="#a855f7"},onMouseLeave:t=>{t.currentTarget.style.borderColor="rgba(255,255,255,0.1)",t.currentTarget.style.color="#94a3b8"},children:[b.jsx(vx,{size:13})," Contact"]})]})]}),b.jsxs(Jn.div,{className:"hero-side",initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},transition:{duration:.85,delay:.35,ease:C0},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:36},children:[b.jsx(D3,{}),b.jsx("div",{className:"glass hero-status-card",style:{padding:"16px 20px",width:"100%",maxWidth:300},children:b.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14},children:U3.map(({k:t,v:e,c:n})=>b.jsxs("div",{children:[b.jsx("div",{style:{fontFamily:"'Space Mono', monospace",fontSize:8.5,color:"#475569",marginBottom:3,letterSpacing:"0.1em"},children:t}),b.jsx("div",{style:{fontFamily:"'Space Mono', monospace",fontSize:10.5,color:n,letterSpacing:"0.04em"},children:e})]},t))})}),b.jsxs("div",{className:"hero-langs",style:{width:"100%",maxWidth:300},children:[b.jsx("div",{className:"mono",style:{marginBottom:10},children:"LANGUAGES"}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:F3.map(t=>b.jsx(I3,{...t},t.lang))})]}),b.jsxs("div",{style:{width:"100%",maxWidth:300},children:[b.jsx("div",{className:"mono",style:{marginBottom:10},children:"CORE_PROFILE"}),b.jsx("div",{className:"glass",style:{padding:"14px 16px"},children:b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[b.jsx("span",{style:{fontSize:12,color:"#94a3b8"},children:"Software Engineering student at ENSA Khouribga."}),b.jsx("span",{style:{fontSize:12,color:"#94a3b8"},children:"Interested in internships and junior full-stack opportunities."}),b.jsx("span",{style:{fontSize:12,color:"#94a3b8"},children:"Focused on Spring Boot APIs, React interfaces, and SQL data modeling."})]})})]})]})]})})}function Hn({children:t,delay:e=0,className:n="",style:i={}}){const r=me.useRef(null),s=Sp(r,{once:!0,margin:"-40px"}),o=jd(0),a=jd(0),l=A0(o,{damping:26,stiffness:320}),u=A0(a,{damping:26,stiffness:320}),c=me.useCallback(d=>{const p=r.current;if(!p)return;const _=p.getBoundingClientRect(),y=(d.clientX-_.left)/_.width-.5,m=(d.clientY-_.top)/_.height-.5;o.set(-m*14),a.set(y*14)},[o,a]),f=me.useCallback(()=>{o.set(0),a.set(0)},[o,a]);return b.jsx(Jn.div,{ref:r,className:`glass glass-hover ${n}`,initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.7,delay:e,ease:[.16,1,.3,1]},style:{rotateX:l,rotateY:u,transformPerspective:900,willChange:"transform",...i},onMouseMove:c,onMouseLeave:f,children:t})}function KS({tag:t,title:e,sub:n}){const i=me.useRef(null),r=Sp(i,{once:!0,margin:"-40px"});return b.jsxs(Jn.div,{ref:i,className:"mb-9",initial:{opacity:0},animate:r?{opacity:1}:{opacity:0},transition:{duration:.7,ease:[.16,1,.3,1]},children:[b.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[b.jsx("span",{className:"mono",children:t}),b.jsx("div",{className:"flex-1 h-px",style:{background:"linear-gradient(90deg, rgba(0,245,255,0.3), transparent)"}})]}),b.jsx("h2",{style:{fontSize:"clamp(1.7rem, 3vw, 2.6rem)",fontWeight:700,letterSpacing:"-0.02em",color:"#e2e8f0"},children:e}),n&&b.jsx("p",{className:"text-cyber-faint mt-1.5 text-sm",children:n})]})}function k3(){return b.jsx("section",{id:"education",style:{padding:"80px clamp(20px,5%,80px)",position:"relative",zIndex:2},children:b.jsxs("div",{style:{maxWidth:1120,margin:"0 auto"},children:[b.jsx(KS,{tag:"// 01.EDUCATION",title:"Academic Journey",sub:"Progressive engineering education — from foundations to advanced systems."}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(300px,100%), 1fr))",gap:14},children:[b.jsxs(Hn,{delay:.1,style:{padding:"32px 34px",minHeight:220,gridColumn:"1 / -1"},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:22},children:[b.jsx("div",{style:{width:46,height:46,borderRadius:12,background:"rgba(0,245,255,0.07)",border:"1px solid rgba(0,245,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(J2,{size:22,color:"#00f5ff",strokeWidth:1.5})}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"rgba(0,245,255,0.55)",padding:"3px 10px",border:"1px solid rgba(0,245,255,0.2)",borderRadius:4},children:"2024 — 2026"})]}),b.jsx("h3",{style:{fontSize:22,fontWeight:700,color:"#e2e8f0",marginBottom:8},children:"Master's in Software Engineering"}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:14},children:[b.jsx(av,{size:12,color:"#475569",strokeWidth:1.5}),b.jsx("span",{style:{fontSize:13,color:"#475569"},children:"ENSA Khouribga"})]}),b.jsx("p",{style:{fontSize:13,color:"#475569",lineHeight:1.65,maxWidth:"70ch"},children:"Advanced software engineering principles — distributed systems, cloud architecture, microservices patterns, and enterprise-grade application design."}),b.jsx("div",{style:{position:"absolute",top:-20,right:-20,width:220,height:220,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 65%)",pointerEvents:"none"}})]}),b.jsxs(Hn,{delay:.2,style:{padding:28,minHeight:220},children:[b.jsx("div",{style:{width:42,height:42,borderRadius:12,background:"rgba(168,85,247,0.07)",border:"1px solid rgba(168,85,247,0.22)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16},children:b.jsx(eP,{size:20,color:"#a855f7",strokeWidth:1.5})}),b.jsx("span",{className:"mono",style:{color:"rgba(168,85,247,0.55)",display:"block",marginBottom:10},children:"2023 — 2024"}),b.jsxs("h3",{style:{fontSize:16,fontWeight:700,color:"#e2e8f0",marginBottom:7,lineHeight:1.3},children:["Licence Pro",b.jsx("br",{}),"Software Engineering"]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[b.jsx(av,{size:11,color:"#475569",strokeWidth:1.5}),b.jsx("span",{style:{fontSize:12,color:"#475569"},children:"ENSA"})]})]}),b.jsxs(Hn,{delay:.28,style:{padding:28,minHeight:180},children:[b.jsx("div",{style:{width:42,height:42,borderRadius:12,background:"rgba(0,245,255,0.05)",border:"1px solid rgba(0,245,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16},children:b.jsx(K2,{size:20,color:"#00f5ff",strokeWidth:1.5})}),b.jsx("span",{className:"mono",style:{display:"block",marginBottom:10,opacity:.6},children:"2021 — 2023"}),b.jsx("h3",{style:{fontSize:15,fontWeight:700,color:"#e2e8f0",lineHeight:1.3},children:"DTS — Digital Development"})]}),b.jsxs(Hn,{delay:.36,style:{padding:28,minHeight:180},children:[b.jsx("div",{className:"mono",style:{marginBottom:18},children:"ACADEMIC_STATS"}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{k:"Years of Study",v:"5+"},{k:"Programs",v:"3"},{k:"Institutions",v:"2"}].map(({k:t,v:e})=>b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[b.jsx("span",{style:{fontSize:12,color:"#475569"},children:t}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:15,color:"#00f5ff",fontWeight:700},children:e})]},t))})]})]})]})})}function B3(){return b.jsx("section",{id:"projects",style:{padding:"80px clamp(20px,5%,80px)",position:"relative",zIndex:2},children:b.jsxs("div",{style:{maxWidth:1120,margin:"0 auto"},children:[b.jsx(KS,{tag:"// 02.PROJECTS & EXPERIENCE",title:"Built & Deployed",sub:"Production-grade systems — from first commit to live environment."}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(300px,100%), 1fr))",gap:14},children:[b.jsxs(Hn,{delay:.1,style:{padding:"32px 34px",minHeight:265,gridColumn:"1 / -1"},children:[b.jsx("div",{style:{position:"absolute",bottom:-10,right:-10,opacity:.035,pointerEvents:"none"},children:b.jsx(df,{size:210,color:"#00f5ff"})}),b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:22},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[b.jsx("div",{style:{width:46,height:46,borderRadius:12,background:"rgba(0,245,255,0.07)",border:"1px solid rgba(0,245,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(df,{size:22,color:"#00f5ff",strokeWidth:1.5})}),b.jsxs("div",{children:[b.jsx("div",{className:"mono",style:{marginBottom:4},children:"@ 1337 SCHOOL"}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"#22c55e",background:"rgba(34,197,94,0.1)",padding:"2px 8px",borderRadius:4},children:"FULL_STACK_PROJECT"})]})]}),b.jsx($2,{size:15,color:"#475569",strokeWidth:1.5})]}),b.jsx("h3",{style:{fontSize:22,fontWeight:700,color:"#e2e8f0",marginBottom:10},children:"Real Estate Platform"}),b.jsx("p",{style:{fontSize:13.5,color:"#94a3b8",lineHeight:1.7,marginBottom:22,maxWidth:"68ch"},children:"End-to-end real estate web platform with property listings, advanced geo-filtering, user authentication system, admin control panel, and real-time search built on a clean MVC architecture."}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7},children:["PHP","MySQL","JavaScript","HTML/CSS","REST API","MVC"].map(t=>b.jsx(_s,{label:t},t))})]}),b.jsxs(Hn,{delay:.18,style:{padding:28,minHeight:265},children:[b.jsx("div",{style:{position:"absolute",top:-8,right:-8,opacity:.04,pointerEvents:"none"},children:b.jsx(ov,{size:130,color:"#a855f7"})}),b.jsx("div",{style:{width:42,height:42,borderRadius:12,background:"rgba(168,85,247,0.07)",border:"1px solid rgba(168,85,247,0.22)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14},children:b.jsx(ov,{size:20,color:"#a855f7",strokeWidth:1.5})}),b.jsx("div",{className:"mono",style:{color:"rgba(168,85,247,0.55)",marginBottom:6},children:"@ OCP GROUP"}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"#f59e0b",background:"rgba(245,158,11,0.1)",padding:"2px 8px",borderRadius:4,display:"inline-block",marginBottom:14},children:"INTERNSHIP"}),b.jsx("h3",{style:{fontSize:16,fontWeight:700,color:"#e2e8f0",marginBottom:10,lineHeight:1.3},children:"Industrial Systems Observation"}),b.jsx("p",{style:{fontSize:12.5,color:"#475569",lineHeight:1.65},children:"Technical analysis of industrial automation, SCADA systems, and process monitoring at Morocco's largest phosphate mining corporation."})]}),b.jsxs(Hn,{delay:.22,style:{padding:28,minHeight:265},children:[b.jsx("div",{style:{position:"absolute",top:-12,right:-12,opacity:.04,pointerEvents:"none"},children:b.jsx(uv,{size:132,color:"#00f5ff"})}),b.jsx("div",{style:{width:42,height:42,borderRadius:12,background:"rgba(0,245,255,0.07)",border:"1px solid rgba(0,245,255,0.22)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14},children:b.jsx(uv,{size:20,color:"#00f5ff",strokeWidth:1.5})}),b.jsx("div",{className:"mono",style:{marginBottom:6},children:"@ PERSONAL PROJECT"}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"#22c55e",background:"rgba(34,197,94,0.1)",padding:"2px 8px",borderRadius:4,display:"inline-block",marginBottom:14},children:"REACT + SPRING BOOT"}),b.jsx("h3",{style:{fontSize:16,fontWeight:700,color:"#e2e8f0",marginBottom:10,lineHeight:1.3},children:"E-Commerce Management Platform"}),b.jsx("p",{style:{fontSize:12.5,color:"#94a3b8",lineHeight:1.65,marginBottom:16},children:"Full-stack e-commerce dashboard for managing products, categories, orders, and customers. Built a React admin interface connected to a Spring Boot API with JWT authentication, role-based access, search and filtering, and sales tracking."}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7},children:["React.js","Spring Boot","Java","MySQL","JWT","REST API"].map(t=>b.jsx(_s,{label:t},t))})]}),b.jsxs(Hn,{delay:.3,style:{padding:28,minHeight:265},children:[b.jsx("div",{style:{position:"absolute",top:-12,right:-12,opacity:.04,pointerEvents:"none"},children:b.jsx(lv,{size:132,color:"#a855f7"})}),b.jsx("div",{style:{width:42,height:42,borderRadius:12,background:"rgba(168,85,247,0.07)",border:"1px solid rgba(168,85,247,0.22)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14},children:b.jsx(lv,{size:20,color:"#a855f7",strokeWidth:1.5})}),b.jsx("div",{className:"mono",style:{color:"rgba(168,85,247,0.55)",marginBottom:6},children:"@ ACADEMIC PROJECT"}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"#f59e0b",background:"rgba(245,158,11,0.1)",padding:"2px 8px",borderRadius:4,display:"inline-block",marginBottom:14},children:"SECURE WEB APP"}),b.jsx("h3",{style:{fontSize:16,fontWeight:700,color:"#e2e8f0",marginBottom:10,lineHeight:1.3},children:"Student Task & Collaboration Portal"}),b.jsx("p",{style:{fontSize:12.5,color:"#94a3b8",lineHeight:1.65,marginBottom:16},children:"Collaborative task management platform for students to organize projects, assign work, track deadlines, and share updates in real time. Developed with React on the frontend and Spring Boot on the backend with secure authentication, team workspaces, and notification logic."}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7},children:["React.js","Spring Boot","PostgreSQL","WebSocket","JWT","Tailwind CSS"].map(t=>b.jsx(_s,{label:t,purple:t==="Tailwind CSS"},t))})]}),b.jsxs(Hn,{delay:.34,style:{padding:28,minHeight:190},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[b.jsx(nP,{size:17,color:"#00f5ff",strokeWidth:1.5}),b.jsx("span",{className:"mono",children:"BACKEND_STACK"})]}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7},children:["Spring Boot","Java","MySQL","MongoDB","REST API"].map(t=>b.jsx(_s,{label:t},t))})]}),b.jsxs(Hn,{delay:.38,style:{padding:28,minHeight:190},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[b.jsx(df,{size:17,color:"#a855f7",strokeWidth:1.5}),b.jsx("span",{className:"mono",style:{color:"rgba(168,85,247,0.6)"},children:"FRONTEND_STACK"})]}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7},children:["Angular","React","TypeScript","Tailwind CSS"].map(t=>b.jsx(_s,{label:t,purple:!0},t))})]}),b.jsxs(Hn,{delay:.44,style:{padding:28,minHeight:190,background:"linear-gradient(135deg, rgba(0,245,255,0.03), rgba(168,85,247,0.04))"},children:[b.jsx("div",{className:"mono",style:{marginBottom:20},children:"EXPERIENCE_LOG"}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{k:"Projects Built",v:"7+",c:"#00f5ff"},{k:"Tech Mastered",v:"10+",c:"#a855f7"},{k:"Years Coding",v:"4+",c:"#22c55e"}].map(({k:t,v:e,c:n})=>b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:10,borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[b.jsx("span",{style:{fontSize:12,color:"#475569"},children:t}),b.jsx("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:17,color:n,fontWeight:700},children:e})]},t))})]})]})]})})}const z3=[{href:"mailto:fadileyouness4@gmail.com",icon:vx,label:"Get in Touch",base:{background:"rgba(0,245,255,0.07)",border:"1px solid rgba(0,245,255,0.32)",color:"#00f5ff"},hover:{background:"rgba(0,245,255,0.15)",border:"1px solid rgba(0,245,255,0.32)",color:"#00f5ff"}},{href:"https://github.com/Youness-f",target:"_blank",rel:"noopener noreferrer",icon:Z2,label:"GitHub",base:{background:"transparent",border:"1px solid rgba(255,255,255,0.09)",color:"#94a3b8"},hover:{background:"transparent",border:"1px solid rgba(168,85,247,0.4)",color:"#a855f7"}},{href:"https://www.linkedin.com/in/youness-el-fadil-94083b398/",target:"_blank",rel:"noopener noreferrer",icon:Q2,label:"LinkedIn",base:{background:"transparent",border:"1px solid rgba(255,255,255,0.09)",color:"#94a3b8"},hover:{background:"transparent",border:"1px solid rgba(0,245,255,0.35)",color:"#00f5ff"}},{href:"/Youness-El-Fadil-CV.pdf",target:"_blank",rel:"noopener noreferrer",icon:Gh,label:"Resume",base:{background:"transparent",border:"1px solid rgba(255,255,255,0.09)",color:"#94a3b8"},hover:{background:"transparent",border:"1px solid rgba(168,85,247,0.4)",color:"#d8b4fe"}}];function V3({href:t,target:e,rel:n,icon:i,label:r,base:s,hover:o}){const[a,l]=me.useState(!1);return b.jsxs("a",{className:"footer-btn",href:t,target:e,rel:n,style:{padding:"11px 22px",borderRadius:10,fontSize:13,display:"flex",alignItems:"center",gap:8,transition:"all 0.2s ease",...a?o:s},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[b.jsx(i,{size:15,strokeWidth:1.5}),r]})}function H3(){return b.jsxs("footer",{id:"contact",style:{padding:"64px clamp(20px,5%,80px)",borderTop:"1px solid rgba(255,255,255,0.05)",position:"relative",zIndex:2},children:[b.jsxs("div",{className:"footer-top",style:{maxWidth:1120,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:32},children:[b.jsxs("div",{children:[b.jsx("div",{className:"mono",style:{marginBottom:10},children:"INITIATE_CONTACT"}),b.jsx("h3",{style:{fontSize:"clamp(1.3rem,2.5vw,2rem)",fontWeight:700,color:"#e2e8f0",marginBottom:6},children:"Full-stack developer open to opportunities."}),b.jsx("p",{style:{fontSize:13,color:"#475569"},children:"Available for internships, junior roles, and collaborative web projects."})]}),b.jsx("div",{className:"footer-links",style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"},children:z3.map(t=>b.jsx(V3,{...t},t.label))})]}),b.jsxs("div",{className:"footer-bottom",style:{maxWidth:1120,margin:"28px auto 0",paddingTop:22,borderTop:"1px solid rgba(255,255,255,0.04)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[b.jsx("span",{className:"mono",style:{opacity:.5},children:"Copyright 2026 YOUNESS EL FADIL"}),b.jsx("span",{className:"mono",style:{opacity:.28},children:"BUILD_v2.0.26 // CYBER-MIN // ENSA KHOURIBGA"})]})]})}function G3(){return b.jsxs(b.Fragment,{children:[b.jsx(j2,{}),b.jsxs("div",{style:{position:"relative",zIndex:2},children:[b.jsx(sP,{}),b.jsx(O3,{}),b.jsx(k3,{}),b.jsx(B3,{}),b.jsx(H3,{})]})]})}Af.createRoot(document.getElementById("root")).render(b.jsx(gM.StrictMode,{children:b.jsx(G3,{})}));
