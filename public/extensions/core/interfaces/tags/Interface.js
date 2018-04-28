var __DirectusExtension__=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i,s){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId=a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},1:function(e,t){e.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1}}}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}},3:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},34:function(e,t,n){"use strict";n.r(t),n(83);var r=n(1),o={mixins:[n.n(r).a],computed:{valueArray:function(){if(!1===Boolean(this.value))return[];if("string"==typeof this.value){var e=this.value.split(",");return this.options.wrap&&(e.pop(),e.shift()),e}return this.value}},methods:{onInput:function(e){(e.target.value&&"Enter"===e.key||","===e.key)&&(e.preventDefault(),this.addTag(e.target.value),e.target.value="")},addTag:function(e){var t=this.valueArray.splice(0);this.options.lowercase&&(e=e.toLowerCase()),t.push(e),this.emitValue(t)},removeTag:function(e){var t=this.valueArray.splice(0);t.splice(e,1),this.emitValue(t)},emitValue:function(e){var t=e.join(",");t&&this.options.wrap&&(t=","+t+","),this.$emit("input",t)}}},a=n(0),i=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-tags"},[n("v-input",{staticClass:"input",attrs:{type:"text",placeholder:e.$t("interfaces-tags-placeholder_text")},on:{keydown:e.onInput}}),e._v(" "),n("div",{staticClass:"buttons"},e._l(e.valueArray,function(t,r){return n("button",{on:{click:function(t){t.preventDefault(),e.removeTag(r)}}},[e._v(e._s(t))])}))],1)},[],!1,function(e){n(85)},"data-v-4209b9de",null);t.default=i.exports},4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(2),o=n.n(r),a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,l=0,c=!1,d=function(){},f=null,p="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,r){c=n,f=r||{};var a=o()(e,t);return g(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(u=i[s.id]).refs--,n.push(u)}for(t?g(a=o()(e,t)):a=[],r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function y(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(v){var o=l++;r=u||(u=y()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=y(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,_=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},83:function(e){e.exports={}},84:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".interface-tags[data-v-4209b9de]{max-width:var(--width-normal)}.buttons[data-v-4209b9de]{display:flex;flex-wrap:wrap;padding:5px 0}.buttons button[data-v-4209b9de]{margin:2px;padding:2px 4px;background-color:var(--gray);color:var(--white);border-radius:var(--border-radius)}.buttons button[data-v-4209b9de]:hover,.user-is-tabbing .buttons button[data-v-4209b9de]:focus{background-color:var(--danger)}",""])},85:function(e,t,n){var r=n(84);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,n(4).default)("3da9d633",r,!0,{})}});