(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aea9369"],{5353:function(e,t,n){"use strict";n("c8cf")},c8cf:function(e,t,n){},eb98:function(e,t,n){"use strict";n.r(t);var r=n("f2bf"),a=function(e){return Object(r["x"])("data-v-61924413"),e=e(),Object(r["v"])(),e},c={class:"game-play"},i={class:"slide-container"},o=["min","max"],u=a((function(){return Object(r["h"])("div",{style:{margin:"8px 0"}},null,-1)})),s={class:"coins"},l={class:"svg-container"},b=a((function(){return Object(r["h"])("div",{style:{margin:"8px 0"}},null,-1)})),m=a((function(){return Object(r["h"])("div",null,"Win Chance: 50%",-1)})),d=a((function(){return Object(r["h"])("div",{style:{margin:"8px 0"}},null,-1)})),h=Object(r["j"])("Make Bet");function O(e,t,n,a,O,v){var f=Object(r["C"])("MatButton"),j=Object(r["C"])("GameHistory");return Object(r["u"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",c,[Object(r["h"])("div",i,[Object(r["L"])(Object(r["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.betAmount=t}),class:"slider",type:"range",step:"0.01",min:e.gameMinimumBet,max:e.gameMaxWinAmount/.98-.01},null,8,o),[[r["I"],e.betAmount]])]),Object(r["L"])(Object(r["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.betAmount=t}),style:{color:"black"},placeholder:"Enter bet amount",onInput:t[2]||(t[2]=function(t){return e.BetAmountUpdated()})},null,544),[[r["I"],e.betAmount]]),u,Object(r["h"])("div",s,[Object(r["h"])("div",{class:Object(r["q"])(["coin-heads",["0"===e.gameChoice?"selected":"",e.hoverHeads?"hover":""]])},null,2),Object(r["h"])("div",{class:Object(r["q"])(["coin-tails",["1"===e.gameChoice?"selected":"",e.hoverTails?"hover":""]])},null,2),Object(r["h"])("div",l,[(Object(r["u"])(),Object(r["g"])("svg",null,[Object(r["h"])("circle",{cx:"50",cy:"50",r:"50",onMouseover:t[3]||(t[3]=Object(r["M"])((function(t){return e.hoverHeads=!0}),["stop"])),onMouseleave:t[4]||(t[4]=Object(r["M"])((function(t){return e.hoverHeads=!1}),["stop"])),onClick:t[5]||(t[5]=function(t){return e.gameChoice="0"})},null,32),Object(r["h"])("circle",{cx:"162",cy:"50",r:"50",onMouseover:t[6]||(t[6]=Object(r["M"])((function(t){return e.hoverTails=!0}),["stop"])),onMouseleave:t[7]||(t[7]=Object(r["M"])((function(t){return e.hoverTails=!1}),["stop"])),onClick:t[8]||(t[8]=function(t){return e.gameChoice="1"})},null,32)]))])]),b,m,Object(r["h"])("div",null,"Profit on win: "+Object(r["F"])(e.ProfitOnWin),1),d,Object(r["k"])(f,{h:"194",s:"95",l:"16",class:"btn",onClick:t[9]||(t[9]=function(t){return e.MakeBet()})},{default:Object(r["K"])((function(){return[h]})),_:1})]),Object(r["k"])(j,{game:"coins",contract:e.GAME_FLIP_ADDRESS},null,8,["contract"])],64)}var v=n("1da1"),f=(n("96cf"),n("d3b7"),n("25f0"),n("99af"),n("c030")),j=n("6779"),p=n("901e"),g=n.n(p),A=n("4ee3"),k=n("65a9"),M=n("2847");g.a.config({ROUNDING_MODE:g.a.ROUND_DOWN,EXPONENTIAL_AT:99});var x=.98,B=Object(r["l"])({components:{MatButton:A["a"],GameHistory:k["a"]},setup:function(){var e=Object(r["o"])("providerUser"),t=Object(r["o"])("signer"),n=Object(r["o"])("walletAddress"),a=Object(r["o"])("walletBalance"),c=Object(r["o"])("gameBalanceMatic"),i=Object(r["o"])("gameBalanceLink"),o=Object(r["o"])("gameMinimumBet"),u=Object(r["o"])("gameMaxWinAmount");return{providerUser:e,signer:t,walletAddress:n,walletBalance:a,gameBalanceMatic:c,gameBalanceLink:i,gameMinimumBet:o,gameMaxWinAmount:u,GAME_FLIP_ADDRESS:M["c"]}},data:function(){return{betAmount:"0.1",gameChoice:"",hoverHeads:!1,hoverTails:!1,checkBlockChainLock:!1}},computed:{ProfitOnWin:function(){if(isNaN(this.betAmount))return"---";if(!this.betAmount)return"---";var e=new g.a(this.betAmount).multipliedBy(x).toString();return e}},methods:{BetAmountUpdated:function(){var e,t,n,r=null===(e=this.betAmount)||void 0===e?void 0:e.indexOf(".");-1!==r&&((null===(t=this.betAmount)||void 0===t?void 0:t.length)>r+3&&(this.betAmount=null===(n=this.betAmount)||void 0===n?void 0:n.substr(0,r+3)))},MakeBet:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,c,i,o,u,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.betAmount){e.next=2;break}return e.abrupt("return");case 2:if(this.providerUser){e.next=4;break}return e.abrupt("return");case 4:if(!isNaN(this.betAmount)){e.next=6;break}return e.abrupt("return");case 6:if(t=new g.a(this.betAmount),n=new g.a(this.gameMinimumBet),r=new g.a(this.gameMaxWinAmount),!t.lt(n)){e.next=14;break}return alert("Bet too small"),e.abrupt("return");case 14:if(!t.multipliedBy(x).gt(r)){e.next=17;break}return alert("Potential win amount is too large"),e.abrupt("return");case 17:a=t.toString(),c=f["a"].utils.parseUnits(a,"ether").toHexString(),i="0x601886c0",o=j["utils"].hexZeroPad(M["c"],32).substring(2),e.t0=this.gameChoice,e.next="0"===e.t0?24:"1"===e.t0?26:28;break;case 24:return u="0000000000000000000000000000000000000000000000000000000000000000",e.abrupt("break",30);case 26:return u="0000000000000000000000000000000000000000000000000000000000000001",e.abrupt("break",30);case 28:return alert("You must select heads or tails"),e.abrupt("return");case 30:return s="".concat(i).concat(o).concat(u),l=[{from:this.walletAddress,to:M["a"],value:c,data:s}],e.next=34,this.providerUser.send("eth_sendTransaction",l);case 34:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),w=(n("5353"),n("6b0d")),y=n.n(w);const C=y()(B,[["render",O],["__scopeId","data-v-61924413"]]);t["default"]=C}}]);