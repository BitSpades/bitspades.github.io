(function(e){function n(n){for(var r,c,a=n[0],l=n[1],i=n[2],s=0,d=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);b&&b(n);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},c={"app~5a11b65b":0},o={"app~5a11b65b":0},u=[];function a(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"f98d672b","chunk-39ea35e2":"6f3ea4d7","chunk-3d307545":"371c1f94"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-39ea35e2":1,"chunk-3d307545":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"31d6cfe0","chunk-39ea35e2":"1bd08fe0","chunk-3d307545":"3ebed084"}[e]+".css",o=l.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){i=d[a],s=i.getAttribute("data-href");if(s===r||s===o)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],b.parentNode.removeChild(b),t(u)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(e);var d=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(b);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var b=s;u.push([1,"chunk-vendors~0f485567","chunk-vendors~3622465b","chunk-vendors~4add52da","chunk-vendors~5cbdb1e7","chunk-vendors~602a6e35","chunk-vendors~d6b3b356","chunk-vendors~c35b422a","chunk-vendors~ffba60f8","chunk-vendors~8d570bf5","chunk-vendors~4cd998c9","chunk-vendors~0c1c1b47","chunk-vendors~06d709ee","chunk-vendors~a003b814","chunk-vendors~6b4a2b08","chunk-vendors~0a1e6715","chunk-vendors~5ea1a303","chunk-vendors~917cf6f0","chunk-vendors~e4173fa2","chunk-vendors~4ad5f52a","chunk-vendors~62ab5815","chunk-vendors~d939e436","chunk-vendors~93acefaf","chunk-vendors~1f20a385","chunk-vendors~70aabc29","chunk-vendors~fdc6512a","chunk-vendors~aacd4aef","app~748942c6"]),t()})({7260:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r,c="80001";r="137"===c?[{chainName:"Polygon Mainnet",chainId:"137",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mainnet.maticvigil.com/"],blockExplorerUrls:["https://polygonscan.com/"]}]:[{chainName:"Polygon Testnet",chainId:"80001",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com/"],blockExplorerUrls:["https://mumbai.polygonscan.com/"]}];var o=r},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=t("3dfd"),o=t("9483");Object(o["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered")},cached:function(){console.log("Content has been cached for offline use")},updatefound:function(){console.log("New content is downloading")},updated:function(){console.log("New content is available; please refresh")},offline:function(){console.log("No internet connection found. App is running in offline mode")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7"),t("3ca3"),t("ddb0");var u=t("6c02"),a={class:"home"},l=Object(r["g"])("h1",null,"The homepage is currently under construction",-1),i=[l];function s(e,n,t,c,o,u){return Object(r["u"])(),Object(r["f"])("div",a,i)}var d=Object(r["k"])({});d.render=s;var b=d,h=(t("b0c0"),{class:"wip"}),p=Object(r["g"])("h1",null,"This page is under construction",-1);function f(e,n,t,c,o,u){return Object(r["u"])(),Object(r["f"])("div",h,[p,Object(r["g"])("h2",null,"Page: "+Object(r["E"])(e.$route.name),1)])}var g=Object(r["k"])({});g.render=f;var m=g,v={class:"settings"},j=Object(r["g"])("br",null,null,-1),O=Object(r["i"])("United States Dollar"),k=Object(r["g"])("br",null,null,-1),y=Object(r["g"])("br",null,null,-1),T=Object(r["g"])("br",null,null,-1),w=Object(r["i"])("Canadian Dollar "),C=Object(r["g"])("br",null,null,-1),P=Object(r["g"])("br",null,null,-1),E=Object(r["g"])("br",null,null,-1),A=Object(r["i"])("European Dollar "),S=Object(r["g"])("br",null,null,-1),x=Object(r["g"])("br",null,null,-1),N=Object(r["g"])("br",null,null,-1),_=Object(r["i"])("Great British Pound "),I=Object(r["g"])("br",null,null,-1),M=Object(r["g"])("br",null,null,-1),D=Object(r["g"])("br",null,null,-1),U=Object(r["i"])("Japanese Yen "),B=Object(r["g"])("br",null,null,-1),L=Object(r["g"])("br",null,null,-1),q=Object(r["g"])("br",null,null,-1),J=Object(r["i"])("Chinese Yuan "),R=Object(r["g"])("br",null,null,-1),Y=Object(r["g"])("br",null,null,-1);function F(e,n,t,c,o,u){return Object(r["u"])(),Object(r["f"])("div",v,[Object(r["g"])("h2",null,"Current Currency: "+Object(r["E"])(e.currencyType),1),Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:n[0]||(n[0]=function(n){return e.Test("usd")})},"USD"),j,O,k,y,Object(r["g"])("button",{onClick:n[1]||(n[1]=function(n){return e.Test("cad")})},"CAD"),T,w,C,P,Object(r["g"])("button",{onClick:n[2]||(n[2]=function(n){return e.Test("eur")})},"EUR"),E,A,S,x,Object(r["g"])("button",{onClick:n[3]||(n[3]=function(n){return e.Test("gbp")})},"GBP"),N,_,I,M,Object(r["g"])("button",{onClick:n[4]||(n[4]=function(n){return e.Test("jpy")})},"JPY"),D,U,B,L,Object(r["g"])("button",{onClick:n[5]||(n[5]=function(n){return e.Test("cny")})},"CNY"),q,J,R,Y])])}var H=t("1da1"),G=(t("96cf"),t("bc3a")),K=t.n(G),$=Object(r["k"])({setup:function(){var e=Object(r["n"])("currencyType"),n=Object(r["n"])("maticPrice");return{currencyType:e,maticPrice:n}},methods:{Test:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=".concat(n));case 3:t=e.sent,this.maticPrice=t.data["matic-network"][n],this.currencyType=n,localStorage.setItem("currencyType",n),e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](0),this.maticPrice=null,this.currencyType="usd",localStorage.setItem("currencyType","usd");case 14:case"end":return e.stop()}}),e,this,[[0,9]])})));function n(n){return e.apply(this,arguments)}return n}()}});$.render=F;var z=$,Q=[{path:"/",name:"Home",component:b},{path:"/trade",name:"Trade",component:m},{path:"/liquidity",name:"Liquidity",component:m},{path:"/headstails",name:"HeadsTails",component:function(){return t.e("chunk-3d307545").then(t.bind(null,"eb98"))}},{path:"/dice",name:"Dice",component:function(){return t.e("chunk-39ea35e2").then(t.bind(null,"c5e5"))}},{path:"/roulette",name:"Roulette",component:m},{path:"/settings",name:"Settings",component:z},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-2d0b9d35").then(t.bind(null,"3530"))}}],V=Object(u["a"])({history:Object(u["b"])(),routes:Q}),W=V,X=t("5502"),Z=Object(X["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(c["a"]).use(Z).use(W).mount("#app")}});