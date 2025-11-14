import{r as n,R as a}from"./iframe-BwC_smXQ.js";import{H as g}from"./styled-components.browser.esm-BRlNcBEG.js";import{u as L,L as M}from"./useHeroImages-BJPMAwce.js";const N=g.div`
  position: relative;
  overflow: visible;
  width: 100%;
  min-height: 400px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
`,F=g.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 400px;
`,_=g.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  transform-style: preserve-3d;
`,q=g.div`
  width: 70%;
  position: absolute;
  left: 15%;
  top: 0;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backface-visibility: hidden;
  pointer-events: ${r=>r.$index===r.$currentIndex?"auto":"none"};

  ${r=>{const l=r.$index-r.$currentIndex,c=Math.abs(l),o=l*100;return c===0?`
        transform: translateX(${o}%) translateZ(0px) scale(1);
        opacity: 1;
        filter: brightness(1);
        z-index: 10;
      `:c===1?`
        transform: translateX(${o}%) translateZ(-200px) scale(0.8);
        opacity: 0.6;
        filter: brightness(0.7);
        z-index: 5;
      `:c===2?`
        transform: translateX(${o}%) translateZ(-350px) scale(0.65);
        opacity: 0.4;
        filter: brightness(0.5);
        z-index: 2;
      `:`
        transform: translateX(${o}%) translateZ(-450px) scale(0.5);
        opacity: 0.2;
        filter: brightness(0.3);
        z-index: 1;
      `}}
`,w=g.button`
  position: absolute;
  top: 50%;
  ${r=>r.$direction==="prev"?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgb(255 255 255 / 80%);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(255 255 255 / 100%);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`,R=({children:r,autoplay:l=!1,autoplayInterval:c=3e3,wrapAround:o=!1,dragging:h=!1})=>{const[i,p]=n.useState(o?1:0),[d,u]=n.useState(!1),[f,m]=n.useState(!1),[e,y]=n.useState(0),[C,E]=n.useState(0),b=n.useRef(null),I=n.useRef(null),T=o?[r[r.length-1],...r,r[0]]:r,X=T.length,v=n.useCallback((t,s=!0)=>{u(s),p(t)},[]),x=n.useCallback(()=>{d||v(i+1)},[i,d,v]),S=n.useCallback(()=>{d||v(i-1)},[i,d,v]);n.useEffect(()=>{const t=()=>{o?i===0?(u(!1),p(r.length)):i===r.length+1?(u(!1),p(1)):u(!1):u(!1)},s=I.current;if(s)return s.addEventListener("transitionend",t),()=>s.removeEventListener("transitionend",t)},[i,r.length,o]),n.useEffect(()=>{if(!l)return;const t=()=>{b.current=setInterval(()=>{x()},c)},s=()=>{b.current&&(clearInterval(b.current),b.current=null)};return t(),()=>s()},[l,c,x]);const $=t=>{if(!h)return;m(!0);const s="touches"in t?t.touches[0].clientX:t.clientX;y(s)},z=t=>{if(!f)return;const D=("touches"in t?t.touches[0].clientX:t.clientX)-e;E(D)},k=()=>{if(!f)return;m(!1);const t=50;C>t?S():C<-t&&x(),E(0)};return a.createElement(N,null,a.createElement(F,null,a.createElement(_,{ref:I,onMouseDown:$,onMouseMove:z,onMouseUp:k,onMouseLeave:k,onTouchStart:$,onTouchMove:z,onTouchEnd:k,style:{cursor:h?f?"grabbing":"grab":"default"}},T.map((t,s)=>a.createElement(q,{key:s,$index:s,$currentIndex:i,$totalSlides:X},t))),!f&&a.createElement(a.Fragment,null,a.createElement(w,{$direction:"prev",onClick:S,"aria-label":"Previous slide"},"‹"),a.createElement(w,{$direction:"next",onClick:x,"aria-label":"Next slide"},"›"))))};R.__docgenInfo={description:"",methods:[],displayName:"CustomCarousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoplayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},wrapAround:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dragging:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O=r=>{const l=L(),[c,o]=n.useState(!1),[h,i]=n.useState(0),p=e=>{i(e),o(!0)},d=()=>{i(0),o(!1)},u=e=>e.includes("enosham")||e.includes("enoshoma")?"江ノ島":e.includes("geshoku")?"月食":e.includes("gokurakuzi")?"極楽寺":e.includes("hongkong")?"香港":e.includes("izu")?"伊豆":e.includes("kyoto_osaka")?"京都・大阪":e.includes("kyotonara")?"京都・奈良":e.includes("miyazaki")?"宮崎":e.includes("naraosaka")?"奈良・大阪":e.includes("oarai")?"大洗":e.includes("parau")?"パラオ":e.includes("thai")?"タイ":e.includes("ume")?"梅":e.includes("umi")?"海":e.includes("夜景")?"夜景":"風景",f=l.map(e=>({src:e.childImageSharp.lightboxFluid.src,title:u(e.name)})),m=l.map((e,y)=>a.createElement("div",{key:e.name,style:{position:"relative",width:"85%",margin:"0 auto",paddingTop:"63.75%",overflow:"hidden",backgroundColor:"#f5f5f5",cursor:"pointer"},onClick:()=>p(y)},a.createElement("img",{src:e.childImageSharp?.carouselFluid?.src,alt:u(e.name),style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",filter:"blur(0)"},loading:"lazy"})));return a.createElement("div",null,a.createElement(R,{wrapAround:!0,dragging:!0,autoplay:!0},m),a.createElement(M,{open:c,close:d,index:h,slides:f,styles:{container:{backgroundColor:"rgba(0, 0, 0, 0.9)"}}}))};O.__docgenInfo={description:"",methods:[],displayName:"Carousel"};export{O as C};
