"use strict";(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[171],{"./src/stories/components/layout/box/panel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAttributes:()=>WithAttributes,WithClasses:()=>WithClasses,WithDatasets:()=>WithDatasets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>panel_stories}),__webpack_require__("./node_modules/react/index.js");var components=__webpack_require__("./src/components/index.ts"),utils=__webpack_require__("./src/utils/index.ts"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach(name=>{namesObject[name]=name}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options)}),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null==Element||Element.prototype.matches?"matches":"msMatchesSelector",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},createHandlers=(actionsFn,...handles)=>Object.entries(actionsFn(...handles)).map(([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}),applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{if(null!=root){let handlers=createHandlers(actionsFn,...handles);return handlers.forEach(({eventName,handler})=>root.addEventListener(eventName,handler)),()=>handlers.forEach(({eventName,handler})=>root.removeEventListener(eventName,handler))}},[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let panel_stories={title:"React Component/Layout/Panel",component:components.s_,tags:["autodocs"],parameters:{componentSubtitle:"Composable Panel",docs:{description:{component:"This component shows a composable panel.<br>In Bulma doc: https://bulma.io/documentation/components/panel/"}},actions:{handles:["onClick",".panel-block"]},decorators:[withActions]},argTypes:{header:{control:"object",description:"Panel header",table:{type:{summary:"PanelHeaderProps",detail:(0,utils.e6)(`
                            {
                                children?: ReactNode,
                                tag?: React.ElementType,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLElement>,
                                datasets?: Map<string, string>,
                            }
                        `)}}},items:{control:"object",description:"Panel body items",table:{type:{summary:"(PanelTabsProps | PanelBlockProps)[]",detail:(0,utils.e6)(`
                            ({
                                children?: ReactNode,
                                isActive?: boolean,
                                tag?: React.ElementType,
                                href?: string,
                                onClick?: (e: React.MouseEvent) => void,
                                classes: string[],
                                attributes?: HTMLAttributes<HTMLElement>,
                                datasets?: Map<string, string>,
                            } as PanelBlockProps | {
                                items: ({
                                    href?: string,
                                    onClick?: (e: React.MouseEvent) => void,
                                    children?: ReactNode,
                                    classes: string[],
                                    attributes?: HTMLAttributes<HTMLElement>,
                                    datasets?: Map<string, string>,
                                } as PanelTabProps)[],
                                tag?: React.ElementType,
                                classes: string[],
                                attributes?: HTMLAttributes<HTMLDivElement>,
                                datasets?: Map<string, string>,
                            } as PanelTabsProps)[]
                        `)}}},classes:{control:"object",description:"Style classes",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},attributes:{control:"object",description:"Additional attributes",table:{type:{summary:"HTMLAttributes<HTMLDivElement>",detail:(0,utils.e6)(`
                            e.g., {'aria-label': 'LABEL'}
                        `)},defaultValue:{summary:"{}"}}},datasets:{control:"object",description:"Datasets",table:{type:{summary:"Map<string, string>",detail:(0,utils.e6)(`
                            e.g.,
                            new Map([
                                ['id', 'DATA_ID'],
                                ['name', 'DATA NAME'],
                            ])
                            → data-id="DATA_ID" data-name="DATA NAME"
                        `)},defaultValue:{summary:"new Map()"}}}}},Default={render:args=>(0,jsx_runtime.jsx)(components.s_,{header:{children:"Panel Header"},items:[{items:[{href:"#1",children:"Panel Tab 1"},{href:"#2",children:"Panel Tab 2"},{href:"#3",children:"Panel Tab 3"}]},{children:"Panel Block 1"},{children:"Panel Block 2",tag:"p",isActive:!0},{children:"Panel Block 3",tag:"a",href:"#Block3"},{children:"Panel Block 4",onClick:e=>{console.debug(e)}}],...args})},WithClasses={...Default,args:{header:{children:"Panel Header",classes:["test-panel-header"]},items:[{items:[{href:"#1",children:"Panel Tab 1",classes:["text-panel-tab"]},{href:"#2",children:"Panel Tab 2"},{href:"#3",children:"Panel Tab 3"}],classes:["test-panel-tabs"]},{children:"Panel Block 1",classes:["test-panel-block"]},{children:"Panel Block 2",tag:"p"},{children:"Panel Block 3",tag:"a",href:"#Block3",isActive:!0},{children:"Panel Block 4",onClick:e=>{console.debug(e)}}]}},WithAttributes={...Default,args:{header:{children:"Panel Header",attributes:{"aria-label":"Panel Header"}},items:[{items:[{href:"#1",children:"Panel Tab 1",attributes:{"aria-label":"Panel Tab"}},{href:"#2",children:"Panel Tab 2"},{href:"#3",children:"Panel Tab 3"}],attributes:{"aria-label":"Panel Tabs"}},{children:"Panel Block 1",attributes:{"aria-label":"Panel Block"}},{children:"Panel Block 2",tag:"p"},{children:"Panel Block 3",tag:"a",href:"#Block3",isActive:!0},{children:"Panel Block 4",onClick:e=>{console.debug(e)}}]}},WithDatasets={...Default,args:{header:{children:"Panel Header",datasets:new Map([["id","panel-header"],["name","Panel Header"]])},items:[{items:[{href:"#1",children:"Panel Tab 1",datasets:new Map([["id","panel-tab"],["name","Panel Tab"]])},{href:"#2",children:"Panel Tab 2"},{href:"#3",children:"Panel Tab 3"}],datasets:new Map([["id","panel-tabs"],["name","Panel Tabs"]])},{children:"Panel Block 1",datasets:new Map([["id","panel-block"],["name","Panel block"]])},{children:"Panel Block 2",tag:"p"},{children:"Panel Block 3",tag:"a",href:"#Block3",isActive:!0},{children:"Panel Block 4",onClick:e=>{console.debug(e)}}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <Panel header={{\n    children: 'Panel Header'\n  }} items={[{\n    items: [{\n      href: '#1',\n      children: 'Panel Tab 1'\n    }, {\n      href: '#2',\n      children: 'Panel Tab 2'\n    }, {\n      href: '#3',\n      children: 'Panel Tab 3'\n    }]\n  }, {\n    children: 'Panel Block 1'\n  }, {\n    children: 'Panel Block 2',\n    tag: 'p',\n    isActive: true\n  }, {\n    children: 'Panel Block 3',\n    tag: 'a',\n    href: '#Block3'\n  }, {\n    children: 'Panel Block 4',\n    onClick: (e: React.MouseEvent<HTMLElement>) => {\n      console.debug(e);\n    }\n  }]} {...args} />\n}",...Default.parameters?.docs?.source}}},WithClasses.parameters={...WithClasses.parameters,docs:{...WithClasses.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    header: {\n      children: 'Panel Header',\n      classes: ['test-panel-header']\n    },\n    items: [{\n      items: [{\n        href: '#1',\n        children: 'Panel Tab 1',\n        classes: ['text-panel-tab']\n      }, {\n        href: '#2',\n        children: 'Panel Tab 2'\n      }, {\n        href: '#3',\n        children: 'Panel Tab 3'\n      }],\n      classes: ['test-panel-tabs']\n    }, {\n      children: 'Panel Block 1',\n      classes: ['test-panel-block']\n    }, {\n      children: 'Panel Block 2',\n      tag: 'p'\n    }, {\n      children: 'Panel Block 3',\n      tag: 'a',\n      href: '#Block3',\n      isActive: true\n    }, {\n      children: 'Panel Block 4',\n      onClick: (e: React.MouseEvent) => {\n        console.debug(e);\n      }\n    }]\n  }\n}",...WithClasses.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    header: {\n      children: 'Panel Header',\n      attributes: {\n        'aria-label': 'Panel Header'\n      }\n    },\n    items: [{\n      items: [{\n        href: '#1',\n        children: 'Panel Tab 1',\n        attributes: {\n          'aria-label': 'Panel Tab'\n        }\n      }, {\n        href: '#2',\n        children: 'Panel Tab 2'\n      }, {\n        href: '#3',\n        children: 'Panel Tab 3'\n      }],\n      attributes: {\n        'aria-label': 'Panel Tabs'\n      }\n    }, {\n      children: 'Panel Block 1',\n      attributes: {\n        'aria-label': 'Panel Block'\n      }\n    }, {\n      children: 'Panel Block 2',\n      tag: 'p'\n    }, {\n      children: 'Panel Block 3',\n      tag: 'a',\n      href: '#Block3',\n      isActive: true\n    }, {\n      children: 'Panel Block 4',\n      onClick: (e: React.MouseEvent) => {\n        console.debug(e);\n      }\n    }]\n  }\n}",...WithAttributes.parameters?.docs?.source}}},WithDatasets.parameters={...WithDatasets.parameters,docs:{...WithDatasets.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    header: {\n      children: 'Panel Header',\n      datasets: new Map([['id', 'panel-header'], ['name', 'Panel Header']])\n    },\n    items: [{\n      items: [{\n        href: '#1',\n        children: 'Panel Tab 1',\n        datasets: new Map([['id', 'panel-tab'], ['name', 'Panel Tab']])\n      }, {\n        href: '#2',\n        children: 'Panel Tab 2'\n      }, {\n        href: '#3',\n        children: 'Panel Tab 3'\n      }],\n      datasets: new Map([['id', 'panel-tabs'], ['name', 'Panel Tabs']])\n    }, {\n      children: 'Panel Block 1',\n      datasets: new Map([['id', 'panel-block'], ['name', 'Panel block']])\n    }, {\n      children: 'Panel Block 2',\n      tag: 'p'\n    }, {\n      children: 'Panel Block 3',\n      tag: 'a',\n      href: '#Block3',\n      isActive: true\n    }, {\n      children: 'Panel Block 4',\n      onClick: (e: React.MouseEvent) => {\n        console.debug(e);\n      }\n    }]\n  }\n}",...WithDatasets.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithClasses","WithAttributes","WithDatasets"]}}]);
//# sourceMappingURL=stories-components-layout-box-panel-stories.ad233429.iframe.bundle.js.map