import{R as a}from"./iframe-BtEPCsUu.js";import{H as t}from"./styled-components.browser.esm-BnNln4Z4.js";import{G as y}from"./gatsby-plugin-image-CD406kLr.js";import{m as o}from"./style-BlcrEPX0.js";import"./preload-helper-C1FmrZbK.js";const f=t.div`
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
`,c=t.a`
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
`,x=t.div`
  width: 120px;
  height: 168px;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  overflow: hidden;

  ${c}:hover & {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`,b=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,I=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`,v=t.h6`
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 2px;
`,w=t.p`
  font-size: 13px;
  line-height: 24px;
  color: #fefefe;
  opacity: 0.5;
  margin: 0;
`,D=t.span`
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
`,E=[{id:"yaさしいmcp入門",title:"やさしいMCP入門",authors:["御田稔","大坪悠"],publisher:"秀和システム新社",releaseDate:"2025年07月01日",year:"July 2025",description:"AIエージェント時代の標準規格MCP（モデル コンテキスト プロトコル）の入門書。大バズりしたスライド「やさしいMCP入門」の著者が新技術の基礎をやさしく解説。",imageUrl:"https://m.media-amazon.com/images/I/61sKi1t0SQL._SL1500_.jpg",amazonUrl:"https://amzn.asia/d/drKHEyi",imageFileName:"61sKi1t0SQL"},{id:"aiエージェント開発運用入門",title:"AIエージェント開発 / 運用入門",authors:["御田稔","大坪悠","塚田真規"],publisher:"SBクリエイティブ",releaseDate:"2025年10月01日",year:"October 2025",description:"「AIエージェント」の基本・作り方・活用方法が、この一冊でぜんぶ学べる！昨今話題の「AIエージェント」について、基礎の基礎から１つずつ丁寧に、しっかりと解説した本格入門書です。",imageUrl:"https://m.media-amazon.com/images/I/61E5zCTuJoL._SL1024_.jpg",amazonUrl:"https://amzn.asia/d/2SURdGV",imageFileName:"61PHdrnK1YL"}],s=({booksImages:r})=>{const u=e=>{var l,m;if(!e||!r||!r.edges)return null;const n=r.edges.find(h=>h.node.name.includes(e));return((m=(l=n==null?void 0:n.node)==null?void 0:l.childImageSharp)==null?void 0:m.gatsbyImageData)||null};return a.createElement(a.Fragment,null,E.map(e=>{const n=u(e.imageFileName);return a.createElement(f,{key:e.id},a.createElement(c,{href:e.amazonUrl,target:"_blank",rel:"noopener noreferrer"},a.createElement(x,null,n?a.createElement(y,{image:n,alt:e.title}):a.createElement(b,{src:e.imageUrl,alt:e.title,loading:"lazy"})),a.createElement(I,null,a.createElement(D,null,e.year),a.createElement(v,null,e.title),a.createElement(w,null,e.authors.join("、")," / ",e.publisher))))}))};s.__docgenInfo={description:"",methods:[],displayName:"Publications",props:{booksImages:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}},description:""}}};const j={title:"Components/Publications",component:s},S=r=>a.createElement("div",{style:{background:"#020d05",padding:"40px",minHeight:"100vh"}},a.createElement(s,{...r})),i=S.bind({});i.args={};var p,g,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  background: '#020d05',
  padding: '40px',
  minHeight: '100vh'
}}>
    <Publications {...args} />
  </div>`,...(d=(g=i.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const A=["Default"];export{i as Default,A as __namedExportsOrder,j as default};
