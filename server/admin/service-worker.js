if(!self.define){let n,s={};const i=(i,e)=>(i=new URL(i+".js",e).href,s[i]||new Promise((s=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=s,document.head.appendChild(n)}else n=i,importScripts(i),s()})).then((()=>{let n=s[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(e,l)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const u=n=>i(n,r),o={module:{uri:r},exports:d,require:u};s[r]=Promise.all(e.map((n=>o[n]||u(n)))).then((n=>(l(...n),d)))}}define(["./workbox-db5fc017"],(function(n){"use strict";n.setCacheNameDetails({prefix:"admin"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/admin/css/753.31a5522d.css",revision:null},{url:"/admin/css/827.499c7884.css",revision:null},{url:"/admin/css/app.232c74f6.css",revision:null},{url:"/admin/css/chunk-vendors.b22e84f4.css",revision:null},{url:"/admin/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/admin/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/admin/index.html",revision:"a709e43d14c9c60c1b418d2e58ddfaf6"},{url:"/admin/js/133.b86f3d8a.js",revision:null},{url:"/admin/js/190.d558a960.js",revision:null},{url:"/admin/js/311.7f86f441.js",revision:null},{url:"/admin/js/321.e8b6da05.js",revision:null},{url:"/admin/js/346.3bc80e4a.js",revision:null},{url:"/admin/js/425.139e0c89.js",revision:null},{url:"/admin/js/482.88de0d6e.js",revision:null},{url:"/admin/js/506.25b4e75d.js",revision:null},{url:"/admin/js/648.a305af19.js",revision:null},{url:"/admin/js/753.334d9afd.js",revision:null},{url:"/admin/js/771.c01d3e7d.js",revision:null},{url:"/admin/js/782.cd54d037.js",revision:null},{url:"/admin/js/827.f4dbec40.js",revision:null},{url:"/admin/js/974.08ccc64e.js",revision:null},{url:"/admin/js/app.1f56f605.js",revision:null},{url:"/admin/js/chunk-vendors.7a78000c.js",revision:null},{url:"/admin/manifest.json",revision:"ad1c7122216ff6e919bd68f90e80d94d"},{url:"/admin/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
