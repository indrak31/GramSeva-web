import{r as yt,j as X,L as Di}from"./index-ChkgJBMs.js";import{A as Od,C as Bd}from"./circle-check-CxpqYvAw.js";import{c as Pr}from"./createLucideIcon-DoG84gxG.js";import{E as Vd}from"./earth-X9Gh81pG.js";import{S as zd}from"./star-CrLr7FM_.js";import{X as kd,M as Hd}from"./x-CsUej1BA.js";const hh=yt.createContext({});function Gd(n){const t=yt.useRef(null);return t.current===null&&(t.current=n()),t.current}const Wd=typeof window<"u",Xd=Wd?yt.useLayoutEffect:yt.useEffect,Zo=yt.createContext(null);function Jo(n,t){n.indexOf(t)===-1&&n.push(t)}function _r(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const fn=(n,t,e)=>e>t?t:e<n?n:e;let Qo=()=>{};const zn={},fh=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function dh(n){return typeof n=="object"&&n!==null}const ph=n=>/^0[^.\s]+$/u.test(n);function mh(n){let t;return()=>(t===void 0&&(t=n()),t)}const Xe=n=>n,jd=(n,t)=>e=>t(n(e)),xs=(...n)=>n.reduce(jd),ps=(n,t,e)=>{const i=t-n;return i===0?1:(e-n)/i};class tl{constructor(){this.subscriptions=[]}add(t){return Jo(this.subscriptions,t),()=>_r(this.subscriptions,t)}notify(t,e,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,e,i);else for(let r=0;r<s;r++){const a=this.subscriptions[r];a&&a(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Be=n=>n*1e3,We=n=>n/1e3;function gh(n,t){return t?n*(1e3/t):0}const _h=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,qd=1e-7,Yd=12;function Kd(n,t,e,i,s){let r,a,o=0;do a=t+(e-t)/2,r=_h(a,i,s)-n,r>0?e=a:t=a;while(Math.abs(r)>qd&&++o<Yd);return a}function ys(n,t,e,i){if(n===t&&e===i)return Xe;const s=r=>Kd(r,0,1,n,e);return r=>r===0||r===1?r:_h(s(r),t,i)}const vh=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,xh=n=>t=>1-n(1-t),yh=ys(.33,1.53,.69,.99),el=xh(yh),Mh=vh(el),Sh=n=>n>=1?1:(n*=2)<1?.5*el(n):.5*(2-Math.pow(2,-10*(n-1))),nl=n=>1-Math.sin(Math.acos(n)),Eh=xh(nl),Th=vh(nl),$d=ys(.42,0,1,1),Zd=ys(0,0,.58,1),bh=ys(.42,0,.58,1),Jd=n=>Array.isArray(n)&&typeof n[0]!="number",Ah=n=>Array.isArray(n)&&typeof n[0]=="number",Qd={linear:Xe,easeIn:$d,easeInOut:bh,easeOut:Zd,circIn:nl,circInOut:Th,circOut:Eh,backIn:el,backInOut:Mh,backOut:yh,anticipate:Sh},tp=n=>typeof n=="string",ql=n=>{if(Ah(n)){Qo(n.length===4);const[t,e,i,s]=n;return ys(t,e,i,s)}else if(tp(n))return Qd[n];return n},Ps=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ep(n,t){let e=new Set,i=new Set,s=!1,r=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),n()),u(o)}const c={schedule:(u,h=!1,f=!1)=>{const g=f&&s?e:i;return h&&a.add(u),g.add(u),u},cancel:u=>{i.delete(u),a.delete(u)},process:u=>{if(o=u,s){r=!0;return}s=!0;const h=e;e=i,i=h,e.forEach(l),e.clear(),s=!1,r&&(r=!1,c.process(u))}};return c}const np=40;function wh(n,t){let e=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>e=!0,a=Ps.reduce((y,_)=>(y[_]=ep(r),y),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:f,render:p,postRender:g}=a,v=()=>{const y=zn.useManualTiming,_=y?s.timestamp:performance.now();e=!1,y||(s.delta=i?1e3/60:Math.max(Math.min(_-s.timestamp,np),1)),s.timestamp=_,s.isProcessing=!0,o.process(s),l.process(s),c.process(s),u.process(s),h.process(s),f.process(s),p.process(s),g.process(s),s.isProcessing=!1,e&&t&&(i=!1,n(v))},m=()=>{e=!0,i=!0,s.isProcessing||n(v)};return{schedule:Ps.reduce((y,_)=>{const w=a[_];return y[_]=(A,C=!1,R=!1)=>(e||m(),w.schedule(A,C,R)),y},{}),cancel:y=>{for(let _=0;_<Ps.length;_++)a[Ps[_]].cancel(y)},state:s,steps:a}}const{schedule:te,cancel:kn,state:xe,steps:Hr}=wh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xe,!0);let sr;function ip(){sr=void 0}const we={now:()=>(sr===void 0&&we.set(xe.isProcessing||zn.useManualTiming?xe.timestamp:performance.now()),sr),set:n=>{sr=n,queueMicrotask(ip)}},Rh=n=>t=>typeof t=="string"&&t.startsWith(n),Ch=Rh("--"),sp=Rh("var(--"),il=n=>sp(n)?rp.test(n.split("/*")[0].trim()):!1,rp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Yl(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Yi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ms={...Yi,transform:n=>fn(0,1,n)},Ds={...Yi,default:1},us=n=>Math.round(n*1e5)/1e5,sl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ap(n){return n==null}const op=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rl=(n,t)=>e=>!!(typeof e=="string"&&op.test(e)&&e.startsWith(n)||t&&!ap(e)&&Object.prototype.hasOwnProperty.call(e,t)),Ph=(n,t,e)=>i=>{if(typeof i!="string")return i;const[s,r,a,o]=i.match(sl);return{[n]:parseFloat(s),[t]:parseFloat(r),[e]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},lp=n=>fn(0,255,n),Gr={...Yi,transform:n=>Math.round(lp(n))},oi={test:rl("rgb","red"),parse:Ph("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:i=1})=>"rgba("+Gr.transform(n)+", "+Gr.transform(t)+", "+Gr.transform(e)+", "+us(ms.transform(i))+")"};function cp(n){let t="",e="",i="",s="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),t+=t,e+=e,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Ba={test:rl("#"),parse:cp,transform:oi.transform},Ms=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Un=Ms("deg"),un=Ms("%"),dt=Ms("px"),up=Ms("vh"),hp=Ms("vw"),Kl={...un,parse:n=>un.parse(n)/100,transform:n=>un.transform(n*100)},Li={test:rl("hsl","hue"),parse:Ph("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:i=1})=>"hsla("+Math.round(n)+", "+un.transform(us(t))+", "+un.transform(us(e))+", "+us(ms.transform(i))+")"},de={test:n=>oi.test(n)||Ba.test(n)||Li.test(n),parse:n=>oi.test(n)?oi.parse(n):Li.test(n)?Li.parse(n):Ba.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?oi.transform(n):Li.transform(n),getAnimatableNone:n=>{const t=de.parse(n);return t.alpha=0,de.transform(t)}},fp=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dp(n){var t,e;return isNaN(n)&&typeof n=="string"&&(((t=n.match(sl))==null?void 0:t.length)||0)+(((e=n.match(fp))==null?void 0:e.length)||0)>0}const Dh="number",Lh="color",pp="var",mp="var(",$l="${}",gp=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vi(n){const t=n.toString(),e=[],i={color:[],number:[],var:[]},s=[];let r=0;const o=t.replace(gp,l=>(de.test(l)?(i.color.push(r),s.push(Lh),e.push(de.parse(l))):l.startsWith(mp)?(i.var.push(r),s.push(pp),e.push(l)):(i.number.push(r),s.push(Dh),e.push(parseFloat(l))),++r,$l)).split($l);return{values:e,split:o,indexes:i,types:s}}function _p(n){return Vi(n).values}function Ih({split:n,types:t}){const e=n.length;return i=>{let s="";for(let r=0;r<e;r++)if(s+=n[r],i[r]!==void 0){const a=t[r];a===Dh?s+=us(i[r]):a===Lh?s+=de.transform(i[r]):s+=i[r]}return s}}function vp(n){return Ih(Vi(n))}const xp=n=>typeof n=="number"?0:de.test(n)?de.getAnimatableNone(n):n,yp=(n,t)=>typeof n=="number"?t!=null&&t.trim().endsWith("/")?n:0:xp(n);function Mp(n){const t=Vi(n);return Ih(t)(t.values.map((i,s)=>yp(i,t.split[s])))}const nn={test:dp,parse:_p,createTransformer:vp,getAnimatableNone:Mp};function Wr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function Sp({hue:n,saturation:t,lightness:e,alpha:i}){n/=360,t/=100,e/=100;let s=0,r=0,a=0;if(!t)s=r=a=e;else{const o=e<.5?e*(1+t):e+t-e*t,l=2*e-o;s=Wr(l,o,n+1/3),r=Wr(l,o,n),a=Wr(l,o,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:i}}function vr(n,t){return e=>e>0?t:n}const ie=(n,t,e)=>n+(t-n)*e,Xr=(n,t,e)=>{const i=n*n,s=e*(t*t-i)+i;return s<0?0:Math.sqrt(s)},Ep=[Ba,oi,Li],Tp=n=>Ep.find(t=>t.test(n));function Zl(n){const t=Tp(n);if(!t)return!1;let e=t.parse(n);return t===Li&&(e=Sp(e)),e}const Jl=(n,t)=>{const e=Zl(n),i=Zl(t);if(!e||!i)return vr(n,t);const s={...e};return r=>(s.red=Xr(e.red,i.red,r),s.green=Xr(e.green,i.green,r),s.blue=Xr(e.blue,i.blue,r),s.alpha=ie(e.alpha,i.alpha,r),oi.transform(s))},Va=new Set(["none","hidden"]);function bp(n,t){return Va.has(n)?e=>e<=0?n:t:e=>e>=1?t:n}function Ap(n,t){return e=>ie(n,t,e)}function al(n){return typeof n=="number"?Ap:typeof n=="string"?il(n)?vr:de.test(n)?Jl:Cp:Array.isArray(n)?Uh:typeof n=="object"?de.test(n)?Jl:wp:vr}function Uh(n,t){const e=[...n],i=e.length,s=n.map((r,a)=>al(r)(r,t[a]));return r=>{for(let a=0;a<i;a++)e[a]=s[a](r);return e}}function wp(n,t){const e={...n,...t},i={};for(const s in e)n[s]!==void 0&&t[s]!==void 0&&(i[s]=al(n[s])(n[s],t[s]));return s=>{for(const r in i)e[r]=i[r](s);return e}}function Rp(n,t){const e=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const r=t.types[s],a=n.indexes[r][i[r]],o=n.values[a]??0;e[s]=o,i[r]++}return e}const Cp=(n,t)=>{const e=nn.createTransformer(t),i=Vi(n),s=Vi(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Va.has(n)&&!s.values.length||Va.has(t)&&!i.values.length?bp(n,t):xs(Uh(Rp(i,s),s.values),e):vr(n,t)};function Nh(n,t,e){return typeof n=="number"&&typeof t=="number"&&typeof e=="number"?ie(n,t,e):al(n)(n,t)}const Pp=n=>{const t=({timestamp:e})=>n(e);return{start:(e=!0)=>te.update(t,e),stop:()=>kn(t),now:()=>xe.isProcessing?xe.timestamp:we.now()}},Fh=(n,t,e=10)=>{let i="";const s=Math.max(Math.round(t/e),2);for(let r=0;r<s;r++)i+=Math.round(n(r/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},xr=2e4;function ol(n){let t=0;const e=50;let i=n.next(t);for(;!i.done&&t<xr;)t+=e,i=n.next(t);return t>=xr?1/0:t}function Dp(n,t=100,e){const i=e({...n,keyframes:[0,t]}),s=Math.min(ol(i),xr);return{type:"keyframes",ease:r=>i.next(s*r).value/t,duration:We(s)}}const ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function za(n,t){return n*Math.sqrt(1-t*t)}const Lp=12;function Ip(n,t,e){let i=e;for(let s=1;s<Lp;s++)i=i-n(i)/t(i);return i}const jr=.001;function Up({duration:n=ce.duration,bounce:t=ce.bounce,velocity:e=ce.velocity,mass:i=ce.mass}){let s,r,a=1-t;a=fn(ce.minDamping,ce.maxDamping,a),n=fn(ce.minDuration,ce.maxDuration,We(n)),a<1?(s=c=>{const u=c*a,h=u*n,f=u-e,p=za(c,a),g=Math.exp(-h);return jr-f/p*g},r=c=>{const h=c*a*n,f=h*e+e,p=Math.pow(a,2)*Math.pow(c,2)*n,g=Math.exp(-h),v=za(Math.pow(c,2),a);return(-s(c)+jr>0?-1:1)*((f-p)*g)/v}):(s=c=>{const u=Math.exp(-c*n),h=(c-e)*n+1;return-jr+u*h},r=c=>{const u=Math.exp(-c*n),h=(e-c)*(n*n);return u*h});const o=5/n,l=Ip(s,r,o);if(n=Be(n),isNaN(l))return{stiffness:ce.stiffness,damping:ce.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:n}}}const Np=["duration","bounce"],Fp=["stiffness","damping","mass"];function Ql(n,t){return t.some(e=>n[e]!==void 0)}function Op(n){let t={velocity:ce.velocity,stiffness:ce.stiffness,damping:ce.damping,mass:ce.mass,isResolvedFromDuration:!1,...n};if(!Ql(n,Fp)&&Ql(n,Np))if(t.velocity=0,n.visualDuration){const e=n.visualDuration,i=2*Math.PI/(e*1.2),s=i*i,r=2*fn(.05,1,1-(n.bounce||0))*Math.sqrt(s);t={...t,mass:ce.mass,stiffness:s,damping:r}}else{const e=Up({...n,velocity:0});t={...t,...e,mass:ce.mass},t.isResolvedFromDuration=!0}return t}function yr(n=ce.visualDuration,t=ce.bounce){const e=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:i,restDelta:s}=e;const r=e.keyframes[0],a=e.keyframes[e.keyframes.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:p}=Op({...e,velocity:-We(e.velocity||0)}),g=f||0,v=c/(2*Math.sqrt(l*u)),m=a-r,d=We(Math.sqrt(l/u)),S=Math.abs(m)<5;i||(i=S?ce.restSpeed.granular:ce.restSpeed.default),s||(s=S?ce.restDelta.granular:ce.restDelta.default);let y,_,w,A,C,R;if(v<1)w=za(d,v),A=(g+v*d*m)/w,y=x=>{const P=Math.exp(-v*d*x);return a-P*(A*Math.sin(w*x)+m*Math.cos(w*x))},C=v*d*A+m*w,R=v*d*m-A*w,_=x=>Math.exp(-v*d*x)*(C*Math.sin(w*x)+R*Math.cos(w*x));else if(v===1){y=P=>a-Math.exp(-d*P)*(m+(g+d*m)*P);const x=g+d*m;_=P=>Math.exp(-d*P)*(d*x*P-g)}else{const x=d*Math.sqrt(v*v-1);y=H=>{const Y=Math.exp(-v*d*H),G=Math.min(x*H,300);return a-Y*((g+v*d*m)*Math.sinh(G)+x*m*Math.cosh(G))/x};const P=(g+v*d*m)/x,F=v*d*P-m*x,B=v*d*m-P*x;_=H=>{const Y=Math.exp(-v*d*H),G=Math.min(x*H,300);return Y*(F*Math.sinh(G)+B*Math.cosh(G))}}const T={calculatedDuration:p&&h||null,velocity:x=>Be(_(x)),next:x=>{if(!p&&v<1){const F=Math.exp(-v*d*x),B=Math.sin(w*x),H=Math.cos(w*x),Y=a-F*(A*B+m*H),G=Be(F*(C*B+R*H));return o.done=Math.abs(G)<=i&&Math.abs(a-Y)<=s,o.value=o.done?a:Y,o}const P=y(x);if(p)o.done=x>=h;else{const F=Be(_(x));o.done=Math.abs(F)<=i&&Math.abs(a-P)<=s}return o.value=o.done?a:P,o},toString:()=>{const x=Math.min(ol(T),xr),P=Fh(F=>T.next(x*F).value,x,30);return x+"ms "+P},toTransition:()=>{}};return T}yr.applyToOptions=n=>{const t=Dp(n,100,yr);return n.ease=t.ease,n.duration=Be(t.duration),n.type="keyframes",n};const Bp=5;function Oh(n,t,e){const i=Math.max(t-Bp,0);return gh(e-n(i),t-i)}function ka({keyframes:n,velocity:t=0,power:e=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],f={done:!1,value:h},p=R=>o!==void 0&&R<o||l!==void 0&&R>l,g=R=>o===void 0?l:l===void 0||Math.abs(o-R)<Math.abs(l-R)?o:l;let v=e*t;const m=h+v,d=a===void 0?m:a(m);d!==m&&(v=d-h);const S=R=>-v*Math.exp(-R/i),y=R=>d+S(R),_=R=>{const T=S(R),x=y(R);f.done=Math.abs(T)<=c,f.value=f.done?d:x};let w,A;const C=R=>{p(f.value)&&(w=R,A=yr({keyframes:[f.value,g(f.value)],velocity:Oh(y,R,f.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:R=>{let T=!1;return!A&&w===void 0&&(T=!0,_(R),C(R)),w!==void 0&&R>=w?A.next(R-w):(!T&&_(R),f)}}}function Vp(n,t,e){const i=[],s=e||zn.mix||Nh,r=n.length-1;for(let a=0;a<r;a++){let o=s(n[a],n[a+1]);if(t){const l=Array.isArray(t)?t[a]||Xe:t;o=xs(l,o)}i.push(o)}return i}function zp(n,t,{clamp:e=!0,ease:i,mixer:s}={}){const r=n.length;if(Qo(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const a=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),t=[...t].reverse());const o=Vp(t,i,s),l=o.length,c=u=>{if(a&&u<n[0])return t[0];let h=0;if(l>1)for(;h<n.length-2&&!(u<n[h+1]);h++);const f=ps(n[h],n[h+1],u);return o[h](f)};return e?u=>c(fn(n[0],n[r-1],u)):c}function kp(n,t){const e=n[n.length-1];for(let i=1;i<=t;i++){const s=ps(0,t,i);n.push(ie(e,1,s))}}function Hp(n){const t=[0];return kp(t,n.length-1),t}function Gp(n,t){return n.map(e=>e*t)}function Wp(n,t){return n.map(()=>t||bh).splice(0,n.length-1)}function hs({duration:n=300,keyframes:t,times:e,ease:i="easeInOut"}){const s=Jd(i)?i.map(ql):ql(i),r={done:!1,value:t[0]},a=Gp(e&&e.length===t.length?e:Hp(t),n),o=zp(a,t,{ease:Array.isArray(s)?s:Wp(t,s)});return{calculatedDuration:n,next:l=>(r.value=o(l),r.done=l>=n,r)}}const Xp=n=>n!==null;function Dr(n,{repeat:t,repeatType:e="loop"},i,s=1){const r=n.filter(Xp),o=s<0||t&&e!=="loop"&&t%2===1?0:r.length-1;return!o||i===void 0?r[o]:i}const jp={decay:ka,inertia:ka,tween:hs,keyframes:hs,spring:yr};function Bh(n){typeof n.type=="string"&&(n.type=jp[n.type])}class ll{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}const qp=n=>n/100;class Mr extends ll{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,s;const{motionValue:e}=this.options;e&&e.updatedAt!==we.now()&&this.tick(we.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(i=this.options).onStop)==null||s.call(i))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Bh(t);const{type:e=hs,repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:a=0}=t;let{keyframes:o}=t;const l=e||hs;l!==hs&&typeof o[0]!="number"&&(this.mixKeyframes=xs(qp,Nh(o[0],o[1])),o=[0,100]);const c=l({...t,keyframes:o});r==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=ol(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=c}updateTime(t){const e=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){const{generator:i,totalDuration:s,mixKeyframes:r,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:f,repeatDelay:p,type:g,onUpdate:v,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);const d=this.currentTime-c*(this.playbackSpeed>=0?1:-1),S=this.playbackSpeed>=0?d<0:d>s;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let y=this.currentTime,_=i;if(h){const R=Math.min(this.currentTime,s)/o;let T=Math.floor(R),x=R%1;!x&&R>=1&&(x=1),x===1&&T--,T=Math.min(T,h+1),!!(T%2)&&(f==="reverse"?(x=1-x,p&&(x-=p/o)):f==="mirror"&&(_=a)),y=fn(0,1,x)*o}let w;S?(this.delayState.value=u[0],w=this.delayState):w=_.next(y),r&&!S&&(w.value=r(w.value));let{done:A}=w;!S&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&g!==ka&&(w.value=Dr(u,this.options,m,this.speed)),v&&v(w.value),C&&this.finish(),w}then(t,e){return this.finished.then(t,e)}get duration(){return We(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+We(t)}get time(){return We(this.currentTime)}set time(t){t=Be(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const e=this.generator.next(t).value;return Oh(i=>this.generator.next(i).value,t,e)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;e&&this.driver&&this.updateTime(we.now()),this.playbackSpeed=t,e&&this.driver&&(this.time=We(this.currentTime))}play(){var s,r;if(this.isStopped)return;const{driver:t=Pp,startTime:e}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),(r=(s=this.options).onPlay)==null||r.call(s);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=e??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(we.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,e;this.notifyFinished(),this.teardown(),this.state="finished",(e=(t=this.options).onComplete)==null||e.call(t)}cancel(){var t,e;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(e=(t=this.options).onCancel)==null||e.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var e;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(e=this.driver)==null||e.stop(),t.observe(this)}}function Yp(n){for(let t=1;t<n.length;t++)n[t]??(n[t]=n[t-1])}const li=n=>n*180/Math.PI,Ha=n=>{const t=li(Math.atan2(n[1],n[0]));return Ga(t)},Kp={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ha,rotateZ:Ha,skewX:n=>li(Math.atan(n[1])),skewY:n=>li(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Ga=n=>(n=n%360,n<0&&(n+=360),n),tc=Ha,ec=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),nc=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),$p={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ec,scaleY:nc,scale:n=>(ec(n)+nc(n))/2,rotateX:n=>Ga(li(Math.atan2(n[6],n[5]))),rotateY:n=>Ga(li(Math.atan2(-n[2],n[0]))),rotateZ:tc,rotate:tc,skewX:n=>li(Math.atan(n[4])),skewY:n=>li(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Wa(n){return n.includes("scale")?1:0}function Xa(n,t){if(!n||n==="none")return Wa(t);const e=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,s;if(e)i=$p,s=e;else{const o=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Kp,s=o}if(!s)return Wa(t);const r=i[t],a=s[1].split(",").map(Jp);return typeof r=="function"?r(a):a[r]}const Zp=(n,t)=>{const{transform:e="none"}=getComputedStyle(n);return Xa(e,t)};function Jp(n){return parseFloat(n.trim())}const Ki=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$i=new Set(Ki),ic=n=>n===Yi||n===dt,Qp=new Set(["x","y","z"]),tm=Ki.filter(n=>!Qp.has(n));function em(n){const t=[];return tm.forEach(e=>{const i=n.getValue(e);i!==void 0&&(t.push([e,i.get()]),i.set(e.startsWith("scale")?1:0))}),t}const On={width:({x:n},{paddingLeft:t="0",paddingRight:e="0",boxSizing:i})=>{const s=n.max-n.min;return i==="border-box"?s:s-parseFloat(t)-parseFloat(e)},height:({y:n},{paddingTop:t="0",paddingBottom:e="0",boxSizing:i})=>{const s=n.max-n.min;return i==="border-box"?s:s-parseFloat(t)-parseFloat(e)},top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>Xa(t,"x"),y:(n,{transform:t})=>Xa(t,"y")};On.translateX=On.x;On.translateY=On.y;const hi=new Set;let ja=!1,qa=!1,Ya=!1;function Vh(){if(qa){const n=Array.from(hi).filter(i=>i.needsMeasurement),t=new Set(n.map(i=>i.element)),e=new Map;t.forEach(i=>{const s=em(i);s.length&&(e.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=e.get(i);s&&s.forEach(([r,a])=>{var o;(o=i.getValue(r))==null||o.set(a)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}qa=!1,ja=!1,hi.forEach(n=>n.complete(Ya)),hi.clear()}function zh(){hi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(qa=!0)})}function nm(){Ya=!0,zh(),Vh(),Ya=!1}class cl{constructor(t,e,i,s,r,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=s,this.element=r,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(hi.add(this),ja||(ja=!0,te.read(zh),te.resolveKeyframes(Vh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:i,motionValue:s}=this;if(t[0]===null){const r=s==null?void 0:s.get(),a=t[t.length-1];if(r!==void 0)t[0]=r;else if(i&&e){const o=i.readValue(e,a);o!=null&&(t[0]=o)}t[0]===void 0&&(t[0]=a),s&&r===void 0&&s.set(t[0])}Yp(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),hi.delete(this)}cancel(){this.state==="scheduled"&&(hi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const im=n=>n.startsWith("--");function kh(n,t,e){im(t)?n.style.setProperty(t,e):n.style[t]=e}const sm={};function Hh(n,t){const e=mh(n);return()=>sm[t]??e()}const rm=Hh(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gh=Hh(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ls=([n,t,e,i])=>`cubic-bezier(${n}, ${t}, ${e}, ${i})`,sc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ls([0,.65,.55,1]),circOut:ls([.55,0,1,.45]),backIn:ls([.31,.01,.66,-.59]),backOut:ls([.33,1.53,.69,.99])};function Wh(n,t){if(n)return typeof n=="function"?Gh()?Fh(n,t):"ease-out":Ah(n)?ls(n):Array.isArray(n)?n.map(e=>Wh(e,t)||sc.easeOut):sc[n]}function am(n,t,e,{delay:i=0,duration:s=300,repeat:r=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){const u={[t]:e};l&&(u.offset=l);const h=Wh(o,s);Array.isArray(h)&&(u.easing=h);const f={delay:i,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:a==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),n.animate(u,f)}function Xh(n){return typeof n=="function"&&"applyToOptions"in n}function om({type:n,...t}){return Xh(n)&&Gh()?n.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class jh extends ll{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:e,name:i,keyframes:s,pseudoElement:r,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=t;this.isPseudoElement=!!r,this.allowFlatten=a,this.options=t,Qo(typeof t.type!="string");const c=om(t);this.animation=am(e,i,s,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=Dr(s,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(u),kh(e,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,e;(e=(t=this.animation).finish)==null||e.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,i,s;const t=(e=this.options)==null?void 0:e.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((s=(i=this.animation).commitStyles)==null||s.call(i))}get duration(){var e,i;const t=((i=(e=this.animation.effect)==null?void 0:e.getComputedTiming)==null?void 0:i.call(e).duration)||0;return We(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+We(t)}get time(){return We(Number(this.animation.currentTime)||0)}set time(t){const e=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Be(t),e&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:e,rangeEnd:i,observe:s}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&rm()?(this.animation.timeline=t,e&&(this.animation.rangeStart=e),i&&(this.animation.rangeEnd=i),Xe):s(this)}}const qh={anticipate:Sh,backInOut:Mh,circInOut:Th};function lm(n){return n in qh}function cm(n){typeof n.ease=="string"&&lm(n.ease)&&(n.ease=qh[n.ease])}const qr=10;class um extends jh{constructor(t){cm(t),Bh(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:e,onUpdate:i,onComplete:s,element:r,...a}=this.options;if(!e)return;if(t!==void 0){e.set(t);return}const o=new Mr({...a,autoplay:!1}),l=Math.max(qr,we.now()-this.startTime),c=fn(0,qr,l-qr),u=o.sample(l).value,{name:h}=this.options;r&&h&&kh(r,h,u),e.setWithVelocity(o.sample(Math.max(0,l-c)).value,u,c),o.stop()}}const rc=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(nn.test(n)||n==="0")&&!n.startsWith("url("));function hm(n){const t=n[0];if(n.length===1)return!0;for(let e=0;e<n.length;e++)if(n[e]!==t)return!0}function fm(n,t,e,i){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=n[n.length-1],a=rc(s,t),o=rc(r,t);return!a||!o?!1:hm(n)||(e==="spring"||Xh(e))&&i}function Ka(n){n.duration=0,n.type="keyframes"}const Yh=new Set(["opacity","clipPath","filter","transform"]),dm=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function pm(n){for(let t=0;t<n.length;t++)if(typeof n[t]=="string"&&dm.test(n[t]))return!0;return!1}const mm=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),gm=mh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function _m(n){var h;const{motionValue:t,name:e,repeatDelay:i,repeatType:s,damping:r,type:a,keyframes:o}=n;if(!(((h=t==null?void 0:t.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return gm()&&e&&(Yh.has(e)||mm.has(e)&&pm(o))&&(e!=="transform"||!u)&&!c&&!i&&s!=="mirror"&&r!==0&&a!=="inertia"}const vm=40;class xm extends ll{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:u,...h}){var g;super(),this.stop=()=>{var v,m;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=we.now();const f={autoplay:t,delay:e,type:i,repeat:s,repeatDelay:r,repeatType:a,name:l,motionValue:c,element:u,...h},p=(u==null?void 0:u.KeyframeResolver)||cl;this.keyframeResolver=new p(o,(v,m,d)=>this.onKeyframesResolved(v,m,f,!d),l,c,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(t,e,i,s){var d,S;this.keyframeResolver=void 0;const{name:r,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=we.now();let h=!0;fm(t,r,a,o)||(h=!1,(zn.instantAnimations||!l)&&(u==null||u(Dr(t,i,e))),t[0]=t[t.length-1],Ka(i),i.repeat=0);const p={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>vm?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:e,...i,keyframes:t},g=h&&!c&&_m(p),v=(S=(d=p.motionValue)==null?void 0:d.owner)==null?void 0:S.current;let m;if(g)try{m=new um({...p,element:v})}catch{m=new Mr(p)}else m=new Mr(p);m.finished.then(()=>{this.notifyFinished()}).catch(Xe),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),nm()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Kh(n,t,e,i=0,s=1){const r=Array.from(n).sort((c,u)=>c.sortNodePosition(u)).indexOf(t),a=n.size,o=(a-1)*i;return typeof e=="function"?e(r,a):s===1?r*i:o-r*i}const ym=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Mm(n){const t=ym.exec(n);if(!t)return[,];const[,e,i,s]=t;return[`--${e??i}`,s]}function $h(n,t,e=1){const[i,s]=Mm(n);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);if(r){const a=r.trim();return fh(a)?parseFloat(a):a}return il(s)?$h(s,t,e+1):s}const Sm={type:"spring",stiffness:500,damping:25,restSpeed:10},Em=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Tm={type:"keyframes",duration:.8},bm={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Am=(n,{keyframes:t})=>t.length>2?Tm:$i.has(n)?n.startsWith("scale")?Em(t[1]):Sm:bm;function Zh(n,t){if(n!=null&&n.inherit&&t){const{inherit:e,...i}=n;return{...t,...i}}return n}function ul(n,t){const e=(n==null?void 0:n[t])??(n==null?void 0:n.default)??n;return e!==n?Zh(e,n):e}const wm=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Rm(n){for(const t in n)if(!wm.has(t))return!0;return!1}const hl=(n,t,e,i={},s,r)=>a=>{const o=ul(i,n)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Be(l);const u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-c,onUpdate:f=>{t.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:n,motionValue:t,element:r?void 0:s};Rm(o)||Object.assign(u,Am(n,u)),u.duration&&(u.duration=Be(u.duration)),u.repeatDelay&&(u.repeatDelay=Be(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Ka(u),u.delay===0&&(h=!0)),(zn.instantAnimations||zn.skipAnimations||s!=null&&s.shouldSkipAnimations)&&(h=!0,Ka(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,h&&!r&&t.get()!==void 0){const f=Dr(u.keyframes,o);if(f!==void 0){te.update(()=>{u.onUpdate(f),u.onComplete()});return}}return o.isSync?new Mr(u):new xm(u)};function ac(n){const t=[{},{}];return n==null||n.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function fl(n,t,e,i){if(typeof t=="function"){const[s,r]=ac(i);t=t(e!==void 0?e:n.custom,s,r)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,r]=ac(i);t=t(e!==void 0?e:n.custom,s,r)}return t}function fi(n,t,e){const i=n.getProps();return fl(i,t,e!==void 0?e:i.custom,n)}const Jh=new Set(["width","height","top","left","right","bottom",...Ki]),oc=30,Cm=n=>!isNaN(parseFloat(n));class Pm{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var r;const s=we.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=we.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Cm(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new tl);const i=this.events[t].add(e);return t==="change"?()=>{i(),te.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=we.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>oc)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,oc);return gh(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,e;(t=this.dependents)==null||t.clear(),(e=this.events.destroy)==null||e.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zi(n,t){return new Pm(n,t)}const $a=n=>Array.isArray(n);function Dm(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,zi(e))}function Lm(n){return $a(n)?n[n.length-1]||0:n}function Im(n,t){const e=fi(n,t);let{transitionEnd:i={},transition:s={},...r}=e||{};r={...r,...i};for(const a in r){const o=Lm(r[a]);Dm(n,a,o)}}const ye=n=>!!(n&&n.getVelocity);function Um(n){return!!(ye(n)&&n.add)}function Za(n,t){const e=n.getValue("willChange");if(Um(e))return e.add(t);if(!e&&zn.WillChange){const i=new zn.WillChange("auto");n.addValue("willChange",i),i.add(t)}}function dl(n){return n.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Nm="framerAppearId",Qh="data-"+dl(Nm);function tf(n){return n.props[Qh]}function Fm({protectedKeys:n,needsAnimating:t},e){const i=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,i}function ef(n,t,{delay:e=0,transitionOverride:i,type:s}={}){let{transition:r,transitionEnd:a,...o}=t;const l=n.getDefaultTransition();r=r?Zh(r,l):l;const c=r==null?void 0:r.reduceMotion;i&&(r=i);const u=[],h=s&&n.animationState&&n.animationState.getState()[s];for(const f in o){const p=n.getValue(f,n.latestValues[f]??null),g=o[f];if(g===void 0||h&&Fm(h,f))continue;const v={delay:e,...ul(r||{},f)},m=p.get();if(m!==void 0&&!p.isAnimating()&&!Array.isArray(g)&&g===m&&!v.velocity){te.update(()=>p.set(g));continue}let d=!1;if(window.MotionHandoffAnimation){const _=tf(n);if(_){const w=window.MotionHandoffAnimation(_,f,te);w!==null&&(v.startTime=w,d=!0)}}Za(n,f);const S=c??n.shouldReduceMotion;p.start(hl(f,p,g,S&&Jh.has(f)?{type:!1}:v,n,d));const y=p.animation;y&&u.push(y)}if(a){const f=()=>te.update(()=>{a&&Im(n,a)});u.length?Promise.all(u).then(f):f()}return u}function Ja(n,t,e={}){var l;const i=fi(n,t,e.type==="exit"?(l=n.presenceContext)==null?void 0:l.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=i||{};e.transitionOverride&&(s=e.transitionOverride);const r=i?()=>Promise.all(ef(n,i,e)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:f}=s;return Om(n,t,c,u,h,f,e)}:()=>Promise.resolve(),{when:o}=s;if(o){const[c,u]=o==="beforeChildren"?[r,a]:[a,r];return c().then(()=>u())}else return Promise.all([r(),a(e.delay)])}function Om(n,t,e=0,i=0,s=0,r=1,a){const o=[];for(const l of n.variantChildren)l.notify("AnimationStart",t),o.push(Ja(l,t,{...a,delay:e+(typeof i=="function"?0:i)+Kh(n.variantChildren,l,i,s,r)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(o)}function Bm(n,t,e={}){n.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>Ja(n,r,e));i=Promise.all(s)}else if(typeof t=="string")i=Ja(n,t,e);else{const s=typeof t=="function"?fi(n,t,e.custom):t;i=Promise.all(ef(n,s,e))}return i.then(()=>{n.notify("AnimationComplete",t)})}const Vm={test:n=>n==="auto",parse:n=>n},nf=n=>t=>t.test(n),sf=[Yi,dt,un,Un,hp,up,Vm],lc=n=>sf.find(nf(n));function zm(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ph(n):!0}const km=new Set(["brightness","contrast","saturate","opacity"]);function Hm(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[i]=e.match(sl)||[];if(!i)return n;const s=e.replace(i,"");let r=km.has(t)?1:0;return i!==e&&(r*=100),t+"("+r+s+")"}const Gm=/\b([a-z-]*)\(.*?\)/gu,Qa={...nn,getAnimatableNone:n=>{const t=n.match(Gm);return t?t.map(Hm).join(" "):n}},to={...nn,getAnimatableNone:n=>{const t=nn.parse(n);return nn.createTransformer(n)(t.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},cc={...Yi,transform:Math.round},Wm={rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scale:Ds,scaleX:Ds,scaleY:Ds,scaleZ:Ds,skew:Un,skewX:Un,skewY:Un,distance:dt,translateX:dt,translateY:dt,translateZ:dt,x:dt,y:dt,z:dt,perspective:dt,transformPerspective:dt,opacity:ms,originX:Kl,originY:Kl,originZ:dt},pl={borderWidth:dt,borderTopWidth:dt,borderRightWidth:dt,borderBottomWidth:dt,borderLeftWidth:dt,borderRadius:dt,borderTopLeftRadius:dt,borderTopRightRadius:dt,borderBottomRightRadius:dt,borderBottomLeftRadius:dt,width:dt,maxWidth:dt,height:dt,maxHeight:dt,top:dt,right:dt,bottom:dt,left:dt,inset:dt,insetBlock:dt,insetBlockStart:dt,insetBlockEnd:dt,insetInline:dt,insetInlineStart:dt,insetInlineEnd:dt,padding:dt,paddingTop:dt,paddingRight:dt,paddingBottom:dt,paddingLeft:dt,paddingBlock:dt,paddingBlockStart:dt,paddingBlockEnd:dt,paddingInline:dt,paddingInlineStart:dt,paddingInlineEnd:dt,margin:dt,marginTop:dt,marginRight:dt,marginBottom:dt,marginLeft:dt,marginBlock:dt,marginBlockStart:dt,marginBlockEnd:dt,marginInline:dt,marginInlineStart:dt,marginInlineEnd:dt,fontSize:dt,backgroundPositionX:dt,backgroundPositionY:dt,...Wm,zIndex:cc,fillOpacity:ms,strokeOpacity:ms,numOctaves:cc},Xm={...pl,color:de,backgroundColor:de,outlineColor:de,fill:de,stroke:de,borderColor:de,borderTopColor:de,borderRightColor:de,borderBottomColor:de,borderLeftColor:de,filter:Qa,WebkitFilter:Qa,mask:to,WebkitMask:to},rf=n=>Xm[n],jm=new Set([Qa,to]);function af(n,t){let e=rf(n);return jm.has(e)||(e=nn),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const qm=new Set(["auto","none","0"]);function Ym(n,t,e){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!qm.has(r)&&Vi(r).values.length&&(s=n[i]),i++}if(s&&e)for(const r of t)n[r]=af(e,s)}class Km extends cl{constructor(t,e,i,s,r){super(t,e,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let h=t[u];if(typeof h=="string"&&(h=h.trim(),il(h))){const f=$h(h,e.current);f!==void 0&&(t[u]=f),u===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Jh.has(i)||t.length!==2)return;const[s,r]=t,a=lc(s),o=lc(r),l=Yl(s),c=Yl(r);if(l!==c&&On[i]){this.needsMeasurement=!0;return}if(a!==o)if(ic(a)&&ic(o))for(let u=0;u<t.length;u++){const h=t[u];typeof h=="string"&&(t[u]=parseFloat(h))}else On[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,i=[];for(let s=0;s<t.length;s++)(t[s]===null||zm(t[s]))&&i.push(s);i.length&&Ym(t,i,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=On[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){var o;const{element:t,name:e,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const s=t.getValue(e);s&&s.jump(this.measuredOrigin,!1);const r=i.length-1,a=i[r];i[r]=On[e](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function ml(n,t,e){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const s=document.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n).filter(i=>i!=null)}const of=(n,t)=>t&&typeof n=="number"?t.transform(n):n;function $m(n){return dh(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:gl}=wh(queueMicrotask,!1),Je={x:!1,y:!1};function lf(){return Je.x||Je.y}function Zm(n){return n==="x"||n==="y"?Je[n]?null:(Je[n]=!0,()=>{Je[n]=!1}):Je.x||Je.y?null:(Je.x=Je.y=!0,()=>{Je.x=Je.y=!1})}function cf(n,t){const e=ml(n),i=new AbortController,s={passive:!0,...t,signal:i.signal};return[e,s,()=>i.abort()]}function Jm(n){return!(n.pointerType==="touch"||lf())}function Qm(n,t,e={}){const[i,s,r]=cf(n,e);return i.forEach(a=>{let o=!1,l=!1,c;const u=()=>{a.removeEventListener("pointerleave",g)},h=m=>{c&&(c(m),c=void 0),u()},f=m=>{o=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,h(m))},p=()=>{o=!0,window.addEventListener("pointerup",f,s),window.addEventListener("pointercancel",f,s)},g=m=>{if(m.pointerType!=="touch"){if(o){l=!0;return}h(m)}},v=m=>{if(!Jm(m))return;l=!1;const d=t(a,m);typeof d=="function"&&(c=d,a.addEventListener("pointerleave",g,s))};a.addEventListener("pointerenter",v,s),a.addEventListener("pointerdown",p,s)}),r}const uf=(n,t)=>t?n===t?!0:uf(n,t.parentElement):!1,_l=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,tg=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function eg(n){return tg.has(n.tagName)||n.isContentEditable===!0}const ng=new Set(["INPUT","SELECT","TEXTAREA"]);function ig(n){return ng.has(n.tagName)||n.isContentEditable===!0}const rr=new WeakSet;function uc(n){return t=>{t.key==="Enter"&&n(t)}}function Yr(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const sg=(n,t)=>{const e=n.currentTarget;if(!e)return;const i=uc(()=>{if(rr.has(e))return;Yr(e,"down");const s=uc(()=>{Yr(e,"up")}),r=()=>Yr(e,"cancel");e.addEventListener("keyup",s,t),e.addEventListener("blur",r,t)});e.addEventListener("keydown",i,t),e.addEventListener("blur",()=>e.removeEventListener("keydown",i),t)};function hc(n){return _l(n)&&!lf()}const fc=new WeakSet;function rg(n,t,e={}){const[i,s,r]=cf(n,e),a=o=>{const l=o.currentTarget;if(!hc(o)||fc.has(o))return;rr.add(l),e.stopPropagation&&fc.add(o);const c=t(l,o),u=(p,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),rr.has(l)&&rr.delete(l),hc(p)&&typeof c=="function"&&c(p,{success:g})},h=p=>{u(p,l===window||l===document||e.useGlobalTarget||uf(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",f,s)};return i.forEach(o=>{(e.useGlobalTarget?window:o).addEventListener("pointerdown",a,s),$m(o)&&(o.addEventListener("focus",c=>sg(c,s)),!eg(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),r}function vl(n){return dh(n)&&"ownerSVGElement"in n}const ar=new WeakMap;let Nn;const hf=(n,t,e)=>(i,s)=>s&&s[0]?s[0][n+"Size"]:vl(i)&&"getBBox"in i?i.getBBox()[t]:i[e],ag=hf("inline","width","offsetWidth"),og=hf("block","height","offsetHeight");function lg({target:n,borderBoxSize:t}){var e;(e=ar.get(n))==null||e.forEach(i=>{i(n,{get width(){return ag(n,t)},get height(){return og(n,t)}})})}function cg(n){n.forEach(lg)}function ug(){typeof ResizeObserver>"u"||(Nn=new ResizeObserver(cg))}function hg(n,t){Nn||ug();const e=ml(n);return e.forEach(i=>{let s=ar.get(i);s||(s=new Set,ar.set(i,s)),s.add(t),Nn==null||Nn.observe(i)}),()=>{e.forEach(i=>{const s=ar.get(i);s==null||s.delete(t),s!=null&&s.size||Nn==null||Nn.unobserve(i)})}}const or=new Set;let Ii;function fg(){Ii=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};or.forEach(t=>t(n))},window.addEventListener("resize",Ii)}function dg(n){return or.add(n),Ii||fg(),()=>{or.delete(n),!or.size&&typeof Ii=="function"&&(window.removeEventListener("resize",Ii),Ii=void 0)}}function dc(n,t){return typeof n=="function"?dg(n):hg(n,t)}function pg(n){return vl(n)&&n.tagName==="svg"}const mg=[...sf,de,nn],gg=n=>mg.find(nf(n)),pc=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ui=()=>({x:pc(),y:pc()}),mc=()=>({min:0,max:0}),pe=()=>({x:mc(),y:mc()}),_g=new WeakMap;function Lr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function gs(n){return typeof n=="string"||Array.isArray(n)}const xl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yl=["initial",...xl];function Ir(n){return Lr(n.animate)||yl.some(t=>gs(n[t]))}function ff(n){return!!(Ir(n)||n.variants)}function vg(n,t,e){for(const i in t){const s=t[i],r=e[i];if(ye(s))n.addValue(i,s);else if(ye(r))n.addValue(i,zi(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const a=n.getValue(i);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=n.getStaticValue(i);n.addValue(i,zi(a!==void 0?a:s,{owner:n}))}}for(const i in e)t[i]===void 0&&n.removeValue(i);return t}const eo={current:null},df={current:!1},xg=typeof window<"u";function yg(){if(df.current=!0,!!xg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>eo.current=n.matches;n.addEventListener("change",t),t()}else eo.current=!1}const gc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Sr={};function pf(n){Sr=n}function Mg(){return Sr}class Sg{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:s,skipAnimations:r,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=cl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=we.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,te.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=e.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Ir(e),this.isVariantNode=ff(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(e,{},this);for(const p in f){const g=f[p];c[p]!==void 0&&ye(g)&&g.set(c[p])}}mount(t){var e,i;if(this.hasBeenMounted)for(const s in this.initialValues)(e=this.values.get(s))==null||e.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=t,_g.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,r)=>this.bindToMotionValue(r,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(df.current||yg(),this.shouldReduceMotion=eo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),kn(this.notifyUpdate),kn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,e){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),e.accelerate&&Yh.has(t)&&this.current instanceof HTMLElement){const{factory:a,keyframes:o,times:l,ease:c,duration:u}=e.accelerate,h=new jh({element:this.current,name:t,keyframes:o,times:l,ease:c,duration:Be(u)}),f=a(h);this.valueSubscriptions.set(t,()=>{f(),h.cancel()});return}const i=$i.has(t);i&&this.onBindTransform&&this.onBindTransform();const s=e.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&te.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),r&&r(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Sr){const e=Sr[t];if(!e)continue;const{isEnabled:i,Feature:s}=e;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let i=0;i<gc.length;i++){const s=gc[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,a=t[r];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=vg(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&e!==void 0&&(i=zi(e===null?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(fh(i)||ph(i))?i=parseFloat(i):!gg(i)&&nn.test(e)&&(i=af(t,e)),this.setBaseTarget(t,ye(i)?i.get():i)),ye(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var r;const{initial:e}=this.props;let i;if(typeof e=="string"||typeof e=="object"){const a=fl(this.props,e,(r=this.presenceContext)==null?void 0:r.custom);a&&(i=a[t])}if(e&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ye(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new tl),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}scheduleRenderMicrotask(){gl.render(this.render)}}class mf extends Sg{constructor(){super(...arguments),this.KeyframeResolver=Km}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){const i=t.style;return i?i[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ye(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}class Wn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function gf({top:n,left:t,right:e,bottom:i}){return{x:{min:t,max:e},y:{min:n,max:i}}}function Eg({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function Tg(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),i=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:i.y,right:i.x}}function Kr(n){return n===void 0||n===1}function no({scale:n,scaleX:t,scaleY:e}){return!Kr(n)||!Kr(t)||!Kr(e)}function ei(n){return no(n)||_f(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function _f(n){return _c(n.x)||_c(n.y)}function _c(n){return n&&n!=="0%"}function Er(n,t,e){const i=n-e,s=t*i;return e+s}function vc(n,t,e,i,s){return s!==void 0&&(n=Er(n,s,i)),Er(n,e,i)+t}function io(n,t=0,e=1,i,s){n.min=vc(n.min,t,e,i,s),n.max=vc(n.max,t,e,i,s)}function vf(n,{x:t,y:e}){io(n.x,t.translate,t.scale,t.originPoint),io(n.y,e.translate,e.scale,e.originPoint)}const xc=.999999999999,yc=1.0000000000001;function bg(n,t,e,i=!1){var o;const s=e.length;if(!s)return;t.x=t.y=1;let r,a;for(let l=0;l<s;l++){r=e[l],a=r.projectionDelta;const{visualElement:c}=r.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(on(n.x,-r.scroll.offset.x),on(n.y,-r.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,vf(n,a)),i&&ei(r.latestValues)&&lr(n,r.latestValues,(o=r.layout)==null?void 0:o.layoutBox))}t.x<yc&&t.x>xc&&(t.x=1),t.y<yc&&t.y>xc&&(t.y=1)}function on(n,t){n.min+=t,n.max+=t}function Mc(n,t,e,i,s=.5){const r=ie(n.min,n.max,s);io(n,t,e,r,i)}function Sc(n,t){return typeof n=="string"?parseFloat(n)/100*(t.max-t.min):n}function lr(n,t,e){const i=e??n;Mc(n.x,Sc(t.x,i.x),t.scaleX,t.scale,t.originX),Mc(n.y,Sc(t.y,i.y),t.scaleY,t.scale,t.originY)}function xf(n,t){return gf(Tg(n.getBoundingClientRect(),t))}function Ag(n,t,e){const i=xf(n,e),{scroll:s}=t;return s&&(on(i.x,s.offset.x),on(i.y,s.offset.y)),i}const wg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Rg=Ki.length;function Cg(n,t,e){let i="",s=!0;for(let r=0;r<Rg;r++){const a=Ki[r],o=n[a];if(o===void 0)continue;let l=!0;if(typeof o=="number")l=o===(a.startsWith("scale")?1:0);else{const c=parseFloat(o);l=a.startsWith("scale")?c===1:c===0}if(!l||e){const c=of(o,pl[a]);if(!l){s=!1;const u=wg[a]||a;i+=`${u}(${c}) `}e&&(t[a]=c)}}return i=i.trim(),e?i=e(t,s?"":i):s&&(i="none"),i}function Ml(n,t,e){const{style:i,vars:s,transformOrigin:r}=n;let a=!1,o=!1;for(const l in t){const c=t[l];if($i.has(l)){a=!0;continue}else if(Ch(l)){s[l]=c;continue}else{const u=of(c,pl[l]);l.startsWith("origin")?(o=!0,r[l]=u):i[l]=u}}if(t.transform||(a||e?i.transform=Cg(t,n.transform,e):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}function yf(n,{style:t,vars:e},i,s){const r=n.style;let a;for(a in t)r[a]=t[a];s==null||s.applyProjectionStyles(r,i);for(a in e)r.setProperty(a,e[a])}function Ec(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const es={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(dt.test(n))n=parseFloat(n);else return n;const e=Ec(n,t.target.x),i=Ec(n,t.target.y);return`${e}% ${i}%`}},Pg={correct:(n,{treeScale:t,projectionDelta:e})=>{const i=n,s=nn.parse(n);if(s.length>5)return i;const r=nn.createTransformer(n),a=typeof s[0]!="number"?1:0,o=e.x.scale*t.x,l=e.y.scale*t.y;s[0+a]/=o,s[1+a]/=l;const c=ie(o,l,.5);return typeof s[2+a]=="number"&&(s[2+a]/=c),typeof s[3+a]=="number"&&(s[3+a]/=c),r(s)}},so={borderRadius:{...es,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:es,borderTopRightRadius:es,borderBottomLeftRadius:es,borderBottomRightRadius:es,boxShadow:Pg};function Mf(n,{layout:t,layoutId:e}){return $i.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!so[n]||n==="opacity")}function Sl(n,t,e){var a;const i=n.style,s=t==null?void 0:t.style,r={};if(!i)return r;for(const o in i)(ye(i[o])||s&&ye(s[o])||Mf(o,n)||((a=e==null?void 0:e.getValue(o))==null?void 0:a.liveStyle)!==void 0)&&(r[o]=i[o]);return r}function Dg(n){return window.getComputedStyle(n)}class Lg extends mf{constructor(){super(...arguments),this.type="html",this.renderInstance=yf}readValueFromInstance(t,e){var i;if($i.has(e))return(i=this.projection)!=null&&i.isProjecting?Wa(e):Zp(t,e);{const s=Dg(t),r=(Ch(e)?s.getPropertyValue(e):s[e])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:e}){return xf(t,e)}build(t,e,i){Ml(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return Sl(t,e,i)}}const Ig={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ug={offset:"strokeDashoffset",array:"strokeDasharray"};function Ng(n,t,e=1,i=0,s=!0){n.pathLength=1;const r=s?Ig:Ug;n[r.offset]=`${-i}`,n[r.array]=`${t} ${e}`}const Fg=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Sf(n,{attrX:t,attrY:e,attrScale:i,pathLength:s,pathSpacing:r=1,pathOffset:a=0,...o},l,c,u){if(Ml(n,o,c),l){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:h,style:f}=n;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete h.transformBox);for(const p of Fg)h[p]!==void 0&&(f[p]=h[p],delete h[p]);t!==void 0&&(h.x=t),e!==void 0&&(h.y=e),i!==void 0&&(h.scale=i),s!==void 0&&Ng(h,s,r,a,!1)}const Ef=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Tf=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Og(n,t,e,i){yf(n,t,void 0,i);for(const s in t.attrs)n.setAttribute(Ef.has(s)?s:dl(s),t.attrs[s])}function bf(n,t,e){const i=Sl(n,t,e);for(const s in n)if(ye(n[s])||ye(t[s])){const r=Ki.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}class Bg extends mf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pe}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if($i.has(e)){const i=rf(e);return i&&i.default||0}return e=Ef.has(e)?e:dl(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return bf(t,e,i)}build(t,e,i){Sf(t,e,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,e,i,s){Og(t,e,i,s)}mount(t){this.isSVGTag=Tf(t.tagName),super.mount(t)}}const Vg=yl.length;function Af(n){if(!n)return;if(!n.isControllingVariants){const e=n.parent?Af(n.parent)||{}:{};return n.props.initial!==void 0&&(e.initial=n.props.initial),e}const t={};for(let e=0;e<Vg;e++){const i=yl[e],s=n.props[i];(gs(s)||s===!1)&&(t[i]=s)}return t}function wf(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let i=0;i<e;i++)if(t[i]!==n[i])return!1;return!0}const zg=[...xl].reverse(),kg=xl.length;function Hg(n){return t=>Promise.all(t.map(({animation:e,options:i})=>Bm(n,e,i)))}function Gg(n){let t=Hg(n),e=Tc(),i=!0,s=!1;const r=c=>(u,h)=>{var p;const f=fi(n,h,c==="exit"?(p=n.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:g,transitionEnd:v,...m}=f;u={...u,...m,...v}}return u};function a(c){t=c(n)}function o(c){const{props:u}=n,h=Af(n.parent)||{},f=[],p=new Set;let g={},v=1/0;for(let d=0;d<kg;d++){const S=zg[d],y=e[S],_=u[S]!==void 0?u[S]:h[S],w=gs(_),A=S===c?y.isActive:null;A===!1&&(v=d);let C=_===h[S]&&_!==u[S]&&w;if(C&&(i||s)&&n.manuallyAnimateOnMount&&(C=!1),y.protectedKeys={...g},!y.isActive&&A===null||!_&&!y.prevProp||Lr(_)||typeof _=="boolean")continue;if(S==="exit"&&y.isActive&&A!==!0){y.prevResolvedValues&&(g={...g,...y.prevResolvedValues});continue}const R=Wg(y.prevProp,_);let T=R||S===c&&y.isActive&&!C&&w||d>v&&w,x=!1;const P=Array.isArray(_)?_:[_];let F=P.reduce(r(S),{});A===!1&&(F={});const{prevResolvedValues:B={}}=y,H={...B,...F},Y=z=>{T=!0,p.has(z)&&(x=!0,p.delete(z)),y.needsAnimating[z]=!0;const et=n.getValue(z);et&&(et.liveStyle=!1)};for(const z in H){const et=F[z],st=B[z];if(g.hasOwnProperty(z))continue;let _t=!1;$a(et)&&$a(st)?_t=!wf(et,st):_t=et!==st,_t?et!=null?Y(z):p.add(z):et!==void 0&&p.has(z)?Y(z):y.protectedKeys[z]=!0}y.prevProp=_,y.prevResolvedValues=F,y.isActive&&(g={...g,...F}),(i||s)&&n.blockInitialAnimation&&(T=!1);const G=C&&R;T&&(!G||x)&&f.push(...P.map(z=>{const et={type:S};if(typeof z=="string"&&(i||s)&&!G&&n.manuallyAnimateOnMount&&n.parent){const{parent:st}=n,_t=fi(st,z);if(st.enteringChildren&&_t){const{delayChildren:Nt}=_t.transition||{};et.delay=Kh(st.enteringChildren,n,Nt)}}return{animation:z,options:et}}))}if(p.size){const d={};if(typeof u.initial!="boolean"){const S=fi(n,Array.isArray(u.initial)?u.initial[0]:u.initial);S&&S.transition&&(d.transition=S.transition)}p.forEach(S=>{const y=n.getBaseTarget(S),_=n.getValue(S);_&&(_.liveStyle=!0),d[S]=y??null}),f.push({animation:d})}let m=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!n.manuallyAnimateOnMount&&(m=!1),i=!1,s=!1,m?t(f):Promise.resolve()}function l(c,u){var f;if(e[c].isActive===u)return Promise.resolve();(f=n.variantChildren)==null||f.forEach(p=>{var g;return(g=p.animationState)==null?void 0:g.setActive(c,u)}),e[c].isActive=u;const h=o(c);for(const p in e)e[p].protectedKeys={};return h}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>e,reset:()=>{e=Tc(),s=!0}}}function Wg(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!wf(t,n):!1}function qn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tc(){return{animate:qn(!0),whileInView:qn(),whileHover:qn(),whileTap:qn(),whileDrag:qn(),whileFocus:qn(),exit:qn()}}function ro(n,t){n.min=t.min,n.max=t.max}function Ye(n,t){ro(n.x,t.x),ro(n.y,t.y)}function bc(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}const Rf=1e-4,Xg=1-Rf,jg=1+Rf,Cf=.01,qg=0-Cf,Yg=0+Cf;function Re(n){return n.max-n.min}function Kg(n,t,e){return Math.abs(n-t)<=e}function Ac(n,t,e,i=.5){n.origin=i,n.originPoint=ie(t.min,t.max,n.origin),n.scale=Re(e)/Re(t),n.translate=ie(e.min,e.max,n.origin)-n.originPoint,(n.scale>=Xg&&n.scale<=jg||isNaN(n.scale))&&(n.scale=1),(n.translate>=qg&&n.translate<=Yg||isNaN(n.translate))&&(n.translate=0)}function fs(n,t,e,i){Ac(n.x,t.x,e.x,i?i.originX:void 0),Ac(n.y,t.y,e.y,i?i.originY:void 0)}function wc(n,t,e,i=0){const s=i?ie(e.min,e.max,i):e.min;n.min=s+t.min,n.max=n.min+Re(t)}function $g(n,t,e,i){wc(n.x,t.x,e.x,i==null?void 0:i.x),wc(n.y,t.y,e.y,i==null?void 0:i.y)}function Rc(n,t,e,i=0){const s=i?ie(e.min,e.max,i):e.min;n.min=t.min-s,n.max=n.min+Re(t)}function Tr(n,t,e,i){Rc(n.x,t.x,e.x,i==null?void 0:i.x),Rc(n.y,t.y,e.y,i==null?void 0:i.y)}function Cc(n,t,e,i,s){return n-=t,n=Er(n,1/e,i),s!==void 0&&(n=Er(n,1/s,i)),n}function Zg(n,t=0,e=1,i=.5,s,r=n,a=n){if(un.test(t)&&(t=parseFloat(t),t=ie(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=ie(r.min,r.max,i);n===r&&(o-=t),n.min=Cc(n.min,t,e,o,s),n.max=Cc(n.max,t,e,o,s)}function Pc(n,t,[e,i,s],r,a){Zg(n,t[e],t[i],t[s],t.scale,r,a)}const Jg=["x","scaleX","originX"],Qg=["y","scaleY","originY"];function Dc(n,t,e,i){Pc(n.x,t,Jg,e?e.x:void 0,i?i.x:void 0),Pc(n.y,t,Qg,e?e.y:void 0,i?i.y:void 0)}function Lc(n){return n.translate===0&&n.scale===1}function Pf(n){return Lc(n.x)&&Lc(n.y)}function Ic(n,t){return n.min===t.min&&n.max===t.max}function t_(n,t){return Ic(n.x,t.x)&&Ic(n.y,t.y)}function Uc(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function Df(n,t){return Uc(n.x,t.x)&&Uc(n.y,t.y)}function Nc(n){return Re(n.x)/Re(n.y)}function Fc(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}function an(n){return[n("x"),n("y")]}function e_(n,t,e){let i="";const s=n.x.translate/t.x,r=n.y.translate/t.y,a=(e==null?void 0:e.z)||0;if((s||r||a)&&(i=`translate3d(${s}px, ${r}px, ${a}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:f,skewX:p,skewY:g}=e;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const o=n.x.scale*t.x,l=n.y.scale*t.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Lf=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],n_=Lf.length,Oc=n=>typeof n=="string"?parseFloat(n):n,Bc=n=>typeof n=="number"||dt.test(n);function i_(n,t,e,i,s,r){s?(n.opacity=ie(0,e.opacity??1,s_(i)),n.opacityExit=ie(t.opacity??1,0,r_(i))):r&&(n.opacity=ie(t.opacity??1,e.opacity??1,i));for(let a=0;a<n_;a++){const o=Lf[a];let l=Vc(t,o),c=Vc(e,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Bc(l)===Bc(c)?(n[o]=Math.max(ie(Oc(l),Oc(c),i),0),(un.test(c)||un.test(l))&&(n[o]+="%")):n[o]=c}(t.rotate||e.rotate)&&(n.rotate=ie(t.rotate||0,e.rotate||0,i))}function Vc(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const s_=If(0,.5,Eh),r_=If(.5,.95,Xe);function If(n,t,e){return i=>i<n?0:i>t?1:e(ps(n,t,i))}function a_(n,t,e){const i=ye(n)?n:zi(n);return i.start(hl("",i,t,e)),i.animation}function _s(n,t,e,i={passive:!0}){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e)}const o_=(n,t)=>n.depth-t.depth;class l_{constructor(){this.children=[],this.isDirty=!1}add(t){Jo(this.children,t),this.isDirty=!0}remove(t){_r(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(o_),this.isDirty=!1,this.children.forEach(t)}}function c_(n,t){const e=we.now(),i=({timestamp:s})=>{const r=s-e;r>=t&&(kn(i),n(r-t))};return te.setup(i,!0),()=>kn(i)}function cr(n){return ye(n)?n.get():n}class u_{constructor(){this.members=[]}add(t){Jo(this.members,t);for(let e=this.members.length-1;e>=0;e--){const i=this.members[e];if(i===t||i===this.lead||i===this.prevLead)continue;const s=i.instance;(!s||s.isConnected===!1)&&!i.snapshot&&(_r(this.members,i),i.unmount())}t.scheduleRender()}remove(t){if(_r(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){var e;for(let i=this.members.indexOf(t)-1;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1&&((e=s.instance)==null?void 0:e.isConnected)!==!1)return this.promote(s),!0}return!1}promote(t,e){var s;const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.updateSnapshot(),t.scheduleRender();const{layoutDependency:r}=i.options,{layoutDependency:a}=t.options;(r===void 0||r!==a)&&(t.resumeFrom=i,e&&(i.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),(s=t.root)!=null&&s.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var e,i,s,r,a;(i=(e=t.options).onExitComplete)==null||i.call(e),(a=(s=t.resumingFrom)==null?void 0:(r=s.options).onExitComplete)==null||a.call(r)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const ur={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$r=["","X","Y","Z"],h_=1e3;let f_=0;function Zr(n,t,e,i){const{latestValues:s}=t;s[n]&&(e[n]=s[n],t.setStaticValue(n,0),i&&(i[n]=0))}function Uf(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const e=tf(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(e,"transform",te,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Uf(i)}function Nf({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(a={},o=t==null?void 0:t()){this.id=f_++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(m_),this.nodes.forEach(M_),this.nodes.forEach(S_),this.nodes.forEach(g_)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new l_)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new tl),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=vl(a)&&!pg(a),this.instance=a;const{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),n){let u,h=0;const f=()=>this.root.updateBlockedByResize=!1;te.read(()=>{h=window.innerWidth}),n(a,()=>{const p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,u&&u(),u=c_(f,250),ur.hasAnimatedSinceResize&&(ur.hasAnimatedSinceResize=!1,this.nodes.forEach(Hc)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||w_,{onLayoutAnimationStart:v,onLayoutAnimationComplete:m}=c.getProps(),d=!this.targetLayout||!Df(this.targetLayout,p),S=!h&&f;if(this.options.layoutRoot||this.resumeFrom||S||h&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...ul(g,"layout"),onPlay:v,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(u,S)}else h||Hc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),kn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(E_),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Uf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(v_),this.nodes.forEach(zc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(kc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(x_),this.nodes.forEach(y_),this.nodes.forEach(d_),this.nodes.forEach(p_)):this.nodes.forEach(kc),this.clearAllSnapshots();const o=we.now();xe.delta=fn(0,1e3/60,o-xe.timestamp),xe.timestamp=o,xe.isProcessing=!0,Hr.update.process(xe),Hr.preRender.process(xe),Hr.render.process(xe),xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,gl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(__),this.sharedNodes.forEach(T_)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Re(this.snapshot.measuredBox.x)&&!Re(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!Pf(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||ei(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),R_(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:a}=this.options;if(!a)return pe();const o=a.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(C_))){const{scroll:u}=this.root;u&&(on(o.x,u.offset.x),on(o.y,u.offset.y))}return o}removeElementScroll(a){var l;const o=pe();if(Ye(o,a),(l=this.scroll)!=null&&l.wasRoot)return o;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:f}=u;u!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&Ye(o,a),on(o.x,h.offset.x),on(o.y,h.offset.y))}return o}applyTransform(a,o=!1,l){var u,h;const c=l||pe();Ye(c,a);for(let f=0;f<this.path.length;f++){const p=this.path[f];!o&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(on(c.x,-p.scroll.offset.x),on(c.y,-p.scroll.offset.y)),ei(p.latestValues)&&lr(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return ei(this.latestValues)&&lr(c,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),c}removeTransform(a){var l;const o=pe();Ye(o,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!ei(u.latestValues))continue;let h;u.instance&&(no(u.latestValues)&&u.updateSnapshot(),h=pe(),Ye(h,u.measurePageBox())),Dc(o,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,h)}return ei(this.latestValues)&&Dc(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var p;const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=xe.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$g(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ye(this.target,this.layout.layoutBox),vf(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||no(this.parent.latestValues)||_f(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),Tr(this.relativeTargetOrigin,o,l,this.options.layoutAnchor||void 0),Ye(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===xe.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Ye(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;bg(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=pe());const{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(bc(this.prevProjectionDelta.x,this.projectionDelta.x),bc(this.prevProjectionDelta.y,this.projectionDelta.y)),fs(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!Fc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)==null||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ui(),this.projectionDelta=Ui(),this.projectionDeltaWithTransform=Ui()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Ui();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=pe(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,v=p!==g,m=this.getStack(),d=!m||m.members.length<=1,S=!!(v&&!d&&this.options.crossfade===!0&&!this.path.some(A_));this.animationProgress=0;let y;this.mixTargetDelta=_=>{const w=_/1e3;Gc(h.x,a.x,w),Gc(h.y,a.y,w),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Tr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),b_(this.relativeTarget,this.relativeTargetOrigin,f,w),y&&t_(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=pe()),Ye(y,this.relativeTarget)),v&&(this.animationValues=u,i_(u,c,this.latestValues,w,S,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var o,l,c;this.notifyListeners("animationStart"),(o=this.currentAnimation)==null||o.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(kn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=te.update(()=>{ur.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=zi(0)),this.motionValue.jump(0,!1),this.currentAnimation=a_(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),a.onUpdate&&a.onUpdate(u)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(h_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&Ff(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||pe();const h=Re(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const f=Re(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}Ye(o,l),lr(o,u),fs(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new u_),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&Zr("z",a,c,this.animationValues);for(let u=0;u<$r.length;u++)Zr(`rotate${$r[u]}`,a,c,this.animationValues),Zr(`skew${$r[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=cr(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=cr(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ei(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=e_(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),a.transform=h;const{x:f,y:p}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in so){if(u[g]===void 0)continue;const{correct:v,applyTo:m,isCSSVariable:d}=so[g],S=h==="none"?u[g]:v(u[g],c);if(m){const y=m.length;for(let _=0;_<y;_++)a[m[_]]=S}else d?this.options.visualElement.renderState.vars[g]=S:a[g]=S}this.options.layoutId&&(a.pointerEvents=c===this?cr(o==null?void 0:o.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)==null?void 0:o.stop()}),this.root.nodes.forEach(zc),this.root.sharedNodes.clear()}}}function d_(n){n.updateLayout()}function p_(n){var e;const t=((e=n.resumeFrom)==null?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,a=t.source!==n.layout.source;if(r==="size")an(h=>{const f=a?t.measuredBox[h]:t.layoutBox[h],p=Re(f);f.min=i[h].min,f.max=f.min+p});else if(r==="x"||r==="y"){const h=r==="x"?"y":"x";ro(a?t.measuredBox[h]:t.layoutBox[h],i[h])}else Ff(r,t.layoutBox,i)&&an(h=>{const f=a?t.measuredBox[h]:t.layoutBox[h],p=Re(i[h]);f.max=f.min+p,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[h].max=n.relativeTarget[h].min+p)});const o=Ui();fs(o,i,t.layoutBox);const l=Ui();a?fs(l,n.applyTransform(s,!0),t.measuredBox):fs(l,i,t.layoutBox);const c=!Pf(o);let u=!1;if(!n.resumeFrom){const h=n.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const g=n.options.layoutAnchor||void 0,v=pe();Tr(v,t.layoutBox,f.layoutBox,g);const m=pe();Tr(m,i,p.layoutBox,g),Df(v,m)||(u=!0),h.options.layoutRoot&&(n.relativeTarget=m,n.relativeTargetOrigin=v,n.relativeParent=h)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function m_(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function g_(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function __(n){n.clearSnapshot()}function zc(n){n.clearMeasurements()}function v_(n){n.isLayoutDirty=!0,n.updateLayout()}function kc(n){n.isLayoutDirty=!1}function x_(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function y_(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Hc(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function M_(n){n.resolveTargetDelta()}function S_(n){n.calcProjection()}function E_(n){n.resetSkewAndRotation()}function T_(n){n.removeLeadSnapshot()}function Gc(n,t,e){n.translate=ie(t.translate,0,e),n.scale=ie(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function Wc(n,t,e,i){n.min=ie(t.min,e.min,i),n.max=ie(t.max,e.max,i)}function b_(n,t,e,i){Wc(n.x,t.x,e.x,i),Wc(n.y,t.y,e.y,i)}function A_(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const w_={duration:.45,ease:[.4,0,.1,1]},Xc=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),jc=Xc("applewebkit/")&&!Xc("chrome/")?Math.round:Xe;function qc(n){n.min=jc(n.min),n.max=jc(n.max)}function R_(n){qc(n.x),qc(n.y)}function Ff(n,t,e){return n==="position"||n==="preserve-aspect"&&!Kg(Nc(t),Nc(e),.2)}function C_(n){var t;return n!==n.root&&((t=n.scroll)==null?void 0:t.wasRoot)}const P_=Nf({attachResizeListener:(n,t)=>_s(n,"resize",t),measureScroll:()=>{var n,t;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Jr={current:void 0},Of=Nf({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Jr.current){const n=new P_({});n.mount(window),n.setOptions({layoutScroll:!0}),Jr.current=n}return Jr.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Bf=yt.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function D_(n=!0){const t=yt.useContext(Zo);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:s}=t,r=yt.useId();yt.useEffect(()=>{if(n)return s(r)},[n]);const a=yt.useCallback(()=>n&&i&&i(r),[r,i,n]);return!e&&i?[!1,a]:[!0]}const Vf=yt.createContext({strict:!1}),Yc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Kc=!1;function L_(){if(Kc)return;const n={};for(const t in Yc)n[t]={isEnabled:e=>Yc[t].some(i=>!!e[i])};pf(n),Kc=!0}function zf(){return L_(),Mg()}function I_(n){const t=zf();for(const e in n)t[e]={...t[e],...n[e]};pf(t)}const U_=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function br(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||U_.has(n)}let kf=n=>!br(n);function N_(n){typeof n=="function"&&(kf=t=>t.startsWith("on")?!br(t):n(t))}try{N_(require("@emotion/is-prop-valid").default)}catch{}function F_(n,t,e){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||ye(n[s])||(kf(s)||e===!0&&br(s)||!t&&!br(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}const Ur=yt.createContext({});function O_(n,t){if(Ir(n)){const{initial:e,animate:i}=n;return{initial:e===!1||gs(e)?e:void 0,animate:gs(i)?i:void 0}}return n.inherit!==!1?t:{}}function B_(n){const{initial:t,animate:e}=O_(n,yt.useContext(Ur));return yt.useMemo(()=>({initial:t,animate:e}),[$c(t),$c(e)])}function $c(n){return Array.isArray(n)?n.join(" "):n}const El=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Hf(n,t,e){for(const i in t)!ye(t[i])&&!Mf(i,e)&&(n[i]=t[i])}function V_({transformTemplate:n},t){return yt.useMemo(()=>{const e=El();return Ml(e,t,n),Object.assign({},e.vars,e.style)},[t])}function z_(n,t){const e=n.style||{},i={};return Hf(i,e,n),Object.assign(i,V_(n,t)),i}function k_(n,t){const e={},i=z_(n,t);return n.drag&&n.dragListener!==!1&&(e.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(e.tabIndex=0),e.style=i,e}const Gf=()=>({...El(),attrs:{}});function H_(n,t,e,i){const s=yt.useMemo(()=>{const r=Gf();return Sf(r,t,Tf(i),n.transformTemplate,n.style),{...r.attrs,style:{...r.style}}},[t]);if(n.style){const r={};Hf(r,n.style,n),s.style={...r,...s.style}}return s}const G_=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Tl(n){return typeof n!="string"||n.includes("-")?!1:!!(G_.indexOf(n)>-1||/[A-Z]/u.test(n))}function W_(n,t,e,{latestValues:i},s,r=!1,a){const l=(a??Tl(n)?H_:k_)(t,i,s,n),c=F_(t,typeof n=="string",r),u=n!==yt.Fragment?{...c,...l,ref:e}:{},{children:h}=t,f=yt.useMemo(()=>ye(h)?h.get():h,[h]);return yt.createElement(n,{...u,children:f})}function X_({scrapeMotionValuesFromProps:n,createRenderState:t},e,i,s){return{latestValues:j_(e,i,s,n),renderState:t()}}function j_(n,t,e,i){const s={},r=i(n,{});for(const f in r)s[f]=cr(r[f]);let{initial:a,animate:o}=n;const l=Ir(n),c=ff(n);t&&c&&!l&&n.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let u=e?e.initial===!1:!1;u=u||a===!1;const h=u?o:a;if(h&&typeof h!="boolean"&&!Lr(h)){const f=Array.isArray(h)?h:[h];for(let p=0;p<f.length;p++){const g=fl(n,f[p]);if(g){const{transitionEnd:v,transition:m,...d}=g;for(const S in d){let y=d[S];if(Array.isArray(y)){const _=u?y.length-1:0;y=y[_]}y!==null&&(s[S]=y)}for(const S in v)s[S]=v[S]}}}return s}const Wf=n=>(t,e)=>{const i=yt.useContext(Ur),s=yt.useContext(Zo),r=()=>X_(n,t,i,s);return e?r():Gd(r)},q_=Wf({scrapeMotionValuesFromProps:Sl,createRenderState:El}),Y_=Wf({scrapeMotionValuesFromProps:bf,createRenderState:Gf}),K_=Symbol.for("motionComponentSymbol");function $_(n,t,e){const i=yt.useRef(e);yt.useInsertionEffect(()=>{i.current=e});const s=yt.useRef(null);return yt.useCallback(r=>{var o;r&&((o=n.onMount)==null||o.call(n,r));const a=i.current;if(typeof a=="function")if(r){const l=a(r);typeof l=="function"&&(s.current=l)}else s.current?(s.current(),s.current=null):a(r);else a&&(a.current=r);t&&(r?t.mount(r):t.unmount())},[t])}const Xf=yt.createContext({});function Pi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Z_(n,t,e,i,s,r){var y,_;const{visualElement:a}=yt.useContext(Ur),o=yt.useContext(Vf),l=yt.useContext(Zo),c=yt.useContext(Bf),u=c.reducedMotion,h=c.skipAnimations,f=yt.useRef(null),p=yt.useRef(!1);i=i||o.renderer,!f.current&&i&&(f.current=i(n,{visualState:t,parent:a,props:e,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:h,isSVG:r}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const g=f.current,v=yt.useContext(Xf);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&J_(f.current,e,s,v);const m=yt.useRef(!1);yt.useInsertionEffect(()=>{g&&m.current&&g.update(e,l)});const d=e[Qh],S=yt.useRef(!!d&&typeof window<"u"&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,d))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,d)));return Xd(()=>{p.current=!0,g&&(m.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),yt.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)==null||w.call(window,d)}),S.current=!1),g.enteringChildren=void 0)}),g}function J_(n,t,e,i){const{layoutId:s,layout:r,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:h}=t;n.projection=new e(n.latestValues,t["data-framer-portal-id"]?void 0:jf(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!a||o&&Pi(o),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function jf(n){if(n)return n.options.allowProjection!==!1?n.projection:jf(n.parent)}function Qr(n,{forwardMotionProps:t=!1,type:e}={},i,s){i&&I_(i);const r=e?e==="svg":Tl(n),a=r?Y_:q_;function o(c,u){let h;const f={...yt.useContext(Bf),...c,layoutId:Q_(c)},{isStatic:p}=f,g=B_(c),v=a(c,p);if(!p&&typeof window<"u"){tv();const m=ev(f);h=m.MeasureLayout,g.visualElement=Z_(n,v,f,s,m.ProjectionNode,r)}return X.jsxs(Ur.Provider,{value:g,children:[h&&g.visualElement?X.jsx(h,{visualElement:g.visualElement,...f}):null,W_(n,c,$_(v,g.visualElement,u),v,p,t,r)]})}o.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const l=yt.forwardRef(o);return l[K_]=n,l}function Q_({layoutId:n}){const t=yt.useContext(hh).id;return t&&n!==void 0?t+"-"+n:n}function tv(n,t){yt.useContext(Vf).strict}function ev(n){const t=zf(),{drag:e,layout:i}=t;if(!e&&!i)return{};const s={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(n)||i!=null&&i.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function nv(n,t){if(typeof Proxy>"u")return Qr;const e=new Map,i=(r,a)=>Qr(r,a,n,t),s=(r,a)=>i(r,a);return new Proxy(s,{get:(r,a)=>a==="create"?i:(e.has(a)||e.set(a,Qr(a,void 0,n,t)),e.get(a))})}const iv=(n,t)=>t.isSVG??Tl(n)?new Bg(t):new Lg(t,{allowProjection:n!==yt.Fragment});class sv extends Wn{constructor(t){super(t),t.animationState||(t.animationState=Gg(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lr(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let rv=0;class av extends Wn{constructor(){super(...arguments),this.id=rv++,this.isExitComplete=!1}update(){var r;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;if(t&&i===!1){if(this.isExitComplete){const{initial:a,custom:o}=this.node.getProps();if(typeof a=="string"){const l=fi(this.node,a,o);if(l){const{transition:c,transitionEnd:u,...h}=l;for(const f in h)(r=this.node.getValue(f))==null||r.jump(h[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!t);e&&!t&&s.then(()=>{this.isExitComplete=!0,e(this.id)})}mount(){const{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const ov={animation:{Feature:sv},exit:{Feature:av}};function Ss(n){return{point:{x:n.pageX,y:n.pageY}}}const lv=n=>t=>_l(t)&&n(t,Ss(t));function ds(n,t,e,i){return _s(n,t,lv(e),i)}const qf=({current:n})=>n?n.ownerDocument.defaultView:null,Zc=(n,t)=>Math.abs(n-t);function cv(n,t){const e=Zc(n.x,t.x),i=Zc(n.y,t.y);return Math.sqrt(e**2+i**2)}const Jc=new Set(["auto","scroll"]);class Yf{constructor(t,e,{transformPagePoint:i,contextWindow:s=window,dragSnapToOrigin:r=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ls(this.lastRawMoveEventInfo,this.transformPagePoint));const p=ta(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,v=cv(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!v)return;const{point:m}=p,{timestamp:d}=xe;this.history.push({...m,timestamp:d});const{onStart:S,onMove:y}=this.handlers;g||(S&&S(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=Ls(g,this.transformPagePoint),te.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:v,onSessionEnd:m,resumeAnimation:d}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&d&&d(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=ta(p.type==="pointercancel"?this.lastMoveEventInfo:Ls(g,this.transformPagePoint),this.history);this.startEvent&&v&&v(p,S),m&&m(p,S)},!_l(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=s||window;const l=Ss(t),c=Ls(l,this.transformPagePoint),{point:u}=c,{timestamp:h}=xe;this.history=[{...u,timestamp:h}];const{onSessionStart:f}=e;f&&f(t,ta(c,this.history)),this.removeListeners=xs(ds(this.contextWindow,"pointermove",this.handlePointerMove),ds(this.contextWindow,"pointerup",this.handlePointerUp),ds(this.contextWindow,"pointercancel",this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(t){let e=t.parentElement;for(;e;){const i=getComputedStyle(e);(Jc.has(i.overflowX)||Jc.has(i.overflowY))&&this.scrollPositions.set(e,{x:e.scrollLeft,y:e.scrollTop}),e=e.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const e=this.scrollPositions.get(t);if(!e)return;const i=t===window,s=i?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},r={x:s.x-e.x,y:s.y-e.y};r.x===0&&r.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(t,s),te.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),kn(this.updatePoint)}}function Ls(n,t){return t?{point:t(n.point)}:n}function Qc(n,t){return{x:n.x-t.x,y:n.y-t.y}}function ta({point:n},t){return{point:n,delta:Qc(n,Kf(t)),offset:Qc(n,uv(t)),velocity:hv(t,.1)}}function uv(n){return n[0]}function Kf(n){return n[n.length-1]}function hv(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,i=null;const s=Kf(n);for(;e>=0&&(i=n[e],!(s.timestamp-i.timestamp>Be(t)));)e--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&s.timestamp-i.timestamp>Be(t)*2&&(i=n[1]);const r=We(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const a={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function fv(n,{min:t,max:e},i){return t!==void 0&&n<t?n=i?ie(t,n,i.min):Math.max(n,t):e!==void 0&&n>e&&(n=i?ie(e,n,i.max):Math.min(n,e)),n}function tu(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function dv(n,{top:t,left:e,bottom:i,right:s}){return{x:tu(n.x,e,s),y:tu(n.y,t,i)}}function eu(n,t){let e=t.min-n.min,i=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,i]=[i,e]),{min:e,max:i}}function pv(n,t){return{x:eu(n.x,t.x),y:eu(n.y,t.y)}}function mv(n,t){let e=.5;const i=Re(n),s=Re(t);return s>i?e=ps(t.min,t.max-i,n.min):i>s&&(e=ps(n.min,n.max-s,t.min)),fn(0,1,e)}function gv(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const ao=.35;function _v(n=ao){return n===!1?n=0:n===!0&&(n=ao),{x:nu(n,"left","right"),y:nu(n,"top","bottom")}}function nu(n,t,e){return{min:iu(n,t),max:iu(n,e)}}function iu(n,t){return typeof n=="number"?n:n[t]||0}const vv=new WeakMap;class xv{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:e=!1,distanceThreshold:i}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const r=h=>{e&&this.snapToCursor(Ss(h).point),this.stopAnimation()},a=(h,f)=>{const{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Zm(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),an(d=>{let S=this.getAxisMotionValue(d).get()||0;if(un.test(S)){const{projection:y}=this.visualElement;if(y&&y.layout){const _=y.layout.layoutBox[d];_&&(S=Re(_)*(parseFloat(S)/100))}}this.originPoint[d]=S}),v&&te.update(()=>v(h,f),!1,!0),Za(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},o=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:d}=f;if(g&&this.currentDirection===null){this.currentDirection=Mv(d),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,d),this.updateAxis("y",f.point,d),this.visualElement.render(),m&&te.update(()=>m(h,f),!1,!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new Yf(t,{onSessionStart:r,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:qf(this.visualElement),element:this.visualElement.current})}stop(t,e){const i=t||this.latestPointerEvent,s=e||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!s||!i)return;const{velocity:a}=s;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&te.postRender(()=>o(i,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,e,i){const{drag:s}=this.getProps();if(!i||!Is(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let a=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(a=fv(a,this.constraints[t],this.elastic[t])),r.set(a)}resolveConstraints(){var r;const{dragConstraints:t,dragElastic:e}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,s=this.constraints;t&&Pi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=dv(i.layoutBox,t):this.constraints=!1,this.elastic=_v(e),s!==this.constraints&&!Pi(t)&&i&&this.constraints&&!this.hasMutatedConstraints&&an(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=gv(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Pi(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=Ag(i,s.root,this.visualElement.getTransformPagePoint());let a=pv(s.layout.layoutBox,r);if(e){const o=e(Eg(a));this.hasMutatedConstraints=!!o,o&&(a=gf(o))}return a}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=an(u=>{if(!Is(u,e,this.currentDirection))return;let h=l&&l[u]||{};(a===!0||a===u)&&(h={min:0,max:0});const f=s?200:1e6,p=s?40:1e7,g={type:"inertia",velocity:i?t[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(o)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t);return Za(this.visualElement,t),i.start(hl(t,i,0,e,this.visualElement,!1))}stopAnimation(){an(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[e];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){an(e=>{const{drag:i}=this.getProps();if(!Is(e,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(e);if(s&&s.layout){const{min:a,max:o}=s.layout.layoutBox[e],l=r.get()||0;r.set(t[e]-ie(a,o,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!Pi(e)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};an(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();s[a]=mv({min:l,max:l},this.constraints[a])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),an(a=>{if(!Is(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(ie(l,c,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;vv.set(this.visualElement,this);const t=this.visualElement.current,e=ds(t,"pointerdown",c=>{const{drag:u,dragListener:h=!0}=this.getProps(),f=c.target,p=f!==t&&ig(f);u&&h&&!p&&this.start(c)});let i;const s=()=>{const{dragConstraints:c}=this.getProps();Pi(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=yv(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,a=r.addEventListener("measure",s);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),te.read(s);const o=_s(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(an(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=c[h].translate,f.set(f.get()+c[h].translate))}),this.visualElement.render())}));return()=>{o(),e(),a(),l&&l(),i&&i()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:a=ao,dragMomentum:o=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:a,dragMomentum:o}}}function su(n){let t=!0;return()=>{if(t){t=!1;return}n()}}function yv(n,t,e){const i=dc(n,su(e)),s=dc(t,su(e));return()=>{i(),s()}}function Is(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function Mv(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class Sv extends Wn{constructor(t){super(t),this.removeGroupControls=Xe,this.removeListeners=Xe,this.controls=new xv(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xe}update(){const{dragControls:t}=this.node.getProps(),{dragControls:e}=this.node.prevProps||{};t!==e&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ea=n=>(t,e)=>{n&&te.update(()=>n(t,e),!1,!0)};class Ev extends Wn{constructor(){super(...arguments),this.removePointerDownListener=Xe}onPointerDown(t){this.session=new Yf(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qf(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ea(t),onStart:ea(e),onMove:ea(i),onEnd:(r,a)=>{delete this.session,s&&te.postRender(()=>s(r,a))}}}mount(){this.removePointerDownListener=ds(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let na=!1;class Tv extends yt.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;r&&(e.group&&e.group.add(r),i&&i.register&&s&&i.register(r),na&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ur.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:s,isPresent:r}=this.props,{projection:a}=i;return a&&(a.isPresent=r,t.layoutDependency!==e&&a.setOptions({...a.options,layoutDependency:e}),na=!0,s||t.layoutDependency!==e||e===void 0||t.isPresent!==r?a.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?a.promote():a.relegate()||te.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:e}=this.props,{projection:i}=t;i&&(i.options.layoutAnchor=e,i.root.didUpdate(),gl.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:s}=t;na=!0,s&&(s.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function $f(n){const[t,e]=D_(),i=yt.useContext(hh);return X.jsx(Tv,{...n,layoutGroup:i,switchLayoutGroup:yt.useContext(Xf),isPresent:t,safeToRemove:e})}const bv={pan:{Feature:Ev},drag:{Feature:Sv,ProjectionNode:Of,MeasureLayout:$f}};function ru(n,t,e){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",e==="Start");const s="onHover"+e,r=i[s];r&&te.postRender(()=>r(t,Ss(t)))}class Av extends Wn{mount(){const{current:t}=this.node;t&&(this.unmount=Qm(t,(e,i)=>(ru(this.node,i,"Start"),s=>ru(this.node,s,"End"))))}unmount(){}}class wv extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xs(_s(this.node.current,"focus",()=>this.onFocus()),_s(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function au(n,t,e){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",e==="Start");const s="onTap"+(e==="End"?"":e),r=i[s];r&&te.postRender(()=>r(t,Ss(t)))}class Rv extends Wn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:e,propagate:i}=this.node.props;this.unmount=rg(t,(s,r)=>(au(this.node,r,"Start"),(a,{success:o})=>au(this.node,a,o?"End":"Cancel")),{useGlobalTarget:e,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const oo=new WeakMap,ia=new WeakMap,Cv=n=>{const t=oo.get(n.target);t&&t(n)},Pv=n=>{n.forEach(Cv)};function Dv({root:n,...t}){const e=n||document;ia.has(e)||ia.set(e,{});const i=ia.get(e),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(Pv,{root:n,...t})),i[s]}function Lv(n,t,e){const i=Dv(t);return oo.set(n,e),i.observe(n),()=>{oo.delete(n),i.unobserve(n)}}const Iv={some:0,all:1};class Uv extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:s="some",once:r}=t,a={root:e?e.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Iv[s]},o=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,r&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=u?h:f;p&&p(c)};this.stopObserver=Lv(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(Nv(t,e))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Nv({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const Fv={inView:{Feature:Uv},tap:{Feature:Rv},focus:{Feature:wv},hover:{Feature:Av}},Ov={layout:{ProjectionNode:Of,MeasureLayout:$f}},Bv={...ov,...Fv,...bv,...Ov},Mn=nv(Bv,iv),Vv={some:0,all:1};function zv(n,t,{root:e,margin:i,amount:s="some"}={}){const r=ml(n),a=new WeakMap,o=c=>{c.forEach(u=>{const h=a.get(u.target);if(u.isIntersecting!==!!h)if(u.isIntersecting){const f=t(u.target,u);typeof f=="function"?a.set(u.target,f):l.unobserve(u.target)}else typeof h=="function"&&(h(u),a.delete(u.target))})},l=new IntersectionObserver(o,{root:e,rootMargin:i,threshold:typeof s=="number"?s:Vv[s]});return r.forEach(c=>l.observe(c)),()=>l.disconnect()}function kv(n,{root:t,margin:e,amount:i,once:s=!1,initial:r=!1}={}){const[a,o]=yt.useState(r);return yt.useEffect(()=>{if(!n.current||s&&a)return;const l=()=>(o(!0),s?void 0:()=>o(!1)),c={root:t&&t.current||void 0,margin:e,amount:i};return zv(n.current,l,c)},[t,n,e,s,i]),a}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Gv=Pr("languages",Hv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Zf=Pr("leaf",Wv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]],jv=Pr("message-square-text",Xv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Yv=Pr("shield-check",qv);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="174",Kv=0,ou=1,$v=2,Jf=1,Zv=2,Sn=3,Hn=0,Le=1,En=2,Bn=0,Fi=1,lu=2,cu=3,uu=4,Jv=5,ri=100,Qv=101,tx=102,ex=103,nx=104,ix=200,sx=201,rx=202,ax=203,lo=204,co=205,ox=206,lx=207,cx=208,ux=209,hx=210,fx=211,dx=212,px=213,mx=214,uo=0,ho=1,fo=2,ki=3,po=4,mo=5,go=6,_o=7,Qf=0,gx=1,_x=2,Vn=0,vx=1,xx=2,yx=3,Mx=4,Sx=5,Ex=6,Tx=7,td=300,Hi=301,Gi=302,vo=303,xo=304,Nr=306,yo=1e3,ci=1001,Mo=1002,sn=1003,bx=1004,Us=1005,cn=1006,sa=1007,ui=1008,wn=1009,ed=1010,nd=1011,vs=1012,Al=1013,di=1014,Tn=1015,Es=1016,wl=1017,Rl=1018,Wi=1020,id=35902,sd=1021,rd=1022,tn=1023,ad=1024,od=1025,Oi=1026,Xi=1027,ld=1028,Cl=1029,cd=1030,Pl=1031,Dl=1033,hr=33776,fr=33777,dr=33778,pr=33779,So=35840,Eo=35841,To=35842,bo=35843,Ao=36196,wo=37492,Ro=37496,Co=37808,Po=37809,Do=37810,Lo=37811,Io=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,Vo=37818,zo=37819,ko=37820,Ho=37821,mr=36492,Go=36494,Wo=36495,ud=36283,Xo=36284,jo=36285,qo=36286,Ax=3200,wx=3201,hd=0,Rx=1,Fn="",Ge="srgb",ji="srgb-linear",Ar="linear",Zt="srgb",gi=7680,hu=519,Cx=512,Px=513,Dx=514,fd=515,Lx=516,Ix=517,Ux=518,Nx=519,fu=35044,du="300 es",bn=2e3,wr=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,Yo=180/Math.PI;function Ts(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function Ft(n,t,e){return Math.max(t,Math.min(e,n))}function Fx(n,t){return(n%t+t)%t}function aa(n,t,e){return(1-e)*n+e*t}function ns(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,i,s,r,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],S=s[1],y=s[4],_=s[7],w=s[2],A=s[5],C=s[8];return r[0]=a*v+o*S+l*w,r[3]=a*m+o*y+l*A,r[6]=a*d+o*_+l*C,r[1]=c*v+u*S+h*w,r[4]=c*m+u*y+h*A,r[7]=c*d+u*_+h*C,r[2]=f*v+p*S+g*w,r[5]=f*m+p*y+g*A,r[8]=f*d+p*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Lt;function dd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ox(){const n=Rr("canvas");return n.style.display="block",n}const pu={};function ni(n){n in pu||(pu[n]=!0,console.warn(n))}function Bx(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Vx(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zx(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mu=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kx(){const n={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ji]:{primaries:t,whitePoint:i,transfer:Ar,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:Zt,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}const jt=kx();function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Hx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Rr("canvas")),_i.width=t.width,_i.height=t.height;const i=_i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_i}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(An(e[i]/255)*255):e[i]=An(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gx=0;class Ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(la(s[a].image)):r.push(la(s[a]))}else r=la(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wx=0;class Ie extends Zi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=ci,s=ci,r=cn,a=ui,o=tn,l=wn,c=Ie.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ts(),this.name="",this.source=new Ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=td;Ie.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,i=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(p+1)/2,w=(d+1)/2,A=(u+f)/4,C=(h+v)/4,R=(g+m)/4;return y>_&&y>w?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=C/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=R/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=R/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xx extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ie(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ll(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Xx{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pd extends Ie{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jx extends Ie{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*v,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,d*S);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const _=o*S;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new N,_u=new bs;class As{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Fs.subVectors(this.max,is),vi.subVectors(t.a,is),xi.subVectors(t.b,is),yi.subVectors(t.c,is),Rn.subVectors(xi,vi),Cn.subVectors(yi,xi),Yn.subVectors(vi,yi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Yn.z,Yn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Yn.z,0,-Yn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Yn.y,Yn.x,0];return!ua(e,vi,xi,yi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,vi,xi,yi,Fs))?!1:(Os.crossVectors(Rn,Cn),e=[Os.x,Os.y,Os.z],ua(e,vi,xi,yi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new N,new N,new N,new N,new N,new N,new N,new N],Ke=new N,Ns=new As,vi=new N,xi=new N,yi=new N,Rn=new N,Cn=new N,Yn=new N,is=new N,Fs=new N,Os=new N,Kn=new N;function ua(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Kn.fromArray(n,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),u=i.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qx=new As,ss=new N,ha=new N;class Fr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ss,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(ha)),this.expandByPoint(ss.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new N,fa=new N,Bs=new N,Pn=new N,da=new N,Vs=new N,pa=new N;class md{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fa.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(fa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=Pn.dot(this.direction),l=-Pn.dot(Bs),c=Pn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fa).addScaledVector(Bs,f),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const i=gn.dot(this.direction),s=gn.dot(gn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,i,s,r){da.subVectors(e,t),Vs.subVectors(i,t),pa.crossVectors(da,Vs);let a=this.direction.dot(pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(Vs.crossVectors(Pn,Vs));if(l<0)return null;const c=o*this.direction.dot(da.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(pa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,s,r,a,o,l,c,u,h,f,p,g,v,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,p,g,v,m)}set(t,e,i,s,r,a,o,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yx,t,Kx)}lookAt(t,e,i){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Dn.crossVectors(i,Ne),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Dn.crossVectors(i,Ne)),Dn.normalize(),zs.crossVectors(Ne,Dn),s[0]=Dn.x,s[4]=zs.x,s[8]=Ne.x,s[1]=Dn.y,s[5]=zs.y,s[9]=Ne.y,s[2]=Dn.z,s[6]=zs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],S=i[3],y=i[7],_=i[11],w=i[15],A=s[0],C=s[4],R=s[8],T=s[12],x=s[1],P=s[5],F=s[9],B=s[13],H=s[2],Y=s[6],G=s[10],tt=s[14],z=s[3],et=s[7],st=s[11],_t=s[15];return r[0]=a*A+o*x+l*H+c*z,r[4]=a*C+o*P+l*Y+c*et,r[8]=a*R+o*F+l*G+c*st,r[12]=a*T+o*B+l*tt+c*_t,r[1]=u*A+h*x+f*H+p*z,r[5]=u*C+h*P+f*Y+p*et,r[9]=u*R+h*F+f*G+p*st,r[13]=u*T+h*B+f*tt+p*_t,r[2]=g*A+v*x+m*H+d*z,r[6]=g*C+v*P+m*Y+d*et,r[10]=g*R+v*F+m*G+d*st,r[14]=g*T+v*B+m*tt+d*_t,r[3]=S*A+y*x+_*H+w*z,r[7]=S*C+y*P+_*Y+w*et,r[11]=S*R+y*F+_*G+w*st,r[15]=S*T+y*B+_*tt+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*p-i*l*p)+v*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],S=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,y=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*d+a*h*d,w=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,A=e*S+i*y+s*_+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(v*f*r-h*m*r-v*s*p+i*m*p+h*s*d-i*f*d)*C,t[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*d+i*l*d)*C,t[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*p-i*l*p)*C,t[4]=y*C,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*C,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*C,t[8]=_*C,t[9]=(g*h*r-u*v*r-g*i*p+e*v*p+u*i*d-e*h*d)*C,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*d+e*o*d)*C,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*p-e*o*p)*C,t[12]=w*C,t[13]=(u*v*s-g*h*s+g*i*f-e*v*f-u*i*m+e*h*m)*C,t[14]=(g*o*s-a*v*s-g*i*l+e*v*l+a*i*m-e*o*m)*C,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*f+e*o*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,v=a*u,m=a*h,d=o*h,S=l*c,y=l*u,_=l*h,w=i.x,A=i.y,C=i.z;return s[0]=(1-(v+d))*w,s[1]=(p+_)*w,s[2]=(g-y)*w,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(f+d))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(m-S)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);const c=1/r,u=1/a,h=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=h,$e.elements[9]*=h,$e.elements[10]*=h,e.setFromRotationMatrix($e),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=bn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(o===bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=bn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(a-r),f=(e+t)*c,p=(i+s)*u;let g,v;if(o===bn)g=(a+r)*h,v=-2*h;else if(o===wr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mi=new N,$e=new re,Yx=new N(0,0,0),Kx=new N(1,1,1),Dn=new N,zs=new N,Ne=new N,vu=new re,xu=new bs;class dn{constructor(t=0,e=0,i=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $x=0;const yu=new N,Si=new bs,_n=new re,ks=new N,rs=new N,Zx=new N,Jx=new bs,Mu=new N(1,0,0),Su=new N(0,1,0),Eu=new N(0,0,1),Tu={type:"added"},Qx={type:"removed"},Ei={type:"childadded",child:null},ma={type:"childremoved",child:null};class Ce extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new N,e=new dn,i=new bs,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Lt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ks.copy(t):ks.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(rs,ks,this.up):_n.lookAt(ks,rs,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(_n),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qx),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new N(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new N,vn=new N,ga=new N,xn=new N,Ti=new N,bi=new N,bu=new N,_a=new N,va=new N,xa=new N,ya=new Jt,Ma=new Jt,Sa=new Jt;class Qe{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ze.subVectors(s,e),vn.subVectors(i,e),ga.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(vn),l=Ze.dot(ga),c=vn.dot(vn),u=vn.dot(ga),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ya.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),ya.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,i),Sa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ya,r.x),a.addScaledVector(Ma,r.y),a.addScaledVector(Sa,r.z),a}static isFrontFacing(t,e,i,s){return Ze.subVectors(i,e),vn.subVectors(t,e),Ze.cross(vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ze.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ti.subVectors(s,i),bi.subVectors(r,i),_a.subVectors(t,i);const l=Ti.dot(_a),c=bi.dot(_a);if(l<=0&&c<=0)return e.copy(i);va.subVectors(t,s);const u=Ti.dot(va),h=bi.dot(va);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ti,a);xa.subVectors(t,r);const p=Ti.dot(xa),g=bi.dot(xa);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(bi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return bu.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(bu,o);const d=1/(m+v+f);return a=v*d,o=f*d,e.copy(i).addScaledVector(Ti,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ea(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Fx(t,1),e=Ft(e,0,1),i=Ft(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ea(a,r,t+1/3),this.g=Ea(a,r,t),this.b=Ea(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const i=_d[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return jt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ft(Ee.r*255,0,255))*65536+Math.round(Ft(Ee.g*255,0,255))*256+Math.round(Ft(Ee.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ge){jt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,s=Ee.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Hs);const i=aa(Ln.h,Hs.h,e),s=aa(Ln.s,Hs.s,e),r=aa(Ln.l,Hs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Wt;Wt.NAMES=_d;let t0=0;class Ji extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Fi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lo&&(i.blendSrc=this.blendSrc),this.blendDst!==co&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Il extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new N,Gs=new Ot;let e0=0;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ns(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fu&&(t.usage=this.usage),t}}class vd extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xd extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let n0=0;const He=new re,Ta=new Ce,Ai=new N,Fe=new As,as=new As,_e=new N;class rn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?xd:vd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Lt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,i){return He.makeTranslation(t,e,i),this.applyMatrix4(He),this}scale(t,e,i){return He.makeScale(t,e,i),this.applyMatrix4(He),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Fe.min,as.min),Fe.expandByPoint(_e),_e.addVectors(Fe.max,as.max),Fe.expandByPoint(_e)):(Fe.expandByPoint(as.min),Fe.expandByPoint(as.max))}Fe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_e.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),_e.add(Ai)),s=Math.max(s,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new N,l[R]=new N;const c=new N,u=new N,h=new N,f=new Ot,p=new Ot,g=new Ot,v=new N,m=new N;function d(R,T,x){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[R].add(v),o[T].add(v),o[x].add(v),l[R].add(m),l[T].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,T=S.length;R<T;++R){const x=S[R],P=x.start,F=x.count;for(let B=P,H=P+F;B<H;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new N,_=new N,w=new N,A=new N;function C(R){w.fromBufferAttribute(s,R),A.copy(w);const T=o[R];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),_.crossVectors(A,T);const P=_.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,T=S.length;R<T;++R){const x=S[R],P=x.start,F=x.count;for(let B=P,H=P+F;B<H;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new re,$n=new md,Ws=new Fr,wu=new N,Xs=new N,js=new N,qs=new N,ba=new N,Ys=new N,Ru=new N,Ks=new N;class en extends Ce{constructor(t=new rn,e=new Il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ba.fromBufferAttribute(h,t),a?Ys.addScaledVector(ba,u):Ys.addScaledVector(ba.sub(e),u))}e.add(Ys)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Ws.containsPoint($n.origin)===!1&&($n.intersectSphere(Ws,wu)===null||$n.origin.distanceToSquared(wu)>(t.far-t.near)**2))&&(Au.copy(r).invert(),$n.copy(t.ray).applyMatrix4(Au),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,w=y;_<w;_+=3){const A=o.getX(_),C=o.getX(_+1),R=o.getX(_+2);s=$s(this,d,t,i,c,u,h,A,C,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=$s(this,a,t,i,c,u,h,S,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,w=y;_<w;_+=3){const A=_,C=_+1,R=_+2;s=$s(this,d,t,i,c,u,h,A,C,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=m,y=m+1,_=m+2;s=$s(this,a,t,i,c,u,h,S,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function i0(n,t,e,i,s,r,a,o){let l;if(t.side===Le?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Hn,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:n}}function $s(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Xs),n.getVertexPosition(l,js),n.getVertexPosition(c,qs);const u=i0(n,t,e,i,Xs,js,qs,Ru);if(u){const h=new N;Qe.getBarycoord(Ru,Xs,js,qs,h),s&&(u.uv=Qe.getInterpolatedAttribute(s,o,l,c,h,new Ot)),r&&(u.uv1=Qe.getInterpolatedAttribute(r,o,l,c,h,new Ot)),a&&(u.normal=Qe.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Qe.getNormal(Xs,js,qs,f.normal),u.face=f,u.barycoord=h}return u}class ws extends rn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(h,2));function g(v,m,d,S,y,_,w,A,C,R,T){const x=_/C,P=w/R,F=_/2,B=w/2,H=A/2,Y=C+1,G=R+1;let tt=0,z=0;const et=new N;for(let st=0;st<G;st++){const _t=st*P-B;for(let Nt=0;Nt<Y;Nt++){const Qt=Nt*x-F;et[v]=Qt*S,et[m]=_t*y,et[d]=H,c.push(et.x,et.y,et.z),et[v]=0,et[m]=0,et[d]=A>0?1:-1,u.push(et.x,et.y,et.z),h.push(Nt/C),h.push(1-st/R),tt+=1}}for(let st=0;st<R;st++)for(let _t=0;_t<C;_t++){const Nt=f+_t+Y*st,Qt=f+_t+Y*(st+1),q=f+(_t+1)+Y*(st+1),nt=f+(_t+1)+Y*st;l.push(Nt,Qt,nt),l.push(Qt,q,nt),z+=6}o.addGroup(p,z,T),p+=z,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=qi(n[e]);for(const s in i)t[s]=i[s]}return t}function s0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const r0={clone:qi,merge:Ae};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Md extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new N,Cu=new Ot,Pu=new Ot;class Oe extends Md{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Pu),e.subVectors(Pu,Cu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ri=1;class l0 extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(wi,Ri,t,e);s.layers=this.layers,this.add(s);const r=new Oe(wi,Ri,t,e);r.layers=this.layers,this.add(r);const a=new Oe(wi,Ri,t,e);a.layers=this.layers,this.add(a);const o=new Oe(wi,Ri,t,e);o.layers=this.layers,this.add(o);const l=new Oe(wi,Ri,t,e);l.layers=this.layers,this.add(l);const c=new Oe(wi,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sd extends Ie{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c0 extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ws(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:Bn});r.uniforms.tEquirect.value=e;const a=new en(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=cn),new l0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Zs extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class h0 extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wa=new N,f0=new N,d0=new Lt;class ii{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wa.subVectors(i,e).cross(f0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||d0.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Fr,Js=new N;class Ul{constructor(t=new ii,e=new ii,i=new ii,s=new ii,r=new ii,a=new ii){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],S=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-p,_-d).normalize(),i[1].setComponents(l+r,f+c,m+p,_+d).normalize(),i[2].setComponents(l+a,f+u,m+g,_+S).normalize(),i[3].setComponents(l-a,f-u,m-g,_-S).normalize(),i[4].setComponents(l-o,f-h,m-v,_-y).normalize(),e===bn)i[5].setComponents(l+o,f+h,m+v,_+y).normalize();else if(e===wr)i[5].setComponents(o,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ed extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Du=new re,Ko=new md,Qs=new Fr,tr=new N;class p0 extends Ce{constructor(t=new rn,e=new Ed){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Du.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(Du);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);tr.fromBufferAttribute(h,m),Lu(tr,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)tr.fromBufferAttribute(h,g),Lu(tr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lu(n,t,e,i,s,r,a){const o=Ko.distanceSqToPoint(n);if(o<e){const l=new N;Ko.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Td extends Ie{constructor(t,e,i,s,r,a,o,l,c,u=Oi){if(u!==Oi&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Oi&&(i=di),i===void 0&&u===Xi&&(i=Wi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nl extends rn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const v=[],m=i/2;let d=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(p,2));function S(){const _=new N,w=new N;let A=0;const C=(e-t)/i;for(let R=0;R<=r;R++){const T=[],x=R/r,P=x*(e-t)+t;for(let F=0;F<=s;F++){const B=F/s,H=B*l+o,Y=Math.sin(H),G=Math.cos(H);w.x=P*Y,w.y=-x*i+m,w.z=P*G,h.push(w.x,w.y,w.z),_.set(Y,C,G).normalize(),f.push(_.x,_.y,_.z),p.push(B,1-x),T.push(g++)}v.push(T)}for(let R=0;R<s;R++)for(let T=0;T<r;T++){const x=v[T][R],P=v[T+1][R],F=v[T+1][R+1],B=v[T][R+1];(t>0||T!==0)&&(u.push(x,P,B),A+=3),(e>0||T!==r-1)&&(u.push(P,F,B),A+=3)}c.addGroup(d,A,0),d+=A}function y(_){const w=g,A=new Ot,C=new N;let R=0;const T=_===!0?t:e,x=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const H=F/s*l+o,Y=Math.cos(H),G=Math.sin(H);C.x=T*G,C.y=m*x,C.z=T*Y,h.push(C.x,C.y,C.z),f.push(0,x,0),A.x=Y*.5+.5,A.y=G*.5*x+.5,p.push(A.x,A.y),g++}for(let F=0;F<s;F++){const B=w+F,H=P+F;_===!0?u.push(H,H+1,B):u.push(H+1,H,B),R+=3}c.addGroup(d,R,_===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fl extends Nl{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Or extends rn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new N,_=new N,w=new N;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],_),p(e[A+2],w),l(y,_,w,S)}function l(S,y,_,w){const A=w+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const T=S.clone().lerp(_,R/A),x=y.clone().lerp(_,R/A),P=A-R;for(let F=0;F<=P;F++)F===0&&R===A?C[R][F]=T:C[R][F]=T.clone().lerp(x,F/P)}for(let R=0;R<A;R++)for(let T=0;T<2*(A-R)-1;T++){const x=Math.floor(T/2);T%2===0?(f(C[R][x+1]),f(C[R+1][x]),f(C[R][x])):(f(C[R][x+1]),f(C[R+1][x+1]),f(C[R+1][x]))}}function c(S){const y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(S),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const S=new N;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const _=m(S)/2/Math.PI+.5,w=d(S)/Math.PI+.5;a.push(_,1-w)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const y=a[S+0],_=a[S+2],w=a[S+4],A=Math.max(y,_,w),C=Math.min(y,_,w);A>.9&&C<.1&&(y<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,y){const _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const S=new N,y=new N,_=new N,w=new N,A=new Ot,C=new Ot,R=new Ot;for(let T=0,x=0;T<r.length;T+=9,x+=6){S.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),A.set(a[x+0],a[x+1]),C.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),w.copy(S).add(y).add(_).divideScalar(3);const P=m(w);v(A,x+0,S,P),v(C,x+2,y,P),v(R,x+4,_,P)}}function v(S,y,_,w){w<0&&S.x===1&&(a[y]=S.x-1),_.x===0&&_.z===0&&(a[y]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.vertices,t.indices,t.radius,t.details)}}class Ol extends Or{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ol(t.radius,t.detail)}}class Br extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const S=d*f-a;for(let y=0;y<c;y++){const _=y*h-r;g.push(_,-S,0),v.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const y=S+c*d,_=S+c*(d+1),w=S+1+c*(d+1),A=S+1+c*d;p.push(y,_,A),p.push(_,w,A)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cr extends rn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,f=new N,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const S=[],y=d/i;let _=0;d===0&&a===0?_=.5/e:d===i&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const A=w/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-y),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<e;S++){const y=u[d][S+1],_=u[d][S],w=u[d+1][S],A=u[d+1][S+1];(d!==0||a>0)&&p.push(y,_,A),(d!==i-1||l<Math.PI)&&p.push(_,w,A)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bl extends Or{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bl(t.radius,t.detail)}}class Ra extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class m0 extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g0 extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bd extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ca=new re,Iu=new N,Uu=new N;class _0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nu=new re,os=new N,Pa=new N;class v0 extends _0{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),i.position.copy(os),Pa.copy(i.position),Pa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Pa),i.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),Nu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class Fu extends bd{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new v0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class x0 extends Md{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class y0 extends bd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class M0 extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class S0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ou(){return performance.now()}function Bu(n,t,e,i){const s=E0(i);switch(e){case sd:return n*t;case ad:return n*t;case od:return n*t*2;case ld:return n*t/s.components*s.byteLength;case Cl:return n*t/s.components*s.byteLength;case cd:return n*t*2/s.components*s.byteLength;case Pl:return n*t*2/s.components*s.byteLength;case rd:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case Dl:return n*t*4/s.components*s.byteLength;case hr:case fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dr:case pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:case bo:return Math.max(n,16)*Math.max(t,8)/4;case So:case To:return Math.max(n,8)*Math.max(t,8)/2;case Ao:case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mr:case Go:case Wo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ud:case Xo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case jo:case qo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function E0(n){switch(n){case wn:case ed:return{byteLength:1,components:1};case vs:case nd:case Es:return{byteLength:2,components:1};case wl:case Rl:return{byteLength:2,components:4};case di:case Al:case Tn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ad(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function T0(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,B0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:b0,alphahash_pars_fragment:A0,alphamap_fragment:w0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:D0,aomap_pars_fragment:L0,batching_pars_vertex:I0,batching_vertex:U0,begin_vertex:N0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:V0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:j0,color_vertex:q0,common:Y0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:$0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:Q0,emissivemap_pars_fragment:ty,colorspace_fragment:ey,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:sy,envmap_pars_fragment:ry,envmap_pars_vertex:ay,envmap_physical_pars_fragment:_y,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:hy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:xy,lights_phong_fragment:yy,lights_phong_pars_fragment:My,lights_physical_fragment:Sy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:by,lights_fragment_end:Ay,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Py,map_fragment:Dy,map_pars_fragment:Ly,map_particle_fragment:Iy,map_particle_pars_fragment:Uy,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Fy,morphinstance_vertex:Oy,morphcolor_vertex:By,morphnormal_vertex:Vy,morphtarget_pars_vertex:zy,morphtarget_vertex:ky,normal_fragment_begin:Hy,normal_fragment_maps:Gy,normal_pars_fragment:Wy,normal_pars_vertex:Xy,normal_vertex:jy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:Ky,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Zy,opaque_fragment:Jy,packing:Qy,premultiplied_alpha_fragment:tM,project_vertex:eM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:sM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:oM,shadowmap_vertex:lM,shadowmask_pars_fragment:cM,skinbase_vertex:uM,skinning_pars_vertex:hM,skinning_vertex:fM,skinnormal_vertex:dM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:_M,transmission_fragment:vM,transmission_pars_fragment:xM,uv_pars_fragment:yM,uv_pars_vertex:MM,uv_vertex:SM,worldpos_vertex:EM,background_vert:TM,background_frag:bM,backgroundCube_vert:AM,backgroundCube_frag:wM,cube_vert:RM,cube_frag:CM,depth_vert:PM,depth_frag:DM,distanceRGBA_vert:LM,distanceRGBA_frag:IM,equirect_vert:UM,equirect_frag:NM,linedashed_vert:FM,linedashed_frag:OM,meshbasic_vert:BM,meshbasic_frag:VM,meshlambert_vert:zM,meshlambert_frag:kM,meshmatcap_vert:HM,meshmatcap_frag:GM,meshnormal_vert:WM,meshnormal_frag:XM,meshphong_vert:jM,meshphong_frag:qM,meshphysical_vert:YM,meshphysical_frag:KM,meshtoon_vert:$M,meshtoon_frag:ZM,points_vert:JM,points_frag:QM,shadow_vert:tS,shadow_frag:eS,sprite_vert:nS,sprite_frag:iS},it={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},ln={basic:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ae([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ae([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ae([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ae([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ae([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ae([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ae([it.common,it.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ae([it.lights,it.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};ln.physical={uniforms:Ae([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const er={r:0,b:0,g:0},Jn=new dn,sS=new re;function rS(n,t,e,i,s,r,a){const o=new Wt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const w=g(y);w===null?d(o,l):w&&w.isColor&&(d(w,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===Nr)?(u===void 0&&(u=new en(new ws(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:qi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Jn.copy(_.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sS.makeRotationFromEuler(Jn)),u.material.toneMapped=jt.getTransfer(w.colorSpace)!==Zt,(h!==w||f!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new en(new Br(2,2),new Gn({name:"BackgroundMaterial",uniforms:qi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=jt.getTransfer(w.colorSpace)!==Zt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,_){y.getRGB(er,yd(n)),i.buffers.color.setClear(er.r,er.g,er.b,_,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:m,dispose:S}}function aS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(x,P,F,B,H){let Y=!1;const G=h(B,F,P);r!==G&&(r=G,c(r.object)),Y=p(x,B,F,H),Y&&g(x,B,F,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(x,P,F,B),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,P,F){const B=F.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);let Y=H[P.id];Y===void 0&&(Y={},H[P.id]=Y);let G=Y[B];return G===void 0&&(G=f(l()),Y[B]=G),G}function f(x){const P=[],F=[],B=[];for(let H=0;H<e;H++)P[H]=0,F[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,P,F,B){const H=r.attributes,Y=P.attributes;let G=0;const tt=F.getAttributes();for(const z in tt)if(tt[z].location>=0){const st=H[z];let _t=Y[z];if(_t===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),st===void 0||st.attribute!==_t||_t&&st.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(x,P,F,B){const H={},Y=P.attributes;let G=0;const tt=F.getAttributes();for(const z in tt)if(tt[z].location>=0){let st=Y[z];st===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const _t={};_t.attribute=st,st&&st.data&&(_t.data=st.data),H[z]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=B}function v(){const x=r.newAttributes;for(let P=0,F=x.length;P<F;P++)x[P]=0}function m(x){d(x,0)}function d(x,P){const F=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;F[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),H[x]!==P&&(n.vertexAttribDivisor(x,P),H[x]=P)}function S(){const x=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==x[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function y(x,P,F,B,H,Y,G){G===!0?n.vertexAttribIPointer(x,P,F,H,Y):n.vertexAttribPointer(x,P,F,B,H,Y)}function _(x,P,F,B){v();const H=B.attributes,Y=F.getAttributes(),G=P.defaultAttributeValues;for(const tt in Y){const z=Y[tt];if(z.location>=0){let et=H[tt];if(et===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const st=et.normalized,_t=et.itemSize,Nt=t.get(et);if(Nt===void 0)continue;const Qt=Nt.buffer,q=Nt.type,nt=Nt.bytesPerElement,vt=q===n.INT||q===n.UNSIGNED_INT||et.gpuType===Al;if(et.isInterleavedBufferAttribute){const ot=et.data,bt=ot.stride,qt=et.offset;if(ot.isInstancedInterleavedBuffer){for(let wt=0;wt<z.locationSize;wt++)d(z.location+wt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let wt=0;wt<z.locationSize;wt++)m(z.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let wt=0;wt<z.locationSize;wt++)y(z.location+wt,_t/z.locationSize,q,st,bt*nt,(qt+_t/z.locationSize*wt)*nt,vt)}else{if(et.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)d(z.location+ot,et.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ot=0;ot<z.locationSize;ot++)m(z.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let ot=0;ot<z.locationSize;ot++)y(z.location+ot,_t/z.locationSize,q,st,_t*nt,_t/z.locationSize*ot*nt,vt)}}else if(G!==void 0){const st=G[tt];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(z.location,st);break;case 3:n.vertexAttrib3fv(z.location,st);break;case 4:n.vertexAttrib4fv(z.location,st);break;default:n.vertexAttrib1fv(z.location,st)}}}}S()}function w(){R();for(const x in i){const P=i[x];for(const F in P){const B=P[F];for(const H in B)u(B[H].object),delete B[H];delete P[F]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const F in P){const B=P[F];for(const H in B)u(B[H].object),delete B[H];delete P[F]}delete i[x.id]}function C(x){for(const P in i){const F=i[P];if(F[x.id]===void 0)continue;const B=F[x.id];for(const H in B)u(B[H].object),delete B[H];delete F[x.id]}}function R(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function oS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==tn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Tn&&!R)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:A}}function cS(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ii,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,y=S*4;let _=d.clippingState||null;l.value=_,_=u(g,f,y,p);for(let w=0;w!==y;++w)_[w]=e[w];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,_=p;y!==v;++y,_+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function uS(n){let t=new WeakMap;function e(a,o){return o===vo?a.mapping=Hi:o===xo&&(a.mapping=Gi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===vo||o===xo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c0(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ni=4,Vu=[.125,.215,.35,.446,.526,.582],ai=20,Da=new x0,zu=new Wt;let La=null,Ia=0,Ua=0,Na=!1;const si=(1+Math.sqrt(5))/2,Ci=1/si,ku=[new N(-si,Ci,0),new N(si,Ci,0),new N(-Ci,0,si),new N(Ci,0,si),new N(0,si,-Ci),new N(0,si,Ci),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],hS=new N;class Hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=hS}=r;La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Ia,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Es,format:tn,colorSpace:ji,depthBuffer:!1},s=Gu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fS(r)),this._blurMaterial=dS(r,t,e)}return s}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,s,r){const l=new Oe(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(zu),h.toneMapping=Vn,h.autoClear=!1;const g=new Il({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),v=new en(new ws,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(zu),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const _=this._cubeSize;nr(s,y*_,S>2?_:0,_,_),h.setRenderTarget(s),m&&h.render(v,l),h.render(t,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ku[(s-r-1)%ku.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const d=[];let S=0;for(let C=0;C<ai;++C){const R=C/v,T=Math.exp(-R*R/2);d.push(T),C===0?S+=T:C<m&&(S+=2*T)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const _=this._sizeLods[s],w=3*_*(s>y-Ni?s-y+Ni:0),A=4*(this._cubeSize-_);nr(e,w,A,3*_,2*_),l.setRenderTarget(e),l.render(h,Da)}}function fS(n){const t=[],e=[],i=[];let s=n;const r=n-Ni+1+Vu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ni?l=Vu[a-n+Ni-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),y=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,R=A>2?0:-1,T=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(T,v*g*A),y.set(f,m*g*A);const x=[A,A,A,A,A,A];_.set(x,d*g*A)}const w=new rn;w.setAttribute("position",new hn(S,v)),w.setAttribute("uv",new hn(y,m)),w.setAttribute("faceIndex",new hn(_,d)),t.push(w),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gu(n,t,e){const i=new pi(n,t,e);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function dS(n,t,e){const i=new Float32Array(ai),s=new N(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Wu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Xu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pS(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===vo||l===xo,u=l===Hi||l===Gi;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Hu(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Hu(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function mS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ni("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gS(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let y=0,_=S.length;y<_;y+=3){const w=S[y+0],A=S[y+1],C=S[y+2];f.push(w,A,A,C,C,w)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const w=y+0,A=y+1,C=y+2;f.push(w,A,A,C,C,w)}}else return;const m=new(dd(f)?xd:vd)(f,1);m.version=v;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function _S(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*a,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*v[S];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xS(n,t,e){const i=new WeakMap,s=new Jt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const A=new Float32Array(_*w*4*h),C=new pd(A,_,w,h);C.type=Tn,C.needsUpdate=!0;const R=y*4;for(let x=0;x<h;x++){const P=m[x],F=d[x],B=S[x],H=_*w*4*x;for(let Y=0;Y<P.count;Y++){const G=Y*R;p===!0&&(s.fromBufferAttribute(P,Y),A[H+G+0]=s.x,A[H+G+1]=s.y,A[H+G+2]=s.z,A[H+G+3]=0),g===!0&&(s.fromBufferAttribute(F,Y),A[H+G+4]=s.x,A[H+G+5]=s.y,A[H+G+6]=s.z,A[H+G+7]=0),v===!0&&(s.fromBufferAttribute(B,Y),A[H+G+8]=s.x,A[H+G+9]=s.y,A[H+G+10]=s.z,A[H+G+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Ot(_,w)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const wd=new Ie,ju=new Td(1,1),Rd=new pd,Cd=new jx,Pd=new Sd,qu=[],Yu=[],Ku=new Float32Array(16),$u=new Float32Array(9),Zu=new Float32Array(4);function Qi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Vr(n,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function MS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function SS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function ES(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function TS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function bS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Zu.set(i),n.uniformMatrix2fv(this.addr,!1,Zu),ge(e,i)}}function AS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),ge(e,i)}}function wS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Ku.set(i),n.uniformMatrix4fv(this.addr,!1,Ku),ge(e,i)}}function RS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function CS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function PS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function DS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function LS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function IS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function US(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function NS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function FS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ju.compareFunction=fd,r=ju):r=wd,e.setTexture2D(t||r,s)}function OS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Cd,s)}function BS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Pd,s)}function VS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Rd,s)}function zS(n){switch(n){case 5126:return MS;case 35664:return SS;case 35665:return ES;case 35666:return TS;case 35674:return bS;case 35675:return AS;case 35676:return wS;case 5124:case 35670:return RS;case 35667:case 35671:return CS;case 35668:case 35672:return PS;case 35669:case 35673:return DS;case 5125:return LS;case 36294:return IS;case 36295:return US;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return VS}}function kS(n,t){n.uniform1fv(this.addr,t)}function HS(n,t){const e=Qi(t,this.size,2);n.uniform2fv(this.addr,e)}function GS(n,t){const e=Qi(t,this.size,3);n.uniform3fv(this.addr,e)}function WS(n,t){const e=Qi(t,this.size,4);n.uniform4fv(this.addr,e)}function XS(n,t){const e=Qi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jS(n,t){const e=Qi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qS(n,t){const e=Qi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function YS(n,t){n.uniform1iv(this.addr,t)}function KS(n,t){n.uniform2iv(this.addr,t)}function $S(n,t){n.uniform3iv(this.addr,t)}function ZS(n,t){n.uniform4iv(this.addr,t)}function JS(n,t){n.uniform1uiv(this.addr,t)}function QS(n,t){n.uniform2uiv(this.addr,t)}function tE(n,t){n.uniform3uiv(this.addr,t)}function eE(n,t){n.uniform4uiv(this.addr,t)}function nE(n,t,e){const i=this.cache,s=t.length,r=Vr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wd,r[a])}function iE(n,t,e){const i=this.cache,s=t.length,r=Vr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cd,r[a])}function sE(n,t,e){const i=this.cache,s=t.length,r=Vr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pd,r[a])}function rE(n,t,e){const i=this.cache,s=t.length,r=Vr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rd,r[a])}function aE(n){switch(n){case 5126:return kS;case 35664:return HS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return jS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return KS;case 35668:case 35672:return $S;case 35669:case 35673:return ZS;case 5125:return JS;case 36294:return QS;case 36295:return tE;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return rE}}class oE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zS(e.type)}}class lE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=aE(e.type)}}class cE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Ju(n,t){n.seq.push(t),n.map[t.id]=t}function uE(n,t,e){const i=n.name,s=i.length;for(Fa.lastIndex=0;;){const r=Fa.exec(i),a=Fa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ju(e,c===void 0?new oE(o,n,t):new lE(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new cE(o),Ju(e,h)),e=h}}}class gr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);uE(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Qu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hE=37297;let fE=0;function dE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const th=new Lt;function pE(n){jt._getMatrix(th,jt.workingColorSpace,n);const t=`mat3( ${th.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Ar:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function eh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dE(n.getShaderSource(t),a)}else return s}function mE(n,t){const e=pE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gE(n,t){let e;switch(t){case vx:e="Linear";break;case xx:e="Reinhard";break;case yx:e="Cineon";break;case Mx:e="ACESFilmic";break;case Ex:e="AgX";break;case Tx:e="Neutral";break;case Sx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new N;function _E(){jt.getLuminanceCoefficients(ir);const n=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function xE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function cs(n){return n!==""}function nh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ME=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(ME,EE)}const SE=new Map;function EE(n,t){let e=Ut[t];if(e===void 0){const i=SE.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(n){return n.replace(TE,bE)}function bE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function wE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function CE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qf:t="ENVMAP_BLENDING_MULTIPLY";break;case gx:t="ENVMAP_BLENDING_MIX";break;case _x:t="ENVMAP_BLENDING_ADD";break}return t}function PE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function DE(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=AE(e),c=wE(e),u=RE(e),h=CE(e),f=PE(e),p=vE(e),g=xE(r),v=s.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(m=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Vn?gE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,mE("linearToOutputTexel",e.outputColorSpace),_E(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=$o(a),a=nh(a,e),a=ih(a,e),o=$o(o),o=nh(o,e),o=ih(o,e),a=sh(a),o=sh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+m+a,_=S+d+o,w=Qu(s,s.VERTEX_SHADER,y),A=Qu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(w).trim(),H=s.getShaderInfoLog(A).trim();let Y=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,A);else{const tt=eh(s,w,"vertex"),z=eh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+tt+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(w),s.deleteShader(A),R=new gr(s,v),T=yE(s,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,hE)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fE++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let LE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new UE(t),e.set(t,i)),i}}class UE{constructor(t){this.id=LE++,this.code=t,this.usedTimes=0}}function NE(n,t,e,i,s,r,a){const o=new gd,l=new IE,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,x,P,F,B){const H=F.fog,Y=B.geometry,G=T.isMeshStandardMaterial?F.environment:null,tt=(T.isMeshStandardMaterial?e:t).get(T.envMap||G),z=tt&&tt.mapping===Nr?tt.image.height:null,et=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=st!==void 0?st.length:0;let Nt=0;Y.morphAttributes.position!==void 0&&(Nt=1),Y.morphAttributes.normal!==void 0&&(Nt=2),Y.morphAttributes.color!==void 0&&(Nt=3);let Qt,q,nt,vt;if(et){const $t=ln[et];Qt=$t.vertexShader,q=$t.fragmentShader}else Qt=T.vertexShader,q=T.fragmentShader,l.update(T),nt=l.getVertexShaderID(T),vt=l.getFragmentShaderID(T);const ot=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),qt=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,ue=!!T.map,ae=!!T.matcap,Bt=!!tt,D=!!T.aoMap,Ve=!!T.lightMap,Vt=!!T.bumpMap,zt=!!T.normalMap,St=!!T.displacementMap,ne=!!T.emissiveMap,Mt=!!T.metalnessMap,b=!!T.roughnessMap,M=T.anisotropy>0,O=T.clearcoat>0,K=T.dispersion>0,Z=T.iridescence>0,j=T.sheen>0,xt=T.transmission>0,lt=M&&!!T.anisotropyMap,ft=O&&!!T.clearcoatMap,Ht=O&&!!T.clearcoatNormalMap,Q=O&&!!T.clearcoatRoughnessMap,pt=Z&&!!T.iridescenceMap,At=Z&&!!T.iridescenceThicknessMap,Rt=j&&!!T.sheenColorMap,mt=j&&!!T.sheenRoughnessMap,kt=!!T.specularMap,It=!!T.specularColorMap,ee=!!T.specularIntensityMap,L=xt&&!!T.transmissionMap,rt=xt&&!!T.thicknessMap,W=!!T.gradientMap,$=!!T.alphaMap,ut=T.alphaTest>0,ct=!!T.alphaHash,Dt=!!T.extensions;let oe=Vn;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(oe=n.toneMapping);const Me={shaderID:et,shaderType:T.type,shaderName:T.name,vertexShader:Qt,fragmentShader:q,defines:T.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:qt,instancingColor:qt&&B.instanceColor!==null,instancingMorph:qt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ji,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:ae,envMap:Bt,envMapMode:Bt&&tt.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:Ve,bumpMap:Vt,normalMap:zt,displacementMap:f&&St,emissiveMap:ne,normalMapObjectSpace:zt&&T.normalMapType===Rx,normalMapTangentSpace:zt&&T.normalMapType===hd,metalnessMap:Mt,roughnessMap:b,anisotropy:M,anisotropyMap:lt,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:j,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:kt,specularColorMap:It,specularIntensityMap:ee,transmission:xt,transmissionMap:L,thicknessMap:rt,gradientMap:W,opaque:T.transparent===!1&&T.blending===Fi&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:ut,alphaHash:ct,combine:T.combine,mapUv:ue&&v(T.map.channel),aoMapUv:D&&v(T.aoMap.channel),lightMapUv:Ve&&v(T.lightMap.channel),bumpMapUv:Vt&&v(T.bumpMap.channel),normalMapUv:zt&&v(T.normalMap.channel),displacementMapUv:St&&v(T.displacementMap.channel),emissiveMapUv:ne&&v(T.emissiveMap.channel),metalnessMapUv:Mt&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:lt&&v(T.anisotropyMap.channel),clearcoatMapUv:ft&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(T.sheenRoughnessMap.channel),specularMapUv:kt&&v(T.specularMap.channel),specularColorMapUv:It&&v(T.specularColorMap.channel),specularIntensityMapUv:ee&&v(T.specularIntensityMap.channel),transmissionMapUv:L&&v(T.transmissionMap.channel),thicknessMapUv:rt&&v(T.thicknessMap.channel),alphaMapUv:$&&v(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(zt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(ue||$),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===Zt,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===Zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===En,flipSided:T.side===Le,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function d(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)x.push(P),x.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(S(x,T),y(x,T),x.push(n.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function S(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function y(T,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),T.push(o.mask)}function _(T){const x=g[T.type];let P;if(x){const F=ln[x];P=r0.clone(F.uniforms)}else P=T.uniforms;return P}function w(T,x){let P;for(let F=0,B=u.length;F<B;F++){const H=u[F];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new DE(n,x,T,r),u.push(P)),P}function A(T){if(--T.usedTimes===0){const x=u.indexOf(T);u[x]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:R}}function FE(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function OE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ah(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function oh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,f,p,g,v,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),t++,d}function o(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||OE),i.length>1&&i.sort(f||ah),s.length>1&&s.sort(f||ah)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function BE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new oh,n.set(i,[a])):s>=r.length?(a=new oh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function VE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Wt};break;case"SpotLight":e={position:new N,direction:new N,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function zE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let kE=0;function HE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function GE(n){const t=new VE,e=zE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new re,a=new re;function o(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,S=0,y=0,_=0,w=0,A=0,C=0;c.sort(HE);for(let T=0,x=c.length;T<x;T++){const P=c[T],F=P.color,B=P.intensity,H=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],B);C++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,z=e.get(P);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[v]=G;const tt=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,tt.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=tt.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=Y,_++}v++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const tt=P.shadow,z=e.get(P);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[d]=G,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==S||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==w||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=S,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=w,R.numLightProbes=C,i.version=kE++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const y=c[d];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function lh(n){const t=new GE(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function WE(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new lh(n),t.set(s,[o])):r>=a.length?(o=new lh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qE(n,t,e){let i=new Ul;const s=new Ot,r=new Ot,a=new Jt,o=new m0({depthPacking:wx}),l=new g0,c={},u=e.maxTextureSize,h={[Hn]:Le,[Le]:Hn,[En]:En},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:XE,fragmentShader:jE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new en(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let d=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Bn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==Sn&&this.type===Sn,H=d===Sn&&this.type!==Sn;for(let Y=0,G=A.length;Y<G;Y++){const tt=A[Y],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const et=z.getFrameExtents();if(s.multiply(et),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||B===!0||H===!0){const _t=this.type!==Sn?{minFilter:sn,magFilter:sn}:{};z.map!==null&&z.map.dispose(),z.map=new pi(s.x,s.y,_t),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const st=z.getViewportCount();for(let _t=0;_t<st;_t++){const Nt=z.getViewport(_t);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(a),z.updateMatrices(tt,_t),i=z.getFrustum(),_(C,R,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===Sn&&S(z,R),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,x,P)};function S(A,C){const R=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,R,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,R,p,v,null)}function y(A,C,R,T){let x=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=x.uuid,B=C.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let Y=H[B];Y===void 0&&(Y=x.clone(),H[B]=Y,C.addEventListener("dispose",w)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,T===Sn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=n.properties.get(x);F.light=R}return x}function _(A,C,R,T,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Sn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=t.update(A),H=A.material;if(Array.isArray(H)){const Y=B.groups;for(let G=0,tt=Y.length;G<tt;G++){const z=Y[G],et=H[z.materialIndex];if(et&&et.visible){const st=y(A,et,T,x);A.onBeforeShadow(n,A,C,R,B,st,z),n.renderBufferDirect(R,null,B,st,A,z),A.onAfterShadow(n,A,C,R,B,st,z)}}}else if(H.visible){const Y=y(A,H,T,x);A.onBeforeShadow(n,A,C,R,B,Y,null),n.renderBufferDirect(R,null,B,Y,A,null),A.onAfterShadow(n,A,C,R,B,Y,null)}}const F=A.children;for(let B=0,H=F.length;B<H;B++)_(F[B],C,R,T,x)}function w(A){A.target.removeEventListener("dispose",w);for(const R in c){const T=c[R],x=A.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}const YE={[uo]:ho,[fo]:go,[po]:_o,[ki]:mo,[ho]:uo,[go]:fo,[_o]:po,[mo]:ki};function KE(n,t){function e(){let L=!1;const rt=new Jt;let W=null;const $=new Jt(0,0,0,0);return{setMask:function(ut){W!==ut&&!L&&(n.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){L=ut},setClear:function(ut,ct,Dt,oe,Me){Me===!0&&(ut*=oe,ct*=oe,Dt*=oe),rt.set(ut,ct,Dt,oe),$.equals(rt)===!1&&(n.clearColor(ut,ct,Dt,oe),$.copy(rt))},reset:function(){L=!1,W=null,$.set(-1,0,0,0)}}}function i(){let L=!1,rt=!1,W=null,$=null,ut=null;return{setReversed:function(ct){if(rt!==ct){const Dt=t.get("EXT_clip_control");rt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const oe=ut;ut=null,this.setClear(oe)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?ot(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(ct){W!==ct&&!L&&(n.depthMask(ct),W=ct)},setFunc:function(ct){if(rt&&(ct=YE[ct]),$!==ct){switch(ct){case uo:n.depthFunc(n.NEVER);break;case ho:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case ki:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case _o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ct}},setLocked:function(ct){L=ct},setClear:function(ct){ut!==ct&&(rt&&(ct=1-ct),n.clearDepth(ct),ut=ct)},reset:function(){L=!1,W=null,$=null,ut=null,rt=!1}}}function s(){let L=!1,rt=null,W=null,$=null,ut=null,ct=null,Dt=null,oe=null,Me=null;return{setTest:function($t){L||($t?ot(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function($t){rt!==$t&&!L&&(n.stencilMask($t),rt=$t)},setFunc:function($t,je,pn){(W!==$t||$!==je||ut!==pn)&&(n.stencilFunc($t,je,pn),W=$t,$=je,ut=pn)},setOp:function($t,je,pn){(ct!==$t||Dt!==je||oe!==pn)&&(n.stencilOp($t,je,pn),ct=$t,Dt=je,oe=pn)},setLocked:function($t){L=$t},setClear:function($t){Me!==$t&&(n.clearStencil($t),Me=$t)},reset:function(){L=!1,rt=null,W=null,$=null,ut=null,ct=null,Dt=null,oe=null,Me=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,y=null,_=null,w=null,A=null,C=new Wt(0,0,0),R=0,T=!1,x=null,P=null,F=null,B=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,tt=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=tt>=2);let et=null,st={};const _t=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Qt=new Jt().fromArray(_t),q=new Jt().fromArray(Nt);function nt(L,rt,W,$){const ut=new Uint8Array(4),ct=n.createTexture();n.bindTexture(L,ct),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<W;Dt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(rt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return ct}const vt={};vt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(ki),Vt(!1),zt(ou),ot(n.CULL_FACE),D(Bn);function ot(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function bt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function qt(L,rt){return h[L]!==rt?(n.bindFramebuffer(L,rt),h[L]=rt,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function wt(L,rt){let W=p,$=!1;if(L){W=f.get(rt),W===void 0&&(W=[],f.set(rt,W));const ut=L.textures;if(W.length!==ut.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Dt=ut.length;ct<Dt;ct++)W[ct]=n.COLOR_ATTACHMENT0+ct;W.length=ut.length,$=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,$=!0);$&&n.drawBuffers(W)}function ue(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const ae={[ri]:n.FUNC_ADD,[Qv]:n.FUNC_SUBTRACT,[tx]:n.FUNC_REVERSE_SUBTRACT};ae[ex]=n.MIN,ae[nx]=n.MAX;const Bt={[ix]:n.ZERO,[sx]:n.ONE,[rx]:n.SRC_COLOR,[lo]:n.SRC_ALPHA,[hx]:n.SRC_ALPHA_SATURATE,[cx]:n.DST_COLOR,[ox]:n.DST_ALPHA,[ax]:n.ONE_MINUS_SRC_COLOR,[co]:n.ONE_MINUS_SRC_ALPHA,[ux]:n.ONE_MINUS_DST_COLOR,[lx]:n.ONE_MINUS_DST_ALPHA,[fx]:n.CONSTANT_COLOR,[dx]:n.ONE_MINUS_CONSTANT_COLOR,[px]:n.CONSTANT_ALPHA,[mx]:n.ONE_MINUS_CONSTANT_ALPHA};function D(L,rt,W,$,ut,ct,Dt,oe,Me,$t){if(L===Bn){v===!0&&(bt(n.BLEND),v=!1);return}if(v===!1&&(ot(n.BLEND),v=!0),L!==Jv){if(L!==m||$t!==T){if((d!==ri||_!==ri)&&(n.blendEquation(n.FUNC_ADD),d=ri,_=ri),$t)switch(L){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,y=null,w=null,A=null,C.set(0,0,0),R=0,m=L,T=$t}return}ut=ut||rt,ct=ct||W,Dt=Dt||$,(rt!==d||ut!==_)&&(n.blendEquationSeparate(ae[rt],ae[ut]),d=rt,_=ut),(W!==S||$!==y||ct!==w||Dt!==A)&&(n.blendFuncSeparate(Bt[W],Bt[$],Bt[ct],Bt[Dt]),S=W,y=$,w=ct,A=Dt),(oe.equals(C)===!1||Me!==R)&&(n.blendColor(oe.r,oe.g,oe.b,Me),C.copy(oe),R=Me),m=L,T=!1}function Ve(L,rt){L.side===En?bt(n.CULL_FACE):ot(n.CULL_FACE);let W=L.side===Le;rt&&(W=!W),Vt(W),L.blending===Fi&&L.transparent===!1?D(Bn):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(L){x!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),x=L)}function zt(L){L!==Kv?(ot(n.CULL_FACE),L!==P&&(L===ou?n.cullFace(n.BACK):L===$v?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),P=L}function St(L){L!==F&&(G&&n.lineWidth(L),F=L)}function ne(L,rt,W){L?(ot(n.POLYGON_OFFSET_FILL),(B!==rt||H!==W)&&(n.polygonOffset(rt,W),B=rt,H=W)):bt(n.POLYGON_OFFSET_FILL)}function Mt(L){L?ot(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function b(L){L===void 0&&(L=n.TEXTURE0+Y-1),et!==L&&(n.activeTexture(L),et=L)}function M(L,rt,W){W===void 0&&(et===null?W=n.TEXTURE0+Y-1:W=et);let $=st[W];$===void 0&&($={type:void 0,texture:void 0},st[W]=$),($.type!==L||$.texture!==rt)&&(et!==W&&(n.activeTexture(W),et=W),n.bindTexture(L,rt||vt[L]),$.type=L,$.texture=rt)}function O(){const L=st[et];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Qt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Qt.copy(L))}function mt(L){q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function kt(L,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let $=W.get(L);$===void 0&&($=n.getUniformBlockIndex(rt,L.name),W.set(L,$))}function It(L,rt){const $=c.get(rt).get(L);l.get(rt)!==$&&(n.uniformBlockBinding(rt,$,L.__bindingPointIndex),l.set(rt,$))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,st={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,y=null,_=null,w=null,A=null,C=new Wt(0,0,0),R=0,T=!1,x=null,P=null,F=null,B=null,H=null,Qt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:bt,bindFramebuffer:qt,drawBuffers:wt,useProgram:ue,setBlending:D,setMaterial:Ve,setFlipSided:Vt,setCullFace:zt,setLineWidth:St,setPolygonOffset:ne,setScissorTest:Mt,activeTexture:b,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:pt,texImage3D:At,updateUBOMapping:kt,uniformBlockBinding:It,texStorage2D:Ht,texStorage3D:Q,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ee}}function $E(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):Rr("canvas")}function v(b,M,O){let K=1;const Z=Mt(b);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(K*Z.width),xt=Math.floor(K*Z.height);h===void 0&&(h=g(j,xt));const lt=M?g(j,xt):h;return lt.width=j,lt.height=xt,lt.getContext("2d").drawImage(b,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+xt+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,M,O,K,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=M;if(M===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),M===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),M===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),M===n.RGBA){const xt=Z?Ar:jt.getTransfer(K);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=xt===Zt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(b,M){let O;return b?M===null||M===di||M===Wi?O=n.DEPTH24_STENCIL8:M===Tn?O=n.DEPTH32F_STENCIL8:M===vs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===di||M===Wi?O=n.DEPTH_COMPONENT24:M===Tn?O=n.DEPTH_COMPONENT32F:M===vs&&(O=n.DEPTH_COMPONENT16),O}function w(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==sn&&b.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){const M=b.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&u.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),x(M)}function R(b){const M=i.get(b);if(M.__webglInit===void 0)return;const O=b.source,K=f.get(O);if(K){const Z=K[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(b),Object.keys(K).length===0&&f.delete(O)}i.remove(b)}function T(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const O=b.source,K=f.get(O);delete K[M.__cacheKey],a.memory.textures--}function x(b){const M=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Z=0;Z<M.__webglFramebuffer[K].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[K][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,Z=O.length;K<Z;K++){const j=i.get(O[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(b)}let P=0;function F(){P=0}function B(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function H(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function Y(b,M){const O=i.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,b,M);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function G(b,M){const O=i.get(b);if(b.version>0&&O.__version!==b.version){q(O,b,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function tt(b,M){const O=i.get(b);if(b.version>0&&O.__version!==b.version){q(O,b,M);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function z(b,M){const O=i.get(b);if(b.version>0&&O.__version!==b.version){nt(O,b,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const et={[yo]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},st={[sn]:n.NEAREST,[bx]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},_t={[Cx]:n.NEVER,[Nx]:n.ALWAYS,[Px]:n.LESS,[fd]:n.LEQUAL,[Dx]:n.EQUAL,[Ux]:n.GEQUAL,[Lx]:n.GREATER,[Ix]:n.NOTEQUAL};function Nt(b,M){if(M.type===Tn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===cn||M.magFilter===sa||M.magFilter===Us||M.magFilter===ui||M.minFilter===cn||M.minFilter===sa||M.minFilter===Us||M.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,et[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,et[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,et[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,st[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===sn||M.minFilter!==Us&&M.minFilter!==ui||M.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(b,M){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const K=M.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const j=H(M);if(j!==b.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[j].usedTimes++;const xt=Z[b.__cacheKey];xt!==void 0&&(Z[b.__cacheKey].usedTimes--,xt.usedTimes===0&&T(M)),b.__cacheKey=j,b.__webglTexture=Z[j].texture}return O}function q(b,M,O){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const Z=Qt(b,M),j=M.source;e.bindTexture(K,b.__webglTexture,n.TEXTURE0+O);const xt=i.get(j);if(j.version!==xt.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const lt=jt.getPrimaries(jt.workingColorSpace),ft=M.colorSpace===Fn?null:jt.getPrimaries(M.colorSpace),Ht=M.colorSpace===Fn||lt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Q=v(M.image,!1,s.maxTextureSize);Q=ne(M,Q);const pt=r.convert(M.format,M.colorSpace),At=r.convert(M.type);let Rt=y(M.internalFormat,pt,At,M.colorSpace,M.isVideoTexture);Nt(K,M);let mt;const kt=M.mipmaps,It=M.isVideoTexture!==!0,ee=xt.__version===void 0||Z===!0,L=j.dataReady,rt=w(M,Q);if(M.isDepthTexture)Rt=_(M.format===Xi,M.type),ee&&(It?e.texStorage2D(n.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,At,null));else if(M.isDataTexture)if(kt.length>0){It&&ee&&e.texStorage2D(n.TEXTURE_2D,rt,Rt,kt[0].width,kt[0].height);for(let W=0,$=kt.length;W<$;W++)mt=kt[W],It?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(n.TEXTURE_2D,W,Rt,mt.width,mt.height,0,pt,At,mt.data);M.generateMipmaps=!1}else It?(ee&&e.texStorage2D(n.TEXTURE_2D,rt,Rt,Q.width,Q.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,At,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,At,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Rt,kt[0].width,kt[0].height,Q.depth);for(let W=0,$=kt.length;W<$;W++)if(mt=kt[W],M.format!==tn)if(pt!==null)if(It){if(L)if(M.layerUpdates.size>0){const ut=Bu(mt.width,mt.height,M.format,M.type);for(const ct of M.layerUpdates){const Dt=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ct,mt.width,mt.height,1,pt,Dt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Rt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,Q.depth,pt,At,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Rt,mt.width,mt.height,Q.depth,0,pt,At,mt.data)}else{It&&ee&&e.texStorage2D(n.TEXTURE_2D,rt,Rt,kt[0].width,kt[0].height);for(let W=0,$=kt.length;W<$;W++)mt=kt[W],M.format!==tn?pt!==null?It?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(n.TEXTURE_2D,W,Rt,mt.width,mt.height,0,pt,At,mt.data)}else if(M.isDataArrayTexture)if(It){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Rt,Q.width,Q.height,Q.depth),L)if(M.layerUpdates.size>0){const W=Bu(Q.width,Q.height,M.format,M.type);for(const $ of M.layerUpdates){const ut=Q.data.subarray($*W/Q.data.BYTES_PER_ELEMENT,($+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,pt,At,ut)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,At,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,pt,At,Q.data);else if(M.isData3DTexture)It?(ee&&e.texStorage3D(n.TEXTURE_3D,rt,Rt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,At,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,pt,At,Q.data);else if(M.isFramebufferTexture){if(ee)if(It)e.texStorage2D(n.TEXTURE_2D,rt,Rt,Q.width,Q.height);else{let W=Q.width,$=Q.height;for(let ut=0;ut<rt;ut++)e.texImage2D(n.TEXTURE_2D,ut,Rt,W,$,0,pt,At,null),W>>=1,$>>=1}}else if(kt.length>0){if(It&&ee){const W=Mt(kt[0]);e.texStorage2D(n.TEXTURE_2D,rt,Rt,W.width,W.height)}for(let W=0,$=kt.length;W<$;W++)mt=kt[W],It?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,pt,At,mt):e.texImage2D(n.TEXTURE_2D,W,Rt,pt,At,mt);M.generateMipmaps=!1}else if(It){if(ee){const W=Mt(Q);e.texStorage2D(n.TEXTURE_2D,rt,Rt,W.width,W.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,At,Q)}else e.texImage2D(n.TEXTURE_2D,0,Rt,pt,At,Q);m(M)&&d(K),xt.__version=j.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function nt(b,M,O){if(M.image.length!==6)return;const K=Qt(b,M),Z=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const j=i.get(Z);if(Z.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+O);const xt=jt.getPrimaries(jt.workingColorSpace),lt=M.colorSpace===Fn?null:jt.getPrimaries(M.colorSpace),ft=M.colorSpace===Fn||xt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ht=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Ht&&!Q?pt[$]=v(M.image[$],!0,s.maxCubemapSize):pt[$]=Q?M.image[$].image:M.image[$],pt[$]=ne(M,pt[$]);const At=pt[0],Rt=r.convert(M.format,M.colorSpace),mt=r.convert(M.type),kt=y(M.internalFormat,Rt,mt,M.colorSpace),It=M.isVideoTexture!==!0,ee=j.__version===void 0||K===!0,L=Z.dataReady;let rt=w(M,At);Nt(n.TEXTURE_CUBE_MAP,M);let W;if(Ht){It&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,kt,At.width,At.height);for(let $=0;$<6;$++){W=pt[$].mipmaps;for(let ut=0;ut<W.length;ut++){const ct=W[ut];M.format!==tn?Rt!==null?It?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,ct.width,ct.height,Rt,mt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,kt,ct.width,ct.height,0,Rt,mt,ct.data)}}}else{if(W=M.mipmaps,It&&ee){W.length>0&&rt++;const $=Mt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,kt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Rt,mt,pt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,pt[$].width,pt[$].height,0,Rt,mt,pt[$].data);for(let ut=0;ut<W.length;ut++){const Dt=W[ut].image[$].image;It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Dt.width,Dt.height,Rt,mt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,kt,Dt.width,Dt.height,0,Rt,mt,Dt.data)}}else{It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,mt,pt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,Rt,mt,pt[$]);for(let ut=0;ut<W.length;ut++){const ct=W[ut];It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Rt,mt,ct.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,kt,Rt,mt,ct.image[$])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),j.__version=Z.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function vt(b,M,O,K,Z,j){const xt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),ft=y(O.internalFormat,xt,lt,O.colorSpace),Ht=i.get(M),Q=i.get(O);if(Q.__renderTarget=M,!Ht.__hasExternalTextures){const pt=Math.max(1,M.width>>j),At=Math.max(1,M.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,ft,pt,At,M.depth,0,xt,lt,null):e.texImage2D(Z,j,ft,pt,At,0,xt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),zt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,Q.__webglTexture,0,Vt(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,Q.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(b,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer){const K=M.depthTexture,Z=K&&K.isDepthTexture?K.type:null,j=_(M.stencilBuffer,Z),xt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=Vt(M);zt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,j,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,j,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,j,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,b)}else{const K=M.textures;for(let Z=0;Z<K.length;Z++){const j=K[Z],xt=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),ft=y(j.internalFormat,xt,lt,j.colorSpace),Ht=Vt(M);O&&zt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,ft,M.width,M.height):zt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht,ft,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ft,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const Z=K.__webglTexture,j=Vt(M);if(M.depthTexture.format===Oi)zt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Xi)zt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function qt(b){const M=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=K}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");bt(M.__webglFramebuffer,b)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),ot(M.__webglDepthbuffer[K],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ot(M.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(b,M,O){const K=i.get(b);M!==void 0&&vt(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&qt(b)}function ue(b){const M=b.texture,O=i.get(b),K=i.get(M);b.addEventListener("dispose",C);const Z=b.textures,j=b.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let ft=0;ft<M.mipmaps.length;ft++)O.__webglFramebuffer[lt][ft]=n.createFramebuffer()}else O.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)O.__webglFramebuffer[lt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xt)for(let lt=0,ft=Z.length;lt<ft;lt++){const Ht=i.get(Z[lt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&zt(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const ft=Z[lt];O.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Ht=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),pt=y(ft.internalFormat,Ht,Q,ft.colorSpace,b.isXRRenderTarget===!0),At=Vt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,pt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)vt(O.__webglFramebuffer[lt][ft],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else vt(O.__webglFramebuffer[lt],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,ft=Z.length;lt<ft;lt++){const Ht=Z[lt],Q=i.get(Ht);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Nt(n.TEXTURE_2D,Ht),vt(O.__webglFramebuffer,b,Ht,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Ht)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),Nt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)vt(O.__webglFramebuffer[ft],b,M,n.COLOR_ATTACHMENT0,lt,ft);else vt(O.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,lt,0);m(M)&&d(lt),e.unbindTexture()}b.depthBuffer&&qt(b)}function ae(b){const M=b.textures;for(let O=0,K=M.length;O<K;O++){const Z=M[O];if(m(Z)){const j=S(b),xt=i.get(Z).__webglTexture;e.bindTexture(j,xt),d(j),e.unbindTexture()}}}const Bt=[],D=[];function Ve(b){if(b.samples>0){if(zt(b)===!1){const M=b.textures,O=b.width,K=b.height;let Z=n.COLOR_BUFFER_BIT;const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(b),lt=M.length>1;if(lt)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Ht=i.get(M[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,Z,n.NEAREST),l===!0&&(Bt.length=0,D.length=0,Bt.push(n.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Bt.push(j),D.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Ht=i.get(M[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Vt(b){return Math.min(s.maxSamples,b.samples)}function zt(b){const M=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function ne(b,M){const O=b.colorSpace,K=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ji&&O!==Fn&&(jt.getTransfer(O)===Zt?(K!==tn||Z!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=wt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=zt}function ZE(n,t){function e(i,s=Fn){let r;const a=jt.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.BYTE;if(i===nd)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Es)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===rd)return n.RGB;if(i===tn)return n.RGBA;if(i===ad)return n.LUMINANCE;if(i===od)return n.LUMINANCE_ALPHA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===ld)return n.RED;if(i===Cl)return n.RED_INTEGER;if(i===cd)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===hr||i===fr||i===dr||i===pr)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===So||i===Eo||i===To||i===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ao||i===wo||i===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ao||i===wo)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ro)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Co||i===Po||i===Do||i===Lo||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===Vo||i===zo||i===ko||i===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Co)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Po)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Do)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===No)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ho)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mr||i===Go||i===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mr)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===Xo||i===jo||i===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const JE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Gn({vertexShader:JE,fragmentShader:QE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eT extends Zi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=new tT,m=e.getContextAttributes();let d=null,S=null;const y=[],_=[],w=new Ot;let A=null;const C=new Oe;C.viewport=new Jt;const R=new Oe;R.viewport=new Jt;const T=[C,R],x=new M0;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=y[q];return nt===void 0&&(nt=new Aa,y[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=y[q];return nt===void 0&&(nt=new Aa,y[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=y[q];return nt===void 0&&(nt=new Aa,y[q]=nt),nt.getHandSpace()};function B(q){const nt=_.indexOf(q.inputSource);if(nt===-1)return;const vt=y[nt];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<y.length;q++){const nt=_[q];nt!==null&&(_[q]=null,y[q].disconnect(nt))}P=null,F=null,v.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,S=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,ot=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=m.stencil?Xi:Oi,ot=m.stencil?Wi:di);const qt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new pi(f.textureWidth,f.textureHeight,{format:tn,type:wn,depthTexture:new Td(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pi(p.framebufferWidth,p.framebufferHeight,{format:tn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(q){for(let nt=0;nt<q.removed.length;nt++){const vt=q.removed[nt],ot=_.indexOf(vt);ot>=0&&(_[ot]=null,y[ot].disconnect(vt))}for(let nt=0;nt<q.added.length;nt++){const vt=q.added[nt];let ot=_.indexOf(vt);if(ot===-1){for(let qt=0;qt<y.length;qt++)if(qt>=_.length){_.push(vt),ot=qt;break}else if(_[qt]===null){_[qt]=vt,ot=qt;break}if(ot===-1)break}const bt=y[ot];bt&&bt.connect(vt)}}const G=new N,tt=new N;function z(q,nt,vt){G.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);const ot=G.distanceTo(tt),bt=nt.projectionMatrix.elements,qt=vt.projectionMatrix.elements,wt=bt[14]/(bt[10]-1),ue=bt[14]/(bt[10]+1),ae=(bt[9]+1)/bt[5],Bt=(bt[9]-1)/bt[5],D=(bt[8]-1)/bt[0],Ve=(qt[8]+1)/qt[0],Vt=wt*D,zt=wt*Ve,St=ot/(-D+Ve),ne=St*-D;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Mt=wt+St,b=ue+St,M=Vt-ne,O=zt+(ot-ne),K=ae*ue/b*Mt,Z=Bt*ue/b*Mt;q.projectionMatrix.makePerspective(M,O,K,Z,Mt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,vt=q.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),x.near=R.near=C.near=nt,x.far=R.far=C.far=vt,(P!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,F=x.far),C.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=C.layers.mask|R.layers.mask;const ot=q.parent,bt=x.cameras;et(x,ot);for(let qt=0;qt<bt.length;qt++)et(bt[qt],ot);bt.length===2?z(x,C,R):x.projectionMatrix.copy(C.projectionMatrix),st(q,x,ot)};function st(q,nt,vt){vt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let _t=null;function Nt(q,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let wt=0;wt<vt.length;wt++){const ue=vt[wt];let ae=null;if(p!==null)ae=p.getViewport(ue);else{const D=h.getViewSubImage(f,ue);ae=D.viewport,wt===0&&(t.setRenderTargetTextures(S,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(S))}let Bt=T[wt];Bt===void 0&&(Bt=new Oe,Bt.layers.enable(wt),Bt.viewport=new Jt,T[wt]=Bt),Bt.matrix.fromArray(ue.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(ue.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(ae.x,ae.y,ae.width,ae.height),wt===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(Bt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const wt=h.getDepthInformation(vt[0]);wt&&wt.isValid&&wt.texture&&v.init(t,wt,s.renderState)}}for(let vt=0;vt<y.length;vt++){const ot=_[vt],bt=y[vt];ot!==null&&bt!==void 0&&bt.update(ot,nt,c||a)}_t&&_t(q,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Qt=new Ad;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(q){_t=q},this.dispose=function(){}}}const Qn=new dn,nT=new re;function iT(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,yd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Le&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Le&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,Qn.copy(_),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(nT.makeRotationFromEuler(Qn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sT(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const _=y.program;i.uniformBlockBinding(S,_)}function c(S,y){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(S,w);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const y=h();S.__bindingPointIndex=y;const _=n.createBuffer(),w=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],_=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=_.length;A<C;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,x=R.length;T<x;T++){const P=R[T];if(p(P,A,T,w)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let Y=0;Y<B.length;Y++){const G=B[Y],tt=v(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,F+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,y,_,w){const A=S.value,C=y+"_"+_;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const R=w[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(S){const y=S.uniforms;let _=0;const w=16;for(let C=0,R=y.length;C<R;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,P=T.length;x<P;x++){const F=T[x],B=Array.isArray(F.value)?F.value:[F.value];for(let H=0,Y=B.length;H<Y;H++){const G=B[H],tt=v(G),z=_%w,et=z%tt.boundary,st=z+et;_+=et,st!==0&&w-st<tt.storage&&(_+=w-st),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=tt.storage}}}const A=_%w;return A>0&&(_+=w-A),S.__size=_,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class rT{constructor(t={}){const{canvas:e=Ox(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Vn,this.toneMappingExposure=1;const _=this;let w=!1,A=0,C=0,R=null,T=-1,x=null;const P=new Jt,F=new Jt;let B=null;const H=new Wt(0);let Y=0,G=e.width,tt=e.height,z=1,et=null,st=null;const _t=new Jt(0,0,G,tt),Nt=new Jt(0,0,G,tt);let Qt=!1;const q=new Ul;let nt=!1,vt=!1;this.transmissionResolutionScale=1;const ot=new re,bt=new re,qt=new N,wt=new Jt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Bt(){return R===null?z:1}let D=i;function Ve(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const I="webgl2";if(D=Ve(I,E),D===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Vt,zt,St,ne,Mt,b,M,O,K,Z,j,xt,lt,ft,Ht,Q,pt,At,Rt,mt,kt,It,ee,L;function rt(){Vt=new mS(D),Vt.init(),It=new ZE(D,Vt),zt=new lS(D,Vt,t,It),St=new KE(D,Vt),zt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),ne=new vS(D),Mt=new FE,b=new $E(D,Vt,St,Mt,zt,It,ne),M=new uS(_),O=new pS(_),K=new T0(D),ee=new aS(D,K),Z=new gS(D,K,ne,ee),j=new yS(D,Z,K,ne),Rt=new xS(D,zt,b),Q=new cS(Mt),xt=new NE(_,M,O,Vt,zt,ee,Q),lt=new iT(_,Mt),ft=new BE,Ht=new WE(Vt),At=new rS(_,M,O,St,j,p,l),pt=new qE(_,j,zt),L=new sT(D,ne,zt,St),mt=new oS(D,Vt,ne),kt=new _S(D,Vt,ne),ne.programs=xt.programs,_.capabilities=zt,_.extensions=Vt,_.properties=Mt,_.renderLists=ft,_.shadowMap=pt,_.state=St,_.info=ne}rt();const W=new eT(_,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(G,tt,!1))},this.getSize=function(E){return E.set(G,tt)},this.setSize=function(E,I,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,tt=I,e.width=Math.floor(E*z),e.height=Math.floor(I*z),V===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(G*z,tt*z).floor()},this.setDrawingBufferSize=function(E,I,V){G=E,tt=I,z=V,e.width=Math.floor(E*V),e.height=Math.floor(I*V),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,I,V,k){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,I,V,k),St.viewport(P.copy(_t).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,I,V,k){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,I,V,k),St.scissor(F.copy(Nt).multiplyScalar(z).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){St.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,V=!0){let k=0;if(E){let U=!1;if(R!==null){const J=R.texture.format;U=J===Dl||J===Pl||J===Cl}if(U){const J=R.texture.type,at=J===wn||J===di||J===vs||J===Wi||J===wl||J===Rl,ht=At.getClearColor(),gt=At.getClearAlpha(),Ct=ht.r,Pt=ht.g,Et=ht.b;at?(g[0]=Ct,g[1]=Pt,g[2]=Et,g[3]=gt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ct,v[1]=Pt,v[2]=Et,v[3]=gt,D.clearBufferiv(D.COLOR,0,v))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),At.dispose(),ft.dispose(),Ht.dispose(),Mt.dispose(),M.dispose(),O.dispose(),j.dispose(),ee.dispose(),L.dispose(),xt.dispose(),W.dispose(),W.removeEventListener("sessionstart",zl),W.removeEventListener("sessionend",kl),Xn.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=ne.autoReset,I=pt.enabled,V=pt.autoUpdate,k=pt.needsUpdate,U=pt.type;rt(),ne.autoReset=E,pt.enabled=I,pt.autoUpdate=V,pt.needsUpdate=k,pt.type=U}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const I=E.target;I.removeEventListener("dispose",Dt),oe(I)}function oe(E){Me(E),Mt.remove(E)}function Me(E){const I=Mt.get(E).programs;I!==void 0&&(I.forEach(function(V){xt.releaseProgram(V)}),E.isShaderMaterial&&xt.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,V,k,U,J){I===null&&(I=ue);const at=U.isMesh&&U.matrixWorld.determinant()<0,ht=Dd(E,I,V,k,U);St.setMaterial(k,at);let gt=V.index,Ct=1;if(k.wireframe===!0){if(gt=Z.getWireframeAttribute(V),gt===void 0)return;Ct=2}const Pt=V.drawRange,Et=V.attributes.position;let Gt=Pt.start*Ct,Yt=(Pt.start+Pt.count)*Ct;J!==null&&(Gt=Math.max(Gt,J.start*Ct),Yt=Math.min(Yt,(J.start+J.count)*Ct)),gt!==null?(Gt=Math.max(Gt,0),Yt=Math.min(Yt,gt.count)):Et!=null&&(Gt=Math.max(Gt,0),Yt=Math.min(Yt,Et.count));const he=Yt-Gt;if(he<0||he===1/0)return;ee.setup(U,k,ht,V,gt);let le,Xt=mt;if(gt!==null&&(le=K.get(gt),Xt=kt,Xt.setIndex(le)),U.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*Bt()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(U.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),St.setLineWidth(Tt*Bt()),U.isLineSegments?Xt.setMode(D.LINES):U.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else U.isPoints?Xt.setMode(D.POINTS):U.isSprite&&Xt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ni("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Tt=U._multiDrawStarts,ve=U._multiDrawCounts,Kt=U._multiDrawCount,qe=gt?K.get(gt).bytesPerElement:1,mi=Mt.get(k).currentProgram.getUniforms();for(let Ue=0;Ue<Kt;Ue++)mi.setValue(D,"_gl_DrawID",Ue),Xt.render(Tt[Ue]/qe,ve[Ue])}else if(U.isInstancedMesh)Xt.renderInstances(Gt,he,U.count);else if(V.isInstancedBufferGeometry){const Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ve=Math.min(V.instanceCount,Tt);Xt.renderInstances(Gt,he,ve)}else Xt.render(Gt,he)};function $t(E,I,V){E.transparent===!0&&E.side===En&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,Cs(E,I,V),E.side=Hn,E.needsUpdate=!0,Cs(E,I,V),E.side=En):Cs(E,I,V)}this.compile=function(E,I,V=null){V===null&&(V=E),d=Ht.get(V),d.init(I),y.push(d),V.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),E!==V&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let at=0;at<J.length;at++){const ht=J[at];$t(ht,V,U),k.add(ht)}else $t(J,V,U),k.add(J)}),d=y.pop(),k},this.compileAsync=function(E,I,V=null){const k=this.compile(E,I,V);return new Promise(U=>{function J(){if(k.forEach(function(at){Mt.get(at).currentProgram.isReady()&&k.delete(at)}),k.size===0){U(E);return}setTimeout(J,10)}Vt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let je=null;function pn(E){je&&je(E)}function zl(){Xn.stop()}function kl(){Xn.start()}const Xn=new Ad;Xn.setAnimationLoop(pn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){je=E,W.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},W.addEventListener("sessionstart",zl),W.addEventListener("sessionend",kl),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,I,R),d=Ht.get(E,y.length),d.init(I),y.push(d),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,nt=Q.init(this.clippingPlanes,vt),m=ft.get(E,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const J=_.xr.getDepthSensingMesh();J!==null&&zr(J,I,-1/0,_.sortObjects)}zr(E,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(et,st),ae=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ae&&At.addToRenderList(m,E),this.info.render.frame++,nt===!0&&Q.beginShadows();const V=d.state.shadowsArray;pt.render(V,E,I),nt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const J=I.cameras;if(U.length>0)for(let at=0,ht=J.length;at<ht;at++){const gt=J[at];Gl(k,U,E,gt)}ae&&At.render(E);for(let at=0,ht=J.length;at<ht;at++){const gt=J[at];Hl(m,E,gt,gt.viewport)}}else U.length>0&&Gl(k,U,E,I),ae&&At.render(E),Hl(m,E,I);R!==null&&C===0&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(_,E,I),ee.resetDefaultState(),T=-1,x=null,y.pop(),y.length>0?(d=y[y.length-1],nt===!0&&Q.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function zr(E,I,V,k){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){k&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const at=j.update(E),ht=E.material;ht.visible&&m.push(E,at,ht,V,wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const at=j.update(E),ht=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),wt.copy(at.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(ht)){const gt=at.groups;for(let Ct=0,Pt=gt.length;Ct<Pt;Ct++){const Et=gt[Ct],Gt=ht[Et.materialIndex];Gt&&Gt.visible&&m.push(E,at,Gt,V,wt.z,Et)}}else ht.visible&&m.push(E,at,ht,V,wt.z,null)}}const J=E.children;for(let at=0,ht=J.length;at<ht;at++)zr(J[at],I,V,k)}function Hl(E,I,V,k){const U=E.opaque,J=E.transmissive,at=E.transparent;d.setupLightsView(V),nt===!0&&Q.setGlobalState(_.clippingPlanes,V),k&&St.viewport(P.copy(k)),U.length>0&&Rs(U,I,V),J.length>0&&Rs(J,I,V),at.length>0&&Rs(at,I,V),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Gl(E,I,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new pi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Es:wn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const J=d.state.transmissionRenderTarget[k.id],at=k.viewport||P;J.setSize(at.z*_.transmissionResolutionScale,at.w*_.transmissionResolutionScale);const ht=_.getRenderTarget();_.setRenderTarget(J),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ae&&At.render(V);const gt=_.toneMapping;_.toneMapping=Vn;const Ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),nt===!0&&Q.setGlobalState(_.clippingPlanes,k),Rs(E,V,k),b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Et=0,Gt=I.length;Et<Gt;Et++){const Yt=I[Et],he=Yt.object,le=Yt.geometry,Xt=Yt.material,Tt=Yt.group;if(Xt.side===En&&he.layers.test(k.layers)){const ve=Xt.side;Xt.side=Le,Xt.needsUpdate=!0,Wl(he,V,k,le,Xt,Tt),Xt.side=ve,Xt.needsUpdate=!0,Pt=!0}}Pt===!0&&(b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J))}_.setRenderTarget(ht),_.setClearColor(H,Y),Ct!==void 0&&(k.viewport=Ct),_.toneMapping=gt}function Rs(E,I,V){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,J=E.length;U<J;U++){const at=E[U],ht=at.object,gt=at.geometry,Ct=k===null?at.material:k,Pt=at.group;ht.layers.test(V.layers)&&Wl(ht,I,V,gt,Ct,Pt)}}function Wl(E,I,V,k,U,J){E.onBeforeRender(_,I,V,k,U,J),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,I,V,k,E,J),U.transparent===!0&&U.side===En&&U.forceSinglePass===!1?(U.side=Le,U.needsUpdate=!0,_.renderBufferDirect(V,I,k,U,E,J),U.side=Hn,U.needsUpdate=!0,_.renderBufferDirect(V,I,k,U,E,J),U.side=En):_.renderBufferDirect(V,I,k,U,E,J),E.onAfterRender(_,I,V,k,U,J)}function Cs(E,I,V){I.isScene!==!0&&(I=ue);const k=Mt.get(E),U=d.state.lights,J=d.state.shadowsArray,at=U.state.version,ht=xt.getParameters(E,U.state,J,I,V),gt=xt.getProgramCacheKey(ht);let Ct=k.programs;k.environment=E.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",Dt),Ct=new Map,k.programs=Ct);let Pt=Ct.get(gt);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===at)return jl(E,ht),Pt}else ht.uniforms=xt.getUniforms(E),E.onBeforeCompile(ht,_),Pt=xt.acquireProgram(ht,gt),Ct.set(gt,Pt),k.uniforms=ht.uniforms;const Et=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=Q.uniform),jl(E,ht),k.needsLights=Id(E),k.lightsStateVersion=at,k.needsLights&&(Et.ambientLightColor.value=U.state.ambient,Et.lightProbe.value=U.state.probe,Et.directionalLights.value=U.state.directional,Et.directionalLightShadows.value=U.state.directionalShadow,Et.spotLights.value=U.state.spot,Et.spotLightShadows.value=U.state.spotShadow,Et.rectAreaLights.value=U.state.rectArea,Et.ltc_1.value=U.state.rectAreaLTC1,Et.ltc_2.value=U.state.rectAreaLTC2,Et.pointLights.value=U.state.point,Et.pointLightShadows.value=U.state.pointShadow,Et.hemisphereLights.value=U.state.hemi,Et.directionalShadowMap.value=U.state.directionalShadowMap,Et.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Et.spotShadowMap.value=U.state.spotShadowMap,Et.spotLightMatrix.value=U.state.spotLightMatrix,Et.spotLightMap.value=U.state.spotLightMap,Et.pointShadowMap.value=U.state.pointShadowMap,Et.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Pt,k.uniformsList=null,Pt}function Xl(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function jl(E,I){const V=Mt.get(E);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Dd(E,I,V,k,U){I.isScene!==!0&&(I=ue),b.resetTextureUnits();const J=I.fog,at=k.isMeshStandardMaterial?I.environment:null,ht=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ji,gt=(k.isMeshStandardMaterial?O:M).get(k.envMap||at),Ct=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!V.morphAttributes.position,Gt=!!V.morphAttributes.normal,Yt=!!V.morphAttributes.color;let he=Vn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=_.toneMapping);const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xt=le!==void 0?le.length:0,Tt=Mt.get(k),ve=d.state.lights;if(nt===!0&&(vt===!0||E!==x)){const be=E===x&&k.id===T;Q.setState(k,E,be)}let Kt=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ve.state.version||Tt.outputColorSpace!==ht||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==gt||k.fog===!0&&Tt.fog!==J||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==Ct||Tt.vertexTangents!==Pt||Tt.morphTargets!==Et||Tt.morphNormals!==Gt||Tt.morphColors!==Yt||Tt.toneMapping!==he||Tt.morphTargetsCount!==Xt)&&(Kt=!0):(Kt=!0,Tt.__version=k.version);let qe=Tt.currentProgram;Kt===!0&&(qe=Cs(k,I,U));let mi=!1,Ue=!1,ts=!1;const se=qe.getUniforms(),ze=Tt.uniforms;if(St.useProgram(qe.program)&&(mi=!0,Ue=!0,ts=!0),k.id!==T&&(T=k.id,Ue=!0),mi||x!==E){St.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),Vx(ot),zx(ot),se.setValue(D,"projectionMatrix",ot)):se.setValue(D,"projectionMatrix",E.projectionMatrix),se.setValue(D,"viewMatrix",E.matrixWorldInverse);const Pe=se.map.cameraPosition;Pe!==void 0&&Pe.setValue(D,qt.setFromMatrixPosition(E.matrixWorld)),zt.logarithmicDepthBuffer&&se.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&se.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ue=!0,ts=!0)}if(U.isSkinnedMesh){se.setOptional(D,U,"bindMatrix"),se.setOptional(D,U,"bindMatrixInverse");const be=U.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),se.setValue(D,"boneTexture",be.boneTexture,b))}U.isBatchedMesh&&(se.setOptional(D,U,"batchingTexture"),se.setValue(D,"batchingTexture",U._matricesTexture,b),se.setOptional(D,U,"batchingIdTexture"),se.setValue(D,"batchingIdTexture",U._indirectTexture,b),se.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&se.setValue(D,"batchingColorTexture",U._colorsTexture,b));const ke=V.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&Rt.update(U,V,qe),(Ue||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,se.setValue(D,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ze.envMap.value=gt,ze.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(ze.envMapIntensity.value=I.environmentIntensity),Ue&&(se.setValue(D,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&Ld(ze,ts),J&&k.fog===!0&&lt.refreshFogUniforms(ze,J),lt.refreshMaterialUniforms(ze,k,z,tt,d.state.transmissionRenderTarget[E.id]),gr.upload(D,Xl(Tt),ze,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(gr.upload(D,Xl(Tt),ze,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&se.setValue(D,"center",U.center),se.setValue(D,"modelViewMatrix",U.modelViewMatrix),se.setValue(D,"normalMatrix",U.normalMatrix),se.setValue(D,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const be=k.uniformsGroups;for(let Pe=0,kr=be.length;Pe<kr;Pe++){const jn=be[Pe];L.update(jn,qe),L.bind(jn,qe)}}return qe}function Ld(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Id(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,I,V){Mt.get(E.texture).__webglTexture=I,Mt.get(E.depthTexture).__webglTexture=V;const k=Mt.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const V=Mt.get(E);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const Ud=D.createFramebuffer();this.setRenderTarget=function(E,I=0,V=0){R=E,A=I,C=V;let k=!0,U=null,J=!1,at=!1;if(E){const gt=Mt.get(E);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(gt.__hasExternalTextures)b.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(gt.__boundDepthTexture!==Et){if(Et!==null&&Mt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(at=!0);const Pt=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?U=Pt[I][V]:U=Pt[I],J=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?U=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[V]:U=Pt,P.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else P.copy(_t).multiplyScalar(z).floor(),F.copy(Nt).multiplyScalar(z).floor(),B=Qt;if(V!==0&&(U=Ud),St.bindFramebuffer(D.FRAMEBUFFER,U)&&k&&St.drawBuffers(E,U),St.viewport(P),St.scissor(F),St.setScissorTest(B),J){const gt=Mt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,V)}else if(at){const gt=Mt.get(E.texture),Ct=I;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,V,Ct)}else if(E!==null&&V!==0){const gt=Mt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,V)}T=-1},this.readRenderTargetPixels=function(E,I,V,k,U,J,at){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(ht=ht[at]),ht){St.bindFramebuffer(D.FRAMEBUFFER,ht);try{const gt=E.texture,Ct=gt.format,Pt=gt.type;if(!zt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-k&&V>=0&&V<=E.height-U&&D.readPixels(I,V,k,U,It.convert(Ct),It.convert(Pt),J)}finally{const gt=R!==null?Mt.get(R).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,I,V,k,U,J,at){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(ht=ht[at]),ht){const gt=E.texture,Ct=gt.format,Pt=gt.type;if(!zt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-k&&V>=0&&V<=E.height-U){St.bindFramebuffer(D.FRAMEBUFFER,ht);const Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(I,V,k,U,It.convert(Ct),It.convert(Pt),0);const Gt=R!==null?Mt.get(R).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Gt);const Yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bx(D,Yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(Et),D.deleteSync(Yt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,V=0){E.isTexture!==!0&&(ni("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-V),U=Math.floor(E.image.width*k),J=Math.floor(E.image.height*k),at=I!==null?I.x:0,ht=I!==null?I.y:0;b.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,at,ht,U,J),St.unbindTexture()};const Nd=D.createFramebuffer(),Fd=D.createFramebuffer();this.copyTextureToTexture=function(E,I,V=null,k=null,U=0,J=null){E.isTexture!==!0&&(ni("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],I=arguments[2],J=arguments[3]||0,V=null),J===null&&(U!==0?(ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let at,ht,gt,Ct,Pt,Et,Gt,Yt,he;const le=E.isCompressedTexture?E.mipmaps[J]:E.image;if(V!==null)at=V.max.x-V.min.x,ht=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,Ct=V.min.x,Pt=V.min.y,Et=V.isBox3?V.min.z:0;else{const ke=Math.pow(2,-U);at=Math.floor(le.width*ke),ht=Math.floor(le.height*ke),E.isDataArrayTexture?gt=le.depth:E.isData3DTexture?gt=Math.floor(le.depth*ke):gt=1,Ct=0,Pt=0,Et=0}k!==null?(Gt=k.x,Yt=k.y,he=k.z):(Gt=0,Yt=0,he=0);const Xt=It.convert(I.format),Tt=It.convert(I.type);let ve;I.isData3DTexture?(b.setTexture3D(I,0),ve=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),ve=D.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),ve=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Kt=D.getParameter(D.UNPACK_ROW_LENGTH),qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ue=D.getParameter(D.UNPACK_SKIP_ROWS),ts=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);const se=E.isDataArrayTexture||E.isData3DTexture,ze=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const ke=Mt.get(E),be=Mt.get(I),Pe=Mt.get(ke.__renderTarget),kr=Mt.get(be.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,Pe.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let jn=0;jn<gt;jn++)se&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(E).__webglTexture,U,Et+jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,J,he+jn)),D.blitFramebuffer(Ct,Pt,at,ht,Gt,Yt,at,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||Mt.has(E)){const ke=Mt.get(E),be=Mt.get(I);St.bindFramebuffer(D.READ_FRAMEBUFFER,Nd),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fd);for(let Pe=0;Pe<gt;Pe++)se?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,U,Et+Pe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,U),ze?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,J,he+Pe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,J),U!==0?D.blitFramebuffer(Ct,Pt,at,ht,Gt,Yt,at,ht,D.COLOR_BUFFER_BIT,D.NEAREST):ze?D.copyTexSubImage3D(ve,J,Gt,Yt,he+Pe,Ct,Pt,at,ht):D.copyTexSubImage2D(ve,J,Gt,Yt,Ct,Pt,at,ht);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ze?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ve,J,Gt,Yt,he,at,ht,gt,Xt,Tt,le.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,J,Gt,Yt,he,at,ht,gt,Xt,le.data):D.texSubImage3D(ve,J,Gt,Yt,he,at,ht,gt,Xt,Tt,le):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Gt,Yt,at,ht,Xt,Tt,le.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Gt,Yt,le.width,le.height,Xt,le.data):D.texSubImage2D(D.TEXTURE_2D,J,Gt,Yt,at,ht,Xt,Tt,le);D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ts),J===0&&I.generateMipmaps&&D.generateMipmap(ve),St.unbindTexture()},this.copyTextureToTexture3D=function(E,I,V=null,k=null,U=0){return E.isTexture!==!0&&(ni("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,k=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0),ni('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,V,k,U)},this.initRenderTarget=function(E){Mt.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,St.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}function yn(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}function aT(){const n=yt.useRef(null);return yt.useEffect(()=>{const t=n.current;if(!t)return;const e=new h0,i=new Oe(48,t.clientWidth/t.clientHeight,.1,100);i.position.set(0,.2,7.5);const s=new rT({alpha:!0,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(t.clientWidth,t.clientHeight),t.appendChild(s.domElement);const r=new y0(yn("--blue-100"),1.05),a=new Fu(yn("--accent-electric"),2.6,30);a.position.set(4,4,6);const o=new Fu(yn("--accent-sapphire"),1.6,20);o.position.set(-5,-2,4),e.add(r,a,o);const l=new Cr(2.1,28,28),c=new Ed({color:yn("--blue-300"),size:.05,transparent:!0,opacity:.95}),u=new p0(l,c);e.add(u);const h=new en(new Cr(2.12,18,18),new Il({color:yn("--blue-500"),wireframe:!0,transparent:!0,opacity:.22}));e.add(h);const f=[],p=[new Ra({color:yn("--accent-electric"),roughness:.28,metalness:.2,emissive:new Wt(yn("--accent-electric")).multiplyScalar(.1)}),new Ra({color:yn("--blue-100"),roughness:.35,metalness:.08}),new Ra({color:yn("--accent-sapphire"),roughness:.42,metalness:.12})],g=[new Fl(.28,1.2,6),new Ol(.48,0),new Bl(.42,0)];for(let y=0;y<7;y+=1){const _=new en(g[y%g.length],p[y%p.length]);_.position.set((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*3),_.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),_.userData={speed:.002+Math.random()*.0035,drift:Math.random()*Math.PI*2},f.push(_),e.add(_)}let v=0;const m=new S0,d=()=>{const y=m.getElapsedTime();u.rotation.y+=.0022,u.rotation.x=Math.sin(y*.4)*.12,h.rotation.y+=.0016,h.rotation.z=Math.cos(y*.25)*.05,f.forEach((_,w)=>{_.rotation.x+=_.userData.speed,_.rotation.y+=_.userData.speed*1.2,_.position.y+=Math.sin(y+_.userData.drift+w)*.0025,_.position.x+=Math.cos(y*.7+w)*.001}),s.render(e,i),v=window.requestAnimationFrame(d)};d();const S=()=>{t&&(i.aspect=t.clientWidth/t.clientHeight,i.updateProjectionMatrix(),s.setSize(t.clientWidth,t.clientHeight))};return window.addEventListener("resize",S),()=>{window.cancelAnimationFrame(v),window.removeEventListener("resize",S),f.forEach(y=>{y.geometry.dispose(),y.material.dispose()}),l.dispose(),c.dispose(),h.geometry.dispose(),h.material.dispose(),s.dispose(),s.domElement.parentNode===t&&t.removeChild(s.domElement)}},[]),X.jsx("div",{ref:n,className:"h-full min-h-[320px] w-full","aria-hidden":"true"})}function Oa({eyebrow:n,title:t,description:e,align:i="left"}){return X.jsxs("div",{className:i==="center"?"mx-auto max-w-3xl text-center":"max-w-2xl",children:[n?X.jsx("span",{className:"eyebrow-badge px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em]",children:n}):null,X.jsx("h2",{className:"mt-5 font-display text-4xl leading-tight sm:text-5xl",children:t}),e?X.jsx("p",{className:"mt-4 text-base leading-7 text-cream/72 sm:text-lg",children:e}):null]})}function ti({value:n,label:t,suffix:e="+"}){const i=yt.useRef(null),s=kv(i,{once:!0,amount:.5}),[r,a]=yt.useState(0);return yt.useEffect(()=>{if(!s)return;let o=0;const l=1600,c=performance.now(),u=h=>{const f=Math.min((h-c)/l,1),p=1-Math.pow(1-f,3);a(Math.floor(n*p)),f<1&&(o=requestAnimationFrame(u))};return o=requestAnimationFrame(u),()=>cancelAnimationFrame(o)},[s,n]),X.jsxs(Mn.div,{ref:i,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.6},className:"glass-card hover-lift rounded-3xl px-5 py-4",children:[X.jsxs("div",{className:"font-display text-3xl text-cream sm:text-4xl",children:[r.toLocaleString("en-IN"),e]}),X.jsx("p",{className:"mt-2 text-sm text-cream/70",children:t})]})}const ch=[{label:"Home",href:"#home"},{label:"How It Works",href:"#how-it-works"},{label:"Success Stories",href:"#success-stories"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}],oT=[{icon:"01",title:"Register & Verify",description:"Aadhaar-linked secure login with OTP verification keeps every profile trusted and traceable."},{icon:"02",title:"Choose Your Language",description:"Browse jobs, chat with GRAM AI, and complete onboarding in the language you actually use every day."},{icon:"03",title:"Apply or Hire",description:"Real jobs from real employers across agriculture, construction, transport, domestic work, and skilled labour."}],lT=[{icon:jv,title:"GRAM AI Assistant",description:"Guides workers and employers with simple, local-language help for jobs, skills, and hiring decisions.",featured:!0},{icon:Yv,title:"OTP-Verified Profiles",description:"Every account begins with a trusted mobile verification flow to reduce spam and fake listings."},{icon:Gv,title:"Multi-Language Support",description:"Nine language options across the product so onboarding does not exclude rural users."},{icon:Bd,title:"Document Verification",description:"Upload Aadhaar, PAN, licence, or other identity documents for higher trust and faster hiring."},{icon:Vd,title:"Skill Courses",description:"Short, practical upskilling paths for workers who want stronger profiles and better pay."},{icon:zd,title:"Ratings & Reviews",description:"Transparent worker-employer feedback helps high-quality people and businesses stand out."}],cT=[{name:"Savita Shinde",district:"Satara, Maharashtra",quote:"I found seasonal farm work within my district in three days, and the employer already knew my skills before calling.",avatar:"https://picsum.photos/seed/gramseva-1/160/160"},{name:"Rafiq Ansari",district:"Prayagraj, Uttar Pradesh",quote:"The Hindi flow made signup easy. GRAM AI helped me improve my profile and get shortlisted for masonry work.",avatar:"https://picsum.photos/seed/gramseva-2/160/160"},{name:"Patil Farms",district:"Nashik, Maharashtra",quote:"We posted vacancies, filtered workers by skills, and hired verified local labour faster than phone-based referrals.",avatar:"https://picsum.photos/seed/gramseva-3/160/160"}];function uh({className:n}){return X.jsx("div",{className:`absolute rounded-full blur-3xl ${n}`,"aria-hidden":"true"})}function uT(){const[n,t]=yt.useState(!1),[e,i]=yt.useState(!1);return yt.useEffect(()=>{const s=()=>i(window.scrollY>12);return s(),window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),X.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8",children:[X.jsxs("div",{className:`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition ${e?"border-[var(--glass-border)] bg-[color:rgb(var(--blue-950-rgb)/0.72)] shadow-glass backdrop-blur-xl":"border-transparent bg-transparent"}`,children:[X.jsxs("a",{href:"#home",className:"flex items-center gap-3",children:[X.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-saffron-500/15 text-saffron-300",children:X.jsx(Zf,{size:22})}),X.jsx("span",{className:"font-display text-3xl text-cream",children:"GramRozgaar"})]}),X.jsx("nav",{className:"hidden items-center gap-7 text-sm text-cream/76 lg:flex",children:ch.map(s=>X.jsx("a",{href:s.href,className:"transition hover:text-cream",children:s.label},s.label))}),X.jsxs("div",{className:"hidden items-center gap-3 lg:flex",children:[X.jsx(Di,{to:"/auth/signin",className:"btn-secondary rounded-full px-5 py-2.5 font-medium text-cream",children:"Sign In"}),X.jsx(Di,{to:"/auth/signup",className:"btn-primary rounded-full px-5 py-2.5 font-semibold text-charcoal",children:"Sign Up"})]}),X.jsx("button",{className:"rounded-full border border-[var(--glass-border)] p-2 lg:hidden",onClick:()=>t(s=>!s),children:n?X.jsx(kd,{size:20}):X.jsx(Hd,{size:20})})]}),n?X.jsxs("div",{className:"glass-panel mx-auto mt-3 max-w-7xl rounded-[28px] p-5 lg:hidden",children:[X.jsx("div",{className:"space-y-3",children:ch.map(s=>X.jsx("a",{href:s.href,className:"block rounded-2xl px-4 py-3 text-cream/76 transition hover:bg-blue-500/10 hover:text-cream",onClick:()=>t(!1),children:s.label},s.label))}),X.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[X.jsx(Di,{to:"/auth/signin",className:"btn-secondary rounded-full px-4 py-3 text-center text-sm font-medium text-cream",children:"Sign In"}),X.jsx(Di,{to:"/auth/signup",className:"btn-primary rounded-full px-4 py-3 text-center text-sm font-semibold text-charcoal",children:"Sign Up"})]})]}):null]})}function vT(){return X.jsxs("div",{className:"luxury-shell relative overflow-hidden bg-charcoal text-cream",children:[X.jsx(uT,{}),X.jsx(uh,{className:"left-[-8rem] top-24 h-72 w-72 bg-saffron-500/18"}),X.jsx(uh,{className:"right-[-6rem] top-40 h-72 w-72 bg-forest-600/20"}),X.jsxs("main",{children:[X.jsx("section",{id:"home",className:"relative min-h-screen bg-grain grain-overlay pt-28",children:X.jsxs("div",{className:"mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16",children:[X.jsxs(Mn.div,{initial:"hidden",animate:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.14}}},className:"relative z-10",children:[X.jsx(Mn.span,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},className:"eyebrow-badge px-4 py-2 text-sm font-semibold",children:"Trusted rural jobs platform"}),X.jsxs(Mn.h1,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},className:"mt-7 max-w-3xl font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl",children:["Connecting Rural ",X.jsx("span",{className:"text-saffron-400 italic",children:"Talent"})," with Real ",X.jsx("span",{className:"text-saffron-400 italic",children:"Opportunity"})]}),X.jsx(Mn.p,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},className:"mt-6 max-w-2xl text-lg leading-8 text-cream/72 sm:text-xl",children:"Find farm work, construction jobs, artisan gigs and more in your language, in your district, with trust built into every step."}),X.jsxs(Mn.div,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},className:"mt-10 flex flex-wrap gap-4",children:[X.jsxs(Di,{to:"/auth/signup",className:"btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-charcoal",children:["Find Jobs",X.jsx(Od,{size:18})]}),X.jsx(Di,{to:"/auth/signup",className:"btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-cream",children:"Post a Job"})]}),X.jsxs("div",{className:"mt-12 grid gap-4 sm:grid-cols-3",children:[X.jsx(ti,{value:5e4,label:"Workers Connected"}),X.jsx(ti,{value:12e3,label:"Employers Onboarded"}),X.jsx(ti,{value:18,label:"States Activated",suffix:""})]})]}),X.jsxs("div",{className:"glass-panel relative h-[360px] overflow-hidden rounded-[36px] sm:h-[420px] lg:h-[560px]",children:[X.jsx("div",{className:"absolute inset-0 rounded-[36px] bg-surface opacity-90"}),X.jsx("div",{className:"absolute left-10 top-10 h-16 w-16 animate-drift rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm"}),X.jsx("div",{className:"absolute bottom-12 right-10 h-20 w-20 animate-float rounded-[28px] border border-saffron-500/20 bg-saffron-500/10 backdrop-blur-sm"}),X.jsx(aT,{})]})]})}),X.jsx("section",{id:"how-it-works",className:"px-4 py-24 sm:px-6 lg:px-8",children:X.jsxs("div",{className:"mx-auto max-w-7xl",children:[X.jsx(Oa,{eyebrow:"How It Works",title:"Three Steps to Your Next Opportunity",description:"Simple onboarding for workers, faster hiring for employers, and trusted verification at every stage.",align:"center"}),X.jsx("div",{className:"mt-14 grid gap-6 lg:grid-cols-3",children:oT.map((n,t)=>X.jsxs(Mn.article,{initial:{opacity:0,y:32},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6,delay:t*.12},className:"glass-card hover-lift rounded-[30px] p-8",children:[X.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-500/12 text-3xl",children:n.icon}),X.jsx("h3",{className:"mt-8 text-2xl font-semibold text-cream",children:n.title}),X.jsx("p",{className:"mt-4 text-base leading-8 text-cream/68",children:n.description})]},n.title))})]})}),X.jsx("section",{id:"about",className:"bg-forest-950/65 px-4 py-24 sm:px-6 lg:px-8",children:X.jsxs("div",{className:"mx-auto max-w-7xl",children:[X.jsx(Oa,{eyebrow:"Platform Strength",title:"Built for trust, access, and rural earning power",description:"GramRozgaar combines verified identity, local-language UX, AI guidance, and reusable worker reputation into one hiring system."}),X.jsx("div",{className:"mt-14 grid gap-6 lg:grid-cols-3",children:lT.map((n,t)=>X.jsxs(Mn.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55,delay:t*.08},className:`rounded-[30px] border p-6 ${n.featured?"border-saffron-500/30 bg-gradient-to-br from-saffron-500/16 to-blue-300/8 shadow-glow lg:col-span-2":"border-[var(--glass-border)] bg-[var(--card-bg)] shadow-glass"}`,children:[X.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800/80 text-saffron-300",children:X.jsx(n.icon,{size:22})}),X.jsx("h3",{className:"mt-6 text-2xl font-semibold text-cream",children:n.title}),X.jsx("p",{className:"mt-3 max-w-xl text-sm leading-7 text-cream/70",children:n.description})]},n.title))})]})}),X.jsx("section",{className:"px-4 py-24 sm:px-6 lg:px-8",children:X.jsx("div",{className:"mx-auto max-w-7xl rounded-[40px] border border-[var(--glass-border)] bg-forest-800/95 px-6 py-10 shadow-glass sm:px-10",children:X.jsxs("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:[X.jsx(ti,{value:5e4,label:"Workers Placed"}),X.jsx(ti,{value:12e3,label:"Employers"}),X.jsx(ti,{value:275,label:"Districts Covered"}),X.jsx(ti,{value:9,label:"Languages",suffix:""})]})})}),X.jsx("section",{id:"success-stories",className:"px-4 py-24 sm:px-6 lg:px-8",children:X.jsxs("div",{className:"mx-auto max-w-7xl",children:[X.jsx(Oa,{eyebrow:"Success Stories",title:"Workers and employers already building momentum",description:"From seasonal harvesting to construction crews, verified profiles and local discovery help both sides move faster."}),X.jsx("div",{className:"custom-scrollbar mt-14 flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0",children:cT.map((n,t)=>X.jsxs(Mn.article,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55,delay:t*.1},className:"min-w-[320px] rounded-[30px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass lg:min-w-0",children:[X.jsxs("div",{className:"flex items-center gap-4",children:[X.jsx("img",{src:n.avatar,alt:n.name,className:"h-16 w-16 rounded-2xl object-cover"}),X.jsxs("div",{children:[X.jsx("h3",{className:"text-xl font-semibold text-cream",children:n.name}),X.jsx("p",{className:"text-sm text-cream/60",children:n.district})]})]}),X.jsxs("p",{className:"mt-6 text-base leading-8 text-cream/72",children:["�",n.quote,"�"]})]},n.name))})]})})]}),X.jsx("footer",{id:"contact",className:"border-t border-[var(--glass-border)] bg-forest-950 px-4 py-14 sm:px-6 lg:px-8",children:X.jsxs("div",{className:"mx-auto max-w-7xl",children:[X.jsxs("div",{className:"flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between",children:[X.jsxs("div",{children:[X.jsxs("div",{className:"flex items-center gap-3",children:[X.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-saffron-500/15 text-saffron-300",children:X.jsx(Zf,{size:22})}),X.jsx("span",{className:"font-display text-3xl text-cream",children:"GramRozgaar"})]}),X.jsx("p",{className:"mt-4 max-w-md text-sm leading-7 text-cream/65",children:"A rural employment marketplace connecting workers, farmers, contractors, and local businesses through trust-first digital infrastructure."})]}),X.jsxs("div",{className:"grid gap-8 sm:grid-cols-3",children:[X.jsxs("div",{children:[X.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-saffron-300",children:"Explore"}),X.jsxs("div",{className:"mt-4 space-y-3 text-sm text-cream/66",children:[X.jsx("a",{href:"#home",children:"Home"}),X.jsx("a",{href:"#how-it-works",children:"How It Works"}),X.jsx("a",{href:"#success-stories",children:"Success Stories"})]})]}),X.jsxs("div",{children:[X.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-saffron-300",children:"Support"}),X.jsxs("div",{className:"mt-4 space-y-3 text-sm text-cream/66",children:[X.jsx("a",{href:"#",children:"Privacy Policy"}),X.jsx("a",{href:"#",children:"Terms"}),X.jsx("a",{href:"mailto:hello@gramseva.in",children:"Contact"}),X.jsx("a",{href:"#",children:"Help"})]})]}),X.jsxs("div",{children:[X.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-saffron-300",children:"Reach"}),X.jsxs("div",{className:"mt-4 flex gap-3 text-sm text-cream/66",children:[X.jsx("span",{className:"rounded-full border border-[var(--glass-border)] px-3 py-2",children:"X"}),X.jsx("span",{className:"rounded-full border border-[var(--glass-border)] px-3 py-2",children:"IG"}),X.jsx("span",{className:"rounded-full border border-[var(--glass-border)] px-3 py-2",children:"LI"})]})]})]})]}),X.jsx("div",{className:"mt-10 border-t border-[var(--glass-border)] pt-6 text-sm text-cream/56",children:"Built for rural India"})]})})]})}export{vT as default};
