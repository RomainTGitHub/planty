import{_ as Re,u as re,l as Te}from"./js/links.6fea55de.js";import{l as We}from"./js/default-i18n.3881921e.js";import"./js/vue.esm-bundler.f425fb9b.js";import"./js/isArrayLikeObject.a77a8422.js";var se={exports:{}},B={},le={exports:{}},d={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.element"),Le=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Ve=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),Ge=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),K=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,de={};function H(e,a,o){this.props=e,this.context=a,this.refs=de,this.updater=o||ie}H.prototype.isReactComponent={};H.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};H.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ue(){}ue.prototype=H.prototype;function U(e,a,o){this.props=e,this.context=a,this.refs=de,this.updater=o||ie}var q=U.prototype=new ue;q.constructor=U;ce(q,H.prototype);q.isPureReactComponent=!0;var Q=Array.isArray,he=Object.prototype.hasOwnProperty,Y={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function ye(e,a,o){var r,t={},s=null,i=null;if(a!=null)for(r in a.ref!==void 0&&(i=a.ref),a.key!==void 0&&(s=""+a.key),a)he.call(a,r)&&!fe.hasOwnProperty(r)&&(t[r]=a[r]);var l=arguments.length-2;if(l===1)t.children=o;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];t.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)t[r]===void 0&&(t[r]=l[r]);return{$$typeof:E,type:e,key:s,ref:i,props:t,_owner:Y.current}}function Ye(e,a){return{$$typeof:E,type:e.type,key:a,ref:e.ref,props:e.props,_owner:e._owner}}function J(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function Je(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return a[o]})}var X=/\/+/g;function F(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Je(""+e.key):a.toString(36)}function L(e,a,o,r,t){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case E:case Le:i=!0}}if(i)return i=e,t=t(i),e=r===""?"."+F(i,0):r,Q(t)?(o="",e!=null&&(o=e.replace(X,"$&/")+"/"),L(t,a,o,"",function(f){return f})):t!=null&&(J(t)&&(t=Ye(t,o+(!t.key||i&&i.key===t.key?"":(""+t.key).replace(X,"$&/")+"/")+e)),a.push(t)),1;if(i=0,r=r===""?".":r+":",Q(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+F(s,l);i+=L(s,a,o,c,t)}else if(c=qe(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+F(s,l++),i+=L(s,a,o,c,t);else if(s==="object")throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,a,o){if(e==null)return e;var r=[],t=0;return L(e,r,"","",function(s){return a.call(o,s,t++)}),r}function Ke(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var g={current:null},A={transition:null},Qe={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:A,ReactCurrentOwner:Y};d.Children={map:O,forEach:function(e,a,o){O(e,function(){a.apply(this,arguments)},o)},count:function(e){var a=0;return O(e,function(){a++}),a},toArray:function(e){return O(e,function(a){return a})||[]},only:function(e){if(!J(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};d.Component=H;d.Fragment=Ae;d.Profiler=Me;d.PureComponent=U;d.StrictMode=Be;d.Suspense=Ze;d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qe;d.cloneElement=function(e,a,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ce({},e.props),t=e.key,s=e.ref,i=e._owner;if(a!=null){if(a.ref!==void 0&&(s=a.ref,i=Y.current),a.key!==void 0&&(t=""+a.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in a)he.call(a,c)&&!fe.hasOwnProperty(c)&&(r[c]=a[c]===void 0&&l!==void 0?l[c]:a[c])}var c=arguments.length-2;if(c===1)r.children=o;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:E,type:e.type,key:t,ref:s,props:r,_owner:i}};d.createContext=function(e){return e={$$typeof:Ve,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fe,_context:e},e.Consumer=e};d.createElement=ye;d.createFactory=function(e){var a=ye.bind(null,e);return a.type=e,a};d.createRef=function(){return{current:null}};d.forwardRef=function(e){return{$$typeof:Ie,render:e}};d.isValidElement=J;d.lazy=function(e){return{$$typeof:Ue,_payload:{_status:-1,_result:e},_init:Ke}};d.memo=function(e,a){return{$$typeof:Ge,type:e,compare:a===void 0?null:a}};d.startTransition=function(e){var a=A.transition;A.transition={};try{e()}finally{A.transition=a}};d.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};d.useCallback=function(e,a){return g.current.useCallback(e,a)};d.useContext=function(e){return g.current.useContext(e)};d.useDebugValue=function(){};d.useDeferredValue=function(e){return g.current.useDeferredValue(e)};d.useEffect=function(e,a){return g.current.useEffect(e,a)};d.useId=function(){return g.current.useId()};d.useImperativeHandle=function(e,a,o){return g.current.useImperativeHandle(e,a,o)};d.useInsertionEffect=function(e,a){return g.current.useInsertionEffect(e,a)};d.useLayoutEffect=function(e,a){return g.current.useLayoutEffect(e,a)};d.useMemo=function(e,a){return g.current.useMemo(e,a)};d.useReducer=function(e,a,o){return g.current.useReducer(e,a,o)};d.useRef=function(e){return g.current.useRef(e)};d.useState=function(e){return g.current.useState(e)};d.useSyncExternalStore=function(e,a,o){return g.current.useSyncExternalStore(e,a,o)};d.useTransition=function(){return g.current.useTransition()};d.version="18.2.0";le.exports=d;var Xe=le.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var en=Xe,nn=Symbol.for("react.element"),tn=Symbol.for("react.fragment"),an=Object.prototype.hasOwnProperty,on=en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rn={key:!0,ref:!0,__self:!0,__source:!0};function we(e,a,o){var r,t={},s=null,i=null;o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(i=a.ref);for(r in a)an.call(a,r)&&!rn.hasOwnProperty(r)&&(t[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps,a)t[r]===void 0&&(t[r]=a[r]);return{$$typeof:nn,type:e,key:s,ref:i,props:t,_owner:on.current}}B.Fragment=tn;B.jsx=we;B.jsxs=we;se.exports=B;var n=se.exports;const p={};p.headline=n.jsxs("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.817 2H22v.038l-6.183 4.226V2.001zm-7.62 9.473V2H2.016v4.683-.267l6.126 5.094.057-.038zm-6.182 5.061l6.183 4.213v1.252H2.015v-5.465zm13.802-.857L22 11.559v10.437h-6.183v-6.32z",fill:"#F18200"}),n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.198 11.435l-.057.039L2.016 6.38v.265-4.644h6.182v9.434zm0 9.226L2.015 16.45v5.55h6.183v-1.337zm7.62-5.07L22 11.474v10.522h-6.183v-6.405zM22 2.001l-6.183 4.226V2H22z",fill:"#F18200"}),n.jsx("path",{d:"M8.141 13.537L22 4.064v5.432l-13.8 9.19L2 14.46l.016-6.018 6.125 5.094z",fill:"#F18200"})]});p.headlineBlack=n.jsx("svg",{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M13.5 2V12H14.5C14.6458 12 14.7604 12.0521 14.8438 12.1562C14.9479 12.2396 15 12.3542 15 12.5V13.5C15 13.6458 14.9479 13.7604 14.8438 13.8438C14.7604 13.9479 14.6458 14 14.5 14H9.5C9.35417 14 9.22917 13.9479 9.125 13.8438C9.04167 13.7604 9 13.6458 9 13.5V12.5C9 12.3542 9.04167 12.2396 9.125 12.1562C9.22917 12.0521 9.35417 12 9.5 12H10.5V8H4.5V12H5.5C5.64583 12 5.76042 12.0521 5.84375 12.1562C5.94792 12.2396 6 12.3542 6 12.5V13.5C6 13.6458 5.94792 13.7604 5.84375 13.8438C5.76042 13.9479 5.64583 14 5.5 14H0.5C0.354167 14 0.229167 13.9479 0.125 13.8438C0.0416667 13.7604 0 13.6458 0 13.5V12.5C0 12.3542 0.0416667 12.2396 0.125 12.1562C0.229167 12.0521 0.354167 12 0.5 12H1.5V2H0.5C0.354167 2 0.229167 1.95833 0.125 1.875C0.0416667 1.77083 0 1.64583 0 1.5V0.5C0 0.354167 0.0416667 0.239583 0.125 0.15625C0.229167 0.0520833 0.354167 0 0.5 0H5.5C5.64583 0 5.76042 0.0520833 5.84375 0.15625C5.94792 0.239583 6 0.354167 6 0.5V1.5C6 1.64583 5.94792 1.77083 5.84375 1.875C5.76042 1.95833 5.64583 2 5.5 2H4.5V6H10.5V2H9.5C9.35417 2 9.22917 1.95833 9.125 1.875C9.04167 1.77083 9 1.64583 9 1.5V0.5C9 0.354167 9.04167 0.239583 9.125 0.15625C9.22917 0.0520833 9.35417 0 9.5 0H14.5C14.6458 0 14.7604 0.0520833 14.8438 0.15625C14.9479 0.239583 15 0.354167 15 0.5V1.5C15 1.64583 14.9479 1.77083 14.8438 1.875C14.7604 1.95833 14.6458 2 14.5 2H13.5Z",fill:"#000"})});p.warning=n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM11 5.00002H9V11H11V5.00002ZM11 13H9V15H11V13ZM2.00002 10C2.00002 14.42 5.58002 18 10 18C14.42 18 18 14.42 18 10C18 5.58002 14.42 2.00002 10 2.00002C5.58002 2.00002 2.00002 5.58002 2.00002 10Z",fill:"#005AE0"})});p.smile=n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6ZM13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6ZM6.55 12C7.25 13.19 8.52 14 10 14C11.48 14 12.75 13.19 13.45 12H15.12C14.32 14.05 12.33 15.5 10 15.5C7.67 15.5 5.68 14.05 4.88 12H6.55ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z",fill:"#00AA63"})});p.neutral=n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM5 7.5C5 6.67157 5.67157 6 6.5 6C7.32843 6 8 6.67157 8 7.5C8 8.32843 7.32843 9 6.5 9C5.67157 9 5 8.32843 5 7.5ZM13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6ZM7 13.5V12H13V13.5H7ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z",fill:"#005AE0"})});p.negative=n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6ZM13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6ZM4.88 15.5C5.68 13.45 7.67 12 10 12C12.33 12 14.32 13.45 15.12 15.5H13.45C12.75 14.31 11.48 13.5 10 13.5C8.52 13.5 7.24 14.31 6.55 15.5H4.88ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z",fill:"#DF2A4A"})});p.check=n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM8 12.17L14.59 5.58L16 7L8 15L4 11L5.41 9.59L8 12.17Z",fill:"#00AA63"})});const me=e=>Re.agent().set("X-WP-Nonce",e).use(a=>{a.on("response",o=>{(o.status===401||o.status===403)&&console.error(o)})}),sn=e=>e.replace(/^\//,""),pe=e=>e.replace(/\/$/,""),V=e=>pe(e)+"/",ge=e=>{const a=re();return e=a.aioseo.data.hasUrlTrailingSlash?V(e):pe(e),V(a.aioseo.urls.restUrl)+V("aioseo/v1")+sn(e)};var xe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var a={}.hasOwnProperty;function o(){for(var s="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(s=t(s,r(l)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return o.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var l in s)a.call(s,l)&&s[l]&&(i=t(i,l));return i}function t(s,i){return i?s?s+" "+i:s+i:s}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(xe);var ln=xe.exports;const m=We(ln),{Fragment:cn}=window.wp.element,je=e=>{const a=e.barScore,o=e.color;return n.jsx(cn,{children:n.jsx("div",{className:"aioseo-donut-container",style:{flexDirection:"column"},children:n.jsxs("svg",{className:"aioseo-donut-score-svg",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{className:"aioseo-seo-headline-analyzer-score__background",stroke:"#e8e8eb",strokeWidth:"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}),n.jsx("circle",{className:"aioseo-seo-headline-analyzer-score__circle",stroke:o,strokeWidth:"2",strokeDasharray:`${a}, 100`,strokeLinecap:"round",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"})]})})})},{__:M,sprintf:D}=window.wp.i18n,dn=D(M("Headlines that are lists and how-to get more engagement on average than other types of headlines. %1$s%2$sLearn More%3$s →","all-in-one-seo-pack"),"<br /><br />",'<a href="https://optinmonster.com/why-these-21-headlines-went-viral-and-how-you-can-copy-their-success/" target="_blank" className="aioseo-headline-analyzer-link"><span>',"</span></a>"),ve=D(M("A very good score is between %1$d and %2$d.","all-in-one-seo-pack"),70,90),be=D(M("For best results, you should strive for %1$d and above.","all-in-one-seo-pack"),70),un=()=>{Te();const e=re();return D(M("This Headline Analyzer is part of %1$s to help you increase your traffic. %2$sAnalyze your site further here%3$s →%4$s","all-in-one-seo-pack"),"AIOSEO",D('<a href="%1$s" className="aioseo-headline-analyzer-link" target="_blank"><span>',e.aioseo.urls.aio.seoAnalysis),"</span>","</a>")},{__:P}=window.wp.i18n,{Fragment:hn}=window.wp.element,{PanelBody:fn,PanelRow:yn}=window.wp.components,$="all-in-one-seo-pack",wn=e=>{const a=e.analyzer.currentHeadlineData.sentence,o=P("Score",$),r=e.analyzer.currentHeadlineData.score,t=40>r?"red":70>=r?"orange":"green",s=t==="red"?"#df2a4a":t==="orange"?"#F2994A":"#00aa63";let i;switch(!0){case 25>r:i=n.jsx("span",{children:P("Not Looking Great",$)});break;case 50>r:i=n.jsx("span",{children:P("Could Be Better",$)});break;case 60>r:i=n.jsx("span",{children:P("Getting There",$)});break;case 75>r:i=n.jsx("span",{children:P("Looks Good! 👍👍",$)});break;case 75<r:i=n.jsx("span",{children:P("Super! 🔥🔥🔥",$)});break;default:i=!1}return n.jsx(hn,{children:n.jsx(fn,{className:"aioseo-headline-analyzer-panel-score",title:o,children:n.jsx(yn,{children:n.jsxs("div",{className:"aioseo-headline-analyzer-current-score-tab aioseo-headline-analyzer-panel-first-block",children:[n.jsxs("h4",{className:"aioseo-headline-analyzer-current-title",children:["“",a,"”"]}),n.jsxs("div",{className:"aioseo-headline-analyzer-pie-chart-container",children:[n.jsxs("div",{className:m("aioseo-headline-analyzer-current-score",t),children:[r,n.jsx("span",{className:"aioseo-headline-analyzer-total-out-of-score",children:"/ 100"})]}),i&&n.jsx("div",{className:m("aioseo-headline-analyzer-score-status",t),children:i}),n.jsx(je,{barScore:r,color:s})]}),n.jsxs("p",{children:[ve," ",be]})]})})})})},{__:I}=window.wp.i18n,{Fragment:mn}=window.wp.element,{PanelBody:pn,PanelRow:gn,TextControl:xn,Button:jn}=window.wp.components,Z="all-in-one-seo-pack",vn=e=>{const a=I("Try New Headline",Z),o=I("Enter a different headline than your post title to see how it compares.",Z),r=I("Analyze Headline",Z),t=typeof e.analyzer.newHeadline<"u"?e.analyzer.newHeadline:"",s=typeof e.analyzer.previousHeadlinesData<"u"?e.analyzer.previousHeadlinesData:[],i=!t,l=c=>{const f=c.trim();f&&me(window.aioseo.nonce).post(ge("analyze-headline")).send({headline:f,shouldStoreHeadline:!1}).then(h=>{const u=JSON.parse(h.body[Object.keys(h.body)[0]]);e.setAnalyzer({newHeadlineData:u,headlineData:u,previousHeadlinesData:[e.analyzer.headlineData,...s],isNewData:!0})}).catch(h=>{e.setAnalyzer({isNewData:!1}),console.error(h)})};return n.jsx(mn,{children:n.jsx(pn,{title:a,className:m("aioseo-headline-analyzer-panel-tab-new-score-form"),children:n.jsx(gn,{children:n.jsx("div",{className:"aioseo-headline-analyzer-new-tab",children:n.jsx("div",{className:"aioseo-headline-analyzer-new-score-form-block",children:n.jsxs("form",{onSubmit:c=>{c.preventDefault(),l(t)},children:[n.jsx(xn,{label:o,value:t,onChange:c=>{c!==" "&&e.setAnalyzer({newHeadline:c})},className:"aioseo-headline-analyzer-input-field"}),n.jsx(jn,{className:m("aioseo-headline-analyzer-button"),onClick:()=>{l(t)},disabled:i,children:r})]})})})})})})},{__:z}=window.wp.i18n,{Fragment:bn}=window.wp.element,{PanelBody:Cn,PanelRow:_n}=window.wp.components,S="all-in-one-seo-pack",zn=e=>{const a=e.analyzer.currentHeadlineData.sentence,o=z("New Score",S),r=z("Current Score",S),t=typeof e.analyzer.newHeadlineData<"u"?e.analyzer.newHeadlineData.sentence:"",s=typeof e.analyzer.newHeadlineData<"u"?e.analyzer.newHeadlineData.score:"",i=typeof e.analyzer.currentHeadlineData.score<"u"?e.analyzer.currentHeadlineData.score:"",l=40>s?"red":60>=s?"orange":"green",c=l==="red"?"#df2a4a":l==="orange"?"#F2994A":"#00aa63",f=40>i?"red-bg":60>=i?"orange-bg":"green-bg",h=Math.abs(s-i);let u;switch(!0){case 25>s:u=n.jsx("span",{children:z("Not Looking Great",S)});break;case 50>s:u=n.jsx("span",{children:z("Could Be Better",S)});break;case 60>s:u=n.jsx("span",{children:z("Getting There",S)});break;case 75>s:u=n.jsx("span",{children:z("Looks Good! 👍👍",S)});break;case 75<s:u=n.jsx("span",{children:z("Super! 🔥🔥🔥",S)});break;default:u=!1}return n.jsx(bn,{children:n.jsx(Cn,{title:o,className:"aioseo-headline-analyzer-panel-tab-new-score",children:n.jsx(_n,{children:n.jsx("div",{className:"aioseo-headline-analyzer-panel-first-block",children:n.jsxs("div",{className:"aioseo-headline-analyzer-new-score-panel",children:[n.jsxs("p",{children:[ve," ",be]}),n.jsxs("h4",{children:["“",t,"”"]}),n.jsxs("div",{className:"aioseo-headline-analyzer-pie-chart-container",children:[n.jsx("span",{className:m("aioseo-headline-analyzer-new-score",l),children:s}),n.jsx(je,{barScore:s,color:c}),n.jsxs("span",{className:m("aioseo-headline-analyzer-score-difference",l),children:[s>i?"+ ":s===i?"":"- ",h]}),u&&n.jsx("div",{className:m("aioseo-headline-analyzer-score-status",l),children:u})]}),n.jsxs("div",{className:"current-score",children:[n.jsx("span",{className:m("aioseo-headline-analyzer-score",f),children:i}),n.jsxs("div",{className:"aioseo-headline-analyzer-current-score-content",children:[n.jsx("h5",{children:r}),n.jsx("p",{children:a})]})]})]})})})})})},{__:ee}=window.wp.i18n,{Fragment:Sn,useState:kn,useEffect:Nn}=window.wp.element,Pn=e=>{const a=ee("Current Score","all-in-one-seo-pack"),o=ee("Try New Headline","all-in-one-seo-pack"),[r,t]=kn("current-score"),s=()=>t("current-score"),i=()=>t("new-headline"),l=typeof e.analyzer.isNewData<"u"?e.analyzer.isNewData:!1;return Nn(()=>{e.setAnalyzer({activeTab:r})},[r]),n.jsxs(Sn,{children:[n.jsxs("div",{className:"aioseo-inline-buttons",children:[n.jsx("button",{onClick:s,className:m("aioseo-switcher-button",{active:r==="current-score"}),children:a}),n.jsx("button",{onClick:i,className:m("aioseo-switcher-button",{active:r==="new-headline"}),children:o})]}),r==="new-headline"?n.jsx(n.Fragment,{children:n.jsx(vn,{analyzer:e.analyzer,setAnalyzer:e.setAnalyzer})}):n.jsx(wn,{analyzer:e.analyzer}),l?n.jsx(zn,{analyzer:e.analyzer}):""]})},{__:$n}=window.wp.i18n,{Fragment:Hn}=window.wp.element,{PanelBody:Dn,PanelRow:En}=window.wp.components,On=e=>{const a=$n("Previous Scores","all-in-one-seo-pack"),o=e.analyzer.previousHeadlinesData!=="undefined"?e.analyzer.previousHeadlinesData:[],r=document.querySelector(".edit-post-sidebar"),s=(e.analyzer.activeTab!=="undefined"?e.analyzer.activeTab:"current-score")==="current-score"?390:300,i=l=>{e.setAnalyzer({newHeadlineData:o[l],headlineData:o[l],newHeadline:o[l].sentence,isNewData:!0}),r&&(r.scrollTop=s)};return n.jsx(Hn,{children:n.jsx(Dn,{title:a,className:"aioseo-headline-analyzer-panel-previous-scores",children:n.jsx(En,{children:n.jsx("div",{className:"aioseo-headline-analyzer-panel-first-block",children:n.jsx("ul",{className:"aioseo-headline-analyzer-previous-scores",children:o.map((l,c)=>{if(10>c&&(typeof l.sentence<"u"||typeof l.score<"u")){const f=40>l.score?"red-bg":60>=l.score?"orange-bg":"green-bg";return n.jsxs("li",{onClick:()=>i(c),children:[n.jsx("span",{className:m("aioseo-headline-analyzer-score",f),children:l.score}),n.jsx("span",{className:"aioseo-headline-analyzer-score-text",children:l.sentence})]},c)}return null})})})})})})},{__:Rn}=window.wp.i18n,R=e=>{const a=Rn("Goal: ","all-in-one-seo-pack"),o={width:e.value+"%"};return n.jsxs("div",{className:"aioseo-headline-analyzer-words-block",children:[n.jsx("h5",{children:e.title}),n.jsxs("div",{className:"aioseo-headline-analyzer-words-block-data",children:[n.jsxs("span",{className:m("aioseo-headline-analyzer-words-block-percentage",e.classOnScore),children:[e.value,"%"]}),n.jsxs("span",{className:m("aioseo-headline-analyzer-words-block-percentage-right-column",e.classOnScore),children:[n.jsxs("span",{className:"aioseo-headline-analyzer-words-block-goal",children:[a," ",e.goalValue]}),n.jsxs("span",{className:"aioseo-headline-analyzer-words-block-progressbar",children:[n.jsx("span",{className:"aioseo-headline-analyzer-progressbar-bg"}),n.jsx("span",{className:m("aioseo-headline-analyzer-progressbar-part",e.classOnScoreBg),style:o})]})]})]}),n.jsx("ul",{className:"aioseo-headline-analyzer-words-tag-list",children:0<e.words.length?e.words.map((r,t)=>n.jsx("li",{children:r},t)):""}),n.jsx("p",{className:"aioseo-headline-analyzer-words-guideline",children:e.guideLine})]})},{__:y}=window.wp.i18n,{Fragment:Tn}=window.wp.element,{PanelBody:Wn,PanelRow:Ln}=window.wp.components,w="all-in-one-seo-pack",An=e=>{const a=y("Word Balance",w),o=y("Compare the percentages of your results to the goal for each category and adjust as necessary.",w),r=e.data.score,t=40>e.data.score?"red":60>=e.data.score?"orange":"green",s=e.data.result.commonWordsPercentage===0?"red":.2>e.data.result.commonWordsPercentage?"orange":"green",i=e.data.result.commonWordsPercentage===0?"red-bg":.2>e.data.result.commonWordsPercentage?"orange-bg":"green-bg",l=.2>e.data.result.commonWordsPercentage?y("Your headline would be more likely to get clicks if it had more common words.",w):y("Headlines with 20-30% common words are more likely to get clicks.",w),c=e.data.result.uncommonWordsPercentage===0?"red":.1>e.data.result.uncommonWordsPercentage?"orange":"green",f=e.data.result.uncommonWordsPercentage===0?"red-bg":.1>e.data.result.uncommonWordsPercentage?"orange-bg":"green-bg",h=.1>e.data.result.uncommonWordsPercentage?y("Your headline would be more likely to get clicks if it had more uncommon words.",w):y("Headlines with uncommon words are more likely to get clicks.",w),u=e.data.result.emotionalWordsPercentage===0?"red":.1>e.data.result.emotionalWordsPercentage?"orange":"green",x=e.data.result.emotionalWordsPercentage===0?"red-bg":.1>e.data.result.emotionalWordsPercentage?"orange-bg":"green-bg",Ce=y("Emotionally triggered headlines are likely to drive more clicks.",w),_e=e.data.result.powerWords.length===0?"orange":"green",ze=e.data.result.powerWords.length===0?"orange":"green-bg",Se=y("Headlines with power words are more likely to get clicks.",w),ke=y("Common Words",w),Ne=y("20-30%",w),Pe=y("Uncommon Words",w),$e=y("10-20%",w),He=y("Emotional Words",w),De=y("10-15%",w),Ee=y("Power Words",w),Oe=y("At least one",w);let _;switch(!0){case 25>r:_=n.jsx("span",{children:y("Not Looking Great",w)});break;case 50>r:_=n.jsx("span",{children:y("Could Be Better",w)});break;case 60>r:_=n.jsx("span",{children:y("Getting There",w)});break;case 75>r:_=n.jsx("span",{children:y("Looks Good! 👍👍",w)});break;case 75<r:_=n.jsx("span",{children:y("Super! 🔥🔥🔥",w)});break;default:_=!1}return n.jsx(Tn,{children:n.jsx(Wn,{title:a,className:m("aioseo-headline-analyzer-panel-word-balance","aioseo-headline-analyzer-panel-has-icon",t),icon:t==="green"?p.check:p.warning,children:n.jsxs(Ln,{children:[n.jsxs("div",{className:"aioseo-headline-analyzer-words-block",children:[n.jsx("h4",{children:_}),n.jsx("p",{children:o})]}),n.jsx(R,{title:ke,value:Math.round(e.data.result.commonWordsPercentage*100),goalValue:Ne,words:e.data.result.commonWords,guideLine:l,classOnScore:s,classOnScoreBg:i}),n.jsx(R,{title:Pe,value:Math.round(e.data.result.uncommonWordsPercentage*100),goalValue:$e,words:e.data.result.uncommonWords,guideLine:h,classOnScore:c,classOnScoreBg:f}),n.jsx(R,{title:He,value:Math.round(e.data.result.emotionalWordsPercentage*100),goalValue:De,words:e.data.result.emotionWords,guideLine:Ce,classOnScore:u,classOnScoreBg:x}),n.jsx(R,{title:Ee,value:Math.round(e.data.result.powerWordsPercentage*100),goalValue:Oe,words:e.data.result.powerWords,guideLine:Se,classOnScore:_e,classOnScoreBg:ze})]})})})},{__:j}=window.wp.i18n,{Fragment:Bn}=window.wp.element,{PanelBody:Mn,PanelRow:Fn}=window.wp.components,v="all-in-one-seo-pack",Vn=e=>{const a=j("Your headline has a neutral sentiment.",v),o=j("Headlines that are strongly positive or negative tend to get more engagement than neutral ones.",v),r=j("Your headline has a positive sentiment.",v),t=j("Positive headlines tend to get better engagement than neutral or negative ones.",v),s=j("Your headline has a negative sentiment.",v),i=j("Negative headlines are attention-grabbing and tend to perform better than neutral ones.",v),l=j("Sentiment",v),c=e.data.result.sentiment==="neu"?j("Neutral",v):e.data.result.sentiment==="pos"?j("Positive",v):j("Negative",v),f=e.data.result.sentiment==="neu"?p.neutral:e.data.result.sentiment==="pos"?p.smile:p.negative,h=e.data.result.sentiment==="neu"?"orange":e.data.result.sentiment==="pos"?"green":"red";return n.jsx(Bn,{children:n.jsx(Mn,{title:l,className:m("aioseo-headline-analyzer-panel-sentiment","aioseo-headline-analyzer-panel-has-icon",h),icon:f,children:n.jsx(Fn,{children:n.jsxs("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[n.jsx("h4",{children:c}),e.data.result.sentiment==="neu"?n.jsxs("p",{children:[n.jsx("strong",{children:a}),n.jsx("br",{}),o]}):"",e.data.result.sentiment==="pos"?n.jsxs("p",{children:[n.jsx("strong",{children:r}),n.jsx("br",{}),t]}):"",e.data.result.sentiment==="neg"?n.jsxs("p",{children:[n.jsx("strong",{children:s}),n.jsx("br",{})," ",i]}):""]})})})})},{__:In}=window.wp.i18n,{Fragment:Zn}=window.wp.element,{PanelBody:Gn,PanelRow:Un}=window.wp.components,qn=e=>{const a=e.data.result.headlineTypes.join(", "),o=In("Headline Type","all-in-one-seo-pack"),r=n.jsxs("span",{className:"aioseo-headline-analyzer-panel-types-title",children:[o,n.jsx("span",{children:a})]});return n.jsx(Zn,{children:n.jsx(Gn,{title:r,className:"aioseo-headline-analyzer-panel-types",children:n.jsx(Un,{children:n.jsxs("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[n.jsx("h4",{children:a}),n.jsx("p",{dangerouslySetInnerHTML:{__html:dn}})]})})})})},{__:k}=window.wp.i18n,{Fragment:Yn}=window.wp.element,{PanelBody:Jn,PanelRow:Kn}=window.wp.components,N="all-in-one-seo-pack",Qn=e=>{const a=k("Character Count",N),o=e.data.result.length,r=o.toString();let t="",s="",i="",l="";if(r.length===1&&(l=`<span class="character-zero">0</span><span class="character-zero">0</span><span>${o}</span>`),r.length===2){l='<span class="character-zero">0</span>';for(const c of r)l+=`<span>${c}</span>`}if(o.toString().length===3)for(const c of r)l+=`<span>${c}</span>`;return 19>=o?t="red":20<=o&&34>=o?t="orange":35<=o&&66>=o?t="green":67<=o&&79>=o?t="orange":80<=o&&(t="red"),34>=o?(s=k("Too Short 🙃",N),i=k("You have space to add more keywords and power words to boost your rankings and click-through rate.",N)):35<=o&&66>=o?(s=k("Good 🙂",N),i=k("Headlines that are about 55 characters long will display fully in search results and tend to get more clicks.",N)):67<=o&&(s=k("Too Long 😑",N),i=k("At this length, it will get cut off in search results. Try reducing it to about 55 characters.",N)),n.jsx(Yn,{children:n.jsx(Jn,{title:a,className:m("aioseo-headline-analyzer-panel-character-count","aioseo-headline-analyzer-panel-has-icon",t),icon:t==="green"?p.check:p.warning,children:n.jsx(Kn,{children:n.jsxs("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[n.jsxs("div",{className:"aioseo-headline-analyzer-character-count-container",children:[n.jsx("span",{className:"aioseo-headline-analyzer-status-on-character-length",children:s}),n.jsx("span",{className:m("aioseo-headline-analyzer-character-length",t),dangerouslySetInnerHTML:{__html:l}})]}),n.jsx("p",{children:i})]})})})})},{__:b}=window.wp.i18n,{Fragment:Xn}=window.wp.element,{PanelBody:et,PanelRow:nt}=window.wp.components,C="all-in-one-seo-pack",tt=e=>{const a=b("Word Count",C),o=e.data.result.wordCount,r=o.toString();let t="",s="",i="",l="";if(r.length===1&&(l=`<span class="character-zero">0</span><span class="character-zero">0</span><span>${o}</span>`),r.length===2){l='<span class="character-zero">0</span>';for(const c of r)l+=`<span>${c}</span>`}if(r.length===3)for(const c of r)l+=`<span>${c}</span>`;return 4>=o?(t="red",s=b("Not Enough Words 🙃",C),i=b("Your headline doesn’t use enough words. You have more space to add keywords and power words to improve your SEO and get more engagement.",C)):5<=o&&9>=o?(t="green",s=b("Good 🙂",C),i=b("Your headline has the right amount of words. Headlines are more likely to be clicked on in search results if they have about 6 words.",C)):10<=o&&11>=o?(t="orange",s=b("Reduce Word Count 🙂",C)):(t="red",s=b("Too Many Words 😑",C),i=b("Your headline has too many words. Long headlines will get cut off in search results and won’t get as many clicks.",C)),n.jsx(Xn,{children:n.jsx(et,{title:a,className:m("aioseo-headline-analyzer-panel-word-count","aioseo-headline-analyzer-panel-has-icon",t),icon:t==="green"?p.check:p.warning,children:n.jsx(nt,{children:n.jsxs("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[n.jsxs("div",{className:"aioseo-headline-analyzer-word-counter",children:[n.jsx("span",{className:"aioseo-headline-analyzer-status-on-word-length",children:s}),n.jsx("span",{className:m("aioseo-headline-analyzer-word-length",t),dangerouslySetInnerHTML:{__html:l}})]}),n.jsx("p",{children:i})]})})})})},{__:T}=window.wp.i18n,{Fragment:at}=window.wp.element,{PanelBody:ot,PanelRow:rt}=window.wp.components,W="all-in-one-seo-pack",st=e=>{const a=T("Beginning & Ending Words",W),o=e.data.result.originalExplodedHeadline,r=T("Most readers only look at the first and last 3 words of a headline before deciding whether to click.",W);let t="",s="";return 6<=o.length?(t=o.slice(0,3).join(" "),s=o.slice(-3).join(" ")):3<o.length&&5>=o.length?(t=o.slice(0,3).join(" "),s=o.slice(3).join(" ")):t=o.slice(0,3).join(" "),n.jsx(at,{children:n.jsx(ot,{title:a,className:"aioseo-headline-analyzer-panel-beginning-ending-words",children:n.jsx(rt,{children:n.jsxs("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[t?n.jsxs(n.Fragment,{children:[n.jsx("ul",{className:"aioseo-headline-analyzer-word-begining-title",children:n.jsx("li",{children:T("Beginning Words",W)})}),n.jsx("div",{className:"aioseo-headline-analyzer-words beginning",children:n.jsx("span",{children:t})})]}):"",s?n.jsxs(n.Fragment,{children:[n.jsx("ul",{className:"aioseo-headline-analyzer-word-ending-title",children:n.jsx("li",{children:T("Ending Words",W)})}),n.jsx("div",{className:"aioseo-headline-analyzer-words ending",children:n.jsx("span",{children:s})})]}):"",n.jsx("p",{className:"aioseo-headline-analyzer-words-guideline",children:r})]})})})})},{__:ne}=window.wp.i18n,{Fragment:lt}=window.wp.element,{PanelBody:it,PanelRow:ct}=window.wp.components,{select:dt}=window.wp.data,ut=e=>{const a=ne("Search Preview","all-in-one-seo-pack"),o=ne("Here is how your headline will look like in Google search results page.","all-in-one-seo-pack"),r=dt("core/editor").getPermalink(),t={href:r};return n.jsx(lt,{children:n.jsx(it,{title:a,className:"aioseo-headline-analyzer-panel-search-preview",children:n.jsx(ct,{children:n.jsx("div",{className:"aioseo-headline-analyzer-panel-first-block",children:n.jsxs("div",{className:"aioseo-headline-analyzer-search-prevew-wrap",children:[n.jsx("p",{className:"aioseo-headline-analyzer-post-url",children:n.jsx("a",{...t,target:"_blank",children:r})}),n.jsx("h4",{children:e.data.sentence}),n.jsx("p",{children:o})]})})})})})};const{__:te}=window.wp.i18n,{Fragment:ht,useState:ft,useEffect:yt}=window.wp.element,{registerPlugin:wt}=window.wp.plugins,{PluginSidebar:mt,PluginSidebarMoreMenuItem:pt}=window.wp.editPost,{select:G}=window.wp.data,ae="all-in-one-seo-pack";let oe;const gt=(e,a)=>((...o)=>{const r=()=>e(...o);clearTimeout(oe),oe=setTimeout(r,a)}).call(),xt=()=>{let e=G("core/editor").getEditedPostAttribute("title");const a=()=>{if(!e){s({...t,...{dataExist:!1}});return}me(window.aioseo.nonce).post(ge("analyze-headline")).send({headline:e,shouldStoreHeadline:!1}).then(h=>{const u={dataExist:!1},x=JSON.parse(h.body[Object.keys(h.body)[0]]);x.analysed&&(u.currentHeadlineData=x,u.headlineData=x,u.dataExist=!0,typeof t.headlineData<"u"&&(u.previousHeadlinesData=[t.headlineData,...i])),s({...t,...u})}).catch(h=>{s({...t,...{dataExist:!1}}),console.error("Couldn't fetch score for headline:",h)})};yt(()=>a(),[]),window.wp.data.subscribe(()=>{e!==G("core/editor").getEditedPostAttribute("title")&&(e=G("core/editor").getEditedPostAttribute("title"),gt(()=>a(),2e3))});const o=te("SEO Headline Analyzer",ae),r=te("Write your post title to see the analyzer data. This Headline Analyzer tool enables you to write irresistible SEO headlines that drive traffic, shares, and rank better in search results.",ae),[t,s]=ft({}),i=typeof t.previousHeadlinesData<"u"?t.previousHeadlinesData:[],l=document.querySelector(`.components-button[aria-label='${o}'] svg`);if(l){const h=document.createElement("span");if(t.dataExist&&typeof t.currentHeadlineData.score<"u"){const u=t.currentHeadlineData.score,x=50>u?"red":80>=u?"orange":"green";l.parentNode.setAttribute("aioseo-button-color",x),l.nextElementSibling?l.nextElementSibling.innerHTML=`${u}/100`:(h.innerHTML=`${u}/100`,l.parentNode.insertBefore(h,l.nextSibling))}else l.parentNode.setAttribute("aioseo-button-color","red"),l.nextElementSibling?l.nextElementSibling.innerHTML="0/100":(h.innerHTML="0/100",l.parentNode.insertBefore(h,l.nextSibling))}const c=document.querySelector(".aioseo-headline-analyzer-wrapper");if(c){const h=c.parentNode.querySelectorAll(".components-panel__header");h&&h.forEach(function(u){const x=u.querySelector(".interface-complementary-area__pin-unpin-item");x&&x!==null&&(x.style.display="none")})}const f=h=>{s({...t,...h})};return n.jsxs(ht,{children:[n.jsx(pt,{target:"aioseo-headline-analyzer",children:o}),n.jsxs(mt,{name:"aioseo-headline-analyzer",title:o,className:"aioseo-headline-analyzer-wrapper",children:[typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(Pn,{analyzer:t,setAnalyzer:f}):n.jsx("p",{className:"aioseo-headline-analyzer-empty-title-warning",children:r}),typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed&&0<i.length?n.jsx(On,{analyzer:t,setAnalyzer:f}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(An,{data:t.headlineData}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(Vn,{data:t.headlineData}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(qn,{data:t.headlineData}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(Qn,{data:t.headlineData}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(tt,{data:t.headlineData}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(st,{data:t.headlineData}):"",typeof t.headlineData<"u"&&t.dataExist&&t.headlineData.analysed?n.jsx(ut,{data:t.headlineData}):"",n.jsx("div",{className:"aioseo-headline-analyzer-bottom-notice",children:n.jsx("p",{dangerouslySetInnerHTML:{__html:un()}})})]})]})};wt("aioseo-headline-analyzer",{icon:p.headline,render:xt});
