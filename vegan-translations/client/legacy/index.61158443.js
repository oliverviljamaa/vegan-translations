import{_ as t,r as n,a as s,b as a,c as r,d as e,i as c,s as o,e as i,S as u,f,g as l,t as h,q as p,h as v,j as d,k as m,l as y,m as x,n as w,o as R,p as b,u as g,v as j,w as k}from"./client.796dc7fb.js";function z(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,e=a(t);if(n){var c=a(this).constructor;s=Reflect.construct(e,arguments,c)}else s=e.apply(this,arguments);return r(this,s)}}function B(t){var n,s,a,r=t[0].GB+"";return{c:function(){n=f(),s=l("p"),a=h(r),this.h()},l:function(t){p('[data-svelte="svelte-wk9z9f"]',document.head).forEach(v),n=d(t),s=m(t,"P",{class:!0});var e=y(s);a=x(e,r),e.forEach(v),this.h()},h:function(){document.title="🌱 Vegan translations",w(s,"class","svelte-192tw9z")},m:function(t,r){R(t,n,r),R(t,s,r),b(s,a)},p:function(t,n){1&g(n,1)[0]&&r!==(r=t[0].GB+"")&&j(a,r)},i:k,o:k,d:function(t){t&&v(n),t&&v(s)}}}function D(){return E.apply(this,arguments)}function E(){return(E=t(n.mark((function t(){var s,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("translations.json");case 2:return s=t.sent,t.next=5,s.json();case 5:if(a=t.sent,200!==s.status){t.next=10;break}return t.abrupt("return",{translations:a});case 10:this.error(s.status,a.message);case 11:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function G(t,n,s){var a=n.translations;return t.$$set=function(t){"translations"in t&&s(0,a=t.translations)},[a]}var P=function(t){s(a,u);var n=z(a);function a(t){var s;return e(this,a),s=n.call(this),c(i(s),t,G,B,o,{translations:0}),s}return a}();export default P;export{D as preload};
