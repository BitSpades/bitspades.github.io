(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~aacd4aef"],{"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return V}));var r=n("f2bf");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,c=e=>o?Symbol(e):"_vr_"+e,a=c("rvlm"),s=c("rvd"),i=c("r"),l=c("rl"),u=c("rvl"),f="undefined"!==typeof window;function p(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function d(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function b(e,t,n="/"){let r,o={},c="",a="";const s=t.indexOf("?"),i=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),c=t.slice(s+1,i>-1?i:t.length),o=e(c)),i>-1&&(r=r||t.slice(0,i),a=t.slice(i,t.length)),r=R(null!=r?r:t,n),{fullPath:r+(c&&"?")+c+a,path:r,query:o,hash:a}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function O(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&E(t.matched[r],n.matched[o])&&j(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function j(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?A(e,t):Array.isArray(t)?A(t,e):e===t}function A(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function R(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,c,a=n.length-1;for(o=0;o<r.length;o++)if(c=r[o],1!==a&&"."!==c){if(".."!==c)break;a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var P,x;(function(e){e["pop"]="pop",e["push"]="push"})(P||(P={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(x||(x={}));function C(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const $=/^[^#]+#/;function S(e,t){return e.replace($,"#")+t}function q(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function _(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=q(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function B(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function G(e,t){F.set(e,t)}function M(e){const t=F.get(e);return F.delete(e),t}let I=()=>location.protocol+"//"+location.host;function T(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let t=o.includes(e.slice(c))?e.slice(c).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const a=w(n,e);return a+r+o}function U(e,t,n,r){let o=[],c=[],a=null;const s=({state:c})=>{const s=T(e,location),i=n.value,l=t.value;let u=0;if(c){if(n.value=s,t.value=c,a&&a===i)return void(a=null);u=l?c.position-l.position:0}else r(s);o.forEach(e=>{e(n.value,i,{delta:u,type:P.pop,direction:u?u>0?x.forward:x.back:x.unknown})})};function i(){a=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return c.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:L()}),"")}function f(){for(const e of c)e();c=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:l,destroy:f}}function D(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?L():null}}function W(e){const{history:t,location:n}=window,r={value:T(e,n)},o={value:t.state};function c(r,c,a){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:I()+e+r;try{t[a?"replaceState":"pushState"](c,"",i),o.value=c}catch(l){console.error(l),n[a?"replace":"assign"](i)}}function a(e,n){const a=h({},t.state,D(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});c(e,a,!0),r.value=e}function s(e,n){const a=h({},o.value,t.state,{forward:e,scroll:L()});c(a.current,a,!0);const s=h({},D(r.value,e,null),{position:a.position+1},n);c(e,s,!1),r.value=e}return o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:a}}function z(e){e=C(e);const t=W(e),n=U(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),z(e)}function K(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=c("nf");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function Y(e,t){return h(new Error,{type:e,[Q]:!0},t)}function N(e,t){return e instanceof Error&&Q in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=h({},ee,t),r=[];let o=n.start?"^":"";const c=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let t=0;t<u.length;t++){const r=u[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(te,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:s,regexp:i}=r;c.push({name:e,repeatable:n,optional:s});const f=i||Z;if(f!==Z){a+=10;try{new RegExp(`(${f})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+l.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=s&&u.length<2?`(?:/${p})`:"/"+p),s&&(p+="?"),o+=p,a+=20,s&&(a+=-8),n&&(a+=-20),".*"===f&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function s(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=c[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function i(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:c,repeatable:a,optional:s}=e,i=c in t?t[c]:"";if(Array.isArray(i)&&!a)throw new Error(`Provided param "${c}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${c}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:a,score:r,keys:c,parse:s,stringify:i}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function oe(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=re(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const ce={type:0,value:""},ae=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ce]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let c;function a(){c&&o.push(c),c=[]}let s,i=0,l="",u="";function f(){l&&(0===n?c.push({type:0,value:l}):1===n||2===n||3===n?(c.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}while(i<e.length)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),a()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:ae.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),o}function ie(e,t,n){const r=ne(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function le(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function c(e,n,r){const o=!r,s=fe(e);s.aliasOf=r&&r.record;const l=me(t,e),u=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(h({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ie(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!he(f)&&a(e.name)),"children"in s){const e=s.children;for(let t=0;t<e.length;t++)c(e[t],f,r&&r.children[t])}r=r||f,i(f)}return p?()=>{a(p)}:m}function a(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(){return n}function i(e){let t=0;while(t<n.length&&oe(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!he(e)&&r.set(e.record.name,e)}function l(e,t){let o,c,a,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw Y(1,{location:e});a=o.record.name,s=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),c=o.stringify(s)}else if("path"in e)c=e.path,o=n.find(e=>e.re.test(c)),o&&(s=o.parse(c),a=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw Y(1,{location:e,currentLocation:t});a=o.record.name,s=h({},t.params,e.params),c=o.stringify(s)}const i=[];let l=o;while(l)i.unshift(l.record),l=l.parent;return{name:a,path:c,params:s,matched:i,meta:de(i)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>c(e)),{addRoute:c,resolve:l,removeRoute:a,getRoutes:s,getRecordMatcher:o}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function pe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function he(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function de(e){return e.reduce((e,t)=>h(e,t.meta),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ge=/#/g,ve=/&/g,be=/\//g,ye=/=/g,we=/\?/g,Oe=/\+/g,Ee=/%5B/g,je=/%5D/g,ke=/%5E/g,Ae=/%60/g,Re=/%7B/g,Pe=/%7C/g,xe=/%7D/g,Ce=/%20/g;function $e(e){return encodeURI(""+e).replace(Pe,"|").replace(Ee,"[").replace(je,"]")}function Se(e){return $e(e).replace(Re,"{").replace(xe,"}").replace(ke,"^")}function qe(e){return $e(e).replace(Oe,"%2B").replace(Ce,"+").replace(ge,"%23").replace(ve,"%26").replace(Ae,"`").replace(Re,"{").replace(xe,"}").replace(ke,"^")}function Le(e){return qe(e).replace(ye,"%3D")}function _e(e){return $e(e).replace(ge,"%23").replace(we,"%3F")}function Be(e){return null==e?"":_e(e).replace(be,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ge(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(Oe," "),n=e.indexOf("="),c=Fe(n<0?e:e.slice(0,n)),a=n<0?null:Fe(e.slice(n+1));if(c in t){let e=t[c];Array.isArray(e)||(e=t[c]=[e]),e.push(a)}else t[c]=a}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map(e=>e&&qe(e)):[r&&qe(r)];o.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ie(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Te(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ue(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,s)=>{const i=e=>{!1===e?s(Y(4,{from:n,to:t})):e instanceof Error?s(e):K(e)?s(Y(2,{from:t,to:e})):(c&&r.enterCallbacks[o]===c&&"function"===typeof e&&c.push(e),a())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch(e=>s(e))})}function De(e,t,n,r){const o=[];for(const c of e)for(const e in c.components){let a=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(We(a)){const s=a.__vccOpts||a,i=s[t];i&&o.push(Ue(i,n,r,c,e))}else{let s=a();0,o.push(()=>s.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const a=p(o)?o.default:o;c.components[e]=a;const s=a.__vccOpts||a,i=s[t];return i&&Ue(i,n,r,c,e)()}))}}return o}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=Object(r["n"])(i),n=Object(r["n"])(l),o=Object(r["b"])(()=>t.resolve(Object(r["F"])(e.to))),c=Object(r["b"])(()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],c=n.matched;if(!r||!c.length)return-1;const a=c.findIndex(E.bind(null,r));if(a>-1)return a;const s=Qe(e[t-2]);return t>1&&Qe(r)===s&&c[c.length-1].path!==s?c.findIndex(E.bind(null,e[t-2])):a}),a=Object(r["b"])(()=>c.value>-1&&Je(n.params,o.value.params)),s=Object(r["b"])(()=>c.value>-1&&c.value===n.matched.length-1&&j(n.params,o.value.params));function u(n={}){return He(n)?t[Object(r["F"])(e.replace)?"replace":"push"](Object(r["F"])(e.to)).catch(m):Promise.resolve()}return{route:o,href:Object(r["b"])(()=>o.value.href),isActive:a,isExactActive:s,navigate:u}}const Ve=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=Object(r["y"])(ze(e)),{options:o}=Object(r["n"])(i),c=Object(r["b"])(()=>({[Xe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:c.value},o)}}}),Ke=Ve;function He(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ye=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["n"])(u),c=Object(r["b"])(()=>e.route||o.value),i=Object(r["n"])(s,0),l=Object(r["b"])(()=>c.value.matched[i]);Object(r["w"])(s,i+1),Object(r["w"])(a,l),Object(r["w"])(u,c);const f=Object(r["z"])();return Object(r["J"])(()=>[f.value,l.value,e.name],([e,t,n],[r,o,c])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&E(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=c.value,a=l.value,s=a&&a.components[e.name],i=e.name;if(!s)return Ne(n.default,{Component:s,route:o});const u=a.props[e.name],p=u?!0===u?o.params:"function"===typeof u?u(o):u:null,d=e=>{e.component.isUnmounted&&(a.instances[i]=null)},m=Object(r["m"])(s,h({},p,t,{onVnodeUnmounted:d,ref:f}));return Ne(n.default,{Component:m,route:o})||m}}});function Ne(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Ye;function et(e){const t=le(e.routes,e),n=e.parseQuery||Ge,o=e.stringifyQuery||Me,c=e.history;const a=Te(),s=Te(),p=Te(),g=Object(r["D"])(J);let v=J;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=d.bind(null,e=>""+e),E=d.bind(null,Be),j=d.bind(null,Fe);function k(e,n){let r,o;return H(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function A(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function R(){return t.getRoutes().map(e=>e.record)}function x(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=h({},r||g.value),"string"===typeof e){const o=b(n,e,r.path),a=t.resolve({path:o.path},r),s=c.createHref(o.fullPath);return h(o,a,{params:j(a.params),hash:Fe(o.hash),redirectedFrom:void 0,href:s})}let a;if("path"in e)a=h({},e,{path:b(n,e.path,r.path).path});else{const t=h({},e.params);for(const e in t)null==t[e]&&delete t[e];a=h({},e,{params:E(e.params)}),r.params=E(r.params)}const s=t.resolve(a,r),i=e.hash||"";s.params=w(j(s.params));const l=y(o,h({},e,{hash:Se(i),path:s.path})),u=c.createHref(l);return h({fullPath:l,hash:i,query:o===Me?Ie(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function $(e){return"string"===typeof e?b(n,e,g.value.path):h({},e)}function S(e,t){if(v!==e)return Y(8,{from:t,to:e})}function q(e){return T(e)}function F(e){return q(h($(e),{replace:!0}))}function I(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:e.params},r)}}function T(e,t){const n=v=C(e),r=g.value,c=e.state,a=e.force,s=!0===e.replace,i=I(n);if(i)return T(h($(i),{state:c,force:a,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&O(o,r,n)&&(u=Y(16,{to:l,from:r}),re(r,r,!0,!1)),(u?Promise.resolve(u):D(l,r)).catch(e=>N(e)?e:ee(e,l,r)).then(e=>{if(e){if(N(e,2))return T(h($(e.to),{state:c,force:a,replace:s}),t||l)}else e=z(l,r,!0,s,c);return W(l,r,e),e})}function U(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e,t){let n;const[r,o,c]=nt(e,t);n=De(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach(r=>{n.push(Ue(r,e,t))});const i=U.bind(null,e,t);return n.push(i),tt(n).then(()=>{n=[];for(const r of a.list())n.push(Ue(r,e,t));return n.push(i),tt(n)}).then(()=>{n=De(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Ue(r,e,t))});return n.push(i),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ue(o,e,t));else n.push(Ue(r.beforeEnter,e,t));return n.push(i),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=De(c,"beforeRouteEnter",e,t),n.push(i),tt(n))).then(()=>{n=[];for(const r of s.list())n.push(Ue(r,e,t));return n.push(i),tt(n)}).catch(e=>N(e,8)?e:Promise.reject(e))}function W(e,t,n){for(const r of p.list())r(e,t,n)}function z(e,t,n,r,o){const a=S(e,t);if(a)return a;const s=t===J,i=f?history.state:{};n&&(r||s?c.replace(e.fullPath,h({scroll:s&&i&&i.scroll},o)):c.push(e.fullPath,o)),g.value=e,re(e,t,n,s),ne()}let V;function K(){V=c.listen((e,t,n)=>{const r=C(e),o=I(r);if(o)return void T(h(o,{replace:!0}),r).catch(m);v=r;const a=g.value;f&&G(B(a.fullPath,n.delta),L()),D(r,a).catch(e=>N(e,12)?e:N(e,2)?(T(e.to,r).then(e=>{N(e,20)&&!n.delta&&n.type===P.pop&&c.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&c.go(-n.delta,!1),ee(e,r,a))).then(e=>{e=e||z(r,a,!1),e&&(n.delta?c.go(-n.delta,!1):n.type===P.pop&&N(e,20)&&c.go(-1,!1)),W(r,a,e)}).catch(m)})}let Q,X=Te(),Z=Te();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Q&&g.value!==J?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){Q||(Q=!0,K(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset())}function re(t,n,o,c){const{scrollBehavior:a}=e;if(!f||!a)return Promise.resolve();const s=!o&&M(B(t.fullPath,0))||(c||!o)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>a(t,n,s)).then(e=>e&&_(e)).catch(e=>ee(e,t,n))}const oe=e=>c.go(e);let ce;const ae=new Set,se={currentRoute:g,addRoute:k,removeRoute:A,hasRoute:x,getRoutes:R,resolve:C,options:e,push:q,replace:F,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:a.add,beforeResolve:s.add,afterEach:p.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["F"])(g)}),f&&!ce&&g.value===J&&(ce=!0,q(c.location).catch(e=>{0}));const n={};for(const c in J)n[c]=Object(r["b"])(()=>g.value[c]);e.provide(i,t),e.provide(l,Object(r["y"])(n)),e.provide(u,g);const o=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=J,V&&V(),g.value=J,ce=!1,Q=!1),o()}}};return se}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let a=0;a<c;a++){const c=t.matched[a];c&&(e.matched.find(e=>E(e,c))?r.push(c):n.push(c));const s=e.matched[a];s&&(t.matched.find(e=>E(e,s))||o.push(s))}return[n,r,o]}}}]);