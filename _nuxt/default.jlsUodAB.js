import{_ as f}from"./nuxt-link.CQuzwOP1.js";import{u as p,g as v,o,c as i,a as e,b as l,w as c,s,v as r,F as b,x as w,d as y,t as k,_ as $,y as z}from"./entry.C0whg0OW.js";const C=()=>p("color-mode").value,N=e("span",{"i-carbon-moon":"","text-xl":"",bg:"gray-7 dark:gray-3",hidden:"","dark-flex":""},null,-1),j=e("span",{"i-carbon-sun":"","text-xl":"",bg:"gray-7 dark:gray-3",flex:"","dark-hidden":""},null,-1),T=[N,j],B=v({__name:"ToggleTheme",setup(d){const t=C(),n=()=>{t.preference==="dark"?t.preference="light":t.preference="dark"};return(a,u)=>(o(),i("button",{onClick:u[0]||(u[0]=_=>n()),"aria-label":"switch theme",border:"~ gray-1 dark:gray-8","outline-none":"",flex:"",relative:"","text-gray-7":"","dark-text-gray-3":"","rd-full":"","p-2":"","lg:p-3":"","bg-transparent":""},T))}}),m=""+globalThis.__publicAssetsURL("images/logo.png"),F={absolute:"","inset-x-0":"","top-0":"",z50:"",py6:""},E={"w-full":"",px:"5 sm:10 md:12 lg:5","mx-auto":"","max-w-7xl":""},L={"w-full":"",flex:"","justify-between":"","gap-6":"",relative:""},S={"min-w-max":"","inline-flex":"",relative:""},V=e("img",{src:m,alt:"",style:{height:"10dvh"}},null,-1),A=e("div",{"inline-flex":"",text:"lg neutral-8 dark:white","font-semibold":""}," Kazdev ",-1),I={px:"6 lg:0",pt:"6 lg:0",flex:"","flex-col":"","lg-flex-row":"","gap-y-4":"","gap-x-3":"",text:"lg neutral-7 dark:neutral-3","w-full":"","lg-justify-center":"","lg-items-center":""},K={"lg-min-w-max":"",flex:"","items-center":"","sm-w-max":"","w-full":"",pb:"6 lg:0",px:"6 lg:0"},M=e("span",{relative:"","z-10":"","text-white":""}," Начать ",-1),O={"min-w-max":"",flex:"","items-center":"","gap-x-3":""},q={__name:"Navbar",setup(d){const t=p("navIsOpen",()=>!1),n=[];function a(){t.value=!t.value,document.body.classList.toggle("overflow-y-auto")}return(u,_)=>{const g=f,h=B;return o(),i("header",F,[e("div",E,[e("nav",L,[e("div",S,[l(g,{to:"/",relative:"",flex:"","items-center":"","gap-3":""},{default:c(()=>[V,A]),_:1})]),e("div",{"aria-hidden":"true",fixed:"",bg:"border-neutral-7/50","inset-0":"","backdrop-filter":"","backdrop-blur-xl":"",class:s(["bg-neutral-8/40",r(t)?"flex lg-hidden":"hidden lg:!hidden"])},null,2),e("div",{absolute:"","lg-relative":"","w-full":"",flex:"","overflow-hidden":"","duration-300":"","ease-linear":"",lg:"full lg:0",top:"full lg:0",border:"~ neutral-2 dark:neutral-7 lg:0","flex-col":"","lg-flex-row":"","gap-y-6":"","gap-x-4":"","lg-justify-between":"","lg-items-center":"",bg:"white dark:neutral-950 lg:!transparent",class:s(r(t)?"translate-y-0 visible op-100":"translate-y-10 invisible op-0 lg-op-100 lg-visible lg-translate-y-0")},[e("ul",I,[(o(),i(b,null,w(n,x=>e("li",{key:x.id},[l(g,{to:"#","duration-300":"","font-medium":"","ease-linear":"","hover-text-emerald-6":"",py3:""},{default:c(()=>[y(k(x.text),1)]),_:2},1024)])),64))]),e("div",K,[l(g,{to:"#",flex:"","justify-center":"","items-center":"","w-full":"","sm-w-max":"",px6:"",h12:"","bg-emerald-600":"","rd-full":"",relative:"","overflow-hidden":"",border:"~ transparent hover:[emerald7]","duration-300":"","ease-linear":"","un-after":"absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]"},{default:c(()=>[M]),_:1})])],2),e("div",O,[l(h),e("button",{"aria-label":"toggle navbar",onClick:_[0]||(_[0]=x=>a()),"lg-hidden":"","lg-invisible":"","outline-none":"",w7:"",hauto:"",flex:"","flex-col":"",relative:"","bg-transparent":""},[e("span",{bg:"neutral-7 dark:neutral-300",w6:"","h0.5":"","rd-full":"","transition-all":"","duration-300":"","ease-linear":"",class:s(r(t)?"translate-y-1.5 rotate-40":"")},null,2),e("span",{bg:"neutral-7 dark:neutral-3",w6:"","origin-center":"",mt1:"","h0.5":"","rd-ful":"","transition-all":"","duration-300":"","ease-linear":"",class:s(r(t)?"op-0 scale-x-0":"")},null,2),e("span",{bg:"neutral-7 dark:neutral-3",w6:"",mt1:"","h0.5":"","rd-ful":"","transition-all":"","duration-300":"","ease-linear":"",class:s(r(t)?"-translate-y-1.5 -rotate-40":"")},null,2)])])])])])}}},D=q,R={pt:"16 md:20",bg:"neutral-1 dark:neutral-9"},U={px:"5 sm:10 md:12 lg:5",class:"max-w-7xl mx-auto"},G={text:"neutral-7 dark:neutral-3","border-b":"~ neutral-2 dark:neutral-8",class:"w-full grid grid-cols-2 lg-grid-cols-4 gap-8 pb4"},H={class:"flex"},J={"min-w-max":"","inline-flex":"",relative:""},P=e("img",{src:m,alt:"",style:{height:"10dvh"}},null,-1),Q=e("div",{"inline-flex":"",text:"lg neutral-8 dark:white","font-semibold":""}," Kazdev ",-1),W=e("div",{class:"flex items-center space-x-2"},[e("span",{"i-carbon-location":"",flex:"","text-xl":""}),e("span",null,"Astana")],-1),X=e("div",{class:"flex items-center space-x-2"},[e("span",{"i-carbon-phone":"",flex:"","text-xl":""}),e("span",null,"+7785340243")],-1),Y=e("div",{class:"flex items-center space-x-2"},[e("span",{"i-carbon-email":"",flex:"","text-2xl":""}),e("span",null,"kazdev@gmail.com")],-1),Z={__name:"Footer",setup(d){return(t,n)=>{const a=f;return o(),i("footer",R,[e("div",U,[e("div",G,[e("div",H,[e("div",J,[l(a,{to:"/",relative:"",flex:"","items-center":"","gap-3":""},{default:c(()=>[P,Q]),_:1})])]),W,X,Y])])])}}},ee=Z,te={},le={class:"min-h-screen flex flex-col justify-between"};function ne(d,t){const n=D,a=ee;return o(),i("div",le,[l(n),z(d.$slots,"default"),l(a)])}const re=$(te,[["render",ne]]);export{re as default};
