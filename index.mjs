// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n){var i;if(t(n))return i=n.shift(),[n,i];if(e(n))return function(t){var e,r;return 0===t.length?[t,void 0]:(r=t[0],e=t.byteOffset+t.BYTES_PER_ELEMENT,[new t.constructor(t.buffer,e,t.length-1),r])}(n);if(null!==n&&"object"==typeof n&&"number"==typeof n.length&&r(n.length)&&n.length>=0)return function(t){var e,r,s;if(0===t.length)return[t,void 0];for(e=t.length-1,r=t[0],s=0;s<e;s++)t[s]=t[s+1];return delete t[e],t.length=e,[t,r]}(n);throw new TypeError(s("1XXBm,OR",n))}export{n as default};
//# sourceMappingURL=index.mjs.map
