import{_ as t,r as n,a,b as r,c as s,d as e,i as c,s as o,e as u,S as i,f as l,t as f,g as h,h as v,j as p,k as d,l as m,m as g,n as y,o as b,p as E,q as _,u as x,v as j,w,x as k,y as R,z as O,A as P,B as S,C as B}from"./client.9030d3b1.js";var C={GB:"🇬🇧 United Kingdom",EE:"🇪🇪 Estonia"};function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=r(t);if(n){var c=r(this).constructor;a=Reflect.construct(e,arguments,c)}else a=e.apply(this,arguments);return s(this,a)}}function G(t,n,a){var r=t.slice();return r[3]=n[a],r}function I(t){var n,a,r,s=C[t[3]]+"";return{c:function(){n=l("option"),a=f(s),this.h()},l:function(t){n=h(t,"OPTION",{value:!0});var r=v(n);a=p(r,s),r.forEach(d),this.h()},h:function(){n.__value=r=t[3],n.value=n.__value},m:function(t,r){m(t,n,r),g(n,a)},p:function(t,e){1&e&&s!==(s=C[t[3]]+"")&&y(a,s),1&e&&r!==(r=t[3])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&d(n)}}}function N(t){var n,a,r=t[0][t[1]]+"";return{c:function(){n=l("p"),a=f(r),this.h()},l:function(t){n=h(t,"P",{class:!0});var s=v(n);a=p(s,r),s.forEach(d),this.h()},h:function(){b(n,"class","svelte-1bmo72w")},m:function(t,r){m(t,n,r),g(n,a)},p:function(t,n){3&n&&r!==(r=t[0][t[1]]+"")&&y(a,r)},d:function(t){t&&d(n)}}}function T(t){for(var n,a,r,s,e,c,o,u,i=Object.keys(t[0]),f=[],p=0;p<i.length;p+=1)f[p]=I(G(t,i,p));var g=t[1]&&N(t);return{c:function(){n=E(),a=l("img"),r=E(),s=l("select");for(var t=0;t<f.length;t+=1)f[t].c();e=E(),g&&g.c(),c=_(),this.h()},l:function(t){x('[data-svelte="svelte-plrbrj"]',document.head).forEach(d),n=j(t),a=h(t,"IMG",{src:!0,alt:!0,class:!0}),r=j(t),s=h(t,"SELECT",{class:!0});for(var o=v(s),u=0;u<f.length;u+=1)f[u].l(o);o.forEach(d),e=j(t),g&&g.l(t),c=_(),this.h()},h:function(){document.title="🌱 Vegan travel",a.src!=="logo.svg"&&b(a,"src","logo.svg"),b(a,"alt",""),b(a,"class","svelte-1bmo72w"),b(s,"class","svelte-1bmo72w"),void 0===t[1]&&S((function(){return t[2].call(s)}))},m:function(i,l){m(i,n,l),m(i,a,l),m(i,r,l),m(i,s,l);for(var h=0;h<f.length;h+=1)f[h].m(s,null);w(s,t[1]),m(i,e,l),g&&g.m(i,l),m(i,c,l),o||(u=k(s,"change",t[2]),o=!0)},p:function(t,n){var a=R(n,1)[0];if(1&a){var r;for(i=Object.keys(t[0]),r=0;r<i.length;r+=1){var e=G(t,i,r);f[r]?f[r].p(e,a):(f[r]=I(e),f[r].c(),f[r].m(s,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=i.length}3&a&&w(s,t[1]),t[1]?g?g.p(t,a):((g=N(t)).c(),g.m(c.parentNode,c)):g&&(g.d(1),g=null)},i:O,o:O,d:function(t){t&&d(n),t&&d(a),t&&d(r),t&&d(s),P(f,t),t&&d(e),g&&g.d(t),t&&d(c),o=!1,u()}}}function $(){return q.apply(this,arguments)}function q(){return(q=t(n.mark((function t(){var a,r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("translations.json");case 2:return a=t.sent,t.next=5,a.json();case 5:if(r=t.sent,200!==a.status){t.next=10;break}return t.abrupt("return",{translations:r});case 10:this.error(a.status,r.message);case 11:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function z(t,n,a){var r,s=n.translations;return t.$$set=function(t){"translations"in t&&a(0,s=t.translations)},[s,r,function(){r=B(this),a(1,r),a(0,s)}]}var A=function(t){a(r,i);var n=D(r);function r(t){var a;return e(this,r),a=n.call(this),c(u(a),t,z,T,o,{translations:0}),a}return r}();export default A;export{$ as preload};
