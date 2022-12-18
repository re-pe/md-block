/* esm.sh - esbuild bundle(markdown-it-gridtables@0.5.0) es2022 production */
import { Buffer as __Buffer$ } from "./node_buffer.js";var s0=Object.create;var H=Object.defineProperty;var c0=Object.getOwnPropertyDescriptor;var a0=Object.getOwnPropertyNames;var d0=Object.getPrototypeOf,h0=Object.prototype.hasOwnProperty;var a=(e,x)=>()=>(x||e((x={exports:{}}).exports,x),x.exports);var C0=(e,x,n,t)=>{if(x&&typeof x=="object"||typeof x=="function")for(let r of a0(x))!h0.call(e,r)&&r!==n&&H(e,r,{get:()=>x[r],enumerable:!(t=c0(x,r))||t.enumerable});return e};var A0=(e,x,n)=>(n=e!=null?s0(d0(e)):{},C0(x||!e||!e.__esModule?H(n,"default",{value:e,enumerable:!0}):n,e));var T=a(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});function g0(e){let x=[];for(let n=0;n<e[0].length;n++){let t=[];for(let f=0;f<e.length;f++){let l=_0(e[f][n]);l.length===0&&t.length===0||t.push(l)}let r=t.length-1;for(;r>=0&&!(t[r].length>0);r--);r<t.length-1&&(t=t.slice(0,r+1)),x.push(t)}return x}p.default=g0;function _0(e){let x=e.trim();return x.length===0?"":e.slice(0,e.indexOf(x)+x.length)}});var E=a(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var D;(function(e){e.None="",e.Left="left",e.Center="center",e.Right="right"})(D||(D={}));m.default=D});var G=a(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var $=T(),B0=E();function F0(e,x,n){let t=n.SeparatorLineOffsets,r=x.push("table_open","table",1);if(r.map=[t[0],t[t.length-1]],n.HeaderLines.length>0){let f=x.push("thead_open","thead",1);f.map=[t[0],t[1]];let l=(0,$.default)(n.HeaderLines);I(e,x,"th",n.ColumnAlignments,t[0],t[1],l),x.push("thead_close","thead",-1),t=t.slice(1)}r=x.push("tbody_open","tbody",1),r.map=[t[0],t[t.length-1]];for(let f=0;f<n.RowLines.length;f++){let l=(0,$.default)(n.RowLines[f]);I(e,x,"td",n.ColumnAlignments,t[f],t[f+1],l)}x.push("tbody_close","tbody",-1),x.push("table_close","table",-1)}b.default=F0;function I(e,x,n,t,r,f,l){let i=x.push("tr_open","tr",1);i.map=[r,f];for(let o=0;o<l.length;o++){let u=x.push(n+"_open",n,1);if(u.map=[r+1,f-1],t[o]!==B0.default.None&&u.attrSet("style",`text-align: ${t[o]};`),l[o].length!==0)if(l[o].length===1){let c=x.push("inline","",0);c.content=l[o][0].trim(),c.children=[]}else{let c=e.render(l[o].join(`\r
`)).trim();c.slice(0,3)==="<p>"&&c.slice(-4)==="</p>"&&c.indexOf("<p>",3)===-1&&(c=c.slice(3,c.length-4));let h=x.push("html_block","",0);h.content=c,h.children=[]}x.push(n+"_close",n,-1)}x.push("tr_close","tr",-1)}});var N=a(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});function p0(e,x){let n=e.bMarks[x]+e.tShift[x];return n>=e.eMarks[x]?-1:e.src.charCodeAt(n)}y.default=p0});var U=a((z0,_)=>{var D0=function(){"use strict";function e(l,i,o,u){var c;typeof i=="object"&&(o=i.depth,u=i.prototype,c=i.filter,i=i.circular);var h=[],S=[],o0=typeof __Buffer$<"u";typeof i>"u"&&(i=!0),typeof o>"u"&&(o=1/0);function k(s,q){if(s===null)return null;if(q==0)return s;var d,C;if(typeof s!="object")return s;if(e.__isArray(s))d=[];else if(e.__isRegExp(s))d=new RegExp(s.source,f(s)),s.lastIndex&&(d.lastIndex=s.lastIndex);else if(e.__isDate(s))d=new Date(s.getTime());else{if(o0&&__Buffer$.isBuffer(s))return __Buffer$.allocUnsafe?d=__Buffer$.allocUnsafe(s.length):d=new __Buffer$(s.length),s.copy(d),d;typeof u>"u"?(C=Object.getPrototypeOf(s),d=Object.create(C)):(d=Object.create(u),C=u)}if(i){var W=h.indexOf(s);if(W!=-1)return S[W];h.push(s),S.push(d)}for(var B in s){var F;C&&(F=Object.getOwnPropertyDescriptor(C,B)),!(F&&F.set==null)&&(d[B]=k(s[B],q-1))}return d}return k(l,o)}e.clonePrototype=function(i){if(i===null)return null;var o=function(){};return o.prototype=i,new o};function x(l){return Object.prototype.toString.call(l)}e.__objToStr=x;function n(l){return typeof l=="object"&&x(l)==="[object Date]"}e.__isDate=n;function t(l){return typeof l=="object"&&x(l)==="[object Array]"}e.__isArray=t;function r(l){return typeof l=="object"&&x(l)==="[object RegExp]"}e.__isRegExp=r;function f(l){var i="";return l.global&&(i+="g"),l.ignoreCase&&(i+="i"),l.multiline&&(i+="m"),i}return e.__getRegExpFlags=f,e}();typeof _=="object"&&_.exports&&(_.exports=D0)});var J=a((J0,z)=>{var m0=U();z.exports=function(e,x){return e=e||{},Object.keys(x).forEach(function(n){typeof e[n]>"u"&&(e[n]=m0(x[n]))}),e}});var Q=a((K0,K)=>{K.exports=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531],[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]]});var Z=a((Q0,v)=>{"use strict";var E0=J(),A=Q(),X={nul:0,control:0};v.exports=function(x){return Y(x,X)};v.exports.config=function(e){return e=E0(e||{},X),function(n){return Y(n,e)}};function Y(e,x){if(typeof e!="string")return V(e,x);for(var n=0,t=0;t<e.length;t++){var r=V(e.charCodeAt(t),x);if(r<0)return-1;n+=r}return n}function V(e,x){return e===0?x.nul:e<32||e>=127&&e<160?x.control:b0(e)?0:1+(e>=4352&&(e<=4447||e==9001||e==9002||e>=11904&&e<=42191&&e!=12351||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65135||e>=65280&&e<=65376||e>=65504&&e<=65510||e>=131072&&e<=196605||e>=196608&&e<=262141))}function b0(e){var x=0,n=A.length-1,t;if(e<A[0][0]||e>A[n][1])return!1;for(;n>=x;)if(t=Math.floor((x+n)/2),e>A[t][1])x=t+1;else if(e<A[t][0])n=t-1;else return!0;return!1}});var e0=a(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});function y0(e){let x=e.substr(1).match(/[:-][-]+[:-]\+/g);return x==null&&(x=e.substr(1).match(/[:=][=]+[:=]\+/g)),x==null?[]:x.map(n=>n.length)}O.default=y0});var t0=a(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});function v0(e,x){let n=e.bMarks[x]+e.blkIndent,t=e.eMarks[x];return e.src.substr(n,t-n)}j.default=v0});var x0=a(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});var L=class{constructor(){this.Success=!1,this.ColumnWidths=[],this.ColumnOffsets=[],this.ColumnAlignments=[],this.HeaderLess=!1,this.HeaderLines=[],this.RowLines=[],this.SeparatorLineOffsets=[],this.CurrentLine=0}};w.default=L});var l0=a(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var O0=Z(),j0=e0(),g=E(),n0=t0(),L0=x0();function w0(e,x,n){let t=new L0.default,r=(0,n0.default)(e,x);if(r.charAt(0)!=="+"||(t.ColumnWidths=(0,j0.default)(r),t.ColumnWidths.length===0))return t;t.ColumnAlignments=t.ColumnWidths.map(u=>g.default.None),r.indexOf(":")>=0&&(t.HeaderLess=!0,t.ColumnAlignments=r0(r,t.ColumnWidths),r=r.replace(/[:]/g,"-"));let f=new RegExp("^\\+"+t.ColumnWidths.map(u=>`[=:][=]{${u-3}}[=:]\\+`).join("")+"$");t.ColumnOffsets=[0];for(let u=0;u<t.ColumnWidths.length-1;u++)t.ColumnOffsets.push(t.ColumnOffsets[u]+t.ColumnWidths[u]);let l=new RegExp("^\\|"+t.ColumnWidths.map(u=>`([^|]{${Math.ceil((u-1)/2)},${u-1}})\\|`).join("")+"$");t.SeparatorLineOffsets.push(x);let i=[],o=x+1;for(;o<=n;o++){let u=(0,n0.default)(e,o);if(u.charCodeAt(0)===43){if(i.length===0)return t;if(t.SeparatorLineOffsets.push(o),u===r)t.RowLines.push(i),t.HeaderLines.length===0&&(t.HeaderLess=!0);else if(!t.HeaderLess&&u.match(f)){if(t.HeaderLines.length>0||t.RowLines.length>0)return t;t.HeaderLines=i,u.indexOf(":")>=0&&(t.ColumnAlignments=r0(u,t.ColumnWidths))}else return t;i=[]}else if(u.charCodeAt(0)===124){let c=u.match(l);if(c===null)return t;let h=R0(c,t.ColumnWidths);if(h===null)return t;i.push(h)}else{if(i.length===0&&(t.HeaderLines.length>0||t.RowLines.length>0))break;return t}}return t.CurrentLine=o,t.Success=!0,t}R.default=w0;function r0(e,x){let n=[],t=1,r=-1;for(let f=0;f<x.length;f++){r+=x[f];let l=g.default.None;e.charAt(r)===":"?e.charAt(t)===":"?l=g.default.Center:l=g.default.Right:e.charAt(t)===":"&&(l=g.default.Left),n.push(l),t+=x[f]}return n}function R0(e,x){let n=[];for(var t=0;t<x.length;t++){let r=e[t+1];if(O0(r)+1!==x[t])return null;n.push(r)}return n}});var f0=a(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var M0=G(),P0=N(),S0=l0();function k0(e){return function(x,n,t,r){if((0,P0.default)(x,n)!==43)return!1;let f=(0,S0.default)(x,n,t);return f.Success?(r||((0,M0.default)(e,x,f),x.line=f.CurrentLine),!0):!1}}M.default=k0});var i0=a(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var q0=f0();function W0(e,x){e.block.ruler.before("table","gridtable",(0,q0.default)(e))}P.default=W0});var H0=A0(i0()),xe=!0,{default:u0,...T0}=H0,ne=u0!==void 0?u0:T0;export{xe as __esModule,ne as default};