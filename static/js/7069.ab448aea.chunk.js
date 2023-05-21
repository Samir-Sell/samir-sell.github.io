"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7069],{97069:function(n,t,e){e.r(t),e.d(t,{l:function(){return a}});var r,o,i={},u={get exports(){return i},set exports(n){i=n}};r=u,void 0!==(o={load:function(n){var t=n.locateFile,e={},o=void 0!==o?o:{},i=function(){var n;return{resolve:function(t){return n(t)},promise:new Promise((function(t){return n=t}))}}();o.locateFile=t,o.onRuntimeInitialized=function(){i.resolve(e)},e.Module=o,e.whenLoaded=function(){return i.promise};var u,a={};for(u in o)o.hasOwnProperty(u)&&(a[u]=o[u]);var f,s,c,l,p,m="object"==typeof window,h="function"==typeof importScripts,d="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,g="";d?(g=h?require("path").dirname(g)+"/":__dirname+"/",f=function(n,t){return l||(l=require("fs")),p||(p=require("path")),n=p.normalize(n),l.readFileSync(n,t?null:"utf8")},c=function(n){var t=f(n,!0);return t.buffer||(t=new Uint8Array(t)),function(n,t){n||L("Assertion failed: "+t)}(t.buffer),t},s=function(n,t,e){l||(l=require("fs")),p||(p=require("path")),n=p.normalize(n),l.readFile(n,(function(n,r){n?e(n):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),r.exports=o,process.on("uncaughtException",(function(n){if(!(n instanceof nn))throw n})),process.on("unhandledRejection",L),o.inspect=function(){return"[Emscripten Module object]"}):(m||h)&&(h?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),g=0!==g.indexOf("blob:")?g.substr(0,g.lastIndexOf("/")+1):"",f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},h&&(c=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),s=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var y=o.print||console.log.bind(console),v=o.printErr||console.warn.bind(console);for(u in a)a.hasOwnProperty(u)&&(o[u]=a[u]);a=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit;var w,b,A=0,_=function(n){A=n},E=function(){return A};o.wasmBinary&&(w=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&L("no native wasm support detected");var R,P,S,T,j=!1,I="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function x(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&I)return I.decode(n.subarray(t,o));for(var i="";t<o;){var u=n[t++];if(128&u){var a=63&n[t++];if(192!=(224&u)){var f=63&n[t++];if((u=224==(240&u)?(15&u)<<12|a<<6|f:(7&u)<<18|a<<12|f<<6|63&n[t++])<65536)i+=String.fromCharCode(u);else{var s=u-65536;i+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else i+=String.fromCharCode((31&u)<<6|a)}else i+=String.fromCharCode(u)}return i}function H(n,t){return n%t>0&&(n+=t-n%t),n}function M(n){R=n,o.HEAP8=new Int8Array(n),o.HEAP16=new Int16Array(n),o.HEAP32=S=new Int32Array(n),o.HEAPU8=P=new Uint8Array(n),o.HEAPU16=new Uint16Array(n),o.HEAPU32=new Uint32Array(n),o.HEAPF32=new Float32Array(n),o.HEAPF64=new Float64Array(n)}o.INITIAL_MEMORY;var C=[],F=[],k=[];function q(n){C.unshift(n)}function O(n){k.unshift(n)}var W=0,U=null;function L(n){throw o.onAbort&&o.onAbort(n),v(n+=""),j=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}o.preloadedImages={},o.preloadedAudios={};var B,D="data:application/octet-stream;base64,";function z(n){return n.startsWith(D)}function N(n){return n.startsWith("file://")}function G(n){try{if(n==B&&w)return new Uint8Array(w);if(c)return c(n);throw"both async and sync fetching of the wasm failed"}catch(v){L(v)}}function X(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?T.get(e)():T.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(o)}}function Y(n){try{return b.grow(n-R.byteLength+65535>>>16),M(b.buffer),1}catch(r){}}z(B="libtess.wasm")||(B=function(n){return o.locateFile?o.locateFile(n,g):g+n}(B));var J={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=J.buffers[n];0===t||10===t?((1===n?y:v)(x(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return J.varargs+=4,S[J.varargs-4>>2]},getStr:function(n){return function(n,t){return n?x(P,n,t):""}(n)},get64:function(n,t){return n}},K={h:function(){throw"longjmp"},l:function(n,t,e){P.copyWithin(n,t,t+e)},g:function(n){var t=P.length,e=2147483648;if((n>>>=0)>e)return!1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);if(o=Math.min(o,n+100663296),Y(Math.min(e,H(Math.max(n,o),65536))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var u=S[t+8*i>>2],a=S[t+(8*i+4)>>2],f=0;f<a;f++)J.printChar(n,P[u+f]);o+=a}return S[r>>2]=o,0},b:function(){return E()},k:function(n){var e=V();try{return T.get(n)()}catch(t){if(Z(e),t!==t+0&&"longjmp"!==t)throw t;$(1,0)}},d:function(n,t){var r=V();try{return T.get(n)(t)}catch(e){if(Z(r),e!==e+0&&"longjmp"!==e)throw e;$(1,0)}},j:function(n,t,e){var r=V();try{return T.get(n)(t,e)}catch(o){if(Z(r),o!==o+0&&"longjmp"!==o)throw o;$(1,0)}},i:function(n,t,e,r){var o=V();try{return T.get(n)(t,e,r)}catch(i){if(Z(o),i!==i+0&&"longjmp"!==i)throw i;$(1,0)}},e:function(n,t){var r=V();try{T.get(n)(t)}catch(e){if(Z(r),e!==e+0&&"longjmp"!==e)throw e;$(1,0)}},c:function(n,t,e){var r=V();try{T.get(n)(t,e)}catch(o){if(Z(r),o!==o+0&&"longjmp"!==o)throw o;$(1,0)}},a:function(n){_(n)}};(function(){var n={a:K};function t(n,t){var e=n.exports;o.asm=e,M((b=o.asm.m).buffer),T=o.asm.q,function(n){F.unshift(n)}(o.asm.n),function(n){if(W--,o.monitorRunDependencies&&o.monitorRunDependencies(W),0==W&&U){var t=U;U=null,t()}}()}function e(n){t(n.instance)}function r(t){return function(){if(!w&&(m||h)){if("function"==typeof fetch&&!N(B))return fetch(B,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+B+"'";return n.arrayBuffer()})).catch((function(){return G(B)}));if(s)return new Promise((function(n,t){s(B,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return G(B)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){v("failed to asynchronously prepare wasm: "+n),L(n)}))}if(W++,o.monitorRunDependencies&&o.monitorRunDependencies(W),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(i){return v("Module.instantiateWasm callback failed with error: "+i),!1}w||"function"!=typeof WebAssembly.instantiateStreaming||z(B)||N(B)||"function"!=typeof fetch?r(e):fetch(B,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return v("wasm streaming compile failed: "+n),v("falling back to ArrayBuffer instantiation"),r(e)}))}))})(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.n).apply(null,arguments)},o._malloc=function(){return(o._malloc=o.asm.o).apply(null,arguments)},o._free=function(){return(o._free=o.asm.p).apply(null,arguments)},o._triangulate=function(){return(o._triangulate=o.asm.r).apply(null,arguments)};var Q,V=o.stackSave=function(){return(V=o.stackSave=o.asm.s).apply(null,arguments)},Z=o.stackRestore=function(){return(Z=o.stackRestore=o.asm.t).apply(null,arguments)},$=o._setThrew=function(){return($=o._setThrew=o.asm.u).apply(null,arguments)};function nn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function tn(n){function t(){Q||(Q=!0,o.calledRun=!0,j||(X(F),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)O(o.postRun.shift());X(k)}()))}W>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)q(o.preRun.shift());X(C)}(),W>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(U=function n(){Q||tn(),Q||(U=n)},o.run=tn,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();tn();var en=null,rn=null,on=null,un=null,an=e.Module,fn=0;return e.triangulate=function(n,t,e){en||(en=an._triangulate);var r=an.HEAPF32,o=an.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT;e>fn&&(fn=e,on&&(an._free(on),on=0),rn&&(an._free(rn),rn=0)),on||(on=an._malloc(e*i)),un||(un=an._malloc(4e3*o));var u=2*e;rn||(rn=an._malloc(u*i)),(r=an.HEAPF32).set(n,on/i),an.HEAP32.set(t,un/o);var a=u/2,f=en(on,un,Math.min(t.length,4e3),2,rn,a),s=2*f,c=(r=an.HEAPF32).slice(rn/i,rn/i+s),l={};return l.buffer=c,l.vertexCount=f,l},e.whenLoaded()}})&&(r.exports=o);var a=function(n,t){for(var e=function(){var e=t[r];if("string"!=typeof e&&!Array.isArray(e)){var o=function(t){if("default"!==t&&!(t in n)){var r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}};for(var i in e)o(i)}},r=0;r<t.length;r++)e();return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:i},[i])}}]);
//# sourceMappingURL=7069.ab448aea.chunk.js.map