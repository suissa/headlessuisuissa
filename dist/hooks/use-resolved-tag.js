import{useCallback as a,useState as r}from"react";function l(t){let e=typeof t=="string"?t:void 0,[s,o]=r(e);return[e!=null?e:s,a(n=>{e||n instanceof HTMLElement&&o(n.tagName.toLowerCase())},[e])]}export{l as useResolvedTag};
