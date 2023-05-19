(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,':root {\r\n  --color-base-bg: #f6f6f6;\r\n  --color-text: #242423;\r\n  --color-clear: #393938;\r\n  --color-line: #cccccb;\r\n  --color-container: #fff;\r\n  --font-size: 1.1rem;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: var(--font-size);\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  background-color: var(--color-base-bg);\r\n  color: var(--color-text);\r\n}\r\n\r\n.in {\r\n  width: 100%;\r\n  font-style: italic;\r\n  font-size: var(--font-size);\r\n  color: var(--color-text);\r\n  background-color: var(--color-container);\r\n  border: 3px solid transparent;\r\n  height: 45px;\r\n  line-height: 15px;\r\n  padding: 0 40px 0 10px; \r\n}\r\n\r\ninput[type="checkbox"] {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.in:focus {\r\n  border-color: transparent;\r\n  outline: 0 none;\r\n}\r\n\r\n.in:-webkit-autofill,\r\n.in:-webkit-autofill:hover,\r\n.in:-webkit-autofill:focus {\r\n  -webkit-text-fill-color: var(--color-container);\r\n  border: 1px solid transparent;\r\n  caret-color: var(--color-text);\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.container-svg {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  padding-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.container-svg img {\r\n  width: 100%;\r\n}\r\n\r\nsvg {\r\n  fill: var(--color-line);\r\n}\r\n\r\nlabel {\r\n  width: 80%;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.containerTodo {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  width: 80%;\r\n  min-height: 12rem;\r\n  max-width: 700px;\r\n  background-color: var(--color-container);\r\n  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.74);\r\n  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.74);\r\n  -moz-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.74);\r\n}\r\n\r\n.containerTodo > div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n  border-bottom: solid 1px var(--color-line);\r\n}\r\n\r\n.containerTodo > .clearAll {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--color-clear);\r\n  height: 4rem;\r\n  border-bottom: solid 1px var(--color-line);\r\n}\r\n\r\n.containerTodo > div p {\r\n  padding: 0 1rem;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  width: 90%;\r\n  padding: 0 1rem;\r\n}\r\n',""]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=t(r,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!r;)r=t[o--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.nc=void 0,(()=>{class r{description;state;constructor(r){this.description=r,this.state=!1}setStatus(r){this.state=r}setDescription(r){this.description=r}getStatus(){return this.state}getDescription(){return this.description}}var n=e(379),t=e.n(n),o=e(795),i=e.n(o),a=e(569),c=e.n(a),s=e(565),l=e.n(s),d=e(216),u=e.n(d),p=e(589),f=e.n(p),h=e(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const m=e.p+"7d18e3d3a857c99e2653.svg",g=e.p+"0ed7b355795bf81973c4.svg",x=new class{tasks;constructor(){this.tasks=[]}addTask(r){this.tasks.push(r)}removeTask(r){const n=this.tasks.indexOf(r);this.tasks.splice(n,1)}getTasks(){return this.tasks}},b=document.querySelector(".in");document.querySelectorAll(".container-svg img").forEach((r=>{r.setAttribute("src",g)})),document.querySelector("img[alt=reload]").setAttribute("src",m),document.addEventListener("change",(r=>{const n=r.target;if("checkbox"===r.target.type){const r=document.querySelector(`label[for='${n.name}']`);n.checked?(r.classList.add("checked"),console.log(`Task selected: ${r.textContent}`)):r.classList.remove("checked")}})),b.addEventListener("keyup",(n=>{if("Enter"===n.key){const e=new r(n.target.value);x.addTask(e),x.getTasks().forEach(((r,n)=>{console.log(r.description,r.state,n)}))}}))})()})();