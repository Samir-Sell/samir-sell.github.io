/*! For license information please see 1307.7a3a792c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1307],{99580:function(t,n,e){e.d(n,{I:function(){return w},d:function(){return k}});var r=e(4942),i=e(74165),a=e(15671),c=e(43144),o=e(60136),u=e(29388),s=e(15861),l=e(6638),f=e(15945),m=e(69307),h="flip-rtl",p={},d={},g={s:16,m:24,l:32};function v(t){return b.apply(this,arguments)}function b(){return(b=(0,s.Z)((0,i.Z)().mark((function t(n){var e,r,a,c,o,u,s,f;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.icon,r=n.scale,a=g[r],c=y(e),o="F"===c.charAt(c.length-1),u=o?c.substring(0,c.length-1):c,s="".concat(u).concat(a).concat(o?"F":""),!p[s]){t.next=8;break}return t.abrupt("return",p[s]);case 8:return d[s]||(d[s]=fetch((0,l.K3)("./assets/icon/".concat(s,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(s,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,d[s];case 11:return f=t.sent,p[s]=f,t.abrupt("return",f);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){var n=!isNaN(Number(t.charAt(0))),e=t.split("-");if(e.length>0){var r=/[a-z]/i;t=e.map((function(t,n){return t.replace(r,(function(t,e){return 0===n&&0===e?t:t.toUpperCase()}))})).join("")}return n?"i".concat(t):t}var w=(0,l.GH)(function(t){(0,o.Z)(e,t);var n=(0,u.Z)(e);function e(){var t;return(0,a.Z)(this,e),(t=n.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.textLabel=void 0,t.pathData=void 0,t.visible=!1,t}return(0,c.Z)(e,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,n=this.el,e=this.flipRtl,i=this.pathData,a=this.scale,c=this.textLabel,o=(0,f.c)(n),u=g[a],s=!!c,m=[].concat(i||"");return(0,l.h)(l.AA,{"aria-hidden":(0,f.t)(!s),"aria-label":s?c:null,role:s?"img":null},(0,l.h)("svg",{"aria-hidden":"true",class:(t={},(0,r.Z)(t,h,"rtl"===o&&e),(0,r.Z)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(u," ").concat(u),width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((function(t){return"string"===typeof t?(0,l.h)("path",{d:t}):(0,l.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=(0,s.Z)((0,i.Z)().mark((function t(){var n,e,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.icon,e=this.scale,r=this.visible,l.Z5.isBrowser&&n&&r){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,v({icon:n,scale:e});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var n=this;this.intersectionObserver=(0,m.c)("intersection",(function(e){e.forEach((function(e){e.isIntersecting&&(n.intersectionObserver.disconnect(),n.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}}]),e}(l.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function k(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,w)}))}}k()},78834:function(t,n,e){function r(t){return"Enter"===t||" "===t}e.d(n,{i:function(){return r},n:function(){return i}});var i=["0","1","2","3","4","5","6","7","8","9"]},44497:function(t,n,e){e.d(n,{a:function(){return a},c:function(){return o},s:function(){return c}});var r=new WeakMap,i=new WeakMap;function a(t){i.set(t,new Promise((function(n){return r.set(t,n)})))}function c(t){r.get(t)()}function o(t){return i.get(t)}},8793:function(t,n,e){e.d(n,{a:function(){return D},c:function(){return F},d:function(){return z},g:function(){return S},i:function(){return h},n:function(){return N},p:function(){return p},s:function(){return y}});var r=e(93433),i=e(29439),a=e(15671),c=e(43144),o=e(15945),u=e(78834),s=e(69307),l=new RegExp("-","g"),f=new RegExp("\\.?0+$"),m=function(){function t(n){var e=this;if((0,a.Z)(this,t),this.add=function(n){return t.fromBigInt(e.value+new t(n).value)},this.subtract=function(n){return t.fromBigInt(e.value-new t(n).value)},this.multiply=function(n){return t._divRound(e.value*new t(n).value,t.SHIFT)},this.divide=function(n){return t._divRound(e.value*t.SHIFT,new t(n).value)},n instanceof t)return n;var r=String(n).split(".").concat(""),c=(0,i.Z)(r,2),o=c[0],u=c[1];this.value=BigInt(o+u.padEnd(t.DECIMALS,"0").slice(0,t.DECIMALS))+BigInt(t.ROUNDED&&u[t.DECIMALS]>="5"),this.isNegative="-"===n.charAt(0)}return(0,c.Z)(t,[{key:"getIntegersAndDecimals",value:function(){var n=this.value.toString().replace(l,"").padStart(t.DECIMALS+1,"0");return{integers:n.slice(0,-t.DECIMALS),decimals:n.slice(-t.DECIMALS).replace(f,"")}}},{key:"toString",value:function(){var t=this.getIntegersAndDecimals(),n=t.integers,e=t.decimals;return"".concat(this.isNegative?"-":"").concat(n).concat(e.length?"."+e:"")}},{key:"formatToParts",value:function(t){var n=this.getIntegersAndDecimals(),e=n.integers,r=n.decimals,i=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&i.unshift({type:"minusSign",value:t.minusSign}),r.length&&(i.push({type:"decimal",value:t.decimal}),r.split("").forEach((function(t){return i.push({type:"fraction",value:t})}))),i}},{key:"format",value:function(t){var n=this.getIntegersAndDecimals(),e=n.integers,r=n.decimals,i="".concat(this.isNegative?t.minusSign:"").concat(t.numberFormatter.format(BigInt(e))),a=r.length?"".concat(t.decimal).concat(r.split("").map((function(n){return t.numberFormatter.format(Number(n))})).join("")):"";return"".concat(i).concat(a)}}]),t}();function h(t){return!(!t||isNaN(Number(t)))}function p(t){return t&&(n=t,u.n.some((function(t){return n.includes(t)})))?w(t,(function(t){var n=!1,e=t.split("").filter((function(t,e){return t.match(/\./g)&&!n?(n=!0,!0):!(!t.match(/\-/g)||0!==e)||u.n.includes(t)})).reduce((function(t,n){return t+n}));return h(e)?new m(e).toString():""})):"";var n}m.DECIMALS=100,m.ROUNDED=!0,m.SHIFT=BigInt("1"+"0".repeat(m.DECIMALS)),m._divRound=function(t,n){return m.fromBigInt(t/n+(m.ROUNDED?t*BigInt(2)/n%BigInt(2):BigInt(0)))},m.fromBigInt=function(t){return Object.assign(Object.create(m.prototype),{value:t})};var d=/^([-0])0+(?=\d)/,g=/(?!^\.)\.$/,v=/(?!^-)-/g,b=/^-\b0\b\.?0*$/,y=function(t){return w(t,(function(t){var n=t.replace(v,"").replace(g,"").replace(d,"$1");return h(n)?b.test(n)?n:new m(n).toString():t}))};function w(t,n){if(!t)return t;var e=t.toLowerCase().indexOf("e")+1;return e?t.replace(/[eE]*$/g,"").substring(0,e).concat(t.slice(e).replace(/[eE]/g,"")).split(/[eE]/).map((function(t,e){return n(1===e?t.replace(/\./g,""):t)})).join("e").replace(/^e/,"1e"):n(t)}var k="en",_=["ar","bg","bs","ca","cs","da","de","el",k,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],Z=["ar","bg","bs","ca","cs","da","de","de-CH","el",k,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],I=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],E=function(t){return I.includes(t)},x=(new Intl.NumberFormat).resolvedOptions().numberingSystem,D="arab"!==x&&E(x)?x:"latn";function S(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr",e="cldr"===n?Z:_;return t?e.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===n&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,(function(t,n,e){return"".concat(n,"-").concat(e.toUpperCase())})),e.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":e.includes(t)?t:(console.warn('Translations for the "'.concat(t,'" locale are not available and will fall back to the default, English (en).')),k)):k}var O=new Set;function F(t){!function(t){t.effectiveLocale=function(t){var n;return t.el.lang||(null===(n=(0,o.r)(t.el,"[lang]"))||void 0===n?void 0:n.lang)||document.documentElement.lang||k}(t)}(t),0===O.size&&(null===C||void 0===C||C.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),O.add(t)}function z(t){O.delete(t),0===O.size&&C.disconnect()}var C=(0,s.c)("mutation",(function(t){t.forEach((function(t){var n=t.target;O.forEach((function(t){if(!!(0,o.v)(n,t.el)){var e=(0,o.r)(t.el,"[lang]");if(e){var r=e.lang;t.effectiveLocale=e.hasAttribute("lang")&&""===r?k:r}else t.effectiveLocale=k}}))}))}));var N=new(function(){function t(){var n=this;(0,a.Z)(this,t),this.delocalize=function(t){return n._numberFormatOptions?w(t,(function(t){return t.trim().replace(new RegExp("[".concat(n._minusSign,"]"),"g"),"-").replace(new RegExp("[".concat(n._group,"]"),"g"),"").replace(new RegExp("[".concat(n._decimal,"]"),"g"),".").replace(new RegExp("[".concat(n._digits.join(""),"]"),"g"),n._getDigitIndex)})):t},this.localize=function(t){return n._numberFormatOptions?w(t,(function(t){return h(t.trim())?new m(t.trim()).format(n).replace(new RegExp("[".concat(n._actualGroup,"]"),"g"),n._group):t})):t}}return(0,c.Z)(t,[{key:"group",get:function(){return this._group}},{key:"decimal",get:function(){return this._decimal}},{key:"minusSign",get:function(){return this._minusSign}},{key:"digits",get:function(){return this._digits}},{key:"numberFormatter",get:function(){return this._numberFormatter}},{key:"numberFormatOptions",get:function(){return this._numberFormatOptions},set:function(t){var n;if(t.locale=S(null===t||void 0===t?void 0:t.locale),t.numberingSystem=(n=null===t||void 0===t?void 0:t.numberingSystem,E(n)?n:D),(this._numberFormatOptions||t.locale!==k||t.numberingSystem!==D||2!==Object.keys(t).length)&&JSON.stringify(this._numberFormatOptions)!==JSON.stringify(t)){this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=(0,r.Z)(new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)).reverse();var e=new Map(this._digits.map((function(t,n){return[t,n]}))),i=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=i.find((function(t){return"group"===t.type})).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=i.find((function(t){return"decimal"===t.type})).value,this._minusSign=i.find((function(t){return"minusSign"===t.type})).value,this._getDigitIndex=function(t){return e.get(t)}}}}]),t}())},69307:function(t,n,e){e.d(n,{c:function(){return l}});var r=e(15671),i=e(43144),a=e(11752),c=e(61120),o=e(60136),u=e(29388),s=e(6638);function l(t,n,e){if(s.Z5.isBrowser){var l=function(t){var n=function(t){(0,o.Z)(e,t);var n=(0,u.Z)(e);function e(t){var i;return(0,r.Z)(this,e),(i=n.call(this,t)).observedEntry=[],i.callback=t,i}return(0,i.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,a.Z)((0,c.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,r=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,a.Z)((0,c.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),r.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new l(n,e)}}},66804:function(t,n,e){e.d(n,{c:function(){return y},d:function(){return w},s:function(){return h},u:function(){return v}});var r=e(74165),i=e(1413),a=e(15861),c=e(6638),o=e(8793),u={};function s(t,n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(n,e){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i="".concat(e,"_").concat(n),!u[i]){t.next=3;break}return t.abrupt("return",u[i]);case 3:return u[i]=fetch((0,c.K3)("./assets/".concat(e,"/t9n/messages_").concat(n,".json"))).then((function(t){return t.ok||f(),t.json()})).catch((function(){return f()})),t.abrupt("return",u[i]);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){throw new Error("could not fetch component message bundle")}function m(t){t.messages=(0,i.Z)((0,i.Z)({},t.defaultMessages),t.messageOverrides)}function h(t){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(n,n.effectiveLocale);case 2:n.defaultMessages=t.sent,m(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function t(n,e){var i,a,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.el,a=i.tagName.toLowerCase(),c=a.replace("calcite-",""),t.abrupt("return",s((0,o.g)(e,"t9n"),c));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)((0,r.Z)().mark((function t(n,e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(n,e);case 2:n.defaultMessages=t.sent,m(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){t.onMessagesChange=k}function w(t){t.onMessagesChange=void 0}function k(){m(this)}}}]);
//# sourceMappingURL=1307.7a3a792c.chunk.js.map