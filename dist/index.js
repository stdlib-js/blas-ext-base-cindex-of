"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(G,c){
var l=require('@stdlib/strided-base-reinterpret-complex64/dist'),R=require('@stdlib/complex-float32-real/dist'),_=require('@stdlib/complex-float32-imag/dist');function g(e,r,u,i,j){var n,q,o,a,t;if(e<=0)return-1;for(q=R(r),o=_(r),n=l(u,0),a=j*2,i*=2,t=0;t<e;t++){if(n[a]===q&&n[a+1]===o)return t;a+=i}return-1}c.exports=g
});var d=v(function(H,x){
var w=require('@stdlib/strided-base-stride2offset/dist'),b=s();function k(e,r,u,i){return b(e,r,u,i,w(e,i))}x.exports=k
});var O=v(function(I,y){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),A=s();z(p,"ndarray",A);y.exports=p
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),E=O(),f,m=C(B(__dirname,"./native.js"));D(m)?f=E:f=m;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
