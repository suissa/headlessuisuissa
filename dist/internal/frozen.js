import r,{useState as u}from"react";function f({children:o,freeze:e}){let n=l(e,o);return r.createElement(r.Fragment,null,n)}function l(o,e){let[n,t]=u(e);return!o&&n!==e&&t(e),o?n:e}export{f as Frozen,l as useFrozenData};