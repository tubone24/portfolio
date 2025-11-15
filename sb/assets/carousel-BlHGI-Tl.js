import{r,R as a}from"./iframe-EalttzZq.js";import{H as d}from"./styled-components.browser.esm-pnu7_eU_.js";import{u as L,L as M}from"./useHeroImages-DZxUteCx.js";const N=d.div`
  position: relative;
  overflow: visible;
  width: 100%;
  min-height: 400px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
`,_=d.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 400px;
`,q=d.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  transform-style: preserve-3d;
  cursor: ${t=>t.$dragging?t.$isDragging?"grabbing":"grab":"default"};
`,F=d.div`
  width: 70%;
  position: absolute;
  left: 15%;
  top: 0;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backface-visibility: hidden;
  pointer-events: ${t=>t.$index===t.$currentIndex?"auto":"none"};

  ${t=>{const l=t.$index-t.$currentIndex,c=Math.abs(l),o=l*100;return c===0?`
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
`,w=d.button`
  position: absolute;
  top: 50%;
  ${t=>t.$direction==="prev"?"left: 20px;":"right: 20px;"}
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
`,R=({children:t,autoplay:l=!1,autoplayInterval:c=3e3,wrapAround:o=!1,dragging:h=!1})=>{const[i,p]=r.useState(o?1:0),[f,u]=r.useState(!1),[g,m]=r.useState(!1),[e,y]=r.useState(0),[C,$]=r.useState(0),b=r.useRef(null),I=r.useRef(null),E=o?[t[t.length-1],...t,t[0]]:t,X=E.length,v=r.useCallback((n,s=!0)=>{u(s),p(n)},[]),x=r.useCallback(()=>{f||v(i+1)},[i,f,v]),S=r.useCallback(()=>{f||v(i-1)},[i,f,v]);r.useEffect(()=>{const n=()=>{o?i===0?(u(!1),p(t.length)):i===t.length+1?(u(!1),p(1)):u(!1):u(!1)},s=I.current;if(s)return s.addEventListener("transitionend",n),()=>s.removeEventListener("transitionend",n)},[i,t.length,o]),r.useEffect(()=>{if(!l)return;const n=()=>{b.current=setInterval(()=>{x()},c)},s=()=>{b.current&&(clearInterval(b.current),b.current=null)};return n(),()=>s()},[l,c,x]);const T=n=>{if(!h)return;m(!0);const s="touches"in n?n.touches[0].clientX:n.clientX;y(s)},z=n=>{if(!g)return;const D=("touches"in n?n.touches[0].clientX:n.clientX)-e;$(D)},k=()=>{if(!g)return;m(!1);const n=50;C>n?S():C<-n&&x(),$(0)};return a.createElement(N,null,a.createElement(_,null,a.createElement(q,{ref:I,onMouseDown:T,onMouseMove:z,onMouseUp:k,onMouseLeave:k,onTouchStart:T,onTouchMove:z,onTouchEnd:k,$dragging:h,$isDragging:g},E.map((n,s)=>a.createElement(F,{key:s,$index:s,$currentIndex:i,$totalSlides:X},n))),!g&&a.createElement(a.Fragment,null,a.createElement(w,{$direction:"prev",onClick:S,"aria-label":"Previous slide"},"‹"),a.createElement(w,{$direction:"next",onClick:x,"aria-label":"Next slide"},"›"))))};R.__docgenInfo={description:"",methods:[],displayName:"CustomCarousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoplayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},wrapAround:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dragging:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O=d.div`
  position: relative;
  width: 85%;
  margin: 0 auto;
  padding-top: 63.75%; /* 4:3 aspect ratio scaled to 85% (75% * 0.85 = 63.75%) */
  overflow: hidden;
  background-color: #f5f5f5;
  cursor: pointer;
`,V=d.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  filter: blur(0);
`,Z=t=>{const l=L(),[c,o]=r.useState(!1),[h,i]=r.useState(0),p=e=>{i(e),o(!0)},f=()=>{i(0),o(!1)},u=e=>e.includes("enosham")||e.includes("enoshoma")?"江ノ島":e.includes("geshoku")?"月食":e.includes("gokurakuzi")?"極楽寺":e.includes("hongkong")?"香港":e.includes("izu")?"伊豆":e.includes("kyoto_osaka")?"京都・大阪":e.includes("kyotonara")?"京都・奈良":e.includes("miyazaki")?"宮崎":e.includes("naraosaka")?"奈良・大阪":e.includes("oarai")?"大洗":e.includes("parau")?"パラオ":e.includes("thai")?"タイ":e.includes("ume")?"梅":e.includes("umi")?"海":e.includes("夜景")?"夜景":"風景",g=l.map(e=>({src:e.childImageSharp.lightboxFluid.src,title:u(e.name)})),m=l.map((e,y)=>a.createElement(O,{key:e.name,onClick:()=>p(y)},a.createElement(V,{src:e.childImageSharp?.carouselFluid?.src,alt:u(e.name),loading:"lazy"})));return a.createElement("div",null,a.createElement(R,{wrapAround:!0,dragging:!0,autoplay:!0},m),a.createElement(M,{open:c,close:f,index:h,slides:g,styles:{container:{backgroundColor:"rgba(0, 0, 0, 0.9)"}}}))};Z.__docgenInfo={description:"",methods:[],displayName:"Carousel"};export{Z as C};
