// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=r()?function(e){var r,i,o,c,s;if(null==e)return t.call(e);i=e[a],s=a,r=null!=(c=e)&&n.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c=Array.isArray?Array.isArray:function(e){return"[object Array]"===o(e)},s="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function u(e){return"number"==typeof e}function p(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+p(i):p(i)+e,n&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,y=String.prototype.toLowerCase,v=String.prototype.toUpperCase,m=String.prototype.replace,w=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,S=/^(\d+)e/,j=/\.0$/,T=/\.0*e/,x=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,x,"$1e"),t=m.call(t,T,"e"),t=m.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,w,"e+0$1"),t=m.call(t,_,"e-0$1"),e.alternate&&(t=m.call(t,E,"$1."),t=m.call(t,S,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===v.call(e.specifier)?v.call(t):y.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var O=String.fromCharCode,A=isNaN,V=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function P(e){var r,t,n,i,a,o,c,s,l,u,p,g,d;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(u=n.arg,p=n.width,g=n.padRight,d=void 0,(d=p-u.length)<0?u:u=g?u+I(d):I(d)+u)),o+=n.arg||"",c+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function C(e){var r,t;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[R(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return P.apply(null,r)}var L=Object.prototype,G=L.toString,Z=L.__defineGetter__,M=L.__defineSetter__,W=L.__lookupGetter__,X=L.__lookupSetter__,Y=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||X.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&M&&M.call(e,r,t.set),e};function B(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var z=Number,q=z.prototype.toString,D=r();function H(e){return"object"==typeof e&&(e instanceof z||(D?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function J(e){return U(e)||H(e)}B(J,"isPrimitive",U),B(J,"isObject",H);var K=Number.POSITIVE_INFINITY,Q=z.NEGATIVE_INFINITY,ee=Math.floor;function re(e){return e<K&&e>Q&&ee(r=e)===r;var r}function te(e){return U(e)&&re(e)}function ne(e){return H(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return te(e)&&e>=0}function oe(e){return ne(e)&&e.valueOf()>=0}function ce(e){return ae(e)||oe(e)}B(ie,"isPrimitive",te),B(ie,"isObject",ne),B(ce,"isPrimitive",ae),B(ce,"isObject",oe);var se=9007199254740991;return function(e){var r,t;if(c(e))return r=e.shift(),[e,r];if(null!==(t=e)&&"object"==typeof t&&ae(t.length)&&t.length<=se&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength)return function(e){var r,t;return 0===e.length?[e,void 0]:(t=e[0],r=e.byteOffset+e.BYTES_PER_ELEMENT,[new e.constructor(e.buffer,r,e.length-1),t])}(e);if(null!==e&&"object"==typeof e&&"number"==typeof e.length&&ie(e.length)&&e.length>=0)return function(e){var r,t,n;if(0===e.length)return[e,void 0];for(r=e.length-1,t=e[0],n=0;n<r;n++)e[n]=e[n+1];return delete e[r],e.length=r,[e,t]}(e);throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1XXBm",e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).shift=r();
//# sourceMappingURL=index.js.map
