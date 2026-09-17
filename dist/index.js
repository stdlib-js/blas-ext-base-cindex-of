"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(G,c){
var l=require('@stdlib/strided-base-reinterpret-complex64/dist'),R=require('@stdlib/complex-float32-real/dist'),_=require('@stdlib/complex-float32-imag/dist');function g(e,r,i,a,j){var n,q,o,t,u;if(e<=0)return-1;for(q=R(r),o=_(r),n=l(i,0),t=j*2,a*=2,u=0;u<e;u++){if(n[t]===q&&n[t+1]===o)return u;t+=a}return-1}c.exports=g
});var d=v(function(H,x){
var w=require('@stdlib/strided-base-stride2offset/dist'),b=s();function k(e,r,i,a){return b(e,r,i,a,w(e,a))}x.exports=k
});var O=v(function(I,y){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),A=s();z(p,"ndarray",A);y.exports=p
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),E=O(),f,m=C(B(__dirname,"./native.js"));D(m)?f=E:f=m;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
