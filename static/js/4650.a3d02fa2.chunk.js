"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4650],{94650:function(e,r,t){t.r(r),t.d(r,{fromUrl:function(){return v}});var n=t(74165),a=t(1413),u=t(15861),s=t(10064),l=t(92026),o=t(35995),i=t(25899),c=t(74368),p=t(37933),d=t(19610),y=t(41226),f={FeatureLayer:!0,SceneLayer:!0};function v(e){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)((0,n.Z)().mark((function e(r){var u,s,l,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(u=r.properties)||void 0===u?void 0:u.customParameters,e.next=3,I(r.url,s);case 3:if(l=e.sent,o=(0,a.Z)((0,a.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o)));case 7:return e.next=10,t.e(5069).then(t.bind(t,65069));case 10:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},i=new e.t0(e.t1),e.abrupt("return",(m(i,l,o),i));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,r){return e?e.find((function(e){return e.id===r})):null}function m(e,r,t){function n(e,n){var u=(0,a.Z)((0,a.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return(0,l.pC)(n)&&(u.sourceJSON=n),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var a=n(t,h(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((function(t){var a=n(t,h(r.tableInfos,t));e.tables.add(a)}))}function I(e,r){return x.apply(this,arguments)}function x(){return x=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,o,c,d,v,b,h,m,I,x,w,k,Z,L,C,g,F,N,J,U;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,i.Qc)(r),e.t0=(0,l.Wi)(a),!e.t0){e.next=6;break}return e.next=5,S(r,t);case 5:a=e.sent;case 6:if(!(0,l.Wi)(a)){e.next=8;break}throw new s.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:o=(u=a).serverType,c=u.sublayer,v={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=o,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?26:"SceneServer"===e.t1?33:38;break;case 13:if(null==c){e.next=17;break}d="FeatureLayer",e.next=25;break;case 17:return e.next=19,P(r,t);case 19:if(!e.sent){e.next=23;break}e.t2="TileLayer",e.next=24;break;case 23:e.t2="MapImageLayer";case 24:d=e.t2;case 25:return e.abrupt("break",39);case 26:return e.next=28,(0,y.T)(r,{customParameters:t});case 28:return h=e.sent,m=h.tileInfo,I=h.cacheType,d=m?"LERC"!==(null===m||void 0===m||null===(b=m.format)||void 0===b?void 0:b.toUpperCase())||I&&"elevation"!==I.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer",e.abrupt("break",39);case 33:return e.next=35,(0,y.T)(a.url.path,{customParameters:t});case 35:return x=e.sent,d="SceneLayer",x&&(w=null===x||void 0===x?void 0:x.layers,"Voxel"===(null===x||void 0===x?void 0:x.layerType)?d="VoxelLayer":null!==w&&void 0!==w&&w.length&&null!=(Z=null===(k=w[0])||void 0===k?void 0:k.layerType)&&null!=p.fb[Z]&&(d=p.fb[Z])),e.abrupt("break",39);case 38:d=v[o];case 39:if(C={parsedUrl:a,Constructor:null,layerOrTableId:(L="FeatureServer"===o)?c:void 0,sublayerIds:null,tableIds:null},!f[d]||null!=c){e.next=46;break}return e.next=43,T(r,o,t);case 43:U=e.sent,L&&(C.sublayerInfos=U.layerInfos,C.tableInfos=U.tableInfos),1!==U.layerIds.length+U.tableIds.length?(C.sublayerIds=U.layerIds,C.tableIds=U.tableIds):L&&(C.layerOrTableId=null!==(g=U.layerIds[0])&&void 0!==g?g:U.tableIds[0],C.sourceJSON=null!==(F=null===(N=U.layerInfos)||void 0===N?void 0:N[0])&&void 0!==F?F:null===(J=U.tableInfos)||void 0===J?void 0:J[0]);case 46:return e.next=48,O(d);case 48:return C.Constructor=e.sent,e.abrupt("return",C);case 50:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function S(e,r){return w.apply(this,arguments)}function w(){return w=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,c,p,d,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.T)(r,{customParameters:t});case 2:if(s=e.sent,c=null,p=null,"Feature Layer"===(d=s.type)||"Table"===d?(c="FeatureServer",p=null!==(a=s.id)&&void 0!==a?a:null):"indexedVector"===d?c="VectorTileServer":s.hasOwnProperty("mapName")?c="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?c="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?c="FeatureServer":s.hasOwnProperty("streamUrls")?c="StreamServer":k(s)?(c="SceneServer",p=s.id):s.hasOwnProperty("layers")&&k(null===(u=s.layers)||void 0===u?void 0:u[0])&&(c="SceneServer"),c){e.next=7;break}return e.abrupt("return",null);case 7:return f=null!=p?(0,i.DR)(r):null,e.abrupt("return",{title:(0,l.pC)(f)&&s.name||(0,o.vt)(r),serverType:c,sublayer:p,url:{path:(0,l.pC)(f)?f.serviceUrl:(0,o.mN)(r).path}});case 9:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function k(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function T(e,r,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u,s,l,o,i,p,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,(0,c.V)(r,{customParameters:a});case 4:i=e.sent,o=!!i.layersJSON,l=i.layersJSON||i.serviceJSON,e.next=11;break;case 8:return e.next=10,(0,y.T)(r,{customParameters:a});case 10:l=e.sent;case 11:return p=null===(u=l)||void 0===u?void 0:u.layers,d=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layerIds:(null===p||void 0===p?void 0:p.map((function(e){return e.id})).reverse())||[],tableIds:(null===d||void 0===d?void 0:d.map((function(e){return e.id})).reverse())||[],layerInfos:o?p:[],tableInfos:o?d:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r){return C.apply(this,arguments)}function C(){return(C=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.T)(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=4650.a3d02fa2.chunk.js.map