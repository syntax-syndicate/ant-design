(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["79f5d53d"],{"79f5d53d":function(a,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"texts",{enumerable:!0,get:function(){return d;}}),t("71218284");let d=[{value:"The first level navigation is left aligned near a logo, and the secondary menu is right aligned.",paraId:0,tocIndex:1},{value:"Top Navigation: the height of the first level navigation is ",paraId:1,tocIndex:1},{value:"64px",paraId:1,tocIndex:1},{value:", and the second level navigation is ",paraId:1,tocIndex:1},{value:"48px",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:"Top Navigation (for landing pages): the height of the first level navigation is ",paraId:1,tocIndex:1},{value:"80px",paraId:1,tocIndex:1},{value:", and the second level navigation is ",paraId:1,tocIndex:1},{value:"56px",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:"Calculation formula of a top navigation: ",paraId:1,tocIndex:1},{value:"48+8n",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:"Calculation formula of an aside navigation: ",paraId:1,tocIndex:1},{value:"200+8n",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:"The first level navigation and the last level navigation should be distinguishable by visualization;",paraId:2,tocIndex:2},{value:"The current item should have the highest priority of visualization;",paraId:2,tocIndex:2},{value:"When the current navigation item is collapsed, the style of the current navigation item is applied to its parent level;",paraId:2,tocIndex:2},{value:"The left side navigation bar has support for both the accordion and expanding styles; you can choose the one that fits your case the best.",paraId:2,tocIndex:2},{value:"Style of a navigation should conform to its level.",paraId:3,tocIndex:3},{value:"Emphasis by colorblock",paraId:4,tocIndex:3},{value:"When the background color is a deep color, you can use this pattern for the parent level navigation item of the current page.",paraId:5,tocIndex:3},{value:"The highlight match stick",paraId:6,tocIndex:3},{value:"When the background color is a light color, you can use this pattern for the current page navigation item; we recommend using it for the last item of the navigation path.",paraId:7,tocIndex:3},{value:"Highlighted font",paraId:8,tocIndex:3},{value:"From the visualization aspect, a highlighted font is stronger than colorblock; this pattern is often used for the parent level of the current item.",paraId:9,tocIndex:3},{value:"Enlarge the size of the font",paraId:10,tocIndex:3},{value:"12px",paraId:11,tocIndex:3},{value:", ",paraId:11,tocIndex:3},{value:"14px",paraId:11,tocIndex:3},{value:" is a standard font size of navigation's, ",paraId:11,tocIndex:3},{value:"14px",paraId:11,tocIndex:3},{value:" is used for the first and the second level of the navigation. You can choose an appropriate font size regarding the level of your navigation.",paraId:11,tocIndex:3},{value:"Layout",paraId:12,tocIndex:4},{value:": The layout wrapper, in which ",paraId:12,tocIndex:4},{value:"Header",paraId:12,tocIndex:4},{value:" ",paraId:12,tocIndex:4},{value:"Sider",paraId:12,tocIndex:4},{value:" ",paraId:12,tocIndex:4},{value:"Content",paraId:12,tocIndex:4},{value:" ",paraId:12,tocIndex:4},{value:"Footer",paraId:12,tocIndex:4},{value:" or ",paraId:12,tocIndex:4},{value:"Layout",paraId:12,tocIndex:4},{value:" itself can be nested, and can be placed in any parent container.",paraId:12,tocIndex:4},{value:"Header",paraId:12,tocIndex:4},{value:": The top layout with the default style, in which any element can be nested, and must be placed in ",paraId:12,tocIndex:4},{value:"Layout",paraId:12,tocIndex:4},{value:".",paraId:12,tocIndex:4},{value:"Sider",paraId:12,tocIndex:4},{value:": The sidebar with default style and basic functions, in which any element can be nested, and must be placed in ",paraId:12,tocIndex:4},{value:"Layout",paraId:12,tocIndex:4},{value:".",paraId:12,tocIndex:4},{value:"Content",paraId:12,tocIndex:4},{value:": The content layout with the default style, in which any element can be nested, and must be placed in ",paraId:12,tocIndex:4},{value:"Layout",paraId:12,tocIndex:4},{value:".",paraId:12,tocIndex:4},{value:"Footer",paraId:12,tocIndex:4},{value:": The bottom layout with the default style, in which any element can be nested, and must be placed in ",paraId:12,tocIndex:4},{value:"Layout",paraId:12,tocIndex:4},{value:".",paraId:12,tocIndex:4},{value:"Based on ",paraId:13,tocIndex:4},{value:"flex layout",paraId:13,tocIndex:4},{value:", please pay attention to the ",paraId:13,tocIndex:4},{value:"compatibility",paraId:13,tocIndex:4},{value:".",paraId:13,tocIndex:4},{value:"<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>\n",paraId:14,tocIndex:17},{value:"Common props ref\uFF1A",paraId:15,tocIndex:18},{value:"Common props",paraId:16,tocIndex:18},{value:"The wrapper.",paraId:17,tocIndex:18},{value:"Property",paraId:18,tocIndex:18},{value:"Description",paraId:18,tocIndex:18},{value:"Type",paraId:18,tocIndex:18},{value:"Default",paraId:18,tocIndex:18},{value:"className",paraId:18,tocIndex:18},{value:"Container className",paraId:18,tocIndex:18},{value:"string",paraId:18,tocIndex:18},{value:"-",paraId:18,tocIndex:18},{value:"hasSider",paraId:18,tocIndex:18},{value:"Whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"-",paraId:18,tocIndex:18},{value:"style",paraId:18,tocIndex:18},{value:"To customize the styles",paraId:18,tocIndex:18},{value:"CSSProperties",paraId:18,tocIndex:18},{value:"-",paraId:18,tocIndex:18},{value:"The sidebar.",paraId:19,tocIndex:19},{value:"Property",paraId:20,tocIndex:19},{value:"Description",paraId:20,tocIndex:19},{value:"Type",paraId:20,tocIndex:19},{value:"Default",paraId:20,tocIndex:19},{value:"breakpoint",paraId:20,tocIndex:19},{value:"Breakpoints",paraId:21,tocIndex:19},{value:" of the responsive layout",paraId:20,tocIndex:19},{value:"xs",paraId:20,tocIndex:19},{value:" | ",paraId:20,tocIndex:19},{value:"sm",paraId:20,tocIndex:19},{value:" | ",paraId:20,tocIndex:19},{value:"md",paraId:20,tocIndex:19},{value:" | ",paraId:20,tocIndex:19},{value:"lg",paraId:20,tocIndex:19},{value:" | ",paraId:20,tocIndex:19},{value:"xl",paraId:20,tocIndex:19},{value:" | ",paraId:20,tocIndex:19},{value:"xxl",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"className",paraId:20,tocIndex:19},{value:"Container className",paraId:20,tocIndex:19},{value:"string",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"collapsed",paraId:20,tocIndex:19},{value:"To set the current status",paraId:20,tocIndex:19},{value:"boolean",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"collapsedWidth",paraId:20,tocIndex:19},{value:"Width of the collapsed sidebar, by setting to 0 a special trigger will appear",paraId:20,tocIndex:19},{value:"number",paraId:20,tocIndex:19},{value:"80",paraId:20,tocIndex:19},{value:"collapsible",paraId:20,tocIndex:19},{value:"Whether can be collapsed",paraId:20,tocIndex:19},{value:"boolean",paraId:20,tocIndex:19},{value:"false",paraId:20,tocIndex:19},{value:"defaultCollapsed",paraId:20,tocIndex:19},{value:"To set the initial status",paraId:20,tocIndex:19},{value:"boolean",paraId:20,tocIndex:19},{value:"false",paraId:20,tocIndex:19},{value:"reverseArrow",paraId:20,tocIndex:19},{value:"Reverse direction of arrow, for a sider that expands from the right",paraId:20,tocIndex:19},{value:"boolean",paraId:20,tocIndex:19},{value:"false",paraId:20,tocIndex:19},{value:"style",paraId:20,tocIndex:19},{value:"To customize the styles",paraId:20,tocIndex:19},{value:"CSSProperties",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"theme",paraId:20,tocIndex:19},{value:"Color theme of the sidebar",paraId:20,tocIndex:19},{value:"light",paraId:20,tocIndex:19},{value:" | ",paraId:20,tocIndex:19},{value:"dark",paraId:20,tocIndex:19},{value:"dark",paraId:20,tocIndex:19},{value:"trigger",paraId:20,tocIndex:19},{value:"Specify the customized trigger, set to null to hide the trigger",paraId:20,tocIndex:19},{value:"ReactNode",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"width",paraId:20,tocIndex:19},{value:"Width of the sidebar",paraId:20,tocIndex:19},{value:"number | string",paraId:20,tocIndex:19},{value:"200",paraId:20,tocIndex:19},{value:"zeroWidthTriggerStyle",paraId:20,tocIndex:19},{value:"To customize the styles of the special trigger that appears when ",paraId:20,tocIndex:19},{value:"collapsedWidth",paraId:20,tocIndex:19},{value:" is 0",paraId:20,tocIndex:19},{value:"object",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"onBreakpoint",paraId:20,tocIndex:19},{value:"The callback function, executed when ",paraId:20,tocIndex:19},{value:"breakpoints",paraId:22,tocIndex:19},{value:" changed",paraId:20,tocIndex:19},{value:"(broken) => {}",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"onCollapse",paraId:20,tocIndex:19},{value:"The callback function, executed by clicking the trigger or activating the responsive layout",paraId:20,tocIndex:19},{value:"(collapsed, type) => {}",paraId:20,tocIndex:19},{value:"-",paraId:20,tocIndex:19},{value:"{\n  xs: '480px',\n  sm: '576px',\n  md: '768px',\n  lg: '992px',\n  xl: '1200px',\n  xxl: '1600px',\n}\n",paraId:23,tocIndex:20}];}}]);