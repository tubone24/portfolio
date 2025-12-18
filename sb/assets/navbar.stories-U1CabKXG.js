import{R as e}from"./iframe-D2_6hnXY.js";import{C as n,H as s}from"./styled-components.browser.esm-C92GuyYj.js";import{d as r}from"./index-BzKtEwdK.js";import{s as m}from"./index-BhQ3M4rT.js";import{N as p}from"./name-D7qhHEJ7.js";import{m as d}from"./style-B3EHiXZ_.js";const c=s.div`
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

  ${a=>a.dark&&n`
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

  ${a=>a.main&&n`
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      background: transparent;
    `}

  ${d.xs`
    & ul {
      display: none;
    }
  `}
`,i=a=>{const l=a.children.map(t=>{if(t?.props?.id)return{name:t.props.children,href:`#${t.props.id}`}}).filter(t=>t!=null).reverse().map(t=>{if(t!==void 0)return e.createElement("li",{key:t.name},e.createElement("a",{onClick:()=>{m(t.href)}},t.name))});return e.createElement(c,{dark:a.dark,main:a.main,role:"navigation"},e.createElement(r.Flex,null,e.createElement(r.Box,{px:2,width:[1,1/3,2/6]},e.createElement(p,null)),e.createElement(r.Box,{px:2,width:[0,2/3,4/6]},e.createElement("ul",null,l))))};i.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{dark:{required:!1,tsType:{name:"boolean"},description:""},main:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"Children"}],raw:"Children[]"},description:""}}};const v={title:"Components/NavBar",component:i,parameters:{backgrounds:{default:"twitter",values:[{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}]}}},o=[e.createElement("span",{id:"about-me"},"about"),e.createElement("span",{id:"portfolio"},"portfolio"),e.createElement("span",{id:"hobby"},"hobby")],E={args:{dark:!0,children:o}},k={args:{main:!0,children:o}},w=["Dark","Main"];export{E as Dark,k as Main,w as __namedExportsOrder,v as default};
