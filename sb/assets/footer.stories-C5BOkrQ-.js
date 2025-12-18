import{r as Qt,R as b}from"./iframe-D2_6hnXY.js";import{C as Jt,H as L}from"./styled-components.browser.esm-C92GuyYj.js";import{P as p,d as C}from"./index-BzKtEwdK.js";import{s as sn}from"./index-BhQ3M4rT.js";import{L as ln,u as fn}from"./useHeroImages-BrzndsGH.js";import{N as cn}from"./name-D7qhHEJ7.js";import{B as un}from"./button-5TjQgex9.js";import"./index-DMo7t1FQ.js";import"./index-CEx8HiW3.js";import"./gatsby-dYZQy5wb.js";import"./gatsby-plugin-image-sUEHtKiU.js";const B={small:"2px",large:"4px"},mn=L.div`
  overflow: hidden;
  margin-right: ${B.small};
  color: palevioletred;

  @media (width <= 500px) {
    margin-right: -${B.large};
  }
`,dn=L.a`
  box-sizing: border-box;
  display: block;
  float: left;
  line-height: 0;
  padding-right: ${B.small};
  padding-bottom: ${B.small};
  overflow: hidden;

  ${t=>t.landscape&&Jt`
      width: 30%;
    `}
  ${t=>t.square&&Jt`
      width: 40%;
      padding-bottom: 0;

      @media (width <= 500px) {
        padding-bottom: 0;
      }
    `}
	@media (width <= 500px) {
    padding-right: ${B.large};
    padding-bottom: ${B.large};
  }
`,vn=L.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  border: 0;
`,Ee=t=>{const[e,n]=Qt.useState(!1),[a,r]=Qt.useState(0),o=(u,f)=>{f.preventDefault(),r(u),n(!0)},i=()=>{r(0),n(!1)},s=()=>{if(!t.images)return;const u=t.images.map((f,m)=>b.createElement(dn,{href:f.src,key:m,onClick:v=>o(m,v),...f.orientation},b.createElement(vn,{src:f.thumbnail})));return b.createElement(mn,null,u)},l=t.images?t.images.map(u=>({src:u.src,title:u.caption})):[];return t.images&&b.createElement("div",{className:"Gallery"},t.heading&&b.createElement("h2",null,t.heading),t.subheading&&b.createElement("p",null,t.subheading),s(),b.createElement(ln,{open:e,close:i,index:a,slides:l}))};Ee.__docgenInfo={description:"",methods:[],displayName:"Gallery",props:{heading:{required:!1,tsType:{name:"string"},description:""},images:{required:!0,tsType:{name:"Array",elements:[{name:"GalleryImage"}],raw:"GalleryImage[]"},description:""},showThumbnails:{required:!1,tsType:{name:"boolean"},description:""},subheading:{required:!1,tsType:{name:"string"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},landscape:{required:!1,tsType:{name:"boolean"},description:""}}};const Oe=t=>{const e=fn(),n=r=>r.includes("enosham")||r.includes("enoshoma")?"江ノ島":r.includes("geshoku")?"月食":r.includes("gokurakuzi")?"極楽寺":r.includes("hongkong")?"香港":r.includes("izu")?"伊豆":r.includes("kyoto_osaka")?"京都・大阪":r.includes("kyotonara")?"京都・奈良":r.includes("miyazaki")?"宮崎":r.includes("naraosaka")?"奈良・大阪":r.includes("oarai")?"大洗":r.includes("parau")?"パラオ":r.includes("thai")?"タイ":r.includes("ume")?"梅":r.includes("umi")?"海":r.includes("夜景")?"夜景":"風景",a=e.map(r=>({src:r.childImageSharp.fluid.src,thumbnail:r.childImageSharp.fixed.src,caption:n(r.name)}));return b.createElement(Ee,{images:a})};Oe.__docgenInfo={description:"",methods:[],displayName:"FlickrLightbox"};function Zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zt(Object(n),!0).forEach(function(a){hn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(t)}function pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bn(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function gn(t,e,n){return e&&bn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function hn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ft(t,e){return kn(t)||xn(t,e)||Se(t,e)||En()}function vt(t){return yn(t)||wn(t)||Se(t)||An()}function yn(t){if(Array.isArray(t))return Et(t)}function kn(t){if(Array.isArray(t))return t}function wn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!(e&&a.length===e));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Se(t,e){if(t){if(typeof t=="string")return Et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Et(t,e)}}function Et(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function An(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function En(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var te=function(){},$t={},Ie={},Ce=null,Pe={mark:te,measure:te};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Ie=document),typeof MutationObserver<"u"&&(Ce=MutationObserver),typeof performance<"u"&&(Pe=performance)}catch{}var On=$t.navigator||{},ee=On.userAgent,ne=ee===void 0?"":ee,F=$t,h=Ie,ae=Ce,it=Pe;F.document;var z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Te=~ne.indexOf("MSIE")||~ne.indexOf("Trident/"),N="___FONT_AWESOME___",Ot=16,Ne="fa",_e="svg-inline--fa",Y="data-fa-i2svg",St="data-fa-pseudo-element",Sn="data-fa-pseudo-element-pending",Dt="data-prefix",Yt="data-icon",re="fontawesome-i2svg",In="async",Cn=["HTML","HEAD","STYLE","SCRIPT"],Me=(function(){try{return!0}catch{return!1}})(),Ut={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ct={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Le={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Pn={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Tn=/fa[srltdbk\-\ ]/,ze="fa-layers-text",Nn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,_n={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Re=[1,2,3,4,5,6,7,8,9,10],Mn=Re.concat([11,12,13,14,15,16,17,18,19,20]),Ln=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],D={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zn=[].concat(vt(Object.keys(ct)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",D.GROUP,D.SWAP_OPACITY,D.PRIMARY,D.SECONDARY]).concat(Re.map(function(t){return"".concat(t,"x")})).concat(Mn.map(function(t){return"w-".concat(t)})),je=F.FontAwesomeConfig||{};function Rn(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var Fn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fn.forEach(function(t){var e=Ft(t,2),n=e[0],a=e[1],r=jn(Rn(n));r!=null&&(je[a]=r)})}var $n={familyPrefix:Ne,styleDefault:"solid",replacementClass:_e,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},tt=c(c({},$n),je);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(tt).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){tt[t]=n,ot.forEach(function(a){return a(d)})},get:function(){return tt[t]}})});F.FontAwesomeConfig=d;var ot=[];function Dn(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var H=Ot,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yn(t){if(!(!t||!z)){var e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=h.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return h.head.insertBefore(e,a),t}}var Un="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nt(){for(var t=12,e="";t-- >0;)e+=Un[Math.random()*62|0];return e}function K(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Fe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Fe(t[n]),'" ')},"").trim()}function pt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ht(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function Hn(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Bn(t){var e=t.transform,n=t.width,a=n===void 0?Ot:n,r=t.height,o=r===void 0?Ot:r,i="";return Te?i+="translate(".concat(e.x/H-a/2,"em, ").concat(e.y/H-o/2,"em) "):i+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "),i+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Gn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $e(){var t=Ne,e=_e,n=d.familyPrefix,a=d.replacementClass,r=Gn;if(n!==t||a!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ie=!1;function yt(){d.autoAddCss&&!ie&&(Yn($e()),ie=!0)}var qn={mixout:function(){return{dom:{css:$e,insertCss:yt}}},hooks:function(){return{beforeDOMElementCreation:function(){yt()},beforeI2svg:function(){yt()}}}},_=F||{};_[N]||(_[N]={});_[N].styles||(_[N].styles={});_[N].hooks||(_[N].hooks={});_[N].shims||(_[N].shims=[]);var P=_[N],De=[],Xn=function t(){h.removeEventListener("DOMContentLoaded",t),ut=1,De.map(function(e){return e()})},ut=!1;z&&(ut=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),ut||h.addEventListener("DOMContentLoaded",Xn));function Vn(t){z&&(ut?setTimeout(t,0):De.push(t))}function at(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Fe(t):"<".concat(e," ").concat(Wn(a),">").concat(o.map(at).join(""),"</").concat(e,">")}function oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var kt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,l,u,f;for(a===void 0?(l=1,f=e[o[0]]):(l=0,f=a);l<i;l++)u=o[l],f=s(f,e[u],u,e);return f};function Kn(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function It(t){var e=Kn(t);return e.length===1?e[0].toString(16):null}function Qn(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function se(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ct(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=se(e);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(t,se(e)):P.styles[t]=c(c({},P.styles[t]||{}),o),t==="fas"&&Ct("fa",e)}var et=P.styles,Jn=P.shims,Zn=Object.values(Le),Bt=null,Ye={},Ue={},We={},He={},Be={},ta=Object.keys(Ut);function ea(t){return~zn.indexOf(t)}function na(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ea(r)?r:null}var Ge=function(){var e=function(o){return kt(et,function(i,s,l){return i[l]=kt(s,o,{}),i},{})};Ye=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),Ue=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),Be=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in et||d.autoFetchSvg,a=kt(Jn,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});We=a.names,He=a.unicodes,Bt=bt(d.styleDefault)};Dn(function(t){Bt=bt(t.styleDefault)});Ge();function Gt(t,e){return(Ye[t]||{})[e]}function aa(t,e){return(Ue[t]||{})[e]}function G(t,e){return(Be[t]||{})[e]}function qe(t){return We[t]||{prefix:null,iconName:null}}function ra(t){var e=He[t],n=Gt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return Bt}var qt=function(){return{prefix:null,iconName:null,rest:[]}};function bt(t){var e=Ut[t],n=ct[t]||ct[e],a=t in P.styles?t:null;return n||a||null}function gt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,a=n===void 0?!1:n,r=null,o=t.reduce(function(i,s){var l=na(d.familyPrefix,s);if(et[s]?(s=Zn.includes(s)?Pn[s]:s,r=s,i.prefix=s):ta.indexOf(s)>-1?(r=s,i.prefix=bt(s)):l?i.iconName=l:s!==d.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var u=r==="fa"?qe(i.iconName):{},f=G(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||f||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!et.far&&et.fas&&!d.autoFetchSvg&&(i.prefix="fas")}return i},qt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=$()||"fas"),o}var ia=(function(){function t(){pn(this,t),this.definitions={}}return gn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=c(c({},n.definitions[s]||{}),i[s]),Ct(s,i[s]);var l=Le[s];l&&Ct(l,i[s]),Ge()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),t})(),le=[],q={},V={},oa=Object.keys(V);function sa(t,e){var n=e.mixoutsTo;return le=t,q={},Object.keys(V).forEach(function(a){oa.indexOf(a)===-1&&delete V[a]}),le.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),ft(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){q[i]||(q[i]=[]),q[i].push(o[i])})}a.provides&&a.provides(V)}),n}function Pt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=q[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=q[t]||[];r.forEach(function(o){o.apply(null,n)})}function M(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Tt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||$();if(e)return e=G(n,e)||e,oe(Xe.definitions,n,e)||oe(P.styles,n,e)}var Xe=new ia,la=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,U("noAuto")},fa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(U("beforeI2svg",e),M("pseudoElements2svg",e),M("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Vn(function(){ua({autoReplaceSvgRoot:n}),U("watch",e)})}},ca={icon:function(e){if(e===null)return null;if(ft(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=bt(e[0]);return{prefix:a,iconName:G(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.familyPrefix,"-"))>-1||e.match(Tn))){var r=gt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=$();return{prefix:o,iconName:G(o,e)||e}}}},S={noAuto:la,config:d,dom:fa,parse:ca,library:Xe,findIconDefinition:Tt,toHtml:at},ua=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?h:n;(Object.keys(P.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&S.dom.i2svg({node:a})};function ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return at(a)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ma(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Ht(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=pt(c(c({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function da(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(d.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Xt(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,l=t.title,u=t.maskId,f=t.titleId,m=t.extra,v=t.watchable,g=v===void 0?!1:v,k=a.found?a:n,O=k.width,w=k.height,y=r==="fak",x=[d.replacementClass,o?"".concat(d.familyPrefix,"-").concat(o):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),A={children:[],attributes:c(c({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(w)})},I=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/w*16*.0625,"em")}:{};g&&(A.attributes[Y]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||nt())},children:[l]}),delete A.attributes.title);var E=c(c({},A),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:s,styles:c(c({},I),m.styles)}),R=a.found&&n.found?M("generateAbstractMask",E)||{children:[],attributes:{}}:M("generateAbstractIcon",E)||{children:[],attributes:{}},Q=R.children,J=R.attributes;return E.children=Q,E.attributes=J,s?da(E):ma(E)}function fe(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,l=s===void 0?!1:s,u=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[Y]="");var f=c({},i.styles);Ht(r)&&(f.transform=Bn({transform:r,width:n,height:a}),f["-webkit-transform"]=f.transform);var m=pt(f);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[e]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function va(t){var e=t.content,n=t.title,a=t.extra,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=pt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var wt=P.styles;function Nt(t){var e=t[0],n=t[1],a=t.slice(4),r=Ft(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var pa={found:!1,width:512,height:512};function ba(t,e){!Me&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _t(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=$()),new Promise(function(a,r){if(M("missingIconAbstract"),n==="fa"){var o=qe(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&wt[e]&&wt[e][t]){var i=wt[e][t];return a(Nt(i))}ba(t,e),a(c(c({},pa),{},{icon:d.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var ce=function(){},Mt=d.measurePerformance&&it&&it.mark&&it.measure?it:{mark:ce,measure:ce},Z='FA "6.0.0"',ga=function(e){return Mt.mark("".concat(Z," ").concat(e," begins")),function(){return Ve(e)}},Ve=function(e){Mt.mark("".concat(Z," ").concat(e," ends")),Mt.measure("".concat(Z," ").concat(e),"".concat(Z," ").concat(e," begins"),"".concat(Z," ").concat(e," ends"))},Vt={begin:ga,end:Ve},st=function(){};function ue(t){var e=t.getAttribute?t.getAttribute(Y):null;return typeof e=="string"}function ha(t){var e=t.getAttribute?t.getAttribute(Dt):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function ya(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ka(){if(d.autoReplaceSvg===!0)return lt.replace;var t=lt[d.autoReplaceSvg];return t||lt.replace}function wa(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function xa(t){return h.createElement(t)}function Ke(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?wa:xa:n;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Ke(i,{ceFn:a}))}),r}function Aa(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var lt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Ke(r),n)}),n.getAttribute(Y)===null&&d.keepOriginalSource){var a=h.createComment(Aa(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Wt(n).indexOf(d.replacementClass))return lt.replace(e);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return at(s)}).join(`
`);n.setAttribute(Y,""),n.innerHTML=i}};function me(t){t()}function Qe(t,e){var n=typeof e=="function"?e:st;if(t.length===0)n();else{var a=me;d.mutateApproach===In&&(a=F.requestAnimationFrame||me),a(function(){var r=ka(),o=Vt.begin("mutate");t.map(r),o(),n()})}}var Kt=!1;function Je(){Kt=!0}function Lt(){Kt=!1}var mt=null;function de(t){if(ae&&d.observeMutations){var e=t.treeCallback,n=e===void 0?st:e,a=t.nodeCallback,r=a===void 0?st:a,o=t.pseudoElementsCallback,i=o===void 0?st:o,s=t.observeMutationsRoot,l=s===void 0?h:s;mt=new ae(function(u){if(!Kt){var f=$();K(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ue(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&ue(m.target)&&~Ln.indexOf(m.attributeName))if(m.attributeName==="class"&&ha(m.target)){var v=gt(Wt(m.target)),g=v.prefix,k=v.iconName;m.target.setAttribute(Dt,g||f),k&&m.target.setAttribute(Yt,k)}else ya(m.target)&&r(m.target)})}}),z&&mt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ea(){mt&&mt.disconnect()}function Oa(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Sa(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=gt(Wt(t));return r.prefix||(r.prefix=$()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=aa(r.prefix,t.innerText)||Gt(r.prefix,It(t.innerText))),r}function Ia(t){var e=K(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||nt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ca(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ve(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sa(t),a=n.iconName,r=n.prefix,o=n.rest,i=Ia(t),s=Pt("parseNodeAttributes",{},t),l=e.styleParser?Oa(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Pa=P.styles;function Ze(t){var e=d.autoReplaceSvg==="nest"?ve(t,{styleParser:!1}):ve(t);return~e.extra.classes.indexOf(ze)?M("generateLayersText",t,e):M("generateSvgReplacementMutation",t,e)}function pe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=h.documentElement.classList,a=function(m){return n.add("".concat(re,"-").concat(m))},r=function(m){return n.remove("".concat(re,"-").concat(m))},o=d.autoFetchSvg?Object.keys(Ut):Object.keys(Pa),i=[".".concat(ze,":not([").concat(Y,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Y,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=K(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Vt.begin("onTree"),u=s.reduce(function(f,m){try{var v=Ze(m);v&&f.push(v)}catch(g){Me||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,m){Promise.all(u).then(function(v){Qe(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(v){l(),m(v)})})}function Ta(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ze(t).then(function(n){n&&Qe([n],e)})}function Na(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Tt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Tt(r||{})),t(a,c(c({},n),{},{mask:r}))}}var _a=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?T:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,m=n.title,v=m===void 0?null:m,g=n.titleId,k=g===void 0?null:g,O=n.classes,w=O===void 0?[]:O,y=n.attributes,x=y===void 0?{}:y,A=n.styles,I=A===void 0?{}:A;if(e){var E=e.prefix,R=e.iconName,Q=e.icon;return ht(c({type:"icon"},e),function(){return U("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?x["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(k||nt()):(x["aria-hidden"]="true",x.focusable="false")),Xt({icons:{main:Nt(Q),mask:l?Nt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:R,transform:c(c({},T),r),symbol:i,title:v,maskId:f,titleId:k,extra:{attributes:x,styles:I,classes:w}})})}},Ma={mixout:function(){return{icon:Na(_a)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pe,n.nodeCallback=Ta,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?h:a,o=n.callback,i=o===void 0?function(){}:o;return pe(r,i)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,f=a.mask,m=a.maskId,v=a.extra;return new Promise(function(g,k){Promise.all([_t(r,s),f.iconName?_t(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var w=Ft(O,2),y=w[0],x=w[1];g([n,Xt({icons:{main:y,mask:x},prefix:s,iconName:r,transform:l,symbol:u,maskId:m,title:o,titleId:i,extra:v,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=pt(s);l.length>0&&(r.style=l);var u;return Ht(i)&&(u=M("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},La={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return ht({type:"layer"},function(){U("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(vt(o)).join(" ")},children:i}]})}}}},za={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,f=a.styles,m=f===void 0?{}:f;return ht({type:"counter",content:n},function(){return U("beforeDOMElementCreation",{content:n,params:a}),va({content:n.toString(),title:o,extra:{attributes:u,styles:m,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(vt(s))}})})}}}},Ra={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?T:r,i=a.title,s=i===void 0?null:i,l=a.classes,u=l===void 0?[]:l,f=a.attributes,m=f===void 0?{}:f,v=a.styles,g=v===void 0?{}:v;return ht({type:"text",content:n},function(){return U("beforeDOMElementCreation",{content:n,params:a}),fe({content:n,transform:c(c({},T),o),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.familyPrefix,"-layers-text")].concat(vt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(Te){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,fe({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},ja=new RegExp('"',"ug"),be=[1105920,1112319];function Fa(t){var e=t.replace(ja,""),n=Qn(e,0),a=n>=be[0]&&n<=be[1],r=e.length===2?e[0]===e[1]:!1;return{value:It(r?e[0]:e),isSecondary:a||r}}function ge(t,e){var n="".concat(Sn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var o=K(t.children),i=o.filter(function(R){return R.getAttribute(St)===e})[0],s=F.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Nn),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ct[l[2].toLowerCase()]:_n[u],g=Fa(m),k=g.value,O=g.isSecondary,w=l[0].startsWith("FontAwesome"),y=Gt(v,k),x=y;if(w){var A=ra(k);A.iconName&&A.prefix&&(y=A.iconName,v=A.prefix)}if(y&&!O&&(!i||i.getAttribute(Dt)!==v||i.getAttribute(Yt)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);var I=Ca(),E=I.extra;E.attributes[St]=e,_t(y,v).then(function(R){var Q=Xt(c(c({},I),{},{icons:{main:R,mask:qt()},prefix:v,iconName:x,extra:E,watchable:!0})),J=h.createElement("svg");e==="::before"?t.insertBefore(J,t.firstChild):t.appendChild(J),J.outerHTML=Q.map(function(W){return at(W)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function $a(t){return Promise.all([ge(t,"::before"),ge(t,"::after")])}function Da(t){return t.parentNode!==document.head&&!~Cn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(St)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function he(t){if(z)return new Promise(function(e,n){var a=K(t.querySelectorAll("*")).filter(Da).map($a),r=Vt.begin("searchPseudoElements");Je(),Promise.all(a).then(function(){r(),Lt(),e()}).catch(function(){r(),Lt(),n()})})}var Ya={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=he,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?h:a;d.searchPseudoElements&&he(r)}}},ye=!1,Ua={mixout:function(){return{dom:{unwatch:function(){Je(),ye=!0}}}},hooks:function(){return{bootstrap:function(){de(Pt("mutationObserverCallbacks",{}))},noAuto:function(){Ea()},watch:function(n){var a=n.observeMutationsRoot;ye?Lt():de(Pt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ke=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Wa={mixout:function(){return{parse:{transform:function(n){return ke(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=ke(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(f)},v={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:m,path:v};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),g.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ha(t){return t.tag==="g"?t.children:[t]}var Ba={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?gt(r.split(" ").map(function(i){return i.trim()})):qt();return o.prefix||(o.prefix=$()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,f=o.icon,m=i.width,v=i.icon,g=Hn({transform:l,containerWidth:m,iconWidth:u}),k={tag:"rect",attributes:c(c({},xt),{},{fill:"white"})},O=f.children?{children:f.children.map(we)}:{},w={tag:"g",attributes:c({},g.inner),children:[we(c({tag:f.tag,attributes:c(c({},f.attributes),g.path)},O))]},y={tag:"g",attributes:c({},g.outer),children:[w]},x="mask-".concat(s||nt()),A="clip-".concat(s||nt()),I={tag:"mask",attributes:c(c({},xt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,y]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Ha(v)},I]};return a.push(E,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},xt)}),{children:a,attributes:r}}}},Ga={provides:function(e){var n=!1;F.matchMedia&&(n=F.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},qa={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Xa=[qn,Ma,La,za,Ra,Ya,Ua,Wa,Ba,Ga,qa];sa(Xa,{mixoutsTo:S});S.noAuto;S.config;var Va=S.library;S.dom;var zt=S.parse;S.findIconDefinition;S.toHtml;var Ka=S.icon;S.layer;S.text;S.counter;var Qa={prefix:"fab",iconName:"500px",icon:[448,512,[],"f26e","M103.3 344.3c-6.5-14.2-6.9-18.3 7.4-23.1 25.6-8 8 9.2 43.2 49.2h.3v-93.9c1.2-50.2 44-92.2 97.7-92.2 53.9 0 97.7 43.5 97.7 96.8 0 63.4-60.8 113.2-128.5 93.3-10.5-4.2-2.1-31.7 8.5-28.6 53 0 89.4-10.1 89.4-64.4 0-61-77.1-89.6-116.9-44.6-23.5 26.4-17.6 42.1-17.6 157.6 50.7 31 118.3 22 160.4-20.1 24.8-24.8 38.5-58 38.5-93 0-35.2-13.8-68.2-38.8-93.3-24.8-24.8-57.8-38.5-93.3-38.5s-68.8 13.8-93.5 38.5c-.3.3-16 16.5-21.2 23.9l-.5.6c-3.3 4.7-6.3 9.1-20.1 6.1-6.9-1.7-14.3-5.8-14.3-11.8V20c0-5 3.9-10.5 10.5-10.5h241.3c8.3 0 8.3 11.6 8.3 15.1 0 3.9 0 15.1-8.3 15.1H130.3v132.9h.3c104.2-109.8 282.8-36 282.8 108.9 0 178.1-244.8 220.3-310.1 62.8zm63.3-260.8c-.5 4.2 4.6 24.5 14.6 20.6C306 56.6 384 144.5 390.6 144.5c4.8 0 22.8-15.3 14.3-22.8-93.2-89-234.5-57-238.3-38.2zM393 414.7C283 524.6 94 475.5 61 310.5c0-12.2-30.4-7.4-28.9 3.3 24 173.4 246 256.9 381.6 121.3 6.9-7.8-12.6-28.4-20.7-20.4zM213.6 306.6c0 4 4.3 7.3 5.5 8.5 3 3 6.1 4.4 8.5 4.4 3.8 0 2.6.2 22.3-19.5 19.6 19.3 19.1 19.5 22.3 19.5 5.4 0 18.5-10.4 10.7-18.2L265.6 284l18.2-18.2c6.3-6.8-10.1-21.8-16.2-15.7L249.7 268c-18.6-18.8-18.4-19.5-21.5-19.5-5 0-18 11.7-12.4 17.3L234 284c-18.1 17.9-20.4 19.2-20.4 22.6z"]},Ja={prefix:"fab",iconName:"facebook",icon:[512,512,[],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Za={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},tr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},er={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function xe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xe(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function tn(t,e){if(t==null)return{};var n=nr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Rt(t){return ar(t)||rr(t)||ir(t)||or()}function ar(t){if(Array.isArray(t))return jt(t)}function rr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ir(t,e){if(t){if(typeof t=="string")return jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jt(t,e)}}function jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,f=t.spinReverse,m=t.pulse,v=t.fixedWidth,g=t.inverse,k=t.border,O=t.listItem,w=t.flip,y=t.size,x=t.rotation,A=t.pull,I=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":v,"fa-inverse":g,"fa-border":k,"fa-li":O,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},X(e,"fa-".concat(y),typeof y<"u"&&y!==null),X(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),X(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),X(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(I).map(function(E){return I[E]?E:null}).filter(function(E){return E})}function lr(t){return t=t-0,t===t}function en(t){return lr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fr=["style"];function cr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ur(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=en(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[cr(r)]=o:e[r]=o,e},{})}function nn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return nn(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=ur(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[en(u)]=f}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=tn(n,fr);return r.attrs.style=j(j({},r.attrs.style),i),t.apply(void 0,[e.tag,j(j({},r.attrs),s)].concat(Rt(a)))}var an=!1;try{an=!0}catch{}function mr(){if(!an&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ae(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zt.icon)return zt.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function At(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?X({},t,e):{}}var dr=["forwardedRef"];function rt(t){var e=t.forwardedRef,n=tn(t,dr),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,l=n.titleId,u=n.maskId,f=Ae(a),m=At("classes",[].concat(Rt(sr(n)),Rt(i.split(" ")))),v=At("transform",typeof n.transform=="string"?zt.transform(n.transform):n.transform),g=At("mask",Ae(r)),k=Ka(f,j(j(j(j({},m),v),g),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!k)return mr("Could not find icon",f),null;var O=k.abstract,w={ref:e};return Object.keys(n).forEach(function(y){rt.defaultProps.hasOwnProperty(y)||(w[y]=n[y])}),vr(O[0],w)}rt.displayName="FontAwesomeIcon";rt.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};rt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var vr=nn.bind(null,b.createElement);Va.add(Qa,er,Za,tr,Ja);const pr=({name:t,href:e})=>b.createElement("a",{href:e,title:t},b.createElement(rt,{icon:["fab",t]})),br=L.div`
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
`,rn=t=>{const e=t.icons.map(n=>b.createElement(pr,{key:n.name,name:n.name,href:n.href}));return b.createElement(br,{...t},e)};rn.__docgenInfo={description:"",methods:[],displayName:"SocialIcons",props:{icons:{required:!0,tsType:{name:"Array",elements:[{name:"Icon"}],raw:"Icon[]"},description:""},style:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string | number }",signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},description:""}}};const gr=L.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
`,hr=L.div`
  padding-top: 6px;
  color: #fff;
  text-align: center;

  a {
    color: #9880dc;
  }
`,yr=L(rn)`
  margin-left: -8px;
  text-align: left;
`,kr=L(C.Box)`
  margin: 2em auto;
`,wr=L.div`
  & > div > div {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(4, 1fr);
  }
`,on=()=>b.createElement(gr,null,b.createElement(C.Flex,{flexWrap:"wrap",justifyContent:"space-around"},b.createElement(C.Box,{px:2,width:[1,1/2,1/3,1/6]},b.createElement(C.Flex,{flexDirection:"column"},b.createElement(C.Box,null,b.createElement(cn,{block:!0})),b.createElement(C.Box,null,b.createElement(yr,{icons:[{name:"twitter",href:"https://twitter.com/tubone24"},{name:"github-alt",href:"https://github.com/tubone24"},{name:"facebook",href:"https://www.facebook.com/yu.otsubo"},{name:"instagram",href:"https://www.instagram.com/mugimugi.cutedog/"}]})))),b.createElement(C.Box,{width:[1,1/2,1/3,1/6]},b.createElement(C.Flex,{justifyContent:"center",flexDirection:"column"},b.createElement(C.Box,null,b.createElement(hr,null,b.createElement("h4",null,"©tubone24 2017-",new Date().getFullYear()))),b.createElement(kr,null,b.createElement(un,{onClick:()=>{sn("html")},small:!0,dark:!0,opaque:!0},"Top")))),b.createElement(C.Box,{width:[4/5,1/2,1/3,1/6],pt:2},b.createElement(C.Flex,{alignItems:"center",justifyContent:"center"},b.createElement(wr,null,b.createElement(Oe,null))))));on.__docgenInfo={description:"",methods:[],displayName:"Footer"};const Mr={title:"Components/Footer",component:on},Lr={},zr=["Default"];export{Lr as Default,zr as __namedExportsOrder,Mr as default};
