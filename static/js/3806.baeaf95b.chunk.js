"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3806],{83806:function(n,e,r){r.r(e),r.d(e,{registerFunctions:function(){return V}});var t=r(37762),a=r(74165),i=r(15861),u=r(19545),s=r(47238),c=r(44715),o=r(95435),f=r(53866),l=r(32238),d=r(84178),p=r(77577),h=r(585),w=r(80885),y=r(29909),v=r(77981),m=r(22564),b=r(62357),Z=r(72741),x=r(93249),A=r(68860);function g(n){return 0===u.i8.indexOf("4.")?w.Z.fromExtent(n):new w.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function k(n,e,r){if((0,c.y)(n,2,2,e,r),n[0]instanceof l.Z&&n[1]instanceof l.Z);else if(n[0]instanceof l.Z&&null===n[1]);else if(n[1]instanceof l.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new m.aV(e,m.rH.InvalidParameter,r)}function H(n,e){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)((0,a.Z)().mark((function n(e,r){var i,u,s,f,l,p,h,w,v,m,b;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("polygon"===e.type||"polyline"===e.type||"extent"===e.type){n.next=2;break}return n.abrupt("return",0);case 2:if(i=1,(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(i=(0,o._R)(e.spatialReference)/(0,A.c9)(e.spatialReference)),u=0,"polyline"===e.type){s=(0,t.Z)(e.paths);try{for(s.s();!(f=s.n()).done;)for(l=f.value,p=1;p<l.length;p++)u+=(0,o.AW)(l[p],l[p-1],i)}catch(a){s.e(a)}finally{s.f()}}else if("polygon"===e.type){h=(0,t.Z)(e.rings);try{for(h.s();!(w=h.n()).done;){for(v=w.value,m=1;m<v.length;m++)u+=(0,o.AW)(v[m],v[m-1],i);(v[0][0]!==v[v.length-1][0]||v[0][1]!==v[v.length-1][1]||void 0!==v[0][2]&&v[0][2]!==v[v.length-1][2])&&(u+=(0,o.AW)(v[0],v[v.length-1],i))}}catch(a){h.e(a)}finally{h.f()}}else"extent"===e.type&&(u+=2*(0,o.AW)([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],i),u+=2*(0,o.AW)([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],i),u*=2,u+=4*Math.abs((0,c.A)(e.zmax,0)*i-(0,c.A)(e.zmin,0)*i));return b=new y.Z({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,u]]}),n.abrupt("return",(0,d.sz)(b,r));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function V(n){"async"===n.mode&&(n.functions.disjoint=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null===a[0]||null===a[1]||(0,d.ED)(a[0],a[1])}))},n.functions.intersects=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.kK)(a[0],a[1])}))},n.functions.touches=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.W4)(a[0],a[1])}))},n.functions.crosses=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.jU)(a[0],a[1])}))},n.functions.within=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.uh)(a[0],a[1])}))},n.functions.contains=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.r3)(a[0],a[1])}))},n.functions.overlaps=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.Nm)(a[0],a[1])}))},n.functions.equals=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return(0,c.y)(a,2,2,e,r),a[0]===a[1]||(a[0]instanceof l.Z&&a[1]instanceof l.Z?(0,d.fS)(a[0],a[1]):!(!(0,c.k)(a[0])||!(0,c.k)(a[1]))&&a[0].equals(a[1]))}))},n.functions.relate=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,3,3,e,r),a[0]instanceof l.Z&&a[1]instanceof l.Z)return(0,d.LV)(a[0],a[1],(0,c.j)(a[2]));if(a[0]instanceof l.Z&&null===a[1])return!1;if(a[1]instanceof l.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new m.aV(e,m.rH.InvalidParameter,r)}))},n.functions.intersection=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null===a[0]||null===a[1]?null:(0,d.wf)(a[0],a[1])}))},n.functions.union=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){var i=[];if(0===(a=(0,c.G)(a)).length)throw new m.aV(e,m.rH.WrongNumberOfParameters,r);if(1===a.length)if((0,c.m)(a[0])){for(var u=(0,c.G)(a[0]),o=0;o<u.length;o++)if(null!==u[o]){if(!(u[o]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);i.push(u[o])}}else{if(!(0,c.x)(a[0])){if(a[0]instanceof l.Z)return(0,c.q)((0,s.r1)(a[0]),e.spatialReference);if(null===a[0])return null;throw new m.aV(e,m.rH.InvalidParameter,r)}for(var f=(0,c.G)(a[0].toArray()),p=0;p<f.length;p++)if(null!==f[p]){if(!(f[p]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);i.push(f[p])}}else for(var h=0;h<a.length;h++)if(null!==a[h]){if(!(a[h]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);i.push(a[h])}return 0===i.length?null:(0,d.G0)(i)}))},n.functions.difference=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null!==a[0]&&null===a[1]?(0,s.r1)(a[0]):null===a[0]?null:(0,d.e5)(a[0],a[1])}))},n.functions.symmetricdifference=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return k(a=(0,c.G)(a),e,r),null===a[0]&&null===a[1]?null:null===a[0]?(0,s.r1)(a[1]):null===a[1]?(0,s.r1)(a[0]):(0,d.Sp)(a[0],a[1])}))},n.functions.clip=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,2,e,r),!(a[1]instanceof f.Z)&&null!==a[1])throw new m.aV(e,m.rH.InvalidParameter,r);if(null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return null===a[1]?null:(0,d.oq)(a[0],a[1])}))},n.functions.cut=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,2,e,r),!(a[1]instanceof y.Z)&&null!==a[1])throw new m.aV(e,m.rH.InvalidParameter,r);if(null===a[0])return[];if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return null===a[1]?[(0,s.r1)(a[0])]:(0,d.z7)(a[0],a[1])}))},n.functions.area=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.y)(u,1,2,e,r),null!==(u=(0,c.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumArea((0,s.EI)((0,c.A)(u[1],-1)),!1,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new m.aV(e,m.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,c.m)(u[0])&&!(0,c.x)(u[0])){n.next=12;break}return f=(0,c.J)(u[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.CJ)(f,(0,s.EI)((0,c.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new m.aV(e,m.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.CJ)(u[0],(0,s.EI)((0,c.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.areageodetic=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.y)(u,1,2,e,r),null!==(u=(0,c.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumArea((0,s.EI)((0,c.A)(u[1],-1)),!0,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new m.aV(e,m.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,c.m)(u[0])&&!(0,c.x)(u[0])){n.next=12;break}return f=(0,c.J)(u[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.Y4)(f,(0,s.EI)((0,c.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new m.aV(e,m.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.Y4)(u[0],(0,s.EI)((0,c.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.length=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.y)(u,1,2,e,r),null!==(u=(0,c.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumLength((0,s.Lz)((0,c.A)(u[1],-1)),!1,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new m.aV(e,m.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,c.m)(u[0])&&!(0,c.x)(u[0])){n.next=12;break}return f=(0,c.H)(u[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.sz)(f,(0,s.Lz)((0,c.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new m.aV(e,m.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.sz)(u[0],(0,s.Lz)((0,c.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.length3d=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if((0,c.y)(a,1,2,e,r),null===(a=(0,c.G)(a))[0])return 0;if((0,c.m)(a[0])||(0,c.x)(a[0])){var i=(0,c.H)(a[0],e.spatialReference);return null===i?0:!0===i.hasZ?H(i,(0,s.Lz)((0,c.A)(a[1],-1))):(0,d.sz)(i,(0,s.Lz)((0,c.A)(a[1],-1)))}if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return!0===a[0].hasZ?H(a[0],(0,s.Lz)((0,c.A)(a[1],-1))):(0,d.sz)(a[0],(0,s.Lz)((0,c.A)(a[1],-1)))}))},n.functions.lengthgeodetic=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.y)(u,1,2,e,r),null!==(u=(0,c.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumLength((0,s.Lz)((0,c.A)(u[1],-1)),!0,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new m.aV(e,m.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,c.m)(u[0])&&!(0,c.x)(u[0])){n.next=12;break}return f=(0,c.H)(u[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.kQ)(f,(0,s.Lz)((0,c.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new m.aV(e,m.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.kQ)(u[0],(0,s.Lz)((0,c.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.distance=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){a=(0,c.G)(a),(0,c.y)(a,2,3,e,r);var i=a[0];((0,c.m)(a[0])||(0,c.x)(a[0]))&&(i=(0,c.K)(a[0],e.spatialReference));var u=a[1];if(((0,c.m)(a[1])||(0,c.x)(a[1]))&&(u=(0,c.K)(a[1],e.spatialReference)),!(i instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);if(!(u instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return(0,d.TE)(i,u,(0,s.Lz)((0,c.A)(a[2],-1)))}))},n.functions.distancegeodetic=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){a=(0,c.G)(a),(0,c.y)(a,2,3,e,r);var i=a[0],u=a[1];if(!(i instanceof h.Z))throw new m.aV(e,m.rH.InvalidParameter,r);if(!(u instanceof h.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var o=new y.Z({paths:[],spatialReference:i.spatialReference});return o.addPath([i,u]),(0,d.kQ)(o,(0,s.Lz)((0,c.A)(a[2],-1)))}))},n.functions.densify=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var i=(0,c.g)(a[1]);if(isNaN(i))throw new m.aV(e,m.rH.InvalidParameter,r);if(i<=0)throw new m.aV(e,m.rH.InvalidParameter,r);return a[0]instanceof w.Z||a[0]instanceof y.Z?(0,d.Cz)(a[0],i,(0,s.Lz)((0,c.A)(a[2],-1))):a[0]instanceof f.Z?(0,d.Cz)(g(a[0]),i,(0,s.Lz)((0,c.A)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var i=(0,c.g)(a[1]);if(isNaN(i))throw new m.aV(e,m.rH.InvalidParameter,r);if(i<=0)throw new m.aV(e,m.rH.InvalidParameter,r);return a[0]instanceof w.Z||a[0]instanceof y.Z?(0,d.j2)(a[0],i,(0,s.Lz)((0,c.A)(a[2],-1))):a[0]instanceof f.Z?(0,d.j2)(g(a[0]),i,(0,s.Lz)((0,c.A)(a[2],-1))):a[0]}))},n.functions.generalize=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,4,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var i=(0,c.g)(a[1]);if(isNaN(i))throw new m.aV(e,m.rH.InvalidParameter,r);return(0,d.D$)(a[0],i,(0,c.h)((0,c.A)(a[2],!0)),(0,s.Lz)((0,c.A)(a[3],-1)))}))},n.functions.buffer=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var i=(0,c.g)(a[1]);if(isNaN(i))throw new m.aV(e,m.rH.InvalidParameter,r);return 0===i?(0,s.r1)(a[0]):(0,d.f3)(a[0],i,(0,s.Lz)((0,c.A)(a[2],-1)))}))},n.functions.buffergeodetic=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var i=(0,c.g)(a[1]);if(isNaN(i))throw new m.aV(e,m.rH.InvalidParameter,r);return 0===i?(0,s.r1)(a[0]):(0,d.rd)(a[0],i,(0,s.Lz)((0,c.A)(a[2],-1)))}))},n.functions.offset=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,2,6,e,r),null===a[0])return null;if(!(a[0]instanceof w.Z||a[0]instanceof y.Z))throw new m.aV(e,m.rH.InvalidParameter,r);var i=(0,c.g)(a[1]);if(isNaN(i))throw new m.aV(e,m.rH.InvalidParameter,r);var u=(0,c.g)((0,c.A)(a[4],10));if(isNaN(u))throw new m.aV(e,m.rH.InvalidParameter,r);var o=(0,c.g)((0,c.A)(a[5],0));if(isNaN(o))throw new m.aV(e,m.rH.InvalidParameter,r);return(0,d.cv)(a[0],i,(0,s.Lz)((0,c.A)(a[2],-1)),(0,c.j)((0,c.A)(a[3],"round")).toLowerCase(),u,o)}))},n.functions.rotate=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){a=(0,c.G)(a),(0,c.y)(a,2,3,e,r);var i=a[0];if(null===i)return null;if(!(i instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);i instanceof f.Z&&(i=w.Z.fromExtent(i));var u=(0,c.g)(a[1]);if(isNaN(u))throw new m.aV(e,m.rH.InvalidParameter,r);var s=(0,c.A)(a[2],null);if(null===s)return(0,d.U1)(i,u);if(s instanceof h.Z)return(0,d.U1)(i,u,s);throw new m.aV(e,m.rH.InvalidParameter,r)}))},n.functions.centroid=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,1,1,e,r),null===a[0])return null;var i=a[0];if(((0,c.m)(a[0])||(0,c.x)(a[0]))&&(i=(0,c.K)(a[0],e.spatialReference)),null===i)return null;if(!(i instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return i instanceof h.Z?(0,c.q)((0,s.r1)(a[0]),e.spatialReference):i instanceof w.Z?i.centroid:i instanceof y.Z?(0,o.s9)(i):i instanceof p.Z?(0,o.Ay)(i):i instanceof f.Z?i.center:null}))},n.functions.multiparttosinglepart=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var o,b,Z,x,A,g,k,H,I,V,P,G,F;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=(0,c.G)(u),(0,c.y)(u,1,1,e,r),o=[],null!==u[0]){n.next=4;break}return n.abrupt("return",null);case 4:if(u[0]instanceof l.Z){n.next=6;break}throw new m.aV(e,m.rH.InvalidParameter,r);case 6:if(!(u[0]instanceof h.Z)){n.next=8;break}return n.abrupt("return",[(0,c.q)((0,s.r1)(u[0]),e.spatialReference)]);case 8:if(!(u[0]instanceof f.Z)){n.next=10;break}return n.abrupt("return",[(0,c.q)((0,s.r1)(u[0]),e.spatialReference)]);case 10:return n.next=12,(0,d.og)(u[0]);case 12:if(!((b=n.sent)instanceof w.Z)){n.next=30;break}for(Z=[],x=[],A=0;A<b.rings.length;A++)b.isClockwise(b.rings[A])?(g=(0,v.im)({rings:[b.rings[A]],hasZ:!0===b.hasZ,hazM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()}),Z.push(g)):x.push({ring:b.rings[A],pt:b.getPoint(A,0)});k=0;case 17:if(!(k<x.length)){n.next=29;break}H=0;case 19:if(!(H<Z.length)){n.next=26;break}if(!Z[H].contains(x[k].pt)){n.next=23;break}return Z[H].addRing(x[k].ring),n.abrupt("break",26);case 23:H++,n.next=19;break;case 26:k++,n.next=17;break;case 29:return n.abrupt("return",Z);case 30:if(!(b instanceof y.Z)){n.next=34;break}for(I=[],V=0;V<b.paths.length;V++)P=(0,v.im)({paths:[b.paths[V]],hasZ:!0===b.hasZ,hazM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()}),I.push(P);return n.abrupt("return",I);case 34:if(!(u[0]instanceof p.Z)){n.next=38;break}for(G=(0,c.q)((0,s.r1)(u[0]),e.spatialReference),F=0;F<G.points.length;F++)o.push(G.getPoint(F));return n.abrupt("return",o);case 38:return n.abrupt("return",null);case 39:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.issimple=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,1,1,e,r),null===a[0])return!0;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return(0,d.Gg)(a[0])}))},n.functions.simplify=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,1,1,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return(0,d.og)(a[0])}))},n.functions.convexhull=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,c.G)(a),(0,c.y)(a,1,1,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new m.aV(e,m.rH.InvalidParameter,r);return(0,d.JI)(a[0])}))},n.functions.getuser=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var s,o,f,l,d,p,h,w,y,v,A,g,k,H,I,V,P;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.y)(u,0,2,e,r),s=(0,c.A)(u[1],""),o=!0===s,s=!0===s||!1===s?"":(0,c.j)(s),!(0===u.length||u[0]instanceof Z.Z)){n.next=13;break}return f=null,e.services&&e.services.portal&&(f=e.services.portal),u.length>0&&(f=(0,x._)(u[0],f)),n.next=7,(0,x.q)(f,s,o);case 7:if(!(l=n.sent)){n.next=12;break}for(d=JSON.parse(JSON.stringify(l)),p=0,h=["lastLogin","created","modified"];p<h.length;p++)void 0!==d[w=h[p]]&&null!==d[w]&&(d[w]=new Date(d[w]));return n.abrupt("return",b.Z.convertObjectToArcadeDictionary(d,(0,c.C)(e)));case 12:case 28:case 38:return n.abrupt("return",null);case 13:if(y=null,(0,c.T)(u[0])&&(y=u[0]),!y){n.next=39;break}if(o=!1,!s){n.next=17;break}return n.abrupt("return",null);case 17:return n.next=19,y.load();case 19:return n.next=21,y.getOwningSystemUrl();case 21:if(v=n.sent){n.next=29;break}if(s){n.next=28;break}return n.next=26,y.getIdentityUser();case 26:return A=n.sent,n.abrupt("return",A?b.Z.convertObjectToArcadeDictionary({username:A},(0,c.C)(e)):null);case 29:return g=null,e.services&&e.services.portal&&(g=e.services.portal),g=(0,x._)(new Z.Z(v),g),n.next=33,(0,x.q)(g,s,o);case 33:if(!(k=n.sent)){n.next=38;break}for(H=JSON.parse(JSON.stringify(k)),I=0,V=["lastLogin","created","modified"];I<V.length;I++)void 0!==H[P=V[I]]&&null!==H[P]&&(H[P]=new Date(H[P]));return n.abrupt("return",b.Z.convertObjectToArcadeDictionary(H,(0,c.C)(e)));case 39:throw new m.aV(e,m.rH.InvalidParameter,r);case 40:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())})}},93249:function(n,e,r){r.d(e,{_:function(){return o},q:function(){return f}});var t=r(74165),a=r(1413),i=r(15861),u=r(19545),s=r(76200),c=r(70032);function o(n,e){return null===n?e:new c.Z({url:n.field("url")})}function f(n,e,r){return l.apply(this,arguments)}function l(){return l=(0,i.Z)((0,t.Z)().mark((function n(e,r,i){var c,o,f,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===u.id||void 0===u.id?void 0:u.id.findCredential(e.restUrl)){n.next=3;break}return n.abrupt("return",null);case 3:if("loaded"!==e.loadStatus||""!==r||!e.user||!e.user.sourceJSON||!1!==i){n.next=5;break}return n.abrupt("return",e.user.sourceJSON);case 5:if(""!==r){n.next=14;break}return n.next=8,(0,s.default)(e.restUrl+"/community/self",{responseType:"json",query:(0,a.Z)({f:"json"},!1===i?{}:{returnUserLicenseTypeExtensions:!0})});case 8:if(!(c=n.sent).data){n.next=13;break}if(!(o=c.data)||!o.username){n.next=13;break}return n.abrupt("return",o);case 13:case 20:return n.abrupt("return",null);case 14:return n.next=16,(0,s.default)(e.restUrl+"/community/users/"+r,{responseType:"json",query:{f:"json"}});case 16:if(!(f=n.sent).data){n.next=20;break}return l=f.data,n.abrupt("return",l.error?null:l);case 21:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}}}]);
//# sourceMappingURL=3806.baeaf95b.chunk.js.map