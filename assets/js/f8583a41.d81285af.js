"use strict";(self.webpackChunksolution_middleware_automation=self.webpackChunksolution_middleware_automation||[]).push([[303],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const o={id:"integrate",sidebar_position:4,title:"Integrate"},i=void 0,l={unversionedId:"CoCreate/integrate",id:"CoCreate/integrate",title:"Integrate",description:"Use Cases:",source:"@site/docs/3-CoCreate/Integrate.md",sourceDirName:"3-CoCreate",slug:"/CoCreate/integrate",permalink:"/solution-middleware-automation/CoCreate/integrate",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"integrate",sidebar_position:4,title:"Integrate"},sidebar:"tutorialSidebar",previous:{title:"Automate",permalink:"/solution-middleware-automation/CoCreate/automate"},next:{title:"Transition",permalink:"/solution-middleware-automation/category/transition"}},s={},u=[{value:"Use Cases:",id:"use-cases",level:2},{value:"Examples of running the role in Ansible Tower",id:"examples-of-running-the-role-in-ansible-tower",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"use-cases"},"Use Cases:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg",alt:"construction"})," Work in Progress!"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Certificate Management:"),"\nAutomate the manual workflow of certificate management across the customer's IBM MQ footprint.\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/95059/190799946-d6ebfa22-1b29-4d2d-a6ae-cf94a2b576a7.png",alt:"image"})))),(0,r.kt)("h3",{id:"examples-of-running-the-role-in-ansible-tower"},"Examples of running the role in Ansible Tower"),(0,r.kt)("p",null,"The following is an example of running the role to collect all existing certs that exist in the keystore:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/102995992/190835292-fe1b51ee-282d-4699-869a-60d158436548.gif",alt:"Collecting the key labels"})),(0,r.kt)("p",null,"This would return two emails, one for each cluster we checked:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'<img width="695" alt="email one" src="',(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/102995992/190835529-629510b7-9a6f-4441-aede-4bea1f9d1f48.png%22%5C%3E"},'https://user-images.githubusercontent.com/102995992/190835529-629510b7-9a6f-4441-aede-4bea1f9d1f48.png"\\>')),(0,r.kt)("td",{parentName:"tr",align:null},'<img width="620" alt="email two" src="',(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/102995992/190835534-8789e173-64d7-4dbe-a12e-54097105fc12.png%22%5C%3E"},'https://user-images.githubusercontent.com/102995992/190835534-8789e173-64d7-4dbe-a12e-54097105fc12.png"\\>'))))),(0,r.kt)("p",null,"This would be an example of running the role to add a public cert to the keystores:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/102995992/190836263-7cf5cc6d-706b-4ad5-8521-38f2f3cee151.gif",alt:"Adding public cert"})),(0,r.kt)("p",null,"This would also return two emails, one for each cluster we checked:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'<img width="601" alt="Email one" src="',(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/102995992/190836329-802c4fc8-b470-4397-855e-c4833ad15e3d.png%22%5C%3E"},'https://user-images.githubusercontent.com/102995992/190836329-802c4fc8-b470-4397-855e-c4833ad15e3d.png"\\>')),(0,r.kt)("td",{parentName:"tr",align:null},'<img width="608" alt="Email two" src="',(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/102995992/190836331-9a258fdd-b460-4516-bd33-87649598391d.png%22%5C%3E"},'https://user-images.githubusercontent.com/102995992/190836331-9a258fdd-b460-4516-bd33-87649598391d.png"\\>'))))),(0,r.kt)("p",null,"And furthermore since we specified a github issue, that issue would also be updated with two comments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'<img width="600" alt="Comment one" src="',(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/102995992/190836389-791bc1a2-0943-48a3-a896-42385e1864ff.png%22%5C%3E"},'https://user-images.githubusercontent.com/102995992/190836389-791bc1a2-0943-48a3-a896-42385e1864ff.png"\\>')),(0,r.kt)("td",{parentName:"tr",align:null},'<img width="600" alt="Comment two" src="',(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/102995992/190836395-6ff7904d-1181-4376-8b2b-feeb1106022f.png%22%5C%3E"},'https://user-images.githubusercontent.com/102995992/190836395-6ff7904d-1181-4376-8b2b-feeb1106022f.png"\\>'))))))}p.isMDXComponent=!0}}]);