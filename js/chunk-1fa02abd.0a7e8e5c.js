(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fa02abd"],{"04d2":function(e,t,n){},9470:function(e,t,n){"use strict";n("04d2")},b64b:function(e,t,n){var i=n("23e7"),c=n("7b0b"),r=n("df75"),a=n("d039"),s=a((function(){r(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(e){return r(c(e))}})},c5e5:function(e,t,n){"use strict";n.r(t);var i=n("f2bf");Object(i["x"])("data-v-7c820576");var c={class:"game"},r={class:"slide-container"},a=["min","max"],s=Object(i["g"])("div",{style:{margin:"8px 0"}},null,-1),o={class:"playing-table"},l={class:"felt-background"},u={class:"dice"},d=Object(i["i"])("Randomize"),f=Object(i["g"])("div",{style:{margin:"8px 0"}},null,-1),b=Object(i["g"])("div",{style:{margin:"8px 0"}},null,-1),h=Object(i["i"])("Make Bet");function m(e,t,n,m,g,O){var j=Object(i["C"])("Dice1"),k=Object(i["C"])("Dice2"),v=Object(i["C"])("Dice3"),w=Object(i["C"])("Dice4"),p=Object(i["C"])("Dice5"),x=Object(i["C"])("Dice6"),y=Object(i["C"])("MatButton"),A=Object(i["C"])("GameHistory2");return Object(i["u"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("div",c,[Object(i["g"])("div",r,[Object(i["g"])("label",null,[Object(i["L"])(Object(i["g"])("input",{class:"slider",type:"range",step:"0.01",min:e.gameMinimumBet,max:e.gameMaxWinAmount/.98-.01,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.betAmount=t})},null,8,a),[[i["I"],e.betAmount]])])]),Object(i["L"])(Object(i["g"])("input",{style:{color:"black"},"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.betAmount=t}),placeholder:"Enter bet amount",onInput:t[2]||(t[2]=function(t){return e.BetAmountUpdated()})},null,544),[[i["I"],e.betAmount]]),s,Object(i["g"])("div",o,[Object(i["g"])("div",l,[Object(i["g"])("div",u,[Object(i["j"])(j,{class:Object(i["p"])(1 in e.diceSides?"active":""),onClick:t[3]||(t[3]=function(t){return e.ToggleDice(1)})},null,8,["class"]),Object(i["j"])(k,{class:Object(i["p"])(2 in e.diceSides?"active":""),onClick:t[4]||(t[4]=function(t){return e.ToggleDice(2)})},null,8,["class"]),Object(i["j"])(v,{class:Object(i["p"])(3 in e.diceSides?"active":""),onClick:t[5]||(t[5]=function(t){return e.ToggleDice(3)})},null,8,["class"]),Object(i["j"])(w,{class:Object(i["p"])(4 in e.diceSides?"active":""),onClick:t[6]||(t[6]=function(t){return e.ToggleDice(4)})},null,8,["class"]),Object(i["j"])(p,{class:Object(i["p"])(5 in e.diceSides?"active":""),onClick:t[7]||(t[7]=function(t){return e.ToggleDice(5)})},null,8,["class"]),Object(i["j"])(x,{class:Object(i["p"])(6 in e.diceSides?"active":""),onClick:t[8]||(t[8]=function(t){return e.ToggleDice(6)})},null,8,["class"])]),Object(i["j"])(y,{h:"194",s:"95",l:"16",class:"btn",onClick:t[9]||(t[9]=function(t){return e.Randomize()})},{default:Object(i["K"])((function(){return[d]})),_:1})])]),f,Object(i["g"])("div",null,"Win Chance: "+Object(i["F"])(e.CalculateWinChance),1),Object(i["g"])("div",null,"Profit on win: "+Object(i["F"])(e.ProfitOnWin),1),Object(i["g"])("div",null,"Profit on win: "+Object(i["F"])(e.ProfitOnWinOld),1),b,Object(i["j"])(y,{h:"194",s:"95",l:"16",class:"btn",onClick:t[10]||(t[10]=function(t){return e.MakeBet()})},{default:Object(i["K"])((function(){return[h]})),_:1})]),Object(i["j"])(A)],64)}Object(i["v"])();var g=n("1da1"),O=(n("96cf"),n("b64b"),n("d3b7"),n("25f0"),n("99af"),n("c030")),j=n("6779"),k=n("901e"),v=n.n(k),w=n("2847"),p=n("4ee3");Object(i["x"])("data-v-1cdfc10e");var x={class:"game-history"},y={class:"test-table"},A=Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Guess"),Object(i["g"])("th",null,"Result"),Object(i["g"])("th",null,"Bet Amount"),Object(i["g"])("th",null,"Winnings")],-1),B=Object(i["i"])("Pending");function D(e,t,n,c,r,a){return Object(i["u"])(),Object(i["f"])("div",x,[Object(i["g"])("table",y,[A,(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(e.gameHistory,(function(t){return Object(i["u"])(),Object(i["f"])("tr",{key:t,class:Object(i["p"])(t.resolved?t.guess&t.randomnessResult?"win":"lose":"pending")},[Object(i["g"])("td",null,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(e.ParseNumToDice(t.guess),(function(e){return Object(i["u"])(),Object(i["d"])(Object(i["D"])(e),{key:e,markRaw:""})})),128))]),Object(i["g"])("td",null,[t.resolved?(Object(i["u"])(),Object(i["d"])(Object(i["D"])(e.ParseNumToDiceResolved(t.randomnessResult)),{key:0,markRaw:""})):(Object(i["u"])(),Object(i["f"])(i["a"],{key:1},[B],64))]),Object(i["g"])("td",null,Object(i["F"])(t.betAmount),1),Object(i["g"])("td",null,Object(i["F"])(t.resolved?t.winAmount:"Pending"),1)],2)})),128))])])}Object(i["v"])();var C=n("3835"),M=n("315c"),S=n("f168"),P=Object(i["k"])({template:'\n  <svg width="18.52mm" height="18.52mm" version="1.1" viewBox="0 0 18.52 18.52">\n    <g transform="translate(118.3 -38.25)">\n      <rect x="-118.3" y="38.25" width="18.52" height="18.52" ry="3.505" stroke-width=".2666"/>\n      <circle cx="-109" cy="47.51" r="1.976" fill="#fff" stroke-width=".3188"/>\n    </g>\n  </svg>\n  '}),R=Object(i["k"])({template:'\n  <svg width="18.52mm" height="18.52mm" version="1.1" viewBox="0 0 18.52 18.52">\n    <g transform="translate(93.07 -41.32)">\n      <rect x="-93.07" y="41.32" width="18.52" height="18.52" ry="3.505" stroke-width=".2666"/>\n      <circle cx="-79.17" cy="55.22" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-88.44" cy="45.94" r="1.976" fill="#fff" stroke-width=".3188"/>\n    </g>\n  </svg>\n  '}),N=Object(i["k"])({template:'\n  <svg width="18.52mm" height="18.52mm" version="1.1" viewBox="0 0 18.52 18.52">\n    <g transform="translate(114.5 -58.35)">\n      <rect x="-114.5" y="58.35" width="18.52" height="18.52" ry="3.505" stroke-width=".2666"/>\n      <circle cx="-105.2" cy="67.61" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-100.6" cy="72.25" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-109.8" cy="62.98" r="1.976" fill="#fff" stroke-width=".3188"/>\n    </g>\n  </svg>\n  '}),H=Object(i["k"])({template:'\n  <svg width="18.52mm" height="18.52mm" version="1.1" viewBox="0 0 18.52 18.52">\n    <g transform="translate(139.7 -56.45)">\n      <rect x="-139.7" y="56.45" width="18.52" height="18.52" ry="3.505" stroke-width=".2666"/>\n      <circle cx="-125.8" cy="70.35" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-135.1" cy="70.35" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-135.1" cy="61.07" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-125.8" cy="61.07" r="1.976" fill="#fff" stroke-width=".3188"/>\n    </g>\n  </svg>\n  '}),I=Object(i["k"])({template:'\n  <svg width="18.52mm" height="18.52mm" version="1.1" viewBox="0 0 18.52 18.52">\n    <g transform="translate(142.9 -80.47)">\n      <rect x="-142.9" y="80.47" width="18.52" height="18.52" ry="3.505" stroke-width=".2666"/>\n      <circle cx="-133.7" cy="89.74" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-129" cy="94.37" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-138.3" cy="94.37" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-138.3" cy="85.1" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-129" cy="85.1" r="1.976" fill="#fff" stroke-width=".3188"/>\n    </g>\n  </svg>\n  '}),T=Object(i["k"])({template:'\n  <svg width="18.52mm" height="18.52mm" version="1.1" viewBox="0 0 18.52 18.52">\n    <g transform="translate(139.5 -100.6)">\n      <rect x="-139.5" y="100.6" width="18.52" height="18.52" ry="3.505" stroke-width=".2666"/>\n      <circle cx="-134.9" cy="109.8" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-125.6" cy="109.8" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-125.6" cy="114.5" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-134.9" cy="114.5" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-134.9" cy="105.2" r="1.976" fill="#fff" stroke-width=".3188"/>\n      <circle cx="-125.6" cy="105.2" r="1.976" fill="#fff" stroke-width=".3188"/>\n    </g>\n  </svg>\n  '}),U=Object(i["k"])({components:{Dice1:P,Dice2:R,Dice3:N,Dice4:H,Dice5:I,Dice6:T},setup:function(){var e=Object(i["n"])("providerUser"),t=Object(i["n"])("walletAddress"),n=Object(i["n"])("contractGameDice");return{providerUser:e,walletAddress:t,contractGame:n}},data:function(){return{gameHistory:[],gameHistoryIds:{},checkBlockChainLock:!1,gamesPlayedPrevious:0}},methods:{ParseNumToDice:function(e){for(var t=[],n=1;n<=6;n++)e&Math.pow(2,n-1)&&t.push("Dice".concat(n));return t},ParseNumToDiceResolved:function(e){for(var t=1;t<=6;t++)if(e&Math.pow(2,t-1))return"Dice".concat(t)},CheckBlockChain:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,i,c,r,a,s,o,l,u,d,f,b,h,m,g,O,j,k,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.checkBlockChainLock){e.next=43;break}if(this.checkBlockChainLock=!0,!this.walletAddress){e.next=42;break}return e.next=5,this.contractGame.GetPlayerGamesCount(this.walletAddress);case 5:if(t=e.sent,t!==this.gamesPlayedPrevious){e.next=11;break}return this.checkBlockChainLock=!1,e.abrupt("return");case 11:this.gamesPlayedPrevious=t;case 12:for(n=[],i=t-1;i>=0;i--)i in this.gameHistoryIds&&0!==this.gameHistoryIds[i]||n.push({target:w["b"],func:"playerBets",data:[this.walletAddress,i]});return e.next=16,Object(S["a"])(this.providerUser,n);case 16:c=e.sent,r=0;case 18:if(!(r<c.length)){e.next=42;break}if(a=Object(C["a"])(c[r],8),s=a[0],o=a[1],l=a[2],u=a[4],d=a[5],f=a[6],b=a[7],h=s.toString(),m=o.toNumber(),g=l.toNumber(),O=u.toNumber(),j=Object(M["a"])(new v.a(d)),k=Object(M["a"])(new v.a(f)),!(m in this.gameHistoryIds)){e.next=37;break}p=0;case 28:if(!(p<this.gameHistory.length)){e.next=35;break}if(this.gameHistory[p].id!==h){e.next=32;break}return this.gameHistory[p]={id:h,index:m,guess:g,randomnessResult:O,betAmount:j,winAmount:k,resolved:b},e.abrupt("break",35);case 32:p++,e.next=28;break;case 35:e.next=38;break;case 37:b?this.gameHistory.push({id:h,index:m,guess:g,randomnessResult:O,betAmount:j,winAmount:k,resolved:b}):this.gameHistory.unshift({id:h,index:m,guess:g,randomnessResult:O,betAmount:j,winAmount:k,resolved:b});case 38:this.gameHistoryIds[m]=b?1:0;case 39:r++,e.next=18;break;case 42:this.checkBlockChainLock=!1;case 43:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{walletAddress:function(e,t){var n,i=this;this.checkBlockChainLock=!1,e?(this.CheckBlockChain(),n=setInterval(Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",i.CheckBlockChain());case 1:case"end":return e.stop()}}),e)}))),1e4)):clearInterval(n)}}});n("9470");U.render=D,U.__scopeId="data-v-1cdfc10e";var W=U;v.a.config({ROUNDING_MODE:v.a.ROUND_DOWN,EXPONENTIAL_AT:99});var L=Object(i["k"])({components:{MatButton:p["a"],GameHistory2:W,Dice1:P,Dice2:R,Dice3:N,Dice4:H,Dice5:I,Dice6:T},setup:function(){var e=Object(i["n"])("providerUser"),t=Object(i["n"])("signer"),n=Object(i["n"])("walletAddress"),c=Object(i["n"])("walletBalance"),r=Object(i["n"])("gameBalanceMatic"),a=Object(i["n"])("gameBalanceLink"),s=Object(i["n"])("gameMinimumBet"),o=Object(i["n"])("gameMaxWinAmount");return{providerUser:e,signer:t,walletAddress:n,walletBalance:c,gameBalanceMatic:r,gameBalanceLink:a,gameMinimumBet:s,gameMaxWinAmount:o}},data:function(){return{betAmount:"0.1",diceSides:{}}},created:function(){this.Randomize()},methods:{ToggleDice:function(e){e in this.diceSides?delete this.diceSides[e]:this.diceSides[e]=!0},Randomize:function(){var e=Math.floor(2*Math.random()),t=Math.floor(2*Math.random()),n=Math.floor(2*Math.random()),i=Math.floor(2*Math.random()),c=Math.floor(2*Math.random()),r=Math.floor(2*Math.random()),a=e+t+n+i+c+r;if(0===a||6===a){var s=Math.floor(6*Math.random());switch(s){case 0:e=e?0:1;break;case 1:t=t?0:1;break;case 2:n=n?0:1;break;case 3:i=i?0:1;break;case 4:c=c?0:1;break;case 5:r=r?0:1;break;default:break}}this.diceSides={},e&&(this.diceSides[1]=!0),t&&(this.diceSides[2]=!0),n&&(this.diceSides[3]=!0),i&&(this.diceSides[4]=!0),c&&(this.diceSides[5]=!0),r&&(this.diceSides[6]=!0)},BetAmountUpdated:function(){var e,t,n,i=null===(e=this.betAmount)||void 0===e?void 0:e.indexOf(".");-1!==i&&((null===(t=this.betAmount)||void 0===t?void 0:t.length)>i+3&&(this.betAmount=null===(n=this.betAmount)||void 0===n?void 0:n.substr(0,i+3)))},MakeBet:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,i,c,r,a,s,o,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.providerUser){e.next=2;break}return e.abrupt("return");case 2:if(!isNaN(this.betAmount)){e.next=4;break}return e.abrupt("return");case 4:if(this.betAmount){e.next=6;break}return e.abrupt("return");case 6:if(0!==Object.keys(this.diceSides).length){e.next=8;break}return e.abrupt("return");case 8:if(!(Object.keys(this.diceSides).length>=6)){e.next=10;break}return e.abrupt("return");case 10:if(t=new v.a(this.betAmount),n=new v.a(this.gameMinimumBet),i=new v.a(this.gameMaxWinAmount),!t.lt(n)){e.next=18;break}return alert("Bet too small"),e.abrupt("return");case 18:if(!t.multipliedBy(.98).gt(i)){e.next=21;break}return alert("Potential win amount is too large"),e.abrupt("return");case 21:for(o in c=t.toString(),r=O["a"].utils.parseUnits(c,"ether").toHexString(),a="0xf64d796e",s=0,this.diceSides)s|=Math.pow(2,parseInt(o)-1);return s=j["utils"].hexZeroPad("0x".concat(s.toString(16)),32).substring(2),l="".concat(a).concat(s),u=[{from:this.walletAddress,to:w["b"],value:r,data:l}],e.next=31,this.providerUser.send("eth_sendTransaction",u);case 31:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{CalculateWinChance:function(){var e=Object.keys(this.diceSides).length;if(0===e||6===e)return"---";switch(e){case 1:return"16.6%";case 2:return"33%";case 3:return"50%";case 4:return"67%";case 5:return"83%";default:return"---"}},ProfitOnWin:function(){if(isNaN(this.betAmount))return"---";if(!this.betAmount)return"---";var e,t=Object.keys(this.diceSides).length;if(0===t||6===t)return"---";switch(t){case 1:e=.166667;break;case 2:e=.333333;break;case 3:e=.5;break;case 4:e=.666667;break;case 5:e=.833333;break;default:return"---"}var n=new v.a(this.betAmount),i=new v.a(e),c=new v.a(.01),r=n.multipliedBy(c),a=n.minus(r),s=a.dividedBy(i),o=s.minus(n);return o.toString()},ProfitOnWinOld:function(){if(isNaN(this.betAmount))return"---";if(!this.betAmount)return"---";var e=new v.a(this.betAmount).multipliedBy(.98).toString();return e}}});n("ff45");L.render=m,L.__scopeId="data-v-7c820576";t["default"]=L},d2cd:function(e,t,n){},ff45:function(e,t,n){"use strict";n("d2cd")}}]);