import{R as e}from"./iframe-B9TW-IsP.js";import{C as i,H as p}from"./styled-components.browser.esm-D0CgqRs1.js";import{d as o}from"./index-B1l8AGqd.js";import{s as c}from"./index-CAlU-e6o.js";import{N as d}from"./name-CNqtWWXw.js";import{m as u}from"./style-25SFZr9l.js";import"./preload-helper-PPVm8Dsz.js";const f=p.div`
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
    font-size: 13px;
    list-style: none;
  }

  & ul > li a,
  & ul > li {
    position: relative;
    height: 62px;
    color: #fff;
    cursor: pointer;
    float: right;
    font-size: 11px;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }

  & ul > li a {
    margin-right: 32px;
    font-family: Raleway;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ${r=>r.dark&&i`
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

  ${r=>r.main&&i`
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      background: transparent;
    `}

  ${u.xs`
    & ul {
      display: none;
    }
  `}
`,s=r=>{const m=r.children.map(a=>{if(a?.props?.id)return{name:a.props.children,href:`#${a.props.id}`}}).filter(a=>a!=null).reverse().map(a=>{if(a!==void 0)return e.createElement("li",{key:a.name},e.createElement("a",{onClick:()=>{c(a.href)}},a.name))});return e.createElement(f,{dark:r.dark,main:r.main,role:"navigation"},e.createElement(o.Flex,null,e.createElement(o.Box,{px:2,width:[1,1/3,2/6]},e.createElement(d,null)),e.createElement(o.Box,{px:2,width:[0,2/3,4/6]},e.createElement("ul",null,m))))};s.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{dark:{required:!1,tsType:{name:"boolean"},description:""},main:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"Children"}],raw:"Children[]"},description:""}}};const w={title:"Components/NavBar",component:s,parameters:{backgrounds:{default:"twitter",values:[{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}]}}},l=[e.createElement("span",{id:"about-me"},"about"),e.createElement("span",{id:"portfolio"},"portfolio"),e.createElement("span",{id:"hobby"},"hobby")],t={args:{dark:!0,children:l}},n={args:{main:!0,children:l}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dark: true,
    children
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    main: true,
    children
  }
}`,...n.parameters?.docs?.source}}};const B=["Dark","Main"];export{t as Dark,n as Main,B as __namedExportsOrder,w as default};
