(function(){"use strict";var e={61:function(e,t,n){var r=n(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a=n(1),s={},c=(0,a.Z)(s,o,i,!1,null,null,null),u=c.exports,l=n(205);(0,l.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(345);r["default"].use(f.ZP);const d=[{path:"/",name:"main",component:()=>n.e(861).then(n.bind(n,861)),children:[{path:"/",name:"home",component:()=>Promise.all([n.e(741),n.e(416)]).then(n.bind(n,416))},{path:"/articles/:id",name:"article",component:()=>Promise.all([n.e(741),n.e(634)]).then(n.bind(n,634)),props:!0}]},{path:"/heroes/:id",name:"hero",component:()=>Promise.all([n.e(741),n.e(291)]).then(n.bind(n,291)),props:!0}],p=new f.ZP({mode:"hash",base:"/",routes:d});var v=p,h=n(629);r["default"].use(h.ZP);var m=new h.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),g=n(697),b=n.n(g),y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"card bg-white p-3 mt-3"},[t("div",{staticClass:"card-header d-flex ai-center pb-3"},[t("i",{staticClass:"iconfont icon-menu",class:`icon-${e.icon}`}),t("div",{staticClass:"fs-xl flex-1 px-2"},[e._v(e._s(e.title))]),t("i",{staticClass:"iconfont icon-menu1"})]),t("div",{staticClass:"card-body pt-3"},[e._t("default")],2)])},w=[],C={props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},k=C,_=(0,a.Z)(k,y,w,!1,null,null,null),O=_.exports,S=function(){var e=this,t=e._self._c;return t("m-card",{attrs:{icon:e.icon,title:e.title}},[t("div",{staticClass:"card-body pt-3"},[t("div",{staticClass:"nav jc-between"},e._l(e.categories,(function(n,r){return t("div",{key:r,staticClass:"nav-item",class:{active:e.active===r},on:{click:function(t){return e.$refs.list.swiperInstance.slideTo(r)}}},[t("div",{staticClass:"nav-link"},[e._v(e._s(n.name))])])})),0),t("div",{staticClass:"pt-3"},[t("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":()=>e.active=e.$refs.list.swiperInstance.realIndex}},e._l(e.categories,(function(n,r){return t("swiper-slide",{key:r},[e._t("items",null,{category:n})],2)})),1)],1)])])},j=[],x={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data(){return{active:0}}},P=x,A=(0,a.Z)(P,S,j,!1,null,null,null),E=A.exports;r["default"].use(b()),r["default"].component("m-card",O),r["default"].component("m-list-card",E),r["default"].config.productionTip=!1,new r["default"]({router:v,store:m,render:e=>e(u)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{291:"58255498",416:"fbf8fac6",634:"61ce604a",741:"c7bc6827",861:"2a364513"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{291:"3bdcf25b",416:"5a64521f",634:"09c0d322",861:"1efcfa85"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="web:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={291:1,416:1,634:1,861:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkweb"]=self["webpackChunkweb"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(61)}));r=n.O(r)})();
//# sourceMappingURL=app.b360991c.js.map