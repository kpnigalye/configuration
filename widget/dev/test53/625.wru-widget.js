"use strict";(self.webpackChunkwru_widget_react=self.webpackChunkwru_widget_react||[]).push([[625],{625:function(e,t,n){n.r(t);var r=n(294),l=n(362),u=(n(930),r.lazy((function(){return n.e(24).then(n.bind(n,24))}))),c=r.lazy((function(){return n.e(525).then(n.bind(n,525))})),a=r.lazy((function(){return n.e(802).then(n.bind(n,802))}));t.default=function(e){var t=e.hightlights,n=e.index;return r.createElement(r.Fragment,null,null==t?void 0:t.split(",").map((function(e){if(Object.values(l.f6).includes(e)){var t=e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");return r.createElement("div",{key:"".concat(e,"-").concat(n),className:"wru-hightlight-icon",onClick:function(e){return e.preventDefault()}},function(e){switch(e){case l.f6.LATEST:return r.createElement(r.Suspense,null,r.createElement(u,null));case l.f6.TRENDING:return r.createElement(r.Suspense,null,r.createElement(c,null));case l.f6.MOST_POPULAR:return r.createElement(r.Suspense,null,r.createElement(a,null));default:return r.createElement(r.Fragment,null)}}(e),r.createElement("div",{className:"wru-tooltip-box wru-hide-tooltip-box"},t))}})))}}}]);