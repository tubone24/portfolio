import{R as a}from"./iframe-D2_6hnXY.js";import{C as o,H as i}from"./styled-components.browser.esm-C92GuyYj.js";import{L as l}from"./gatsby-dYZQy5wb.js";const s=i.ol`
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
  ${e=>e.dark&&o`
      & li a,
      & li {
        color: #444;
      }
    `}
`,n=e=>{const r=e.crumbs?.map(function(t){return a.createElement("li",{key:t.name},a.createElement(l,{to:t.link||"/"},t.name))});return a.createElement(s,{...e},r)};n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{crumbs:{required:!1,tsType:{name:"Array",elements:[{name:"Crumb"}],raw:"Crumb[]"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""}}};const d={title:"Components/BreadCrumb",component:n},f={args:{dark:!1,crumbs:[{name:"test",link:"/"},{name:"test2",link:"/2"}]}},u=["Default"];export{f as Default,u as __namedExportsOrder,d as default};
