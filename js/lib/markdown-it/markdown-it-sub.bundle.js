/* esm.sh - esbuild bundle(markdown-it-sub@1.0.0) es2022 production */
var _=Object.create;var e=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var h=(r,o)=>()=>(o||r((o={exports:{}}).exports,o),o.exports);var k=(r,o,p,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let u of x(o))!b.call(r,u)&&u!==p&&e(r,u,{get:()=>o[u],enumerable:!(s=d(o,u))||s.enumerable});return r};var E=(r,o,p)=>(p=r!=null?_(m(r)):{},k(o||!r||!r.__esModule?e(p,"default",{value:r,enumerable:!0}):p,r));var l=h((v,f)=>{"use strict";var a=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function M(r,o){var p,s,u,i=r.posMax,n=r.pos;if(r.src.charCodeAt(n)!==126||o||n+2>=i)return!1;for(r.pos=n+1;r.pos<i;){if(r.src.charCodeAt(r.pos)===126){p=!0;break}r.md.inline.skipToken(r)}return!p||n+1===r.pos||(s=r.src.slice(n+1,r.pos),s.match(/(^|[^\\])(\\\\)*\s/))?(r.pos=n,!1):(r.posMax=r.pos,r.pos=n+1,u=r.push("sub_open","sub",1),u.markup="~",u=r.push("text","",0),u.content=s.replace(a,"$1"),u=r.push("sub_close","sub",-1),u.markup="~",r.pos=r.posMax+1,r.posMax=i,!0)}f.exports=function(o){o.inline.ruler.after("emphasis","sub",M)}});var A=E(l()),{default:c,...C}=A,$=c!==void 0?c:C;export{$ as default};