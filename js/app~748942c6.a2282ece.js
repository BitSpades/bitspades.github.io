(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~748942c6"],{0:function(e,t){},1:function(e,t,c){e.exports=c("cd49")},"2cbd":function(e,t,c){"use strict";c("cffb")},"3dfd":function(e,t,c){"use strict";var n=c("f2bf"),a={class:"main"},r={class:"router-view"};function i(e,t,c,i,o,s){var u=Object(n["C"])("TopBar"),l=Object(n["C"])("SideNav"),b=Object(n["C"])("router-view");return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(u),Object(n["h"])("div",a,[Object(n["k"])(l),Object(n["h"])("div",r,[Object(n["k"])(b,null,{default:Object(n["K"])((function(e){var t=e.Component;return[(Object(n["u"])(),Object(n["e"])(n["b"],null,[(Object(n["u"])(),Object(n["e"])(Object(n["D"])(t)))],1024))]})),_:1})])])],64)}var o=c("3835"),s=c("1da1"),u=(c("96cf"),c("d3b7"),c("25f0"),c("a9e3"),c("c030")),l=c("6779"),b=c("901e"),O=c.n(b),d=c("bc3a"),w=c.n(d),h=c("7260"),j=c("854f"),f=c("330b"),p=c("315c"),m=c("f168"),g=c("e440"),v=c("5b53"),k=c("ab45"),B=c("9267"),C=c("2847");O.a.config({ROUNDING_MODE:O.a.ROUND_DOWN,EXPONENTIAL_AT:99});var M=1e4,x=700,A=Object(n["l"])({components:{TopBar:j["a"],SideNav:f["a"]},setup:function(){function e(e,t){return localStorage.getItem(e)?localStorage.getItem(e):(localStorage.setItem(e,t),t)}h["a"][0].chainId="0x".concat(Number(h["a"][0].chainId).toString(16));var t=new u["a"].providers.JsonRpcProvider(h["a"][0].rpcUrls[0]),c=Object(n["z"])({}),a=Object(n["z"])({}),r=Object(n["z"])(""),i=Object(n["z"])(""),o=Object(n["z"])(""),s=Object(n["z"])(""),b=Object(n["z"])(""),O=Object(n["z"])(""),d=Object(n["z"])(""),w=Object(n["z"])(null),j=Object(n["z"])(e("currencyType","usd")),f=Object(n["z"])(e("coinSvg","matic")),p=Object(n["z"])(!1),m=new u["a"].Contract(C["e"],k,t),M=new u["a"].Contract(C["a"],g,t),x=new u["a"].Contract(C["b"],v,t),A=new u["a"].Contract(C["f"],B,t),y=new l["utils"].Interface(B),I=new l["utils"].Interface(v),z=new l["utils"].Interface(k);return Object(n["w"])("providerCore",t),Object(n["w"])("providerUser",c),Object(n["w"])("signer",a),Object(n["w"])("walletAddress",r),Object(n["w"])("walletBalance",i),Object(n["w"])("ownerchipBalance",o),Object(n["w"])("gameBalanceMatic",s),Object(n["w"])("gameBalanceLink",b),Object(n["w"])("gameMinimumBet",O),Object(n["w"])("gameMaxWinAmount",d),Object(n["w"])("maticPrice",w),Object(n["w"])("currencyType",j),Object(n["w"])("coinSvg",f),Object(n["w"])("navMenuOpen",p),Object(n["w"])("contractLink",m),Object(n["w"])("contractCasino",M),Object(n["w"])("contractGameDice",x),Object(n["w"])("contractMulticall",A),Object(n["w"])("interfaceMulticall",y),Object(n["w"])("interfaceGame",I),Object(n["w"])("interfaceErc20",z),{providerCore:t,providerUser:c,signer:a,walletAddress:r,walletBalance:i,ownerchipBalance:o,gameBalanceMatic:s,gameBalanceLink:b,gameMinimumBet:O,gameMaxWinAmount:d,contractLink:m,contractCasino:M,contractGameDice:x,maticPrice:w,currencyType:j,interfaceMulticall:y,interfaceGame:I,interfaceErc20:z,coinSvg:f,navMenuOpen:p}},data:function(){return{checkBlockChainLock:!1,scrollPosition:0}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.innerWidth>=x?this.navMenuOpen=!0:this.navMenuOpen=!1,e.prev=1,e.next=4,w.a.get("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=".concat(this.currencyType));case 4:t=e.sent,this.maticPrice=t.data["matic-network"][this.currencyType],e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.maticPrice=null;case 11:return e.next=13,this.CheckBlockChain();case 13:setInterval(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.CheckBlockChain();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),M);case 14:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{CheckBlockChain:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,c,n,a,r,i,s,u,l,b,O,d,w,h,j;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.checkBlockChainLock){e.next=17;break}return t=[{target:C["h"],func:"balanceOf",data:[C["a"]]},{target:C["e"],func:"balanceOf",data:[C["a"]]},{target:C["a"],func:"GetMinBetAmount",data:[]},{target:C["a"],func:"GetMaxWinAmount",data:[]}],this.WalletConnected()&&(t.push({target:C["h"],func:"balanceOf",data:[this.walletAddress]}),t.push({target:C["g"],func:"balanceOf",data:[this.walletAddress]})),e.next=5,Object(m["a"])(this.providerCore,t);case 5:c=e.sent,n=Object(o["a"])(c[0],1),a=n[0],r=Object(o["a"])(c[1],1),i=r[0],s=Object(o["a"])(c[2],1),u=s[0],l=Object(o["a"])(c[3],1),b=l[0],this.gameBalanceMatic=Object(p["a"])(a),this.gameBalanceLink=Object(p["a"])(i),this.gameMinimumBet=Object(p["a"])(u),this.gameMaxWinAmount=Object(p["a"])(b),O=6,c.length===O&&(d=Object(o["a"])(c[4],1),w=d[0],this.walletBalance=Object(p["a"])(w,2),h=Object(o["a"])(c[5],1),j=h[0],this.ownerchipBalance=Object(p["a"])(j,18)),this.checkBlockChainLock=!1;case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),PlayerAccount:function(){alert("TODO Later")},WalletConnected:function(){return!(!localStorage.getItem("connected")||""===this.walletAddress)},GetAddress:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.signer.getAddress();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),Disconnect:function(){this.walletAddress="",this.walletBalance="",localStorage.removeItem("connected")},updateScroll:function(){this.scrollPosition=window.scrollY}}}),y=(c("2cbd"),c("c2e6"),c("6b0d")),I=c.n(y);const z=I()(A,[["render",i],["__scopeId","data-v-36d2506c"]]);t["a"]=z},"925c":function(e,t,c){},c2e6:function(e,t,c){"use strict";c("925c")},cffb:function(e,t,c){}}]);