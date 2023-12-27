"use strict";(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[408],{"./src/stories/components/mui/label/tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,HasCombination:()=>HasCombination,Info:()=>Info,IsRounded:()=>IsRounded,Large:()=>Large,LargeHasCombination:()=>LargeHasCombination,Link:()=>Link,Medium:()=>Medium,Normal:()=>Normal,Primary:()=>Primary,PrimaryLight:()=>PrimaryLight,Small:()=>Small,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"React Component/Element/Tags/Tag",component:_components__WEBPACK_IMPORTED_MODULE_0__.Vp,tags:["autodocs"],parameters:{componentSubtitle:"Tag Element in Tag Group",docs:{description:{component:'This component put "Tag".'}}},argTypes:{children:{control:"text",description:"Tag label",table:{type:{summary:"ReactNode"}}},useAnchor:{control:"boolean",description:"Use anchor tag to surround children",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isAnchorClose:{control:"boolean",description:"Anchor is for close icon",if:{arg:"useAnchor",eq:!0},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"function",description:"Click event when tag is clicked",if:{arg:"useAnchor",eq:!0}},hasCombination:{control:"boolean",description:"Tags are combined with each 2",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},combinations:{control:"object",description:"Properties when combined",if:{arg:"hasCombination",eq:!0},table:{type:{summary:"TagCombinationProps",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_1__.e6)(`
                            onClick?: (e: React.MouseEvent) => void,
                            classes?: string[],
                            attributes?: HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
                            datasets?: CommonDataSet,
                        `)}}},color:{control:"select",description:"Color of tag",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_0__.oT),mapping:{Default:""},table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_0__.oT.join("|")},defaultValue:{summary:"undefined"}}},isLightColor:{control:"boolean",description:"Make color more light",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},size:{control:{type:"range",min:1,max:6,step:1},description:"Size of tag",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},isRounded:{control:"boolean",description:"Tag has rounded corners",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},classes:{control:"object",description:"Style Classes to apply",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},attributes:{control:"object",description:"attributes to add extra. ",table:{type:{summary:"HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>",detail:"e.g.,\n{'aria-label': 'LABEL'}\n"},defaultValue:{summary:"{}"}}},datasets:{control:"object",description:"datasets which start with data-.",table:{type:{summary:"Map<string, string>",detail:"e.g.,\nnew Map([\n  ['id', 'DATA_ID'],\n  ['name', 'DATA NAME'],\n])\n→ data-id=\"DATA_ID\" data-name=\"DATA NAME\" \n"},defaultValue:{summary:"new Map()"}}}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.Vp,{...args,children:"Example"})},Primary={...Default,args:{color:"primary"}},Link={...Default,args:{color:"link"}},Info={...Default,args:{color:"info"}},Success={...Default,args:{color:"success"}},Warning={...Default,args:{color:"warning"}},Danger={...Default,args:{color:"danger"}},PrimaryLight={...Default,args:{color:"primary",isLightColor:!0}},IsRounded={...Default,args:{isRounded:!0}},Small={...Default,args:{size:"small"}},Normal={...Default,args:{size:"normal"}},Medium={...Default,args:{size:"medium"}},Large={...Default,args:{size:"large"}},HasCombination={...Default,args:{hasCombination:!0}},LargeHasCombination={...Default,args:{size:"large",hasCombination:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <Tag {...args}>Example</Tag>\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'link'\n  }\n}",...Link.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},PrimaryLight.parameters={...PrimaryLight.parameters,docs:{...PrimaryLight.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    color: 'primary',\n    isLightColor: true\n  }\n}",...PrimaryLight.parameters?.docs?.source}}},IsRounded.parameters={...IsRounded.parameters,docs:{...IsRounded.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    isRounded: true\n  }\n}",...IsRounded.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 'normal'\n  }\n}",...Normal.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 'medium'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},HasCombination.parameters={...HasCombination.parameters,docs:{...HasCombination.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    hasCombination: true\n  }\n}",...HasCombination.parameters?.docs?.source}}},LargeHasCombination.parameters={...LargeHasCombination.parameters,docs:{...LargeHasCombination.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 'large',\n    hasCombination: true\n  }\n}",...LargeHasCombination.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Primary","Link","Info","Success","Warning","Danger","PrimaryLight","IsRounded","Small","Normal","Medium","Large","HasCombination","LargeHasCombination"]}}]);
//# sourceMappingURL=stories-components-mui-label-tag-stories.11efacac.iframe.bundle.js.map