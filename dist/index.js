"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=u(function(k,s){
function y(r){var e,i,t;if(r.length===0)return[r,void 0];for(e=r.length-1,i=r[0],t=0;t<e;t++)r[t]=r[t+1];return delete r[e],r.length=e,[r,i]}s.exports=y
});var n=u(function(L,a){
function p(r){var e,i,t;return r.length===0?[r,void 0]:(t=r[0],e=r.byteOffset+r.BYTES_PER_ELEMENT,i=new r.constructor(r.buffer,e,r.length-1),[i,t])}a.exports=p
});var h=u(function(M,v){
var g=require('@stdlib/assert-is-array/dist'),d=require('@stdlib/assert-is-typed-array-like/dist'),q=require('@stdlib/assert-is-integer/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),T=f(),m=n();function w(r){var e;if(g(r))return e=r.shift(),[r,e];if(d(r))return m(r);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&q(r.length)&&r.length>=0)return T(r);throw new TypeError(E('1XXBm',r))}v.exports=w
});var x=h();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
