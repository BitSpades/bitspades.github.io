(function(e){function n(n){for(var c,r,u=n[0],s=n[1],i=n[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);p&&p(n);while(l.length)l.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(c=!1)}c&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var c={},r={"app~5a11b65b":0},a={"app~5a11b65b":0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"f8eacad8","chunk-3d307545":"2c2af964","chunk-64771d2b":"9c9eaedd"}[e]+".js"}function s(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-3d307545":1,"chunk-64771d2b":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"31d6cfe0","chunk-3d307545":"3ebed084","chunk-64771d2b":"65d1a097"}[e]+".css",a=s.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===c||d===a)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var c=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],p.parentNode.removeChild(p),t(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var l=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,t[1](l)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=c,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)s.d(t,c,function(n){return e[n]}.bind(null,c));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var p=d;o.push([1,"chunk-vendors~0f485567","chunk-vendors~3622465b","chunk-vendors~4add52da","chunk-vendors~5cbdb1e7","chunk-vendors~602a6e35","chunk-vendors~d6b3b356","chunk-vendors~c35b422a","chunk-vendors~ffba60f8","chunk-vendors~8d570bf5","chunk-vendors~4cd998c9","chunk-vendors~0c1c1b47","chunk-vendors~06d709ee","chunk-vendors~a003b814","chunk-vendors~4e98e87e","chunk-vendors~7669db63","chunk-vendors~0a1e6715","chunk-vendors~7f3f6916","chunk-vendors~5ea1a303","chunk-vendors~917cf6f0","chunk-vendors~e4173fa2","chunk-vendors~4ad5f52a","chunk-vendors~62ab5815","chunk-vendors~d939e436","chunk-vendors~93acefaf","chunk-vendors~1f20a385","chunk-vendors~70aabc29","chunk-vendors~fdc6512a","chunk-vendors~aacd4aef","app~748942c6","app~f71cff67"]),t()})({"230a":function(e,n,t){},"3ed5":function(e,n,t){"use strict";t("230a")},7260:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c,r="80001";c="137"===r?[{chainName:"Polygon Mainnet",chainId:"137",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mainnet.maticvigil.com/"],blockExplorerUrls:["https://polygonscan.com/"]}]:[{chainName:"Polygon Testnet",chainId:"80001",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com/"],blockExplorerUrls:["https://mumbai.polygonscan.com/"]}];var a=c},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("f2bf"),r=t("3dfd"),a=t("b85c"),o=(t("d3b7"),t("ddb0"),t("9483"));Object(o["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("EVENT: ready()")},registered:function(){console.log("EVENT: registered()")},cached:function(){console.log("EVENT: cached()")},updatefound:function(){console.log("EVENT: updatefound()")},updated:function(e){console.log("EVENT: updated()"),console.log("===================="),caches.keys().then((function(e){var n,t=Object(a["a"])(e);try{for(t.s();!(n=t.n()).done;){var c=n.value;console.log(c),caches.delete(c)}}catch(r){t.e(r)}finally{t.f()}})),console.log("===================="),console.log("Updating..."),e.update(),console.log("...updating complete, please refresh the page")},offline:function(){console.log("EVENT: offline()")},error:function(e){console.log("EVENT: error()"),console.log(e)}});t("3ca3");var u=t("6c02"),s={class:"home"},i=Object(c["g"])("h1",null,"The homepage is currently under construction",-1),d=[i];function l(e,n,t,r,a,o){return Object(c["u"])(),Object(c["f"])("div",s,d)}var p=Object(c["k"])({});p.render=l;var f=p,h=(t("b0c0"),{class:"wip"}),b=Object(c["g"])("h1",null,"This page is under construction",-1);function v(e,n,t,r,a,o){return Object(c["u"])(),Object(c["f"])("div",h,[b,Object(c["g"])("h2",null,"Page: "+Object(c["E"])(e.$route.name),1)])}var g=Object(c["k"])({});g.render=v;var m=g;Object(c["x"])("data-v-10d8a0f5");var y={class:"settings"},j={class:"row"},k={class:"row"};function O(e,n,t,r,a,o){var u=Object(c["C"])("FlagUS"),s=Object(c["C"])("FlagUK"),i=Object(c["C"])("FlagCA"),d=Object(c["C"])("FlagJP"),l=Object(c["C"])("FlagEU"),p=Object(c["C"])("FlagCN");return Object(c["u"])(),Object(c["f"])("div",y,[Object(c["g"])("h2",null,Object(c["E"])(e.CurrencyType),1),Object(c["g"])("div",j,[Object(c["g"])("div",{class:Object(c["p"])(["flag","usd"===e.currencyType?"active":""]),onClick:n[0]||(n[0]=function(n){return e.Test("usd")})},[Object(c["j"])(u)],2),Object(c["g"])("div",{class:Object(c["p"])(["flag","gbp"===e.currencyType?"active":""]),onClick:n[1]||(n[1]=function(n){return e.Test("gbp")})},[Object(c["j"])(s)],2),Object(c["g"])("div",{class:Object(c["p"])(["flag","cad"===e.currencyType?"active":""]),onClick:n[2]||(n[2]=function(n){return e.Test("cad")})},[Object(c["j"])(i)],2)]),Object(c["g"])("div",k,[Object(c["g"])("div",{class:Object(c["p"])(["flag","jpy"===e.currencyType?"active":""]),onClick:n[3]||(n[3]=function(n){return e.Test("jpy")})},[Object(c["j"])(d)],2),Object(c["g"])("div",{class:Object(c["p"])(["flag","eur"===e.currencyType?"active":""]),onClick:n[4]||(n[4]=function(n){return e.Test("eur")})},[Object(c["j"])(l)],2),Object(c["g"])("div",{class:Object(c["p"])(["flag","cny"===e.currencyType?"active":""]),onClick:n[5]||(n[5]=function(n){return e.Test("cny")})},[Object(c["j"])(p)],2)])])}Object(c["v"])();var T=t("1da1"),C=(t("96cf"),t("bc3a")),E=t.n(C),w=t("d1ff"),P=t("8b78"),N=t("d85a"),S=t("0ae1"),A=t("e03a"),x=t("a6ea"),F=Object(c["k"])({components:{FlagUS:w["a"],FlagUK:P["a"],FlagCA:N["a"],FlagJP:S["a"],FlagEU:A["a"],FlagCN:x["a"]},setup:function(){var e=Object(c["n"])("currencyType"),n=Object(c["n"])("maticPrice");return{currencyType:e,maticPrice:n}},methods:{Test:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.currencyType!==n){e.next=3;break}return e.abrupt("return");case 3:return this.currencyType=n,localStorage.setItem("currencyType",n),e.next=7,E.a.get("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=".concat(n));case 7:t=e.sent,this.maticPrice=t.data["matic-network"][n],e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](0),this.maticPrice=null,this.currencyType="usd",localStorage.setItem("currencyType","usd");case 16:case"end":return e.stop()}}),e,this,[[0,11]])})));function n(n){return e.apply(this,arguments)}return n}()},computed:{CurrencyType:function(){switch(this.currencyType){case"usd":return"United States Dollar";case"gbp":return"British Pound Sterling";case"cad":return"Canadian Dollar";case"jpy":return"Japanese Yen";case"eur":return"European Dollar";case"cny":return"Chinese Yuan";default:return"N/A"}}}});t("3ed5");F.render=O,F.__scopeId="data-v-10d8a0f5";var U=F,_=[{path:"/",name:"Home",component:f},{path:"/trade",name:"Trade",component:m},{path:"/liquidity",name:"Liquidity",component:m},{path:"/headstails",name:"HeadsTails",component:function(){return t.e("chunk-3d307545").then(t.bind(null,"eb98"))}},{path:"/dice",name:"Dice",component:function(){return t.e("chunk-64771d2b").then(t.bind(null,"c5e5"))}},{path:"/roulette",name:"Roulette",component:m},{path:"/settings",name:"Settings",component:U},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-2d0b9d35").then(t.bind(null,"3530"))}}],I=Object(u["a"])({history:Object(u["b"])(),routes:_}),M=I,V=t("5502"),D=Object(V["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(r["a"]).use(D).use(M).mount("#app")}});