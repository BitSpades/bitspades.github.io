(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~ffba60f8"],{"4a45":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n="providers/5.5.0"},bc79:function(t,e,r){"use strict";r.d(e,"b",(function(){return L})),r.d(e,"a",(function(){return F}));var n=r("edaa"),i=r("2cf2"),o=r("e36d"),s=r("549e"),l=r("4877"),a=r("0a7f"),c=r("0109"),h=r("9bda"),u=r("3796"),d=r("5273"),f=r("baf7"),m=r("bf2b"),b=r.n(m),g=r("ffb2"),p=r("4a45"),k=r("7f06"),v=function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function s(t){try{a(n.next(t))}catch(e){o(e)}}function l(t){try{a(n["throw"](t))}catch(e){o(e)}}function a(t){t.done?r(t.value):i(t.value).then(s,l)}a((n=n.apply(t,e||[])).next())}))};const _=new g["b"](p["a"]);function y(t){return null==t?"null":(32!==Object(s["d"])(t)&&_.throwArgumentError("invalid topic","topic",t),t.toLowerCase())}function w(t){t=t.slice();while(t.length>0&&null==t[t.length-1])t.pop();return t.map(t=>{if(Array.isArray(t)){const e={};t.forEach(t=>{e[y(t)]=!0});const r=Object.keys(e);return r.sort(),r.join("|")}return y(t)}).join("&")}function N(t){return""===t?[]:t.split(/&/g).map(t=>{if(""===t)return[];const e=t.split("|").map(t=>"null"===t?null:t);return 1===e.length?e[0]:e})}function E(t){if("string"===typeof t){if(t=t.toLowerCase(),32===Object(s["d"])(t))return"tx:"+t;if(-1===t.indexOf(":"))return t}else{if(Array.isArray(t))return"filter:*:"+w(t);if(n["a"].isForkEvent(t))throw _.warn("not implemented"),new Error("not implemented");if(t&&"object"===typeof t)return"filter:"+(t.address||"*")+":"+w(t.topics||[])}throw new Error("invalid event - "+t)}function O(){return(new Date).getTime()}function T(t){return new Promise(e=>{setTimeout(e,t)})}const B=["block","network","pending","poll"];class R{constructor(t,e,r){Object(h["d"])(this,"tag",t),Object(h["d"])(this,"listener",e),Object(h["d"])(this,"once",r)}get event(){switch(this.type){case"tx":return this.hash;case"filter":return this.filter}return this.tag}get type(){return this.tag.split(":")[0]}get hash(){const t=this.tag.split(":");return"tx"!==t[0]?null:t[1]}get filter(){const t=this.tag.split(":");if("filter"!==t[0])return null;const e=t[1],r=N(t[2]),n={};return r.length>0&&(n.topics=r),e&&"*"!==e&&(n.address=e),n}pollable(){return this.tag.indexOf(":")>=0||B.indexOf(this.tag)>=0}}const j={0:{symbol:"btc",p2pkh:0,p2sh:5,prefix:"bc"},2:{symbol:"ltc",p2pkh:48,p2sh:50,prefix:"ltc"},3:{symbol:"doge",p2pkh:30,p2sh:22},60:{symbol:"eth",ilk:"eth"},61:{symbol:"etc",ilk:"eth"},700:{symbol:"xdai",ilk:"eth"}};function P(t){return Object(s["h"])(o["a"].from(t).toHexString(),32)}function x(t){return i["a"].encode(Object(s["b"])([t,Object(s["e"])(Object(u["c"])(Object(u["c"])(t)),0,4)]))}const A=[new RegExp("^(https)://(.*)$","i"),new RegExp("^(data):(.*)$","i"),new RegExp("^(ipfs)://(.*)$","i"),new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];function I(t){try{return Object(d["h"])(S(t))}catch(e){}return null}function S(t){if("0x"===t)return null;const e=o["a"].from(Object(s["e"])(t,0,32)).toNumber(),r=o["a"].from(Object(s["e"])(t,e,e+32)).toNumber();return Object(s["e"])(t,e+32,e+32+r)}class L{constructor(t,e,r,n){Object(h["d"])(this,"provider",t),Object(h["d"])(this,"name",r),Object(h["d"])(this,"address",t.formatter.address(e)),Object(h["d"])(this,"_resolvedAddress",n)}_fetchBytes(t,e){return v(this,void 0,void 0,(function*(){const r={to:this.address,data:Object(s["c"])([t,Object(a["b"])(this.name),e||"0x"])};try{return S(yield this.provider.call(r))}catch(n){return n.code,g["b"].errors.CALL_EXCEPTION,null}}))}_getAddress(t,e){const r=j[String(t)];if(null==r&&_.throwError("unsupported coin type: "+t,g["b"].errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${t})`}),"eth"===r.ilk)return this.provider.formatter.address(e);const n=Object(s["a"])(e);if(null!=r.p2pkh){const t=e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);if(t){const e=parseInt(t[1],16);if(t[2].length===2*e&&e>=1&&e<=75)return x(Object(s["b"])([[r.p2pkh],"0x"+t[2]]))}}if(null!=r.p2sh){const t=e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);if(t){const e=parseInt(t[1],16);if(t[2].length===2*e&&e>=1&&e<=75)return x(Object(s["b"])([[r.p2sh],"0x"+t[2]]))}}if(null!=r.prefix){const t=n[1];let e=n[0];if(0===e?20!==t&&32!==t&&(e=-1):e=-1,e>=0&&n.length===2+t&&t>=1&&t<=75){const t=b.a.toWords(n.slice(2));return t.unshift(e),b.a.encode(r.prefix,t)}}return null}getAddress(t){return v(this,void 0,void 0,(function*(){if(null==t&&(t=60),60===t)try{const t={to:this.address,data:"0x3b3b57de"+Object(a["b"])(this.name).substring(2)},e=yield this.provider.call(t);return"0x"===e||e===l["a"]?null:this.provider.formatter.callAddress(e)}catch(n){if(n.code===g["b"].errors.CALL_EXCEPTION)return null;throw n}const e=yield this._fetchBytes("0xf1cb7e06",P(t));if(null==e||"0x"===e)return null;const r=this._getAddress(t,e);return null==r&&_.throwError("invalid or unsupported coin data",g["b"].errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${t})`,coinType:t,data:e}),r}))}getAvatar(){return v(this,void 0,void 0,(function*(){const t=[];try{const e=yield this.getText("avatar");if(null==e)return null;for(let r=0;r<A.length;r++){const n=e.match(A[r]);if(null!=n)switch(n[1]){case"https":return t.push({type:"url",content:e}),{linkage:t,url:e};case"data":return t.push({type:"data",content:e}),{linkage:t,url:e};case"ipfs":return t.push({type:"ipfs",content:e}),{linkage:t,url:"https://gateway.ipfs.io/ipfs/"+e.substring(7)};case"erc721":case"erc1155":{const r="erc721"===n[1]?"0xc87b56dd":"0x0e89341c";t.push({type:n[1],content:e});const i=this._resolvedAddress||(yield this.getAddress()),l=(n[2]||"").split("/");if(2!==l.length)return null;const a=yield this.provider.formatter.address(l[0]),c=Object(s["h"])(o["a"].from(l[1]).toHexString(),32);if("erc721"===n[1]){const e=this.provider.formatter.callAddress(yield this.provider.call({to:a,data:Object(s["c"])(["0x6352211e",c])}));if(i!==e)return null;t.push({type:"owner",content:e})}else if("erc1155"===n[1]){const e=o["a"].from(yield this.provider.call({to:a,data:Object(s["c"])(["0x00fdd58e",Object(s["h"])(i,32),c])}));if(e.isZero())return null;t.push({type:"balance",content:e.toString()})}const h={to:this.provider.formatter.address(l[0]),data:Object(s["c"])([r,c])};let u=I(yield this.provider.call(h));if(null==u)return null;t.push({type:"metadata-url",content:u}),"erc1155"===n[1]&&(u=u.replace("{id}",c.substring(2)));const d=yield Object(f["b"])(u);return d&&"string"===typeof d.image&&d.image.match(/^https:\/\//i)?(t.push({type:"metadata",content:JSON.stringify(d)}),t.push({type:"url",content:d.image}),{linkage:t,url:d.image}):null}}}}catch(e){}return null}))}getContentHash(){return v(this,void 0,void 0,(function*(){const t=yield this._fetchBytes("0xbc1c58d1");if(null==t||"0x"===t)return null;const e=t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(e){const t=parseInt(e[3],16);if(e[4].length===2*t)return"ipfs://"+i["a"].encode("0x"+e[1])}const r=t.match(/^0xe40101fa011b20([0-9a-f]*)$/);return r&&64===r[1].length?"bzz://"+r[1]:_.throwError("invalid or unsupported content hash data",g["b"].errors.UNSUPPORTED_OPERATION,{operation:"getContentHash()",data:t})}))}getText(t){return v(this,void 0,void 0,(function*(){let e=Object(d["f"])(t);e=Object(s["b"])([P(64),P(e.length),e]),e.length%32!==0&&(e=Object(s["b"])([e,Object(s["h"])("0x",32-t.length%32)]));const r=yield this._fetchBytes("0x59d1d43c",Object(s["i"])(e));return null==r||"0x"===r?null:Object(d["h"])(r)}))}}let C=null,H=1;class F extends n["b"]{constructor(t){if(_.checkNew(new.target,n["b"]),super(),this._events=[],this._emitted={block:-2},this.formatter=new.target.getFormatter(),Object(h["d"])(this,"anyNetwork","any"===t),this.anyNetwork&&(t=this.detectNetwork()),t instanceof Promise)this._networkPromise=t,t.catch(t=>{}),this._ready().catch(t=>{});else{const e=Object(h["e"])(new.target,"getNetwork")(t);e?(Object(h["d"])(this,"_network",e),this.emit("network",e,null)):_.throwArgumentError("invalid network","network",t)}this._maxInternalBlockNumber=-1024,this._lastBlockNumber=-2,this._pollingInterval=4e3,this._fastQueryDate=0}_ready(){return v(this,void 0,void 0,(function*(){if(null==this._network){let e=null;if(this._networkPromise)try{e=yield this._networkPromise}catch(t){}null==e&&(e=yield this.detectNetwork()),e||_.throwError("no network detected",g["b"].errors.UNKNOWN_ERROR,{}),null==this._network&&(this.anyNetwork?this._network=e:Object(h["d"])(this,"_network",e),this.emit("network",e,null))}return this._network}))}get ready(){return Object(f["c"])(()=>this._ready().then(t=>t,t=>{if(t.code!==g["b"].errors.NETWORK_ERROR||"noNetwork"!==t.event)throw t}))}static getFormatter(){return null==C&&(C=new k["a"]),C}static getNetwork(t){return Object(c["a"])(null==t?"homestead":t)}_getInternalBlockNumber(t){return v(this,void 0,void 0,(function*(){if(yield this._ready(),t>0)while(this._internalBlockNumber){const e=this._internalBlockNumber;try{const r=yield e;if(O()-r.respTime<=t)return r.blockNumber;break}catch(n){if(this._internalBlockNumber===e)break}}const e=O(),r=Object(h["f"])({blockNumber:this.perform("getBlockNumber",{}),networkError:this.getNetwork().then(t=>null,t=>t)}).then(({blockNumber:t,networkError:n})=>{if(n)throw this._internalBlockNumber===r&&(this._internalBlockNumber=null),n;const i=O();return t=o["a"].from(t).toNumber(),t<this._maxInternalBlockNumber&&(t=this._maxInternalBlockNumber),this._maxInternalBlockNumber=t,this._setFastBlockNumber(t),{blockNumber:t,reqTime:e,respTime:i}});return this._internalBlockNumber=r,r.catch(t=>{this._internalBlockNumber===r&&(this._internalBlockNumber=null)}),(yield r).blockNumber}))}poll(){return v(this,void 0,void 0,(function*(){const t=H++,e=[];let r=null;try{r=yield this._getInternalBlockNumber(100+this.pollingInterval/2)}catch(n){return void this.emit("error",n)}if(this._setFastBlockNumber(r),this.emit("poll",t,r),r!==this._lastBlockNumber){if(-2===this._emitted.block&&(this._emitted.block=r-1),Math.abs(this._emitted.block-r)>1e3)_.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`),this.emit("error",_.makeError("network block skew detected",g["b"].errors.NETWORK_ERROR,{blockNumber:r,event:"blockSkew",previousBlockNumber:this._emitted.block})),this.emit("block",r);else for(let t=this._emitted.block+1;t<=r;t++)this.emit("block",t);this._emitted.block!==r&&(this._emitted.block=r,Object.keys(this._emitted).forEach(t=>{if("block"===t)return;const e=this._emitted[t];"pending"!==e&&r-e>12&&delete this._emitted[t]})),-2===this._lastBlockNumber&&(this._lastBlockNumber=r-1),this._events.forEach(t=>{switch(t.type){case"tx":{const r=t.hash;let n=this.getTransactionReceipt(r).then(t=>t&&null!=t.blockNumber?(this._emitted["t:"+r]=t.blockNumber,this.emit(r,t),null):null).catch(t=>{this.emit("error",t)});e.push(n);break}case"filter":{const n=t.filter;n.fromBlock=this._lastBlockNumber+1,n.toBlock=r;const i=this.getLogs(n).then(t=>{0!==t.length&&t.forEach(t=>{this._emitted["b:"+t.blockHash]=t.blockNumber,this._emitted["t:"+t.transactionHash]=t.blockNumber,this.emit(n,t)})}).catch(t=>{this.emit("error",t)});e.push(i);break}}}),this._lastBlockNumber=r,Promise.all(e).then(()=>{this.emit("didPoll",t)}).catch(t=>{this.emit("error",t)})}else this.emit("didPoll",t)}))}resetEventsBlock(t){this._lastBlockNumber=t-1,this.polling&&this.poll()}get network(){return this._network}detectNetwork(){return v(this,void 0,void 0,(function*(){return _.throwError("provider does not support network detection",g["b"].errors.UNSUPPORTED_OPERATION,{operation:"provider.detectNetwork"})}))}getNetwork(){return v(this,void 0,void 0,(function*(){const t=yield this._ready(),e=yield this.detectNetwork();if(t.chainId!==e.chainId){if(this.anyNetwork)return this._network=e,this._lastBlockNumber=-2,this._fastBlockNumber=null,this._fastBlockNumberPromise=null,this._fastQueryDate=0,this._emitted.block=-2,this._maxInternalBlockNumber=-1024,this._internalBlockNumber=null,this.emit("network",e,t),yield T(0),this._network;const r=_.makeError("underlying network changed",g["b"].errors.NETWORK_ERROR,{event:"changed",network:t,detectedNetwork:e});throw this.emit("error",r),r}return t}))}get blockNumber(){return this._getInternalBlockNumber(100+this.pollingInterval/2).then(t=>{this._setFastBlockNumber(t)},t=>{}),null!=this._fastBlockNumber?this._fastBlockNumber:-1}get polling(){return null!=this._poller}set polling(t){t&&!this._poller?(this._poller=setInterval(()=>{this.poll()},this.pollingInterval),this._bootstrapPoll||(this._bootstrapPoll=setTimeout(()=>{this.poll(),this._bootstrapPoll=setTimeout(()=>{this._poller||this.poll(),this._bootstrapPoll=null},this.pollingInterval)},0))):!t&&this._poller&&(clearInterval(this._poller),this._poller=null)}get pollingInterval(){return this._pollingInterval}set pollingInterval(t){if("number"!==typeof t||t<=0||parseInt(String(t))!=t)throw new Error("invalid polling interval");this._pollingInterval=t,this._poller&&(clearInterval(this._poller),this._poller=setInterval(()=>{this.poll()},this._pollingInterval))}_getFastBlockNumber(){const t=O();return t-this._fastQueryDate>2*this._pollingInterval&&(this._fastQueryDate=t,this._fastBlockNumberPromise=this.getBlockNumber().then(t=>((null==this._fastBlockNumber||t>this._fastBlockNumber)&&(this._fastBlockNumber=t),this._fastBlockNumber))),this._fastBlockNumberPromise}_setFastBlockNumber(t){null!=this._fastBlockNumber&&t<this._fastBlockNumber||(this._fastQueryDate=O(),(null==this._fastBlockNumber||t>this._fastBlockNumber)&&(this._fastBlockNumber=t,this._fastBlockNumberPromise=Promise.resolve(t)))}waitForTransaction(t,e,r){return v(this,void 0,void 0,(function*(){return this._waitForTransaction(t,null==e?1:e,r||0,null)}))}_waitForTransaction(t,e,r,n){return v(this,void 0,void 0,(function*(){const i=yield this.getTransactionReceipt(t);return(i?i.confirmations:0)>=e?i:new Promise((i,o)=>{const s=[];let l=!1;const a=function(){return!!l||(l=!0,s.forEach(t=>{t()}),!1)},c=t=>{t.confirmations<e||a()||i(t)};if(this.on(t,c),s.push(()=>{this.removeListener(t,c)}),n){let r=n.startBlock,i=null;const c=s=>v(this,void 0,void 0,(function*(){l||(yield T(1e3),this.getTransactionCount(n.from).then(h=>v(this,void 0,void 0,(function*(){if(!l){if(h<=n.nonce)r=s;else{{const e=yield this.getTransaction(t);if(e&&null!=e.blockNumber)return}null==i&&(i=r-3,i<n.startBlock&&(i=n.startBlock));while(i<=s){if(l)return;const r=yield this.getBlockWithTransactions(i);for(let i=0;i<r.transactions.length;i++){const s=r.transactions[i];if(s.hash===t)return;if(s.from===n.from&&s.nonce===n.nonce){if(l)return;const r=yield this.waitForTransaction(s.hash,e);if(a())return;let i="replaced";return s.data===n.data&&s.to===n.to&&s.value.eq(n.value)?i="repriced":"0x"===s.data&&s.from===s.to&&s.value.isZero()&&(i="cancelled"),void o(_.makeError("transaction was replaced",g["b"].errors.TRANSACTION_REPLACED,{cancelled:"replaced"===i||"cancelled"===i,reason:i,replacement:this._wrapTransaction(s),hash:t,receipt:r}))}}i++}}l||this.once("block",c)}})),t=>{l||this.once("block",c)}))}));if(l)return;this.once("block",c),s.push(()=>{this.removeListener("block",c)})}if("number"===typeof r&&r>0){const t=setTimeout(()=>{a()||o(_.makeError("timeout exceeded",g["b"].errors.TIMEOUT,{timeout:r}))},r);t.unref&&t.unref(),s.push(()=>{clearTimeout(t)})}})}))}getBlockNumber(){return v(this,void 0,void 0,(function*(){return this._getInternalBlockNumber(0)}))}getGasPrice(){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield this.perform("getGasPrice",{});try{return o["a"].from(t)}catch(e){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"getGasPrice",result:t,error:e})}}))}getBalance(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Object(h["f"])({address:this._getAddress(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("getBalance",r);try{return o["a"].from(n)}catch(i){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"getBalance",params:r,result:n,error:i})}}))}getTransactionCount(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Object(h["f"])({address:this._getAddress(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("getTransactionCount",r);try{return o["a"].from(n).toNumber()}catch(i){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"getTransactionCount",params:r,result:n,error:i})}}))}getCode(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Object(h["f"])({address:this._getAddress(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("getCode",r);try{return Object(s["i"])(n)}catch(i){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"getCode",params:r,result:n,error:i})}}))}getStorageAt(t,e,r){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const n=yield Object(h["f"])({address:this._getAddress(t),blockTag:this._getBlockTag(r),position:Promise.resolve(e).then(t=>Object(s["g"])(t))}),i=yield this.perform("getStorageAt",n);try{return Object(s["i"])(i)}catch(o){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"getStorageAt",params:n,result:i,error:o})}}))}_wrapTransaction(t,e,r){if(null!=e&&32!==Object(s["d"])(e))throw new Error("invalid response - sendTransaction");const n=t;return null!=e&&t.hash!==e&&_.throwError("Transaction hash mismatch from Provider.sendTransaction.",g["b"].errors.UNKNOWN_ERROR,{expectedHash:t.hash,returnedHash:e}),n.wait=(e,n)=>v(this,void 0,void 0,(function*(){null==e&&(e=1),null==n&&(n=0);let i=void 0;0!==e&&null!=r&&(i={data:t.data,from:t.from,nonce:t.nonce,to:t.to,value:t.value,startBlock:r});const o=yield this._waitForTransaction(t.hash,e,n,i);return null==o&&0===e?null:(this._emitted["t:"+t.hash]=o.blockNumber,0===o.status&&_.throwError("transaction failed",g["b"].errors.CALL_EXCEPTION,{transactionHash:t.hash,transaction:t,receipt:o}),o)})),n}sendTransaction(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield Promise.resolve(t).then(t=>Object(s["i"])(t)),r=this.formatter.transaction(t);null==r.confirmations&&(r.confirmations=0);const n=yield this._getInternalBlockNumber(100+2*this.pollingInterval);try{const t=yield this.perform("sendTransaction",{signedTransaction:e});return this._wrapTransaction(r,t,n)}catch(i){throw i.transaction=r,i.transactionHash=r.hash,i}}))}_getTransactionRequest(t){return v(this,void 0,void 0,(function*(){const e=yield t,r={};return["from","to"].forEach(t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then(t=>t?this._getAddress(t):null))}),["gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","value"].forEach(t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then(t=>t?o["a"].from(t):null))}),["type"].forEach(t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then(t=>null!=t?t:null))}),e.accessList&&(r.accessList=this.formatter.accessList(e.accessList)),["data"].forEach(t=>{null!=e[t]&&(r[t]=Promise.resolve(e[t]).then(t=>t?Object(s["i"])(t):null))}),this.formatter.transactionRequest(yield Object(h["f"])(r))}))}_getFilter(t){return v(this,void 0,void 0,(function*(){t=yield t;const e={};return null!=t.address&&(e.address=this._getAddress(t.address)),["blockHash","topics"].forEach(r=>{null!=t[r]&&(e[r]=t[r])}),["fromBlock","toBlock"].forEach(r=>{null!=t[r]&&(e[r]=this._getBlockTag(t[r]))}),this.formatter.filter(yield Object(h["f"])(e))}))}call(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Object(h["f"])({transaction:this._getTransactionRequest(t),blockTag:this._getBlockTag(e)}),n=yield this.perform("call",r);try{return Object(s["i"])(n)}catch(i){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"call",params:r,result:n,error:i})}}))}estimateGas(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield Object(h["f"])({transaction:this._getTransactionRequest(t)}),r=yield this.perform("estimateGas",e);try{return o["a"].from(r)}catch(n){return _.throwError("bad result from backend",g["b"].errors.SERVER_ERROR,{method:"estimateGas",params:e,result:r,error:n})}}))}_getAddress(t){return v(this,void 0,void 0,(function*(){t=yield t,"string"!==typeof t&&_.throwArgumentError("invalid address or ENS name","name",t);const e=yield this.resolveName(t);return null==e&&_.throwError("ENS name not configured",g["b"].errors.UNSUPPORTED_OPERATION,{operation:`resolveName(${JSON.stringify(t)})`}),e}))}_getBlock(t,e){return v(this,void 0,void 0,(function*(){yield this.getNetwork(),t=yield t;let r=-128;const n={includeTransactions:!!e};if(Object(s["l"])(t,32))n.blockHash=t;else try{n.blockTag=yield this._getBlockTag(t),Object(s["l"])(n.blockTag)&&(r=parseInt(n.blockTag.substring(2),16))}catch(i){_.throwArgumentError("invalid block hash or block tag","blockHashOrBlockTag",t)}return Object(f["c"])(()=>v(this,void 0,void 0,(function*(){const t=yield this.perform("getBlock",n);if(null==t)return null!=n.blockHash&&null==this._emitted["b:"+n.blockHash]||null!=n.blockTag&&r>this._emitted.block?null:void 0;if(e){let e=null;for(let n=0;n<t.transactions.length;n++){const r=t.transactions[n];if(null==r.blockNumber)r.confirmations=0;else if(null==r.confirmations){null==e&&(e=yield this._getInternalBlockNumber(100+2*this.pollingInterval));let t=e-r.blockNumber+1;t<=0&&(t=1),r.confirmations=t}}const r=this.formatter.blockWithTransactions(t);return r.transactions=r.transactions.map(t=>this._wrapTransaction(t)),r}return this.formatter.block(t)})),{oncePoll:this})}))}getBlock(t){return this._getBlock(t,!1)}getBlockWithTransactions(t){return this._getBlock(t,!0)}getTransaction(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork(),t=yield t;const e={transactionHash:this.formatter.hash(t,!0)};return Object(f["c"])(()=>v(this,void 0,void 0,(function*(){const r=yield this.perform("getTransaction",e);if(null==r)return null==this._emitted["t:"+t]?null:void 0;const n=this.formatter.transactionResponse(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){const t=yield this._getInternalBlockNumber(100+2*this.pollingInterval);let e=t-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}return this._wrapTransaction(n)})),{oncePoll:this})}))}getTransactionReceipt(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork(),t=yield t;const e={transactionHash:this.formatter.hash(t,!0)};return Object(f["c"])(()=>v(this,void 0,void 0,(function*(){const r=yield this.perform("getTransactionReceipt",e);if(null==r)return null==this._emitted["t:"+t]?null:void 0;if(null==r.blockHash)return;const n=this.formatter.receipt(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){const t=yield this._getInternalBlockNumber(100+2*this.pollingInterval);let e=t-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}return n})),{oncePoll:this})}))}getLogs(t){return v(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield Object(h["f"])({filter:this._getFilter(t)}),r=yield this.perform("getLogs",e);return r.forEach(t=>{null==t.removed&&(t.removed=!1)}),k["a"].arrayOf(this.formatter.filterLog.bind(this.formatter))(r)}))}getEtherPrice(){return v(this,void 0,void 0,(function*(){return yield this.getNetwork(),this.perform("getEtherPrice",{})}))}_getBlockTag(t){return v(this,void 0,void 0,(function*(){if(t=yield t,"number"===typeof t&&t<0){t%1&&_.throwArgumentError("invalid BlockTag","blockTag",t);let e=yield this._getInternalBlockNumber(100+2*this.pollingInterval);return e+=t,e<0&&(e=0),this.formatter.blockTag(e)}return this.formatter.blockTag(t)}))}getResolver(t){return v(this,void 0,void 0,(function*(){try{const e=yield this._getResolver(t);return null==e?null:new L(this,e,t)}catch(e){return e.code,g["b"].errors.CALL_EXCEPTION,null}}))}_getResolver(t){return v(this,void 0,void 0,(function*(){const e=yield this.getNetwork();e.ensAddress||_.throwError("network does not support ENS",g["b"].errors.UNSUPPORTED_OPERATION,{operation:"ENS",network:e.name});const r={to:e.ensAddress,data:"0x0178b8bf"+Object(a["b"])(t).substring(2)};try{return this.formatter.callAddress(yield this.call(r))}catch(n){if(n.code===g["b"].errors.CALL_EXCEPTION)return null;throw n}}))}resolveName(t){return v(this,void 0,void 0,(function*(){t=yield t;try{return Promise.resolve(this.formatter.address(t))}catch(r){if(Object(s["l"])(t))throw r}"string"!==typeof t&&_.throwArgumentError("invalid ENS name","name",t);const e=yield this.getResolver(t);return e?yield e.getAddress():null}))}lookupAddress(t){return v(this,void 0,void 0,(function*(){t=yield t,t=this.formatter.address(t);const e=t.substring(2).toLowerCase()+".addr.reverse",r=yield this._getResolver(e);if(!r)return null;let n=Object(s["a"])(yield this.call({to:r,data:"0x691f3431"+Object(a["b"])(e).substring(2)}));if(n.length<32||!o["a"].from(n.slice(0,32)).eq(32))return null;if(n=n.slice(32),n.length<32)return null;const i=o["a"].from(n.slice(0,32)).toNumber();if(n=n.slice(32),i>n.length)return null;const l=Object(d["h"])(n.slice(0,i)),c=yield this.resolveName(l);return c!=t?null:l}))}getAvatar(t){return v(this,void 0,void 0,(function*(){let e=null;if(Object(s["l"])(t)){const r=this.formatter.address(t),n=r.substring(2).toLowerCase()+".addr.reverse",i=yield this._getResolver(n);if(!i)return null;e=new L(this,i,"_",r)}else e=yield this.getResolver(t);const r=yield e.getAvatar();return null==r?null:r.url}))}perform(t,e){return _.throwError(t+" not implemented",g["b"].errors.NOT_IMPLEMENTED,{operation:t})}_startEvent(t){this.polling=this._events.filter(t=>t.pollable()).length>0}_stopEvent(t){this.polling=this._events.filter(t=>t.pollable()).length>0}_addEventListener(t,e,r){const n=new R(E(t),e,r);return this._events.push(n),this._startEvent(n),this}on(t,e){return this._addEventListener(t,e,!1)}once(t,e){return this._addEventListener(t,e,!0)}emit(t,...e){let r=!1,n=[],i=E(t);return this._events=this._events.filter(t=>t.tag!==i||(setTimeout(()=>{t.listener.apply(this,e)},0),r=!0,!t.once||(n.push(t),!1))),n.forEach(t=>{this._stopEvent(t)}),r}listenerCount(t){if(!t)return this._events.length;let e=E(t);return this._events.filter(t=>t.tag===e).length}listeners(t){if(null==t)return this._events.map(t=>t.listener);let e=E(t);return this._events.filter(t=>t.tag===e).map(t=>t.listener)}off(t,e){if(null==e)return this.removeAllListeners(t);const r=[];let n=!1,i=E(t);return this._events=this._events.filter(t=>t.tag!==i||t.listener!=e||(!!n||(n=!0,r.push(t),!1))),r.forEach(t=>{this._stopEvent(t)}),this}removeAllListeners(t){let e=[];if(null==t)e=this._events,this._events=[];else{const r=E(t);this._events=this._events.filter(t=>t.tag!==r||(e.push(t),!1))}return e.forEach(t=>{this._stopEvent(t)}),this}}},db78:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return d}));var n=r("9bda"),i=r("7f06"),o=r("7b64"),s=r("ffb2"),l=r("4a45"),a=r("bf37");const c=new s["b"](l["a"]),h="_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";class u extends o["a"]{constructor(t,e){const r=new d(t,e),i=r.connection.url.replace(/^http/i,"ws").replace(".alchemyapi.",".ws.alchemyapi.");super(i,r.network),Object(n["d"])(this,"apiKey",r.apiKey)}isCommunityResource(){return this.apiKey===h}}class d extends a["b"]{static getWebSocketProvider(t,e){return new u(t,e)}static getApiKey(t){return null==t?h:(t&&"string"!==typeof t&&c.throwArgumentError("invalid apiKey","apiKey",t),t)}static getUrl(t,e){let r=null;switch(t.name){case"homestead":r="eth-mainnet.alchemyapi.io/v2/";break;case"ropsten":r="eth-ropsten.alchemyapi.io/v2/";break;case"rinkeby":r="eth-rinkeby.alchemyapi.io/v2/";break;case"goerli":r="eth-goerli.alchemyapi.io/v2/";break;case"kovan":r="eth-kovan.alchemyapi.io/v2/";break;case"matic":r="polygon-mainnet.g.alchemy.com/v2/";break;case"maticmum":r="polygon-mumbai.g.alchemy.com/v2/";break;default:c.throwArgumentError("unsupported network","network",arguments[0])}return{allowGzip:!0,url:"https://"+r+e,throttleCallback:(t,r)=>(e===h&&Object(i["d"])(),Promise.resolve(!0))}}isCommunityResource(){return this.apiKey===h}}}}]);