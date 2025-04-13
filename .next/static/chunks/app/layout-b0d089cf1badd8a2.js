(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{972:function(e,t,r){Promise.resolve().then(r.bind(r,512)),Promise.resolve().then(r.t.bind(r,7547,23)),Promise.resolve().then(r.t.bind(r,3635,23)),Promise.resolve().then(r.t.bind(r,6615,23)),Promise.resolve().then(r.t.bind(r,7402,23))},512:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{default:function(){return en}});var i,s=r(9268),n=r(9201),l=r(6006);let c={data:""},d=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||c,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,f=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?f(s,i):i+"{"+f(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=f(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=f.p?f.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},b={},y=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+y(e[r]);return t}return e},h=(e,t,r,a,o)=>{var i;let s=y(e),n=b[s]||(b[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!b[n]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=u.exec(e.replace(p,""));)t[4]?a.shift():t[3]?(r=t[3].replace(m," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);b[n]=f(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&b.g?b.g:null;return r&&(b.g=b[n]),i=b[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},g=(e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function v(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,d(t.target),t.g,t.o,t.k)}v.bind({g:1});let x,_,w,E=v.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:_&&_()},n),r.o=/ *go\d+/.test(l),n.className=v.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),w&&c[0]&&w(n),x(c,n)}return t?t(o):o}}var N=e=>"function"==typeof e,O=(e,t)=>N(e)?e(t):e,P=(a=0,()=>(++a).toString()),j=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$=new Map,C=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),I({type:4,toastId:e})},1e3);$.set(e,t)},F=e=>{let t=$.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&F(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?A(e,{type:1,toast:r}):A(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},S=[],z={toasts:[],pausedAt:void 0},I=e=>{z=A(z,e),S.forEach(e=>{e(z)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,r]=(0,l.useState)(z);(0,l.useEffect)(()=>(S.push(r),()=>{let e=S.indexOf(r);e>-1&&S.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||P()}),M=e=>(t,r)=>{let a=L(t,e,r);return I({type:2,toast:a}),a.id},R=(e,t)=>M("blank")(e,t);R.error=M("error"),R.success=M("success"),R.loading=M("loading"),R.custom=M("custom"),R.dismiss=e=>{I({type:3,toastId:e})},R.remove=e=>I({type:4,toastId:e}),R.promise=(e,t,r)=>{let a=R.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(R.success(O(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{R.error(O(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var H=(e,t)=>{I({type:1,toast:{id:e,height:t}})},U=()=>{I({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:r}=T(e);(0,l.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&R.dismiss(t.id);return}return setTimeout(()=>R.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,l.useCallback)(()=>{r&&I({type:6,time:Date.now()})},[r]),o=(0,l.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:U,endPause:a,calculateOffset:o}}},q=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Y=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=k("div")`
  position: absolute;
`,G=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?l.createElement(J,null,t):t:"blank"===r?null:l.createElement(G,null,l.createElement(B,{...a}),"loading"!==r&&l.createElement(W,null,"error"===r?l.createElement(q,{...a}):l.createElement(Y,{...a})))},Q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,V=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ee=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,et=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(r),V(r)];return{animation:t?`${E(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=l.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?et(e.position||t||"top-center",e.visible):{opacity:0},i=l.createElement(K,{toast:e}),s=l.createElement(ee,{...e.ariaProps},O(e.message,e));return l.createElement(X,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:s}):l.createElement(l.Fragment,null,i,s))});i=l.createElement,f.p=void 0,x=i,_=void 0,w=void 0;var ea=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=l.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return l.createElement("div",{ref:i,className:t,style:r},o)},eo=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ei=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:n,handlers:c}=Z(r);return l.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(r=>{let i=r.position||t,s=eo(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return l.createElement(ea,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ei:"",style:s},"custom"===r.type?O(r.message,r):o?o(r):l.createElement(er,{toast:r,position:i}))}))};function en(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"bg-black absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"}),(0,s.jsx)("div",{className:"bg-black absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"}),(0,s.jsxs)(n.ZP,{children:[t,(0,s.jsx)(es,{position:"top-right"})]})]})}},9201:function(e,t,r){"use strict";r.d(t,{ZP:function(){return s},qI:function(){return n}});var a=r(9268),o=r(6006);let i=(0,o.createContext)(null);function s(e){let{children:t}=e,[r,s]=(0,o.useState)("About"),[n,l]=(0,o.useState)(0);return(0,a.jsx)(i.Provider,{value:{activeSection:r,setActiveSection:s,timeOfLastClick:n,setTimeOfLastClick:l},children:t})}function n(){let e=(0,o.useContext)(i);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},7402:function(){},3635:function(e){e.exports={style:{fontFamily:"'__circular_8832d4', '__circular_Fallback_8832d4'"},className:"__className_8832d4",variable:"__variable_8832d4"}},6615:function(e){e.exports={style:{fontFamily:"'__condensed_7104d0', '__condensed_Fallback_7104d0'"},className:"__className_7104d0",variable:"__variable_7104d0"}},7547:function(e){e.exports={style:{fontFamily:"'__markPro_4855c0', '__markPro_Fallback_4855c0'"},className:"__className_4855c0",variable:"__variable_4855c0"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(6006),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:n.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=972)}),_N_E=e.O()}]);