"use strict";(self.webpackChunkwru_widget_react=self.webpackChunkwru_widget_react||[]).push([[625],{189:function(e,n,t){t.r(n);var l=t(294),r=t(362),i=(t(625),l.lazy((function(){return t.e(24).then(t.bind(t,24))}))),u=l.lazy((function(){return t.e(525).then(t.bind(t,525))})),c=l.lazy((function(){return t.e(802).then(t.bind(t,802))}));n.default=function(e){var n=e.highlights,t=e.index;return l.createElement(l.Fragment,null,null==n?void 0:n.split(",").map((function(e){var n,a,o;if(null!==(n=window.wruConfig.tooltip)&&void 0!==n&&n.locale&&null!==(a=window.wruConfig.tooltip)&&void 0!==a&&a.locale[e]){var s;o=null===(s=window.wruConfig.tooltip)||void 0===s?void 0:s.locale[e]}else{if(!Object.values(r.c6).includes(e))return l.createElement(l.Fragment,null);o=e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}return l.createElement("div",{key:"".concat(e,"-").concat(t),className:"wru-highlight-icon"},l.createElement(l.Suspense,null,function(e){switch(e){case r.c6.LATEST:return l.createElement(i,null);case r.c6.TRENDING:return l.createElement(u,null);case r.c6.MOST_POPULAR:return l.createElement(c,null);default:return l.createElement(l.Fragment,null)}}(e)),l.createElement("div",{className:"wru-tooltip-box wru-hide-tooltip-box"},o))})))}}}]);