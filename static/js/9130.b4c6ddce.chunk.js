"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9130],{59130:function(t,e,n){n.r(e),n.d(e,{submitValidateNetworkTopologyJob:function(){return p},validateNetworkTopology:function(){return c}});var r=n(74165),a=n(1413),i=n(15861),o=n(76200),u=n(10064),s=n(23084),l=n(64267);function c(t,e,n){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,r.Z)().mark((function t(e,n,i){var u,c,d,p,f,v,Z,y,b,h,g;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=(0,s.en)(e),p=n.toJSON(),n.validationSet&&(p.validationSet=JSON.stringify(n.validationSet)),f=(0,a.Z)((0,a.Z)({},p),{},{returnEdits:!0,f:"json"}),v=(0,s.cv)((0,a.Z)((0,a.Z)({},d.query),f)),Z=(0,s.lA)(v,(0,a.Z)((0,a.Z)({},i),{},{method:"post"})),y="".concat(d.path,"/validateNetworkTopology"),t.next=8,(0,o.default)(y,Z);case 8:if(b=t.sent,h=b.data){t.next=12;break}return t.abrupt("return",null);case 12:return g=l.Z.fromJSON(h),t.abrupt("return",(g.serviceEdits=null!==(u=null===(c=g.serviceEdits)||void 0===c?void 0:c.map((function(t){return{layerId:t.id,editedFeatures:t.editedFeatures}})))&&void 0!==u?u:[],g));case 14:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function p(t,e,n){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,r.Z)().mark((function t(e,n,i){var l,c,d,p,f,v;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.gdbVersion){t.next=2;break}throw new u.Z("submit-validate-network-topology-job:missing-gdb-version","version is missing");case 2:return l=(0,s.en)(e),c=n.toJSON(),n.validationSet&&(c.validationSet=JSON.stringify(n.validationSet)),d=(0,s.lA)(l.query,(0,a.Z)((0,a.Z)({query:(0,s.cv)((0,a.Z)((0,a.Z)({},c),{},{returnEdits:!0,async:!0,f:"json"}))},i),{},{method:"post"})),p="".concat(l.path,"/validateNetworkTopology"),t.next=8,(0,o.default)(p,d);case 8:return f=t.sent,v=f.data,t.abrupt("return",v?v.statusUrl:null);case 11:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=9130.b4c6ddce.chunk.js.map