// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor,n=4294967295;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=n;var r}function r(e){return e!=e}var o=Math.sqrt;return function(e){var n,f,i,l,u;if(0===arguments.length)n=[0,0];else{if(!t(e))throw new TypeError(function(){var e,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(e=1;e<n.length;e++)t+="&arg[]="+encodeURIComponent(n[e]);return t}("1Ht9a",e));n=e}return l=0,i=0,u=0,function(e){return 0===arguments.length?0===u?null:(n[0]=i,1===u?(r(l)?n[1]=NaN:n[1]=0,n):(n[1]=o(l/(u-1)),n)):(l+=(f=e-i)*(e-(i+=f/(u+=1))),n[0]=i,u<2?(r(l)?n[1]=NaN:n[1]=0,n):(n[1]=o(l/(u-1)),n))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmeanstdev=n();
//# sourceMappingURL=browser.js.map
