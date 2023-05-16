"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71780],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},31386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"Basics",description:"An introduction to the The OpenBB Terminal, a Command Line Interface (CLI) application.  Functions (commands) are called through the keyboard with results returning as charts, tables, or text.",keywords:["basics","commands","functions","features","menus","introduction","openbb terminal","obb","usage","how to","charts","tables","themes","styles","functions","data","sources","getting started"]},l=void 0,s={unversionedId:"terminal/usage/basics/index",id:"terminal/usage/basics/index",title:"Basics",description:"An introduction to the The OpenBB Terminal, a Command Line Interface (CLI) application.  Functions (commands) are called through the keyboard with results returning as charts, tables, or text.",source:"@site/content/terminal/usage/basics/index.md",sourceDirName:"terminal/usage/basics",slug:"/terminal/usage/basics/",permalink:"/terminal/usage/basics/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/basics/index.md",tags:[],version:"current",frontMatter:{title:"Basics",description:"An introduction to the The OpenBB Terminal, a Command Line Interface (CLI) application.  Functions (commands) are called through the keyboard with results returning as charts, tables, or text.",keywords:["basics","commands","functions","features","menus","introduction","openbb terminal","obb","usage","how to","charts","tables","themes","styles","functions","data","sources","getting started"]},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/terminal/installation/docker"},next:{title:"Setting API Keys",permalink:"/terminal/usage/guides/api-keys"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Auto Complete",id:"auto-complete",level:2},{value:"Help Dialogues",id:"help-dialogues",level:2},{value:"-h or --help",id:"-h-or---help",level:3},{value:"About",id:"about",level:3},{value:"Support",id:"support",level:3},{value:"Menus",id:"menus",level:2},{value:"The Main Menu",id:"the-main-menu",level:3},{value:"Additional Global Commands",id:"additional-global-commands",level:3},{value:"Data",id:"data",level:2},{value:"Default Data Sources",id:"default-data-sources",level:3},{value:"Importing and Exporting Data",id:"importing-and-exporting-data",level:3},{value:"Charts",id:"charts",level:2},{value:"Toolbar",id:"toolbar",level:3},{value:"Text Tools",id:"text-tools",level:3},{value:"Draw Tools",id:"draw-tools",level:3},{value:"Export Tools",id:"export-tools",level:3},{value:"Overlay",id:"overlay",level:3},{value:"Cheat Sheet",id:"cheat-sheet",level:3},{value:"Tables",id:"tables",level:2},{value:"Sorting and Filtering",id:"sorting-and-filtering",level:3},{value:"Selecting Columns and Rows",id:"selecting-columns-and-rows",level:3},{value:"Freeze the Index and Column Headers",id:"freeze-the-index-and-column-headers",level:3},{value:"Exporting Data",id:"exporting-data",level:3},{value:"Cheat Sheet",id:"cheat-sheet-1",level:3}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)(o.Z,{title:"Basics - Terminal | OpenBB Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The OpenBB Terminal is a Command Line Interface (CLI) application.  Functions (commands) are called through the keyboard with results returned as charts, tables, or text.  Charts and tables (if enabled) are displayed in a new window, and are fully interactive, while text prints directly to the Terminal screen.  Commands are grouped into menus, with a menu or sub-menu being visually distinguishable from a function by the, ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", on the far left of the screen.  The color of the text can be altered under the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/guides/customizing-the-terminal"},(0,r.kt)("inlineCode",{parentName:"a"},"/settings")," menu"),"."),(0,r.kt)("p",null,"Navigating through the Terminal menus is similar to following down a path, or traversing folders from any operating system's command line prompt.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"/home")," screen is the main path where everything begins, and the menus are paths branched from the main.  Instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\OpenBB\\Documents"),", it is, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/intros/stocks/options"},(0,r.kt)("inlineCode",{parentName:"a"},"/stocks/options")),". Instead of, ",(0,r.kt)("inlineCode",{parentName:"p"},"cd .."),", two periods - ",(0,r.kt)("inlineCode",{parentName:"p"},"..")," - returns to the menu one level back towards the home screen."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Absolute paths are also valid to-and-from any point.  From the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/intros/stocks/options"},(0,r.kt)("inlineCode",{parentName:"a"},"/stocks/options"))," menu, go directly to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/intros/crypto"},(0,r.kt)("inlineCode",{parentName:"a"},"/crypto")),".  By itself, ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", returns to the home level.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247655-2f8d0dae-be68-48ca-9b35-123b5b985cb6.png",alt:"The Home Screen"})),(0,r.kt)("h2",{id:"auto-complete"},"Auto Complete"),(0,r.kt)("p",null,"The OpenBB Terminal is equipped with an auto completion engine that presents choices based on the current menu.  Whenever you start typing, the prompt will appear. When the function contains arguments, pressing the ",(0,r.kt)("inlineCode",{parentName:"p"},"space bar")," after typing the command will present the list of available arguments.  This functionality dramatically reduces the number of key strokes required to perform tasks and, in many cases, eliminates the need to consult the help dialogue for reminders.  Choices - where they are bound by a defined list - are searchable with the up and down arrow keys."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247702-f707531c-2c65-4380-a662-cd4bc2ae0199.png",alt:"Auto Complete"})),(0,r.kt)("h2",{id:"help-dialogues"},"Help Dialogues"),(0,r.kt)("h3",{id:"-h-or---help"},"-h or --help"),(0,r.kt)("p",null,"A help dialogue for any function at the current location is printed to the screen by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," after the command.  The information returned contains a short description of the function and all accepted arguments.  For an example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/news")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"news -h\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"usage: news [-t TERM [TERM ...]] [-s SOURCES] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT]\n\ndisplay news articles based on term and data sources\n\noptions:\n  -t TERM [TERM ...], --term TERM [TERM ...]\n                        search for a term on the news\n  -s SOURCES, --sources SOURCES\n                        sources from where to get news from (separated by comma)\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files.\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data.\n\nFor more information and examples, use 'about news' to access the related guide.\n")),(0,r.kt)("p",null,'To search for news containing the term, "Federal Reserve", try this command:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/news --term Federal Reserve\n")),(0,r.kt)("h3",{id:"about"},"About"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"about")," is a global function that opens a browser to the OpenBB documentation pages at the specific command or menu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/about stocks\n")),(0,r.kt)("p",null,"The command above will open a browser to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/intros/stocks"},"Introduction to the Stocks menu"),"."),(0,r.kt)("h3",{id:"support"},"Support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"support")," is a global function for submitting a new request for support, a general question, or a bug report.  The command will pre-populate a form with key information, like the command or menu name specific to the issue.  Use the up and down arrow keys to browse and select the appropriate item for the ticket.  Naturally, this command has a help dialogue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"support -h\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Submit your support request\n\noptions:\n  -c {search,load,quote,tob,candle,news,resources,codes,ta,ba,qa,disc,dps,scr,sia,ins,gov,res,dd,fa,bt,ca,options,th,forecast}, --command {generic,search,load,quote,tob,candle,news,resources,codes,ta,ba,qa,disc,dps,scr,sia,ins,gov,res,dd,fa,bt,ca,options,th,forecast}\n                        Command that needs support (default: None)\n  --msg MSG [MSG ...], -m MSG [MSG ...]\n                        Message to send. Enclose it with double quotes (default: )\n  --type {bug,suggestion,question,generic}, -t {bug,suggestion,question,generic}\n                        Support ticket type (default: generic)\n  -h, --help            show this help message (default: False)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233577183-fbeb7be2-1d00-4ca0-86b3-42f1b71081e8.png",alt:"Support"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'support search --type question --msg "How do I find stocks from India with OpenBB?"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233577389-f0ad1b08-0e22-44b1-9d6b-9732c77af7d7.png",alt:"Support Auto Complete"})),(0,r.kt)("p",null,"The command opens a browser window to a pre-populated form on the OpenBB website.  If you are signed-in to the Hub, all that is left to do is click ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233577448-3e426a88-d0cf-4338-8f4c-21b9fd01d8b2.png",alt:"Submit Form"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"An answer to this question is"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"search --country india --exchange-country india")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Tips for submitting a support request:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Tell us what version number is installed."),(0,r.kt)("li",{parentName:"ul"},"Tell us what operating system and version the machine has."),(0,r.kt)("li",{parentName:"ul"},"What is the installation type?  Installer, Source, PyPi, Docker, other?"),(0,r.kt)("li",{parentName:"ul"},"Tell us the command and parameter combination causing the error."),(0,r.kt)("li",{parentName:"ul"},"Tell us what symbol (ticker) is, or was trying to be, loaded."),(0,r.kt)("li",{parentName:"ul"},"Show us the complete error message."),(0,r.kt)("li",{parentName:"ul"},"Let us know any contextual information that will help us replicate and accurately identify the problem."))),(0,r.kt)("h2",{id:"menus"},"Menus"),(0,r.kt)("h3",{id:"the-main-menu"},"The Main Menu"),(0,r.kt)("p",null,"The main menu, or the home screen, contains both menus and commands.  Some of these commands are global, meaning they can be called from any location within the OpenBB Terminal.  Refer to the in-depth introduction guides for each menu, for example, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/intros/forecast"},"Forecast")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Is Global?"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"about"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Opens a browser page to the documentation pages at the function or menu.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"account"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Manage your OpenBB account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alternative"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Alternative data sets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"crypto"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Digital assets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"econometrics"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Econometrics and custom data sets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"economy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The broad economy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"etf"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Exchange-Traded Funds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"exe"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Execute OpenBB Routine Scripts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"featflags"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Enable/disable Terminal behaviours.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fixedincome"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Central Bank and corporate bond rates and indexes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"forecast"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Time series forecasting and machine learning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"forex"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Currency pairs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"funds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Mutual funds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"futures"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Commodity and financial futures.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Set and test API keys for data sources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"intro"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"An in-Terminal introduction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"news"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Find news articles by term and source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"portfolio"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Portfolio and risk analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"record"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Starts recording an OpenBB Routine Script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"settings"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Adjust Terminal settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sources"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Menu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Set preferred default sources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Stop recording the OpenBB Routine Script and save to the OpenBBUserData folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"support"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Report a bug or create a support ticket with OpenBB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"survey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Take a short user survey to help us improve.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"update"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Attempt to update (",(0,r.kt)("strong",{parentName:"td"},"Only for Github cloned repository installations"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wiki"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Query the Wikipedia API for a term or phrase.")))),(0,r.kt)("h3",{id:"additional-global-commands"},"Additional Global Commands"),(0,r.kt)("p",null,"The commands listed below are not displayed on any Terminal menu, but are available from any location in the Terminal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cls"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Clears the Terminal screen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"exit"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Quits the Terminal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"help, h, ?"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Prints the current menu screen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"quit, q, .."),(0,r.kt)("td",{parentName:"tr",align:"right"},"Navigates back one menu towards Home.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reset, r"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Resets the Terminal, opening to the current menu.")))),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)("p",null,"Many functions will require obtaining (free or subscription) API keys from various data providers.  OpenBB provides methods for consuming these data feeds, but has no control over the quality or quantity of data provided to an end-user.   ",(0,r.kt)("strong",{parentName:"p"},"No API Keys are required to get started using the Terminal"),".  See the list of data providers ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/guides/api-keys"},"here"),", along with instructions for entering the credentials into the OpenBB Terminal.  ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"Request a feature")," to let us know what we are missing!"),(0,r.kt)("h3",{id:"default-data-sources"},"Default Data Sources"),(0,r.kt)("p",null,"The default data source for each function (where multiple sources are available) can be defined within the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/guides/changing-sources"},(0,r.kt)("inlineCode",{parentName:"a"},"/sources")," menu"),".  The available sources for each function are displayed on the right of the menu, and they can be distinguished by the square brackets and distinct font color group.  Unless a preference for a particular function is defined, the command will prioritize in the order they are displayed, from left-to-right, on the Terminal screen.  To override a preference or default source, select one of the other choices by attaching the, ",(0,r.kt)("inlineCode",{parentName:"p"},"--source"),", argument to the command syntax.  The available sources for the feature will be populated by auto complete when the ",(0,r.kt)("inlineCode",{parentName:"p"},"space bar")," is pressed after typing ",(0,r.kt)("inlineCode",{parentName:"p"},"--source"),".  This information is also printed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," dialogue of a command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL/fa/income --source Polygon\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233730763-54fd6400-f3ad-44a0-9c73-254d91ac2085.png",alt:"Selecting a new Data Source"})),(0,r.kt)("h3",{id:"importing-and-exporting-data"},"Importing and Exporting Data"),(0,r.kt)("p",null,"Most functions provide a method for exporting the raw data as a CSV, JSON, or XLSX file (with a specific sheet name).  Exported data and user-supplied files to import are saved to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/guides/data"},"OpenBBUserData folder"),".  The folder is located at the root of the operating system's User Account folder.  Follow the link for a detailed description."),(0,r.kt)("h2",{id:"charts"},"Charts"),(0,r.kt)("p",null,"The OpenBB charting library provides interactive, customizable, charts.  Here's an example of displaying weekly candles for AAPL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -w/candle\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247951-e011fe2c-23a6-4518-bd17-3f43a9c2011a.png",alt:"Apple Weekly Chart"})),(0,r.kt)("h3",{id:"toolbar"},"Toolbar"),(0,r.kt)("p",null,"The toolbar is located at the bottom of the window, and provides methods for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Panning and zooming."),(0,r.kt)("li",{parentName:"ul"},"Modifying the title and axis labels."),(0,r.kt)("li",{parentName:"ul"},"Adjusting the hover read out."),(0,r.kt)("li",{parentName:"ul"},"Toggling light/dark mode."),(0,r.kt)("li",{parentName:"ul"},"Annotating and drawing."),(0,r.kt)("li",{parentName:"ul"},"Exporting raw data."),(0,r.kt)("li",{parentName:"ul"},"Saving the chart as an image."),(0,r.kt)("li",{parentName:"ul"},"Adding supplementary external data as an overlay.")),(0,r.kt)("p",null,"The label for each tool is displayed by holding the mouse over it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247997-55c03cbd-9ca9-4f5e-b3fb-3e5a9c63b6eb.png",alt:"Chart Tools"})),(0,r.kt)("p",null,"Toggle the toolbar's visibility via the keyboard with, ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + h"),"."),(0,r.kt)("h3",{id:"text-tools"},"Text Tools"),(0,r.kt)("p",null,"Annotate a chart by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Text")," button, or with the keyboard, ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + t"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248056-d459d7a0-ba2d-4533-896a-79406ded859e.png",alt:"Annotate Charts"})),(0,r.kt)("p",null,"Enter some text, make any adjustments to the options, then ",(0,r.kt)("inlineCode",{parentName:"p"},"submit"),".  Place the crosshairs over the desired data point and click to place the text."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233728645-74734241-4da2-4cff-af17-b68a62e95113.png",alt:"Place Text"})),(0,r.kt)("p",null,"After placement, the text can be updated or deleted by clicking on it again."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233728428-55d2a8e5-a68a-4cd1-9dbf-4c1cd697187e.png",alt:"Delete Annotation"})),(0,r.kt)("p",null,"The title of the chart is edited by clicking the button, ",(0,r.kt)("inlineCode",{parentName:"p"},"Change Titles"),", near the middle center of the toolbar, immediately to the right of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Text")," button."),(0,r.kt)("h3",{id:"draw-tools"},"Draw Tools"),(0,r.kt)("p",null,"The fourth group of icons on the toolbar are for drawing lines and shapes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the colors."),(0,r.kt)("li",{parentName:"ul"},"Draw a straight line."),(0,r.kt)("li",{parentName:"ul"},"Draw a freeform line."),(0,r.kt)("li",{parentName:"ul"},"Draw a circle."),(0,r.kt)("li",{parentName:"ul"},"Draw a rectangle."),(0,r.kt)("li",{parentName:"ul"},"Erase a shape.")),(0,r.kt)("p",null,"To draw on the chart, select one of the four drawing buttons and drag the mouse over the desired area.  Click on any existing shape to modify it by dragging with the mouse and editing the color, or remove it by clicking the toolbar button, ",(0,r.kt)("inlineCode",{parentName:"p"},"Erase Active Shape"),".  The edit colors button will pop up as a floating icon, and clicking on that will display the color palette."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233729318-8af947fa-ce2a-43e2-85ab-657e583ac8b1.png",alt:"Edit Colors"})),(0,r.kt)("h3",{id:"export-tools"},"Export Tools"),(0,r.kt)("p",null,"The two buttons at the far-right of the toolbar are for saving the raw data or, to save an image file of the chart at the current panned and zoomed view."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248436-08a2a463-403b-4b1b-b7d8-80cd5af7bee3.png",alt:"Export Tools"})),(0,r.kt)("h3",{id:"overlay"},"Overlay"),(0,r.kt)("p",null,"The button, ",(0,r.kt)("inlineCode",{parentName:"p"},"Overlay chart from CSV"),", provides an easy import method for supplementing a chart with additional data.  Clicking on the button opens a pop-up dialogue to select the file, column, and whether the overlay should be a bar, candlestick, or line chart.  As a candlestick, the CSV file must contain OHLC data.  The import window can also be opened with the keyboard, ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl-o"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248522-16b539f4-b0ae-4c30-8c72-dfa59d0c0cfb.png",alt:"Overlay CSV"})),(0,r.kt)("p",null,"After choosing the file to overlay, select what to show and then click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233250634-44864da0-0936-4d3c-8de2-c8374d26c1d2.png",alt:"Overlay Options"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248639-6d12b16d-471f-4550-a8ab-8d8c18eeabb3.png",alt:"Overlay Chart"})),(0,r.kt)("h3",{id:"cheat-sheet"},"Cheat Sheet"),(0,r.kt)("p",null,"The image below can be saved and used as a reference."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234313541-3d725e1c-ce48-4413-9267-b03571e0eccd.png",alt:"Group 653"})),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"The OpenBB Terminal sports interactive tables which opens in a separate window. They provide methods for searching, sorting, filtering, and exporting directly within the table.  Preferences and settings for the tables can be updated directly on the table."),(0,r.kt)("h3",{id:"sorting-and-filtering"},"Sorting and Filtering"),(0,r.kt)("p",null,"Columns can be sorted ascending/descending/unsorted, by clicking the controls to the right of each header title.  The status of the filtering is shown as a blue indicator."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248754-20c18390-a7af-490c-9571-876447b1b0ae.png",alt:"Sort Columns"})),(0,r.kt)("p",null,"The settings button, at the lower-left corner, displays choices for customizing the table.  By selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced"),", columns become filterable."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248876-0d788ff4-974d-4d92-8186-56864469870a.png",alt:"Table Settings"})),(0,r.kt)("p",null,"The columns can be filtered with min/max values or by letters, depending on the content of each column."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248923-45873bf1-de6b-40f8-a4aa-05e7c3d21ab0.png",alt:"Filtered Tables"})),(0,r.kt)("h3",{id:"selecting-columns-and-rows"},"Selecting Columns and Rows"),(0,r.kt)("p",null,"The table will scroll to the right as far as there are columns.  Columns can be removed from the table by clicking the icon to the right of the settings button and unchecking it from the list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248976-849791a6-c126-437c-bb54-454ba6ea4fa2.png",alt:"Select Columns"})),(0,r.kt)("p",null,"The number of rows per page is defined in the drop down selection near the center, at the bottom."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233249018-8269896d-72f7-4e72-a4d4-2715d1f11b96.png",alt:"Rows per Page"})),(0,r.kt)("h3",{id:"freeze-the-index-and-column-headers"},"Freeze the Index and Column Headers"),(0,r.kt)("p",null,"Right-click on the index name to enable/disable freezing when scrolling to the right.  Column headers are frozen by default."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234103702-0965dfbd-24ca-4a66-8c76-9fac28abcff8.png",alt:"Index Freeze"})),(0,r.kt)("h3",{id:"exporting-data"},"Exporting Data"),(0,r.kt)("p",null,"At the bottom-right corner of the table window, there is a button for exporting the data.  To the left, the drop down selection for ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," can be defined as a CSV, XLSX, or PNG file.  Exporting the table as a PNG file will create a screenshot of the table at its current view, and data that is not on the screen will not be captured."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233249065-60728dd1-612e-4684-b196-892f3604c0f4.png",alt:"Export Data"})),(0,r.kt)("h3",{id:"cheat-sheet-1"},"Cheat Sheet"),(0,r.kt)("p",null,"The image below can be saved and used as a reference."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234315026-de098953-111b-4b69-9124-31530c01407a.png",alt:"Chart Intro (5)"})))}u.isMDXComponent=!0}}]);