// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";function i(i){var n,m,d,o,l;if(0===arguments.length)n=[0,0];else{if(!s(i))throw new TypeError(t("0dqAC",i));n=i}return o=0,d=0,l=0,a;function a(s){return 0===arguments.length?0===l?null:(n[0]=d,1===l?(e(o)?n[1]=NaN:n[1]=0,n):(n[1]=r(o/(l-1)),n)):(o+=(m=s-d)*(s-(d+=m/(l+=1))),n[0]=d,l<2?(e(o)?n[1]=NaN:n[1]=0,n):(n[1]=r(o/(l-1)),n))}}export{i as default};
//# sourceMappingURL=index.mjs.map
