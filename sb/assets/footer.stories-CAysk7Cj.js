import{r as Ta,R as b}from"./iframe-BqXwCr9P.js";import{A as fn,q as L}from"./styled-components.browser.esm-CDHL48w2.js";import{d as O}from"./index-C_2shKqu.js";import{s as ue}from"./index-j_UNyspZ.js";import{L as ce,a as me}from"./useHeroImages-D0Y7ZXN-.js";import{N as de}from"./name-DABmvA8s.js";import{B as ge}from"./button-zqqztDmU.js";import"./jsx-runtime-C_cpGjBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOfvwl7G.js";import"./index-Dsvx23kc.js";import"./gatsby-BNXc2Kwf.js";import"./gatsby-plugin-image-D-jIXEeL.js";const H={small:"2px",large:"4px"},pe=L.div`
  overflow: hidden;
  margin-right: ${H.small};
  color: palevioletred;

  @media (width <= 500px) {
    margin-right: -${H.large};
  }
`,ve=L.a`
  box-sizing: border-box;
  display: block;
  float: left;
  line-height: 0;
  padding-right: ${H.small};
  padding-bottom: ${H.small};
  overflow: hidden;

  ${a=>a.landscape&&fn`
      width: 30%;
    `}
  ${a=>a.square&&fn`
      width: 40%;
      padding-bottom: 0;

      @media (width <= 500px) {
        padding-bottom: 0;
      }
    `}
	@media (width <= 500px) {
    padding-right: ${H.large};
    padding-bottom: ${H.large};
  }
`,he=L.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  border: 0;
`,Yn=a=>{const[n,t]=Ta.useState(!1),[e,r]=Ta.useState(0),i=(u,m)=>{m.preventDefault(),r(u),t(!0)},o=()=>{r(0),t(!1)},s=()=>{if(!a.images)return;const u=a.images.map((m,c)=>b.createElement(ve,{href:m.src,key:c,onClick:p=>i(c,p),...m.orientation},b.createElement(he,{src:m.thumbnail})));return b.createElement(pe,null,u)},l=a.images?a.images.map(u=>({src:u.src,title:u.caption})):[];return a.images&&b.createElement("div",{className:"Gallery"},a.heading&&b.createElement("h2",null,a.heading),a.subheading&&b.createElement("p",null,a.subheading),s(),b.createElement(ce,{open:n,close:o,index:e,slides:l}))};Yn.__docgenInfo={description:"",methods:[],displayName:"Gallery",props:{heading:{required:!1,tsType:{name:"string"},description:""},images:{required:!0,tsType:{name:"Array",elements:[{name:"GalleryImage"}],raw:"GalleryImage[]"},description:""},showThumbnails:{required:!1,tsType:{name:"boolean"},description:""},subheading:{required:!1,tsType:{name:"string"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},landscape:{required:!1,tsType:{name:"boolean"},description:""}}};const Xn=a=>{const n=me(),t=r=>r.includes("enosham")||r.includes("enoshoma")?"江ノ島":r.includes("geshoku")?"月食":r.includes("gokurakuzi")?"極楽寺":r.includes("hongkong")?"香港":r.includes("izu")?"伊豆":r.includes("kyoto_osaka")?"京都・大阪":r.includes("kyotonara")?"京都・奈良":r.includes("miyazaki")?"宮崎":r.includes("naraosaka")?"奈良・大阪":r.includes("oarai")?"大洗":r.includes("parau")?"パラオ":r.includes("thai")?"タイ":r.includes("ume")?"梅":r.includes("umi")?"海":r.includes("夜景")?"夜景":"風景",e=n.map(r=>({src:r.childImageSharp.fluid.src,thumbnail:r.childImageSharp.fixed.src,caption:t(r.name)}));return b.createElement(Yn,{images:e})};Xn.__docgenInfo={description:"",methods:[],displayName:"FlickrLightbox"};function ja(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function be(a){if(Array.isArray(a))return a}function ye(a){if(Array.isArray(a))return ja(a)}function xe(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function we(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,Gn(e.key),e)}}function Se(a,n,t){return n&&we(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function pa(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Va(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(a,n,t){return(n=Gn(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function Ae(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ke(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],l=!0,u=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function un(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function f(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?un(Object(t),!0).forEach(function(e){g(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):un(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function wa(a,n){return be(a)||ke(a,n)||Va(a,n)||Ie()}function T(a){return ye(a)||Ae(a)||Va(a)||Ee()}function ze(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Gn(a){var n=ze(a,"string");return typeof n=="symbol"?n:n+""}function ba(a){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ba(a)}function Va(a,n){if(a){if(typeof a=="string")return ja(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ja(a,n):void 0}}var cn=function(){},Ka={},Bn={},qn=null,Hn={mark:cn,measure:cn};try{typeof window<"u"&&(Ka=window),typeof document<"u"&&(Bn=document),typeof MutationObserver<"u"&&(qn=MutationObserver),typeof performance<"u"&&(Hn=performance)}catch{}var Pe=Ka.navigator||{},mn=Pe.userAgent,dn=mn===void 0?"":mn,R=Ka,w=Bn,gn=qn,ua=Hn;R.document;var M=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Vn=~dn.indexOf("MSIE")||~dn.indexOf("Trident/"),ca,Fe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ce=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Kn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Oe={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Jn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],z="classic",sa="duotone",Qn="sharp",Zn="sharp-duotone",at="chisel",nt="etch",tt="graphite",et="jelly",rt="jelly-duo",it="jelly-fill",ot="mosaic",st="notdog",lt="notdog-duo",ft="pixel",ut="slab",ct="slab-duo",mt="slab-press",dt="slab-press-duo",gt="thumbprint",pt="utility",vt="utility-duo",ht="utility-fill",bt="vellum",yt="whiteboard",Ne="Classic",Te="Duotone",je="Sharp",_e="Sharp Duotone",$e="Chisel",Le="Etch",Me="Graphite",De="Jelly",Re="Jelly Duo",We="Jelly Fill",Ue="Mosaic",Ye="Notdog",Xe="Notdog Duo",Ge="Pixel",Be="Slab",qe="Slab Duo",He="Slab Press",Ve="Slab Press Duo",Ke="Thumbprint",Je="Utility",Qe="Utility Duo",Ze="Utility Fill",ar="Vellum",nr="Whiteboard",xt=[z,sa,Qn,Zn,at,nt,tt,et,rt,it,ot,st,lt,ft,ut,ct,mt,dt,gt,pt,vt,ht,bt,yt];ca={},g(g(g(g(g(g(g(g(g(g(ca,z,Ne),sa,Te),Qn,je),Zn,_e),at,$e),nt,Le),tt,Me),et,De),rt,Re),it,We),g(g(g(g(g(g(g(g(g(g(ca,ot,Ue),st,Ye),lt,Xe),ft,Ge),ut,Be),ct,qe),mt,He),dt,Ve),gt,Ke),pt,Je),g(g(g(g(ca,vt,Qe),ht,Ze),bt,ar),yt,nr);var tr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},er={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},rr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ir={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},wt=["fak","fa-kit","fakd","fa-kit-duotone"],pn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},or=["kit"],sr="kit",lr="kit-duotone",fr="Kit",ur="Kit Duotone";g(g({},sr,fr),lr,ur);var cr={kit:{"fa-kit":"fak"}},mr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},dr={kit:{fak:"fa-kit"}},vn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ma,da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],pr="classic",vr="duotone",hr="sharp",br="sharp-duotone",yr="chisel",xr="etch",wr="graphite",Sr="jelly",Ar="jelly-duo",kr="jelly-fill",Ir="mosaic",Er="notdog",zr="notdog-duo",Pr="pixel",Fr="slab",Cr="slab-duo",Or="slab-press",Nr="slab-press-duo",Tr="thumbprint",jr="utility",_r="utility-duo",$r="utility-fill",Lr="vellum",Mr="whiteboard",Dr="Classic",Rr="Duotone",Wr="Sharp",Ur="Sharp Duotone",Yr="Chisel",Xr="Etch",Gr="Graphite",Br="Jelly",qr="Jelly Duo",Hr="Jelly Fill",Vr="Mosaic",Kr="Notdog",Jr="Notdog Duo",Qr="Pixel",Zr="Slab",ai="Slab Duo",ni="Slab Press",ti="Slab Press Duo",ei="Thumbprint",ri="Utility",ii="Utility Duo",oi="Utility Fill",si="Vellum",li="Whiteboard";ma={},g(g(g(g(g(g(g(g(g(g(ma,pr,Dr),vr,Rr),hr,Wr),br,Ur),yr,Yr),xr,Xr),wr,Gr),Sr,Br),Ar,qr),kr,Hr),g(g(g(g(g(g(g(g(g(g(ma,Ir,Vr),Er,Kr),zr,Jr),Pr,Qr),Fr,Zr),Cr,ai),Or,ni),Nr,ti),Tr,ei),jr,ri),g(g(g(g(ma,_r,ii),$r,oi),Lr,si),Mr,li);var fi="kit",ui="kit-duotone",ci="Kit",mi="Kit Duotone";g(g({},fi,ci),ui,mi);var di={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},gi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},_a={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},pi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(gr,pi),vi=["solid","regular","light","thin","duotone","brands","semibold"],At=[1,2,3,4,5,6,7,8,9,10],hi=At.concat([11,12,13,14,15,16,17,18,19,20]),bi=["aw","fw","pull-left","pull-right"],yi=[].concat(T(Object.keys(gi)),vi,bi,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",da.GROUP,da.SWAP_OPACITY,da.PRIMARY,da.SECONDARY]).concat(At.map(function(a){return"".concat(a,"x")})).concat(hi.map(function(a){return"w-".concat(a)})),xi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",$a=16,kt="fa",It="svg-inline--fa",X="data-fa-i2svg",La="data-fa-pseudo-element",wi="data-fa-pseudo-element-pending",Ja="data-prefix",Qa="data-icon",hn="fontawesome-i2svg",Si="async",Ai=["HTML","HEAD","STYLE","SCRIPT"],Et=["::before","::after",":before",":after"],zt=(function(){try{return!0}catch{return!1}})();function la(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[z]}})}var Pt=f({},Kn);Pt[z]=f(f(f(f({},{"fa-duotone":"duotone"}),Kn[z]),pn.kit),pn["kit-duotone"]);var ki=la(Pt),Ma=f({},ir);Ma[z]=f(f(f(f({},{duotone:"fad"}),Ma[z]),vn.kit),vn["kit-duotone"]);var bn=la(Ma),Da=f({},_a);Da[z]=f(f({},Da[z]),dr.kit);var Za=la(Da),Ra=f({},di);Ra[z]=f(f({},Ra[z]),cr.kit);la(Ra);var Ii=Fe,Ft="fa-layers-text",Ei=Ce,zi=f({},tr);la(zi);var Pi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pa=Oe,Fi=[].concat(T(or),T(yi)),ea=R.FontAwesomeConfig||{};function Ci(a){var n=w.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Oi(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(w&&typeof w.querySelector=="function"){var Ni=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ni.forEach(function(a){var n=wa(a,2),t=n[0],e=n[1],r=Oi(Ci(t));r!=null&&(ea[e]=r)})}var Ct={styleDefault:"solid",familyDefault:z,cssPrefix:kt,replacementClass:It,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ea.familyPrefix&&(ea.cssPrefix=ea.familyPrefix);var J=f(f({},Ct),ea);J.autoReplaceSvg||(J.observeMutations=!1);var d={};Object.keys(Ct).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(t){J[a]=t,ra.forEach(function(e){return e(d)})},get:function(){return J[a]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){J.cssPrefix=n,ra.forEach(function(t){return t(d)})},get:function(){return J.cssPrefix}});R.FontAwesomeConfig=d;var ra=[];function Ti(a){return ra.push(a),function(){ra.splice(ra.indexOf(a),1)}}var B=$a,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ji(a){if(!(!a||!M)){var n=w.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=w.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return w.head.insertBefore(n,e),a}}var _i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yn(){for(var a=12,n="";a-- >0;)n+=_i[Math.random()*62|0];return n}function Z(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function an(a){return a.classList?Z(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ot(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $i(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Ot(a[t]),'" ')},"").trim()}function Sa(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function nn(a){return a.size!==j.size||a.x!==j.x||a.y!==j.y||a.rotate!==j.rotate||a.flipX||a.flipY}function Li(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Mi(a){var n=a.transform,t=a.width,e=t===void 0?$a:t,r=a.height,i=r===void 0?$a:r,o="";return Vn?o+="translate(".concat(n.x/B-e/2,"em, ").concat(n.y/B-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/B,"em), calc(-50% + ").concat(n.y/B,"em)) "),o+="scale(".concat(n.size/B*(n.flipX?-1:1),", ").concat(n.size/B*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var Di=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Nt(){var a=kt,n=It,t=d.cssPrefix,e=d.replacementClass,r=Di;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var xn=!1;function Fa(){d.autoAddCss&&!xn&&(ji(Nt()),xn=!0)}var Ri={mixout:function(){return{dom:{css:Nt,insertCss:Fa}}},hooks:function(){return{beforeDOMElementCreation:function(){Fa()},beforeI2svg:function(){Fa()}}}},$=R||{};$[_]||($[_]={});$[_].styles||($[_].styles={});$[_].hooks||($[_].hooks={});$[_].shims||($[_].shims=[]);var N=$[_],Tt=[],jt=function(){w.removeEventListener("DOMContentLoaded",jt),ya=1,Tt.map(function(n){return n()})},ya=!1;M&&(ya=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),ya||w.addEventListener("DOMContentLoaded",jt));function Wi(a){M&&(ya?setTimeout(a,0):Tt.push(a))}function fa(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?Ot(a):"<".concat(n," ").concat($i(e),">").concat(i.map(fa).join(""),"</").concat(n,">")}function wn(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Ca=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=t,l,u,m;for(e===void 0?(l=1,m=n[i[0]]):(l=0,m=e);l<o;l++)u=i[l],m=s(m,n[u],u,n);return m};function _t(a){return T(a).length!==1?null:a.codePointAt(0).toString(16)}function Sn(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function Wa(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=Sn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(a,Sn(n)):N.styles[a]=f(f({},N.styles[a]||{}),i),a==="fas"&&Wa("fa",n)}var oa=N.styles,Ui=N.shims,$t=Object.keys(Za),Yi=$t.reduce(function(a,n){return a[n]=Object.keys(Za[n]),a},{}),tn=null,Lt={},Mt={},Dt={},Rt={},Wt={};function Xi(a){return~Fi.indexOf(a)}function Gi(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!Xi(r)?r:null}var Ut=function(){var n=function(i){return Ca(oa,function(o,s,l){return o[l]=Ca(s,i,{}),o},{})};Lt=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Mt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Wt=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in oa||d.autoFetchSvg,e=Ca(Ui,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Dt=e.names,Rt=e.unicodes,tn=Aa(d.styleDefault,{family:d.familyDefault})};Ti(function(a){tn=Aa(a.styleDefault,{family:d.familyDefault})});Ut();function en(a,n){return(Lt[a]||{})[n]}function Bi(a,n){return(Mt[a]||{})[n]}function Y(a,n){return(Wt[a]||{})[n]}function Yt(a){return Dt[a]||{prefix:null,iconName:null}}function qi(a){var n=Rt[a],t=en("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function W(){return tn}var Xt=function(){return{prefix:null,iconName:null,rest:[]}};function Hi(a){var n=z,t=$t.reduce(function(e,r){return e[r]="".concat(d.cssPrefix,"-").concat(r),e},{});return xt.forEach(function(e){(a.includes(t[e])||a.some(function(r){return Yi[e].includes(r)}))&&(n=e)}),n}function Aa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?z:t,r=ki[e][a];if(e===sa&&!a)return"fad";var i=bn[e][a]||bn[e][r],o=a in N.styles?a:null,s=i||o||null;return s}function Vi(a){var n=[],t=null;return a.forEach(function(e){var r=Gi(d.cssPrefix,e);r?t=r:e&&n.push(e)}),{iconName:t,rest:n}}function An(a){return a.sort().filter(function(n,t,e){return e.indexOf(n)===t})}var kn=St.concat(wt);function ka(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,e=t===void 0?!1:t,r=null,i=An(a.filter(function(v){return kn.includes(v)})),o=An(a.filter(function(v){return!kn.includes(v)})),s=i.filter(function(v){return r=v,!Jn.includes(v)}),l=wa(s,1),u=l[0],m=u===void 0?null:u,c=Hi(i),p=f(f({},Vi(o)),{},{prefix:Aa(m,{family:c})});return f(f(f({},p),Zi({values:a,family:c,styles:oa,config:d,canonical:p,givenPrefix:r})),Ki(e,r,p))}function Ki(a,n,t){var e=t.prefix,r=t.iconName;if(a||!e||!r)return{prefix:e,iconName:r};var i=n==="fa"?Yt(r):{},o=Y(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!oa.far&&oa.fas&&!d.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Ji=xt.filter(function(a){return a!==z||a!==sa}),Qi=Object.keys(_a).filter(function(a){return a!==z}).map(function(a){return Object.keys(_a[a])}).flat();function Zi(a){var n=a.values,t=a.family,e=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,l=a.config,u=l===void 0?{}:l,m=t===sa,c=n.includes("fa-duotone")||n.includes("fad"),p=u.familyDefault==="duotone",v=e.prefix==="fad"||e.prefix==="fa-duotone";if(!m&&(c||p||v)&&(e.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Ji.includes(t)){var x=Object.keys(s).find(function(S){return Qi.includes(S)});if(x||u.autoFetchSvg){var y=rr.get(t).defaultShortPrefixId;e.prefix=y,e.iconName=Y(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=W()||"fas"),e}var ao=(function(){function a(){xe(this,a),this.definitions={}}return Se(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Wa(s,o[s]);var l=Za[z][s];l&&Wa(l,o[s]),Ut()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,m=u[2];t[s]||(t[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(t[s][c]=u)}),t[s][l]=u}),t}}])})(),In=[],V={},K={},no=Object.keys(K);function to(a,n){var t=n.mixoutsTo;return In=a,V={},Object.keys(K).forEach(function(e){no.indexOf(e)===-1&&delete K[e]}),In.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),ba(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){V[o]||(V[o]=[]),V[o].push(i[o])})}e.provides&&e.provides(K)}),t}function Ua(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=V[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function G(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=V[a]||[];r.forEach(function(i){i.apply(null,t)})}function U(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return K[a]?K[a].apply(null,n):void 0}function Ya(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||W();if(n)return n=Y(t,n)||n,wn(Gt.definitions,t,n)||wn(N.styles,t,n)}var Gt=new ao,eo=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},ro={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(G("beforeI2svg",n),U("pseudoElements2svg",n),U("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Wi(function(){oo({autoReplaceSvgRoot:t}),G("watch",n)})}},io={icon:function(n){if(n===null)return null;if(ba(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Y(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=Aa(n[0]);return{prefix:e,iconName:Y(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Ii))){var r=ka(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:Y(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:Y(i,n)||n}}}},P={noAuto:eo,config:d,dom:ro,parse:io,library:Gt,findIconDefinition:Ya,toHtml:fa},oo=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?w:t;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&P.dom.i2svg({node:e})};function Ia(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return fa(e)})}}),Object.defineProperty(a,"node",{get:function(){if(M){var e=w.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function so(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(nn(o)&&t.found&&!e.found){var s=t.width,l=t.height,u={x:s/l/2,y:.5};r.style=Sa(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function lo(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:e}]}]}function fo(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in a})}function rn(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,l=a.maskId,u=a.extra,m=a.watchable,c=m===void 0?!1:m,p=e.found?e:t,v=p.width,x=p.height,y=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return u.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!fo(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[X]="");var A=f(f({},S),{},{prefix:r,iconName:i,main:t,mask:e,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),k=e.found&&t.found?U("generateAbstractMask",A)||{children:[],attributes:{}}:U("generateAbstractIcon",A)||{children:[],attributes:{}},E=k.children,D=k.attributes;return A.children=E,A.attributes=D,s?lo(A):so(A)}function En(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[X]="");var u=f({},i.styles);nn(r)&&(u.transform=Mi({transform:r,width:t,height:e}),u["-webkit-transform"]=u.transform);var m=Sa(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[n]}),c}function uo(a){var n=a.content,t=a.extra,e=f(f({},t.attributes),{},{class:t.classes.join(" ")}),r=Sa(t.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[n]}),i}var Oa=N.styles;function Xa(a){var n=a[0],t=a[1],e=a.slice(4),r=wa(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Pa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Pa.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Pa.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var co={found:!1,width:512,height:512};function mo(a,n){!zt&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function Ga(a,n){var t=n;return n==="fa"&&d.styleDefault!==null&&(n=W()),new Promise(function(e,r){if(t==="fa"){var i=Yt(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&Oa[n]&&Oa[n][a]){var o=Oa[n][a];return e(Xa(o))}mo(a,n),e(f(f({},co),{},{icon:d.showMissingIcons&&a?U("missingIconAbstract")||{}:{}}))})}var zn=function(){},Ba=d.measurePerformance&&ua&&ua.mark&&ua.measure?ua:{mark:zn,measure:zn},ta='FA "7.3.1"',go=function(n){return Ba.mark("".concat(ta," ").concat(n," begins")),function(){return Bt(n)}},Bt=function(n){Ba.mark("".concat(ta," ").concat(n," ends")),Ba.measure("".concat(ta," ").concat(n),"".concat(ta," ").concat(n," begins"),"".concat(ta," ").concat(n," ends"))},on={begin:go,end:Bt},va=function(){};function Pn(a){var n=a.getAttribute?a.getAttribute(X):null;return typeof n=="string"}function po(a){var n=a.getAttribute?a.getAttribute(Ja):null,t=a.getAttribute?a.getAttribute(Qa):null;return n&&t}function vo(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function ho(){if(d.autoReplaceSvg===!0)return ha.replace;var a=ha[d.autoReplaceSvg];return a||ha.replace}function bo(a){return w.createElementNS("http://www.w3.org/2000/svg",a)}function yo(a){return w.createElement(a)}function qt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?bo:yo:t;if(typeof a=="string")return w.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(qt(o,{ceFn:e}))}),r}function xo(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ha={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(qt(r),t)}),t.getAttribute(X)===null&&d.keepOriginalSource){var e=w.createComment(xo(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~an(t).indexOf(d.replacementClass))return ha.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return fa(s)}).join(`
`);t.setAttribute(X,""),t.innerHTML=o}};function Fn(a){a()}function Ht(a,n){var t=typeof n=="function"?n:va;if(a.length===0)t();else{var e=Fn;d.mutateApproach===Si&&(e=R.requestAnimationFrame||Fn),e(function(){var r=ho(),i=on.begin("mutate");a.map(r),i(),t()})}}var sn=!1;function Vt(){sn=!0}function qa(){sn=!1}var xa=null;function Cn(a){if(gn&&d.observeMutations){var n=a.treeCallback,t=n===void 0?va:n,e=a.nodeCallback,r=e===void 0?va:e,i=a.pseudoElementsCallback,o=i===void 0?va:i,s=a.observeMutationsRoot,l=s===void 0?w:s;xa=new gn(function(u){if(!sn){var m=W();Z(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Pn(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&Pn(c.target)&&~Pi.indexOf(c.attributeName))if(c.attributeName==="class"&&po(c.target)){var p=ka(an(c.target)),v=p.prefix,x=p.iconName;c.target.setAttribute(Ja,v||m),x&&c.target.setAttribute(Qa,x)}else vo(c.target)&&r(c.target)})}}),M&&xa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wo(){xa&&xa.disconnect()}function So(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function Ao(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=ka(an(a));return r.prefix||(r.prefix=W()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Bi(r.prefix,a.innerText)||en(r.prefix,_t(a.innerText))),!r.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function ko(a){var n=Z(a.attributes).reduce(function(t,e){return t.name!=="class"&&t.name!=="style"&&(t[e.name]=e.value),t},{});return n}function Io(){return{iconName:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ao(a),e=t.iconName,r=t.prefix,i=t.rest,o=ko(a),s=Ua("parseNodeAttributes",{},a),l=n.styleParser?So(a):[];return f({iconName:e,prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eo=N.styles;function Kt(a){var n=d.autoReplaceSvg==="nest"?On(a,{styleParser:!1}):On(a);return~n.extra.classes.indexOf(Ft)?U("generateLayersText",a,n):U("generateSvgReplacementMutation",a,n)}function zo(){return[].concat(T(wt),T(St))}function Nn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var t=w.documentElement.classList,e=function(c){return t.add("".concat(hn,"-").concat(c))},r=function(c){return t.remove("".concat(hn,"-").concat(c))},i=d.autoFetchSvg?zo():Jn.concat(Object.keys(Eo));i.includes("fa")||i.push("fa");var o=[".".concat(Ft,":not([").concat(X,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var l=on.begin("onTree"),u=s.reduce(function(m,c){try{var p=Kt(c);p&&m.push(p)}catch(v){zt||v.name==="MissingIcon"&&console.error(v)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(p){Ht(p,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),l(),m()})}).catch(function(p){l(),c(p)})})}function Po(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kt(a).then(function(t){t&&Ht([t],n)})}function Fo(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ya(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Ya(r||{})),a(e,f(f({},t),{},{mask:r}))}}var Co=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?j:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,u=t.maskId,m=u===void 0?null:u,c=t.classes,p=c===void 0?[]:c,v=t.attributes,x=v===void 0?{}:v,y=t.styles,S=y===void 0?{}:y;if(n){var A=n.prefix,k=n.iconName,E=n.icon;return Ia(f({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:t}),rn({icons:{main:Xa(E),mask:l?Xa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:f(f({},j),r),symbol:o,maskId:m,extra:{attributes:x,styles:S,classes:p}})})}},Oo={mixout:function(){return{icon:Fo(Co)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Nn,t.nodeCallback=Po,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?w:e,i=t.callback,o=i===void 0?function(){}:i;return Nn(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.prefix,o=e.transform,s=e.symbol,l=e.mask,u=e.maskId,m=e.extra;return new Promise(function(c,p){Promise.all([Ga(r,i),l.iconName?Ga(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=wa(v,2),y=x[0],S=x[1];c([t,rn({icons:{main:y,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(p)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=Sa(s);l.length>0&&(r.style=l);var u;return nn(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},No={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Ia({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(T(i)).join(" ")},children:o}]})}}}},To={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.title;var r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,l=e.styles,u=l===void 0?{}:l;return Ia({type:"counter",content:t},function(){return G("beforeDOMElementCreation",{content:t,params:e}),uo({content:t.toString(),extra:{attributes:s,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(T(i))}})})}}}},jo={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?j:r,o=e.classes,s=o===void 0?[]:o,l=e.attributes,u=l===void 0?{}:l,m=e.styles,c=m===void 0?{}:m;return Ia({type:"text",content:t},function(){return G("beforeDOMElementCreation",{content:t,params:e}),En({content:t,transform:f(f({},j),i),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(T(s))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.transform,i=e.extra,o=null,s=null;if(Vn){var l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([t,En({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Jt=new RegExp('"',"ug"),Tn=[1105920,1112319],jn=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),er),xi),mr),Ha=Object.keys(jn).reduce(function(a,n){return a[n.toLowerCase()]=jn[n],a},{}),_o=Object.keys(Ha).reduce(function(a,n){var t=Ha[n];return a[n]=t[900]||T(Object.entries(t))[0][1],a},{});function $o(a){var n=a.replace(Jt,"");return _t(T(n)[0]||"")}function Lo(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),e=t.replace(Jt,""),r=e.codePointAt(0),i=r>=Tn[0]&&r<=Tn[1],o=e.length===2?e[0]===e[1]:!1;return i||o||n}function Mo(a,n){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(n),r=isNaN(e)?"normal":e;return(Ha[t]||{})[r]||_o[t]}function _n(a,n){var t="".concat(wi).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=Z(a.children),o=i.filter(function(aa){return aa.getAttribute(La)===n})[0],s=R.getComputedStyle(a,n),l=s.getPropertyValue("font-family"),u=l.match(Ei),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return a.removeChild(o),e();if(u&&c!=="none"&&c!==""){var p=s.getPropertyValue("content"),v=Mo(l,m),x=$o(p),y=u[0].startsWith("FontAwesome"),S=Lo(s),A=en(v,x),k=A;if(y){var E=qi(x);E.iconName&&E.prefix&&(A=E.iconName,v=E.prefix)}if(A&&!S&&(!o||o.getAttribute(Ja)!==v||o.getAttribute(Qa)!==k)){a.setAttribute(t,k),o&&a.removeChild(o);var D=Io(),F=D.extra;F.attributes[La]=n,Ga(A,v).then(function(aa){var Ea=rn(f(f({},D),{},{icons:{main:aa,mask:Xt()},prefix:v,iconName:k,extra:F,watchable:!0})),na=w.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(na,a.firstChild):a.appendChild(na),na.outerHTML=Ea.map(function(za){return fa(za)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function Do(a){return Promise.all([_n(a,"::before"),_n(a,"::after")])}function Ro(a){return a.parentNode!==document.head&&!~Ai.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(La)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Wo=function(n){return!!n&&Et.some(function(t){return n.includes(t)})},Uo=function(n){if(!n)return[];var t=new Set,e=n.split(/,(?![^()]*\))/).map(function(l){return l.trim()});e=e.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=pa(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Wo(o)){var s=Et.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){r.e(l)}finally{r.f()}return t};function $n(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var t;if(n)t=a;else if(d.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var e=new Set,r=pa(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=pa(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=Uo(u.selectorText),c=pa(m),p;try{for(c.s();!(p=c.n()).done;){var v=p.value;e.add(v)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!e.size)return;var x=Array.from(e).join(", ");try{t=a.querySelectorAll(x)}catch{}}return new Promise(function(y,S){var A=Z(t).filter(Ro).map(Do),k=on.begin("searchPseudoElements");Vt(),Promise.all(A).then(function(){k(),qa(),y()}).catch(function(){k(),qa(),S()})})}}var Yo={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=$n,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?w:e;d.searchPseudoElements&&$n(r)}}},Ln=!1,Xo={mixout:function(){return{dom:{unwatch:function(){Vt(),Ln=!0}}}},hooks:function(){return{bootstrap:function(){Cn(Ua("mutationObserverCallbacks",{}))},noAuto:function(){wo()},watch:function(t){var e=t.observeMutationsRoot;Ln?qa():Cn(Ua("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Mn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},Go={mixout:function(){return{parse:{transform:function(t){return Mn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Mn(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:c,path:p};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),v.path)}]}]}}}},Na={x:0,y:0,width:"100%",height:"100%"};function Dn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function Bo(a){return a.tag==="g"?a.children:[a]}var qo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?ka(r.split(" ").map(function(o){return o.trim()})):Xt();return i.prefix||(i.prefix=W()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,u=i.width,m=i.icon,c=o.width,p=o.icon,v=Li({transform:l,containerWidth:c,iconWidth:u}),x={tag:"rect",attributes:f(f({},Na),{},{fill:"white"})},y=m.children?{children:m.children.map(Dn)}:{},S={tag:"g",attributes:f({},v.inner),children:[Dn(f({tag:m.tag,attributes:f(f({},m.attributes),v.path)},y))]},A={tag:"g",attributes:f({},v.outer),children:[S]},k="mask-".concat(s||yn()),E="clip-".concat(s||yn()),D={tag:"mask",attributes:f(f({},Na),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,A]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Bo(p)},D]};return e.push(F,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(k,")")},Na)}),{children:e,attributes:r}}}},Ho={provides:function(n){var t=!1;R.matchMedia&&(t=R.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Vo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Ko=[Ri,Oo,No,To,jo,Yo,Xo,Go,qo,Ho,Vo];to(Ko,{mixoutsTo:P});P.noAuto;var Q=P.config,Jo=P.library;P.dom;var Qt=P.parse;P.findIconDefinition;P.toHtml;var Qo=P.icon;P.layer;P.text;P.counter;var Zo={prefix:"fab",iconName:"github-alt",icon:[512,512,[],"f113","M202.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM496 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3l48.2 0c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},as={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},ns={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ts={prefix:"fab",iconName:"500px",icon:[384,512,[],"f26e","M71.8 344.3c-6.5-14.2-6.9-18.3 7.4-23.1 25.6-8 8 9.2 43.2 49.2l.3 0 0-93.9c1.2-50.2 44-92.2 97.7-92.2 53.9 0 97.7 43.5 97.7 96.8 0 63.4-60.8 113.2-128.5 93.3-10.5-4.2-2.1-31.7 8.5-28.6 53 0 89.4-10.1 89.4-64.4 0-61-77.1-89.6-116.9-44.6-23.5 26.4-17.6 42.1-17.6 157.6 50.7 31 118.3 22 160.4-20.1 24.8-24.8 38.5-58 38.5-93 0-35.2-13.8-68.2-38.8-93.3-24.8-24.8-57.8-38.5-93.3-38.5S151 163.3 126.3 188c-.3 .3-16 16.5-21.2 23.9l-.5 .6c-3.3 4.7-6.3 9.1-20.1 6.1-6.9-1.7-14.3-5.8-14.3-11.8L70.2 20c0-5 3.9-10.5 10.5-10.5L322 9.5c8.3 0 8.3 11.6 8.3 15.1 0 3.9 0 15.1-8.3 15.1l-223.2 0 0 132.9 .3 0c104.2-109.8 282.8-36 282.8 108.9 0 178.1-244.8 220.3-310.1 62.8zM135.1 83.5c-.5 4.2 4.6 24.5 14.6 20.6 124.8-47.5 202.8 40.4 209.4 40.4 4.8 0 22.8-15.3 14.3-22.8-93.2-89-234.5-57-238.3-38.2zM361.5 414.7c-110 109.9-299 60.8-332-104.2 0-12.2-30.4-7.4-28.9 3.3 24 173.4 246 256.9 381.6 121.3 6.9-7.8-12.6-28.4-20.7-20.4zM182.1 306.6c0 4 4.3 7.3 5.5 8.5 3 3 6.1 4.4 8.5 4.4 3.8 0 2.6 .2 22.3-19.5 19.6 19.3 19.1 19.5 22.3 19.5 5.4 0 18.5-10.4 10.7-18.2l-17.3-17.3 18.2-18.2c6.3-6.8-10.1-21.8-16.2-15.7L218.2 268c-18.6-18.8-18.4-19.5-21.5-19.5-5 0-18 11.7-12.4 17.3L202.5 284c-18.1 17.9-20.4 19.2-20.4 22.6z"]},es={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};function rs(a){return a=a-0,a===a}function Zt(a){return rs(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,t)=>t?t.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var is=(a,n)=>b.createElement("stop",{key:`${n}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function os(a){return a.charAt(0).toUpperCase()+a.slice(1)}var q=new Map,ss=1e3;function ls(a){if(q.has(a))return q.get(a);const n={};let t=0;const e=a.length;for(;t<e;){const r=a.indexOf(";",t),i=r===-1?e:r,o=a.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const m=Zt(l);n[m.startsWith("webkit")?os(m):m]=u}}}t=i+1}if(q.size===ss){const r=q.keys().next().value;r&&q.delete(r)}return q.set(a,n),n}function ae(a,n,t={}){if(typeof n=="string")return n;const e=(n.children||[]).map(c=>{let p=c;return("fill"in t||t.gradientFill)&&c.tag==="path"&&"fill"in c.attributes&&(p={...c,attributes:{...c.attributes,fill:void 0}}),ae(a,p)}),r=n.attributes||{},i={};for(const[c,p]of Object.entries(r))switch(!0){case c==="class":{i.className=p;break}case c==="style":{i.style=ls(String(p));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=p;break}default:i[Zt(c)]=p}const{style:o,role:s,"aria-label":l,gradientFill:u,...m}=t;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:c,stops:p=[],...v}=u;e.unshift(a(c==="linear"?"linearGradient":"radialGradient",{...v,id:u.id},p.map(is)))}return a(n.tag,{...i,...m},...e)}var fs=ae.bind(null,b.createElement),Rn=(a,n)=>{const t=Ta.useId();return a||(n?t:void 0)},us=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},cs="searchPseudoElementsFullScan"in Q&&typeof Q.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",ms=Number.parseInt(cs)>=7,ds=()=>ms,ia="fa",I={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},gs={left:"fa-pull-left",right:"fa-pull-right"},ps={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},vs={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},C={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function hs(a){const n=Q.cssPrefix||Q.familyPrefix||ia;return n===ia?a:a.replace(new RegExp(String.raw`(?<=^|\s)${ia}-`,"g"),`${n}-`)}function bs(a){const{beat:n,fade:t,beatFade:e,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:m,inverse:c,border:p,flip:v,size:x,rotation:y,pull:S,swapOpacity:A,rotateBy:k,widthAuto:E,canvasSquare:D,canvasRoomy:F,flip360:aa,buzz:Ea,float:na,jello:za,spinSnap:ie,spinSnap4:oe,spinSnap8:se,swing:le,wag:fe,className:ln}=a,h=[];return ln&&h.push(...ln.split(" ")),n&&h.push(I.beat),t&&h.push(I.fade),e&&h.push(I.beatFade),r&&h.push(I.bounce),i&&h.push(I.shake),o&&h.push(I.spin),l&&h.push(I.spinReverse),s&&h.push(I.spinPulse),u&&h.push(I.pulse),m&&h.push(C.fixedWidth),c&&h.push(C.inverse),p&&h.push(C.border),v===!0&&h.push(C.flip),(v==="horizontal"||v==="both")&&h.push(C.flipHorizontal),(v==="vertical"||v==="both")&&h.push(C.flipVertical),x!=null&&h.push(vs[x]),y!=null&&y!==0&&h.push(ps[y]),S!=null&&h.push(gs[S]),A&&h.push(C.swapOpacity),ds()?(k&&h.push(C.rotateBy),E&&h.push(C.widthAuto),D&&h.push(C.canvasSquare),F&&h.push(C.canvasRoomy),aa&&h.push(I.flip360),Ea&&h.push(I.buzz),na&&h.push(I.float),za&&h.push(I.jello),ie&&h.push(I.spinSnap),oe&&h.push(I.spinSnap4),se&&h.push(I.spinSnap8),le&&h.push(I.swing),fe&&h.push(I.wag),(Q.cssPrefix||Q.familyPrefix||ia)===ia?h:h.map(hs)):h}var ys=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Wn(a){if(a)return ys(a)?a:Qt.icon(a)}function xs(a){return Object.keys(a)}var Un=new us("FontAwesomeIcon"),ne={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},ws=new Set(Object.keys(ne)),te=b.forwardRef((a,n)=>{const t={...ne,...a},{icon:e,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:u}=t,m=Rn(l,!!r),c=Rn(s,!!o),p=Wn(e);if(!p)return Un.error("Icon lookup is undefined",e),null;const v=bs(t),x=typeof u=="string"?Qt.transform(u):u,y=Wn(r),S=Qo(p,{...v.length>0&&{classes:v},...x&&{transform:x},...y&&{mask:y},symbol:i,title:o,titleId:c,maskId:m});if(!S)return Un.error("Could not find icon",p),null;const{abstract:A}=S,k={ref:n};for(const E of xs(t))ws.has(E)||(k[E]=t[E]);return fs(A[0],k)});te.displayName="FontAwesomeIcon";Jo.add(ts,es,Zo,ns,as);const Ss=({name:a,href:n})=>b.createElement("a",{href:n,title:a},b.createElement(te,{icon:["fab",a]})),As=L.div`
  margin: 20px 0;
  text-align: center;

  & a {
    display: inline-block;
    margin: 5px;
    color: #fff;
  }

  & a span {
    transition: color .2s ease-in;
  }

  & a:hover {
    text-decoration: none;
  }

  & a:hover span.fa-linkedin {
    color: #4875b4;
  }

  & a:hover span.fa-twitter {
    color: #3cf;
  }

  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`,ee=a=>{const n=a.icons.map(t=>b.createElement(Ss,{key:t.name,name:t.name,href:t.href}));return b.createElement(As,{...a},n)};ee.__docgenInfo={description:"",methods:[],displayName:"SocialIcons",props:{icons:{required:!0,tsType:{name:"Array",elements:[{name:"Icon"}],raw:"Icon[]"},description:""},style:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string | number }",signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},description:""}}};const ks=L.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
`,Is=L.div`
  padding-top: 6px;
  color: #fff;
  text-align: center;

  a {
    color: #9880dc;
  }
`,Es=L(ee)`
  margin-left: -8px;
  text-align: left;
`,zs=L(O.Box)`
  margin: 2em auto;
`,Ps=L.div`
  & > div > div {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(4, 1fr);
  }
`,re=()=>b.createElement(ks,null,b.createElement(O.Flex,{flexWrap:"wrap",justifyContent:"space-around"},b.createElement(O.Box,{px:2,width:[1,1/2,1/3,1/6]},b.createElement(O.Flex,{flexDirection:"column"},b.createElement(O.Box,null,b.createElement(de,{block:!0})),b.createElement(O.Box,null,b.createElement(Es,{icons:[{name:"twitter",href:"https://twitter.com/tubone24"},{name:"github-alt",href:"https://github.com/tubone24"},{name:"facebook",href:"https://www.facebook.com/yu.otsubo"},{name:"instagram",href:"https://www.instagram.com/mugimugi.cutedog/"}]})))),b.createElement(O.Box,{width:[1,1/2,1/3,1/6]},b.createElement(O.Flex,{justifyContent:"center",flexDirection:"column"},b.createElement(O.Box,null,b.createElement(Is,null,b.createElement("h4",null,"©tubone24 2017-",new Date().getFullYear()))),b.createElement(zs,null,b.createElement(ge,{onClick:()=>{ue("html")},small:!0,dark:!0,opaque:!0},"Top")))),b.createElement(O.Box,{width:[4/5,1/2,1/3,1/6],pt:2},b.createElement(O.Flex,{alignItems:"center",justifyContent:"center"},b.createElement(Ps,null,b.createElement(Xn,null))))));re.__docgenInfo={description:"",methods:[],displayName:"Footer"};const Ys={title:"Components/Footer",component:re},ga={},Xs=["Default"];ga.parameters={...ga.parameters,docs:{...ga.parameters?.docs,source:{originalSource:"{}",...ga.parameters?.docs?.source}}};export{ga as Default,Xs as __namedExportsOrder,Ys as default};
