(function(e){function n(n){for(var r,l,a=n[0],c=n[1],i=n[2],f=0,p=[];f<a.length;f++)l=a[f],o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(n);while(p.length)p.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={app:0},u=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/";var a=this["webpackJsonp"]=this["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var i=0;i<a.length;i++)n(a[i]);var s=c;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("c21b"),o=t.n(r);o.a},"327a":function(e,n,t){"use strict";var r=t("541f"),o=t.n(r);o.a},"541f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),t("button",{on:{click:e.handleClick}},[e._v("Send message")])])},a=[],c=t("ebb0"),i=t.n(c),s=t("e8c3"),f=t.n(s),p=new f.a,d=new i.a(p),v=function(e){return d.postMessage({type:"message",message:e})},b={send:v},g={name:"HelloWorld",props:{msg:String},methods:{handleClick:function(){b.send("Hello worker!").then(function(e){return alert(e)})}}},h=g,m=(t("327a"),t("2877")),_=Object(m["a"])(h,l,a,!1,null,"15fa8744",null);_.options.__file="HelloWorld.vue";var y=_.exports,j={name:"app",components:{HelloWorld:y}},w=j,O=(t("034f"),Object(m["a"])(w,o,u,!1,null,null,null));O.options.__file="App.vue";var x=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")},c21b:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},e8c3:function(e,n,t){e.exports=function(){return new Worker(t.p+"9aa3a77f35304b33446c.worker.js")}}});
//# sourceMappingURL=app.357172b3.js.map