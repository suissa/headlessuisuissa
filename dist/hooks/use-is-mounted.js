import{useRef as r}from"react";import{useIsoMorphicEffect as t}from'./use-iso-morphic-effect.js';function f(){let e=r(!1);return t(()=>(e.current=!0,()=>{e.current=!1}),[]),e}export{f as useIsMounted};