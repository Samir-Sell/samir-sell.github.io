"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7114],{13491:function(t,e,n){n.d(e,{Q:function(){return c}});var i=n(60136),r=n(29388),a=n(37762),o=n(15671),s=n(43144),u=n(63780),h=n(92026),l=n(27546),d=n(36231),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;(0,o.Z)(this,t),this._compareMinX=m,this._compareMinY=y,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}return(0,s.Z)(t,[{key:"destroy",value:function(){this.clear(),M.prune(),Y.prune(),X.prune(),Z.prune()}},{key:"all",value:function(t){this._all(this._data,t)}},{key:"search",value:function(t,e){var n=this._data,i=this._toBBox;if(k(t,n))for(M.clear();n;){for(var r=0,a=n.children.length;r<a;r++){var o=n.children[r],s=n.leaf?i(o):o;k(t,s)&&(n.leaf?e(o):p(t,s)?this._all(o,e):M.push(o))}n=M.pop()}}},{key:"collides",value:function(t){var e=this._data,n=this._toBBox;if(!k(t,e))return!1;for(M.clear();e;){for(var i=0,r=e.children.length;i<r;i++){var a=e.children[i],o=e.leaf?n(a):a;if(k(t,o)){if(e.leaf||p(t,o))return!0;M.push(a)}}e=M.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){var r=this._data;this._data=i,i=r}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this._data.height-1),this}},{key:"clear",value:function(){return this._data=new E([]),this}},{key:"remove",value:function(t){if(!t)return this;var e,n=this._data,i=null,r=0,a=!1,o=this._toBBox(t);for(X.clear(),Z.clear();n||X.length>0;){var s;if(n||(n=(0,h.j0)(X.pop()),i=X.data[X.length-1],r=null!==(s=Z.pop())&&void 0!==s?s:0,a=!0),n.leaf&&-1!==(e=(0,u.cq)(n.children,t,n.children.length,n.indexHint)))return n.children.splice(e,1),X.push(n),this._condense(X),this;a||n.leaf||!p(n,o)?i?(r++,n=i.children[r],a=!1):n=null:(X.push(n),Z.push(r),r=0,i=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this._data}},{key:"fromJSON",value:function(t){return this._data=t,this}},{key:"_all",value:function(t,e){var n=t;for(Y.clear();n;){var i;if(!0===n.leaf){var r,o=(0,a.Z)(n.children);try{for(o.s();!(r=o.n()).done;){e(r.value)}}catch(s){o.e(s)}finally{o.f()}}else Y.pushArray(n.children);n=null!==(i=Y.pop())&&void 0!==i?i:null}}},{key:"_build",value:function(t,e,n,i){var r=n-e+1,a=this._maxEntries;if(r<=a){var o=new E(t.slice(e,n+1));return f(o,this._toBBox),o}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,i-1)));var s=new S([]);s.height=i;var u=Math.ceil(r/a),h=u*Math.ceil(Math.sqrt(a));b(t,e,n,h,this._compareMinX);for(var l=e;l<=n;l+=h){var d=Math.min(l+h-1,n);b(t,l,d,u,this._compareMinY);for(var c=l;c<=d;c+=u){var v=Math.min(c+u-1,d);s.children.push(this._build(t,c,v,i-1))}}return f(s,this._toBBox),s}},{key:"_chooseSubtree",value:function(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){for(var r=void 0,a=1/0,o=1/0,s=0,u=e.children.length;s<u;s++){var h=e.children[s],l=g(h),d=x(t,h)-l;d<o?(o=d,a=l<a?l:a,r=h):d===o&&l<a&&(a=l,r=h)}e=r||e.children[0]}return e}},{key:"_insert",value:function(t,e,n){var i=this._toBBox,r=n?t:i(t);X.clear();var a=this._chooseSubtree(r,this._data,e,X);for(a.children.push(t),_(a,r);e>=0&&X.data[e].children.length>this._maxEntries;)this._split(X,e),e--;this._adjustParentBBoxes(r,X,e)}},{key:"_split",value:function(t,e){var n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);var a=this._chooseSplitIndex(n,r,i);if(a){var o=n.children.splice(a,n.children.length-a),s=n.leaf?new E(o):new S(o);s.height=n.height,f(n,this._toBBox),f(s,this._toBBox),e?t.data[e-1].children.push(s):this._splitRoot(n,s)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(t,e){this._data=new S([t,e]),this._data.height=t.height+1,f(this._data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(t,e,n){var i,r,a;i=r=1/0;for(var o=e;o<=n-e;o++){var s=v(t,0,o,this._toBBox),u=v(t,o,n,this._toBBox),h=B(s,u),l=g(s)+g(u);h<i?(i=h,a=o,r=l<r?l:r):h===i&&l<r&&(r=l,a=o)}return a}},{key:"_chooseSplitAxis",value:function(t,e,n){var i=t.leaf?this._compareMinX:m,r=t.leaf?this._compareMinY:y;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}},{key:"_allDistMargin",value:function(t,e,n,i){t.children.sort(i);for(var r=this._toBBox,a=v(t,0,e,r),o=v(t,n-e,n,r),s=I(a)+I(o),u=e;u<n-e;u++){var h=t.children[u];_(a,t.leaf?r(h):h),s+=I(a)}for(var l=n-e-1;l>=e;l--){var d=t.children[l];_(o,t.leaf?r(d):d),s+=I(o)}return s}},{key:"_adjustParentBBoxes",value:function(t,e,n){for(var i=n;i>=0;i--)_(e.data[i],t)}},{key:"_condense",value:function(t){for(var e=t.length-1;e>=0;e--){var n=t.data[e];if(0===n.children.length)if(e>0){var i=t.data[e-1],r=i.children;r.splice((0,u.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else f(n,this._toBBox)}}},{key:"_initFormat",value:function(t){var e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function f(t,e){v(t,0,t.children.length,e,t)}function v(t,e,n,i,r){r||(r=new E([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,o=e;o<n;o++)a=t.children[o],_(r,t.leaf?i(a):a);return r}function _(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function y(t,e){return t.minY-e.minY}function g(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function I(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function B(t,e){var n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),a=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,a-i)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function k(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function b(t,e,n,i,r){for(var a=[e,n];a.length;){var o=(0,h.j0)(a.pop()),s=(0,h.j0)(a.pop());if(!(o-s<=i)){var u=s+Math.ceil((o-s)/i/2)*i;(0,d.q)(t,u,s,o,r),a.push(s,u,u,o)}}}var M=new l.Z,Y=new l.Z,X=new l.Z,Z=new l.Z({deallocator:void 0}),N=function(t){(0,i.Z)(n,t);var e=(0,r.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.apply(this,arguments)).height=1,t.indexHint=new u.SO,t}return(0,s.Z)(n)}((0,s.Z)((function t(){(0,o.Z)(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}))),E=function(t){(0,i.Z)(n,t);var e=(0,r.Z)(n);function n(t){var i;return(0,o.Z)(this,n),(i=e.call(this)).children=t,i.leaf=!0,i}return(0,s.Z)(n)}(N),S=function(t){(0,i.Z)(n,t);var e=(0,r.Z)(n);function n(t){var i;return(0,o.Z)(this,n),(i=e.call(this)).children=t,i.leaf=!1,i}return(0,s.Z)(n)}(N)},85403:function(t,e,n){n.d(e,{Y:function(){return o}});var i=n(37762),r=n(92026);function a(t,e){return t?e?4:3:e?3:2}function o(t,e,n,o,h){if((0,r.Wi)(e)||!e.lengths.length)return null;var l="upperLeft"===(null===h||void 0===h?void 0:h.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);var d,c=t.coords,f=[],v=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],_=e.lengths,m=e.coords,y=a(n,o),g=0,I=(0,i.Z)(_);try{for(I.s();!(d=I.n()).done;){var x=d.value,B=s(v,m,g,x,n,o,l);B&&f.push(B),g+=x*y}}catch(b){I.e(b)}finally{I.f()}if(f.sort((function(t,e){var i=l*t[2]-l*e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),f.length){var p=6*f[0][2];c[0]=f[0][0]/p,c[1]=f[0][1]/p,n&&(p=6*f[0][4],c[2]=0!==p?f[0][3]/p:0),(c[0]<v[0]||c[0]>v[1]||c[1]<v[2]||c[1]>v[3]||n&&(c[2]<v[4]||c[2]>v[5]))&&(c.length=0)}if(!c.length){var k=e.lengths[0]?u(m,0,_[0],n,o):null;if(!k)return null;c[0]=k[0],c[1]=k[1],n&&k.length>2&&(c[2]=k[2])}return t}function s(t,e,n,i,r,o){for(var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,u=a(r,o),h=n,l=n+u,d=0,c=0,f=0,v=0,_=0,m=0,y=i-1;m<y;m++,h+=u,l+=u){var g=e[h],I=e[h+1],x=e[h+2],B=e[l],p=e[l+1],k=e[l+2],b=g*p-B*I;v+=b,d+=(g+B)*b,c+=(I+p)*b,r&&(f+=(x+k)*(b=g*k-B*x),_+=b),g<t[0]&&(t[0]=g),g>t[1]&&(t[1]=g),I<t[2]&&(t[2]=I),I>t[3]&&(t[3]=I),r&&(x<t[4]&&(t[4]=x),x>t[5]&&(t[5]=x))}if(v*s>0&&(v*=-1),_*s>0&&(_*=-1),!v)return null;var M=[d,c,.5*v];return r&&(M[3]=f,M[4]=.5*_),M}function u(t,e,n,i,r){for(var o=a(i,r),s=e,u=e+o,f=0,v=0,_=0,m=0,y=0,g=n-1;y<g;y++,s+=o,u+=o){var I=t[s],x=t[s+1],B=t[s+2],p=t[u],k=t[u+1],b=t[u+2],M=i?l(I,x,B,p,k,b):h(I,x,p,k);if(M)if(f+=M,i){var Y=c(I,x,B,p,k,b);v+=M*Y[0],_+=M*Y[1],m+=M*Y[2]}else{var X=d(I,x,p,k);v+=M*X[0],_+=M*X[1]}}return f>0?i?[v/f,_/f,m/f]:[v/f,_/f]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function h(t,e,n,i){var r=n-t,a=i-e;return Math.sqrt(r*r+a*a)}function l(t,e,n,i,r,a){var o=i-t,s=r-e,u=a-n;return Math.sqrt(o*o+s*s+u*u)}function d(t,e,n,i){return[t+.5*(n-t),e+.5*(i-e)]}function c(t,e,n,i,r,a){return[t+.5*(i-t),e+.5*(r-e),n+.5*(a-n)]}},66020:function(t,e,n){n.d(e,{H:function(){return d}});var i=n(37762),r=n(15671),a=n(43144),o=n(93169),s=n(13491),u=n(65156),h={minX:0,minY:0,maxX:0,maxY:0};function l(t,e,n){(function(t){h.minX=t[0],h.minY=t[1],h.maxX=t[2],h.maxY=t[3]})(e),t.search(h,n)}var d=function(){function t(){var e=this;(0,r.Z)(this,t),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,o.Z)("esri-csp-restrictions")?function(t){return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(e._indexInvalid){var t=new Array(e._idByBounds.size),n=0;e._idByBounds.forEach((function(e,i){t[n++]=i})),e._indexInvalid=!1,e._index.clear(),e._index.load(t)}else e._boundsToLoad.length&&(e._index.load(Array.from(new Set(e._boundsToLoad.filter((function(t){return e._idByBounds.has(t)}))))),e._boundsToLoad.length=0)}}return(0,a.Z)(t,[{key:"fullBounds",get:function(){if(!this._boundsById.size)return null;var t,e=(0,u.cS)(),n=(0,i.Z)(this._boundsById.values());try{for(n.s();!(t=n.n()).done;){var r=t.value;r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]))}}catch(a){n.e(a)}finally{n.f()}return e}},{key:"valid",get:function(){return!this._indexInvalid}},{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(t){var e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}},{key:"forEachInBounds",value:function(t,e){var n=this;this._loadIndex(),l(this._index,t,(function(t){return e(n._idByBounds.get(t))}))}},{key:"get",value:function(t){return this._boundsById.get(t)}},{key:"has",value:function(t){return this._boundsById.has(t)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(t,e){if(!this._indexInvalid){var n=this._boundsById.get(t);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),t}()},97114:function(t,e,n){n.d(e,{Z:function(){return B}});var i=n(37762),r=n(29439),a=n(15671),o=n(43144),s=n(10064),u=n(91505),h=n(32718),l=n(92026),d=n(41414),c=n(65156),f=n(83406),v=n(66020),_=n(85403),m=n(3182),y=n(80457),g={getObjectId:function(t){return t.objectId},getAttributes:function(t){return t.attributes},getAttribute:function(t,e){return t.attributes[e]},cloneWithGeometry:function(t,e){return new m.u_(e,t.attributes,null,t.objectId)},getGeometry:function(t){return t.geometry},getCentroid:function(t,e){return(0,l.Wi)(t.centroid)&&(t.centroid=(0,_.Y)(new y.Z,t.geometry,e.hasZ,e.hasM)),t.centroid}},I=n(31904),x=(0,d.Ue)(),B=function(){function t(e){(0,a.Z)(this,t),this.geometryInfo=e,this._boundsStore=new v.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new u.Z,this.featureAdapter=g}return(0,o.Z)(t,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){return this._boundsStore.fullBounds}},{key:"storeStatistics",get:function(){var t=0;return this._featuresById.forEach((function(e){(0,l.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"getFullExtent",value:function(t){if((0,l.Wi)(this.fullBounds))return null;var e=(0,r.Z)(this.fullBounds,4);return{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:(0,I.S2)(t)}}},{key:"add",value:function(t){this._add(t),this._emitChanged()}},{key:"addMany",value:function(t){var e,n=(0,i.Z)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this._add(r)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(t){var e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}},{key:"removeManyById",value:function(t){this._boundsStore.invalidateIndex();var e,n=(0,i.Z)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value,a=this._featuresById.get(r);a&&this._remove(a)}}catch(o){n.e(o)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(t,e){var n,r=(0,i.Z)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value,o=this._boundsStore.get(a.objectId);o&&e((0,d.JR)(x,o))}}catch(s){r.e(s)}finally{r.f()}}},{key:"getFeature",value:function(t){return this._featuresById.get(t)}},{key:"has",value:function(t){return this._featuresById.has(t)}},{key:"forEach",value:function(t){this._featuresById.forEach((function(e){return t(e)}))}},{key:"forEachInBounds",value:function(t,e){var n=this;this._boundsStore.forEachInBounds(t,(function(t){e(n._featuresById.get(t))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var t=this,e=!1;this._featuresById.forEach((function(n,i){t._markedIds.has(i)||(e=!0,t._remove(n))})),this._markedIds.clear(),e&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(t){if(t){var e=t.objectId;if(null!=e){var n,i=this._featuresById.get(e);if(this._markedIds.add(e),i?(t.displayId=i.displayId,n=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,l.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,l.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);n=(0,f.$)((0,l.pC)(n)?n:(0,c.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,l.pC)(n)&&this._boundsStore.set(e,n),this._featuresById.set(e,t)}else h.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:t}))}}},{key:"_remove",value:function(t){(0,l.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t);var e=t.objectId;return this._markedIds.delete(e),this._boundsStore.delete(e),this._featuresById.delete(e),t}}]),t}()}}]);
//# sourceMappingURL=7114.5af63c13.chunk.js.map