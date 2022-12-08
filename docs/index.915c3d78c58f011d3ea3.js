/*! For license information please see index.915c3d78c58f011d3ea3.js.LICENSE.txt */
(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[826],{498:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,s=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw s}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>u}),e=n.hmd(e);var a={INVALID_PARAM_LANGUAGE:function(e){return"Invalid parameter for `language` provided. Expected a string, but got ".concat(r(e),".")},INVALID_PARAM_JSON:function(e){return"Invalid parameter for `json` provided. Expected an object, but got ".concat(r(e),".")},EMPTY_PARAM_LANGUAGE:function(){return"The parameter for `language` can't be an empty string."},EMPTY_PARAM_JSON:function(){return"The parameter for `json` must have at least one key/value pair."},INVALID_PARAM_KEY:function(e){return"Invalid parameter for `key` provided. Expected a string, but got ".concat(r(e),".")},NO_LANGUAGE_REGISTERED:function(e){return'No translation for language "'.concat(e,'" has been added, yet. Make sure to register that language using the `.add()` method first.')},TRANSLATION_NOT_FOUND:function(e,t){return'No translation found for key "'.concat(e,'" in language "').concat(t,'". Is there a key/value in your translation file?')},INVALID_PARAMETER_SOURCES:function(e){return"Invalid parameter for `sources` provided. Expected either a string or an array, but got ".concat(r(e),".")},FETCH_ERROR:function(e){return'Could not fetch "'.concat(e.url,'": ').concat(e.status," (").concat(e.statusText,")")},INVALID_ENVIRONMENT:function(){return"You are trying to execute the method `translatePageTo()`, which is only available in the browser. Your environment is most likely Node.js"},MODULE_NOT_FOUND:function(e){return e},MISMATCHING_ATTRIBUTES:function(e,t,n){return'The attributes "data-i18n" and "data-i18n-attr" must contain the same number of keys.\n\nValues in `data-i18n`:      ('.concat(e.length,") `").concat(e.join(" "),"`\nValues in `data-i18n-attr`: (").concat(t.length,") `").concat(t.join(" "),"`\n\nThe HTML element is:\n").concat(n.outerHTML)},INVALID_OPTIONS:function(e){return"Invalid config passed to the `Translator` constructor. Expected an object, but got ".concat(r(e),". Using default config instead.")}};function c(e){return function(t){if(e)try{for(var n=a[t],r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];throw new TypeError(n?n.apply(void 0,s):"Unhandled Error")}catch(e){var l=e.stack.split(/\n/g)[1],c=l.split(/@/),u=i(c,2),d=u[0],h=u[1];console.error("".concat(e.message,"\n\nThis error happened in the method `").concat(d,"` from: `").concat(h,"`.\n\nIf you don't want to see these error messages, turn off debugging by passing `{ debug: false }` to the constructor.\n\nError code: ").concat(t,"\n\nCheck out the documentation for more details about the API:\nhttps://github.com/andreasremdt/simple-translator#usage\n        "))}}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,t),this.debug=c(!0),("object"!=r(e)||Array.isArray(e))&&(this.debug("INVALID_OPTIONS",e),e={}),this.languages=new Map,this.config=Object.assign(t.defaultConfig,e);var n=this.config,o=n.debug,i=n.registerGlobally,l=n.detectLanguage;this.debug=c(o),i&&(this._globalObject[i]=this.translateForKey.bind(this)),l&&"browser"==this._env&&this._detectLanguage()}var i,l,a;return i=t,l=[{key:"_globalObject",get:function(){return"browser"==this._env?window:n.g}},{key:"_env",get:function(){return"undefined"!=typeof window?"browser":e.exports?"node":"browser"}},{key:"_detectLanguage",value:function(){var e=window.localStorage?localStorage.getItem(this.config.persistKey):void 0;if(e)this.config.defaultLanguage=e;else{var t=navigator.languages?navigator.languages[0]:navigator.language;this.config.defaultLanguage=t.substr(0,2)}}},{key:"_getValueFromJSON",value:function(e,t){var n=this.languages.get(t);return e.split(".").reduce((function(e,t){return e?e[t]:null}),n)}},{key:"_replace",value:function(e,t){var n,r,s=this,o=null===(n=e.getAttribute("data-i18n"))||void 0===n?void 0:n.split(/\s/g),i=null==e||null===(r=e.getAttribute("data-i18n-attr"))||void 0===r?void 0:r.split(/\s/g);i&&o.length!=i.length&&this.debug("MISMATCHING_ATTRIBUTES",o,i,e),o.forEach((function(n,r){var o=s._getValueFromJSON(n,t),l=i?i[r]:"innerHTML";o?"innerHTML"==l?e[l]=o:e.setAttribute(l,o):s.debug("TRANSLATION_NOT_FOUND",n,t)}))}},{key:"translatePageTo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.defaultLanguage;if("node"!=this._env)if("string"==typeof t)if(0!=t.length)if(this.languages.has(t)){var n="string"==typeof this.config.selector?Array.from(document.querySelectorAll(this.config.selector)):this.config.selector;n.length&&n.length>0?n.forEach((function(n){return e._replace(n,t)})):null==n.length&&this._replace(n,t),this._currentLanguage=t,document.documentElement.lang=t,this.config.persist&&window.localStorage&&localStorage.setItem(this.config.persistKey,t)}else this.debug("NO_LANGUAGE_REGISTERED",t);else this.debug("EMPTY_PARAM_LANGUAGE");else this.debug("INVALID_PARAM_LANGUAGE",t);else this.debug("INVALID_ENVIRONMENT")}},{key:"translateForKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.config.defaultLanguage;if("string"!=typeof e)return this.debug("INVALID_PARAM_KEY",e),null;if(!this.languages.has(t))return this.debug("NO_LANGUAGE_REGISTERED",t),null;var n=this._getValueFromJSON(e,t);return n||(this.debug("TRANSLATION_NOT_FOUND",e,t),null)}},{key:"add",value:function(e,t){return"string"!=typeof e?(this.debug("INVALID_PARAM_LANGUAGE",e),this):0==e.length?(this.debug("EMPTY_PARAM_LANGUAGE"),this):Array.isArray(t)||"object"!=r(t)?(this.debug("INVALID_PARAM_JSON",t),this):0==Object.keys(t).length?(this.debug("EMPTY_PARAM_JSON"),this):(this.languages.set(e,t),this)}},{key:"remove",value:function(e){return"string"!=typeof e?(this.debug("INVALID_PARAM_LANGUAGE",e),this):0==e.length?(this.debug("EMPTY_PARAM_LANGUAGE"),this):(this.languages.delete(e),this)}},{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!Array.isArray(e)&&"string"!=typeof e)return this.debug("INVALID_PARAMETER_SOURCES",e),null;Array.isArray(e)||(e=[e]);var s=e.map((function(e){var n=e.replace(/\.json$/,"").replace(/^\//,""),r=t.config.filesLocation.replace(/\/$/,"");return"".concat(r,"/").concat(n,".json")}));return"browser"==this._env?Promise.all(s.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){if(e.ok)return e.json();t.debug("FETCH_ERROR",e)})))})).then((function(n){return n=n.filter((function(e){return e})),r&&n.forEach((function(n,r){t.add(e[r],n)})),n.length>1?n:n[0]})):"node"==this._env?new Promise((function(o){var i=[];s.forEach((function(s,o){try{var l=JSON.parse(n(933).readFileSync(process.cwd()+s,"utf-8"));r&&t.add(e[o],l),i.push(l)}catch(e){t.debug("MODULE_NOT_FOUND",e.message)}})),o(i.length>1?i:i[0])})):void 0}))},{key:"setDefaultLanguage",value:function(e){if("string"==typeof e){if(0!=e.length)return this.languages.has(e)?void(this.config.defaultLanguage=e):(this.debug("NO_LANGUAGE_REGISTERED",e),null);this.debug("EMPTY_PARAM_LANGUAGE")}else this.debug("INVALID_PARAM_LANGUAGE",e)}},{key:"currentLanguage",get:function(){return this._currentLanguage||this.config.defaultLanguage}},{key:"defaultLanguage",get:function(){return this.config.defaultLanguage}}],a=[{key:"defaultConfig",get:function(){return{defaultLanguage:"en",detectLanguage:!0,selector:"[data-i18n]",debug:!1,registerGlobally:"__",persist:!1,persistKey:"preferred_language",filesLocation:"/i18n"}}}],l&&o(i.prototype,l),a&&o(i,a),t}()},528:(e,t,n)=>{"use strict";n.d(t,{a:()=>O,b:()=>F,g:()=>H,h:()=>g,p:()=>c,r:()=>W});let r,s,o=!1;const i="undefined"!=typeof window?window:{},l=i.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),d=new WeakMap,h=e=>"sc-"+e.o,f={},p=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...n)=>{let r=null,s=!1,o=!1;const i=[],l=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?l(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!p(r))&&(r+=""),s&&o?i[i.length-1].i+=r:i.push(s?m(null,r):r),o=s)};if(l(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,i,b);const a=m(e,null);return a.u=t,i.length>0&&(a.h=i),a},m=(e,t)=>({t:0,p:e,i:t,$:null,h:null,u:null}),y={},b={forEach:(e,t)=>e.map(v).forEach(t),map:(e,t)=>e.map(v).map(t).map(w)},v=e=>({vattrs:e.u,vchildren:e.h,vkey:e.m,vname:e.g,vtag:e.p,vtext:e.i}),w=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),g(e.vtag,t,...e.vchildren||[])}const t=m(e.vtag,e.vtext);return t.u=e.vattrs,t.h=e.vchildren,t.m=e.vkey,t.g=e.vname,t},S=(e,t,n,r,s,o)=>{if(n!==r){let l=J(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=N(n),o=N(r);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if(l||"o"!==t[0]||"n"!==t[1]){const i=p(r);if((l||i&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{const s=null==r?"":r;"list"===t?l=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!l||4&o||s)&&!i&&e.setAttribute(t,r=!0===r?"":r)}else t="-"===t[2]?t.slice(3):J(i,c)?c.slice(2):c[2]+t.slice(3),n&&a.rel(e,t,n,!1),r&&a.ael(e,t,r,!1)}},A=/\s/,N=e=>e?e.split(A):[],L=(e,t,n,r)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.u||f,i=t.u||f;for(r in o)r in i||S(s,r,o[r],void 0,n,t.t);for(r in i)S(s,r,o[r],i[r],n,t.t)},E=(e,t,n)=>{const s=t.h[n];let o,i,a=0;if(null!==s.i)o=s.$=l.createTextNode(s.i);else if(o=s.$=l.createElement(s.p),L(null,s,!1),null!=r&&o["s-si"]!==r&&o.classList.add(o["s-si"]=r),s.h)for(a=0;a<s.h.length;++a)i=E(e,s,a),i&&o.appendChild(i);return o},k=(e,t,n,r,o,i)=>{let l,a=e;for(a.shadowRoot&&a.tagName===s&&(a=a.shadowRoot);o<=i;++o)r[o]&&(l=E(null,n,o),l&&(r[o].$=l,a.insertBefore(l,t)))},P=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.$.remove()},T=(e,t)=>e.p===t.p,_=(e,t)=>{const n=t.$=e.$,r=e.h,s=t.h,o=t.i;null===o?("slot"===t.p||L(e,t,!1),null!==r&&null!==s?((e,t,n,r)=>{let s,o=0,i=0,l=t.length-1,a=t[0],c=t[l],u=r.length-1,d=r[0],h=r[u];for(;o<=l&&i<=u;)null==a?a=t[++o]:null==c?c=t[--l]:null==d?d=r[++i]:null==h?h=r[--u]:T(a,d)?(_(a,d),a=t[++o],d=r[++i]):T(c,h)?(_(c,h),c=t[--l],h=r[--u]):T(a,h)?(_(a,h),e.insertBefore(a.$,c.$.nextSibling),a=t[++o],h=r[--u]):T(c,d)?(_(c,d),e.insertBefore(c.$,a.$),c=t[--l],d=r[++i]):(s=E(t&&t[i],n,i),d=r[++i],s&&a.$.parentNode.insertBefore(s,a.$));o>l?k(e,null==r[u+1]?null:r[u+1].$,n,r,i,u):i>u&&P(t,o,l)})(n,r,t,s):null!==s?(null!==e.i&&(n.textContent=""),k(n,null,t,s,0,s.length-1)):null!==r&&P(r,0,r.length-1)):e.i!==o&&(n.data=o)},O=e=>V(e).v,j=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},M=(e,t)=>{if(e.t|=16,!(4&e.t))return j(e,e.j),se((()=>R(e,t)));e.t|=512},R=(e,t)=>{const n=e.M;let r;return t&&(r=$(n,"componentWillLoad")),G(r,(()=>C(e,n,t)))},C=async(e,t,n)=>{const r=e.v,s=r["s-rc"];n&&(e=>{const t=e.k,n=e.v,r=t.t,s=((e,t)=>{let n=h(t);const r=Q.get(n);if(e=11===e.nodeType?e:l,r)if("string"==typeof r){let t,s=d.get(e=e.head||e);s||d.set(e,s=new Set),s.has(n)||(t=l.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e),I(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>U(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},I=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2,((e,t)=>{const n=e.v,o=e.O||m(null,null),i=(e=>e&&e.p===y)(t)?t:g(null,null,t);s=n.tagName,i.p=null,i.t|=4,e.O=i,i.$=o.$=n.shadowRoot||n,r=n["s-sc"],_(o,i)})(e,t)}catch(t){K(t,e.v)}return null},U=e=>{const t=e.v,n=e.j;64&e.t||(e.t|=64,D(t),e.C(t),n||x()),e.S&&(e.S(),e.S=void 0),512&e.t&&re((()=>M(e,!1))),e.t&=-517},x=()=>{D(l.documentElement),re((()=>(e=>{const t=a.ce("appload",{detail:{namespace:"ip-accordeon"}});return e.dispatchEvent(t),t})(i)))},$=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){K(e)}},G=(e,t)=>e&&e.then?e.then(t):t(),D=e=>e.classList.add("hydrated"),B=(e,t,n)=>{if(t.L){e.watchers&&(t.P=e.watchers);const r=Object.entries(t.L),s=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(s,e,{get(){return((e,t)=>V(this).N.get(t))(0,e)},set(n){((e,t,n,r)=>{const s=V(this),o=s.v,i=s.N.get(t),l=s.t,a=s.M;if(n=((e,t)=>null==e||p(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,r.L[t][0]),(!(8&l)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.N.set(t,n),a)){if(r.P&&128&l){const e=r.P[t];e&&e.map((e=>{try{a[e](n,i,t)}catch(e){K(e,o)}}))}2==(18&l)&&M(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,r){a.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},F=(e,t={})=>{const n=[],r=t.exclude||[],s=i.customElements,o=l.head,c=o.querySelector("meta[charset]"),d=l.createElement("style"),f=[];let p,g=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",l.baseURI).href,e.map((e=>{e[1].map((t=>{const o={t:t[0],o:t[1],L:t[2],R:t[3]};o.L=t[2],o.P={};const i=o.o,l=class extends HTMLElement{constructor(e){super(e),Y(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),g?f.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=V(e),n=t.k,r=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){j(t,t.j=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=z(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.P=s.watchers,B(s,n,2),s.isProxied=!0);const r=()=>{};t.t|=8;try{new s(t)}catch(e){K(e)}t.t&=-9,t.t|=128,r()}if(s.style){let e=s.style;const t=h(n);if(!Q.has(t)){const r=()=>{};((e,t,n)=>{let r=Q.get(e);u&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,Q.set(e,r)})(t,e,!!(1&n.t)),r()}}}const o=t.j,i=()=>M(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}r()}})(this)))}disconnectedCallback(){a.jmp((()=>{}))}componentOnReady(){return V(this).T}};o.U=e[0],r.includes(i)||s.get(i)||(n.push(i),s.define(i,B(l,o,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),o.insertBefore(d,c?c.nextSibling:o.firstChild),g=!1,f.length?f.map((e=>e.connectedCallback())):a.jmp((()=>p=setTimeout(x,30)))},H=e=>{const t=new URL(e,a.l);return t.origin!==i.location.origin?t.href:t.pathname},q=new WeakMap,V=e=>q.get(e),W=(e,t)=>q.set(t.M=e,t),Y=(e,t)=>{const n={t:0,v:e,k:t,N:new Map};return n.T=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},J=(e,t)=>t in e,K=(e,t)=>(0,console.error)(e,t),Z=new Map,z=e=>{const t=e.o.replace(/-/g,"_"),r=e.U,s=Z.get(r);return s?s[t]:n(406)(`./${r}.entry.js`).then((e=>(Z.set(r,e),e[t])),K)},Q=new Map,X=[],ee=[],te=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){K(e)}e.length=0},ne=()=>{te(X),te(ee),(o=X.length>0)&&a.raf(ne)},re=e=>c().then(e),se=((e,t)=>t=>{e.push(t),o||(o=!0,4&a.t?re(ne):a.raf(ne))})(ee)},406:(e,t,n)=>{var r={"./p-84c53eb8.entry.js":[772,772]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=406,e.exports=s},131:(e,t,n)=>{"use strict";n.d(t,{b:()=>C,g:()=>d,h:()=>a,p:()=>Y,r:()=>x});let r,s,o=!1;const i={},l=e=>"object"==(e=typeof e)||"function"===e,a=(e,t,...n)=>{let r=null,s=!1,o=!1;const i=[],a=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?a(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!l(r))&&(r+=""),s&&o?i[i.length-1].t+=r:i.push(s?c(null,r):r),o=s)};if(a(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const u=c(e,null);return u.l=t,i.length>0&&(u.o=i),u},c=(e,t)=>({i:0,u:e,t,$:null,o:null,l:null}),u={},d=e=>U(e).h,h=new WeakMap,f=e=>"sc-"+e.p,p=(e,t,n,r,s,o)=>{if(n!==r){let i=G(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=m(n),o=m(r);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if(i||"o"!==t[0]||"n"!==t[1]){const a=l(r);if((i||a&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{const s=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&o||s)&&!a&&e.setAttribute(t,r=!0===r?"":r)}else t="-"===t[2]?t.slice(3):G(q,a)?a.slice(2):a[2]+t.slice(3),n&&W.rel(e,t,n,!1),r&&W.ael(e,t,r,!1)}},g=/\s/,m=e=>e?e.split(g):[],y=(e,t,n,r)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.l||i,l=t.l||i;for(r in o)r in l||p(s,r,o[r],void 0,n,t.i);for(r in l)p(s,r,o[r],l[r],n,t.i)},b=(e,t,n)=>{const s=t.o[n];let o,i,l=0;if(null!==s.t)o=s.$=V.createTextNode(s.t);else if(o=s.$=V.createElement(s.u),y(null,s,!1),null!=r&&o["s-si"]!==r&&o.classList.add(o["s-si"]=r),s.o)for(l=0;l<s.o.length;++l)i=b(e,s,l),i&&o.appendChild(i);return o},v=(e,t,n,r,o,i)=>{let l,a=e;for(a.shadowRoot&&a.tagName===s&&(a=a.shadowRoot);o<=i;++o)r[o]&&(l=b(null,n,o),l&&(r[o].$=l,a.insertBefore(l,t)))},w=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.$.remove()},S=(e,t)=>e.u===t.u,A=(e,t)=>{const n=t.$=e.$,r=e.o,s=t.o,o=t.t;null===o?("slot"===t.u||y(e,t,!1),null!==r&&null!==s?((e,t,n,r)=>{let s,o=0,i=0,l=t.length-1,a=t[0],c=t[l],u=r.length-1,d=r[0],h=r[u];for(;o<=l&&i<=u;)null==a?a=t[++o]:null==c?c=t[--l]:null==d?d=r[++i]:null==h?h=r[--u]:S(a,d)?(A(a,d),a=t[++o],d=r[++i]):S(c,h)?(A(c,h),c=t[--l],h=r[--u]):S(a,h)?(A(a,h),e.insertBefore(a.$,c.$.nextSibling),a=t[++o],h=r[--u]):S(c,d)?(A(c,d),e.insertBefore(c.$,a.$),c=t[--l],d=r[++i]):(s=b(t&&t[i],n,i),d=r[++i],s&&a.$.parentNode.insertBefore(s,a.$));o>l?v(e,null==r[u+1]?null:r[u+1].$,n,r,i,u):i>u&&w(t,o,l)})(n,r,t,s):null!==s?(null!==e.t&&(n.textContent=""),v(n,null,t,s,0,s.length-1)):null!==r&&w(r,0,r.length-1)):e.t!==o&&(n.data=o)},N=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},L=(e,t)=>{if(e.i|=16,!(4&e.i))return N(e,e.S),ee((()=>E(e,t)));e.i|=512},E=(e,t)=>{const n=e.g;let r;return t&&(r=O(n,"componentWillLoad")),j(r,(()=>k(e,n,t)))},k=async(e,t,n)=>{const r=e.h,s=r["s-rc"];n&&(e=>{const t=e.j,n=e.h,r=t.i,s=((e,t)=>{let n=f(t);const r=H.get(n);if(e=11===e.nodeType?e:V,r)if("string"==typeof r){let t,s=h.get(e=e.head||e);s||h.set(e,s=new Set),s.has(n)||(t=V.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e),P(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.i|=4,t.length=0)}},P=(e,t)=>{try{t=t.render(),e.i&=-17,e.i|=2,((e,t)=>{const n=e.h,o=e.M||c(null,null),i=(e=>e&&e.u===u)(t)?t:a(null,null,t);s=n.tagName,i.u=null,i.i|=4,e.M=i,i.$=o.$=n.shadowRoot||n,r=n["s-sc"],A(o,i)})(e,t)}catch(t){D(t,e.h)}return null},T=e=>{const t=e.h,n=e.S;64&e.i||(e.i|=64,M(t),e.v(t),n||_()),e.m&&(e.m(),e.m=void 0),512&e.i&&X((()=>L(e,!1))),e.i&=-517},_=()=>{M(V.documentElement),X((()=>(e=>{const t=W.ce("appload",{detail:{namespace:"ip-slider"}});return e.dispatchEvent(t),t})(q)))},O=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){D(e)}},j=(e,t)=>e&&e.then?e.then(t):t(),M=e=>e.classList.add("hydrated"),R=(e,t,n)=>{if(t.k){e.watchers&&(t.C=e.watchers);const r=Object.entries(t.k),s=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(s,e,{get(){return((e,t)=>U(this).O.get(t))(0,e)},set(n){((e,t,n,r)=>{const s=U(this),o=s.h,i=s.O.get(t),a=s.i,c=s.g;if(n=((e,t)=>null==e||l(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,r.k[t][0]),(!(8&a)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.O.set(t,n),c)){if(r.C&&128&a){const e=r.C[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){D(e,o)}}))}2==(18&a)&&L(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,r){W.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},C=(e,t={})=>{const n=[],r=t.exclude||[],s=q.customElements,o=V.head,i=o.querySelector("meta[charset]"),l=V.createElement("style"),a=[];let c,u=!0;Object.assign(W,t),W.P=new URL(t.resourcesUrl||"./",V.baseURI).href,e.map((e=>{e[1].map((t=>{const o={i:t[0],p:t[1],k:t[2],L:t[3]};o.k=t[2],o.C={};const i=o.p,l=class extends HTMLElement{constructor(e){super(e),$(e=this,o),1&o.i&&e.attachShadow({mode:"open"})}connectedCallback(){c&&(clearTimeout(c),c=null),u?a.push(this):W.jmp((()=>(e=>{if(0==(1&W.i)){const t=U(e),n=t.j,r=()=>{};if(!(1&t.i)){t.i|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){N(t,t.S=n);break}}n.k&&Object.entries(n.k).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,s)=>{if(0==(32&t.i)){{if(t.i|=32,(s=F(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.C=s.watchers,R(s,n,2),s.isProxied=!0);const r=()=>{};t.i|=8;try{new s(t)}catch(e){D(e)}t.i&=-9,t.i|=128,r()}if(s.style){let e=s.style;const t=f(n);if(!H.has(t)){const r=()=>{};((e,t,n)=>{let r=H.get(e);J&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,H.set(e,r)})(t,e,!!(1&n.i)),r()}}}const o=t.S,i=()=>L(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}r()}})(this)))}disconnectedCallback(){W.jmp((()=>{}))}componentOnReady(){return U(this).N}};o.T=e[0],r.includes(i)||s.get(i)||(n.push(i),s.define(i,R(l,o,1)))}))})),l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),o.insertBefore(l,i?i.nextSibling:o.firstChild),u=!1,a.length?a.map((e=>e.connectedCallback())):W.jmp((()=>c=setTimeout(_,30)))},I=new WeakMap,U=e=>I.get(e),x=(e,t)=>I.set(t.g=e,t),$=(e,t)=>{const n={i:0,h:e,j:t,O:new Map};return n.N=new Promise((e=>n.v=e)),e["s-p"]=[],e["s-rc"]=[],I.set(e,n)},G=(e,t)=>t in e,D=(e,t)=>(0,console.error)(e,t),B=new Map,F=e=>{const t=e.p.replace(/-/g,"_"),r=e.T,s=B.get(r);return s?s[t]:n(760)(`./${r}.entry.js`).then((e=>(B.set(r,e),e[t])),D)},H=new Map,q="undefined"!=typeof window?window:{},V=q.document||{head:{}},W={i:0,P:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},Y=e=>Promise.resolve(e),J=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),K=[],Z=[],z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){D(e)}e.length=0},Q=()=>{z(K),z(Z),(o=K.length>0)&&W.raf(Q)},X=e=>Y().then(e),ee=((e,t)=>t=>{e.push(t),o||(o=!0,4&W.i?X(Q):W.raf(Q))})(Z)},760:(e,t,n)=>{var r={"./p-abf28907.entry.js":[66,66],"./p-df9bcd9b.entry.js":[761,761]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=760,e.exports=s},586:(e,t,n)=>{"use strict";n.d(t,{a:()=>g,b:()=>G,g:()=>i,h:()=>c,p:()=>Q,r:()=>F});let r,s,o=!1;const i=e=>{const t=new URL(e,z.t);return t.origin!==K.location.origin?t.href:t.pathname},l={},a=e=>"object"==(e=typeof e)||"function"===e,c=(e,t,...n)=>{let r=null,s=!1,o=!1;const i=[],l=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?l(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!a(r))&&(r+=""),s&&o?i[i.length-1].l+=r:i.push(s?u(null,r):r),o=s)};if(l(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,i,h);const c=u(e,null);return c.o=t,i.length>0&&(c.i=i),c},u=(e,t)=>({u:0,h:e,l:t,p:null,i:null,o:null}),d={},h={forEach:(e,t)=>e.map(f).forEach(t),map:(e,t)=>e.map(f).map(t).map(p)},f=e=>({vattrs:e.o,vchildren:e.i,vkey:e.$,vname:e.m,vtag:e.h,vtext:e.l}),p=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),c(e.vtag,t,...e.vchildren||[])}const t=u(e.vtag,e.vtext);return t.o=e.vattrs,t.i=e.vchildren,t.$=e.vkey,t.m=e.vname,t},g=e=>B(e).g,m=new WeakMap,y=e=>"sc-"+e.v,b=(e,t,n,r,s,o)=>{if(n!==r){let i=q(e,t),l=t.toLowerCase();if("class"===t){const t=e.classList,s=w(n),o=w(r);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if(i||"o"!==t[0]||"n"!==t[1]){const l=a(r);if((i||l&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{const s=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&o||s)&&!l&&e.setAttribute(t,r=!0===r?"":r)}else t="-"===t[2]?t.slice(3):q(K,l)?l.slice(2):l[2]+t.slice(3),n&&z.rel(e,t,n,!1),r&&z.ael(e,t,r,!1)}},v=/\s/,w=e=>e?e.split(v):[],S=(e,t,n,r)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.o||l,i=t.o||l;for(r in o)r in i||b(s,r,o[r],void 0,n,t.u);for(r in i)b(s,r,o[r],i[r],n,t.u)},A=(e,t,n)=>{const s=t.i[n];let o,i,l=0;if(null!==s.l)o=s.p=Z.createTextNode(s.l);else if(o=s.p=Z.createElement(s.h),S(null,s,!1),null!=r&&o["s-si"]!==r&&o.classList.add(o["s-si"]=r),s.i)for(l=0;l<s.i.length;++l)i=A(e,s,l),i&&o.appendChild(i);return o},N=(e,t,n,r,o,i)=>{let l,a=e;for(a.shadowRoot&&a.tagName===s&&(a=a.shadowRoot);o<=i;++o)r[o]&&(l=A(null,n,o),l&&(r[o].p=l,a.insertBefore(l,t)))},L=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.p.remove()},E=(e,t)=>e.h===t.h,k=(e,t)=>{const n=t.p=e.p,r=e.i,s=t.i,o=t.l;null===o?("slot"===t.h||S(e,t,!1),null!==r&&null!==s?((e,t,n,r)=>{let s,o=0,i=0,l=t.length-1,a=t[0],c=t[l],u=r.length-1,d=r[0],h=r[u];for(;o<=l&&i<=u;)null==a?a=t[++o]:null==c?c=t[--l]:null==d?d=r[++i]:null==h?h=r[--u]:E(a,d)?(k(a,d),a=t[++o],d=r[++i]):E(c,h)?(k(c,h),c=t[--l],h=r[--u]):E(a,h)?(k(a,h),e.insertBefore(a.p,c.p.nextSibling),a=t[++o],h=r[--u]):E(c,d)?(k(c,d),e.insertBefore(c.p,a.p),c=t[--l],d=r[++i]):(s=A(t&&t[i],n,i),d=r[++i],s&&a.p.parentNode.insertBefore(s,a.p));o>l?N(e,null==r[u+1]?null:r[u+1].p,n,r,i,u):i>u&&L(t,o,l)})(n,r,t,s):null!==s?(null!==e.l&&(n.textContent=""),N(n,null,t,s,0,s.length-1)):null!==r&&L(r,0,r.length-1)):e.l!==o&&(n.data=o)},P=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},T=(e,t)=>{if(e.u|=16,!(4&e.u))return P(e,e.j),oe((()=>_(e,t)));e.u|=512},_=(e,t)=>{const n=e.k;let r;return t&&(r=C(n,"componentWillLoad")),I(r,(()=>O(e,n,t)))},O=async(e,t,n)=>{const r=e.g,s=r["s-rc"];n&&(e=>{const t=e.M,n=e.g,r=t.u,s=((e,t)=>{let n=y(t);const r=J.get(n);if(e=11===e.nodeType?e:Z,r)if("string"==typeof r){let t,s=m.get(e=e.head||e);s||m.set(e,s=new Set),s.has(n)||(t=Z.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e),j(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>M(e);0===t.length?n():(Promise.all(t).then(n),e.u|=4,t.length=0)}},j=(e,t)=>{try{t=t.render(),e.u&=-17,e.u|=2,((e,t)=>{const n=e.g,o=e.C||u(null,null),i=(e=>e&&e.h===d)(t)?t:c(null,null,t);s=n.tagName,i.h=null,i.u|=4,e.C=i,i.p=o.p=n.shadowRoot||n,r=n["s-sc"],k(o,i)})(e,t)}catch(t){V(t,e.g)}return null},M=e=>{const t=e.g,n=e.j;64&e.u||(e.u|=64,U(t),e.O(t),n||R()),e.S&&(e.S(),e.S=void 0),512&e.u&&se((()=>T(e,!1))),e.u&=-517},R=()=>{U(Z.documentElement),se((()=>(e=>{const t=z.ce("appload",{detail:{namespace:"ip-tab-panel"}});return e.dispatchEvent(t),t})(K)))},C=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){V(e)}},I=(e,t)=>e&&e.then?e.then(t):t(),U=e=>e.classList.add("hydrated"),x=(e,t,n)=>{if(t.L){e.watchers&&(t.P=e.watchers);const r=Object.entries(t.L),s=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(s,e,{get(){return((e,t)=>B(this).N.get(t))(0,e)},set(n){((e,t,n,r)=>{const s=B(this),o=s.g,i=s.N.get(t),l=s.u,c=s.k;if(n=((e,t)=>null==e||a(e)?e:1&t?e+"":e)(n,r.L[t][0]),(!(8&l)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.N.set(t,n),c)){if(r.P&&128&l){const e=r.P[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){V(e,o)}}))}2==(18&l)&&T(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,r){z.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},$=e=>{C(e,"connectedCallback")},G=(e,t={})=>{const n=[],r=t.exclude||[],s=K.customElements,o=Z.head,i=o.querySelector("meta[charset]"),l=Z.createElement("style"),a=[];let c,u=!0;Object.assign(z,t),z.t=new URL(t.resourcesUrl||"./",Z.baseURI).href,e.map((e=>{e[1].map((t=>{const o={u:t[0],v:t[1],L:t[2],R:t[3]};o.L=t[2],o.P={};const i=o.v,l=class extends HTMLElement{constructor(e){super(e),H(e=this,o),1&o.u&&e.attachShadow({mode:"open"})}connectedCallback(){c&&(clearTimeout(c),c=null),u?a.push(this):z.jmp((()=>(e=>{if(0==(1&z.u)){const t=B(e),n=t.M,r=()=>{};if(1&t.u)$(t.k);else{t.u|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){P(t,t.j=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,s)=>{if(0==(32&t.u)){{if(t.u|=32,(s=Y(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.P=s.watchers,x(s,n,2),s.isProxied=!0);const r=()=>{};t.u|=8;try{new s(t)}catch(e){V(e)}t.u&=-9,t.u|=128,r(),$(t.k)}if(s.style){let e=s.style;const t=y(n);if(!J.has(t)){const r=()=>{};((e,t,n)=>{let r=J.get(e);X&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,J.set(e,r)})(t,e,!!(1&n.u)),r()}}}const o=t.j,i=()=>T(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}r()}})(this)))}disconnectedCallback(){z.jmp((()=>{}))}componentOnReady(){return B(this).T}};o.U=e[0],r.includes(i)||s.get(i)||(n.push(i),s.define(i,x(l,o,1)))}))})),l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),o.insertBefore(l,i?i.nextSibling:o.firstChild),u=!1,a.length?a.map((e=>e.connectedCallback())):z.jmp((()=>c=setTimeout(R,30)))},D=new WeakMap,B=e=>D.get(e),F=(e,t)=>D.set(t.k=e,t),H=(e,t)=>{const n={u:0,g:e,M:t,N:new Map};return n.T=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],D.set(e,n)},q=(e,t)=>t in e,V=(e,t)=>(0,console.error)(e,t),W=new Map,Y=e=>{const t=e.v.replace(/-/g,"_"),r=e.U,s=W.get(r);return s?s[t]:n(300)(`./${r}.entry.js`).then((e=>(W.set(r,e),e[t])),V)},J=new Map,K="undefined"!=typeof window?window:{},Z=K.document||{head:{}},z={u:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},Q=e=>Promise.resolve(e),X=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),ee=[],te=[],ne=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){V(e)}e.length=0},re=()=>{ne(ee),ne(te),(o=ee.length>0)&&z.raf(re)},se=e=>Q().then(e),oe=((e,t)=>t=>{e.push(t),o||(o=!0,4&z.u?se(re):z.raf(re))})(te)},300:(e,t,n)=>{var r={"./p-120902c9.entry.js":[102,102]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=300,e.exports=s},377:(e,t,n)=>{"use strict";n(725);var r=n(498);const s=JSON.parse('{"skip-link":{"nav":{"label":"Go to navigation","text":"Go to nav"},"content":{"label":"Go to content","text":"Go to content"}},"head":{"title":"Web Components"},"logo":{"alt":"Ipedis - Go to Ipedis Website","link":"https://www.ipedis.com/en"},"header":{"title":{"main":"Web Components","blockquote":"Blockquote","accordeon":"Accordeon","tabPanel":"Tab Panel"},"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt augue quis odio pharetra auctor. Nunc tempor velit eget quam tincidunt venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}}'),o=JSON.parse('{"skip-link":{"nav":{"label":"Aller vers la navigation","text":"Aller vers nav"},"content":{"label":"Aller vers le contenu","text":"Aller vers contenu"}},"head":{"title":"Webpack Boilerplate | FR"},"navigation":{"heading":"French Navigation","btn":"Switch to En"},"header":{"heading":"French Header"},"main":{"heading":"French Main"},"footer":{"heading":"French Footer"}}'),i=document.querySelector("html"),l=new r.Z({defaultLanguage:"fr",detectLanguage:!0,debug:!0,persist:!1,fileLocation:"./src/locales"});var a;l.add("fr",o),l.add("en",s),"fr"===(a=i.lang)?l.translatePageTo("fr"):"en"===a?l.translatePageTo("en"):(l.add(a,undefined),l.translatePageTo(a));var c=n(586);(()=>{const e={};return e.resourcesUrl=new URL(".","file:///Users/digitalfourteen/Documents/2022/Landing_Page/Homepage/node_modules/ip-tab-panel/dist/ip-tab-panel/ip-tab-panel.esm.js").href,(0,c.p)(e)})().then((e=>(0,c.b)([["p-120902c9",[[1,"ip-tab-panel",{tabPanelHeaders:[1,"tab-panel-headers"],tabPanelTitle:[1,"tab-panel-title"],titleTag:[1,"title-tag"],currentTab:[32],currentTabIndex:[32],isSlotPresent:[32],tabHeaders:[32]}]]]],e)));var u=n(528);(()=>{const e={};return e.resourcesUrl=new URL(".","file:///Users/digitalfourteen/Documents/2022/Landing_Page/Homepage/node_modules/ip-accordeon/dist/ip-accordeon/ip-accordeon.esm.js").href,(0,u.p)(e)})().then((e=>(0,u.b)([["p-84c53eb8",[[1,"ip-accordeon",{accordeonHeaders:[1,"accordeon-headers"],isFirstPanelOpen:[4,"is-first-panel-open"],isSingleOpen:[4,"is-single-open"],titleTag:[1,"title-tag"],accHeaderButtons:[32],accPanels:[32],currentPanel:[32]}]]]],e)));var d=n(131);(()=>{const e={};return e.resourcesUrl=new URL(".","file:///Users/digitalfourteen/Documents/2022/Landing_Page/Homepage/node_modules/ip-d14-slider/dist/ip-slider/ip-slider.esm.js").href,(0,d.p)(e)})().then((e=>(0,d.b)([["p-abf28907",[[1,"ip-slider-sl-1",{slideTitle:[1,"slide-title"],slideGap:[2,"slide-gap"],isSlideBullet:[4,"is-slide-bullet"],isPreviousNextNavigation:[4,"is-previous-next-navigation"],itemToShow:[2,"item-to-show"],sliderItemWidth:[32],sliderPosition:[32],sliderUl:[32],sliderPreviousBtn:[32],sliderNextBtn:[32],sliderCounts:[32],isMobilePortrait:[32],sliderBullets:[32]}]]],["p-df9bcd9b",[[1,"ip-slider-sl-2",{slides:[1],slideTitle:[1,"slide-title"],slideTitleMobile:[1,"slide-title-mobile"],btnNextAria:[1,"btn-next-aria"],btnPreviousAria:[1,"btn-previous-aria"],slideTitleAria:[1,"slide-title-aria"],sliderPostion:[32],sliderUl:[32],sliderItemSize:[32],sliderItemsCounts:[32],sliderPreviousBtn:[32],sliderNextBtn:[32],sliderLinks:[32],isMobilePortrait:[32]}]]]],e))),document.querySelectorAll(".sidebar-menu > h2 span img").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("rotate")}))}))},725:()=>{document.querySelector("#skip-links").querySelectorAll(".skip-link").forEach((e=>{const t=e.getAttribute("href");e.addEventListener("keydown",(e=>{((e,t)=>{const n=document.querySelector(`${t}`);console.log(e.key),"Enter"!==e.key&&" "!==e.key||(n.setAttribute("tabindex","0"),n.focus(),e.preventDefault()),n.addEventListener("blur",(e=>{e.target.removeAttribute("tabindex")}))})(e,t)}))}))},933:()=>{}},e=>{e(e.s=377)}]);