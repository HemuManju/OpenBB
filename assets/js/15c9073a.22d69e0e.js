"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(35742);function l(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},47417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const o={title:"Mutual Funds",keywords:["mutual funds","funds","morningstar","morning star","blackrock","vanguard","countries","global","search","holdings"],description:"An introduction to the Mutual Funds menu - search and analyze the global mutual funds universe by country."},i=void 0,s={unversionedId:"terminal/usage/intros/mutualfunds",id:"terminal/usage/intros/mutualfunds",title:"Mutual Funds",description:"An introduction to the Mutual Funds menu - search and analyze the global mutual funds universe by country.",source:"@site/content/terminal/usage/intros/mutualfunds.md",sourceDirName:"terminal/usage/intros",slug:"/terminal/usage/intros/mutualfunds",permalink:"/terminal/usage/intros/mutualfunds",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/intros/mutualfunds.md",tags:[],version:"current",frontMatter:{title:"Mutual Funds",keywords:["mutual funds","funds","morningstar","morning star","blackrock","vanguard","countries","global","search","holdings"],description:"An introduction to the Mutual Funds menu - search and analyze the global mutual funds universe by country."},sidebar:"tutorialSidebar",previous:{title:"Futures",permalink:"/terminal/usage/intros/futures"},next:{title:"Portfolio",permalink:"/terminal/usage/intros/portfolio/"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"The Mutual Funds Menu",id:"the-mutual-funds-menu",level:2},{value:"Select a Country",id:"select-a-country",level:3},{value:"Search",id:"search",level:3},{value:"Load",id:"load",level:3},{value:"Examples",id:"examples",level:2},{value:"holdings",id:"holdings",level:3},{value:"plot",id:"plot",level:3},{value:"sector",id:"sector",level:3},{value:"infoswe",id:"infoswe",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Mutual Funds - Terminal | OpenBB Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Mutual Funds menu provides a global view of the mutual funds universe.  Enter the menu by typing, ",(0,r.kt)("inlineCode",{parentName:"p"},"/funds"),"."),(0,r.kt)("h2",{id:"the-mutual-funds-menu"},"The Mutual Funds Menu"),(0,r.kt)("p",null,"Commands in the Mutual Funds menu are grouped according to the workflow."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"country"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Set the target country.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"search"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Search for a mutual fund within the target country.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"load"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Load a mutual fund for analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plot the historical price performance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sector"),(0,r.kt)("td",{parentName:"tr",align:"right"},"A chart of the sector weightings against the benchmark index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"holdings"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Current holdings of the fund.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"carbon"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Carbon metrics for the fund.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"exclusion"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The fund's policy for excluding investment types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alswe"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Display the fund's allocation data (Sweden-only).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"infoswe"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Get fund information (Sweden only).")))),(0,r.kt)("h3",{id:"select-a-country"},"Select a Country"),(0,r.kt)("p",null,"To use the menu, a country must be selected, and the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"united_states"),".  To select a different one, type ",(0,r.kt)("inlineCode",{parentName:"p"},"country"),", followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacebar"),".  This will bring up a list that can be picked from using the up/down arrow keys."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235046797-0541dfbf-8f2a-41a0-a70b-d6fb890aa61d.png",alt:"Mutual Funds Menu"})),(0,r.kt)("p",null,"Refresh the screen, by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", to verify the choice has been made."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235046837-4bc9ad55-a4ca-411d-a3b4-800fe2e03db1.png",alt:"Selecting a Country"})),(0,r.kt)("h3",{id:"search"},"Search"),(0,r.kt)("p",null,"The most effective way to sift through a vast quantity of funds is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," function broadly, then narrow the focus using the built-in filters on the displayed table.  In the example below, there are 668 results returned for ",(0,r.kt)("inlineCode",{parentName:"p"},"RBC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Canada"),".  Filtering for money market funds gets it down to only ten funds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/funds/country canada/search rbc --limit 1000\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235046894-6cae803b-6b42-4e24-9d16-a02be06599e9.png",alt:"Search Funds"})),(0,r.kt)("h3",{id:"load"},"Load"),(0,r.kt)("p",null,"A mutual fund is loaded by using the ID number, which is the column labeled, ",(0,r.kt)("inlineCode",{parentName:"p"},"SECID"),", on the left side of the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load F0CAN05LTL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"The fund RBC Premium Money Market Fund A - 52.8.RBF447 (F0CAN05LTL) was successfully loaded.\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"holdings"},"holdings"),(0,r.kt)("p",null,"With a fund loaded, get the weighting of the portfolio using the ",(0,r.kt)("inlineCode",{parentName:"p"},"holdings")," command."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The holdings data returned will vary by country.  Some will only return the top ten, while others will publish the entire portfolio.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/funds/country canada/load F00000U48G/holdings\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235046949-e4aa2a5c-149d-4733-80a2-e1a703741cd3.png",alt:"Holdings"})),(0,r.kt)("p",null,"In contrast, the iShares Developed Real Estate Index Fund Investor A Shares, from the United States, returns 449 results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"funds/country united_states/load F00000VW8Z/holdings\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235047003-7e4e0e0f-7a72-416e-a40a-8f9d30027c35.png",alt:"Holdings"})),(0,r.kt)("h3",{id:"plot"},"plot"),(0,r.kt)("p",null,"Plot historical performance of the fund against its benchmark index or the broad category."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/funds/country united_states/load F00000VW8Z --start 2000-01-01/plot -c both\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235047052-0f7cd672-534f-4a03-b6af-a5ec53ff1718.png",alt:"Plot Performance"})),(0,r.kt)("h3",{id:"sector"},"sector"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sector")," command displays a breakdown of sector weightings, compared against the benchmark index and broad category."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/funds/country united_states/load F00000ZAFI/sector\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/235047206-01cfd8c3-d65f-4bfa-ae47-ba0869a0c38e.png",alt:"Sector Breakdown"})),(0,r.kt)("h3",{id:"infoswe"},"infoswe"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"infoswe")," command when the target country is, ",(0,r.kt)("inlineCode",{parentName:"p"},"sweden"),", and a loaded fund is issued by Avanza."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/funds/country sweden/load F00000OW3P/infoswe\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The description below has been translated into English in this documentation because of the spelling checkers working in the repository are expecting English.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"The fund Avanza 100 - SE0004841526 (F00000OW3P) was successfully loaded.\n\nSwedish Description:\n\nThe fund is a mutual fund and aims to provide a positive return in the long term, taking into account the fund's risk level. The underlying funds must be cost-effective and have broad market exposure. The fund mainly invests in global, Swedish and growth market-oriented equity funds. The share exposed to shares in the fund is normally between 80 and 100 percent.\n\nThe fund is managed by:\n        - Peter Steng\xe5rd since 2012-10-19\n        - Hampus Ernstsson since 2023-02-27\nfrom Avanza.\nFund currency is SEK and it the fund started 2012-10-19. It is not a index fund. The fund manages 764173863.0 SEK. The standard deviation of the fund is 13.200000000000001 and the sharpe ratio is 1.08.\n")))}m.isMDXComponent=!0}}]);