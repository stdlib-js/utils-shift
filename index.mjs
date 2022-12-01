// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s){var i;if(e(s))return i=s.shift(),[s,i];if(t(s))return function(e){var t,r;return 0===e.length?[e,void 0]:(r=e[0],t=e.byteOffset+e.BYTES_PER_ELEMENT,[new e.constructor(e.buffer,t,e.length-1),r])}(s);if(null!==s&&"object"==typeof s&&"number"==typeof s.length&&r(s.length)&&s.length>=0)return function(e){var t,r,n;if(0===e.length)return[e,void 0];for(t=e.length-1,r=e[0],n=0;n<t;n++)e[n]=e[n+1];return delete e[t],e.length=t,[e,r]}(s);throw new TypeError(n("invalid argument. Must provide either an array, typed array, or an array-like object. Value: `%s`.",s))}export{s as default};
//# sourceMappingURL=index.mjs.map
