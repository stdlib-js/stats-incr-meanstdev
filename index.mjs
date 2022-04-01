// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var n=t,i=e,a=s,m=r;var l=function(t){var e,s,r,l,d;if(0===arguments.length)e=[0,0];else{if(!n(t))throw new TypeError(i("invalid argument. Output argument must be an array-like object. Value: `%s`.",t));e=t}return l=0,r=0,d=0,o;function o(t){return 0===arguments.length?0===d?null:(e[0]=r,1===d?(a(l)?e[1]=NaN:e[1]=0,e):(e[1]=m(l/(d-1)),e)):(l+=(s=t-r)*(t-(r+=s/(d+=1))),e[0]=r,d<2?(a(l)?e[1]=NaN:e[1]=0,e):(e[1]=m(l/(d-1)),e))}};export{l as default};
//# sourceMappingURL=index.mjs.map
