"use client";var J=Object.defineProperty;var X=(o,t,e)=>t in o?J(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(X(o,typeof t!="symbol"?t+"":t,e),e);import{useFocusRing as $}from"@react-aria/focus";import{useHover as j}from"@react-aria/interactions";import y,{Fragment as A,createContext as C,useContext as M,useEffect as q,useId as z,useMemo as P,useReducer as Q,useRef as G,useSyncExternalStore as Y}from"react";import{useDisposables as Z}from'../../hooks/use-disposables.js';import{useEvent as a}from'../../hooks/use-event.js';import{useSyncRefs as I}from'../../hooks/use-sync-refs.js';import{FloatingProvider as ee,useFloatingPanel as te,useFloatingReference as oe,useResolvedAnchor as ie}from'../../internal/floating.js';import{State as O,useOpenClosed as re}from'../../internal/open-closed.js';import{match as s}from'../../utils/match.js';import{RenderFeatures as U,forwardRefWithAs as F,mergeProps as ne,useRender as H}from'../../utils/render.js';import{Description as V,useDescribedBy as le,useDescriptions as pe}from'../description/description.js';import{Keys as x}from'../keyboard.js';import{Portal as ae}from'../portal/portal.js';var se=(r=>(r[r.Hidden=0]="Hidden",r[r.Initiated=1]="Initiated",r[r.Visible=2]="Visible",r[r.Hiding=3]="Hiding",r))(se||{}),Te=(e=>(e[e.Delayed=0]="Delayed",e[e.Immediate=1]="Immediate",e))(Te||{});class de{constructor(){c(this,"_state",null);c(this,"_listeners",[]);c(this,"subscribe",t=>(this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>e!==t)}));c(this,"getSnapshot",()=>this._state);c(this,"getServerSnapshot",()=>this._state);c(this,"setTooltipId",t=>{this._state!==t&&(this._state=t,this._listeners.forEach(e=>e(t)))})}}let S=new de;var ue=(e=>(e[e.ShowTooltip=0]="ShowTooltip",e[e.HideTooltip=1]="HideTooltip",e))(ue||{});let me={[0](o,t){return{...o,tooltipState:s(o.tooltipState,{[0]:s(t.when,{[1]:2,[0]:1}),[1]:s(t.when,{[1]:2,[0]:1}),[2]:2,[3]:2})}},[1](o,t){return{...o,tooltipState:s(o.tooltipState,{[0]:0,[1]:0,[2]:s(t.when,{[1]:0,[0]:3}),[3]:s(t.when,{[1]:0,[0]:3})})}}},W=C(null);W.displayName="TooltipActionsContext";function N(o){let t=M(W);if(t===null){let e=new Error(`<${o} /> is missing a parent <Tooltip /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,N),e}return t}let L=C(null);L.displayName="TooltipDataContext";function w(o){let t=M(L);if(t===null){let e=new Error(`<${o} /> is missing a parent <Tooltip /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,w),e}return t}function fe(o,t){return s(t.type,me,o,t)}let ce=A;function ge(o,t){let{id:e=`headlessui-tooltip-${z()}`,showDelayMs:T=750,hideDelayMs:r=300,...d}=o,i=Y(S.subscribe,S.getSnapshot,S.getServerSnapshot),[n,g]=Q(fe,{id:e,tooltipState:0}),[h,m]=pe(),l=Z();q(()=>{l.dispose(),s(n.tooltipState,{[0](){},[1](){l.setTimeout(()=>u(1),T)},[2](){},[3](){l.setTimeout(()=>f(1),r)}})},[l,n.tooltipState,T,r]);let u=a(p=>{p===0&&i!==null&&i!==e&&(p=1),p===1&&S.setTooltipId(e),g({type:0,when:p})}),f=a(p=>{i===e&&p===1&&S.setTooltipId(null),g({type:1,when:p})}),D={ref:I(t)},_=P(()=>({}),[]),R=P(()=>({visible:i===n.id&&s(n.tooltipState,{[0]:!1,[1]:!1,[2]:!0,[3]:!0}),...n}),[i,n]),v=P(()=>({showTooltip:u,hideTooltip:f}),[u,f]),b=H();return y.createElement(m,{value:h},y.createElement(ee,null,y.createElement(W.Provider,{value:v},y.createElement(L.Provider,{value:R},b({ourProps:D,theirProps:d,slot:_,defaultTag:ce,name:"Tooltip"})))))}let ye=A;function he(o,t){let{disabled:e=!1,autoFocus:T=!1,...r}=o,d=w("TooltipTrigger"),i=N("TooltipTrigger"),n=le(),g=G(null),h=I(g,t,oe()),{isFocusVisible:m,focusProps:l}=$({autoFocus:T}),{isHovered:u,hoverProps:f}=j({isDisabled:e}),E=a(K=>{switch(K.key){case x.Enter:case x.Escape:case x.Space:if(d.tooltipState===2)return i.hideTooltip(1);break}}),D=a(()=>{i.showTooltip(1)}),_=a(()=>{i.hideTooltip(1)}),R=a(()=>{i.hideTooltip(1)}),v=a(()=>{i.showTooltip(0)}),b=a(()=>{i.hideTooltip(0)}),p=a(()=>{d.tooltipState===3&&i.showTooltip(1)}),B=P(()=>({hover:u,focus:m,autofocus:T}),[u,m,T]),k=ne({ref:h,"aria-describedby":d.visible?n:void 0,onKeyDown:E,onFocus:D,onBlur:_,onMouseDown:R,onMouseEnter:v,onMouseLeave:b,onMouseMove:p},l,f);return H()({ourProps:k,theirProps:r,slot:B,defaultTag:ye,name:"TooltipTrigger"})}let Me=V,Pe=U.RenderStrategy|U.Static;function Se(o,t){let{anchor:e,...T}=o,r=w("TooltipPanel"),d=re(),i=(()=>d!==null?(d&O.Open)===O.Open:r.visible)(),n=G(null),g=ie(e!=null?e:{to:"top",padding:8,gap:8,offset:-4}),[h,m]=te(i?g:void 0),l=I(n,t,h),u={ref:l,role:"tooltip",...m?{style:m}:{}},f=P(()=>({}),[]);return H()({ourProps:{...u,as:A,children:y.createElement(ae,null,y.createElement(V,{ref:l,...T}))},theirProps:{},slot:f,defaultTag:A,features:Pe,visible:i,name:"TooltipPanel"})}let Ge=F(ge),Oe=F(he),Ue=F(Se);export{Ge as Tooltip,Ue as TooltipPanel,Oe as TooltipTrigger};
