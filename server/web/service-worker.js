if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),c={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"web"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/291.3bdcf25b.css",revision:null},{url:"/css/416.5a64521f.css",revision:null},{url:"/css/634.09c0d322.css",revision:null},{url:"/css/861.1efcfa85.css",revision:null},{url:"/css/app.c39ce100.css",revision:null},{url:"/img/468f663b9e4290b435061eb877595a66.2938c090.jpeg",revision:null},{url:"/img/bb29e3a3369244749a29eb3d85585db2.3028c94b.jpeg",revision:null},{url:"/img/index.10a2b426.png",revision:null},{url:"/img/logo.d9db2f82.png",revision:null},{url:"/index.html",revision:"f4271118a9c7b0692243227d5fbbb78d"},{url:"/js/291.58255498.js",revision:null},{url:"/js/416.fbf8fac6.js",revision:null},{url:"/js/634.61ce604a.js",revision:null},{url:"/js/741.c7bc6827.js",revision:null},{url:"/js/861.2a364513.js",revision:null},{url:"/js/app.b360991c.js",revision:null},{url:"/js/chunk-vendors.b277f8bd.js",revision:null},{url:"/manifest.json",revision:"4ccad91926a6e3abd713585ec10360bb"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
