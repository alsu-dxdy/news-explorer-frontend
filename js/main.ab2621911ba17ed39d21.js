!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=123)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"n",(function(){return p})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return v})),n.d(e,"m",(function(){return h})),n.d(e,"k",(function(){return y})),n.d(e,"l",(function(){return g})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return _}));var r=n(45),o=n(46),i=n(31),c=n(32),u={isLoggedIn:""},a=new r.a({baseUrl:"https://api.iseeknews.space",headers:{"Content-Type":"application/json"}}),s=new o.a({baseUrl:"https://praktikum.tk/news/v2/top-headlines?country=us&apiKey=a3389c152ac04c848350954b53570e25&",headers:{"Content-Type":"application/json"}}),f=document.querySelector(".header__button_authorize"),l=document.querySelector(".header__button_name"),p=document.querySelector(".search__form"),d=document.querySelector(".popup__form_authorize"),v=document.querySelector(".popup__form_registration"),h=document.querySelector(".popup__link_registration"),y=document.querySelector(".popup__link_authorize"),g=document.querySelector(".popup__link_log-in"),m=document.querySelector(".articles-list"),b=new i.a,_=new c.a(m,b)},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(77))},function(t,e,n){var r=n(1),o=n(15),i=n(36),c=n(58),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),o=n(49),i=n(5),c=n(22),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(21).f,i=n(10),c=n(14),u=n(35),a=n(51),s=n(56);t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(8),o=n(7),i=n(18);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(48),o=n(33);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(52),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(1),o=n(15),i=n(10),c=n(6),u=n(35),a=n(50),s=n(24),f=s.get,l=s.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a.call(this)}))},function(t,e,n){var r=n(23),o=n(78);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(42),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(33);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(9),o=n(4),i=n(26),c=n(3),u=n(19),a=n(16),s=n(43),f=n(69),l=n(57),p=n(2),d=n(39),v=p("isConcatSpreadable"),h=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var e,n,r,o,i,c=u(this),l=f(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(i=-1===e?c:arguments[e])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(8),o=n(47),i=n(18),c=n(11),u=n(22),a=n(6),s=n(49),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e,n){var r,o,i,c=n(79),u=n(1),a=n(3),s=n(10),f=n(6),l=n(27),p=n(25),d=u.WeakMap;if(c){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports={}},function(t,e,n){var r=n(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(15),o=n(36),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(14),o=n(82),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,e){t.exports={}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(66),n(70),n(20),n(60);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"create",value:function(t,e){var n=document.createElement("div");return n.classList.add("article-card"),n.insertAdjacentHTML("beforeend",'\n      <div class="article-card__image-container">\n        <div class="article-card__image">\n        <button class="article-card__like-icon"></button>\n        </div>\n\n      <div class="article-card__description">\n        <p class="article-card__date">'.concat(t.publishedAt,'</p>\n        <h3 class="article-card__title">').concat(t.description,'</h3>\n        <p class="article-card__text">').concat(t.content,'</p>\n        <p class="article-card__source">').concat(t.source.name,"</p>\n      </div>\n    </div>\n      ")),n.querySelector(".article-card__image").style.backgroundImage="url(".concat(t.urlToImage,")"),n.setAttribute("src","".concat(t.url)),n.setAttribute("keyword","".concat(e)),n}},{key:"like",value:function(t){t.target.classList.contains("article-card__like-icon")&&t.target.classList.toggle("article-card__like-icon_liked")}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.card=n}var e,n,o;return e=t,(n=[{key:"addCard",value:function(t){this.container.appendChild(t)}},{key:"render",value:function(t){for(var e=0;e<t.length;e++){var n=this.card.create(t[e]);this.container.appendChild(n)}}},{key:"renderMainPage",value:function(t,e){for(var n=0;n<t.length;n++){var r=this.card.create(t[n],e);this.container.appendChild(r)}}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(1),o=n(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(10);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(53),o=n(38).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r,o,i=n(1),c=n(59),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r,o,i,c,u=n(9),a=n(23),s=n(1),f=n(12),l=n(83),p=n(14),d=n(84),v=n(15),h=n(41),y=n(85),g=n(3),m=n(17),b=n(86),_=n(13),x=n(87),w=n(74),S=n(88),j=n(62).set,k=n(89),O=n(90),E=n(91),P=n(65),T=n(92),L=n(24),C=n(56),q=n(2),A=n(39),I=q("species"),M="Promise",z=L.get,D=L.set,U=L.getterFor(M),N=l,R=s.TypeError,F=s.document,B=s.process,G=v("inspectSource"),J=f("fetch"),V=P.f,W=V,K="process"==_(B),H=!!(F&&F.createEvent&&s.dispatchEvent),$=C(M,(function(){var t=G(N)!==String(N);if(66===A)return!0;if(!t&&!K&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!N.prototype.finally)return!0;if(A>=51&&/native code/.test(N))return!1;var e=N.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[I]=n,!(e.then((function(){}))instanceof n)})),Q=$||!w((function(t){N.all(t).catch((function(){}))})),Y=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;k((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,d=f.reject,v=f.domain;try{l?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===l?u=o:(v&&v.enter(),u=l(o),v&&(v.exit(),s=!0)),u===f.promise?d(R("Promise-chain cycle")):(a=Y(u))?a.call(u,p,d):p(u)):d(o)}catch(t){v&&!s&&v.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,n){var r,o;H?((r=F.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&E("Unhandled promise rejection",n)},tt=function(t,e){j.call(s,(function(){var n,r=e.value;if(et(e)&&(n=T((function(){K?B.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=K||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){j.call(s,(function(){K?B.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,X(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw R("Promise can't be resolved itself");var o=Y(n);o?k((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};$&&(N=function(t){b(this,N,M),m(t),r.call(this);var e=z(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){D(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(N.prototype,{then:function(t,e){var n=U(this),r=V(S(this,N));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=K?B.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=z(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},P.f=V=function(t){return t===N||t===i?new o(t):W(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new N((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof J&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(N,J.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:$},{Promise:N}),h(N,M,!1,!0),y(M),i=f(M),u({target:M,stat:!0,forced:$},{reject:function(t){var e=V(this);return e.reject.call(void 0,t),e.promise}}),u({target:M,stat:!0,forced:a||$},{resolve:function(t){return O(a&&this===i?N:this,t)}}),u({target:M,stat:!0,forced:Q},{all:function(t){var e=this,n=V(e),r=n.resolve,o=n.reject,i=T((function(){var n=m(e.resolve),i=[],c=0,u=1;x(t,(function(t){var a=c++,s=!1;i.push(void 0),u++,n.call(e,t).then((function(t){s||(s=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=V(e),r=n.reject,o=T((function(){var o=m(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(7).f,o=n(6),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(22),o=n(7),i=n(18);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(5),o=n(93),i=n(38),c=n(25),u=n(63),a=n(34),s=n(27)("IE_PROTO"),f=function(){},l=function(){var t,e=a("iframe"),n=i.length;for(e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[i[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[s]=t):n=l(),void 0===e?n:o(n,e)},c[s]=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(20),n(28),n(40);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e}var e,n,o;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.resolve(t.json())}},{key:"getArticles",value:function(){var t=this;return fetch("".concat(this.options.baseUrl,"/articles"),{method:"GET",headers:{authorization:this.options.headers.authorization},credentials:"include"}).then((function(e){return t._getResponseData(e)}))}},{key:"postArticle",value:function(t,e,n,r,o,i,c){var u=this;return fetch("".concat(this.options.baseUrl,"/articles"),{method:"POST",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({keyword:t,title:e,text:n,date:r,source:o,link:i,image:c})}).then((function(t){return u._getResponseData(t)}))}},{key:"deleteArticle",value:function(t){var e=this;return fetch("".concat(this.options.baseUrl,"/articles/").concat(t),{method:"DELETE",headers:{authorization:this.options.headers.authorization},credentials:"include"}).then((function(t){return e._getResponseData(t)}))}},{key:"signUp",value:function(t,e,n){var r=this;return fetch("".concat(this.options.baseUrl,"/signup"),{method:"POST",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:e,name:n})}).then((function(t){return r._getResponseData(t)}))}},{key:"signIn",value:function(t,e){var n=this;return fetch("".concat(this.options.baseUrl,"/signin"),{method:"POST",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:e})}).then((function(t){return n._getResponseData(t)}))}},{key:"logout",value:function(){return fetch("".concat(this.options.baseUrl,"/logout"),{method:"DELETE",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include"}).then((function(t){return t.ok?t:Promise.resolve(t)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{authorization:this.options.headers.authorization}}).then((function(e){return t._getResponseData(e)}))}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(20),n(28),n(40);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e}var e,n,o;return e=t,(n=[{key:"getInitialCards",value:function(t){return fetch("".concat(this.options.baseUrl,"q=").concat(t),{method:"GET"}).then((function(t){return t.json()}))}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(4),o=n(13),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(8),o=n(4),i=n(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(15);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(6),o=n(80),i=n(21),c=n(7);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,a(e,f))}}},function(t,e,n){t.exports=n(1)},function(t,e,n){var r=n(6),o=n(11),i=n(81).indexOf,c=n(25);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(42),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(4),o=n(2),i=n(39),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(4);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(12);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(8),o=n(7).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,e,n){var r=n(13),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r,o,i,c=n(1),u=n(4),a=n(13),s=n(30),f=n(63),l=n(34),p=n(64),d=c.location,v=c.setImmediate,h=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,_={},x=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},w=function(t){return function(){x(t)}},S=function(t){x(t.data)},j=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};v&&h||(v=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},h=function(t){delete _[t]},"process"==a(y)?r=function(t){y.nextTick(w(t))}:m&&m.now?r=function(t){m.now(w(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=S,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(w(t),0)}:(r=j,c.addEventListener("message",S,!1))),t.exports={set:v,clear:h}},function(t,e,n){var r=n(12);t.exports=r("document","documentElement")},function(t,e,n){var r=n(59);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){"use strict";var r=n(17),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";var r=n(9),o=n(1),i=n(12),c=n(23),u=n(8),a=n(58),s=n(4),f=n(6),l=n(26),p=n(3),d=n(5),v=n(19),h=n(11),y=n(22),g=n(18),m=n(44),b=n(67),_=n(37),x=n(94),w=n(55),S=n(21),j=n(7),k=n(47),O=n(10),E=n(14),P=n(15),T=n(27),L=n(25),C=n(36),q=n(2),A=n(68),I=n(75),M=n(41),z=n(24),D=n(95).forEach,U=T("hidden"),N=q("toPrimitive"),R=z.set,F=z.getterFor("Symbol"),B=Object.prototype,G=o.Symbol,J=i("JSON","stringify"),V=S.f,W=j.f,K=x.f,H=k.f,$=P("symbols"),Q=P("op-symbols"),Y=P("string-to-symbol-registry"),X=P("symbol-to-string-registry"),Z=P("wks"),tt=o.QObject,et=!tt||!tt.prototype||!tt.prototype.findChild,nt=u&&s((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=V(B,e);r&&delete B[e],W(t,e,n),r&&t!==B&&W(B,e,r)}:W,rt=function(t,e){var n=$[t]=m(G.prototype);return R(n,{type:"Symbol",tag:t,description:e}),u||(n.description=e),n},ot=a&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},it=function(t,e,n){t===B&&it(Q,e,n),d(t);var r=y(e,!0);return d(n),f($,r)?(n.enumerable?(f(t,U)&&t[U][r]&&(t[U][r]=!1),n=m(n,{enumerable:g(0,!1)})):(f(t,U)||W(t,U,g(1,{})),t[U][r]=!0),nt(t,r,n)):W(t,r,n)},ct=function(t,e){d(t);var n=h(e),r=b(n).concat(ft(n));return D(r,(function(e){u&&!ut.call(n,e)||it(t,e,n[e])})),t},ut=function(t){var e=y(t,!0),n=H.call(this,e);return!(this===B&&f($,e)&&!f(Q,e))&&(!(n||!f(this,e)||!f($,e)||f(this,U)&&this[U][e])||n)},at=function(t,e){var n=h(t),r=y(e,!0);if(n!==B||!f($,r)||f(Q,r)){var o=V(n,r);return!o||!f($,r)||f(n,U)&&n[U][r]||(o.enumerable=!0),o}},st=function(t){var e=K(h(t)),n=[];return D(e,(function(t){f($,t)||f(L,t)||n.push(t)})),n},ft=function(t){var e=t===B,n=K(e?Q:h(t)),r=[];return D(n,(function(t){!f($,t)||e&&!f(B,t)||r.push($[t])})),r};(a||(E((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=C(t),n=function(t){this===B&&n.call(Q,t),f(this,U)&&f(this[U],e)&&(this[U][e]=!1),nt(this,e,g(1,t))};return u&&et&&nt(B,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return F(this).tag})),k.f=ut,j.f=it,S.f=at,_.f=x.f=st,w.f=ft,u&&(W(G.prototype,"description",{configurable:!0,get:function(){return F(this).description}}),c||E(B,"propertyIsEnumerable",ut,{unsafe:!0})),A.f=function(t){return rt(q(t),t)}),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:G}),D(b(Z),(function(t){I(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(Y,e))return Y[e];var n=G(e);return Y[e]=n,X[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(X,t))return X[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),J)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=G();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ot(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),o[1]=e,J.apply(null,o)}});G.prototype[N]||O(G.prototype,N,G.prototype.valueOf),M(G,"Symbol"),L[U]=!0},function(t,e,n){var r=n(53),o=n(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(3),o=n(26),i=n(2)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(9),o=n(8),i=n(1),c=n(6),u=n(3),a=n(7).f,s=n(51),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var d=p.prototype=f.prototype;d.constructor=p;var v=d.toString,h="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;a(d,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=v.call(t);if(c(l,t))return"";var n=h?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e,n){var r=n(2),o=n(29),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(61),o=n(29),i=n(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(52),o=n(6),i=n(68),c=n(7).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,n){"use strict";var r=n(9),o=n(3),i=n(26),c=n(54),u=n(16),a=n(11),s=n(43),f=n(57),l=n(2)("species"),p=[].slice,d=Math.max;r({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,e){var n,r,f,v=a(this),h=u(v.length),y=c(t,h),g=c(void 0===e?h:e,h);if(i(v)&&("function"!=typeof(n=v.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[l])&&(n=void 0):n=void 0,n===Array||void 0===n))return p.call(v,y,g);for(r=new(void 0===n?Array:n)(d(g-y,0)),f=0;y<g;y++,f++)y in v&&s(r,f,v[y]);return r.length=f,r}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(1),o=n(35),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(1),o=n(50),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(12),o=n(37),i=n(55),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(11),o=n(16),i=n(54),c=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){"use strict";var r=n(61),o={};o[n(2)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){var r=n(1);t.exports=r.Promise},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(12),o=n(7),i=n(2),c=n(8),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5),o=n(71),i=n(16),c=n(30),u=n(72),a=n(73),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,d,v,h,y,g,m,b=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(d=u(t)))throw TypeError("Target is not iterable");if(o(d)){for(v=0,h=i(t.length);h>v;v++)if((y=f?b(r(m=t[v])[0],m[1]):b(t[v]))&&y instanceof s)return y;return new s(!1)}p=d.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=a(p,b,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(5),o=n(17),i=n(2)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,u,a,s,f,l=n(1),p=n(21).f,d=n(13),v=n(62).set,h=n(64),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==d(g),_=p(l,"queueMicrotask"),x=_&&_.value;x||(r=function(){var t,e;for(b&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:y&&!h?(u=!0,a=document.createTextNode(""),new y(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){v.call(l,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(5),o=n(3),i=n(65);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(1);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r=n(8),o=n(7),i=n(5),c=n(67);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(11),o=n(37).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(30),o=n(48),i=n(19),c=n(16),u=n(69),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,h,y){for(var g,m,b=i(d),_=o(b),x=r(v,h,3),w=c(_.length),S=0,j=y||u,k=e?j(d,w):n?j(d,0):void 0;w>S;S++)if((p||S in _)&&(m=x(g=_[S],S,b),t))if(e)k[S]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:a.call(k,g)}else if(f)return!1;return l?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){"use strict";n.r(e),n.d(e,"headerRender",(function(){return r})),n.d(e,"headerRenderLogout",(function(){return o})),n.d(e,"renderAccountButton",(function(){return i})),n.d(e,"renderAccountCount",(function(){return c}));n(20);function r(t,e){e&&(document.querySelector(".header__menu-articles").classList.add("header__menu-articles_is-opened"),document.querySelector(".header__button_name").classList.add("header__button_name_is-opened"),document.querySelector(".header__button_name").textContent=t,document.querySelector(".header__button_authorize").classList.add("header__button_hidden"))}function o(){document.querySelector(".header__menu-articles").classList.remove("header__menu-articles_is-opened"),document.querySelector(".header__button_name").classList.remove("header__button_name_is-opened"),document.querySelector(".header__button_authorize").classList.remove("header__button_hidden")}function i(t){document.querySelector(".header__button_name").textContent=t}function c(t,e,n){document.querySelector(".account-info__title").textContent="".concat(t,", у вас ").concat(e," сохранённых статей"),document.querySelector(".account-info__keywords_bold").textContent="".concat(n)}},,,,,,,,,,function(t,e,n){},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(76),n(60),n(28),n(40),n(31),n(32),n(45),n(46);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.popup=e,this.popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this))}var e,n,o;return e=t,(n=[{key:"open",value:function(){this.popup.classList.add("popup_is-opened")}},{key:"close",value:function(){this.popup.classList.remove("popup_is-opened")}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=e.querySelector("form"),this.button=this.form.querySelector("button"),this.form.addEventListener("input",this.setEventListeners.bind(this))}var e,n,r;return e=t,(n=[{key:"checkInputValidity",value:function(t,e){return t.validity.valueMissing?e.textContent="Это обязательное поле":t.validity.tooShort||t.validity.tooLong?e.textContent="Должно быть от 2 до 30 символов":t.validity.typeMismatch?e.textContent="Здесь должна быть ссылка":void(e.textContent="")}},{key:"setSubmitButtonState",value:function(t,e){return t.checkValidity()?(e.removeAttribute("disabled"),void e.classList.remove("button_disabled")):t.checkValidity()?void 0:(e.setAttribute("disabled",!0),void e.classList.add("button_disabled"))}},{key:"setEventListeners",value:function(t){this.checkInputValidity(t.target,t.target.closest("div").querySelector(".input__error")),this.setSubmitButtonState(this.form,this.button)}},{key:"setError",value:function(t){this.form.querySelector(".popup__error").textContent=t}}])&&i(e.prototype,n),r&&i(e,r),t}(),u=(n(106),n(0)),a=n(96),s=a.headerRender,f=a.headerRenderLogout,l=new o(document.querySelector(".popup_authorize")),p=new o(document.querySelector(".popup_registration")),d=new o(document.querySelector(".popup_success-registration"));new c(document.querySelector(".popup_authorize")),new c(document.querySelector(".popup_registration"));window.addEventListener("load",(function(){u.g.getUserInfo().then((function(t){if(t.message)return Promise.reject(t);u.a.isLoggedIn=!0,s(t.name,u.a.isLoggedIn)})).catch((function(t){console.log(t.message)}))})),u.m.addEventListener("click",(function(){l.close(),p.open()})),u.e.addEventListener("click",(function(){l.open()})),u.k.addEventListener("click",(function(){p.close(),l.open()})),u.l.addEventListener("click",(function(){d.close(),l.open()})),u.n.addEventListener("submit",(function(t){t.preventDefault(),u.h.getInitialCards(u.n.word.value).then((function(t){document.querySelector(".results").classList.add("results_is-opened"),u.d.renderMainPage(t.articles,u.n.word.value)})).catch((function(t){console.log(t)}))})),u.j.addEventListener("submit",(function(t){t.preventDefault(),u.g.signUp(u.j.email.value,u.j.password.value,u.j.name.value).then((function(t){if(t.message)return Promise.reject(t);u.j.reset(),p.close(),d.open()})).catch((function(t){u.j.querySelector(".popup__error").textContent=t.message}))})),u.i.addEventListener("submit",(function(t){t.preventDefault(),u.g.signIn(u.i.email.value,u.i.password.value).then((function(t){u.a.isLoggedIn=!0,u.i.reset(),l.close(),s(t.data,u.a.isLoggedIn)})).catch((function(t){console.log(t)}))})),u.f.addEventListener("click",(function(){u.g.logout().then((function(t){u.a.isLoggedIn=!1,f()})).catch((function(t){console.log(t)}))})),u.c.addEventListener("click",(function(t){if(t.target.classList.contains("article-card__like-icon"))u.g.postArticle(t.target.closest(".article-card").getAttribute("keyword"),t.target.closest(".article-card").querySelector(".article-card__title").textContent,t.target.closest(".article-card").querySelector(".article-card__text").textContent,t.target.closest(".article-card").querySelector(".article-card__date").textContent,t.target.closest(".article-card").querySelector(".article-card__source").textContent,t.target.closest(".article-card").getAttribute("src"),t.target.closest(".article-card").querySelector(".article-card__image").style.backgroundImage.slice(5,-2)).then((function(e){u.b.like(t)})).catch((function(t){console.log(t)}));else if(t.target.classList.contains("article-card__delete-icon")){var e=t.target.closest(".article-card").getAttribute("id");u.g.deleteArticle("".concat(e)).then((function(t){console.log(t.message)})).catch((function(t){console.log("Удаление неуспешно: ".concat(t))})),u.b.like(t)}}))}]);