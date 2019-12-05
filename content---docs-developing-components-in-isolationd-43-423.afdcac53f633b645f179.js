/*! For license information please see content---docs-developing-components-in-isolationd-43-423.afdcac53f633b645f179.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return c}));r(58),r(31),r(22),r(23),r(59),r(231);var n=r(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a={id:"developing-components-in-isolation",title:"Developing Components in Isolation"},i=[{value:"Getting Started with Storybook",id:"getting-started-with-storybook",children:[]},{value:"Getting Started with Styleguidist",id:"getting-started-with-styleguidist",children:[]}],u={rightToc:i},l="wrapper";function c(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(n.b)(l,o({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Usually, in an app, you have a lot of UI components, and each of them has many different states.\nFor an example, a basic button component could have the following states:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In a regular state, with a text label."),Object(n.b)("li",{parentName:"ul"},"In the disabled mode."),Object(n.b)("li",{parentName:"ul"},"In a loading state.")),Object(n.b)("p",null,"Usually, it\u2019s hard to see these states without running a sample app or some examples."),Object(n.b)("p",null,"Create React App doesn\u2019t include any tools for this by default, but you can add ",Object(n.b)("a",o({parentName:"p"},{href:"https://storybook.js.org"}),"Storybook for React")," (",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/storybooks/storybook"}),"source"),") or ",Object(n.b)("a",o({parentName:"p"},{href:"https://react-styleguidist.js.org/"}),"React Styleguidist")," (",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/styleguidist/react-styleguidist"}),"source"),") to your project. ",Object(n.b)("strong",{parentName:"p"},"These are third-party tools that let you develop components and see all their states in isolation from your app"),"."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"https://i.imgur.com/7CIAWpB.gif",alt:"Storybook for React Demo"}))),Object(n.b)("p",null,"You can also deploy your Storybook or style guide as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app."),Object(n.b)("h2",{id:"getting-started-with-storybook"},"Getting Started with Storybook"),Object(n.b)("p",null,"Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components."),Object(n.b)("p",null,"Run the following command inside your app\u2019s directory:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npx -p @storybook/cli sb init\n")),Object(n.b)("p",null,"After that, follow the instructions on the screen."),Object(n.b)("p",null,"Learn more about React Storybook:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://learnstorybook.com"}),"Learn Storybook (tutorial)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://storybook.js.org/basics/introduction/"}),"Documentation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/storybooks/storybook"}),"GitHub Repo")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/storybooks/storybook/tree/master/addons/storyshots"}),"Snapshot Testing UI")," with Storybook + addon/storyshot")),Object(n.b)("h2",{id:"getting-started-with-styleguidist"},"Getting Started with Styleguidist"),Object(n.b)("p",null,"Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground."),Object(n.b)("p",null,"First, install Styleguidist:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install --save react-styleguidist\n")),Object(n.b)("p",null,"Alternatively you may use ",Object(n.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-sh"}),"yarn add react-styleguidist\n")),Object(n.b)("p",null,"Then, add these scripts to your ",Object(n.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),'   "scripts": {\n+    "styleguide": "styleguidist server",\n+    "styleguide:build": "styleguidist build",\n     "start": "react-scripts start",\n')),Object(n.b)("p",null,"Then, run the following command inside your app\u2019s directory:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm run styleguide\n")),Object(n.b)("p",null,"After that, follow the instructions on the screen."),Object(n.b)("p",null,"Learn more about React Styleguidist:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/styleguidist/react-styleguidist"}),"GitHub Repo")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://react-styleguidist.js.org/docs/getting-started.html"}),"Documentation"))))}c.isMDXComponent=!0},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},u=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),s=i(r),p=n,f=s[u+"."+p]||s[p]||c[p]||a;return r?o.a.createElement(f,Object.assign({},{ref:t},l,{components:r})):o.a.createElement(f,Object.assign({},{ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:n,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},231:function(e,t,r){"use strict";e.exports=r(232)},232:function(e,t,r){"use strict";var n=r(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function O(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var S=w.prototype=new O;S.constructor=w,n(S,j.prototype),S.isPureReactComponent=!0;var k={current:null},N={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:N.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,P=[];function $(e,t,r,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return n(o,t,""===r?"."+A(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=r+A(u=t[c],c);l+=e(u,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(u=t.next()).done;)l+=e(u=u.value,s=r+A(u,c++),n,o);else if("object"===u)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),T(e,D,t=$(t,a,n,o)),I(t)}function L(){var e=k.current;if(null===e)throw Error(h(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,U,t=$(null,null,t,r)),I(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,r){return L().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,r){return L().useReducer(e,t,r)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:u,Profiler:c,StrictMode:l,Suspense:b,createElement:_,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=N.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)x.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}return{$$typeof:a,type:e.type,key:i,ref:u,props:o,_owner:l}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n}},q={default:F},G=q&&F||q;e.exports=G.default||G},233:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,l=i(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(l[s]=r[s]);if(n){u=n(r);for(var p=0;p<u.length;p++)a.call(r,u[p])&&(l[u[p]]=r[u[p]])}}return l}}}]);