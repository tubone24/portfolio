import{R as a}from"./iframe-CphyIQAT.js";import{C as c,H as p}from"./styled-components.browser.esm-BTdXR96J.js";import{L as d}from"./gatsby-CX-ecYvs.js";import"./preload-helper-C1FmrZbK.js";const f=p.ol`
  padding-top: 10px;
  list-style: none;
  margin: 0;
  & li a,
  & li {
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    color: #fff;
  }
  & > li + li:before {
    padding: 0 8px;
    color: #ccc;
    content: ">";
  }
  & > li:last-child > a {
    color: #777;
    pointer-events: none;
    cursor: default;
  }
  @media (min-width: 831px) {
    float: right;
  }
  ${e=>e.dark&&c`
      & li a,
      & li {
        color: #444;
      }
    `}
`,l=e=>{var r;const m=(r=e.crumbs)==null?void 0:r.map(function(n){return a.createElement("li",{key:n.name},a.createElement(d,{to:n.link||"/"},n.name))});return a.createElement(f,{...e},m)};l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{crumbs:{required:!1,tsType:{name:"Array",elements:[{name:"Crumb"}],raw:"Crumb[]"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""}}};const x={title:"Components/BreadCrumb",component:l},t={args:{dark:!1,crumbs:[{name:"test",link:"/"},{name:"test2",link:"/2"}]}};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,x as default};
