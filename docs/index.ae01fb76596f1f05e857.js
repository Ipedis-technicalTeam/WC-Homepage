/*! For license information please see index.ae01fb76596f1f05e857.js.LICENSE.txt */
(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[826],{498:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,s=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw s}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>u}),e=n.hmd(e);var a={INVALID_PARAM_LANGUAGE:function(e){return"Invalid parameter for `language` provided. Expected a string, but got ".concat(r(e),".")},INVALID_PARAM_JSON:function(e){return"Invalid parameter for `json` provided. Expected an object, but got ".concat(r(e),".")},EMPTY_PARAM_LANGUAGE:function(){return"The parameter for `language` can't be an empty string."},EMPTY_PARAM_JSON:function(){return"The parameter for `json` must have at least one key/value pair."},INVALID_PARAM_KEY:function(e){return"Invalid parameter for `key` provided. Expected a string, but got ".concat(r(e),".")},NO_LANGUAGE_REGISTERED:function(e){return'No translation for language "'.concat(e,'" has been added, yet. Make sure to register that language using the `.add()` method first.')},TRANSLATION_NOT_FOUND:function(e,t){return'No translation found for key "'.concat(e,'" in language "').concat(t,'". Is there a key/value in your translation file?')},INVALID_PARAMETER_SOURCES:function(e){return"Invalid parameter for `sources` provided. Expected either a string or an array, but got ".concat(r(e),".")},FETCH_ERROR:function(e){return'Could not fetch "'.concat(e.url,'": ').concat(e.status," (").concat(e.statusText,")")},INVALID_ENVIRONMENT:function(){return"You are trying to execute the method `translatePageTo()`, which is only available in the browser. Your environment is most likely Node.js"},MODULE_NOT_FOUND:function(e){return e},MISMATCHING_ATTRIBUTES:function(e,t,n){return'The attributes "data-i18n" and "data-i18n-attr" must contain the same number of keys.\n\nValues in `data-i18n`:      ('.concat(e.length,") `").concat(e.join(" "),"`\nValues in `data-i18n-attr`: (").concat(t.length,") `").concat(t.join(" "),"`\n\nThe HTML element is:\n").concat(n.outerHTML)},INVALID_OPTIONS:function(e){return"Invalid config passed to the `Translator` constructor. Expected an object, but got ".concat(r(e),". Using default config instead.")}};function c(e){return function(t){if(e)try{for(var n=a[t],r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];throw new TypeError(n?n.apply(void 0,s):"Unhandled Error")}catch(e){var l=e.stack.split(/\n/g)[1],c=l.split(/@/),u=o(c,2),d=u[0],h=u[1];console.error("".concat(e.message,"\n\nThis error happened in the method `").concat(d,"` from: `").concat(h,"`.\n\nIf you don't want to see these error messages, turn off debugging by passing `{ debug: false }` to the constructor.\n\nError code: ").concat(t,"\n\nCheck out the documentation for more details about the API:\nhttps://github.com/andreasremdt/simple-translator#usage\n        "))}}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,t),this.debug=c(!0),("object"!=r(e)||Array.isArray(e))&&(this.debug("INVALID_OPTIONS",e),e={}),this.languages=new Map,this.config=Object.assign(t.defaultConfig,e);var n=this.config,i=n.debug,o=n.registerGlobally,l=n.detectLanguage;this.debug=c(i),o&&(this._globalObject[o]=this.translateForKey.bind(this)),l&&"browser"==this._env&&this._detectLanguage()}var o,l,a;return o=t,l=[{key:"_globalObject",get:function(){return"browser"==this._env?window:n.g}},{key:"_env",get:function(){return"undefined"!=typeof window?"browser":e.exports?"node":"browser"}},{key:"_detectLanguage",value:function(){var e=window.localStorage?localStorage.getItem(this.config.persistKey):void 0;if(e)this.config.defaultLanguage=e;else{var t=navigator.languages?navigator.languages[0]:navigator.language;this.config.defaultLanguage=t.substr(0,2)}}},{key:"_getValueFromJSON",value:function(e,t){var n=this.languages.get(t);return e.split(".").reduce((function(e,t){return e?e[t]:null}),n)}},{key:"_replace",value:function(e,t){var n,r,s=this,i=null===(n=e.getAttribute("data-i18n"))||void 0===n?void 0:n.split(/\s/g),o=null==e||null===(r=e.getAttribute("data-i18n-attr"))||void 0===r?void 0:r.split(/\s/g);o&&i.length!=o.length&&this.debug("MISMATCHING_ATTRIBUTES",i,o,e),i.forEach((function(n,r){var i=s._getValueFromJSON(n,t),l=o?o[r]:"innerHTML";i?"innerHTML"==l?e[l]=i:e.setAttribute(l,i):s.debug("TRANSLATION_NOT_FOUND",n,t)}))}},{key:"translatePageTo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.defaultLanguage;if("node"!=this._env)if("string"==typeof t)if(0!=t.length)if(this.languages.has(t)){var n="string"==typeof this.config.selector?Array.from(document.querySelectorAll(this.config.selector)):this.config.selector;n.length&&n.length>0?n.forEach((function(n){return e._replace(n,t)})):null==n.length&&this._replace(n,t),this._currentLanguage=t,document.documentElement.lang=t,this.config.persist&&window.localStorage&&localStorage.setItem(this.config.persistKey,t)}else this.debug("NO_LANGUAGE_REGISTERED",t);else this.debug("EMPTY_PARAM_LANGUAGE");else this.debug("INVALID_PARAM_LANGUAGE",t);else this.debug("INVALID_ENVIRONMENT")}},{key:"translateForKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.config.defaultLanguage;if("string"!=typeof e)return this.debug("INVALID_PARAM_KEY",e),null;if(!this.languages.has(t))return this.debug("NO_LANGUAGE_REGISTERED",t),null;var n=this._getValueFromJSON(e,t);return n||(this.debug("TRANSLATION_NOT_FOUND",e,t),null)}},{key:"add",value:function(e,t){return"string"!=typeof e?(this.debug("INVALID_PARAM_LANGUAGE",e),this):0==e.length?(this.debug("EMPTY_PARAM_LANGUAGE"),this):Array.isArray(t)||"object"!=r(t)?(this.debug("INVALID_PARAM_JSON",t),this):0==Object.keys(t).length?(this.debug("EMPTY_PARAM_JSON"),this):(this.languages.set(e,t),this)}},{key:"remove",value:function(e){return"string"!=typeof e?(this.debug("INVALID_PARAM_LANGUAGE",e),this):0==e.length?(this.debug("EMPTY_PARAM_LANGUAGE"),this):(this.languages.delete(e),this)}},{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!Array.isArray(e)&&"string"!=typeof e)return this.debug("INVALID_PARAMETER_SOURCES",e),null;Array.isArray(e)||(e=[e]);var s=e.map((function(e){var n=e.replace(/\.json$/,"").replace(/^\//,""),r=t.config.filesLocation.replace(/\/$/,"");return"".concat(r,"/").concat(n,".json")}));return"browser"==this._env?Promise.all(s.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){if(e.ok)return e.json();t.debug("FETCH_ERROR",e)})))})).then((function(n){return n=n.filter((function(e){return e})),r&&n.forEach((function(n,r){t.add(e[r],n)})),n.length>1?n:n[0]})):"node"==this._env?new Promise((function(i){var o=[];s.forEach((function(s,i){try{var l=JSON.parse(n(933).readFileSync(process.cwd()+s,"utf-8"));r&&t.add(e[i],l),o.push(l)}catch(e){t.debug("MODULE_NOT_FOUND",e.message)}})),i(o.length>1?o:o[0])})):void 0}))},{key:"setDefaultLanguage",value:function(e){if("string"==typeof e){if(0!=e.length)return this.languages.has(e)?void(this.config.defaultLanguage=e):(this.debug("NO_LANGUAGE_REGISTERED",e),null);this.debug("EMPTY_PARAM_LANGUAGE")}else this.debug("INVALID_PARAM_LANGUAGE",e)}},{key:"currentLanguage",get:function(){return this._currentLanguage||this.config.defaultLanguage}},{key:"defaultLanguage",get:function(){return this.config.defaultLanguage}}],a=[{key:"defaultConfig",get:function(){return{defaultLanguage:"en",detectLanguage:!0,selector:"[data-i18n]",debug:!1,registerGlobally:"__",persist:!1,persistKey:"preferred_language",filesLocation:"/i18n"}}}],l&&i(o.prototype,l),a&&i(o,a),t}()},528:(e,t,n)=>{"use strict";n.d(t,{a:()=>_,b:()=>F,g:()=>H,h:()=>g,p:()=>c,r:()=>W});let r,s,i=!1;const o="undefined"!=typeof window?window:{},l=o.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),d=new WeakMap,h=e=>"sc-"+e.o,f={},p=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...n)=>{let r=null,s=!1,i=!1;const o=[],l=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?l(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!p(r))&&(r+=""),s&&i?o[o.length-1].i+=r:o.push(s?m(null,r):r),i=s)};if(l(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,o,b);const a=m(e,null);return a.u=t,o.length>0&&(a.h=o),a},m=(e,t)=>({t:0,p:e,i:t,$:null,h:null,u:null}),y={},b={forEach:(e,t)=>e.map(v).forEach(t),map:(e,t)=>e.map(v).map(t).map(w)},v=e=>({vattrs:e.u,vchildren:e.h,vkey:e.m,vname:e.g,vtag:e.p,vtext:e.i}),w=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),g(e.vtag,t,...e.vchildren||[])}const t=m(e.vtag,e.vtext);return t.u=e.vattrs,t.h=e.vchildren,t.m=e.vkey,t.g=e.vname,t},A=(e,t,n,r,s,i)=>{if(n!==r){let l=J(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=N(n),i=N(r);t.remove(...s.filter((e=>e&&!i.includes(e)))),t.add(...i.filter((e=>e&&!s.includes(e))))}else if(l||"o"!==t[0]||"n"!==t[1]){const o=p(r);if((l||o&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{const s=null==r?"":r;"list"===t?l=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!l||4&i||s)&&!o&&e.setAttribute(t,r=!0===r?"":r)}else t="-"===t[2]?t.slice(3):J(o,c)?c.slice(2):c[2]+t.slice(3),n&&a.rel(e,t,n,!1),r&&a.ael(e,t,r,!1)}},S=/\s/,N=e=>e?e.split(S):[],L=(e,t,n,r)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,i=e&&e.u||f,o=t.u||f;for(r in i)r in o||A(s,r,i[r],void 0,n,t.t);for(r in o)A(s,r,i[r],o[r],n,t.t)},E=(e,t,n)=>{const s=t.h[n];let i,o,a=0;if(null!==s.i)i=s.$=l.createTextNode(s.i);else if(i=s.$=l.createElement(s.p),L(null,s,!1),null!=r&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),s.h)for(a=0;a<s.h.length;++a)o=E(e,s,a),o&&i.appendChild(o);return i},P=(e,t,n,r,i,o)=>{let l,a=e;for(a.shadowRoot&&a.tagName===s&&(a=a.shadowRoot);i<=o;++i)r[i]&&(l=E(null,n,i),l&&(r[i].$=l,a.insertBefore(l,t)))},T=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.$.remove()},k=(e,t)=>e.p===t.p,O=(e,t)=>{const n=t.$=e.$,r=e.h,s=t.h,i=t.i;null===i?("slot"===t.p||L(e,t,!1),null!==r&&null!==s?((e,t,n,r)=>{let s,i=0,o=0,l=t.length-1,a=t[0],c=t[l],u=r.length-1,d=r[0],h=r[u];for(;i<=l&&o<=u;)null==a?a=t[++i]:null==c?c=t[--l]:null==d?d=r[++o]:null==h?h=r[--u]:k(a,d)?(O(a,d),a=t[++i],d=r[++o]):k(c,h)?(O(c,h),c=t[--l],h=r[--u]):k(a,h)?(O(a,h),e.insertBefore(a.$,c.$.nextSibling),a=t[++i],h=r[--u]):k(c,d)?(O(c,d),e.insertBefore(c.$,a.$),c=t[--l],d=r[++o]):(s=E(t&&t[o],n,o),d=r[++o],s&&a.$.parentNode.insertBefore(s,a.$));i>l?P(e,null==r[u+1]?null:r[u+1].$,n,r,o,u):o>u&&T(t,i,l)})(n,r,t,s):null!==s?(null!==e.i&&(n.textContent=""),P(n,null,t,s,0,s.length-1)):null!==r&&T(r,0,r.length-1)):e.i!==i&&(n.data=i)},_=e=>q(e).v,j=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},M=(e,t)=>{if(e.t|=16,!(4&e.t))return j(e,e.j),se((()=>R(e,t)));e.t|=512},R=(e,t)=>{const n=e.M;let r;return t&&(r=G(n,"componentWillLoad")),$(r,(()=>C(e,n,t)))},C=async(e,t,n)=>{const r=e.v,s=r["s-rc"];n&&(e=>{const t=e.k,n=e.v,r=t.t,s=((e,t)=>{let n=h(t);const r=Q.get(n);if(e=11===e.nodeType?e:l,r)if("string"==typeof r){let t,s=d.get(e=e.head||e);s||d.set(e,s=new Set),s.has(n)||(t=l.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e),I(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>U(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},I=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2,((e,t)=>{const n=e.v,i=e.O||m(null,null),o=(e=>e&&e.p===y)(t)?t:g(null,null,t);s=n.tagName,o.p=null,o.t|=4,e.O=o,o.$=i.$=n.shadowRoot||n,r=n["s-sc"],O(i,o)})(e,t)}catch(t){K(t,e.v)}return null},U=e=>{const t=e.v,n=e.j;64&e.t||(e.t|=64,B(t),e.C(t),n||x()),e.S&&(e.S(),e.S=void 0),512&e.t&&re((()=>M(e,!1))),e.t&=-517},x=()=>{B(l.documentElement),re((()=>(e=>{const t=a.ce("appload",{detail:{namespace:"ip-accordeon"}});return e.dispatchEvent(t),t})(o)))},G=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){K(e)}},$=(e,t)=>e&&e.then?e.then(t):t(),B=e=>e.classList.add("hydrated"),D=(e,t,n)=>{if(t.L){e.watchers&&(t.P=e.watchers);const r=Object.entries(t.L),s=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(s,e,{get(){return((e,t)=>q(this).N.get(t))(0,e)},set(n){((e,t,n,r)=>{const s=q(this),i=s.v,o=s.N.get(t),l=s.t,a=s.M;if(n=((e,t)=>null==e||p(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,r.L[t][0]),(!(8&l)||void 0===o)&&n!==o&&(!Number.isNaN(o)||!Number.isNaN(n))&&(s.N.set(t,n),a)){if(r.P&&128&l){const e=r.P[t];e&&e.map((e=>{try{a[e](n,o,t)}catch(e){K(e,i)}}))}2==(18&l)&&M(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,r){a.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},F=(e,t={})=>{const n=[],r=t.exclude||[],s=o.customElements,i=l.head,c=i.querySelector("meta[charset]"),d=l.createElement("style"),f=[];let p,g=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",l.baseURI).href,e.map((e=>{e[1].map((t=>{const i={t:t[0],o:t[1],L:t[2],R:t[3]};i.L=t[2],i.P={};const o=i.o,l=class extends HTMLElement{constructor(e){super(e),Y(e=this,i),1&i.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),g?f.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=q(e),n=t.k,r=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){j(t,t.j=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=z(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.P=s.watchers,D(s,n,2),s.isProxied=!0);const r=()=>{};t.t|=8;try{new s(t)}catch(e){K(e)}t.t&=-9,t.t|=128,r()}if(s.style){let e=s.style;const t=h(n);if(!Q.has(t)){const r=()=>{};((e,t,n)=>{let r=Q.get(e);u&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,Q.set(e,r)})(t,e,!!(1&n.t)),r()}}}const i=t.j,o=()=>M(t,!0);i&&i["s-rc"]?i["s-rc"].push(o):o()})(0,t,n)}r()}})(this)))}disconnectedCallback(){a.jmp((()=>{}))}componentOnReady(){return q(this).T}};i.U=e[0],r.includes(o)||s.get(o)||(n.push(o),s.define(o,D(l,i,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),i.insertBefore(d,c?c.nextSibling:i.firstChild),g=!1,f.length?f.map((e=>e.connectedCallback())):a.jmp((()=>p=setTimeout(x,30)))},H=e=>{const t=new URL(e,a.l);return t.origin!==o.location.origin?t.href:t.pathname},V=new WeakMap,q=e=>V.get(e),W=(e,t)=>V.set(t.M=e,t),Y=(e,t)=>{const n={t:0,v:e,k:t,N:new Map};return n.T=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],V.set(e,n)},J=(e,t)=>t in e,K=(e,t)=>(0,console.error)(e,t),Z=new Map,z=e=>{const t=e.o.replace(/-/g,"_"),r=e.U,s=Z.get(r);return s?s[t]:n(406)(`./${r}.entry.js`).then((e=>(Z.set(r,e),e[t])),K)},Q=new Map,X=[],ee=[],te=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){K(e)}e.length=0},ne=()=>{te(X),te(ee),(i=X.length>0)&&a.raf(ne)},re=e=>c().then(e),se=((e,t)=>t=>{e.push(t),i||(i=!0,4&a.t?re(ne):a.raf(ne))})(ee)},406:(e,t,n)=>{var r={"./p-84c53eb8.entry.js":[772,772]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=406,e.exports=s},571:(e,t,n)=>{"use strict";n.d(t,{b:()=>C,g:()=>d,h:()=>a,p:()=>Y,r:()=>x});let r,s,i=!1;const o={},l=e=>"object"==(e=typeof e)||"function"===e,a=(e,t,...n)=>{let r=null,s=!1,i=!1;const o=[],a=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?a(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!l(r))&&(r+=""),s&&i?o[o.length-1].t+=r:o.push(s?c(null,r):r),i=s)};if(a(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const u=c(e,null);return u.l=t,o.length>0&&(u.o=o),u},c=(e,t)=>({i:0,u:e,t,h:null,o:null,l:null}),u={},d=e=>U(e).$,h=new WeakMap,f=e=>"sc-"+e.p,p=(e,t,n,r,s,i)=>{if(n!==r){let o=$(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=m(n),i=m(r);t.remove(...s.filter((e=>e&&!i.includes(e)))),t.add(...i.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if(o||"o"!==t[0]||"n"!==t[1]){const a=l(r);if((o||a&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{const s=null==r?"":r;"list"===t?o=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!o||4&i||s)&&!a&&e.setAttribute(t,r=!0===r?"":r)}else t="-"===t[2]?t.slice(3):$(V,a)?a.slice(2):a[2]+t.slice(3),n&&W.rel(e,t,n,!1),r&&W.ael(e,t,r,!1)}},g=/\s/,m=e=>e?e.split(g):[],y=(e,t,n,r)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,i=e&&e.l||o,l=t.l||o;for(r in i)r in l||p(s,r,i[r],void 0,n,t.i);for(r in l)p(s,r,i[r],l[r],n,t.i)},b=(e,t,n)=>{const s=t.o[n];let i,o,l=0;if(null!==s.t)i=s.h=q.createTextNode(s.t);else if(i=s.h=q.createElement(s.u),y(null,s,!1),null!=r&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),s.o)for(l=0;l<s.o.length;++l)o=b(e,s,l),o&&i.appendChild(o);return i},v=(e,t,n,r,i,o)=>{let l,a=e;for(a.shadowRoot&&a.tagName===s&&(a=a.shadowRoot);i<=o;++i)r[i]&&(l=b(null,n,i),l&&(r[i].h=l,a.insertBefore(l,t)))},w=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.h.remove()},A=(e,t)=>e.u===t.u,S=(e,t)=>{const n=t.h=e.h,r=e.o,s=t.o,i=t.t;null===i?("slot"===t.u||y(e,t,!1),null!==r&&null!==s?((e,t,n,r)=>{let s,i=0,o=0,l=t.length-1,a=t[0],c=t[l],u=r.length-1,d=r[0],h=r[u];for(;i<=l&&o<=u;)null==a?a=t[++i]:null==c?c=t[--l]:null==d?d=r[++o]:null==h?h=r[--u]:A(a,d)?(S(a,d),a=t[++i],d=r[++o]):A(c,h)?(S(c,h),c=t[--l],h=r[--u]):A(a,h)?(S(a,h),e.insertBefore(a.h,c.h.nextSibling),a=t[++i],h=r[--u]):A(c,d)?(S(c,d),e.insertBefore(c.h,a.h),c=t[--l],d=r[++o]):(s=b(t&&t[o],n,o),d=r[++o],s&&a.h.parentNode.insertBefore(s,a.h));i>l?v(e,null==r[u+1]?null:r[u+1].h,n,r,o,u):o>u&&w(t,i,l)})(n,r,t,s):null!==s?(null!==e.t&&(n.textContent=""),v(n,null,t,s,0,s.length-1)):null!==r&&w(r,0,r.length-1)):e.t!==i&&(n.data=i)},N=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},L=(e,t)=>{if(e.i|=16,!(4&e.i))return N(e,e.S),ee((()=>E(e,t)));e.i|=512},E=(e,t)=>{const n=e.g;let r;return t&&(r=_(n,"componentWillLoad")),j(r,(()=>P(e,n,t)))},P=async(e,t,n)=>{const r=e.$,s=r["s-rc"];n&&(e=>{const t=e.j,n=e.$,r=t.i,s=((e,t)=>{let n=f(t);const r=H.get(n);if(e=11===e.nodeType?e:q,r)if("string"==typeof r){let t,s=h.get(e=e.head||e);s||h.set(e,s=new Set),s.has(n)||(t=q.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e),T(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>k(e);0===t.length?n():(Promise.all(t).then(n),e.i|=4,t.length=0)}},T=(e,t)=>{try{t=t.render(),e.i&=-17,e.i|=2,((e,t)=>{const n=e.$,i=e.M||c(null,null),o=(e=>e&&e.u===u)(t)?t:a(null,null,t);s=n.tagName,o.u=null,o.i|=4,e.M=o,o.h=i.h=n.shadowRoot||n,r=n["s-sc"],S(i,o)})(e,t)}catch(t){B(t,e.$)}return null},k=e=>{const t=e.$,n=e.S;64&e.i||(e.i|=64,M(t),e.k(t),n||O()),e.m&&(e.m(),e.m=void 0),512&e.i&&X((()=>L(e,!1))),e.i&=-517},O=()=>{M(q.documentElement),X((()=>(e=>{const t=W.ce("appload",{detail:{namespace:"ip-slider"}});return e.dispatchEvent(t),t})(V)))},_=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){B(e)}},j=(e,t)=>e&&e.then?e.then(t):t(),M=e=>e.classList.add("hydrated"),R=(e,t,n)=>{if(t.v){e.watchers&&(t.C=e.watchers);const r=Object.entries(t.v),s=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(s,e,{get(){return((e,t)=>U(this).O.get(t))(0,e)},set(n){((e,t,n,r)=>{const s=U(this),i=s.$,o=s.O.get(t),a=s.i,c=s.g;if(n=((e,t)=>null==e||l(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,r.v[t][0]),(!(8&a)||void 0===o)&&n!==o&&(!Number.isNaN(o)||!Number.isNaN(n))&&(s.O.set(t,n),c)){if(r.C&&128&a){const e=r.C[t];e&&e.map((e=>{try{c[e](n,o,t)}catch(e){B(e,i)}}))}2==(18&a)&&L(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,r){W.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},C=(e,t={})=>{const n=[],r=t.exclude||[],s=V.customElements,i=q.head,o=i.querySelector("meta[charset]"),l=q.createElement("style"),a=[];let c,u=!0;Object.assign(W,t),W.P=new URL(t.resourcesUrl||"./",q.baseURI).href,e.map((e=>{e[1].map((t=>{const i={i:t[0],p:t[1],v:t[2],L:t[3]};i.v=t[2],i.C={};const o=i.p,l=class extends HTMLElement{constructor(e){super(e),G(e=this,i),1&i.i&&e.attachShadow({mode:"open"})}connectedCallback(){c&&(clearTimeout(c),c=null),u?a.push(this):W.jmp((()=>(e=>{if(0==(1&W.i)){const t=U(e),n=t.j,r=()=>{};if(!(1&t.i)){t.i|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){N(t,t.S=n);break}}n.v&&Object.entries(n.v).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,s)=>{if(0==(32&t.i)){{if(t.i|=32,(s=F(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.C=s.watchers,R(s,n,2),s.isProxied=!0);const r=()=>{};t.i|=8;try{new s(t)}catch(e){B(e)}t.i&=-9,t.i|=128,r()}if(s.style){let e=s.style;const t=f(n);if(!H.has(t)){const r=()=>{};((e,t,n)=>{let r=H.get(e);J&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,H.set(e,r)})(t,e,!!(1&n.i)),r()}}}const i=t.S,o=()=>L(t,!0);i&&i["s-rc"]?i["s-rc"].push(o):o()})(0,t,n)}r()}})(this)))}disconnectedCallback(){W.jmp((()=>(()=>{0==(1&W.i)&&_(U(this).g,"disconnectedCallback")})()))}componentOnReady(){return U(this).N}};i.T=e[0],r.includes(o)||s.get(o)||(n.push(o),s.define(o,R(l,i,1)))}))})),l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),i.insertBefore(l,o?o.nextSibling:i.firstChild),u=!1,a.length?a.map((e=>e.connectedCallback())):W.jmp((()=>c=setTimeout(O,30)))},I=new WeakMap,U=e=>I.get(e),x=(e,t)=>I.set(t.g=e,t),G=(e,t)=>{const n={i:0,$:e,j:t,O:new Map};return n.N=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],I.set(e,n)},$=(e,t)=>t in e,B=(e,t)=>(0,console.error)(e,t),D=new Map,F=e=>{const t=e.p.replace(/-/g,"_"),r=e.T,s=D.get(r);return s?s[t]:n(760)(`./${r}.entry.js`).then((e=>(D.set(r,e),e[t])),B)},H=new Map,V="undefined"!=typeof window?window:{},q=V.document||{head:{}},W={i:0,P:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},Y=e=>Promise.resolve(e),J=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),K=[],Z=[],z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){B(e)}e.length=0},Q=()=>{z(K),z(Z),(i=K.length>0)&&W.raf(Q)},X=e=>Y().then(e),ee=((e,t)=>t=>{e.push(t),i||(i=!0,4&W.i?X(Q):W.raf(Q))})(Z)},760:(e,t,n)=>{var r={"./p-6d48e529.entry.js":[587,587],"./p-77a26ab9.entry.js":[929,929],"./p-f0fdd090.entry.js":[393,393]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=760,e.exports=s},586:(e,t,n)=>{"use strict";n.d(t,{a:()=>g,b:()=>$,g:()=>o,h:()=>c,p:()=>Q,r:()=>F});let r,s,i=!1;const o=e=>{const t=new URL(e,z.t);return t.origin!==K.location.origin?t.href:t.pathname},l={},a=e=>"object"==(e=typeof e)||"function"===e,c=(e,t,...n)=>{let r=null,s=!1,i=!1;const o=[],l=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?l(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!a(r))&&(r+=""),s&&i?o[o.length-1].l+=r:o.push(s?u(null,r):r),i=s)};if(l(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,o,h);const c=u(e,null);return c.o=t,o.length>0&&(c.i=o),c},u=(e,t)=>({u:0,h:e,l:t,p:null,i:null,o:null}),d={},h={forEach:(e,t)=>e.map(f).forEach(t),map:(e,t)=>e.map(f).map(t).map(p)},f=e=>({vattrs:e.o,vchildren:e.i,vkey:e.$,vname:e.m,vtag:e.h,vtext:e.l}),p=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),c(e.vtag,t,...e.vchildren||[])}const t=u(e.vtag,e.vtext);return t.o=e.vattrs,t.i=e.vchildren,t.$=e.vkey,t.m=e.vname,t},g=e=>D(e).g,m=new WeakMap,y=e=>"sc-"+e.v,b=(e,t,n,r,s,i)=>{if(n!==r){let o=V(e,t),l=t.toLowerCase();if("class"===t){const t=e.classList,s=w(n),i=w(r);t.remove(...s.filter((e=>e&&!i.includes(e)))),t.add(...i.filter((e=>e&&!s.includes(e))))}else if(o||"o"!==t[0]||"n"!==t[1]){const l=a(r);if((o||l&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{const s=null==r?"":r;"list"===t?o=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!o||4&i||s)&&!l&&e.setAttribute(t,r=!0===r?"":r)}else t="-"===t[2]?t.slice(3):V(K,l)?l.slice(2):l[2]+t.slice(3),n&&z.rel(e,t,n,!1),r&&z.ael(e,t,r,!1)}},v=/\s/,w=e=>e?e.split(v):[],A=(e,t,n,r)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,i=e&&e.o||l,o=t.o||l;for(r in i)r in o||b(s,r,i[r],void 0,n,t.u);for(r in o)b(s,r,i[r],o[r],n,t.u)},S=(e,t,n)=>{const s=t.i[n];let i,o,l=0;if(null!==s.l)i=s.p=Z.createTextNode(s.l);else if(i=s.p=Z.createElement(s.h),A(null,s,!1),null!=r&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),s.i)for(l=0;l<s.i.length;++l)o=S(e,s,l),o&&i.appendChild(o);return i},N=(e,t,n,r,i,o)=>{let l,a=e;for(a.shadowRoot&&a.tagName===s&&(a=a.shadowRoot);i<=o;++i)r[i]&&(l=S(null,n,i),l&&(r[i].p=l,a.insertBefore(l,t)))},L=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.p.remove()},E=(e,t)=>e.h===t.h,P=(e,t)=>{const n=t.p=e.p,r=e.i,s=t.i,i=t.l;null===i?("slot"===t.h||A(e,t,!1),null!==r&&null!==s?((e,t,n,r)=>{let s,i=0,o=0,l=t.length-1,a=t[0],c=t[l],u=r.length-1,d=r[0],h=r[u];for(;i<=l&&o<=u;)null==a?a=t[++i]:null==c?c=t[--l]:null==d?d=r[++o]:null==h?h=r[--u]:E(a,d)?(P(a,d),a=t[++i],d=r[++o]):E(c,h)?(P(c,h),c=t[--l],h=r[--u]):E(a,h)?(P(a,h),e.insertBefore(a.p,c.p.nextSibling),a=t[++i],h=r[--u]):E(c,d)?(P(c,d),e.insertBefore(c.p,a.p),c=t[--l],d=r[++o]):(s=S(t&&t[o],n,o),d=r[++o],s&&a.p.parentNode.insertBefore(s,a.p));i>l?N(e,null==r[u+1]?null:r[u+1].p,n,r,o,u):o>u&&L(t,i,l)})(n,r,t,s):null!==s?(null!==e.l&&(n.textContent=""),N(n,null,t,s,0,s.length-1)):null!==r&&L(r,0,r.length-1)):e.l!==i&&(n.data=i)},T=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},k=(e,t)=>{if(e.u|=16,!(4&e.u))return T(e,e.j),ie((()=>O(e,t)));e.u|=512},O=(e,t)=>{const n=e.k;let r;return t&&(r=C(n,"componentWillLoad")),I(r,(()=>_(e,n,t)))},_=async(e,t,n)=>{const r=e.g,s=r["s-rc"];n&&(e=>{const t=e.M,n=e.g,r=t.u,s=((e,t)=>{let n=y(t);const r=J.get(n);if(e=11===e.nodeType?e:Z,r)if("string"==typeof r){let t,s=m.get(e=e.head||e);s||m.set(e,s=new Set),s.has(n)||(t=Z.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e),j(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>M(e);0===t.length?n():(Promise.all(t).then(n),e.u|=4,t.length=0)}},j=(e,t)=>{try{t=t.render(),e.u&=-17,e.u|=2,((e,t)=>{const n=e.g,i=e.C||u(null,null),o=(e=>e&&e.h===d)(t)?t:c(null,null,t);s=n.tagName,o.h=null,o.u|=4,e.C=o,o.p=i.p=n.shadowRoot||n,r=n["s-sc"],P(i,o)})(e,t)}catch(t){q(t,e.g)}return null},M=e=>{const t=e.g,n=e.j;64&e.u||(e.u|=64,U(t),e.O(t),n||R()),e.S&&(e.S(),e.S=void 0),512&e.u&&se((()=>k(e,!1))),e.u&=-517},R=()=>{U(Z.documentElement),se((()=>(e=>{const t=z.ce("appload",{detail:{namespace:"ip-tab-panel"}});return e.dispatchEvent(t),t})(K)))},C=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){q(e)}},I=(e,t)=>e&&e.then?e.then(t):t(),U=e=>e.classList.add("hydrated"),x=(e,t,n)=>{if(t.L){e.watchers&&(t.P=e.watchers);const r=Object.entries(t.L),s=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(s,e,{get(){return((e,t)=>D(this).N.get(t))(0,e)},set(n){((e,t,n,r)=>{const s=D(this),i=s.g,o=s.N.get(t),l=s.u,c=s.k;if(n=((e,t)=>null==e||a(e)?e:1&t?e+"":e)(n,r.L[t][0]),(!(8&l)||void 0===o)&&n!==o&&(!Number.isNaN(o)||!Number.isNaN(n))&&(s.N.set(t,n),c)){if(r.P&&128&l){const e=r.P[t];e&&e.map((e=>{try{c[e](n,o,t)}catch(e){q(e,i)}}))}2==(18&l)&&k(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,r){z.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},G=e=>{C(e,"connectedCallback")},$=(e,t={})=>{const n=[],r=t.exclude||[],s=K.customElements,i=Z.head,o=i.querySelector("meta[charset]"),l=Z.createElement("style"),a=[];let c,u=!0;Object.assign(z,t),z.t=new URL(t.resourcesUrl||"./",Z.baseURI).href,e.map((e=>{e[1].map((t=>{const i={u:t[0],v:t[1],L:t[2],R:t[3]};i.L=t[2],i.P={};const o=i.v,l=class extends HTMLElement{constructor(e){super(e),H(e=this,i),1&i.u&&e.attachShadow({mode:"open"})}connectedCallback(){c&&(clearTimeout(c),c=null),u?a.push(this):z.jmp((()=>(e=>{if(0==(1&z.u)){const t=D(e),n=t.M,r=()=>{};if(1&t.u)G(t.k);else{t.u|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){T(t,t.j=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,s)=>{if(0==(32&t.u)){{if(t.u|=32,(s=Y(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.P=s.watchers,x(s,n,2),s.isProxied=!0);const r=()=>{};t.u|=8;try{new s(t)}catch(e){q(e)}t.u&=-9,t.u|=128,r(),G(t.k)}if(s.style){let e=s.style;const t=y(n);if(!J.has(t)){const r=()=>{};((e,t,n)=>{let r=J.get(e);X&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,J.set(e,r)})(t,e,!!(1&n.u)),r()}}}const i=t.j,o=()=>k(t,!0);i&&i["s-rc"]?i["s-rc"].push(o):o()})(0,t,n)}r()}})(this)))}disconnectedCallback(){z.jmp((()=>{}))}componentOnReady(){return D(this).T}};i.U=e[0],r.includes(o)||s.get(o)||(n.push(o),s.define(o,x(l,i,1)))}))})),l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),i.insertBefore(l,o?o.nextSibling:i.firstChild),u=!1,a.length?a.map((e=>e.connectedCallback())):z.jmp((()=>c=setTimeout(R,30)))},B=new WeakMap,D=e=>B.get(e),F=(e,t)=>B.set(t.k=e,t),H=(e,t)=>{const n={u:0,g:e,M:t,N:new Map};return n.T=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],B.set(e,n)},V=(e,t)=>t in e,q=(e,t)=>(0,console.error)(e,t),W=new Map,Y=e=>{const t=e.v.replace(/-/g,"_"),r=e.U,s=W.get(r);return s?s[t]:n(300)(`./${r}.entry.js`).then((e=>(W.set(r,e),e[t])),q)},J=new Map,K="undefined"!=typeof window?window:{},Z=K.document||{head:{}},z={u:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},Q=e=>Promise.resolve(e),X=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),ee=[],te=[],ne=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){q(e)}e.length=0},re=()=>{ne(ee),ne(te),(i=ee.length>0)&&z.raf(re)},se=e=>Q().then(e),ie=((e,t)=>t=>{e.push(t),i||(i=!0,4&z.u?se(re):z.raf(re))})(te)},300:(e,t,n)=>{var r={"./p-120902c9.entry.js":[102,102]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=300,e.exports=s},377:(e,t,n)=>{"use strict";var r=n(498);const s=JSON.parse('{"skip-link":{"nav":{"label":"Go to navigation","text":"Go to nav"},"content":{"label":"Go to content","text":"Go to content"}},"head":{"title":"Web Components"},"logo":{"alt":"Ipedis - Go to Ipedis Website","link":"https://www.ipedis.com/en"},"header":{"title":{"main":"Web Components","blockquote":"Blockquote","accordeon":"Accordeon","tabPanel":"Tab Panel"},"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt augue quis odio pharetra auctor. Nunc tempor velit eget quam tincidunt venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}}'),i=JSON.parse('{"skip-link":{"nav":{"label":"Aller vers la navigation","text":"Aller vers nav"},"content":{"label":"Aller vers le contenu","text":"Aller vers contenu"}},"head":{"title":"Webpack Boilerplate | FR"},"navigation":{"heading":"French Navigation","btn":"Switch to En"},"header":{"heading":"French Header"},"main":{"heading":"French Main"},"footer":{"heading":"French Footer"}}'),o=document.querySelector("html"),l=new r.Z({defaultLanguage:"fr",detectLanguage:!0,debug:!0,persist:!1,fileLocation:"./src/locales"});var a;l.add("fr",i),l.add("en",s),"fr"===(a=o.lang)?l.translatePageTo("fr"):"en"===a?l.translatePageTo("en"):(l.add(a,undefined),l.translatePageTo(a));var c=n(586);(()=>{const e={};return e.resourcesUrl=new URL(".","file:///home/ipedis/htdocs/web-component/dev/git/WC-Homepage/node_modules/ip-tab-panel/dist/ip-tab-panel/ip-tab-panel.esm.js").href,(0,c.p)(e)})().then((e=>(0,c.b)([["p-120902c9",[[1,"ip-tab-panel",{tabPanelHeaders:[1,"tab-panel-headers"],tabPanelTitle:[1,"tab-panel-title"],titleTag:[1,"title-tag"],currentTab:[32],currentTabIndex:[32],isSlotPresent:[32],tabHeaders:[32]}]]]],e)));var u=n(528);(()=>{const e={};return e.resourcesUrl=new URL(".","file:///home/ipedis/htdocs/web-component/dev/git/WC-Homepage/node_modules/ip-accordeon/dist/ip-accordeon/ip-accordeon.esm.js").href,(0,u.p)(e)})().then((e=>(0,u.b)([["p-84c53eb8",[[1,"ip-accordeon",{accordeonHeaders:[1,"accordeon-headers"],isFirstPanelOpen:[4,"is-first-panel-open"],isSingleOpen:[4,"is-single-open"],titleTag:[1,"title-tag"],accHeaderButtons:[32],accPanels:[32],currentPanel:[32]}]]]],e)));var d=n(571);(()=>{const e={};return e.resourcesUrl=new URL(".","file:///home/ipedis/htdocs/web-component/dev/git/WC-Homepage/node_modules/ip-d14-slider/dist/ip-slider/ip-slider.esm.js").href,(0,d.p)(e)})().then((e=>(0,d.b)([["p-6d48e529",[[1,"ip-slider-sl-1",{slideTitle:[1,"slide-title"],slideGap:[2,"slide-gap"],isSlideBullet:[4,"is-slide-bullet"],isPreviousNextNavigation:[4,"is-previous-next-navigation"],itemToShow:[2,"item-to-show"],previousBtnAria:[1,"previous-btn-aria"],nextBtnAria:[1,"next-btn-aria"],bulletBtnAria:[1,"bullet-btn-aria"],bulletBtnAriaTo:[1,"bullet-btn-aria-to"],sliderItemWidth:[32],sliderPosition:[32],sliderUl:[32],sliderPreviousBtn:[32],sliderNextBtn:[32],sliderCounts:[32],isMobilePortrait:[32],sliderBullets:[32]}]]],["p-77a26ab9",[[1,"ip-slider-sl-2",{slides:[1],slideTitle:[1,"slide-title"],slideTitleMobile:[1,"slide-title-mobile"],btnNextAria:[1,"btn-next-aria"],btnPreviousAria:[1,"btn-previous-aria"],slideTitleAria:[1,"slide-title-aria"],sliderPostion:[32],sliderUl:[32],sliderItemSize:[32],sliderItemsCounts:[32],sliderPreviousBtn:[32],sliderNextBtn:[32],sliderLinks:[32],isMobilePortrait:[32]}]]],["p-f0fdd090",[[1,"ip-slider-sl-3",{slides:[1],isSlideBullet:[4,"is-slide-bullet"],isAutoSlide:[4,"is-auto-slide"],slidePlayIcon:[8,"slide-play-icon"],slidePauseIcon:[8,"slide-pause-icon"],sliderBullets:[32],sliderCounts:[32],sliderPosition:[32],slidesLi:[32],isAutoPlaying:[32],isTransitionRunning:[32]}]]]],e))),document.querySelectorAll(".sidebar-menu > h2 span img").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("rotate")}))}))},933:()=>{}},e=>{e(e.s=377)}]);