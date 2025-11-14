import{R as a}from"./iframe-BwC_smXQ.js";import{C as s,H as i}from"./styled-components.browser.esm-BRlNcBEG.js";import{L as l}from"./gatsby-BEP-HLLv.js";import"./preload-helper-PPVm8Dsz.js";const c=i.ol`
  padding-top: 10px;
  list-style: none;
  margin: 0;

  & li a,
  & li {
    display: inline-block;
    color: #fff;
    font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 24px;
    text-decoration: none;
    text-transform: uppercase;
  }

  & > li + li::before {
    padding: 0 8px;
    color: #ccc;
    content: ">";
  }

  & > li:last-child > a {
    color: #777;
    cursor: default;
    pointer-events: none;
  }

  @media (width >= 831px) {
    float: right;
  }
  ${e=>e.dark&&s`
      & li a,
      & li {
        color: #444;
      }
    `}
`,r=e=>{const o=e.crumbs?.map(function(n){return a.createElement("li",{key:n.name},a.createElement(l,{to:n.link||"/"},n.name))});return a.createElement(c,{...e},o)};r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{crumbs:{required:!1,tsType:{name:"Array",elements:[{name:"Crumb"}],raw:"Crumb[]"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""}}};const u={title:"Components/BreadCrumb",component:r},t={args:{dark:!1,crumbs:[{name:"test",link:"/"},{name:"test2",link:"/2"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dark: false,
    crumbs: [{
      name: "test",
      link: "/"
    }, {
      name: "test2",
      link: "/2"
    }]
  }
}`,...t.parameters?.docs?.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,u as default};
