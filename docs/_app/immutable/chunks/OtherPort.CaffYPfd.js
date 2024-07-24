import{s as zl,f as Ll,e as Ya,h as za,i as Sa,o as Ba,d as Za}from"./scheduler.BAv4i5Wx.js";import{S as Bl,i as Zl,A as Fa,c as Zt,a as Ft,m as Ht,t as T,b as y,d as jt,e as a,g as s,h as d,k as i,r as e,n as Fl,y as ka,w as Na,v as Ua,f as p,s as _,j as E,l as f,q as D,o as t,u as Ha,p as ja}from"./index.CxAqFKlX.js";import{C as qa,g as Ga,a as Ka,b as La,B as Ja,u as Qa,c as Xa,L as $a,e as ts,f as es,h as ls,p as as,i as ss,j as rs,k as ns,d as vs,r as Wa,P as Ta}from"./dayjs.min.V7I7bsJD.js";import{g as is}from"./entry.D1CS_L-B.js";function os(v){let l,o,r;const n=[{type:"bar"},v[1]];function u(h){v[4](h)}let C={};for(let h=0;h<n.length;h+=1)C=Ll(C,n[h]);return v[0]!==void 0&&(C.chart=v[0]),l=new qa({props:C}),v[3](l),Ya.push(()=>Fa(l,"chart",u)),{c(){Zt(l.$$.fragment)},l(h){Ft(l.$$.fragment,h)},m(h,x){Ht(l,h,x),r=!0},p(h,[x]){const m=x&2?Ga(n,[n[0],Ka(h[1])]):{};!o&&x&1&&(o=!0,m.chart=h[0],za(()=>o=!1)),l.$set(m)},i(h){r||(T(l.$$.fragment,h),r=!0)},o(h){y(l.$$.fragment,h),r=!1},d(h){v[3](null),jt(l,h)}}}function ds(v,l,o){La.register(Ja);let{chart:r=null}=l,n,u;Qa(()=>u);function C(x){Ya[x?"unshift":"push"](()=>{u=x,o(2,u)})}function h(x){r=x,o(0,r)}return v.$$set=x=>{o(5,l=Ll(Ll({},l),Sa(x))),"chart"in x&&o(0,r=x.chart)},v.$$.update=()=>{o(1,n=l)},l=Sa(l),[r,n,u,C,h]}class us extends Bl{constructor(l){super(),Zl(this,l,ds,os,zl,{chart:0})}}function Aa(v){let l,o;return l=new us({props:{data:v[3],options:v[4]}}),{c(){Zt(l.$$.fragment)},l(r){Ft(l.$$.fragment,r)},m(r,n){Ht(l,r,n),o=!0},p(r,n){const u={};n&8&&(u.data=r[3]),l.$set(u)},i(r){o||(T(l.$$.fragment,r),o=!0)},o(r){y(l.$$.fragment,r),o=!1},d(r){jt(l,r)}}}function cs(v){let l,o,r,n=v[1]&&v[2].length&&Aa(v);return{c(){l=a("div"),n&&n.c(),this.h()},l(u){l=s(u,"DIV",{class:!0,style:!0});var C=d(l);n&&n.l(C),C.forEach(i),this.h()},h(){e(l,"class","bar-chart-panel svelte-11kpusc"),e(l,"style",o=`background-color:${v[0]}`)},m(u,C){Fl(u,l,C),n&&n.m(l,null),r=!0},p(u,[C]){u[1]&&u[2].length?n?(n.p(u,C),C&6&&T(n,1)):(n=Aa(u),n.c(),T(n,1),n.m(l,null)):n&&(ka(),y(n,1,1,()=>{n=null}),Na()),(!r||C&1&&o!==(o=`background-color:${u[0]}`))&&e(l,"style",o)},i(u){r||(T(n),r=!0)},o(u){y(n),r=!1},d(u){u&&i(l),n&&n.d()}}}const _s="#272D3233";function fs(v,l,o){La.register(Xa,$a,ts,es,ls,as,ss,rs,ns);let{bgColor:r="transparent"}=l,{barColor:n=""}=l,{dataRes:u}=l,{timeLabels:C=[]}=l,{titleText:h}=l,x,m,R=[],Y={labels:[],datasets:[]},lt={responsive:!0,layout:{},plugins:{legend:{display:!1},title:{display:!0,text:h,font:{size:12},align:"start",color:"#fff"},datalabels:{display:!1}},scales:{x:{grid:{display:!0}},y:{grid:{display:!0,color:_s},type:"linear",position:"left"}}};const A=()=>{u&&(o(1,x=Object.values(u)),o(2,m=C),R=[{label:"device",data:x,borderColor:n||"#4CADFE",backgroundColor:`${n}80`||"#4CADFE80",borderWidth:1,maxBarThickness:48}],o(3,Y={labels:m,datasets:R}))};return Ba(()=>{A()}),Za(()=>{A()}),v.$$set=M=>{"bgColor"in M&&o(0,r=M.bgColor),"barColor"in M&&o(5,n=M.barColor),"dataRes"in M&&o(6,u=M.dataRes),"timeLabels"in M&&o(7,C=M.timeLabels),"titleText"in M&&o(8,h=M.titleText)},[r,x,m,Y,lt,n,u,C,h]}class Pa extends Bl{constructor(l){super(),Zl(this,l,fs,cs,zl,{bgColor:0,barColor:5,dataRes:6,timeLabels:7,titleText:8})}}function wa(v){let l,o,r,n,u=ya(v[0])+"",C,h,x,m,R,Y="總港",lt,A,M,qt,P,k,c,I,at,Hl="智慧電表電力資訊",_e,N,st,jl="當日累計用電量",fe,rt,ql=v[3][22].POWER_DSUM+"",he,pe,Ee,nt,xe,O,L,vt,Gl="當月累計用電量",Ce,it,Kl=Math.round(v[3][22].POWER_MSUM)+"",De,me,Me,z,ot,Jl="當月累計碳排量",Ie,dt,Ql=Math.round(v[3][22].POWER_MSUM_CO2)+"",ge,Ve,be,B,ut,Xl="當年累計用電量",Re,ct,$l=Math.round(v[3][22].POWER_YSUM)+"",Oe,Se,Ue,Z,_t,ta="當年累計碳排量",We,ft,ea=Math.round(v[3][22].POWER_YSUM_CO2)+"",Te,Ae,Pe,ht,la="重要場域當日用電比例",we,pt,ye,V,Et,aa="智慧水表水情資訊",Ye,F,xt,sa="當日累計用水量",ke,Ct,ra=v[3][22].WATER_DSUM+"",Ne,Le,ze,Dt,Be,S,H,mt,na="當月累計用水量",Ze,Mt,va=Math.round(v[3][22].WATER_MSUM)+"",Fe,He,je,j,It,ia="當月累計碳排量",qe,gt,oa=Math.round(v[3][22].WATER_MSUM_CO2)+"",Ge,Ke,Je,q,Vt,da="當年累計用水量",Qe,bt,ua=Math.round(v[3][22].WATER_MSUM)+"",Xe,$e,tl,G,Rt,ca="當年累計碳排量",el,Ot,_a=Math.round(v[3][22].WATER_YSUM_CO2)+"",ll,al,sl,St,fa="重要場域當日用水比例",rl,Ut,nl,K,b,Wt,ha="綠色能源資訊",vl,J,Tt,pa="當日累計用電量",il,At,Ea=Math.round(v[3][22].POWER_DSUM)+"",ol,dl,ul,Q,Pt,xa="當日累計用水量",cl,wt,Ca=Math.round(v[3][22].WATER_DSUM)+"",_l,fl,hl,X,yt,Da="當月累計碳排量",pl,Yt,ma=Math.round(v[3][22].WATER_MSUM)+"",El,xl,Cl,$,kt,Ma="當年累計碳排量",Dl,Nt,Ia=Math.round(v[3][22].WATER_YSUM)+"",ml,Ml,Il,Lt,ga="備註：每15分鐘更新一次",Gt,gl,Va;return nt=new Pa({props:{dataRes:v[4],timeLabels:v[1],titleText:"本日發電量 (逐時統計)"}}),pt=new Ta({props:{labels:v[6],ratios:v[7]}}),Dt=new Pa({props:{dataRes:v[5],timeLabels:v[1],titleText:"本日用水量 (逐時統計)"}}),Ut=new Ta({props:{labels:v[8],ratios:v[9]}}),{c(){l=a("div"),o=a("div"),r=a("div"),n=a("div"),C=p(u),h=p("能源管理資訊平台"),x=_(),m=a("div"),R=a("button"),R.textContent=Y,lt=_(),A=a("div"),M=p(v[2]),qt=_(),P=a("div"),k=a("div"),c=a("div"),I=a("div"),at=a("div"),at.textContent=Hl,_e=_(),N=a("div"),st=a("div"),st.textContent=jl,fe=_(),rt=a("div"),he=p(ql),pe=p("度"),Ee=_(),Zt(nt.$$.fragment),xe=_(),O=a("div"),L=a("div"),vt=a("div"),vt.textContent=Gl,Ce=_(),it=a("div"),De=p(Kl),me=p(" 度"),Me=_(),z=a("div"),ot=a("div"),ot.textContent=Jl,Ie=_(),dt=a("div"),ge=p(Ql),Ve=p(" 噸"),be=_(),B=a("div"),ut=a("div"),ut.textContent=Xl,Re=_(),ct=a("div"),Oe=p($l),Se=p(" 噸"),Ue=_(),Z=a("div"),_t=a("div"),_t.textContent=ta,We=_(),ft=a("div"),Te=p(ea),Ae=p(" 噸"),Pe=_(),ht=a("div"),ht.textContent=la,we=_(),Zt(pt.$$.fragment),ye=_(),V=a("div"),Et=a("div"),Et.textContent=aa,Ye=_(),F=a("div"),xt=a("div"),xt.textContent=sa,ke=_(),Ct=a("div"),Ne=p(ra),Le=p("噸"),ze=_(),Zt(Dt.$$.fragment),Be=_(),S=a("div"),H=a("div"),mt=a("div"),mt.textContent=na,Ze=_(),Mt=a("div"),Fe=p(va),He=p(" 噸"),je=_(),j=a("div"),It=a("div"),It.textContent=ia,qe=_(),gt=a("div"),Ge=p(oa),Ke=p(" 噸"),Je=_(),q=a("div"),Vt=a("div"),Vt.textContent=da,Qe=_(),bt=a("div"),Xe=p(ua),$e=p(" 噸"),tl=_(),G=a("div"),Rt=a("div"),Rt.textContent=ca,el=_(),Ot=a("div"),ll=p(_a),al=p(" 噸"),sl=_(),St=a("div"),St.textContent=fa,rl=_(),Zt(Ut.$$.fragment),nl=_(),K=a("div"),b=a("div"),Wt=a("div"),Wt.textContent=ha,vl=_(),J=a("div"),Tt=a("div"),Tt.textContent=pa,il=_(),At=a("div"),ol=p(Ea),dl=p(" 度"),ul=_(),Q=a("div"),Pt=a("div"),Pt.textContent=xa,cl=_(),wt=a("div"),_l=p(Ca),fl=p(" 噸"),hl=_(),X=a("div"),yt=a("div"),yt.textContent=Da,pl=_(),Yt=a("div"),El=p(ma),xl=p(" 噸"),Cl=_(),$=a("div"),kt=a("div"),kt.textContent=Ma,Dl=_(),Nt=a("div"),ml=p(Ia),Ml=p(" 噸"),Il=_(),Lt=a("div"),Lt.textContent=ga,this.h()},l(g){l=s(g,"DIV",{class:!0});var zt=d(l);o=s(zt,"DIV",{class:!0});var Bt=d(o);r=s(Bt,"DIV",{class:!0});var ba=d(r);n=s(ba,"DIV",{class:!0});var Vl=d(n);C=E(Vl,u),h=E(Vl,"能源管理資訊平台"),Vl.forEach(i),ba.forEach(i),x=f(Bt),m=s(Bt,"DIV",{class:!0});var Kt=d(m);R=s(Kt,"BUTTON",{class:!0,"data-svelte-h":!0}),D(R)!=="svelte-13e14oo"&&(R.textContent=Y),lt=f(Kt),A=s(Kt,"DIV",{class:!0});var Ra=d(A);M=E(Ra,v[2]),Ra.forEach(i),Kt.forEach(i),qt=f(Bt),P=s(Bt,"DIV",{class:!0});var Jt=d(P);k=s(Jt,"DIV",{class:!0});var Oa=d(k);c=s(Oa,"DIV",{class:!0});var Qt=d(c);I=s(Qt,"DIV",{class:!0});var U=d(I);at=s(U,"DIV",{class:!0,"data-svelte-h":!0}),D(at)!=="svelte-14wuy1v"&&(at.textContent=Hl),_e=f(U),N=s(U,"DIV",{class:!0});var Xt=d(N);st=s(Xt,"DIV",{class:!0,"data-svelte-h":!0}),D(st)!=="svelte-1fyvvt1"&&(st.textContent=jl),fe=f(Xt),rt=s(Xt,"DIV",{class:!0});var bl=d(rt);he=E(bl,ql),pe=E(bl,"度"),bl.forEach(i),Xt.forEach(i),Ee=f(U),Ft(nt.$$.fragment,U),xe=f(U),O=s(U,"DIV",{class:!0});var tt=d(O);L=s(tt,"DIV",{class:!0});var $t=d(L);vt=s($t,"DIV",{class:!0,"data-svelte-h":!0}),D(vt)!=="svelte-1ul533h"&&(vt.textContent=Gl),Ce=f($t),it=s($t,"DIV",{class:!0});var Rl=d(it);De=E(Rl,Kl),me=E(Rl," 度"),Rl.forEach(i),$t.forEach(i),Me=f(tt),z=s(tt,"DIV",{class:!0});var te=d(z);ot=s(te,"DIV",{class:!0,"data-svelte-h":!0}),D(ot)!=="svelte-1eabzw1"&&(ot.textContent=Jl),Ie=f(te),dt=s(te,"DIV",{class:!0});var Ol=d(dt);ge=E(Ol,Ql),Ve=E(Ol," 噸"),Ol.forEach(i),te.forEach(i),be=f(tt),B=s(tt,"DIV",{class:!0});var ee=d(B);ut=s(ee,"DIV",{class:!0,"data-svelte-h":!0}),D(ut)!=="svelte-9yqpoh"&&(ut.textContent=Xl),Re=f(ee),ct=s(ee,"DIV",{class:!0});var Sl=d(ct);Oe=E(Sl,$l),Se=E(Sl," 噸"),Sl.forEach(i),ee.forEach(i),Ue=f(tt),Z=s(tt,"DIV",{class:!0});var le=d(Z);_t=s(le,"DIV",{class:!0,"data-svelte-h":!0}),D(_t)!=="svelte-s71u65"&&(_t.textContent=ta),We=f(le),ft=s(le,"DIV",{class:!0});var Ul=d(ft);Te=E(Ul,ea),Ae=E(Ul," 噸"),Ul.forEach(i),le.forEach(i),tt.forEach(i),Pe=f(U),ht=s(U,"DIV",{class:!0,"data-svelte-h":!0}),D(ht)!=="svelte-6ci6sg"&&(ht.textContent=la),we=f(U),Ft(pt.$$.fragment,U),U.forEach(i),ye=f(Qt),V=s(Qt,"DIV",{class:!0});var W=d(V);Et=s(W,"DIV",{class:!0,"data-svelte-h":!0}),D(Et)!=="svelte-fh1lmh"&&(Et.textContent=aa),Ye=f(W),F=s(W,"DIV",{class:!0});var ae=d(F);xt=s(ae,"DIV",{class:!0,"data-svelte-h":!0}),D(xt)!=="svelte-1kvtp98"&&(xt.textContent=sa),ke=f(ae),Ct=s(ae,"DIV",{class:!0});var Wl=d(Ct);Ne=E(Wl,ra),Le=E(Wl,"噸"),Wl.forEach(i),ae.forEach(i),ze=f(W),Ft(Dt.$$.fragment,W),Be=f(W),S=s(W,"DIV",{class:!0});var et=d(S);H=s(et,"DIV",{class:!0});var se=d(H);mt=s(se,"DIV",{class:!0,"data-svelte-h":!0}),D(mt)!=="svelte-1d8vrps"&&(mt.textContent=na),Ze=f(se),Mt=s(se,"DIV",{class:!0});var Tl=d(Mt);Fe=E(Tl,va),He=E(Tl," 噸"),Tl.forEach(i),se.forEach(i),je=f(et),j=s(et,"DIV",{class:!0});var re=d(j);It=s(re,"DIV",{class:!0,"data-svelte-h":!0}),D(It)!=="svelte-1eabzw1"&&(It.textContent=ia),qe=f(re),gt=s(re,"DIV",{class:!0});var Al=d(gt);Ge=E(Al,oa),Ke=E(Al," 噸"),Al.forEach(i),re.forEach(i),Je=f(et),q=s(et,"DIV",{class:!0});var ne=d(q);Vt=s(ne,"DIV",{class:!0,"data-svelte-h":!0}),D(Vt)!=="svelte-1439od0"&&(Vt.textContent=da),Qe=f(ne),bt=s(ne,"DIV",{class:!0});var Pl=d(bt);Xe=E(Pl,ua),$e=E(Pl," 噸"),Pl.forEach(i),ne.forEach(i),tl=f(et),G=s(et,"DIV",{class:!0});var ve=d(G);Rt=s(ve,"DIV",{class:!0,"data-svelte-h":!0}),D(Rt)!=="svelte-s71u65"&&(Rt.textContent=ca),el=f(ve),Ot=s(ve,"DIV",{class:!0});var wl=d(Ot);ll=E(wl,_a),al=E(wl," 噸"),wl.forEach(i),ve.forEach(i),et.forEach(i),sl=f(W),St=s(W,"DIV",{class:!0,"data-svelte-h":!0}),D(St)!=="svelte-12qxedd"&&(St.textContent=fa),rl=f(W),Ft(Ut.$$.fragment,W),W.forEach(i),Qt.forEach(i),Oa.forEach(i),nl=f(Jt),K=s(Jt,"DIV",{class:!0});var ie=d(K);b=s(ie,"DIV",{class:!0});var w=d(b);Wt=s(w,"DIV",{class:!0,"data-svelte-h":!0}),D(Wt)!=="svelte-2tz9xw"&&(Wt.textContent=ha),vl=f(w),J=s(w,"DIV",{class:!0});var oe=d(J);Tt=s(oe,"DIV",{class:!0,"data-svelte-h":!0}),D(Tt)!=="svelte-zveyea"&&(Tt.textContent=pa),il=f(oe),At=s(oe,"DIV",{class:!0});var yl=d(At);ol=E(yl,Ea),dl=E(yl," 度"),yl.forEach(i),oe.forEach(i),ul=f(w),Q=s(w,"DIV",{class:!0});var de=d(Q);Pt=s(de,"DIV",{class:!0,"data-svelte-h":!0}),D(Pt)!=="svelte-3rirln"&&(Pt.textContent=xa),cl=f(de),wt=s(de,"DIV",{class:!0});var Yl=d(wt);_l=E(Yl,Ca),fl=E(Yl," 噸"),Yl.forEach(i),de.forEach(i),hl=f(w),X=s(w,"DIV",{class:!0});var ue=d(X);yt=s(ue,"DIV",{class:!0,"data-svelte-h":!0}),D(yt)!=="svelte-1eabzw1"&&(yt.textContent=Da),pl=f(ue),Yt=s(ue,"DIV",{class:!0});var kl=d(Yt);El=E(kl,ma),xl=E(kl," 噸"),kl.forEach(i),ue.forEach(i),Cl=f(w),$=s(w,"DIV",{class:!0});var ce=d($);kt=s(ce,"DIV",{class:!0,"data-svelte-h":!0}),D(kt)!=="svelte-s71u65"&&(kt.textContent=Ma),Dl=f(ce),Nt=s(ce,"DIV",{class:!0});var Nl=d(Nt);ml=E(Nl,Ia),Ml=E(Nl," 噸"),Nl.forEach(i),ce.forEach(i),w.forEach(i),Il=f(ie),Lt=s(ie,"DIV",{class:!0,"data-svelte-h":!0}),D(Lt)!=="svelte-1ry2n6a"&&(Lt.textContent=ga),ie.forEach(i),Jt.forEach(i),Bt.forEach(i),zt.forEach(i),this.h()},h(){e(n,"class","title-text svelte-u5vrpx"),e(r,"class","title-row svelte-u5vrpx"),e(R,"class","nav-btn svelte-u5vrpx"),e(A,"class","date svelte-u5vrpx"),e(m,"class","desc-row svelte-u5vrpx"),e(at,"class","text svelte-u5vrpx"),e(st,"class","today-dsum-title svelte-u5vrpx"),e(rt,"class","today-dsum-value svelte-u5vrpx"),e(N,"class","today svelte-u5vrpx"),e(vt,"class","info-title svelte-u5vrpx"),e(it,"class","info-value svelte-u5vrpx"),e(L,"class","each-info svelte-u5vrpx"),e(ot,"class","info-title svelte-u5vrpx"),e(dt,"class","info-value svelte-u5vrpx"),e(z,"class","each-info svelte-u5vrpx"),e(ut,"class","info-title svelte-u5vrpx"),e(ct,"class","info-value svelte-u5vrpx"),e(B,"class","each-info svelte-u5vrpx"),e(_t,"class","info-title svelte-u5vrpx"),e(ft,"class","info-value svelte-u5vrpx"),e(Z,"class","each-info svelte-u5vrpx"),e(O,"class","chart-bottom svelte-u5vrpx"),e(ht,"class","piechart-title svelte-u5vrpx"),e(I,"class","each-chart svelte-u5vrpx"),e(Et,"class","text svelte-u5vrpx"),e(xt,"class","today-dsum-title svelte-u5vrpx"),e(Ct,"class","today-dsum-value svelte-u5vrpx"),e(F,"class","today svelte-u5vrpx"),e(mt,"class","info-title svelte-u5vrpx"),e(Mt,"class","info-value svelte-u5vrpx"),e(H,"class","each-info svelte-u5vrpx"),e(It,"class","info-title svelte-u5vrpx"),e(gt,"class","info-value svelte-u5vrpx"),e(j,"class","each-info svelte-u5vrpx"),e(Vt,"class","info-title svelte-u5vrpx"),e(bt,"class","info-value svelte-u5vrpx"),e(q,"class","each-info svelte-u5vrpx"),e(Rt,"class","info-title svelte-u5vrpx"),e(Ot,"class","info-value svelte-u5vrpx"),e(G,"class","each-info svelte-u5vrpx"),e(S,"class","chart-bottom svelte-u5vrpx"),e(St,"class","piechart-title svelte-u5vrpx"),e(V,"class","each-chart svelte-u5vrpx"),e(c,"class","chart-wrap svelte-u5vrpx"),e(k,"class","left-side svelte-u5vrpx"),e(Wt,"class","right-title svelte-u5vrpx"),e(Tt,"class","info-title svelte-u5vrpx"),e(At,"class","info-value svelte-u5vrpx"),e(J,"class","each-info svelte-u5vrpx"),e(Pt,"class","info-title svelte-u5vrpx"),e(wt,"class","info-value svelte-u5vrpx"),e(Q,"class","each-info svelte-u5vrpx"),e(yt,"class","info-title svelte-u5vrpx"),e(Yt,"class","info-value svelte-u5vrpx"),e(X,"class","each-info svelte-u5vrpx"),e(kt,"class","info-title svelte-u5vrpx"),e(Nt,"class","info-value svelte-u5vrpx"),e($,"class","each-info svelte-u5vrpx"),e(b,"class","top-panel svelte-u5vrpx"),e(Lt,"class","tip svelte-u5vrpx"),e(K,"class","right-side svelte-u5vrpx"),e(P,"class","center-row svelte-u5vrpx"),e(o,"class","center-panel svelte-u5vrpx"),e(l,"class","main-container svelte-u5vrpx")},m(g,zt){Fl(g,l,zt),t(l,o),t(o,r),t(r,n),t(n,C),t(n,h),t(o,x),t(o,m),t(m,R),t(m,lt),t(m,A),t(A,M),t(o,qt),t(o,P),t(P,k),t(k,c),t(c,I),t(I,at),t(I,_e),t(I,N),t(N,st),t(N,fe),t(N,rt),t(rt,he),t(rt,pe),t(I,Ee),Ht(nt,I,null),t(I,xe),t(I,O),t(O,L),t(L,vt),t(L,Ce),t(L,it),t(it,De),t(it,me),t(O,Me),t(O,z),t(z,ot),t(z,Ie),t(z,dt),t(dt,ge),t(dt,Ve),t(O,be),t(O,B),t(B,ut),t(B,Re),t(B,ct),t(ct,Oe),t(ct,Se),t(O,Ue),t(O,Z),t(Z,_t),t(Z,We),t(Z,ft),t(ft,Te),t(ft,Ae),t(I,Pe),t(I,ht),t(I,we),Ht(pt,I,null),t(c,ye),t(c,V),t(V,Et),t(V,Ye),t(V,F),t(F,xt),t(F,ke),t(F,Ct),t(Ct,Ne),t(Ct,Le),t(V,ze),Ht(Dt,V,null),t(V,Be),t(V,S),t(S,H),t(H,mt),t(H,Ze),t(H,Mt),t(Mt,Fe),t(Mt,He),t(S,je),t(S,j),t(j,It),t(j,qe),t(j,gt),t(gt,Ge),t(gt,Ke),t(S,Je),t(S,q),t(q,Vt),t(q,Qe),t(q,bt),t(bt,Xe),t(bt,$e),t(S,tl),t(S,G),t(G,Rt),t(G,el),t(G,Ot),t(Ot,ll),t(Ot,al),t(V,sl),t(V,St),t(V,rl),Ht(Ut,V,null),t(P,nl),t(P,K),t(K,b),t(b,Wt),t(b,vl),t(b,J),t(J,Tt),t(J,il),t(J,At),t(At,ol),t(At,dl),t(b,ul),t(b,Q),t(Q,Pt),t(Q,cl),t(Q,wt),t(wt,_l),t(wt,fl),t(b,hl),t(b,X),t(X,yt),t(X,pl),t(X,Yt),t(Yt,El),t(Yt,xl),t(b,Cl),t(b,$),t($,kt),t($,Dl),t($,Nt),t(Nt,ml),t(Nt,Ml),t(K,Il),t(K,Lt),Gt=!0,gl||(Va=Ha(R,"click",v[10]),gl=!0)},p(g,zt){(!Gt||zt&1)&&u!==(u=ya(g[0])+"")&&ja(C,u)},i(g){Gt||(T(nt.$$.fragment,g),T(pt.$$.fragment,g),T(Dt.$$.fragment,g),T(Ut.$$.fragment,g),Gt=!0)},o(g){y(nt.$$.fragment,g),y(pt.$$.fragment,g),y(Dt.$$.fragment,g),y(Ut.$$.fragment,g),Gt=!1},d(g){g&&i(l),jt(nt),jt(pt),jt(Dt),jt(Ut),gl=!1,Va()}}}function hs(v){let l,o,r=v[0]&&wa(v);return{c(){r&&r.c(),l=Ua()},l(n){r&&r.l(n),l=Ua()},m(n,u){r&&r.m(n,u),Fl(n,l,u),o=!0},p(n,[u]){n[0]?r?(r.p(n,u),u&1&&T(r,1)):(r=wa(n),r.c(),T(r,1),r.m(l.parentNode,l)):r&&(ka(),y(r,1,1,()=>{r=null}),Na())},i(n){o||(T(r),o=!0)},o(n){y(r),o=!1},d(n){n&&i(l),r&&r.d(n)}}}function ya(v){switch(v){case"KHH":return"高雄港";case"PUT":return"布袋港";case"APG":return"安平港";case"MZG":return"馬公港"}}function ps(v,l,o){let{portName:r=""}=l,n=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],u=Wa.RESULT[0].USE_DATE,C=vs(u,"YYYYMMDD").format("YYYY/MM/DD"),h=Wa.RESULT.map((c,I)=>({port:c.PORT,userHour:c.USE_HOUR,power_hsum:c.POWER_HSUM,power_dsum_zone_ratio:c.POWER_DSUM_ZONE_RATIO,water_hsum:c.WATER_HSUM,water_dsum_zone_ratio:c.WATER_DSUM_ZONE_RATIO,POWER_YSUM:c.POWER_YSUM,POWER_MSUM:c.POWER_MSUM,POWER_YSUM_CO2:c.POWER_YSUM_CO2,POWER_MSUM_CO2:c.POWER_MSUM_CO2,WATER_YSUM_CO2:c.WATER_YSUM_CO2,WATER_MSUM_CO2:c.WATER_MSUM_CO2,WATER_YSUM:c.WATER_YSUM,WATER_MSUM:c.WATER_MSUM,POWER_DSUM:c.POWER_DSUM,WATER_DSUM:c.WATER_DSUM}));console.log("dataRes::: ",h);let x=h.filter(c=>c.port===r),m=x.map(c=>c.power_hsum),R=x.map(c=>c.water_hsum);const Y={POWER_DSUM_ZONE_RATIO:x[22].power_dsum_zone_ratio},lt=Y.POWER_DSUM_ZONE_RATIO.map(c=>c.zone),A=Y.POWER_DSUM_ZONE_RATIO.map(c=>c.ratio),M={Water_DSUM_ZONE_RATIO:x[22].power_dsum_zone_ratio},qt=M.Water_DSUM_ZONE_RATIO.map(c=>c.zone),P=M.Water_DSUM_ZONE_RATIO.map(c=>c.ratio);function k(){is("/MAIN")}return v.$$set=c=>{"portName"in c&&o(0,r=c.portName)},[r,n,C,x,m,R,lt,A,qt,P,k]}class ms extends Bl{constructor(l){super(),Zl(this,l,ps,hs,zl,{portName:0})}}export{ms as O};