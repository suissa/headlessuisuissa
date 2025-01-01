"use client";import m,{Fragment as O,createContext as ne,useContext as q,useEffect as ge,useMemo as ie,useRef as b,useState as V}from"react";import{useDisposables as ve}from'../../hooks/use-disposables.js';import{useEvent as E}from'../../hooks/use-event.js';import{useIsMounted as be}from'../../hooks/use-is-mounted.js';import{useIsoMorphicEffect as D}from'../../hooks/use-iso-morphic-effect.js';import{useLatestValue as Ee}from'../../hooks/use-latest-value.js';import{useServerHandoffComplete as re}from'../../hooks/use-server-handoff-complete.js';import{useSyncRefs as oe}from'../../hooks/use-sync-refs.js';import{transitionDataAttributes as Se,useTransition as Re}from'../../hooks/use-transition.js';import{OpenClosedProvider as ye,State as x,useOpenClosed as se}from'../../internal/open-closed.js';import{classNames as Pe}from'../../utils/class-names.js';import{match as le}from'../../utils/match.js';import{RenderFeatures as xe,RenderStrategy as P,compact as Ne,forwardRefWithAs as J,useRender as ae}from'../../utils/render.js';function ue(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:de)!==O||m.Children.count(e.children)===1}let w=ne(null);w.displayName="TransitionContext";var _e=(n=>(n.Visible="visible",n.Hidden="hidden",n))(_e||{});function De(){let e=q(w);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function He(){let e=q(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=ne(null);M.displayName="NestingContext";function U(e){return"children"in e?U(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Te(e,t){let n=Ee(e),l=b([]),S=be(),R=ve(),d=E((o,i=P.Hidden)=>{let a=l.current.findIndex(({el:s})=>s===o);a!==-1&&(le(i,{[P.Unmount](){l.current.splice(a,1)},[P.Hidden](){l.current[a].state="hidden"}}),R.microTask(()=>{var s;!U(l)&&S.current&&((s=n.current)==null||s.call(n))}))}),y=E(o=>{let i=l.current.find(({el:a})=>a===o);return i?i.state!=="visible"&&(i.state="visible"):l.current.push({el:o,state:"visible"}),()=>d(o,P.Unmount)}),p=b([]),c=b(Promise.resolve()),C=b({enter:[],leave:[]}),h=E((o,i,a)=>{p.current.splice(0),t&&(t.chains.current[i]=t.chains.current[i].filter(([s])=>s!==o)),t==null||t.chains.current[i].push([o,new Promise(s=>{p.current.push(s)})]),t==null||t.chains.current[i].push([o,new Promise(s=>{Promise.all(C.current[i].map(([r,f])=>f)).then(()=>s())})]),i==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>a(i)):a(i)}),g=E((o,i,a)=>{Promise.all(C.current[i].splice(0).map(([s,r])=>r)).then(()=>{var s;(s=p.current.shift())==null||s()}).then(()=>a(i))});return ie(()=>({children:l,register:y,unregister:d,onStart:h,onStop:g,wait:c,chains:C}),[y,d,l,h,g,C,c])}let de=O,fe=xe.RenderStrategy;function Ae(e,t){var ee,te;let{transition:n=!0,beforeEnter:l,afterEnter:S,beforeLeave:R,afterLeave:d,enter:y,enterFrom:p,enterTo:c,entered:C,leave:h,leaveFrom:g,leaveTo:o,...i}=e,[a,s]=V(null),r=b(null),f=ue(e),j=oe(...f?[r,t,s]:t===null?[]:[t]),H=(ee=i.unmount)==null||ee?P.Unmount:P.Hidden,{show:u,appear:z,initial:K}=De(),[v,G]=V(u?"visible":"hidden"),Q=He(),{register:A,unregister:I}=Q;D(()=>A(r),[A,r]),D(()=>{if(H===P.Hidden&&r.current){if(u&&v!=="visible"){G("visible");return}return le(v,{["hidden"]:()=>I(r),["visible"]:()=>A(r)})}},[v,r,A,I,u,H]);let B=re();D(()=>{if(f&&B&&v==="visible"&&r.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[r,v,B,f]);let ce=K&&!z,Y=z&&u&&K,W=b(!1),L=Te(()=>{W.current||(G("hidden"),I(r))},Q),Z=E(k=>{W.current=!0;let F=k?"enter":"leave";L.onStart(r,F,_=>{_==="enter"?l==null||l():_==="leave"&&(R==null||R())})}),$=E(k=>{let F=k?"enter":"leave";W.current=!1,L.onStop(r,F,_=>{_==="enter"?S==null||S():_==="leave"&&(d==null||d())}),F==="leave"&&!U(L)&&(G("hidden"),I(r))});ge(()=>{f&&n||(Z(u),$(u))},[u,f,n]);let pe=(()=>!(!n||!f||!B||ce))(),[,T]=Re(pe,a,u,{start:Z,end:$}),Ce=Ne({ref:j,className:((te=Pe(i.className,Y&&y,Y&&p,T.enter&&y,T.enter&&T.closed&&p,T.enter&&!T.closed&&c,T.leave&&h,T.leave&&!T.closed&&g,T.leave&&T.closed&&o,!T.transition&&u&&C))==null?void 0:te.trim())||void 0,...Se(T)}),N=0;v==="visible"&&(N|=x.Open),v==="hidden"&&(N|=x.Closed),T.enter&&(N|=x.Opening),T.leave&&(N|=x.Closing);let he=ae();return m.createElement(M.Provider,{value:L},m.createElement(ye,{value:N},he({ourProps:Ce,theirProps:i,defaultTag:de,features:fe,visible:v==="visible",name:"Transition.Child"})))}function Ie(e,t){let{show:n,appear:l=!1,unmount:S=!0,...R}=e,d=b(null),y=ue(e),p=oe(...y?[d,t]:t===null?[]:[t]);re();let c=se();if(n===void 0&&c!==null&&(n=(c&x.Open)===x.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[C,h]=V(n?"visible":"hidden"),g=Te(()=>{n||h("hidden")}),[o,i]=V(!0),a=b([n]);D(()=>{o!==!1&&a.current[a.current.length-1]!==n&&(a.current.push(n),i(!1))},[a,n]);let s=ie(()=>({show:n,appear:l,initial:o}),[n,l,o]);D(()=>{n?h("visible"):!U(g)&&d.current!==null&&h("hidden")},[n,g]);let r={unmount:S},f=E(()=>{var u;o&&i(!1),(u=e.beforeEnter)==null||u.call(e)}),j=E(()=>{var u;o&&i(!1),(u=e.beforeLeave)==null||u.call(e)}),H=ae();return m.createElement(M.Provider,{value:g},m.createElement(w.Provider,{value:s},H({ourProps:{...r,as:O,children:m.createElement(me,{ref:p,...r,...R,beforeEnter:f,beforeLeave:j})},theirProps:{},defaultTag:O,features:fe,visible:C==="visible",name:"Transition"})))}function Le(e,t){let n=q(w)!==null,l=se()!==null;return m.createElement(m.Fragment,null,!n&&l?m.createElement(X,{ref:t,...e}):m.createElement(me,{ref:t,...e}))}let X=J(Ie),me=J(Ae),Fe=J(Le),ze=Object.assign(X,{Child:Fe,Root:X});export{ze as Transition,Fe as TransitionChild};