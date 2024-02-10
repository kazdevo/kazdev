import{_ as h}from"./nuxt-link.qeEN_DOu.js";import{u as v,g as w,o as s,c as r,a as e,b as l,w as n,s as u,v as x,F as m,x as p,d as g,t as b,_ as y,y as $}from"./entry.CkYEdhq3.js";const I=()=>v("color-mode").value,j=e("span",{"i-carbon-moon":"","text-xl":"",bg:"gray-7 dark:gray-3",hidden:"","dark-flex":""},null,-1),N=e("span",{"i-carbon-sun":"","text-xl":"",bg:"gray-7 dark:gray-3",flex:"","dark-hidden":""},null,-1),z=[j,N],C=w({__name:"ToggleTheme",setup(_){const t=I(),d=()=>{t.preference==="dark"?t.preference="light":t.preference="dark"};return(c,a)=>(s(),r("button",{onClick:a[0]||(a[0]=o=>d()),"aria-label":"switch theme",border:"~ gray-1 dark:gray-8","outline-none":"",flex:"",relative:"","text-gray-7":"","dark-text-gray-3":"","rd-full":"","p-2":"","lg:p-3":"","bg-transparent":""},z))}}),S={absolute:"","inset-x-0":"","top-0":"",z50:"",py6:""},B={"w-full":"",px:"5 sm:10 md:12 lg:5","mx-auto":"","max-w-7xl":""},F={"w-full":"",flex:"","justify-between":"","gap-6":"",relative:""},L={"min-w-max":"","inline-flex":"",relative:""},T=e("span",{class:"flex"},[e("span",{w3:"",h6:"","rd-l-full":"",flex:"","bg-emerald-6":""}),e("span",{w3:"",h6:"","rd-r-full":"",flex:"","bg-teal-4":"","mt1.5":""})],-1),E=e("div",{"inline-flex":"",text:"lg neutral-8 dark:white","font-semibold":""}," Kazdev ",-1),M={px:"6 lg:0",pt:"6 lg:0",flex:"","flex-col":"","lg-flex-row":"","gap-y-4":"","gap-x-3":"",text:"lg neutral-7 dark:neutral-3","w-full":"","lg-justify-center":"","lg-items-center":""},U={"lg-min-w-max":"",flex:"","items-center":"","sm-w-max":"","w-full":"",pb:"6 lg:0",px:"6 lg:0"},V=e("span",{relative:"","z-10":"","text-white":""}," Начать ",-1),q={"min-w-max":"",flex:"","items-center":"","gap-x-3":""},A={__name:"Navbar",setup(_){const t=v("navIsOpen",()=>!1),d=[];function c(){t.value=!t.value,document.body.classList.toggle("overflow-y-auto")}return(a,o)=>{const i=h,k=C;return s(),r("header",S,[e("div",B,[e("nav",F,[e("div",L,[l(i,{to:"/",relative:"",flex:"","items-center":"","gap-3":""},{default:n(()=>[T,E]),_:1})]),e("div",{"aria-hidden":"true",fixed:"",bg:"border-neutral-7/50","inset-0":"","backdrop-filter":"","backdrop-blur-xl":"",class:u(["bg-neutral-8/40",x(t)?"flex lg-hidden":"hidden lg:!hidden"])},null,2),e("div",{absolute:"","lg-relative":"","w-full":"",flex:"","overflow-hidden":"","duration-300":"","ease-linear":"",lg:"full lg:0",top:"full lg:0",border:"~ neutral-2 dark:neutral-7 lg:0","flex-col":"","lg-flex-row":"","gap-y-6":"","gap-x-4":"","lg-justify-between":"","lg-items-center":"",bg:"white dark:neutral-950 lg:!transparent",class:u(x(t)?"translate-y-0 visible op-100":"translate-y-10 invisible op-0 lg-op-100 lg-visible lg-translate-y-0")},[e("ul",M,[(s(),r(m,null,p(d,f=>e("li",{key:f.id},[l(i,{to:"#","duration-300":"","font-medium":"","ease-linear":"","hover-text-emerald-6":"",py3:""},{default:n(()=>[g(b(f.text),1)]),_:2},1024)])),64))]),e("div",U,[l(i,{to:"#",flex:"","justify-center":"","items-center":"","w-full":"","sm-w-max":"",px6:"",h12:"","bg-emerald-600":"","rd-full":"",relative:"","overflow-hidden":"",border:"~ transparent hover:[emerald7]","duration-300":"","ease-linear":"","un-after":"absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]"},{default:n(()=>[V]),_:1})])],2),e("div",q,[l(k),e("button",{"aria-label":"toggle navbar",onClick:o[0]||(o[0]=f=>c()),"lg-hidden":"","lg-invisible":"","outline-none":"",w7:"",hauto:"",flex:"","flex-col":"",relative:"","bg-transparent":""},[e("span",{bg:"neutral-7 dark:neutral-300",w6:"","h0.5":"","rd-full":"","transition-all":"","duration-300":"","ease-linear":"",class:u(x(t)?"translate-y-1.5 rotate-40":"")},null,2),e("span",{bg:"neutral-7 dark:neutral-3",w6:"","origin-center":"",mt1:"","h0.5":"","rd-ful":"","transition-all":"","duration-300":"","ease-linear":"",class:u(x(t)?"op-0 scale-x-0":"")},null,2),e("span",{bg:"neutral-7 dark:neutral-3",w6:"",mt1:"","h0.5":"","rd-ful":"","transition-all":"","duration-300":"","ease-linear":"",class:u(x(t)?"-translate-y-1.5 -rotate-40":"")},null,2)])])])])])}}},K=A,O={pt:"16 md:20",bg:"neutral-1 dark:neutral-9"},D={px:"5 sm:10 md:12 lg:5",class:"max-w-7xl mx-auto"},G={text:"neutral-7 dark:neutral-3","border-b":"~ neutral-2 dark:neutral-8",class:"w-full grid grid-cols-2 lg-grid-cols-4 gap-8 pb4"},H={class:"flex"},J=e("span",{class:"text-transparent bg-clip-text bg-gradient-to-tr from-emerald-8 to-teal-4 font-bold text-2xl"},"U",-1),P=e("div",{class:"flex items-center space-x-2"},[e("span",{"i-carbon-location":"",flex:"","text-xl":""}),e("span",null,"Astana")],-1),Q=e("div",{class:"flex items-center space-x-2"},[e("span",{"i-carbon-phone":"",flex:"","text-xl":""}),e("span",null,"+7785340243")],-1),R=e("div",{class:"flex items-center space-x-2"},[e("span",{"i-carbon-email":"",flex:"","text-2xl":""}),e("span",null,"kazdev@gmail.com")],-1),W={text:"neutral-7 dark:neutral-3",class:"grid grid-cols-2 md-grid-cols-3 lg-grid-cols-4 gap-y-10 gap-8 py-10"},X={text:"lg neutral-9 dark:neutral-1",class:"font-semibold"},Y={class:"space-y-3"},Z=e("div",{class:"space-y-5 col-span-2 md-col-span-3 lg-col-span-1"},[e("h1",{text:"lg neutral-9 dark:neutral-1",class:"font-semibold"}," Subscribe to our newsletter "),e("p",{class:"max-w-xl"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis ex temporibus "),e("form",{action:"",class:"grid w-full relative max-w-xl"},[e("div",{class:"flex flex-col gap-3 w-full relative"},[e("input",{type:"email",bg:"neutral-2 dark:neutral-8","un-border":"~ neutral-3 dark:neutral-7",class:"w-full outline-none px3 py3 rd-full",placeholder:"kazdev@gmail.com"}),e("button",{border:"~ transparent hover:#172554","un-after":"absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-#172554 hover:op-100 hover:scale-[2.5]",class:"w-full py3 sm-py0 sm-w-max sm-absolute sm-right-1 sm-inset-y-1 px4 text-sm flex sm-items-center justify-center outline-none bg-emerald-6 text-white rd-3xl relative overflow-hidden"},[e("span",{relative:"",z10:""}," Subscribe ")])])])],-1),ee={"border-t":"~ neutral-2 dark:neutral-8","un-text":"neutral-7 dark:neutral-3",class:"w-full flex flex-col md-flex-row gap-4 items-center sm-justify-between py3"},te=e("div",{text:"center sm:left",class:"flex sm-min-w-max"},[e("p",null,"© 2023 UnifyUI. All right reserved")],-1),le={class:"flex justify-center sm-justify-end w-full gap-3"},ae=e("span",{"i-carbon-logo-facebook":"","text-2xl":"",flex:""},null,-1),ne=e("span",{"i-carbon-logo-linkedin":"","text-2xl":"",flex:""},null,-1),se=e("span",{"i-carbon-logo-twitter":"","text-2xl":"",flex:""},null,-1),re=e("span",{"i-carbon-logo-instagram":"","text-2xl":"",flex:""},null,-1),oe={__name:"Footer",setup(_){const t=[{id:1,title:"Navigation",items:[{id:1,label:"Item",link:"#"},{id:2,label:"Item",link:"#"},{id:3,label:"Item",link:"#"},{id:4,label:"Item",link:"#"}]},{id:2,title:"Navigation",items:[{id:1,label:"Item",link:"#"},{id:2,label:"Item",link:"#"},{id:3,label:"Item",link:"#"},{id:4,label:"Item",link:"#"}]},{id:3,title:"Navigation",items:[{id:1,label:"Item",link:"#"},{id:2,label:"Item",link:"#"},{id:3,label:"Item",link:"#"},{id:4,label:"Item",link:"#"}]}];return(d,c)=>{const a=h;return s(),r("footer",O,[e("div",D,[e("div",G,[e("div",H,[l(a,{to:"#"},{default:n(()=>[J,g(" Kazdev ")]),_:1})]),P,Q,R]),e("nav",W,[(s(),r(m,null,p(t,o=>e("div",{key:o.id,class:"space-y-5"},[e("h1",X,b(o.title),1),e("ul",Y,[(s(!0),r(m,null,p(o.items,i=>(s(),r("li",{key:i.id},[l(a,{to:i.link,class:"hover-text-emerald-6 dark-hover-text-emerald-5 duration-200"},{default:n(()=>[g(b(i.label),1)]),_:2},1032,["to"])]))),128))])])),64)),Z]),e("div",ee,[te,e("div",le,[l(a,{to:"#","aria-label":"social link"},{default:n(()=>[ae]),_:1}),l(a,{to:"#","aria-label":"social link"},{default:n(()=>[ne]),_:1}),l(a,{to:"#","aria-label":"social link"},{default:n(()=>[se]),_:1}),l(a,{to:"#","aria-label":"social link"},{default:n(()=>[re]),_:1})])])])])}}},ie=oe,de={},ce={class:"min-h-screen flex flex-col justify-between"};function ue(_,t){const d=K,c=ie;return s(),r("div",ce,[l(d),$(_.$slots,"default"),l(c)])}const fe=y(de,[["render",ue]]);export{fe as default};
