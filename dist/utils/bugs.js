function r(n){let e=n.parentElement,t=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(t=e),e=e.parentElement;let l=(e==null?void 0:e.getAttribute("disabled"))==="";return l&&i(t)?!1:l}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}export{r as isDisabledReactIssue7711};
