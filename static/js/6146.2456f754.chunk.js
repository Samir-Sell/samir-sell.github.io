"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6146],{81949:function(t,e,r){function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function u(t,e){return new Float64Array(t,e,16)}r.d(e,{I:function(){return o},a:function(){return u},b:function(){return i},c:function(){return n}});var o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:n,createView:u,fromValues:function(t,e,r,n,i,u,o,c,a,s,f,h,l,_,v,g){return[t,e,r,n,i,u,o,c,a,s,f,h,l,_,v,g]}},Symbol.toStringTag,{value:"Module"}))},71417:function(t,e,r){r.d(e,{a:function(){return M},c:function(){return g},g:function(){return d},h:function(){return m},j:function(){return P},m:function(){return A}});r(93169);var n,i=r(32718),u=r(16889),o=r(92026),c=r(14226),a=r(11186),s=r(71353),f=r(90045),h=r(67077);!function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(n||(n={}));var l=r(40885),_=r(40927),v=r(51378);function g(){return(0,h.c)()}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g();return(0,f.c)(e,t)}function M(t){return t[3]}function d(t){return t}function y(t,e,r){if((0,o.Wi)(e))return!1;var n=e.origin,i=e.direction,u=I;u[0]=n[0]-t[0],u[1]=n[1]-t[1],u[2]=n[2]-t[2];var c=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===c)return!1;var a=2*(i[0]*u[0]+i[1]*u[1]+i[2]*u[2]),s=a*a-4*c*(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]-t[3]*t[3]);if(s<0)return!1;var f=Math.sqrt(s),h=(-a-f)/(2*c),l=(-a+f)/(2*c);return(h<0||l<h&&l>0)&&(h=l),!(h<0)&&(r&&(r[0]=n[0]+i[0]*h,r[1]=n[1]+i[1]*h,r[2]=n[2]+i[2]*h),!0)}var I=(0,s.c)();function P(t,e){return y(t,e,null)}function b(t,e,r){var n=v.WM.get(),i=v.MP.get();(0,a.f)(n,e.origin,e.direction);var u=M(t);(0,a.f)(r,n,e.origin),(0,a.g)(r,r,1/(0,a.l)(r)*u);var o=N(t,e.origin),s=(0,_.EU)(e.origin,r);return(0,c.d)(i,s+o,n),(0,a.m)(r,r,i),r}function p(t,e,r){var n=(0,a.b)(v.WM.get(),e,t),i=(0,a.g)(v.WM.get(),n,t[3]/(0,a.l)(n));return(0,a.a)(r,i,t)}function N(t,e){var r=(0,a.b)(v.WM.get(),e,t),n=(0,a.l)(r),i=M(t),o=i+Math.abs(i-n);return(0,u.ZF)(i/o)}var w=(0,s.c)();function E(t,e,r,i){var o=(0,a.b)(w,e,t);switch(r){case n.X:var c=(0,u.jE)(o,w)[2];return(0,a.s)(i,-Math.sin(c),Math.cos(c),0);case n.Y:var s=(0,u.jE)(o,w),f=s[1],h=s[2],l=Math.sin(f);return(0,a.s)(i,-l*Math.cos(h),-l*Math.sin(h),Math.cos(f));case n.Z:return(0,a.n)(i,o);default:return}}function k(t,e){var r=(0,a.b)(S,e,t);return(0,a.l)(r)-t[3]}function A(t,e){var r=(0,a.d)(t,e),n=M(t);return r<=n*n}var S=(0,s.c)(),B=g();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:k,angleToSilhouette:N,axisAt:E,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,r){return y(t,e,r)?r:((0,l.JI)(e,t,r),p(t,r,r))},closestPointOnSilhouette:b,containsPoint:A,copy:m,create:g,distanceToSilhouette:function(t,e){var r=(0,a.b)(v.WM.get(),e,t),n=(0,a.p)(r),i=t[3]*t[3];return Math.sqrt(Math.abs(n-i))},elevate:function(t,e,r){return t!==r&&(0,a.c)(r,t),r[3]=t[3]+e,r},fromCenterAndRadius:function(t,e){return(0,h.f)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:function(t,e,r,n){return(0,h.f)(t,e,r,n)},getCenter:d,getRadius:M,intersectRay:y,intersectRayClosestSilhouette:function(t,e,r){if(y(t,e,r))return r;var n=b(t,e,v.WM.get());return(0,a.a)(r,e.origin,(0,a.g)(v.WM.get(),e.direction,(0,a.i)(e.origin,n)/(0,a.l)(e.direction))),r},intersectsRay:P,projectPoint:p,setAltitudeAt:function(t,e,r,i){var u=k(t,e),o=E(t,e,n.Z,S),c=(0,a.g)(S,o,r-u);return(0,a.a)(i,e,c)},setExtent:function(t,e,r){return i.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===r?r:m(t,r)},tmpSphere:B,wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},21530:function(t,e,r){r.d(e,{x:function(){return o}});var n=r(15671),i=r(43144),u=r(70758),o=function(){function t(e){(0,n.Z)(this,t),this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}return(0,i.Z)(t,[{key:"get",value:function(){var t=this;return 0===this._itemsPtr&&(0,u.Y)((function(){return t._reset()})),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}},{key:"_reset",value:function(){var t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*c);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}},{key:"_grow",value:function(){for(var t=0;t<Math.max(8,Math.min(this._items.length,c));t++)this._items.push(this._allocator())}}]),t}(),c=1024},76146:function(t,e,r){r(16889),r(11186);var n=r(71353);r(71417),r(40927),r(51378);(0,n.c)(),(0,n.c)(),(0,n.c)(),(0,n.c)(),(0,n.c)();(0,n.c)(),(0,n.c)(),(0,n.c)(),(0,n.c)(),(0,n.c)();var i;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(i||(i={}));i.INFINITE_MIN,i.INFINITE_MAX,i.INFINITE_MAX},40885:function(t,e,r){r.d(e,{JI:function(){return s},Ue:function(){return o},re:function(){return a}});r(63780);var n=r(21530),i=r(11186),u=r(71353);r(51378);function o(t){return t?c((0,u.a)(t.origin),(0,u.a)(t.direction)):c((0,u.c)(),(0,u.c)())}function c(t,e){return{origin:t,direction:e}}function a(t,e){var r=f.get();return r.origin=t,r.direction=e,r}function s(t,e,r){var n=(0,i.e)(t.direction,(0,i.b)(r,e,t.origin));return(0,i.a)(r,t.origin,(0,i.g)(r,t.direction,n)),r}var f=new n.x((function(){return o()}))},40927:function(t,e,r){r.d(e,{EU:function(){return o}});var n=r(16889),i=r(11186),u=r(71353);function o(t,e){var r=(0,i.e)(t,e)/((0,i.l)(t)*(0,i.l)(e));return-(0,n.ZF)(r)}(0,u.c)(),(0,u.c)()},51378:function(t,e,r){r.d(e,{MP:function(){return m},WM:function(){return g}});var n=r(15671),i=r(43144),u=r(59896),o=r(70758),c=r(11873),a=r(81949),s=r(98131),f=r(6394),h=r(71353),l=r(67077),_=function(){function t(e,r,i){(0,n.Z)(this,t),this._itemByteSize=e,this._itemCreate=r,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}return(0,i.Z)(t,[{key:"get",value:function(){var t=this;0===this._itemsPtr&&(0,o.Y)((function(){return t._reset()}));for(var e=Math.floor(this._itemsPtr/this._itemsPerBuffer);this._buffers.length<=e;){for(var r=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize),n=0;n<this._itemsPerBuffer;++n)this._items.push(this._itemCreate(r,n*this._itemByteSize));this._buffers.push(r)}return this._items[this._itemsPtr++]}},{key:"_reset",value:function(){for(var t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}},{key:"test",get:function(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}],[{key:"createVec2f64",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return new t(16,f.c,e)}},{key:"createVec3f64",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return new t(24,h.b,e)}},{key:"createVec4f64",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return new t(32,l.a,e)}},{key:"createMat3f64",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return new t(72,c.a,e)}},{key:"createMat4f64",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return new t(128,a.a,e)}},{key:"createQuatf64",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return new t(32,s.c,e)}}]),t}(),v=4*u.Y8.KILOBYTES,g=(_.createVec2f64(),_.createVec3f64()),m=(_.createVec4f64(),_.createMat3f64(),_.createMat4f64());_.createQuatf64()}}]);
//# sourceMappingURL=6146.2456f754.chunk.js.map