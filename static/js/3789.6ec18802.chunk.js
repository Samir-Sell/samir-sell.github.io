"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3789],{75409:function(e,t,n){n.d(t,{w:function(){return u}});var r,i,u={},o={get exports(){return u},set exports(e){u=e}};r=o,void 0!==(i=function(){var e=function(e){var t;window.console&&window.console.error?window.console.error(e):(t=e,window.console&&window.console.log&&window.console.log(t))},t={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},n=null,r=null;function i(e){if(null==n)for(var t in n={},r={},e)"number"==typeof e[t]&&(n[e[t]]=t,r[t]=e[t])}function u(){if(null==n)throw"WebGLDebugUtils.init(ctx) not called"}function o(e){u();var t=n[e];return void 0!==t?"gl."+t:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function a(e,n,i,u){var a;if(void 0!==(a=t[e])&&void 0!==(a=a[n])&&a[i]){if("object"==typeof a[i]&&void 0!==a[i].enumBitwiseOr){for(var l=a[i].enumBitwiseOr,s=0,f=[],c=0;c<l.length;++c){var d=r[l[c]];0!=(u&d)&&(s|=d,f.push(o(d)))}return s===u?f.join(" | "):o(u)}return o(u)}return null===u?"null":void 0===u?"undefined":u.toString()}function l(e,t,n){e.__defineGetter__(n,(function(){return t[n]})),e.__defineSetter__(n,(function(e){t[n]=e}))}function s(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);for(var r=0;r<t;++r)e.disableVertexAttribArray(r),e.vertexAttribPointer(r,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(r,0);e.deleteBuffer(n);var i=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(r=0;r<i;++r)e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:i,mightBeEnum:function(e){return u(),void 0!==n[e]},glEnumToString:o,glFunctionArgToString:a,glFunctionArgsToString:function(e,t){for(var n="",r=t.length,i=0;i<r;++i)n+=(0==i?"":", ")+a(e,r,i,t[i]);return n},makeDebugContext:function t(n,r,u,s){s=s||n,i(n),r=r||function(t,n,r){for(var i="",u=r.length,l=0;l<u;++l)i+=(0==l?"":", ")+a(n,u,l,r[l]);e("WebGL error "+o(t)+" in "+n+"("+i+")")};var f={};function c(e,t){return function(){u&&u(t,arguments);var n=e[t].apply(e,arguments),i=s.getError();return 0!=i&&(f[i]=!0,r(i,t,arguments)),n}}var d={};for(var _ in n)if("function"==typeof n[_])if("getExtension"!=_)d[_]=c(n,_);else{var h=c(n,_);d[_]=function(){return t(h.apply(n,arguments),r,u,s)}}else l(d,n,_);return d.getError=function(){for(var e in f)if(f.hasOwnProperty(e)&&f[e])return f[e]=!1,e;return n.NO_ERROR},d},makeLostContextSimulatingCanvas:function(e){var t,n,r=[],i=[],u={},o=1,a=!1,f=[],c=0,d=0,_=!1,h=0,g={};function E(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(n=e.getContext,function(){var r=n.apply(e,arguments);if(r instanceof WebGLRenderingContext){if(r!=t){if(t)throw"got different context";u=function(e){for(var n in e)"function"==typeof e[n]?u[n]=b(e,n):l(u,e,n);u.getError=function(){if(p(),!a)for(;e=t.getError();)g[e]=!0;for(var e in g)if(g[e])return delete g[e],e;return u.NO_ERROR};for(var r=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],i=0;i<r.length;++i){var s=r[i];u[s]=function(t){return function(){if(p(),a)return null;var n=t.apply(e,arguments);return n.__webglDebugContextLostId__=o,f.push(n),n}}(e[s])}var c=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(i=0;i<c.length;++i)s=c[i],u[s]=function(t){return function(){return p(),a?null:t.apply(e,arguments)}}(u[s]);var d=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(i=0;i<d.length;++i)s=d[i],u[s]=function(t){return function(){return p(),!a&&t.apply(e,arguments)}}(u[s]);return u.checkFramebufferStatus=function(t){return function(){return p(),a?u.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(u.checkFramebufferStatus),u.getAttribLocation=function(t){return function(){return p(),a?-1:t.apply(e,arguments)}}(u.getAttribLocation),u.getVertexAttribOffset=function(t){return function(){return p(),a?0:t.apply(e,arguments)}}(u.getVertexAttribOffset),u.isContextLost=function(){return a},u}(t=r)}return u}return r});var v=function(e){r.push(E(e))},T=function(e){i.push(E(e))};function p(){++d,a||c==d&&e.loseContext()}function b(e,t){var n=e[t];return function(){if(p(),!a)return n.apply(e,arguments)}}function S(e){return{statusMessage:e,preventDefault:function(){_=!0}}}return function(e){var t=e.addEventListener;e.addEventListener=function(n,r,i){switch(n){case"webglcontextlost":v(r);break;case"webglcontextrestored":T(r);break;default:t.apply(e,arguments)}}}(e),e.loseContext=function(){if(!a){for(a=!0,c=0,++o;t.getError(););(function(){for(var e=Object.keys(g),t=0;t<e.length;++t)delete g[e]})(),g[t.CONTEXT_LOST_WEBGL]=!0;var n=S("context lost"),i=r.slice();setTimeout((function(){for(var t=0;t<i.length;++t)i[t](n);h>=0&&setTimeout((function(){e.restoreContext()}),h)}),0)}},e.restoreContext=function(){a&&i.length&&setTimeout((function(){if(!_)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<f.length;++e){var n=f[e];n instanceof WebGLBuffer?t.deleteBuffer(n):n instanceof WebGLFramebuffer?t.deleteFramebuffer(n):n instanceof WebGLProgram?t.deleteProgram(n):n instanceof WebGLRenderbuffer?t.deleteRenderbuffer(n):n instanceof WebGLShader?t.deleteShader(n):n instanceof WebGLTexture&&t.deleteTexture(n)}})(),s(t),a=!1,d=0,_=!1;for(var e=i.slice(),n=S("context restored"),r=0;r<e.length;++r)e[r](n)}),0)},e.loseContextInNCalls=function(e){if(a)throw"You can not ask a lost contet to be lost";c=d+e},e.getNumCalls=function(){return d},e.setRestoreTimeout=function(e){h=e},e},resetToInitialState:s}}())&&(r.exports=i)},98634:function(e,t,n){n.d(t,{H:function(){return o},K:function(){return u}});var r=n(43144),i=n(15671),u=(0,r.Z)((function e(){(0,i.Z)(this,e)}));function o(e){for(var t="",n=0;n<(arguments.length<=1?0:arguments.length-1);n++)t+=e[n]+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]);return t+=e[e.length-1]}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},78041:function(e,t,n){n.d(t,{Bh:function(){return _},IB:function(){return l},j7:function(){return s},je:function(){return d},ve:function(){return f},wu:function(){return o}});var r=n(25920),i=n(8548),u=n(36207),o=(0,u.wK)(i.zi.SRC_ALPHA,i.zi.ONE,i.zi.ONE_MINUS_SRC_ALPHA,i.zi.ONE_MINUS_SRC_ALPHA),a=(0,u.if)(i.zi.ONE,i.zi.ONE),l=(0,u.if)(i.zi.ZERO,i.zi.ONE_MINUS_SRC_ALPHA);function s(e){return e===r.A.FrontFace?null:e===r.A.Alpha?l:a}var f=5e5,c={factor:-1,units:-2};function d(e){return e?c:null}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.wb.LESS;return e===r.A.NONE||e===r.A.FrontFace?t:i.wb.LEQUAL}},25920:function(e,t,n){var r;n.d(t,{A:function(){return r}}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(r||(r={}))},68401:function(e,t,n){var r,i,u,o,a,l,s,f,c,d,_;n.d(t,{CE:function(){return s},Gv:function(){return i},JJ:function(){return c},Rw:function(){return o},Ti:function(){return _},V_:function(){return l},Vr:function(){return r},hU:function(){return a}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(i||(i={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(u||(u={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(o||(o={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(a||(a={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(s||(s={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(f||(f={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(_||(_={}))},40235:function(e,t,n){n.d(t,{mO:function(){return l}});var r=n(43144),i=n(15671),u=n(30308),o=(0,r.Z)((function e(t,n,r,u,o,a,l,s,f){(0,i.Z)(this,e),this.createQuery=t,this.deleteQuery=n,this.resultAvailable=r,this.getResult=u,this.disjoint=o,this.beginTimeElapsed=a,this.endTimeElapsed=l,this.createTimestamp=s,this.timestampBits=f})),a=!1;function l(e,t){if(t.disjointTimerQuery)return null;var n=e.getExtension("EXT_disjoint_timer_query_webgl2");return n&&(0,u.Z)(e)?new o((function(){return e.createQuery()}),(function(t){e.deleteQuery(t),a=!1}),(function(t){return e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)}),(function(t){return e.getQueryParameter(t,e.QUERY_RESULT)}),(function(){return e.getParameter(n.GPU_DISJOINT_EXT)}),(function(t){a||(a=!0,e.beginQuery(n.TIME_ELAPSED_EXT,t))}),(function(){e.endQuery(n.TIME_ELAPSED_EXT),a=!1}),(function(e){return n.queryCounterEXT(e,n.TIMESTAMP_EXT)}),(function(){return e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)})):(n=e.getExtension("EXT_disjoint_timer_query"))?new o((function(){return n.createQueryEXT()}),(function(e){n.deleteQueryEXT(e),a=!1}),(function(e){return n.getQueryObjectEXT(e,n.QUERY_RESULT_AVAILABLE_EXT)}),(function(e){return n.getQueryObjectEXT(e,n.QUERY_RESULT_EXT)}),(function(){return e.getParameter(n.GPU_DISJOINT_EXT)}),(function(e){a||(a=!0,n.beginQueryEXT(n.TIME_ELAPSED_EXT,e))}),(function(){n.endQueryEXT(n.TIME_ELAPSED_EXT),a=!1}),(function(e){return n.queryCounterEXT(e,n.TIMESTAMP_EXT)}),(function(){return n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)})):null}},30308:function(e,t,n){function r(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}n.d(t,{Z:function(){return r}})},36207:function(e,t,n){n.d(t,{BK:function(){return h},LZ:function(){return _},if:function(){return l},jp:function(){return Q},sm:function(){return I},wK:function(){return s},zp:function(){return d}});var r=n(1413),i=n(15671),u=n(43144),o=n(68401),a=n(8548);function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.db.ADD,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:n,opAlpha:n,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function s(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.db.ADD,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:a.db.ADD,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:n,dstAlpha:r,opRgb:i,opAlpha:u,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}var f={face:a.LR.BACK,mode:a.Wf.CCW},c={face:a.LR.FRONT,mode:a.Wf.CCW},d=function(e){return e===o.Vr.Back?f:e===o.Vr.Front?c:null},_={zNear:0,zFar:1},h={r:!0,g:!0,b:!0,a:!0};function g(e){return R.intern(e)}function E(e){return N.intern(e)}function v(e){return L.intern(e)}function T(e){return F.intern(e)}function p(e){return U.intern(e)}function b(e){return B.intern(e)}function S(e){return w.intern(e)}function A(e){return M.intern(e)}function I(e){return X.intern(e)}var O=function(){function e(t,n){(0,i.Z)(this,e),this._makeKey=t,this._makeRef=n,this._interns=new Map}return(0,u.Z)(e,[{key:"intern",value:function(e){var t;if(!e)return null;var n=this._makeKey(e),r=this._interns;return r.has(n)||r.set(n,this._makeRef(e)),null!==(t=r.get(n))&&void 0!==t?t:null}}]),e}();function m(e){return"["+e.join(",")+"]"}var R=new O(C,(function(e){return(0,r.Z)({__tag:"Blending"},e)}));function C(e){return e?m([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}var N=new O(P,(function(e){return(0,r.Z)({__tag:"Culling"},e)}));function P(e){return e?m([e.face,e.mode]):null}var L=new O(y,(function(e){return(0,r.Z)({__tag:"PolygonOffset"},e)}));function y(e){return e?m([e.factor,e.units]):null}var F=new O(D,(function(e){return(0,r.Z)({__tag:"DepthTest"},e)}));function D(e){return e?m([e.func]):null}var U=new O(W,(function(e){return(0,r.Z)({__tag:"StencilTest"},e)}));function W(e){return e?m([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}var B=new O(x,(function(e){return(0,r.Z)({__tag:"DepthWrite"},e)}));function x(e){return e?m([e.zNear,e.zFar]):null}var w=new O(k,(function(e){return(0,r.Z)({__tag:"ColorWrite"},e)}));function k(e){return e?m([e.r,e.g,e.b,e.a]):null}var M=new O(G,(function(e){return(0,r.Z)({__tag:"StencilWrite"},e)}));function G(e){return e?m([e.mask]):null}var X=new O((function(e){return e?m([C(e.blending),P(e.culling),y(e.polygonOffset),D(e.depthTest),W(e.stencilTest),x(e.depthWrite),k(e.colorWrite),G(e.stencilWrite)]):null}),(function(e){return{blending:g(e.blending),culling:E(e.culling),polygonOffset:v(e.polygonOffset),depthTest:T(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:b(e.depthWrite),colorWrite:S(e.colorWrite),stencilWrite:A(e.stencilWrite)}}));var Q=function(){function e(t){(0,i.Z)(this,e),this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}return(0,u.Z)(e,[{key:"setPipeline",value:function(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}},{key:"invalidateBlending",value:function(){this._blendingInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateCulling",value:function(){this._cullingInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidatePolygonOffset",value:function(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateDepthTest",value:function(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateStencilTest",value:function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateDepthWrite",value:function(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateColorWrite",value:function(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateStencilWrite",value:function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}},{key:"_setBlending",value:function(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}},{key:"_setCulling",value:function(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}},{key:"_setPolygonOffset",value:function(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}},{key:"_setDepthTest",value:function(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}},{key:"_setStencilTest",value:function(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}},{key:"_setDepthWrite",value:function(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}},{key:"_setColorWrite",value:function(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}},{key:"_setStencilWrite",value:function(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}},{key:"_setSubState",value:function(e,t,n,r){return(n||e!==t)&&(r(e),this._pipelineInvalid=!0),e}}]),e}()}}]);
//# sourceMappingURL=3789.6ec18802.chunk.js.map