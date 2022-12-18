/* esm.sh - esbuild bundle(markdown-it-abbr@1.0.4) es2022 production */
var I=Object.create;var C=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var P=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var U=(t,n,u,x)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of S(n))!N.call(t,s)&&s!==u&&C(t,s,{get:()=>n[s],enumerable:!(x=O(n,s))||x.enumerable});return t};var $=(t,n,u)=>(u=t!=null?I(D(t)):{},U(n||!t||!t.__esModule?C(u,"default",{value:t,enumerable:!0}):u,t));var T=P((Z,R)=>{"use strict";R.exports=function(n){var u=n.utils.escapeRE,x=n.utils.arrayReplaceAt,s=" \r\n$+<=>^`|~",_=n.utils.lib.ucmicro.P.source,E=n.utils.lib.ucmicro.Z.source;function y(e,f,p,g){var b,r,o,c,a,i=e.bMarks[f]+e.tShift[f],l=e.eMarks[f];if(i+2>=l||e.src.charCodeAt(i++)!==42||e.src.charCodeAt(i++)!==91)return!1;for(c=i;i<l;i++){if(o=e.src.charCodeAt(i),o===91)return!1;if(o===93){a=i;break}else o===92&&i++}return a<0||e.src.charCodeAt(a+1)!==58?!1:g?!0:(b=e.src.slice(c,a).replace(/\\(.)/g,"$1"),r=e.src.slice(a+2,l).trim(),b.length===0||r.length===0?!1:(e.env.abbreviations||(e.env.abbreviations={}),typeof e.env.abbreviations[":"+b]>"u"&&(e.env.abbreviations[":"+b]=r),e.line=f+1,!0))}function j(e){var f,p,g,b,r,o,c,a,i,l,m,A,d,v=e.tokens;if(!!e.env.abbreviations){for(A=new RegExp("(?:"+Object.keys(e.env.abbreviations).map(function(h){return h.substr(1)}).sort(function(h,k){return k.length-h.length}).map(u).join("|")+")"),m="(^|"+_+"|"+E+"|["+s.split("").map(u).join("")+"])("+Object.keys(e.env.abbreviations).map(function(h){return h.substr(1)}).sort(function(h,k){return k.length-h.length}).map(u).join("|")+")($|"+_+"|"+E+"|["+s.split("").map(u).join("")+"])",i=new RegExp(m,"g"),p=0,g=v.length;p<g;p++)if(v[p].type==="inline"){for(b=v[p].children,f=b.length-1;f>=0;f--)if(d=b[f],d.type==="text"&&(a=0,o=d.content,i.lastIndex=0,c=[],!!A.test(o))){for(;l=i.exec(o);)(l.index>0||l[1].length>0)&&(r=new e.Token("text","",0),r.content=o.slice(a,l.index+l[1].length),c.push(r)),r=new e.Token("abbr_open","abbr",1),r.attrs=[["title",e.env.abbreviations[":"+l[2]]]],c.push(r),r=new e.Token("text","",0),r.content=l[2],c.push(r),r=new e.Token("abbr_close","abbr",-1),c.push(r),i.lastIndex-=l[3].length,a=i.lastIndex;!c.length||(a<o.length&&(r=new e.Token("text","",0),r.content=o.slice(a),c.push(r)),v[p].children=b=x(b,f,c))}}}}n.block.ruler.before("reference","abbr_def",y,{alt:["paragraph","reference"]}),n.core.ruler.after("linkify","abbr_replace",j)}});var B=$(T()),{default:w,...H}=B,q=w!==void 0?w:H;export{q as default};