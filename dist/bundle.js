(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,':root {\r\n  --color-base-bg: #f6f6f6;\r\n  --color-text: #242423;\r\n  --color-clear: #393938;\r\n  --color-line: #cccccb;\r\n  --color-container: #fff;\r\n  --color-in: #fefcdc;\r\n  --font-size: 1.1rem;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: var(--font-size);\r\n\r\n  /* box-sizing: border-box; */\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  background-color: var(--color-base-bg);\r\n  color: var(--color-text);\r\n}\r\n\r\n.in {\r\n  width: 100%;\r\n  font-style: italic;\r\n  font-size: var(--font-size);\r\n  color: var(--color-text);\r\n  background-color: var(--color-container);\r\n  border: 3px solid transparent;\r\n  height: 45px;\r\n  line-height: 15px;\r\n  padding: 0 40px 0 10px;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.checkbox:focus {\r\n  background-color: var(--color-in);\r\n}\r\n\r\n.inTask {\r\n  width: 100%;\r\n  text-indent: 2.2rem;\r\n  font-size: var(--font-size);\r\n  color: var(--color-text);\r\n  background-color: var(--color-container);\r\n  border: none;\r\n  height: 45px;\r\n  line-height: 15px;\r\n  padding: 0;\r\n}\r\n\r\n.inTask:focus {\r\n  border-color: var(--color-in);\r\n  outline: 0 none;\r\n  background-color: var(--color-in);\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  position: absolute;\r\n  margin-left: 1rem;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.in:focus {\r\n  border-color: transparent;\r\n  outline: 0 none;\r\n}\r\n\r\n.in:-webkit-autofill,\r\n.in:-webkit-autofill:hover,\r\n.in:-webkit-autofill:focus {\r\n  -webkit-text-fill-color: var(--color-container);\r\n  border: 1px solid transparent;\r\n  caret-color: var(--color-text);\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.container-svg {\r\n  position: absolute;\r\n  right: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.container-svg img {\r\n  width: 100%;\r\n}\r\n\r\nsvg {\r\n  fill: var(--color-line);\r\n}\r\n\r\nlabel {\r\n  width: 80%;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.containerTodo {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  width: 80%;\r\n  min-height: 12rem;\r\n  max-width: 700px;\r\n  background-color: var(--color-container);\r\n  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.74);\r\n  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.74);\r\n  -moz-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.74);\r\n}\r\n\r\n.containerTodo > div {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 4rem;\r\n  padding: 0;\r\n  border-bottom: solid 1px var(--color-line);\r\n}\r\n\r\n.containerTodo > div:focus {\r\n  background-color: var(--color-in);\r\n}\r\n\r\n.containerTodo > .clearAll {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--color-clear);\r\n  height: 4rem;\r\n  border-bottom: solid 1px var(--color-line);\r\n}\r\n\r\n.containerTodo > div p {\r\n  padding: 0 1rem;\r\n}\r\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{class e{description;state;constructor(e){this.description=e,this.state=!1}setStatus(e){this.state=e}setDescription(e){this.description=e}getStatus(){return this.state}getDescription(){return this.description}}var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),s=n.n(i),c=n(565),l=n.n(c),d=n(216),u=n.n(d),p=n(589),f=n.n(p),m=n(426),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"7d18e3d3a857c99e2653.svg",v=n.p+"bfd36e1237373e2429e4.svg",b=n.p+"0b6563649bcf669ca1bb.svg",k=new class{tasks;constructor(){this.tasks=[]}addTask(e){this.tasks.push(e)}removeTask(e){const t=this.tasks.indexOf(e);this.tasks.splice(t,1)}editTask(e,t){this.tasks[e].description=t}getTasks(){return this.tasks}},x=document.querySelector(".in"),y=document.querySelectorAll(".container-svg img"),w=document.querySelector(".clearAll");function T(e){e.forEach(((e,t)=>{const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("input"),a=document.createElement("input"),i=document.createElement("div"),s=document.createElement("img");r.classList.add("checkbox"),o.id=`task${t}`,o.type="checkbox",o.name=`task${t}`,o.checked=e.state,a.value=e.description,a.setAttribute("name",`ttask${t}`),a.classList.add("inTask"),i.classList.add("container-svg"),s.setAttribute("src",v),s.setAttribute("alt","edit"),r.appendChild(o),r.appendChild(a),n.appendChild(r),i.appendChild(s),n.appendChild(i),w.insertAdjacentElement("beforebegin",n)}))}document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("tasks")?(k.tasks=JSON.parse(localStorage.getItem("tasks")),k.tasks.forEach(((e,t)=>{console.log(e.description,e.state,t)})),T(k.getTasks())):(k.addTask(new e("Wash my dog...")),k.addTask(new e("Complete To Do List Project")),k.addTask(new e("Fix car ")),localStorage.setItem("tasks",JSON.stringify(k.getTasks())),console.log(localStorage.getItem("tasks")),console.log(`GetTask${k.getTasks().length}`),T(k.getTasks()))})),y.forEach((e=>{e.setAttribute("src",v)})),document.querySelector("img[alt=reload]").setAttribute("src",g),document.addEventListener("change",(e=>{const t=e.target;if("checkbox"===e.target.type){const e=document.querySelector(`input[name='t${t.name}']`);t.checked?(e.classList.add("checked"),console.log(`Task selected: ${e.value}`)):e.classList.remove("checked")}})),x.addEventListener("keyup",(t=>{if("Enter"===t.key){const n=new e(t.target.value);k.addTask(n);const r=k.getTasks();localStorage.setItem("tasks",JSON.stringify(k.getTasks())),console.log(localStorage.getItem("tasks")),console.log(`GetTask${k.getTasks().length}`),r.forEach(((e,t)=>{console.log(e.description,e.state,t)})),w.insertAdjacentElement("beforebegin",function(e,t){const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("input"),a=document.createElement("input"),i=document.createElement("div"),s=document.createElement("img");return r.classList.add("checkbox"),o.id=`task${t}`,o.type="checkbox",o.name=`task${t}`,o.checked=e.state,a.value=e.description,a.setAttribute("name",`ttask${t}`),a.classList.add("inTask"),i.classList.add("container-svg"),s.setAttribute("src",v),s.setAttribute("alt","edit"),r.appendChild(o),r.appendChild(a),n.appendChild(r),i.appendChild(s),n.appendChild(i),n}(n,k.getTasks().length-1)),x.value=""}})),document.addEventListener("input",(e=>{const t=e.target;if(e.target.matches(".inTask")){const n=parseInt(t.name.slice(5),10);k.editTask(n,e.target.value),localStorage.setItem("tasks",JSON.stringify(k.getTasks())),t.parentElement.nextElementSibling.firstElementChild.setAttribute("alt","delete"),t.parentElement.nextElementSibling.firstElementChild.setAttribute("src",b)}})),document.addEventListener("change",(e=>{const t=e.target;e.target.matches(".inTask")&&(t.parentElement.nextElementSibling.firstElementChild.setAttribute("alt","edit"),t.parentElement.nextElementSibling.firstElementChild.setAttribute("src",v))}))})()})();