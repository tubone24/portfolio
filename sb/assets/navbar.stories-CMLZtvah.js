import{R as e}from"./iframe-Lt_VTZvN.js";import{C as o,H as g}from"./styled-components.browser.esm-Be7fCmOg.js";import{F as x,B as i}from"./index-BVloObUv.js";import{s as y}from"./index-CfTM1CLV.js";import{N as b}from"./name-DzYa9y9X.js";import{m as k}from"./style-BnGeGPYJ.js";import"./preload-helper-C1FmrZbK.js";import"./index-D3GKtnDC.js";const v=g.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  & ul > li a {
    font-family: "Raleway";
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${r=>r.dark&&o`
      background: #fff;
      & ul > li a,
      & ul > li {
        color: #242424;
        opacity: 0.6;
      }
      & ul > li a:hover {
        opacity: 1;
      }
      a {
        color: #000;
      }
    `}

  ${r=>r.main&&o`
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    `}

  ${k.xs`
    & ul {
      display: none;
    }
  `}
`,u=r=>{const h=r.children.map(a=>{if(a.props.id)return{name:a.props.children,href:`#${a.props.id}`}}).filter(a=>a!=null).reverse().map(a=>{if(a!==void 0)return e.createElement("li",{key:a.name},e.createElement("a",{onClick:()=>{y(a.href)}},a.name))});return e.createElement(v,{dark:r.dark,main:r.main,role:"navigation"},e.createElement(x,null,e.createElement(i,{px:2,width:[1,1/3,2/6]},e.createElement(b,null)),e.createElement(i,{px:2,width:[0,2/3,4/6]},e.createElement("ul",null,h))))};u.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{dark:{required:!1,tsType:{name:"boolean"},description:""},main:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"Children"}],raw:"Children[]"},description:""}}};const q={title:"Components/NavBar",component:u,parameters:{backgrounds:{default:"twitter",values:[{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}]}}},f=[e.createElement("span",{id:"about-me"},"about"),e.createElement("span",{id:"portfolio"},"portfolio"),e.createElement("span",{id:"hobby"},"hobby")],t={args:{dark:!0,children:f}},n={args:{main:!0,children:f}};var s,l,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    dark: true,
    children
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    main: true,
    children
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const z=["Dark","Main"];export{t as Dark,n as Main,z as __namedExportsOrder,q as default};
