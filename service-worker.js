!function(){"use strict";const e=["/client/client.7107685e.js","/client/index.df232f12.js"].concat(["/service-worker-index.html","/chevron.svg","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.svg","/manifest.json","/translations.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1597492575359").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1597492575359"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1597492575359").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
