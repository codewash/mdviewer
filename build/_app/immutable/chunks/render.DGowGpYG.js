import{G as Y,I as O,J as A,y as k,K as C,v as I,L as b,M as H,N as j,O as B,P as T,C as g,B as D,z as W,g as p,Q as $,R as q,T as z,V as G,W as J,X as K,Y as Q,d as X,p as F,h as E,j as U,c as Z}from"./runtime.CVsrO6HM.js";import{b as x}from"./disclose-version.CHe6RYCu.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const L=new Set,N=new Set;function sr(r){for(var e=0;e<r.length;e++)L.add(r[e]);for(var a of N)a(r)}function m(r){var S;var e=this,a=e.ownerDocument,c=r.type,i=((S=r.composedPath)==null?void 0:S.call(r))||[],t=i[0]||r.target,f=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(f=u)}if(t=i[f]||r.target,t!==e){Y(r,"currentTarget",{configurable:!0,get(){return t||a}});var w=C,o=I;O(null),A(null);try{for(var n,s=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(k(l)){var[M,...P]=l;M.apply(t,[r,...P])}else l.call(t,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||d===e||d===null)break;t=d}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=e,delete r.currentTarget,O(w),A(o)}}}function or(r,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function tr(r,e){return V(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const a=e.target,c=E,i=p;try{for(var t=H(a);t&&(t.nodeType!==8||t.data!==j);)t=B(t);if(!t)throw T;g(!0),D(t),W();const f=V(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==$)throw q(),T;return g(!1),f}catch(f){if(f===T)return e.recover===!1&&z(),b(),G(a),g(!1),tr(r,e);throw f}finally{g(c),D(i)}}const v=new Map;function V(r,{target:e,anchor:a,props:c={},events:i,context:t,intro:f=!0}){b();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var d=er(s);e.addEventListener(s,m,{passive:d});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:d}),v.set(s,1)):v.set(s,l+1)}}};u(J(L)),N.add(u);var h=void 0,w=K(()=>{var o=a??e.appendChild(Q());return X(()=>{if(t){F({});var n=Z;n.c=t}i&&(c.$$events=i),E&&x(o,null),h=r(o,c)||{},E&&(I.nodes_end=p),t&&U()}),()=>{var d;for(var n of _){e.removeEventListener(n,m);var s=v.get(n);--s===0?(document.removeEventListener(n,m),v.delete(n)):v.set(n,s)}N.delete(u),o!==a&&((d=o.parentNode)==null||d.removeChild(o))}});return R.set(h,w),h}let R=new WeakMap;function dr(r,e){const a=R.get(r);return a?(R.delete(r),a(e)):Promise.resolve()}export{sr as d,ir as h,tr as m,or as s,dr as u};
