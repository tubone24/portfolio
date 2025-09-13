import{R as e}from"./iframe-CphyIQAT.js";import{H as n}from"./styled-components.browser.esm-BTdXR96J.js";import{m as o}from"./style-BBdntTTQ.js";import"./preload-helper-C1FmrZbK.js";const c=t=>e.createElement("img",{alt:t.alt||"",...t}),f=c;c.__docgenInfo={description:"",methods:[],displayName:"Img"};const x=n.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #333;
  padding-bottom: 40px;
  margin-bottom: 40px;

  ${o.xs`
    width: 90%;
  `}

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,u=n.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ${o.xs`
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  `}
`,b=n.div`
  width: 120px;
  height: 168px;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  overflow: hidden;

  ${u}:hover & {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`,I=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,v=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`,w=n.h6`
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 2px;
`,E=n.p`
  font-size: 13px;
  line-height: 24px;
  color: #fefefe;
  opacity: 0.5;
  margin: 0;
`,D=n.span`
  color: #fefefe;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 13px;
  position: absolute;
  top: 0;
  right: 0;

  ${o.xs`
    position: static;
    margin-top: 8px;
  `}
`,S=[{id:"yaさしいmcp入門",title:"やさしいMCP入門",authors:["御田稔","大坪悠"],publisher:"秀和システム新社",releaseDate:"2025年07月01日",year:"July 2025",description:"AIエージェント時代の標準規格MCP（モデル コンテキスト プロトコル）の入門書。大バズりしたスライド「やさしいMCP入門」の著者が新技術の基礎をやさしく解説。",imageUrl:"https://m.media-amazon.com/images/I/61sKi1t0SQL._SL1500_.jpg",amazonUrl:"https://amzn.asia/d/drKHEyi",imageFileName:"61sKi1t0SQL"},{id:"aiエージェント開発運用入門",title:"AIエージェント開発 / 運用入門",authors:["御田稔","大坪悠","塚田真規"],publisher:"SBクリエイティブ",releaseDate:"2025年10月01日",year:"October 2025",description:"「AIエージェント」の基本・作り方・活用方法が、この一冊でぜんぶ学べる！昨今話題の「AIエージェント」について、基礎の基礎から１つずつ丁寧に、しっかりと解説した本格入門書です。",imageUrl:"https://m.media-amazon.com/images/I/61E5zCTuJoL._SL1024_.jpg",amazonUrl:"https://amzn.asia/d/2SURdGV",imageFileName:"61PHdrnK1YL"}],s=({booksImages:t})=>{const h=a=>{var l,m;if(!a||!t||!t.edges)return null;const r=t.edges.find(y=>y.node.name.includes(a));return((m=(l=r==null?void 0:r.node)==null?void 0:l.childImageSharp)==null?void 0:m.gatsbyImageData)||null};return e.createElement(e.Fragment,null,S.map(a=>{const r=h(a.imageFileName);return e.createElement(x,{key:a.id},e.createElement(u,{href:a.amazonUrl,target:"_blank",rel:"noopener noreferrer"},e.createElement(b,null,r?e.createElement(f,{image:r,alt:a.title}):e.createElement(I,{src:a.imageUrl,alt:a.title,loading:"lazy"})),e.createElement(v,null,e.createElement(D,null,a.year),e.createElement(w,null,a.title),e.createElement(E,null,a.authors.join("、")," / ",a.publisher))))}))};s.__docgenInfo={description:"",methods:[],displayName:"Publications",props:{booksImages:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}},description:""}}};const j={title:"Components/Publications",component:s},z=t=>e.createElement("div",{style:{background:"#020d05",padding:"40px",minHeight:"100vh"}},e.createElement(s,{...t})),i=z.bind({});i.args={};var p,g,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  background: '#020d05',
  padding: '40px',
  minHeight: '100vh'
}}>
    <Publications {...args} />
  </div>`,...(d=(g=i.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const A=["Default"];export{i as Default,A as __namedExportsOrder,j as default};
