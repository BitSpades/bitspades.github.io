(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~c35b422a"],{2606:function(e,t,r){"use strict";r.r(t),r.d(t,"Provider",(function(){return n["b"]})),r.d(t,"BaseProvider",(function(){return s["a"]})),r.d(t,"Resolver",(function(){return s["b"]})),r.d(t,"UrlJsonRpcProvider",(function(){return b["b"]})),r.d(t,"FallbackProvider",(function(){return u["a"]})),r.d(t,"AlchemyProvider",(function(){return i["a"]})),r.d(t,"AlchemyWebSocketProvider",(function(){return i["b"]})),r.d(t,"CloudflareProvider",(function(){return c["a"]})),r.d(t,"EtherscanProvider",(function(){return a["a"]})),r.d(t,"InfuraProvider",(function(){return y})),r.d(t,"InfuraWebSocketProvider",(function(){return v})),r.d(t,"JsonRpcProvider",(function(){return _["a"]})),r.d(t,"JsonRpcBatchProvider",(function(){return E})),r.d(t,"NodesmithProvider",(function(){return R})),r.d(t,"PocketProvider",(function(){return I})),r.d(t,"StaticJsonRpcProvider",(function(){return b["a"]})),r.d(t,"Web3Provider",(function(){return x})),r.d(t,"WebSocketProvider",(function(){return h["a"]})),r.d(t,"IpcProvider",(function(){return d})),r.d(t,"JsonRpcSigner",(function(){return _["b"]})),r.d(t,"getDefaultProvider",(function(){return C})),r.d(t,"getNetwork",(function(){return o["a"]})),r.d(t,"isCommunityResource",(function(){return p["c"]})),r.d(t,"isCommunityResourcable",(function(){return p["b"]})),r.d(t,"showThrottleMessage",(function(){return p["d"]})),r.d(t,"Formatter",(function(){return p["a"]}));var n=r("edaa"),o=r("0109"),s=r("bc79"),i=r("db78"),c=r("241d"),a=r("8ac0"),u=r("81ec");const d=null;var l=r("9bda"),h=r("7b64"),p=r("7f06"),f=r("ffb2"),g=r("4a45"),b=r("bf37");const m=new f["b"](g["a"]),w="84842078b09946638c03157f83405213";class v extends h["a"]{constructor(e,t){const r=new y(e,t),n=r.connection;n.password&&m.throwError("INFURA WebSocket project secrets unsupported",f["b"].errors.UNSUPPORTED_OPERATION,{operation:"InfuraProvider.getWebSocketProvider()"});const o=n.url.replace(/^http/i,"ws").replace("/v3/","/ws/v3/");super(o,e),Object(l["d"])(this,"apiKey",r.projectId),Object(l["d"])(this,"projectId",r.projectId),Object(l["d"])(this,"projectSecret",r.projectSecret)}isCommunityResource(){return this.projectId===w}}class y extends b["b"]{static getWebSocketProvider(e,t){return new v(e,t)}static getApiKey(e){const t={apiKey:w,projectId:w,projectSecret:null};return null==e||("string"===typeof e?t.projectId=e:null!=e.projectSecret?(m.assertArgument("string"===typeof e.projectId,"projectSecret requires a projectId","projectId",e.projectId),m.assertArgument("string"===typeof e.projectSecret,"invalid projectSecret","projectSecret","[REDACTED]"),t.projectId=e.projectId,t.projectSecret=e.projectSecret):e.projectId&&(t.projectId=e.projectId),t.apiKey=t.projectId),t}static getUrl(e,t){let r=null;switch(e?e.name:"unknown"){case"homestead":r="mainnet.infura.io";break;case"ropsten":r="ropsten.infura.io";break;case"rinkeby":r="rinkeby.infura.io";break;case"kovan":r="kovan.infura.io";break;case"goerli":r="goerli.infura.io";break;case"matic":r="polygon-mainnet.infura.io";break;case"maticmum":r="polygon-mumbai.infura.io";break;default:m.throwError("unsupported network",f["b"].errors.INVALID_ARGUMENT,{argument:"network",value:e})}const n={allowGzip:!0,url:"https://"+r+"/v3/"+t.projectId,throttleCallback:(e,r)=>(t.projectId===w&&Object(p["d"])(),Promise.resolve(!0))};return null!=t.projectSecret&&(n.user="",n.password=t.projectSecret),n}isCommunityResource(){return this.projectId===w}}var _=r("3e80"),k=r("baf7");class E extends _["a"]{send(e,t){const r={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"};null==this._pendingBatch&&(this._pendingBatch=[]);const n={request:r,resolve:null,reject:null},o=new Promise((e,t)=>{n.resolve=e,n.reject=t});return this._pendingBatch.push(n),this._pendingBatchAggregator||(this._pendingBatchAggregator=setTimeout(()=>{const e=this._pendingBatch;this._pendingBatch=null,this._pendingBatchAggregator=null;const t=e.map(e=>e.request);return this.emit("debug",{action:"requestBatch",request:Object(l["c"])(t),provider:this}),Object(k["b"])(this.connection,JSON.stringify(t)).then(r=>{this.emit("debug",{action:"response",request:t,response:r,provider:this}),e.forEach((e,t)=>{const n=r[t];if(n.error){const t=new Error(n.error.message);t.code=n.error.code,t.data=n.error.data,e.reject(t)}else e.resolve(n.result)})},r=>{this.emit("debug",{action:"response",error:r,request:t,provider:this}),e.forEach(e=>{e.reject(r)})})},10)),o}}const O=new f["b"](g["a"]),P="ETHERS_JS_SHARED";class R extends b["b"]{static getApiKey(e){return e&&"string"!==typeof e&&O.throwArgumentError("invalid apiKey","apiKey",e),e||P}static getUrl(e,t){O.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");let r=null;switch(e.name){case"homestead":r="https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";break;case"ropsten":r="https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";break;case"rinkeby":r="https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";break;case"goerli":r="https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";break;case"kovan":r="https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";break;default:O.throwArgumentError("unsupported network","network",arguments[0])}return r+"?apiKey="+t}}const j=new f["b"](g["a"]),N={homestead:"6004bcd10040261633ade990",ropsten:"6004bd4d0040261633ade991",rinkeby:"6004bda20040261633ade994",goerli:"6004bd860040261633ade992"};class I extends b["b"]{constructor(e,t){if(null==t){const r=Object(l["e"])(new.target,"getNetwork")(e);if(r){const e=N[r.name];e&&(t={applicationId:e,loadBalancer:!0})}null==t&&j.throwError("unsupported network",f["b"].errors.INVALID_ARGUMENT,{argument:"network",value:e})}super(e,t)}static getApiKey(e){null==e&&j.throwArgumentError("PocketProvider.getApiKey does not support null apiKey","apiKey",e);const t={applicationId:null,loadBalancer:!1,applicationSecretKey:null};return"string"===typeof e?t.applicationId=e:null!=e.applicationSecretKey?(j.assertArgument("string"===typeof e.applicationId,"applicationSecretKey requires an applicationId","applicationId",e.applicationId),j.assertArgument("string"===typeof e.applicationSecretKey,"invalid applicationSecretKey","applicationSecretKey","[REDACTED]"),t.applicationId=e.applicationId,t.applicationSecretKey=e.applicationSecretKey,t.loadBalancer=!!e.loadBalancer):e.applicationId?(j.assertArgument("string"===typeof e.applicationId,"apiKey.applicationId must be a string","apiKey.applicationId",e.applicationId),t.applicationId=e.applicationId,t.loadBalancer=!!e.loadBalancer):j.throwArgumentError("unsupported PocketProvider apiKey","apiKey",e),t}static getUrl(e,t){let r=null;switch(e?e.name:"unknown"){case"homestead":r="eth-mainnet.gateway.pokt.network";break;case"ropsten":r="eth-ropsten.gateway.pokt.network";break;case"rinkeby":r="eth-rinkeby.gateway.pokt.network";break;case"goerli":r="eth-goerli.gateway.pokt.network";break;default:j.throwError("unsupported network",f["b"].errors.INVALID_ARGUMENT,{argument:"network",value:e})}let n=null;n=t.loadBalancer?`https://${r}/v1/lb/${t.applicationId}`:`https://${r}/v1/${t.applicationId}`;const o={url:n,headers:{}};return null!=t.applicationSecretKey&&(o.user="",o.password=t.applicationSecretKey),o}isCommunityResource(){return this.applicationId===N[this.network.name]}}const T=new f["b"](g["a"]);let S=1;function A(e,t){const r="Web3LegacyFetcher";return function(e,n){const o={method:e,params:n,id:S++,jsonrpc:"2.0"};return new Promise((e,n)=>{this.emit("debug",{action:"request",fetcher:r,request:Object(l["c"])(o),provider:this}),t(o,(t,s)=>{if(t)return this.emit("debug",{action:"response",fetcher:r,error:t,request:o,provider:this}),n(t);if(this.emit("debug",{action:"response",fetcher:r,request:o,response:s,provider:this}),s.error){const e=new Error(s.error.message);return e.code=s.error.code,e.data=s.error.data,n(e)}e(s.result)})})}}function U(e){return function(t,r){null==r&&(r=[]);const n={method:t,params:r};return this.emit("debug",{action:"request",fetcher:"Eip1193Fetcher",request:Object(l["c"])(n),provider:this}),e.request(n).then(e=>(this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:n,response:e,provider:this}),e),e=>{throw this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:n,error:e,provider:this}),e})}}class x extends _["a"]{constructor(e,t){T.checkNew(new.target,x),null==e&&T.throwArgumentError("missing provider","provider",e);let r=null,n=null,o=null;"function"===typeof e?(r="unknown:",n=e):(r=e.host||e.path||"",!r&&e.isMetaMask&&(r="metamask"),o=e,e.request?(""===r&&(r="eip-1193:"),n=U(e)):e.sendAsync?n=A(e,e.sendAsync.bind(e)):e.send?n=A(e,e.send.bind(e)):T.throwArgumentError("unsupported provider","provider",e),r||(r="unknown:")),super(r,t),Object(l["d"])(this,"jsonRpcFetchFunc",n),Object(l["d"])(this,"provider",o)}send(e,t){return this.jsonRpcFetchFunc(e,t)}}const F=new f["b"](g["a"]);function C(e,t){if(null==e&&(e="homestead"),"string"===typeof e){const t=e.match(/^(ws|http)s?:/i);if(t)switch(t[1]){case"http":return new _["a"](e);case"ws":return new h["a"](e);default:F.throwArgumentError("unsupported URL scheme","network",e)}}const r=Object(o["a"])(e);return r&&r._defaultProvider||F.throwError("unsupported getDefaultProvider network",f["b"].errors.NETWORK_ERROR,{operation:"getDefaultProvider",network:e}),r._defaultProvider({FallbackProvider:u["a"],AlchemyProvider:i["a"],CloudflareProvider:c["a"],EtherscanProvider:a["a"],InfuraProvider:y,JsonRpcProvider:_["a"],NodesmithProvider:R,PocketProvider:I,Web3Provider:x,IpcProvider:d},t)}},"3e80":function(e,t,r){"use strict";r.d(t,"b",(function(){return k})),r.d(t,"a",(function(){return P}));var n=r("7ca5"),o=r("e36d"),s=r("549e"),i=r("e108"),c=r("9bda"),a=r("5273"),u=r("5ac3"),d=r("baf7"),l=r("ffb2"),h=r("4a45"),p=r("bc79"),f=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};const g=new l["b"](h["a"]),b=["call","estimateGas"];function m(e,t,r){if("call"===e&&t.code===l["b"].errors.SERVER_ERROR){const e=t.error;if(e&&e.message.match("reverted")&&Object(s["l"])(e.data))return e.data;g.throwError("missing revert data in call exception",l["b"].errors.CALL_EXCEPTION,{error:t,data:"0x"})}let n=t.message;t.code===l["b"].errors.SERVER_ERROR&&t.error&&"string"===typeof t.error.message?n=t.error.message:"string"===typeof t.body?n=t.body:"string"===typeof t.responseText&&(n=t.responseText),n=(n||"").toLowerCase();const o=r.transaction||r.signedTransaction;throw n.match(/insufficient funds|base fee exceeds gas limit/)&&g.throwError("insufficient funds for intrinsic transaction cost",l["b"].errors.INSUFFICIENT_FUNDS,{error:t,method:e,transaction:o}),n.match(/nonce too low/)&&g.throwError("nonce has already been used",l["b"].errors.NONCE_EXPIRED,{error:t,method:e,transaction:o}),n.match(/replacement transaction underpriced/)&&g.throwError("replacement fee too low",l["b"].errors.REPLACEMENT_UNDERPRICED,{error:t,method:e,transaction:o}),n.match(/only replay-protected/)&&g.throwError("legacy pre-eip-155 transactions not supported",l["b"].errors.UNSUPPORTED_OPERATION,{error:t,method:e,transaction:o}),b.indexOf(e)>=0&&n.match(/gas required exceeds allowance|always failing transaction|execution reverted/)&&g.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",l["b"].errors.UNPREDICTABLE_GAS_LIMIT,{error:t,method:e,transaction:o}),t}function w(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){if(e.error){const t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}function y(e){return e?e.toLowerCase():e}const _={};class k extends n["a"]{constructor(e,t,r){if(g.checkNew(new.target,k),super(),e!==_)throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");Object(c["d"])(this,"provider",t),null==r&&(r=0),"string"===typeof r?(Object(c["d"])(this,"_address",this.provider.formatter.address(r)),Object(c["d"])(this,"_index",null)):"number"===typeof r?(Object(c["d"])(this,"_index",r),Object(c["d"])(this,"_address",null)):g.throwArgumentError("invalid address or index","addressOrIndex",r)}connect(e){return g.throwError("cannot alter JSON-RPC Signer connection",l["b"].errors.UNSUPPORTED_OPERATION,{operation:"connect"})}connectUnchecked(){return new E(_,this.provider,this._address||this._index)}getAddress(){return this._address?Promise.resolve(this._address):this.provider.send("eth_accounts",[]).then(e=>(e.length<=this._index&&g.throwError("unknown account #"+this._index,l["b"].errors.UNSUPPORTED_OPERATION,{operation:"getAddress"}),this.provider.formatter.address(e[this._index])))}sendUncheckedTransaction(e){e=Object(c["g"])(e);const t=this.getAddress().then(e=>(e&&(e=e.toLowerCase()),e));if(null==e.gasLimit){const r=Object(c["g"])(e);r.from=t,e.gasLimit=this.provider.estimateGas(r)}return null!=e.to&&(e.to=Promise.resolve(e.to).then(e=>f(this,void 0,void 0,(function*(){if(null==e)return null;const t=yield this.provider.resolveName(e);return null==t&&g.throwArgumentError("provided ENS name resolves to null","tx.to",e),t})))),Object(c["f"])({tx:Object(c["f"])(e),sender:t}).then(({tx:t,sender:r})=>{null!=t.from?t.from.toLowerCase()!==r&&g.throwArgumentError("from address mismatch","transaction",e):t.from=r;const n=this.provider.constructor.hexlifyTransaction(t,{from:!0});return this.provider.send("eth_sendTransaction",[n]).then(e=>e,e=>m("sendTransaction",e,n))})}signTransaction(e){return g.throwError("signing transactions is unsupported",l["b"].errors.UNSUPPORTED_OPERATION,{operation:"signTransaction"})}sendTransaction(e){return f(this,void 0,void 0,(function*(){const t=yield this.provider._getInternalBlockNumber(100+2*this.provider.pollingInterval),r=yield this.sendUncheckedTransaction(e);try{return yield Object(d["c"])(()=>f(this,void 0,void 0,(function*(){const e=yield this.provider.getTransaction(r);if(null!==e)return this.provider._wrapTransaction(e,r,t)})),{oncePoll:this.provider})}catch(n){throw n.transactionHash=r,n}}))}signMessage(e){return f(this,void 0,void 0,(function*(){const t="string"===typeof e?Object(a["f"])(e):e,r=yield this.getAddress();return yield this.provider.send("personal_sign",[Object(s["i"])(t),r.toLowerCase()])}))}_legacySignMessage(e){return f(this,void 0,void 0,(function*(){const t="string"===typeof e?Object(a["f"])(e):e,r=yield this.getAddress();return yield this.provider.send("eth_sign",[r.toLowerCase(),Object(s["i"])(t)])}))}_signTypedData(e,t,r){return f(this,void 0,void 0,(function*(){const n=yield i["a"].resolveNames(e,t,r,e=>this.provider.resolveName(e)),o=yield this.getAddress();return yield this.provider.send("eth_signTypedData_v4",[o.toLowerCase(),JSON.stringify(i["a"].getPayload(n.domain,t,n.value))])}))}unlock(e){return f(this,void 0,void 0,(function*(){const t=this.provider,r=yield this.getAddress();return t.send("personal_unlockAccount",[r.toLowerCase(),e,null])}))}}class E extends k{sendTransaction(e){return this.sendUncheckedTransaction(e).then(e=>({hash:e,nonce:null,gasLimit:null,gasPrice:null,data:null,value:null,chainId:null,confirmations:0,from:null,wait:t=>this.provider.waitForTransaction(e,t)}))}}const O={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0,type:!0,accessList:!0,maxFeePerGas:!0,maxPriorityFeePerGas:!0};class P extends p["a"]{constructor(e,t){g.checkNew(new.target,P);let r=t;null==r&&(r=new Promise((e,t)=>{setTimeout(()=>{this.detectNetwork().then(t=>{e(t)},e=>{t(e)})},0)})),super(r),e||(e=Object(c["e"])(this.constructor,"defaultUrl")()),"string"===typeof e?Object(c["d"])(this,"connection",Object.freeze({url:e})):Object(c["d"])(this,"connection",Object.freeze(Object(c["g"])(e))),this._nextId=42}get _cache(){return null==this._eventLoopCache&&(this._eventLoopCache={}),this._eventLoopCache}static defaultUrl(){return"http://localhost:8545"}detectNetwork(){return this._cache["detectNetwork"]||(this._cache["detectNetwork"]=this._uncachedDetectNetwork(),setTimeout(()=>{this._cache["detectNetwork"]=null},0)),this._cache["detectNetwork"]}_uncachedDetectNetwork(){return f(this,void 0,void 0,(function*(){yield w(0);let e=null;try{e=yield this.send("eth_chainId",[])}catch(t){try{e=yield this.send("net_version",[])}catch(t){}}if(null!=e){const r=Object(c["e"])(this.constructor,"getNetwork");try{return r(o["a"].from(e).toNumber())}catch(t){return g.throwError("could not detect network",l["b"].errors.NETWORK_ERROR,{chainId:e,event:"invalidNetwork",serverError:t})}}return g.throwError("could not detect network",l["b"].errors.NETWORK_ERROR,{event:"noNetwork"})}))}getSigner(e){return new k(_,this,e)}getUncheckedSigner(e){return this.getSigner(e).connectUnchecked()}listAccounts(){return this.send("eth_accounts",[]).then(e=>e.map(e=>this.formatter.address(e)))}send(e,t){const r={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"};this.emit("debug",{action:"request",request:Object(c["c"])(r),provider:this});const n=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(n&&this._cache[e])return this._cache[e];const o=Object(d["b"])(this.connection,JSON.stringify(r),v).then(e=>(this.emit("debug",{action:"response",request:r,response:e,provider:this}),e),e=>{throw this.emit("debug",{action:"response",error:e,request:r,provider:this}),e});return n&&(this._cache[e]=o,setTimeout(()=>{this._cache[e]=null},0)),o}prepareRequest(e,t){switch(e){case"getBlockNumber":return["eth_blockNumber",[]];case"getGasPrice":return["eth_gasPrice",[]];case"getBalance":return["eth_getBalance",[y(t.address),t.blockTag]];case"getTransactionCount":return["eth_getTransactionCount",[y(t.address),t.blockTag]];case"getCode":return["eth_getCode",[y(t.address),t.blockTag]];case"getStorageAt":return["eth_getStorageAt",[y(t.address),t.position,t.blockTag]];case"sendTransaction":return["eth_sendRawTransaction",[t.signedTransaction]];case"getBlock":return t.blockTag?["eth_getBlockByNumber",[t.blockTag,!!t.includeTransactions]]:t.blockHash?["eth_getBlockByHash",[t.blockHash,!!t.includeTransactions]]:null;case"getTransaction":return["eth_getTransactionByHash",[t.transactionHash]];case"getTransactionReceipt":return["eth_getTransactionReceipt",[t.transactionHash]];case"call":{const e=Object(c["e"])(this.constructor,"hexlifyTransaction");return["eth_call",[e(t.transaction,{from:!0}),t.blockTag]]}case"estimateGas":{const e=Object(c["e"])(this.constructor,"hexlifyTransaction");return["eth_estimateGas",[e(t.transaction,{from:!0})]]}case"getLogs":return t.filter&&null!=t.filter.address&&(t.filter.address=y(t.filter.address)),["eth_getLogs",[t.filter]];default:break}return null}perform(e,t){return f(this,void 0,void 0,(function*(){if("call"===e||"estimateGas"===e){const e=t.transaction;if(e&&null!=e.type&&o["a"].from(e.type).isZero()&&null==e.maxFeePerGas&&null==e.maxPriorityFeePerGas){const r=yield this.getFeeData();null==r.maxFeePerGas&&null==r.maxPriorityFeePerGas&&(t=Object(c["g"])(t),t.transaction=Object(c["g"])(e),delete t.transaction.type)}}const r=this.prepareRequest(e,t);null==r&&g.throwError(e+" not implemented",l["b"].errors.NOT_IMPLEMENTED,{operation:e});try{return yield this.send(r[0],r[1])}catch(n){return m(e,n,t)}}))}_startEvent(e){"pending"===e.tag&&this._startPending(),super._startEvent(e)}_startPending(){if(null!=this._pendingFilter)return;const e=this,t=this.send("eth_newPendingTransactionFilter",[]);this._pendingFilter=t,t.then((function(r){function n(){e.send("eth_getFilterChanges",[r]).then((function(r){if(e._pendingFilter!=t)return null;let n=Promise.resolve();return r.forEach((function(t){e._emitted["t:"+t.toLowerCase()]="pending",n=n.then((function(){return e.getTransaction(t).then((function(t){return e.emit("pending",t),null}))}))})),n.then((function(){return w(1e3)}))})).then((function(){if(e._pendingFilter==t)return setTimeout((function(){n()}),0),null;e.send("eth_uninstallFilter",[r])})).catch(e=>{})}return n(),r})).catch(e=>{})}_stopEvent(e){"pending"===e.tag&&0===this.listenerCount("pending")&&(this._pendingFilter=null),super._stopEvent(e)}static hexlifyTransaction(e,t){const r=Object(c["g"])(O);if(t)for(const o in t)t[o]&&(r[o]=!0);Object(c["b"])(e,r);const n={};return["gasLimit","gasPrice","type","maxFeePerGas","maxPriorityFeePerGas","nonce","value"].forEach((function(t){if(null==e[t])return;const r=Object(s["g"])(e[t]);"gasLimit"===t&&(t="gas"),n[t]=r})),["from","to","data"].forEach((function(t){null!=e[t]&&(n[t]=Object(s["i"])(e[t]))})),e.accessList&&(n["accessList"]=Object(u["b"])(e.accessList)),n}}},5553:function(e,t,r){"use strict";function n(e){e=e.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}r.d(t,"a",(function(){return n}))},"6e45":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return u}));var n=r("549e"),o=r("ffb2"),s=r("ff09");const i=new o["b"](s["a"]);let c=null;try{if(c=window,null==c)throw new Error("try next")}catch(d){try{if(c=e,null==c)throw new Error("try next")}catch(d){c={}}}let a=c.crypto||c.msCrypto;function u(e){(e<=0||e>1024||e%1||e!=e)&&i.throwArgumentError("invalid length","length",e);const t=new Uint8Array(e);return a.getRandomValues(t),Object(n["a"])(t)}a&&a.getRandomValues||(i.warn("WARNING: Missing strong random number source"),a={getRandomValues:function(e){return i.throwError("no secure random source avaialble",o["b"].errors.UNSUPPORTED_OPERATION,{operation:"crypto.getRandomValues"})}})}).call(this,r("c8ba"))},"7b64":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("e36d"),o=r("9bda"),s=r("3e80"),i=r("ffb2"),c=r("4a45");let a=null;try{if(a=WebSocket,null==a)throw new Error("inject please")}catch(p){const e=new i["b"](c["a"]);a=function(){e.throwError("WebSockets not supported in this environment",i["b"].errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var u=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};const d=new i["b"](c["a"]);let l=1;class h extends s["a"]{constructor(e,t){"any"===t&&d.throwError("WebSocketProvider does not support 'any' network yet",i["b"].errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),super(e,t),this._pollingInterval=-1,this._wsReady=!1,Object(o["d"])(this,"_websocket",new a(this.connection.url)),Object(o["d"])(this,"_requests",{}),Object(o["d"])(this,"_subs",{}),Object(o["d"])(this,"_subIds",{}),Object(o["d"])(this,"_detectNetwork",super.detectNetwork()),this._websocket.onopen=()=>{this._wsReady=!0,Object.keys(this._requests).forEach(e=>{this._websocket.send(this._requests[e].payload)})},this._websocket.onmessage=e=>{const t=e.data,r=JSON.parse(t);if(null!=r.id){const e=String(r.id),n=this._requests[e];if(delete this._requests[e],void 0!==r.result)n.callback(null,r.result),this.emit("debug",{action:"response",request:JSON.parse(n.payload),response:r.result,provider:this});else{let e=null;r.error?(e=new Error(r.error.message||"unknown error"),Object(o["d"])(e,"code",r.error.code||null),Object(o["d"])(e,"response",t)):e=new Error("unknown error"),n.callback(e,void 0),this.emit("debug",{action:"response",error:e,request:JSON.parse(n.payload),provider:this})}}else if("eth_subscription"===r.method){const e=this._subs[r.params.subscription];e&&e.processFunc(r.params.result)}else console.warn("this should not happen")};const r=setInterval(()=>{this.emit("poll")},1e3);r.unref&&r.unref()}detectNetwork(){return this._detectNetwork}get pollingInterval(){return 0}resetEventsBlock(e){d.throwError("cannot reset events block on WebSocketProvider",i["b"].errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}set pollingInterval(e){d.throwError("cannot set polling interval on WebSocketProvider",i["b"].errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}poll(){return u(this,void 0,void 0,(function*(){return null}))}set polling(e){e&&d.throwError("cannot set polling on WebSocketProvider",i["b"].errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}send(e,t){const r=l++;return new Promise((n,o)=>{function s(e,t){return e?o(e):n(t)}const i=JSON.stringify({method:e,params:t,id:r,jsonrpc:"2.0"});this.emit("debug",{action:"request",request:JSON.parse(i),provider:this}),this._requests[String(r)]={callback:s,payload:i},this._wsReady&&this._websocket.send(i)})}static defaultUrl(){return"ws://localhost:8546"}_subscribe(e,t,r){return u(this,void 0,void 0,(function*(){let n=this._subIds[e];null==n&&(n=Promise.all(t).then(e=>this.send("eth_subscribe",e)),this._subIds[e]=n);const o=yield n;this._subs[o]={tag:e,processFunc:r}}))}_startEvent(e){switch(e.type){case"block":this._subscribe("block",["newHeads"],e=>{const t=n["a"].from(e.number).toNumber();this._emitted.block=t,this.emit("block",t)});break;case"pending":this._subscribe("pending",["newPendingTransactions"],e=>{this.emit("pending",e)});break;case"filter":this._subscribe(e.tag,["logs",this._getFilter(e.filter)],t=>{null==t.removed&&(t.removed=!1),this.emit(e.filter,this.formatter.filterLog(t))});break;case"tx":{const t=e=>{const t=e.hash;this.getTransactionReceipt(t).then(e=>{e&&this.emit(t,e)})};t(e),this._subscribe("tx",["newHeads"],e=>{this._events.filter(e=>"tx"===e.type).forEach(t)});break}case"debug":case"poll":case"willPoll":case"didPoll":case"error":break;default:console.log("unhandled:",e);break}}_stopEvent(e){let t=e.tag;if("tx"===e.type){if(this._events.filter(e=>"tx"===e.type).length)return;t="tx"}else if(this.listenerCount(e.event))return;const r=this._subIds[t];r&&(delete this._subIds[t],r.then(e=>{this._subs[e]&&(delete this._subs[e],this.send("eth_unsubscribe",[e]))}))}destroy(){return u(this,void 0,void 0,(function*(){this._websocket.readyState===a.CONNECTING&&(yield new Promise(e=>{this._websocket.onopen=function(){e(!0)},this._websocket.onerror=function(){e(!1)}})),this._websocket.close(1e3)}))}}},bf37:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r("9bda"),o=r("ffb2"),s=r("4a45"),i=r("3e80"),c=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};const a=new o["b"](s["a"]);class u extends i["a"]{detectNetwork(){const e=Object.create(null,{detectNetwork:{get:()=>super.detectNetwork}});return c(this,void 0,void 0,(function*(){let t=this.network;return null==t&&(t=yield e.detectNetwork.call(this),t||a.throwError("no network detected",o["b"].errors.UNKNOWN_ERROR,{}),null==this._network&&(Object(n["d"])(this,"_network",t),this.emit("network",t,null))),t}))}}class d extends u{constructor(e,t){a.checkAbstract(new.target,d),e=Object(n["e"])(new.target,"getNetwork")(e),t=Object(n["e"])(new.target,"getApiKey")(t);const r=Object(n["e"])(new.target,"getUrl")(e,t);super(r,e),"string"===typeof t?Object(n["d"])(this,"apiKey",t):null!=t&&Object.keys(t).forEach(e=>{Object(n["d"])(this,e,t[e])})}_startPending(){a.warn("WARNING: API provider does not support pending filters")}isCommunityResource(){return!1}getSigner(e){return a.throwError("API provider does not support signing",o["b"].errors.UNSUPPORTED_OPERATION,{operation:"getSigner"})}listAccounts(){return Promise.resolve([])}static getApiKey(e){return e}static getUrl(e,t){return a.throwError("not implemented; sub-classes must override getUrl",o["b"].errors.NOT_IMPLEMENTED,{operation:"getUrl"})}}},e165:function(e,t,r){"use strict";r.r(t),r.d(t,"encode",(function(){return d})),r.d(t,"decode",(function(){return p}));var n=r("549e"),o=r("ffb2");const s="rlp/5.5.0",i=new o["b"](s);function c(e){const t=[];while(e)t.unshift(255&e),e>>=8;return t}function a(e,t,r){let n=0;for(let o=0;o<r;o++)n=256*n+e[t+o];return n}function u(e){if(Array.isArray(e)){let t=[];if(e.forEach((function(e){t=t.concat(u(e))})),t.length<=55)return t.unshift(192+t.length),t;const r=c(t.length);return r.unshift(247+r.length),r.concat(t)}Object(n["k"])(e)||i.throwArgumentError("RLP object must be BytesLike","object",e);const t=Array.prototype.slice.call(Object(n["a"])(e));if(1===t.length&&t[0]<=127)return t;if(t.length<=55)return t.unshift(128+t.length),t;const r=c(t.length);return r.unshift(183+r.length),r.concat(t)}function d(e){return Object(n["i"])(u(e))}function l(e,t,r,n){const s=[];while(r<t+1+n){const c=h(e,r);s.push(c.result),r+=c.consumed,r>t+1+n&&i.throwError("child data too short",o["b"].errors.BUFFER_OVERRUN,{})}return{consumed:1+n,result:s}}function h(e,t){if(0===e.length&&i.throwError("data too short",o["b"].errors.BUFFER_OVERRUN,{}),e[t]>=248){const r=e[t]-247;t+1+r>e.length&&i.throwError("data short segment too short",o["b"].errors.BUFFER_OVERRUN,{});const n=a(e,t+1,r);return t+1+r+n>e.length&&i.throwError("data long segment too short",o["b"].errors.BUFFER_OVERRUN,{}),l(e,t,t+1+r,r+n)}if(e[t]>=192){const r=e[t]-192;return t+1+r>e.length&&i.throwError("data array too short",o["b"].errors.BUFFER_OVERRUN,{}),l(e,t,t+1,r)}if(e[t]>=184){const r=e[t]-183;t+1+r>e.length&&i.throwError("data array too short",o["b"].errors.BUFFER_OVERRUN,{});const s=a(e,t+1,r);t+1+r+s>e.length&&i.throwError("data array too short",o["b"].errors.BUFFER_OVERRUN,{});const c=Object(n["i"])(e.slice(t+1+r,t+1+r+s));return{consumed:1+r+s,result:c}}if(e[t]>=128){const r=e[t]-128;t+1+r>e.length&&i.throwError("data too short",o["b"].errors.BUFFER_OVERRUN,{});const s=Object(n["i"])(e.slice(t+1,t+1+r));return{consumed:1+r,result:s}}return{consumed:1,result:Object(n["i"])(e[t])}}function p(e){const t=Object(n["a"])(e),r=h(t,0);return r.consumed!==t.length&&i.throwArgumentError("invalid rlp data","data",e),r.result}},ff09:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n="random/5.5.0"}}]);