var __DirectusExtension__=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=51)}({0:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i,s){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:d}}r.d(t,"a",function(){return n})},1:function(e,t){e.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1}}}},100:function(e,t,r){var n=r(99);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,r(4).default)("0b9928a6",n,!0,{})},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var o=t[a],i=o[0],s={id:e+":"+a,css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}},3:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r,n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(r=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},4:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return v});var n=r(2),a=r.n(n),o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,l=0,d=!1,c=function(){},f=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,n){d=r,f=n||{};var o=a()(e,t);return g(o),function(t){for(var r=[],n=0;n<o.length;n++){var s=o[n];(u=i[s.id]).refs--,r.push(u)}for(t?g(o=a()(e,t)):o=[],n=0;n<r.length;n++){var u;if(0===(u=r[n]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function g(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(m(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(m(r.parts[a]));i[r.id]={id:r.id,refs:1,parts:o}}}}function y(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,r,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(d)return c;n.parentNode.removeChild(n)}if(h){var a=l++;n=u||(u=y()),t=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else n=y(),t=function(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),f.ssrId&&e.setAttribute(p,t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},51:function(e,t,r){"use strict";r.r(t);var n=r(1),a={mixins:[r.n(n).a],data:function(){return{valid:null,lastValue:this.value,processedValue:this.value}},watch:{value:function(){try{this.processedValue=JSON.stringify(JSON.parse(this.value),null,this.options.indent)}catch(e){return""}}},methods:{updateValue:function(e){if(this.options.valid){var t=!1;try{e=JSON.stringify(JSON.parse(e)),t=!0}catch(e){}this.valid=t,(t||0===e.length)&&this.$emit("input",e)}else this.$emit("input",e)},process:function(e){var t=e.target,r=t.value,n=t.selectionStart,a=r.substr(0,n),o=r.substr(n),i=a.trim().slice(-1),s=o.substr(0,1);if("Enter"===e.key){var u=this.getPreviousLine(r,a),l=this.getIndents(u),d="}"===s?-1:0;"{"!==i&&"["!==i||(d="}"===s||"]"===s?0:1,this.addIndent(a,o,l+d)),l+d>0&&this.addIndent(a,o,l+d),e.preventDefault()}"}"!==e.key&&"]"!==e.key||this.removeIndent(a,o)},getPreviousLine:function(e,t){return e.split(/\n/g)[t.trimRight().split(/\n/g).length-1]||""},getIndents:function(e){var t=this.options.indent,r=new RegExp("^("+t+"+)","g"),n=e.match(r);return n&&n[0].length/t.length||0},addIndent:function(e,t,r){if(r){var n=this.$refs.textarea,a=e+"\n"+this.options.indent.repeat(r)+t;this.processedValue=a,this.lastValue=a;var o=a.length-t.length;n.selectionStart=o,n.selectionEnd=o}},removeIndent:function(e,t){var r=this.$refs.textarea,n=this.options.indent;if(e.slice(e.length-n.length,e.length)===n){var a=e.slice(0,-n.length)+t,o=e.length-n.length;this.processedValue=a,this.lastValue=a,r.selectionStart=o,r.selectionEnd=o}}}},o=r(0),i=Object(o.a)(a,function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{ref:"textarea",attrs:{readonly:e.readonly,placeholder:e.options.placeholder,rows:"10"},domProps:{value:e.processedValue},on:{keydown:e.process,input:function(t){e.updateValue(t.target.value)}}})},[],!1,function(e){r(100)},"data-v-38e18089",null);t.default=i.exports},99:function(e,t,r){(e.exports=r(3)(!1)).push([e.i,"textarea[data-v-38e18089]{width:100%;font-family:monospace;max-width:var(--width-normal);border:var(--input-border-width) solid var(--lighter-gray);border-radius:var(--border-radius);color:var(--gray);padding:10px;line-height:1.5;transition:var(--fast) var(--transition);transition-property:color,border-color}textarea[data-v-38e18089]::placeholder{color:var(--light-gray)}textarea[data-v-38e18089]:focus{color:var(--darker-gray);border-color:var(--primary);outline:0}textarea:focus+i[data-v-38e18089]{color:var(--primary)}textarea[data-v-38e18089]:-webkit-autofill{box-shadow:inset 0 0 0 1000px var(--white)!important;color:var(--dark-gray)!important;-webkit-text-fill-color:var(--dark-gray)!important}textarea input:-webkit-autofill:focus input[data-v-38e18089]:-webkit-autofill,textarea input[data-v-38e18089]:-webkit-autofill,textarea input[data-v-38e18089]:-webkit-autofill:hover,textarea textarea:-webkit-autofill:hover textarea[data-v-38e18089]:-webkit-autofill:focus,textarea textarea[data-v-38e18089]:-webkit-autofill{border:var(--input-border-width) solid var(--lighter-gray);background-color:var(--white);box-shadow:inset 0 0 0 2000px var(--white)}",""])}});