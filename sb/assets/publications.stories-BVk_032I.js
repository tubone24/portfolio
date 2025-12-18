import{R as a}from"./iframe-D2_6hnXY.js";import{H as t}from"./styled-components.browser.esm-C92GuyYj.js";import{G as p}from"./gatsby-plugin-image-sUEHtKiU.js";import{m as i}from"./style-B3EHiXZ_.js";const g=t.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #333;
  padding-bottom: 40px;
  margin-bottom: 40px;

  ${i.xs`
    width: 90%;
  `}

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,l=t.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ${i.xs`
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  `}
`,d=t.div`
  overflow: hidden;
  width: 120px;
  height: 168px;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgb(0 0 0 / 30%);
  transition: all 0.3s ease-in-out;

  ${l}:hover & {
    box-shadow: 0 15px 35px rgb(0 0 0 / 50%);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`,c=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,u=t.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
`,h=t.h6`
  margin: 0 0 8px;
  color: #fff;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.4;
  text-transform: uppercase;
`,y=t.p`
  margin: 0;
  color: #fefefe;
  font-size: 13px;
  line-height: 24px;
  opacity: 0.5;
`,f=t.span`
  color: #fefefe;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 13px;
  position: absolute;
  top: 0;
  right: 0;

  ${i.xs`
    position: static;
    margin-top: 8px;
  `}
`,x=[{id:"yaさしいmcp入門",title:"やさしいMCP入門",authors:["御田稔","大坪悠"],publisher:"秀和システム新社",releaseDate:"2025年07月01日",year:"July 2025",description:"AIエージェント時代の標準規格MCP（モデル コンテキスト プロトコル）の入門書。大バズりしたスライド「やさしいMCP入門」の著者が新技術の基礎をやさしく解説。",imageUrl:"https://m.media-amazon.com/images/I/61sKi1t0SQL._SL1500_.jpg",amazonUrl:"https://amzn.asia/d/drKHEyi",imageFileName:"61sKi1t0SQL"},{id:"aiエージェント開発運用入門",title:"AIエージェント開発 / 運用入門",authors:["御田稔","大坪悠","塚田真規"],publisher:"SBクリエイティブ",releaseDate:"2025年10月01日",year:"October 2025",description:"「AIエージェント」の基本・作り方・活用方法が、この一冊でぜんぶ学べる！昨今話題の「AIエージェント」について、基礎の基礎から１つずつ丁寧に、しっかりと解説した本格入門書です。",imageUrl:"https://m.media-amazon.com/images/I/61E5zCTuJoL._SL1024_.jpg",amazonUrl:"https://amzn.asia/d/2SURdGV",imageFileName:"61PHdrnK1YL"}],o=({booksImages:n})=>{const s=e=>!e||!n||!n.edges?null:n.edges.find(m=>m.node.name.includes(e))?.node?.childImageSharp?.gatsbyImageData||null;return a.createElement(a.Fragment,null,x.map(e=>{const r=s(e.imageFileName);return a.createElement(g,{key:e.id},a.createElement(l,{href:e.amazonUrl,target:"_blank",rel:"noopener noreferrer"},a.createElement(d,null,r?a.createElement(p,{image:r,alt:e.title}):a.createElement(c,{src:e.imageUrl,alt:e.title,loading:"lazy"})),a.createElement(u,null,a.createElement(f,null,e.year),a.createElement(h,null,e.title),a.createElement(y,null,e.authors.join("、")," / ",e.publisher))))}))};o.__docgenInfo={description:"",methods:[],displayName:"Publications",props:{booksImages:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  edges: ReadonlyArray<{
    node: {
      name: string;
      childImageSharp?: {
        gatsbyImageData?: any;
      } | null;
    };
  }>;
}`,signature:{properties:[{key:"edges",value:{name:"ReadonlyArray",elements:[{name:"signature",type:"object",raw:`{
  node: {
    name: string;
    childImageSharp?: {
      gatsbyImageData?: any;
    } | null;
  };
}`,signature:{properties:[{key:"node",value:{name:"signature",type:"object",raw:`{
  name: string;
  childImageSharp?: {
    gatsbyImageData?: any;
  } | null;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"childImageSharp",value:{name:"union",raw:`{
  gatsbyImageData?: any;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  gatsbyImageData?: any;
}`,signature:{properties:[{key:"gatsbyImageData",value:{name:"any",required:!1}}]}},{name:"null"}],required:!1}}]},required:!0}}]}}],raw:`ReadonlyArray<{
  node: {
    name: string;
    childImageSharp?: {
      gatsbyImageData?: any;
    } | null;
  };
}>`,required:!0}}]}},description:""}}};const z={title:"Components/Publications",component:o},b=t.div`
  background: #020d05;
  padding: 40px;
  min-height: 100vh;
`,I=n=>a.createElement(b,null,a.createElement(o,{...n})),w=I.bind({});w.args={};const _=["Default"];export{w as Default,_ as __namedExportsOrder,z as default};
