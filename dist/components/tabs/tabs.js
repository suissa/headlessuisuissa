"use client";import{useFocusRing as ne}from"@react-aria/focus";import{useHover as fe}from"@react-aria/interactions";import U,{createContext as ae,useContext as le,useMemo as F,useReducer as be,useRef as z,useState as me}from"react";import{useActivePress as Pe}from'../../hooks/use-active-press.js';import{useEvent as I}from'../../hooks/use-event.js';import{useId as oe}from'../../hooks/use-id.js';import{useIsoMorphicEffect as B}from'../../hooks/use-iso-morphic-effect.js';import{useLatestValue as W}from'../../hooks/use-latest-value.js';import{useResolveButtonType as ye}from'../../hooks/use-resolve-button-type.js';import{useSyncRefs as H}from'../../hooks/use-sync-refs.js';import{FocusSentinel as xe}from'../../internal/focus-sentinel.js';import{Hidden as ge}from'../../internal/hidden.js';import{Focus as y,FocusResult as j,focusIn as v,sortByDomNode as w}from'../../utils/focus-management.js';import{match as O}from'../../utils/match.js';import{microTask as Ae}from'../../utils/micro-task.js';import{getOwnerDocument as Ee}from'../../utils/owner.js';import{RenderFeatures as se,forwardRefWithAs as N,mergeProps as ie,useRender as k}from'../../utils/render.js';import{StableCollection as Re,useStableCollectionIndex as pe}from'../../utils/stable-collection.js';import{Keys as x}from'../keyboard.js';var Le=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(Le||{}),_e=(l=>(l[l.Less=-1]="Less",l[l.Equal=0]="Equal",l[l.Greater=1]="Greater",l))(_e||{}),De=(n=>(n[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n))(De||{});let Se={[0](e,r){var d;let t=w(e.tabs,u=>u.current),l=w(e.panels,u=>u.current),a=t.filter(u=>{var T;return!((T=u.current)!=null&&T.hasAttribute("disabled"))}),n={...e,tabs:t,panels:l};if(r.index<0||r.index>t.length-1){let u=O(Math.sign(r.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>O(Math.sign(r.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});if(a.length===0)return n;let T=O(u,{[0]:()=>t.indexOf(a[0]),[1]:()=>t.indexOf(a[a.length-1])});return{...n,selectedIndex:T===-1?e.selectedIndex:T}}let s=t.slice(0,r.index),b=[...t.slice(r.index),...s].find(u=>a.includes(u));if(!b)return n;let f=(d=t.indexOf(b))!=null?d:e.selectedIndex;return f===-1&&(f=e.selectedIndex),{...n,selectedIndex:f}},[1](e,r){if(e.tabs.includes(r.tab))return e;let t=e.tabs[e.selectedIndex],l=w([...e.tabs,r.tab],n=>n.current),a=e.selectedIndex;return e.info.current.isControlled||(a=l.indexOf(t),a===-1&&(a=e.selectedIndex)),{...e,tabs:l,selectedIndex:a}},[2](e,r){return{...e,tabs:e.tabs.filter(t=>t!==r.tab)}},[3](e,r){return e.panels.includes(r.panel)?e:{...e,panels:w([...e.panels,r.panel],t=>t.current)}},[4](e,r){return{...e,panels:e.panels.filter(t=>t!==r.panel)}}},V=ae(null);V.displayName="TabsDataContext";function C(e){let r=le(V);if(r===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return r}let Q=ae(null);Q.displayName="TabsActionsContext";function Y(e){let r=le(Q);if(r===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Y),t}return r}function Fe(e,r){return O(r.type,Se,e,r)}let Ie="div";function he(e,r){let{defaultIndex:t=0,vertical:l=!1,manual:a=!1,onChange:n,selectedIndex:s=null,...g}=e;const b=l?"vertical":"horizontal",f=a?"manual":"auto";let d=s!==null,u=W({isControlled:d}),T=H(r),[p,c]=be(Fe,{info:u,selectedIndex:s!=null?s:t,tabs:[],panels:[]}),h=F(()=>({selectedIndex:p.selectedIndex}),[p.selectedIndex]),m=W(n||(()=>{})),M=W(p.tabs),S=F(()=>({orientation:b,activation:f,...p}),[b,f,p]),P=I(i=>(c({type:1,tab:i}),()=>c({type:2,tab:i}))),A=I(i=>(c({type:3,panel:i}),()=>c({type:4,panel:i}))),E=I(i=>{_.current!==i&&m.current(i),d||c({type:0,index:i})}),_=W(d?e.selectedIndex:p.selectedIndex),D=F(()=>({registerTab:P,registerPanel:A,change:E}),[]);B(()=>{c({type:0,index:s!=null?s:t})},[s]),B(()=>{if(_.current===void 0||p.tabs.length<=0)return;let i=w(p.tabs,R=>R.current);i.some((R,X)=>p.tabs[X]!==R)&&E(i.indexOf(p.tabs[_.current]))});let K={ref:T},J=k();return U.createElement(Re,null,U.createElement(Q.Provider,{value:D},U.createElement(V.Provider,{value:S},S.tabs.length<=0&&U.createElement(xe,{onFocus:()=>{var i,G;for(let R of M.current)if(((i=R.current)==null?void 0:i.tabIndex)===0)return(G=R.current)==null||G.focus(),!0;return!1}}),J({ourProps:K,theirProps:g,slot:h,defaultTag:Ie,name:"Tabs"}))))}let ve="div";function Ce(e,r){let{orientation:t,selectedIndex:l}=C("Tab.List"),a=H(r),n=F(()=>({selectedIndex:l}),[l]),s=e,g={ref:a,role:"tablist","aria-orientation":t};return k()({ourProps:g,theirProps:s,slot:n,defaultTag:ve,name:"Tabs.List"})}let Me="button";function Ge(e,r){var ee,te;let t=oe(),{id:l=`headlessui-tabs-tab-${t}`,disabled:a=!1,autoFocus:n=!1,...s}=e,{orientation:g,activation:b,selectedIndex:f,tabs:d,panels:u}=C("Tab"),T=Y("Tab"),p=C("Tab"),[c,h]=me(null),m=z(null),M=H(m,r,h);B(()=>T.registerTab(m),[T,m]);let S=pe("tabs"),P=d.indexOf(m);P===-1&&(P=S);let A=P===f,E=I(o=>{var $;let L=o();if(L===j.Success&&b==="auto"){let q=($=Ee(m))==null?void 0:$.activeElement,re=p.tabs.findIndex(ce=>ce.current===q);re!==-1&&T.change(re)}return L}),_=I(o=>{let L=d.map(q=>q.current).filter(Boolean);if(o.key===x.Space||o.key===x.Enter){o.preventDefault(),o.stopPropagation(),T.change(P);return}switch(o.key){case x.Home:case x.PageUp:return o.preventDefault(),o.stopPropagation(),E(()=>v(L,y.First));case x.End:case x.PageDown:return o.preventDefault(),o.stopPropagation(),E(()=>v(L,y.Last))}if(E(()=>O(g,{vertical(){return o.key===x.ArrowUp?v(L,y.Previous|y.WrapAround):o.key===x.ArrowDown?v(L,y.Next|y.WrapAround):j.Error},horizontal(){return o.key===x.ArrowLeft?v(L,y.Previous|y.WrapAround):o.key===x.ArrowRight?v(L,y.Next|y.WrapAround):j.Error}}))===j.Success)return o.preventDefault()}),D=z(!1),K=I(()=>{var o;D.current||(D.current=!0,(o=m.current)==null||o.focus({preventScroll:!0}),T.change(P),Ae(()=>{D.current=!1}))}),J=I(o=>{o.preventDefault()}),{isFocusVisible:i,focusProps:G}=ne({autoFocus:n}),{isHovered:R,hoverProps:X}=fe({isDisabled:a}),{pressed:Z,pressProps:ue}=Pe({disabled:a}),Te=F(()=>({selected:A,hover:R,active:Z,focus:i,autofocus:n,disabled:a}),[A,R,i,Z,n,a]),de=ie({ref:M,onKeyDown:_,onMouseDown:J,onClick:K,id:l,role:"tab",type:ye(e,c),"aria-controls":(te=(ee=u[P])==null?void 0:ee.current)==null?void 0:te.id,"aria-selected":A,tabIndex:A?0:-1,disabled:a||void 0,autoFocus:n},G,X,ue);return k()({ourProps:de,theirProps:s,slot:Te,defaultTag:Me,name:"Tabs.Tab"})}let Ue="div";function He(e,r){let{selectedIndex:t}=C("Tab.Panels"),l=H(r),a=F(()=>({selectedIndex:t}),[t]),n=e,s={ref:l};return k()({ourProps:s,theirProps:n,slot:a,defaultTag:Ue,name:"Tabs.Panels"})}let we="div",Oe=se.RenderStrategy|se.Static;function Ne(e,r){var A,E,_,D;let t=oe(),{id:l=`headlessui-tabs-panel-${t}`,tabIndex:a=0,...n}=e,{selectedIndex:s,tabs:g,panels:b}=C("Tab.Panel"),f=Y("Tab.Panel"),d=z(null),u=H(d,r);B(()=>f.registerPanel(d),[f,d]);let T=pe("panels"),p=b.indexOf(d);p===-1&&(p=T);let c=p===s,{isFocusVisible:h,focusProps:m}=ne(),M=F(()=>({selected:c,focus:h}),[c,h]),S=ie({ref:u,id:l,role:"tabpanel","aria-labelledby":(E=(A=g[p])==null?void 0:A.current)==null?void 0:E.id,tabIndex:c?a:-1},m),P=k();return!c&&((_=n.unmount)==null||_)&&!((D=n.static)!=null&&D)?U.createElement(ge,{"aria-hidden":"true",...S}):P({ourProps:S,theirProps:n,slot:M,defaultTag:we,features:Oe,visible:c,name:"Tabs.Panel"})}let ke=N(Ge),Be=N(he),We=N(Ce),je=N(He),Ke=N(Ne),Tt=Object.assign(ke,{Group:Be,List:We,Panels:je,Panel:Ke});export{Tt as Tab,Be as TabGroup,We as TabList,Ke as TabPanel,je as TabPanels};
