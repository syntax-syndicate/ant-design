(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a595f12e"],{a595f12e:function(e,t,s){"use strict";var l=s("852bbaa9")._;s.d(t,"__esModule",{value:!0}),s.d(t,"default",{enumerable:!0,get:function(){return g;}});var i=s("777fffbe"),n=s("852bbaa9"),a=s("f19d2b93"),d=n._(s("5b220c3d")),o=s("a9d1a279"),r=s("97e4b5b7"),c=s("9c86e52a"),u=i._(s("23546486"));let f=d.default.lazy(()=>Promise.all([s.ensure("vendors_2"),s.ensure("vendors_1"),s.ensure("123b29fa")]).then(s.dr(l,s.bind(s,"123b29fa")))),h={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},m="ant-design-v5-theme-editor-theme";var g=()=>{let{message:e}=o.App.useApp(),[t,s]=(0,u.default)(h),[l,i]=d.default.useState({});return(0,d.useEffect)(()=>{let e=localStorage.getItem(m);e&&i(JSON.parse(e));},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(c.Helmet,{children:[(0,a.jsx)("title",{children:`${t.title} - Ant Design`}),(0,a.jsx)("meta",{property:"og:title",content:`${t.title} - Ant Design`})]}),(0,a.jsx)(d.Suspense,{fallback:(0,a.jsx)(o.Skeleton,{style:{margin:24}}),children:(0,a.jsx)(f,{advanced:!0,hideAdvancedSwitcher:!0,theme:{name:"Custom Theme",key:"test",config:l},style:{height:"calc(100vh - 64px)"},onThemeChange:e=>{i(e.config);},locale:"cn"===s?r.zhCN:r.enUS,actions:(0,a.jsx)(o.Button,{type:"primary",onClick:()=>{localStorage.setItem(m,JSON.stringify(l)),e.success(t.saveSuccessfully);},children:t.save})})})]});};}}]);