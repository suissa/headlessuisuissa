import{useEffect as d}from"react";import{useLatestValue as s}from'./use-latest-value.js';function E(n,e,a,t){let i=s(a);d(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}export{E as useEventListener};
