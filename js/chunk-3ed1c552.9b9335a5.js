(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ed1c552"],{c5e5:function(e,t,n){"use strict";n.r(t);var i=n("f2bf"),c=function(e){return Object(i["x"])("data-v-7c1a6462"),e=e(),Object(i["v"])(),e},a={class:"game-play"},r={class:"slide-container"},s=["min","max"],u=c((function(){return Object(i["h"])("div",{style:{margin:"8px 0"}},null,-1)})),o={class:"playing-table"},l={class:"felt-background"},d={class:"dice"},b=Object(i["j"])("Randomize"),h=c((function(){return Object(i["h"])("div",{style:{margin:"8px 0"}},null,-1)})),m=c((function(){return Object(i["h"])("div",{style:{margin:"8px 0"}},null,-1)})),f=Object(i["j"])("Make Bet");function O(e,t,n,c,O,j){var g=Object(i["C"])("Dice1"),v=Object(i["C"])("Dice2"),k=Object(i["C"])("Dice3"),p=Object(i["C"])("Dice4"),A=Object(i["C"])("Dice5"),M=Object(i["C"])("Dice6"),S=Object(i["C"])("MatButton"),D=Object(i["C"])("GameHistory");return Object(i["u"])(),Object(i["g"])(i["a"],null,[Object(i["h"])("div",a,[Object(i["h"])("div",r,[Object(i["h"])("label",null,[Object(i["L"])(Object(i["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.betAmount=t}),class:"slider",type:"range",step:"0.01",min:e.gameMinimumBet,max:e.gameMaxWinAmount/.98-.01},null,8,s),[[i["I"],e.betAmount]])])]),Object(i["L"])(Object(i["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.betAmount=t}),style:{color:"black"},placeholder:"Enter bet amount",onInput:t[2]||(t[2]=function(t){return e.BetAmountUpdated()})},null,544),[[i["I"],e.betAmount]]),u,Object(i["h"])("div",o,[Object(i["h"])("div",l,[Object(i["h"])("div",d,[Object(i["k"])(g,{class:Object(i["q"])(1 in e.diceSides?"active":""),onClick:t[3]||(t[3]=function(t){return e.ToggleDice(1)})},null,8,["class"]),Object(i["k"])(v,{class:Object(i["q"])(2 in e.diceSides?"active":""),onClick:t[4]||(t[4]=function(t){return e.ToggleDice(2)})},null,8,["class"]),Object(i["k"])(k,{class:Object(i["q"])(3 in e.diceSides?"active":""),onClick:t[5]||(t[5]=function(t){return e.ToggleDice(3)})},null,8,["class"]),Object(i["k"])(p,{class:Object(i["q"])(4 in e.diceSides?"active":""),onClick:t[6]||(t[6]=function(t){return e.ToggleDice(4)})},null,8,["class"]),Object(i["k"])(A,{class:Object(i["q"])(5 in e.diceSides?"active":""),onClick:t[7]||(t[7]=function(t){return e.ToggleDice(5)})},null,8,["class"]),Object(i["k"])(M,{class:Object(i["q"])(6 in e.diceSides?"active":""),onClick:t[8]||(t[8]=function(t){return e.ToggleDice(6)})},null,8,["class"])]),Object(i["k"])(S,{h:"194",s:"95",l:"16",class:"btn",onClick:t[9]||(t[9]=function(t){return e.Randomize()})},{default:Object(i["K"])((function(){return[b]})),_:1})])]),h,Object(i["h"])("div",null,"Win Chance: "+Object(i["F"])(e.CalculateWinChance),1),Object(i["h"])("div",null,"Profit on win: "+Object(i["F"])(e.ProfitOnWin),1),Object(i["h"])("div",null,"Profit on win: "+Object(i["F"])(e.ProfitOnWinOld),1),m,Object(i["k"])(S,{h:"194",s:"95",l:"16",class:"btn",onClick:t[10]||(t[10]=function(t){return e.MakeBet()})},{default:Object(i["K"])((function(){return[f]})),_:1})]),Object(i["k"])(D,{game:"dice",contract:e.GAME_DICE_ADDRESS},null,8,["contract"])],64)}var j=n("1da1"),g=(n("96cf"),n("b64b"),n("d3b7"),n("25f0"),n("99af"),n("c030")),v=n("6779"),k=n("901e"),p=n.n(k),A=n("4ee3"),M=n("65a9"),S=n("2847"),D=n("505f");p.a.config({ROUNDING_MODE:p.a.ROUND_DOWN,EXPONENTIAL_AT:99});var w=1,x=2,C=3,B=4,y=5,N=6,W=0,_=1,U=2,E=3,P=4,R=5,T=.01,I=.98,q=Object(i["l"])({components:{MatButton:A["a"],GameHistory:M["a"],Dice1:D["a"],Dice2:D["b"],Dice3:D["c"],Dice4:D["d"],Dice5:D["e"],Dice6:D["f"]},setup:function(){var e=Object(i["o"])("providerUser"),t=Object(i["o"])("signer"),n=Object(i["o"])("walletAddress"),c=Object(i["o"])("walletBalance"),a=Object(i["o"])("gameBalanceMatic"),r=Object(i["o"])("gameBalanceLink"),s=Object(i["o"])("gameMinimumBet"),u=Object(i["o"])("gameMaxWinAmount");return{providerUser:e,signer:t,walletAddress:n,walletBalance:c,gameBalanceMatic:a,gameBalanceLink:r,gameMinimumBet:s,gameMaxWinAmount:u,GAME_DICE_ADDRESS:S["b"]}},data:function(){return{betAmount:"0.1",diceSides:{}}},computed:{CalculateWinChance:function(){var e=Object.keys(this.diceSides).length;if(0===e||e===N)return"---";switch(e){case w:return"16.6%";case x:return"33%";case C:return"50%";case B:return"67%";case y:return"83%";default:return"---"}},ProfitOnWin:function(){if(isNaN(this.betAmount))return"---";if(!this.betAmount)return"---";var e=Object.keys(this.diceSides).length;if(e<=0||e>=N)return"---";var t=e/N,n=new p.a(this.betAmount),i=new p.a(t),c=new p.a(T),a=n.multipliedBy(c),r=n.minus(a),s=r.dividedBy(i),u=s.minus(n);return u.toString()},ProfitOnWinOld:function(){if(isNaN(this.betAmount))return"---";if(!this.betAmount)return"---";var e=new p.a(this.betAmount).multipliedBy(I).toString();return e}},created:function(){this.Randomize()},methods:{ToggleDice:function(e){e in this.diceSides?delete this.diceSides[e]:this.diceSides[e]=!0},Randomize:function(){var e=Math.floor(2*Math.random()),t=Math.floor(2*Math.random()),n=Math.floor(2*Math.random()),i=Math.floor(2*Math.random()),c=Math.floor(2*Math.random()),a=Math.floor(2*Math.random()),r=e+t+n+i+c+a;if(0===r||r===N){var s=Math.floor(Math.random()*N);switch(s){case W:e=e?0:1;break;case _:t=t?0:1;break;case U:n=n?0:1;break;case E:i=i?0:1;break;case P:c=c?0:1;break;case R:a=a?0:1;break;default:break}}this.diceSides={},e&&(this.diceSides[1]=!0),t&&(this.diceSides[2]=!0),n&&(this.diceSides[3]=!0),i&&(this.diceSides[4]=!0),c&&(this.diceSides[5]=!0),a&&(this.diceSides[6]=!0)},BetAmountUpdated:function(){var e,t,n,i=null===(e=this.betAmount)||void 0===e?void 0:e.indexOf(".");-1!==i&&((null===(t=this.betAmount)||void 0===t?void 0:t.length)>i+3&&(this.betAmount=null===(n=this.betAmount)||void 0===n?void 0:n.substr(0,i+3)))},MakeBet:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,i,c,a,r,s,u,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.betAmount){e.next=2;break}return e.abrupt("return");case 2:if(this.providerUser){e.next=4;break}return e.abrupt("return");case 4:if(!isNaN(this.betAmount)){e.next=6;break}return e.abrupt("return");case 6:if(0!==Object.keys(this.diceSides).length){e.next=8;break}return e.abrupt("return");case 8:if(!(Object.keys(this.diceSides).length>=N)){e.next=10;break}return e.abrupt("return");case 10:if(t=new p.a(this.betAmount),n=new p.a(this.gameMinimumBet),i=new p.a(this.gameMaxWinAmount),!t.lt(n)){e.next=18;break}return alert("Bet too small"),e.abrupt("return");case 18:if(!t.multipliedBy(I).gt(i)){e.next=21;break}return alert("Potential win amount is too large"),e.abrupt("return");case 21:for(o in c=t.toString(),a=g["a"].utils.parseUnits(c,"ether").toHexString(),r="0x676d7089",s=v["utils"].hexZeroPad(S["b"],32).substring(2),u=0,this.diceSides)u|=Math.pow(2,parseInt(o,10)-1);return u=v["utils"].hexZeroPad("0x".concat(u.toString(16)),32).substring(2),l="".concat(r).concat(s).concat(u),d=[{from:this.walletAddress,to:S["a"],value:a,data:l}],e.next=32,this.providerUser.send("eth_sendTransaction",d);case 32:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),G=(n("c7b4"),n("6b0d")),L=n.n(G);const z=L()(q,[["render",O],["__scopeId","data-v-7c1a6462"]]);t["default"]=z},c7b4:function(e,t,n){"use strict";n("fd2e")},fd2e:function(e,t,n){}}]);