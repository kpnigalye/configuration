"use strict";(self.webpackChunkwru_widget_react=self.webpackChunkwru_widget_react||[]).push([[897],{897:function(n,e,t){t.r(e);var o=t(294),r=t(280),i=t(140),a=t(362),c=(t(930),o.lazy((function(){return t.e(453).then(t.bind(t,453))})));e.default=function(n){var e,l,s=n.index,u=n.article,d=n.parentArticleId,p=n.gaTrackingId,m=n.baseUrl,w=n.category,f=(0,r.Jn)(u.ImageUrl),g=window.wruConfig.openRecommendationInNewTab&&!0===window.wruConfig.openRecommendationInNewTab,h=u.Slug;return u.Slug.includes(m)||(h="/"===h[0]?"".concat(m).concat(h):"".concat(m,"/").concat(h),console.log({slugUrl:h})),o.createElement("li",{className:"wru-recomendation",onClick:function(){(0,i.dC)(u.Cid,d,u.Model,s,w).catch((function(n){return console.error(n)})),p&&t.e(102).then(t.bind(t,102)).then((function(n){return n.handleArticleClickForGA(s,u.Category)})).catch((function(n){return console.error(n)}))}},o.createElement("a",{href:h,target:g?"_blank":"_self"},o.createElement("img",{alt:u.Description,src:f,loading:"lazy"}),o.createElement("span",{className:"wru-recomendation-header"},u.Description),null===(e=window.wruConfig.customFields)||void 0===e?void 0:e.map((function(n){return o.createElement("span",{className:"wru-recomendation-".concat(n.toLowerCase())},u[n])})),o.createElement("div",{className:"wru-recommendation-footer"},!window.wruConfig.excludeArticlePublishDate&&o.createElement(o.Suspense,null,o.createElement(c,{timestamp:u.Timestamp})),window.wruConfig.tooltipEnabled&&o.createElement("div",{className:"wru-tooltip-wrapper"},null===(l=u.Hightlights)||void 0===l?void 0:l.split(",").map((function(n){var e=o.lazy((function(){return t.e(351).then(t.bind(t,351))}));if(Object.values(a.f6).includes(n)){var r=n.split("_").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" ");return o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading highlights")},o.createElement(e,{icon:n,text:r,key:"".concat(n,"-").concat(s)}))}}))))))}},717:function(n,e,t){var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,".wru-tooltip-wrapper {\n  display: flex;\n  position: relative;\n}\n\n.wru-tooltip-box {\n  background-color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n  border-radius: 3px;\n  padding: 4px;\n  position: absolute;\n  bottom: 130%;\n  right: 10%;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  color: white;\n  display: none;\n}\n\n/* Reference: https://stackoverflow.com/a/4502647/5782438 */\n.wru-hightlight-icon:hover .wru-tooltip-box, .wru-hightlight-icon:active .wru-tooltip-box {\n  display: block;\n  transition-duration: 2s;\n}\n\n.wru-tooltip-arrow {\n  position: absolute;\n  top: 100%;\n  left: 55%;\n  border-width: 10px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;\n}\n\n/* Reference: https://stackoverflow.com/a/43397509/5782438 */\n.wru-hide-tooltip-box {\n  -webkit-animation: cssAnimation 2s forwards; \n  animation: cssAnimation 2s forwards;\n}\n@keyframes cssAnimation {\n  0%   {opacity: 1;}\n  90%  {opacity: 1;}\n  100% {opacity: 0;}\n}\n@-webkit-keyframes cssAnimation {\n  0%   {opacity: 1;}\n  90%  {opacity: 1;}\n  100% {opacity: 0;}\n}\n\n",""]),e.Z=a},930:function(n,e,t){var o=t(379),r=t.n(o),i=t(795),a=t.n(i),c=t(569),l=t.n(c),s=t(565),u=t.n(s),d=t(216),p=t.n(d),m=t(589),w=t.n(m),f=t(717),g={};g.styleTagTransform=w(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals}}]);