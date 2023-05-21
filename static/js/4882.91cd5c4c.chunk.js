"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4882],{55067:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(37762),n=i(15671),a=i(43144),s=i(11752),u=i(61120),l=i(60136),o=i(29388),c=i(93169),h=i(80613),f=i(64510),d=i(52424),v=i(40655),p=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){(0,l.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this))._tileInfoView=e,r}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(p),this.setStencilReference(e),(0,s.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state,r=(0,s.Z)((0,u.Z)(i.prototype),"createRenderParams",this).call(this,e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}},{key:"prepareRenderPasses",value:function(e){var t=this,r=(0,s.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e);return r.push(e.registerRenderPass({name:"stencil",brushes:[v.Z],drawPhase:h.jx.DEBUG|h.jx.MAP|h.jx.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),(0,c.Z)("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[d.Z],drawPhase:h.jx.DEBUG,target:function(){return t.children}})),r}},{key:"getStencilTarget",value:function(){return this.children}},{key:"setStencilReference",value:function(e){var t,i=1,n=(0,r.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.stencilRef=i++}}catch(a){n.e(a)}finally{n.f()}}}]),i}(f.Z)},72900:function(e,t,i){i.d(t,{I:function(){return h}});var r=i(29439),n=i(15671),a=i(43144),s=i(60136),u=i(29388),l=i(22753),o=i(87422),c=i(73828),h=function(e){(0,s.Z)(i,e);var t=(0,u.Z)(i);function i(e,r,a,s,u,l){var o,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:u,f=arguments.length>7&&void 0!==arguments[7]?arguments[7]:l;return(0,n.Z)(this,i),(o=t.call(this)).triangleCountReportedInDebug=0,o.triangleCount=0,o.texture=null,o.key=new c.Z(e),o.resolution=r,o.x=a,o.y=s,o.width=u,o.height=l,o.rangeX=h,o.rangeY=f,o}return(0,a.Z)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"setTransform",value:function(e){var t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,n=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(n,2),s=a[0],u=a[1],o=this.width/this.rangeX*t,c=this.height/this.rangeY*t;(0,l.s)(i,o,0,0,0,c,0,s,u,1),(0,l.m)(this.transforms.dvs,e.displayViewMat3,i)}}]),i}(o.s)},5738:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var r=i(1413),n=i(74165),a=i(15861),s=i(29439),u=i(15671),l=i(43144),o=i(11752),c=i(61120),h=i(60136),f=i(29388),d=i(27366),v=i(32718),p=i(66978),y=i(94172),k=i(49861),w=(i(25243),i(63780),i(69912)),Z=i(92975),_=i(4321),g=i(95986),m=i(34622),x=i(37995),I=i(73828),b=i(32344),S=i(85269),R=i(67581),T=i(13107),V=[102113,102100,3857,3785,900913],M=[0,0],q=function(e){(0,h.Z)(i,e);var t=(0,f.Z)(i);function i(){var e;return(0,u.Z)(this,i),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e._tileRequests=new Map,e.layer=null,e}return(0,l.Z)(i,[{key:"tileMatrixSet",get:function(){var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e,t=this,r=null===(e=this.tileMatrixSet)||void 0===e?void 0:e.tileInfo;r&&(this._tileInfoView=new x.Z(r),this._fetchQueue=new b.Z({tileInfoView:this._tileInfoView,concurrency:16,process:function(e,i){return t.fetchTile(e,i)}}),this._tileStrategy=new S.Z({cachePolicy:"keep",resampling:!0,acquireTile:function(e){return t.acquireTile(e)},releaseTile:function(e){return t.releaseTile(e)},tileInfoView:this._tileInfoView}),this.addAttachHandles((0,y.YP)((function(){var e,i;return[null===(e=t.layer)||void 0===e||null===(i=e.activeLayer)||void 0===i?void 0:i.styleId,t.tileMatrixSet]}),(function(){return t._refresh()}))),(0,o.Z)((0,c.Z)(i.prototype),"attach",this).call(this))}},{key:"detach",value:function(){var e,t;(0,o.Z)((0,c.Z)(i.prototype),"detach",this).call(this),null!==(e=this._tileStrategy)&&void 0!==e&&e.destroy(),null!==(t=this._fetchQueue)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"acquireTile",value:function(e){var t,i,r,n=this._bitmapView.createTile(e),a=n.bitmap;return t=this._tileInfoView.getTileCoords(M,n.key),i=(0,s.Z)(t,2),a.x=i[0],a.y=i[1],a.resolution=this._tileInfoView.getTileResolution(n.key),r=(0,s.Z)(this._tileInfoView.tileInfo.size,2),a.width=r[0],a.height=r[1],this._enqueueTileFetch(n),this._bitmapView.addChild(n),this.requestUpdate(),n}},{key:"doRefresh",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!this.attached||this.updateRequested||this.suspended||this._refresh();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"fetchTile",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var i,a,s,u,l,o,c,h,f,d,v=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=v.length>1&&void 0!==v[1]?v[1]:{},a="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=i.signal,u=i.resamplingLevel,l=void 0===u?0:u,a){e.next=4;break}return e.abrupt("return",this._fetchImage(t,s));case 4:return o=new I.Z(0,0,0,0),e.prev=5,e.next=8,a.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:s});case 8:return e.next=10,this._fetchImage(o,s);case 10:c=e.sent,e.next=26;break;case 13:if(e.prev=13,e.t0=e.catch(5),!(0,p.D_)(e.t0)){e.next=17;break}throw e.t0;case 17:if(!(l<3)){e.next=25;break}if(!(h=this._tileInfoView.getTileParentId(t.id))){e.next=25;break}return f=new I.Z(h),e.next=23,this.fetchTile(f,(0,r.Z)((0,r.Z)({},i),{},{resamplingLevel:l+1}));case 23:return d=e.sent,e.abrupt("return",(0,m.i)(this._tileInfoView,d,f,t));case 25:throw e.t0;case 26:return e.abrupt("return",(0,m.i)(this._tileInfoView,c,o,t));case 27:case"end":return e.stop()}}),e,this,[[5,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=(0,o.Z)((0,c.Z)(i.prototype),"canResume",this).call(this);return e?null!==this.tileMatrixSet:e}},{key:"supportsSpatialReference",value:function(e){var t,i;return null!==(t=null===(i=this.layer.activeLayer.tileMatrixSets)||void 0===i?void 0:i.some((function(t){var i;return(0,Z.fS)(null===(i=t.tileInfo)||void 0===i?void 0:i.spatialReference,e)})))&&void 0!==t&&t}},{key:"_enqueueTileFetch",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var i,r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:i=e.sent,t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return r.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,p.D_)(e.t0)||v.Z.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_refresh",value:function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){if(t.bitmap.source){var i={id:t.key.id,fulfilled:!1,promise:e._fetchQueue.push(t.key).then((function(e){t.bitmap.source=e})).catch((function(e){(0,p.D_)(e)||(t.bitmap.source=null)})).finally((function(){t.requestRender(),i.fulfilled=!0}))};e._tileRequests.set(t,i)}}))}},{key:"_getTileMatrixSetBySpatialReference",value:function(e){var t=this.view.spatialReference;if(!e.tileMatrixSets)return null;var i=e.tileMatrixSets.find((function(e){var i;return(0,Z.fS)(null===(i=e.tileInfo)||void 0===i?void 0:i.spatialReference,t)}));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((function(e){var t,i;return V.includes(null!==(t=null===(i=e.tileInfo)||void 0===i?void 0:i.spatialReference.wkid)&&void 0!==t?t:-1)}))),i}}]),i}((0,T.Z)((0,_.Y)((0,g.y)(R.Z))));(0,d._)([(0,k.Cb)()],q.prototype,"_fetchQueue",void 0),(0,d._)([(0,k.Cb)({readOnly:!0})],q.prototype,"tileMatrixSet",null);var C=q=(0,d._)([(0,w.j)("esri.views.2d.layers.WMTSLayerView2D")],q)}}]);
//# sourceMappingURL=4882.91cd5c4c.chunk.js.map