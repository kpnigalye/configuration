"use strict";(self.webpackChunkwru_widget_react=self.webpackChunkwru_widget_react||[]).push([[453],{453:function(o,n,i){i.r(n),i.d(n,{default:function(){return l}});var t=i(152),u=i(294),a=function(o){for(var n,i,t=[],u=null===(n=window.wruConfig)||void 0===n||null===(i=n.dateOptions)||void 0===i?void 0:i.numbers,a=0;a<o.length;++a)t.push(u[o[a]]);return t.join("")},r=i(362),e={day:"numeric",month:"short",year:"numeric"},d=function(o){var n,i,t,u,d,l,s=function(o,n){var i=Math.abs(n-o)/1e3,t=Math.floor(i/86400);i-=86400*t;var u=Math.floor(i/3600)%24;i-=3600*u;var a=Math.floor(i/60)%60;return i-=60*a,{days:t,hours:u,minutes:a}}(new Date,new Date(o)),w=s.days,c=s.hours,v=s.minutes;return w>0?(l=new Date(o).toLocaleDateString(void 0,e).split(" ").join(" "),null!==(t=window.wruConfig)&&void 0!==t&&null!==(u=t.dateOptions)&&void 0!==u&&u.months&&(null===(d=window.wruConfig)||void 0===d?void 0:d.dateOptions.locales)===r.aB.DHAKA?l.split(" ").map((function(o,n){var i,t;return 1===n?null===(i=window.wruConfig)||void 0===i||null===(t=i.dateOptions)||void 0===t?void 0:t.months[o]:o.split("").map((function(o){var n;return null===(n=window.wruConfig)||void 0===n?void 0:n.dateOptions.numbers[o]})).join("")})).join(" "):l):null!==(n=window.wruConfig)&&void 0!==n&&null!==(i=n.dateOptions)&&void 0!==i&&i.locales?function(o,n,i){var t,u,r,e;if(o>0)n+=1===o?"".concat(a(o.toString())," ").concat(null===(t=window.wruConfig)||void 0===t||null===(u=t.dateOptions)||void 0===u?void 0:u.keywords["hour ago"]):"".concat(a(o.toString())," ").concat(null===(r=window.wruConfig)||void 0===r||null===(e=r.dateOptions)||void 0===e?void 0:e.keywords["hours ago"]);else if(i>=1){var d,l,s,w;n+=1===i?"".concat(a(i.toString())," ").concat(null===(d=window.wruConfig)||void 0===d||null===(l=d.dateOptions)||void 0===l?void 0:l.keywords["minute ago"]):"".concat(a(i.toString())," ").concat(null===(s=window.wruConfig)||void 0===s||null===(w=s.dateOptions)||void 0===w?void 0:w.keywords["minutes ago"])}else{var c,v;n+=null===(c=window.wruConfig)||void 0===c||null===(v=c.dateOptions)||void 0===v?void 0:v.keywords["a while ago"]}return n}(c,"",v):function(o,n,i){return n+=o>0?"".concat(o,1===o?" hour ago":" hours ago"):i>=1?"".concat(i,1===i?" minute ago":" minutes ago"):"a while ago"}(c,"",v)},l=function(o){var n=o.timestamp,i=(0,u.useState)(n),a=(0,t.Z)(i,2),r=a[0],e=a[1];return(0,u.useEffect)((function(){var o=d(r);e(o)}),[n]),u.createElement("span",{className:"wru-recomendation-publish-on"},r)}}}]);