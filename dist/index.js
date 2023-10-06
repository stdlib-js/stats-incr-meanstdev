"use strict";var c=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var f=c(function(p,l){
var o=require('@stdlib/assert-is-array-like-object/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-sqrt/dist');function q(n){var r,i,a,t,e;if(arguments.length===0)r=[0,0];else{if(!o(n))throw new TypeError(g('1Ht9a',n));r=n}return t=0,a=0,e=0,m;function m(u){return arguments.length===0?e===0?null:(r[0]=a,e===1?(s(t)?r[1]=NaN:r[1]=0,r):(r[1]=v(t/(e-1)),r)):(e+=1,i=u-a,a+=i/e,t+=i*(u-a),r[0]=a,e<2?(s(t)?r[1]=NaN:r[1]=0,r):(r[1]=v(t/(e-1)),r))}}l.exports=q
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
