// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"";var o=r()?function(e){var r,n,o,c,s;if(null==e)return t.call(e);n=e[a],s=a,r=null!=(c=e)&&i.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)};var c=Array.isArray?Array.isArray:function(e){return"[object Array]"===o(e)},s="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function l(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+u(n):u(n)+e,i&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!l(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function b(e){return"string"==typeof e}var w=Math.abs,v=String.prototype.toLowerCase,y=String.prototype.toUpperCase,m=String.prototype.replace,E=/e\+(\d)$/,k=/e-(\d)$/,x=/^(\d+)$/,_=/^(\d+)e/,S=/\.0$/,I=/\.0*e/,T=/(\..*[^0])0*e/;function V(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!l(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":w(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=m.call(t,T,"$1e"),t=m.call(t,I,"e"),t=m.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,E,"e+0$1"),t=m.call(t,k,"e-0$1"),e.alternate&&(t=m.call(t,x,"$1."),t=m.call(t,_,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):v.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $(e,r,t){var i=r-e.length;return i<0?e:e=t?e+j(i):j(i)+e}var A=String.fromCharCode,F=isNaN,O=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function R(e){var r,t,i,n,a,o,c,s,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(b(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=N(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,F(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,F(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=h(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!F(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=F(a)?String(i.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=V(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=f(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=$(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,i,n;for(t=[],n=0,i=C.exec(e);i;)(r=e.slice(n,C.lastIndex-i[0].length)).length&&t.push(r),t.push(P(i)),n=C.lastIndex,i=C.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function L(e){return"string"==typeof e}function W(e){var r,t;if(!L(e))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Z(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return R.apply(null,r)}var G=Object.prototype,M=G.toString,U=G.__defineGetter__,X=G.__defineSetter__,Y=G.__lookupGetter__,z=G.__lookupSetter__;var B=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Y.call(e,r)||z.call(e,r)?(i=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&U&&U.call(e,r,t.get),o&&X&&X.call(e,r,t.set),e};function q(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e){return"number"==typeof e}var H=Number,J=H.prototype.toString;var K=r();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function ee(e){return D(e)||Q(e)}q(ee,"isPrimitive",D),q(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=H.NEGATIVE_INFINITY,ie=Math.floor;function ne(e){return e<re&&e>te&&ie(r=e)===r;var r}function ae(e){return D(e)&&ne(e)}function oe(e){return Q(e)&&ne(e.valueOf())}function ce(e){return ae(e)||oe(e)}function se(e){return ae(e)&&e>=0}function pe(e){return oe(e)&&e.valueOf()>=0}function le(e){return se(e)||pe(e)}q(ce,"isPrimitive",ae),q(ce,"isObject",oe),q(le,"isPrimitive",se),q(le,"isObject",pe);function ue(e){return"number"==typeof e}function fe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ge(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+fe(n):fe(n)+e,i&&(e="-"+e)),e}var de=String.prototype.toLowerCase,he=String.prototype.toUpperCase;function be(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ue(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ge(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ge(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===he.call(e.specifier)?he.call(t):de.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function we(e){return"string"==typeof e}var ve=Math.abs,ye=String.prototype.toLowerCase,me=String.prototype.toUpperCase,Ee=String.prototype.replace,ke=/e\+(\d)$/,xe=/e-(\d)$/,_e=/^(\d+)$/,Se=/^(\d+)e/,Ie=/\.0$/,Te=/\.0*e/,Ve=/(\..*[^0])0*e/;function je(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ve(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ee.call(t,Ve,"$1e"),t=Ee.call(t,Te,"e"),t=Ee.call(t,Ie,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ee.call(t,ke,"e+0$1"),t=Ee.call(t,xe,"e-0$1"),e.alternate&&(t=Ee.call(t,_e,"$1."),t=Ee.call(t,Se,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===me.call(e.specifier)?me.call(t):ye.call(t)}function $e(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ae(e,r,t){var i=r-e.length;return i<0?e:e=t?e+$e(i):$e(i)+e}var Fe=String.fromCharCode,Oe=isNaN,Ne=Array.isArray;function Re(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ce(e){var r,t,i,n,a,o,c,s,p;if(!Ne(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(we(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Re(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Oe(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Oe(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=be(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Oe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Oe(a)?String(i.arg):Fe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=je(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ge(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ae(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Le(e){var r,t,i,n;for(t=[],n=0,i=Pe.exec(e);i;)(r=e.slice(n,Pe.lastIndex-i[0].length)).length&&t.push(r),t.push(Ze(i)),n=Pe.lastIndex,i=Pe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function We(e){return"string"==typeof e}function Ge(e){var r,t,i;if(!We(e))throw new TypeError(Ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Le(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ce.apply(null,t)}function Me(e){var r,t;if(c(e))return r=e.shift(),[e,r];if(null!==(t=e)&&"object"==typeof t&&se(t.length)&&t.length<=9007199254740991&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength)return function(e){var r,t;return 0===e.length?[e,void 0]:(t=e[0],r=e.byteOffset+e.BYTES_PER_ELEMENT,[new e.constructor(e.buffer,r,e.length-1),t])}(e);if(null!==e&&"object"==typeof e&&"number"==typeof e.length&&ce(e.length)&&e.length>=0)return function(e){var r,t,i;if(0===e.length)return[e,void 0];for(r=e.length-1,t=e[0],i=0;i<r;i++)e[i]=e[i+1];return delete e[r],e.length=r,[e,t]}(e);throw new TypeError(Ge("invalid argument. Must provide either an array, typed array, or an array-like object. Value: `%s`.",e))}export{Me as default};
//# sourceMappingURL=mod.js.map
