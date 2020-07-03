(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,a,t){e.exports=t(155)},130:function(e,a,t){},131:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=t(50),c=t(40),m=t(92),d=(t(130),t(38)),s=t(13),u=t(93),E=t.n(u),p=(t(131),t(182)),b=t(229),g=t(226),y=t(54),k=t(185),A=t(186),h=Object(p.a)((function(e){return Object(b.a)({mainRoot:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},mainContent:{display:"flex",flexDirection:"column",alignItems:"center"},text:{textAlign:"center"},button:{marginRight:e.spacing(2)}})})),N=function(){var e=h();return r.a.createElement("div",{className:e.mainRoot},r.a.createElement("div",{className:e.mainContent},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement(g.a,{mb:2,textAlign:"center"},r.a.createElement(y.a,{variant:"h6"},"Welcome to my portfolio"),r.a.createElement(y.a,{variant:"caption"},"This website is built with React / Redux / TypeScript")),r.a.createElement(g.a,{display:"flex",m:1},r.a.createElement(k.a,{container:!0,spacing:2,alignItems:"center"},f.map((function(e){return r.a.createElement(k.a,{item:!0,key:e.key},r.a.createElement(A.a,{component:d.b,to:e.route,color:"default",variant:"outlined"},e.child))}))))))},f=[{key:0,route:"/about",child:"about"},{key:1,route:"/giphy",child:"giphy"},{key:2,route:"/fooditive",child:"Fooditive"}],S=t(14),I=t(187),O=t(188),T=t(189),C=t(190),v=t(191),G=t(192),R=t(193),j=t(230),w=t(97),_=t.n(w),x=Object(p.a)((function(e){return Object(b.a)({root:{marginTop:e.spacing(2)},media:{height:0,paddingTop:"56.25%"},expandButton:{marginLeft:"auto"},chip:{margin:e.spacing(.5)}})})),F=function(){var e=x(),a=r.a.useState(!1),t=Object(S.a)(a,2),n=t[0],l=t[1];return r.a.createElement(I.a,{className:e.root,elevation:4},r.a.createElement(O.a,null,r.a.createElement(T.a,{className:e.media,image:"https://res.cloudinary.com/dfgpewwii/image/upload/v1593178251/Project%20Nilvier/me.jpg",title:"me"})),r.a.createElement(C.a,null,r.a.createElement(y.a,{variant:"h6"},"Atilla Cantay G\xfcl"),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},"I am a new graduated student of computer engineering with 3.7 / 4 gpa. Currently working on Frontend and Backend Development. Have 2 deployed project which are contain react, redux, nodejs, mongodb, websocket etc.")),r.a.createElement(v.a,{disableSpacing:!0},r.a.createElement(G.a,{"aria-label":"share"},r.a.createElement(_.a,null)),r.a.createElement(A.a,{onClick:function(){l(!n)},"aria-expanded":n,"aria-label":"show more",variant:"outlined",className:e.expandButton},n?"Close skills tab":" Open skills tab")),r.a.createElement(R.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,null,"Technologies:"),z.map((function(a){return r.a.createElement(j.a,{key:a.key,label:a.label,className:e.chip,size:"small"})}))))))},z=[{key:0,label:"javascript"},{key:1,label:"typescript"},{key:2,label:"react"},{key:3,label:"redux"},{key:4,label:"material-ui"},{key:5,label:"node.js"},{key:6,label:"express"},{key:7,label:"mongodb"},{key:8,label:"firebase"},{key:9,label:"websocket"},{key:10,label:"socket.io"},{key:11,label:"html"},{key:12,label:"css"},{key:13,label:"java"},{key:14,label:"c & c++"},{key:15,label:"c#"},{key:16,label:"matlab"},{key:17,label:"python"}],L=t(196),M=t(197),D=t(198),P=t(199),B=t(200),U=t(201),H=t(202),Y=t(203),V=t(204),K=t(11),W=t(3),J=t(194),Q=t(195),q=t(98),Z=t.n(q),X=Object(p.a)((function(e){return Object(b.a)({root:{},title:{fontSize:24},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},chip:{margin:e.spacing(.5)}})})),$=function(e){var a=X(),t=Object(n.useState)(),l=Object(S.a)(t,2),i=l[0],o=l[1];return r.a.createElement(I.a,{className:a.root},r.a.createElement(J.a,{title:e.title,subheader:e.date,titleTypographyProps:{variant:"body1"}}),r.a.createElement(C.a,null,e.chips&&e.chips.map((function(e){return r.a.createElement(j.a,{key:e.key,label:e.label,className:a.chip,size:"small",clickable:!0})}))),r.a.createElement(v.a,{disableSpacing:!0},r.a.createElement(G.a,{className:Object(W.a)(a.expand,Object(K.a)({},a.expandOpen,Boolean(i))),onClick:function(){return a=e.id,void o(i===a?"":a);var a},"aria-expanded":Boolean(i),"aria-label":"show more"},r.a.createElement(Z.a,null))),r.a.createElement(R.a,{in:e.id===i,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(y.a,null,e.content,e.website&&r.a.createElement(Q.a,{href:e.website},"Link to Website")))))},ee=Object(p.a)((function(){return Object(b.a)({timelineContent:{textAlign:"left"}})})),ae=function(){var e=ee();return r.a.createElement(L.a,{align:"alternate"},te.length>0&&te.map((function(a){var t=a.id,n=a.icon;return r.a.createElement(M.a,{key:t,classes:{alignAlternate:e.timelineContent}},r.a.createElement(D.a,null,r.a.createElement(P.a,{color:"inherit"},r.a.createElement(n,null)),r.a.createElement(B.a,null)),r.a.createElement(U.a,null,r.a.createElement($,a)))})))},te=[{id:1,icon:H.a,title:"R\xe9sum\xe9",date:"June 2020",chips:[{key:0,label:"reactjs"},{key:1,label:"typescript"},{key:2,label:"redux"},{key:3,label:"material-ui"},{key:4,label:"html"},{key:5,label:"css"}],content:"The site you are viewing right now is the portfolio website I developed for myself"},{id:2,icon:H.a,title:"Online Lawyer Search and Communication Platform (Thesis)",date:"June 2020",chips:[{key:0,label:"reactjs"},{key:1,label:"redux"},{key:2,label:"material-ui"},{key:3,label:"node.js"},{key:4,label:"mongodb"},{key:5,label:"socket.io"},{key:6,label:"jwt"}],content:"A website platform that aims to facilitate the access of lawyers to people who have a legal problem or who want to get counseling or cooperation on this legal problem. It includes the functionality of becoming a member, logging in, searching for a lawyer, creating an ad, viewing an ad, sharing an ad, friendship feature, realtime messaging and notification system and many more",website:"https://online-lawyer.herokuapp.com/"},{id:3,icon:Y.a,title:"Computer Engineering (3.7/4), Pamukkale University",date:"Sep 2016 \u2192 Jun 2020",content:"Algorithm and programming, object oriented programming, data structures, matlab, linear algebra, programming languages, introduction to electrical and electronics engineering, probability and statistics, signal processing, microprocessors and microcomputers, formal languages and automata, operations research, logistics information systems, service systems, data communication and computer networks, parallel computing and software quality assurance... I have attended and successfully passed the important courses I mentioned above."},{id:4,icon:V.a,title:"Software Intern at AlterNet",date:"Jun 2019 \u2192 Sep 2019 (4 months)",chips:[{key:0,label:"reactjs"},{key:1,label:"redux"},{key:2,label:"material-ui"},{key:3,label:"node.js"},{key:4,label:"express"},{key:5,label:"mongodb"},{key:6,label:"socket.io"},{key:7,label:"html"},{key:8,label:"css"}],content:"Contribution to the developed projects, Responsibilities and duties given were fulfilled, Example Project: Real-time note taking service development with React & Redux & Nodejs & MongoDB & WebSocket support",website:"https://atillacantay.herokuapp.com/"},{id:5,icon:Y.a,title:"Computer Science (3.94/4), Bialystok University of Technology",date:"Sep 2018 \u2192 Feb 2019",content:"I have been involved in database systems, software engineering, computer graphics, computer architect and web development"}],ne=t(211),re=t(99),le=t.n(re),ie=t(205),oe=t(111),ce=t(206),me=t(207),de=t(208),se=t(209),ue=t(210),Ee=Object(p.a)((function(e){return Object(b.a)({tableRoot:{marginTop:e.spacing(2),maxHeight:520},table:{}})})),pe=function(){var e=Ee();return r.a.createElement(ie.a,{component:oe.a,className:e.tableRoot,elevation:4},r.a.createElement(ce.a,{className:e.table,"aria-label":"transcript-table"},r.a.createElement(me.a,null,r.a.createElement(de.a,{hover:!0},r.a.createElement(se.a,null,"Code"),r.a.createElement(se.a,null,"Name"),r.a.createElement(se.a,null,"Grade"),r.a.createElement(se.a,null,"Date"))),r.a.createElement(ue.a,null,be.map((function(e){return r.a.createElement(de.a,{key:e.key},r.a.createElement(se.a,{component:"th",scope:"row"},e.code),r.a.createElement(se.a,null,e.name),r.a.createElement(se.a,null,e.grade),r.a.createElement(se.a,null,e.date))})))))},be=[{key:0,code:"TKD 101",name:"TURKISH LANGUAGE - I",grade:"C1",date:"2016 (Fall)"},{key:1,code:"ATI 101",name:"ATATURK\xb4S PRINCIPLES AND HISTORY OF TURKISH REVOLUTION - I",grade:"B1",date:"2016 (Fall)"},{key:2,code:"CENG 101",name:"ALGORITHMS AND PROGRAMMING",grade:"A2",date:"2016 (Fall)"},{key:3,code:"CENG 103",name:"INTRODUCTION TO COMPUTER ENGINEERING",grade:"A1",date:"2016 (Fall)"},{key:4,code:"MAT 113",name:"GENERAL CALCULUS - I",grade:"B1",date:"2016 (Fall)"},{key:5,code:"FIZ 133",name:"GENERAL PHYSICS - I",grade:"B2",date:"2016 (Fall)"},{key:6,code:"ING 101",name:"ENGLISH - I",grade:"A1",date:"2016 (Fall)"},{key:7,code:"TKD 102",name:"TURKISH LANGUAGE - II",grade:"C1",date:"2016 (Spring)"},{key:8,code:"ATI 102",name:"ATATURK\xb4S PRINCIPLES AND HISTORY OF TURKISH REVOLUTION - II",grade:"A2",date:"2016 (Spring)"},{key:9,code:"CENG 102",name:"OBJECT-ORIENTED PROGRAMMING",grade:"B2",date:"2016 (Spring)"},{key:10,code:"CENG 104",name:"COMPUTER ENGINEERING SEMINAR",grade:"A1",date:"2016 (Spring)"},{key:11,code:"IENG 104",name:"GENERAL ECONOMICS FOR ENGINEERS",grade:"A1",date:"2016 (Spring)"},{key:12,code:"MAT 114",name:"GENERAL CALCULUS - II",grade:"B2",date:"2016 (Spring)"},{key:13,code:"FIZ 134",name:"GENERAL PHYSICS - II",grade:"C1",date:"2016 (Spring)"},{key:14,code:"MAT 340",name:"DISCRETE MATHEMATICS",grade:"B2",date:"2016 (Spring)"},{key:15,code:"ING 102",name:"ENGLISH - II",grade:"A1",date:"2016 (Spring)"},{key:16,code:"ING 112",name:"ADVANCED ENGLISH - II",grade:"A1",date:"2016 (Spring)"},{key:17,code:"CENG 201",name:"DATA STRUCTURES",grade:"B1",date:"2017 (Fall)"},{key:18,code:"CENG 205",name:"DIGITAL SYSTEMS",grade:"B1",date:"2017 (Fall)"},{key:19,code:"EEEN 381",name:"ENGINEERING APPLICATIONS WITH MATLAB",grade:"A1",date:"2017 (Fall)"},{key:20,code:"MAT 230",name:"NUMERICAL ANALYSIS",grade:"B2",date:"2017 (Fall)"},{key:21,code:"MAT 237",name:"LINEAR ALGEBRA",grade:"B1",date:"2017 (Fall)"},{key:22,code:"YDO 203",name:"READING & SPEAKING IN FOREIGN LANGUAGE",grade:"A1",date:"2017 (Fall)"},{key:23,code:"CENG 200",name:"INTERNSHIP TRAINING - I",grade:"A1",date:"2017 (Spring)"},{key:24,code:"CENG 202",name:"PROGRAMMING LANGUAGES",grade:"A1",date:"2017 (Spring)"},{key:25,code:"CENG 204",name:"ALGORITHMS",grade:"A1",date:"2017 (Spring)"},{key:26,code:"EEEN 103",name:"INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING",grade:"A2",date:"2017 (Spring)"},{key:27,code:"MAT 357",name:"PROBABILITY AND STATISTICS",grade:"A1",date:"2017 (Spring)"},{key:28,code:"IENG 407",name:"INVESTMENT ANALYSIS",grade:"A2",date:"2017 (Spring)"},{key:29,code:"CENG 301",name:"DATABASE MANAGEMENT & MODELING",grade:"A1",date:"2018 (Fall)"},{key:30,code:"CENG 303",name:"COMPUTER ARCHITECTURE",grade:"A2",date:"2018 (Fall)"},{key:31,code:"CENG 305",name:"OPERATING SYSTEMS",grade:"A1",date:"2018 (Fall)"},{key:32,code:"CENG 307",name:"WEB-BASED TECHNOLOGIES",grade:"A1",date:"2018 (Fall)"},{key:33,code:"CENG 309",name:"SIGNAL PROCESSING",grade:"A1",date:"2018 (Fall)"},{key:34,code:"YDO 204",name:"TECHNICAL FOREIGN LANGUAGE - I",grade:"A1",date:"2018 (Fall)"},{key:35,code:"CENG 300",name:"INTERNSHIP TRAINING - II",grade:"A1",date:"2018 (Spring)"},{key:36,code:"CENG 302",name:"SOFTWARE ENGINEERING",grade:"A2",date:"2018 (Spring)"},{key:37,code:"CENG 304",name:"MICROPROCESSORS & MICROCOMPUTERS",grade:"A1",date:"2018 (Spring)"},{key:38,code:"CENG 306",name:"FORMAL LANGUAGES & AUTOMATA THEORY",grade:"A1",date:"2018 (Spring)"},{key:39,code:"IENG 322",name:"OPERATIONS RESEARCH",grade:"A1",date:"2018 (Spring)"},{key:40,code:"IENG 474",name:"LOGISTICS INFORMATION SYSTEMS",grade:"A1",date:"2018 (Spring)"},{key:41,code:"YDO 303",name:"TECHNICAL FOREIGN LANGUAGE - II",grade:"A1",date:"2018 (Spring)"},{key:42,code:"CENG 403",name:"DATA COMMUNICATION & COMPUTER NETWORKS",grade:"A2",date:"2019 (Fall)"},{key:43,code:"IENG 487",name:"OCCUPATIONAL HEALTH AND SAFETY - I",grade:"A2",date:"2019 (Fall)"},{key:44,code:"CENG 405",name:"CURRENT TOPICS IN COMPUTER SCIENCE - I",grade:"A2",date:"2019 (Fall)"},{key:45,code:"IENG 418",name:"SERVICE SYSTEMS",grade:"A2",date:"2019 (Fall)"},{key:46,code:"PDR 428",name:"PERSONAL DEVELOPMENT",grade:"A2",date:"2019 (Fall)"},{key:47,code:"CENG 401",name:"BACHELOR OF SCIENCE THESIS \u2013 I",grade:"A1",date:"2019 (Fall)"},{key:48,code:"CENG 404",name:"PROFESSION SEMINAR",grade:"A1",date:"2019 (Spring)"},{key:49,code:"IENG 488",name:"OCCUPATIONAL HEALTH AND SAFETY - II",grade:"A1",date:"2019 (Spring)"},{key:50,code:"IENG 456",name:"ANALYTICAL APPROACH TO DECISION MAKING",grade:"A2",date:"2019 (Spring)"},{key:51,code:"YDO 302",name:"FOREIGN LANGUAGE FOR BUSINESS",grade:"A2",date:"2019 (Spring)"},{key:52,code:"CENG 402",name:"BACHELOR OF SCIENCE THESIS \u2013 II",grade:"A1",date:"2019 (Spring)"},{key:53,code:"CENG 418",name:"COMPUTER GRAPHICS",grade:"A1",date:"2019 (Spring)"},{key:54,code:"CENG 470",name:"SOFTWARE QUALITY ASSURANCE",grade:"A1",date:"2019 (Spring)"},{key:55,code:"CENG 468",name:"DATA MINING",grade:"A1",date:"2019 (Spring)"}],ge=Object(p.a)((function(e){return Object(b.a)({aboutRoot:{height:"100%",display:"flex",flexDirection:"column"},aboutContainer:{flex:1,margin:e.spacing(3)},aboutContent:{display:"flex",flexDirection:"column",alignItems:"flex-start"}})})),ye=function(){var e=ge();return r.a.createElement("div",{className:e.aboutRoot},r.a.createElement("div",{className:e.aboutContainer},r.a.createElement("div",{className:e.aboutContent},r.a.createElement(k.a,{container:!0,spacing:4},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(A.a,{component:d.b,to:"/",variant:"outlined",startIcon:r.a.createElement(le.a,null)},"Back")),r.a.createElement(k.a,{item:!0,xs:12,md:4},r.a.createElement(y.a,{variant:"h6",align:"center"},"About me"),r.a.createElement(F,null)),r.a.createElement(k.a,{item:!0,xs:12,md:8},r.a.createElement(y.a,{variant:"h6",align:"center"},"Transcript"),r.a.createElement(pe,null)),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(ne.a,null)),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"h6",align:"center"},"Experiences"),r.a.createElement(ae,null))))))},ke=t(16),Ae=t.n(ke),he=t(27),Ne=t(100),fe=t.n(Ne),Se=t(108),Ie=t(101),Oe=t.n(Ie),Te=t(212),Ce=t(228),ve=t(214),Ge=t(215),Re=t(216),je=t(217),we=Object(p.a)((function(){return Object(b.a)({insideCard:{height:"100%",display:"flex",flex:1,flexDirection:"column"},header:{display:"flex",alignItems:"center",justifyContent:"space-between"}})})),_e=function(e){var a,t,l=e.raised,i=e.gif,o=we(),c=Object(n.useState)(!1),m=Object(S.a)(c,2),d=m[0],s=m[1];return Object(n.useEffect)((function(){d&&setTimeout((function(){return s(!1)}),2e3)}),[d]),r.a.createElement(Te.a,{in:l,timeout:500},r.a.createElement("div",{className:o.insideCard},r.a.createElement("div",{className:o.header},r.a.createElement(g.a,null,r.a.createElement(Ce.a,{title:d?"Copied":"Copy url",arrow:!0},r.a.createElement(Oe.a,{text:i.images.original.url,onCopy:function(){return s(!0)}},r.a.createElement(G.a,{disableTouchRipple:!0,disableFocusRipple:!0},d?r.a.createElement(ve.a,{style:{fill:"greenyellow"}}):r.a.createElement(Ge.a,{style:{fill:"white"}})))),r.a.createElement(Ce.a,{title:"Open in new tab",arrow:!0},r.a.createElement(G.a,{href:i.images.original.url,target:"_blank"},r.a.createElement(Re.a,{style:{fill:"white"}})))),r.a.createElement(g.a,{mr:1,display:"flex",alignItems:"center"},(null===(a=i.user)||void 0===a?void 0:a.is_verified)&&r.a.createElement(je.a,{style:{fill:"white"}}),r.a.createElement(y.a,{style:{color:"white"},variant:"caption"},r.a.createElement(Q.a,{href:null===(t=i.user)||void 0===t?void 0:t.profile_url,target:"_blank",color:"inherit"},i.username.toLowerCase())))),r.a.createElement(g.a,{flex:1}),r.a.createElement(g.a,{ml:1,mb:1},r.a.createElement(y.a,{style:{color:"white"},variant:"body2"},i.title.toLowerCase()))))},xe=Object(p.a)((function(){return Object(b.a)({root:{height:"300px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}})})),Fe=function(e){var a=e.gif,t=xe(),l=Object(n.useState)(!1),i=Object(S.a)(l,2),o=i[0],c=i[1],m=function(){c(!o)};return r.a.createElement(I.a,{className:t.root,raised:o,onMouseEnter:m,onMouseLeave:m,style:{backgroundImage:"url(".concat(a.images.original.url,")")}},r.a.createElement(_e,{raised:o,gif:a}))},ze=t(225),Le=t(218),Me=t(219),De=t(227),Pe=Object(p.a)((function(e){return Object(b.a)({giphyRoot:{margin:e.spacing(2)},textField:{margin:e.spacing(2,0)}})})),Be=function(e){var a=e.gifs,t=e.isFetching,l=e.error,i=e.giphyCall,o=Pe(),c=Object(Se.a)(),m=c.register,d=c.handleSubmit,s=c.errors;Object(n.useEffect)((function(){i("test")}),[i]);var u=d((function(e){var a=e.term;i(a)}));return r.a.createElement("div",{className:o.giphyRoot},r.a.createElement("div",null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement("form",{onSubmit:u,autoComplete:"off"},r.a.createElement(ze.a,{name:"term",variant:"outlined",placeholder:"Search",fullWidth:!0,className:o.textField,InputProps:{endAdornment:r.a.createElement(Le.a,{position:"end"},t&&r.a.createElement(Me.a,{color:"inherit",size:32}))},defaultValue:"",inputRef:m({required:{value:!0,message:"Enter a search term"}}),error:!!s.term,helperText:s.term&&s.term.message}))),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(ne.a,null)),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(g.a,{m:2},!l&&a.length>0?r.a.createElement(k.a,{container:!0,spacing:4},a.map((function(e){return r.a.createElement(k.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(Fe,{gif:e}))}))):l&&r.a.createElement(De.a,{severity:"error"},l))))))},Ue={giphyCall:function(e){return function(){var a=Object(he.a)(Ae.a.mark((function a(t){var n;return Ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"FETCH_GIPHY_REQUEST",payload:{}}),a.prev=1,a.next=4,fe.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=").concat("PEOi0nLVxKDUHucBbp7UQsp4BHXotYUn"));case 4:n=a.sent,t({type:"FETCH_GIPHY_SUCCESS",payload:{gifs:n.data.data}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t({type:"FETCH_GIPHY_FAILURE",payload:{}});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}},He=Object(o.b)((function(e){var a=e.giphy;return{gifs:a.gifs,isFetching:a.isFetching,error:a.error}}),Ue)(Be),Ye=Object(p.a)((function(e){return Object(b.a)({root:{}})}));function Ve(e){var a=e.row;return r.a.createElement(de.a,null,r.a.createElement(se.a,{component:"th",scope:"row"},a.category_name),r.a.createElement(se.a,null,a.date),r.a.createElement(se.a,{style:{paddingBottom:0,paddingTop:0},colSpan:5,padding:"none"},r.a.createElement(ce.a,{size:"small","aria-label":"contents"},r.a.createElement(ue.a,null,a.contents.map((function(e,a){return r.a.createElement(de.a,{key:a},r.a.createElement(se.a,{component:"th",scope:"row",width:"20%"},e.company),r.a.createElement(se.a,{style:{paddingBottom:0,paddingTop:0},colSpan:4,padding:"none"},r.a.createElement(ce.a,{"aria-label":"products"},r.a.createElement(ue.a,null,e.products.map((function(e,a){return r.a.createElement(de.a,{key:a},r.a.createElement(se.a,{width:"30%"},e.brand||"Bilinmiyor"),r.a.createElement(se.a,{width:"30%"},e.product_name),r.a.createElement(se.a,{width:"30%"},e.unsuitability),r.a.createElement(se.a,{width:"30%"},e.serial_number||"Bilinmiyor"))}))))))}))))))}var Ke=function(e){var a=e.categories,t=Ye();return r.a.createElement(ie.a,{component:oe.a,className:t.root,elevation:4},r.a.createElement(ce.a,{"aria-label":"fooditive-table"},r.a.createElement(me.a,null,r.a.createElement(de.a,{hover:!0},r.a.createElement(se.a,null,"Kategori"),r.a.createElement(se.a,null,"Tarihi"),r.a.createElement(se.a,{width:"20%"},"Firma Ad\u0131"),r.a.createElement(se.a,{width:"30%"},"Marka"),r.a.createElement(se.a,{width:"30%"},"\xdcr\xfcn Ad\u0131"),r.a.createElement(se.a,{width:"30%"},"Uygunsuzluk"),r.a.createElement(se.a,{width:"30%"},"Parti / Seri No"))),r.a.createElement(ue.a,null,Object.keys(a).map((function(e){var t=a[e];return r.a.createElement(Ve,{key:e,row:t})})))))},We=Object(p.a)((function(e){return Object(b.a)({fooditiveRoot:{display:"flex",flexDirection:"column",margin:e.spacing(3)}})})),Je=function(e){var a=e.categories,t=e.isFetching,l=e.error,i=e.fetchProducts,o=We();return Object(n.useEffect)((function(){i()}),[i]),console.log(a),r.a.createElement("div",{className:o.fooditiveRoot},t&&r.a.createElement(Me.a,null),!l&&a&&r.a.createElement(Ke,{categories:a}))},Qe={fetchProducts:function(){return{type:"FETCH_PRODUCTS_SUCCESS",payload:{}}}},qe=Object(o.b)((function(e){var a=e.fooditive;return{categories:a.categories,isFetching:a.isFetching,error:a.error}}),Qe)(Je),Ze=t(220),Xe=Object(p.a)((function(){return Object(b.a)({indicator:{height:5}})})),$e=function(e){var a=e.children,t=Xe(),l=Object(n.useState)(!0),i=Object(S.a)(l,2),o=i[0],c=i[1];return Object(n.useEffect)((function(){c(!1)}),[]),o?r.a.createElement(Ze.a,{className:t.indicator}):r.a.createElement(r.a.Fragment,null,a)},ea=t(222),aa=t(223),ta=t(107),na=t(221),ra=Object(n.createContext)(void 0),la=function(e){var a=localStorage.getItem("theme")||"lightTheme",t=Object(n.useState)(a),l=Object(S.a)(t,2),i=l[0],o=l[1],c=r.a.useMemo((function(){return Object(ta.a)({palette:{type:"darkTheme"===i?"dark":"light"}})}),[i]);return r.a.createElement(ra.Provider,{value:{themeName:i,_setThemeName:function(){"lightTheme"===i?(window.localStorage.setItem("theme","darkTheme"),o("darkTheme")):"darkTheme"===i&&(window.localStorage.setItem("theme","lightTheme"),o("lightTheme"))}}},r.a.createElement(na.a,{theme:c},e.children))},ia=t(103),oa=t.n(ia),ca=t(104),ma=t.n(ca),da=Object(p.a)((function(){return Object(b.a)({root:{flexGrow:1},title:{fontSize:"16px",fontWeight:"bold"}})})),sa=function(){var e=da(),a=Object(n.useContext)(ra);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ea.a,{position:"static",color:"default"},r.a.createElement(aa.a,null,r.a.createElement(g.a,{flexGrow:1},r.a.createElement(A.a,{component:d.b,to:"/",variant:"text",size:"large",color:"inherit",className:e.title},"Project Nilvier")),r.a.createElement(G.a,{color:"inherit",onClick:function(){return null===a||void 0===a?void 0:a._setThemeName()}},"lightTheme"===(null===a||void 0===a?void 0:a.themeName)?r.a.createElement(oa.a,null):r.a.createElement(ma.a,null)))))},ua=t(105),Ea=t.n(ua),pa=t(106),ba=t.n(pa),ga=Object(p.a)((function(e){return Object(b.a)({footerRoot:{},content:{padding:e.spacing(2)}})})),ya=function(){var e=ga();return r.a.createElement("div",{className:e.footerRoot},r.a.createElement(oe.a,{elevation:4,className:e.content},r.a.createElement(k.a,{container:!0,spacing:2,justify:"center"},ka.map((function(e){return r.a.createElement(k.a,{item:!0,key:e.key},r.a.createElement(Q.a,{href:e.href,target:"_blank",color:"textSecondary"},e.icon))})))))},ka=[{key:0,href:"https://www.linkedin.com/in/atillacantay",icon:r.a.createElement(Ea.a,null)},{key:1,href:"https://github.com/atillacantay",icon:r.a.createElement(ba.a,null)}],Aa=Object(p.a)((function(){return Object(b.a)({root:{display:"flex",flexDirection:"column",height:"100%"},wrapper:{display:"flex",flex:"1 1 auto"},contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}})})),ha=function(e){var a=e.children,t=Aa();return r.a.createElement("div",{className:t.root},r.a.createElement(sa,null),r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.contentContainer},r.a.createElement("div",{className:t.content},a))),r.a.createElement(ya,null))},Na=Object(p.a)((function(){return Object(b.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},"#root":{height:"100%",width:"100%"}}})})),fa=function(){return Na(),r.a.createElement($e,null,r.a.createElement(d.a,null,r.a.createElement(ha,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:N}),r.a.createElement(s.a,{exact:!0,path:"/about",component:ye}),r.a.createElement(s.a,{exact:!0,path:"/giphy",component:He}),r.a.createElement(s.a,{exact:!0,path:"/fooditive",component:qe})))))},Sa=t(224);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ia,Oa=t(21),Ta={gifs:[],isFetching:!1,error:void 0};var Ca={categories:{},isFetching:!1,error:void 0};var va=(Ia={},Object(K.a)(Ia,0,{category_name:"alkoll\xfc i\xe7kiler - 1",date:"12/06/2020",contents:[{company:"\u0130kram Turizm Sanayi ve D\u0131\u015f Ticaret Limited \u015eirketi - Mod\xfcl Disko: Aksaray Mah. \u0130nk\u0131lap Cad. No:11/A Merkez Fatih - \u0130stanbul",products:[{brand:"",product_name:"Lik\xf6r (Hazelnut Aromal\u0131)",unsuitability:"Tersiyer butil alkol",serial_number:""},{brand:"",product_name:"Lik\xf6r",unsuitability:"Tersiyer butil alkol",serial_number:""}]},{company:"Patika Turizm Tekstil Sanayi ve Ticaret Limited \u015eirketi - Hatay Sofras\u0131: Topkap\u0131 Mah. Millet Cad.No:176/A Merkez Fatih - \u0130stanbul",products:[{brand:"",product_name:"Rak\u0131",unsuitability:"Tersiyer butil alkol",serial_number:""}]},{company:"Halis \xc7EL\u0130K-Rio Gece Kul\xfcb\xfc: Aksaray Mah. Ko\xe7ibey Sok. No:23 Merkez Fatih - \u0130stanbul",products:[{brand:"",product_name:"Vodka",unsuitability:"Tersiyer butil alkol",serial_number:""}]},{company:"K\u0131rb\u0131y\u0131k \u0130\xe7ecek Da\u011f. Paz.Tur. Otel. \u0130n\u015f.Tic. San. A.\u015e. Serik/ANTALYA",products:[{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"31.08.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"12.02.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"06.09.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"08.07.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"31.07.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"19.08.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"29.08.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"20.05.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"30.07.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"18.07.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"03.09.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"29.07.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"\xdcr\xfcn i\xe7eri\u011finde \xfcz\xfcm alkol\xfc olmamas\u0131",serial_number:"29.06.2018"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"28.02.2019"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"29.12.2018"},{brand:"Coctail Mojito",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"04.12.2018"},{brand:"Coctail Sek On The Beach",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"25.12.2018"},{brand:"Coctail Cosmopolitan",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"23.10.2018"},{brand:"Coctail Pinacolada",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"07.12.2018"},{brand:"Coctail Sek On The Beach",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"30.11.2018"},{brand:"Coctail Mojito",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"16.05.2019"},{brand:"Coctail Pinacolada",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"06.09.2019"},{brand:"14.4 Shot",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"\xdcr\xfcn i\xe7eri\u011finde \xfcz\xfcm alkol\xfc olmamas\u0131",serial_number:"16.10.2017"},{brand:"Volim",product_name:"Aromatize \u015earap Bazl\u0131 \u0130\xe7ki",unsuitability:"D\u0131\u015fardan Etil Alkol \u0130lavesi",serial_number:"30.08.2019"}]}]}),Object(K.a)(Ia,1,{category_name:"alkols\xfcz i\xe7ecekler",date:"12/06/2020",contents:[{company:"Ali Yelyetmez Global Enerji \u0130\xe7ecekleri-Ali YELYETMEZ: Yakuplu Mah. 35. Sok. No:16/11 Merkez Beylikd\xfcz\xfc - \u0130stanbul",products:[{brand:"New Nitro",product_name:"New Nitro Full+Power Ginseng Drink (Nitro Tutt\u0131 Frutt\u0131 Aromal\u0131 Ginsengli Gazl\u0131 \u0130\xe7ecek)",unsuitability:"\u0130la\xe7 etken maddesi (Sildenafil)",serial_number:"19196"},{brand:"Nitro Max Gold",product_name:"Nitro Max Gold Tutti Frutti Aromal\u0131 Ginsengli Gazl\u0131 \u0130\xe7ecek 150 ml",unsuitability:"\u0130la\xe7 etken maddesi (Sildenafil)",serial_number:"27.07.2018"},{brand:"Nitro Max Gold",product_name:"Nitro Max Gold Ginseng Drink (Nitro Max Gold Tutti Frutti Aromal\u0131 Ginsengli Gazl\u0131 \u0130\xe7ecek 200 ml)",unsuitability:"\u0130la\xe7 etken maddesi (Sildenafil)",serial_number:"27.07.2018"}]},{company:"NY Verde G\u0131da Ticaret Limited \u015eirketi: Barbaros Mah. Barbaros Cad. No:120/A Merkez Ata\u015fehir - \u0130stanbul",products:[{brand:"Energy Plus Maxi Aphrodisiac Power",product_name:"Energy Plus Maxi Aphrodisiac Power Ginsengli Kar\u0131\u015f\u0131k Meyve Aromal\u0131 \u0130\xe7ecek 125 ml",unsuitability:"\u0130la\xe7 etken maddesi (Sildenafil)",serial_number:"0003"}]}]}),Ia),Ga=Object(c.c)({giphy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ta,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_GIPHY_REQUEST":return Object(Oa.a)(Object(Oa.a)({},e),{},{isFetching:!0,error:void 0});case"FETCH_GIPHY_SUCCESS":return Object(Oa.a)(Object(Oa.a)({},e),{},{isFetching:!1,gifs:a.payload.gifs});case"FETCH_GIPHY_FAILURE":return Object(Oa.a)(Object(Oa.a)({},e),{},{isFetching:!1,error:"Error occured"});default:return e}},fooditive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ca,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_PRODUCTS_REQUEST":return Object(Oa.a)(Object(Oa.a)({},e),{},{isFetching:!0,error:void 0});case"FETCH_PRODUCTS_SUCCESS":return Object(Oa.a)(Object(Oa.a)({},e),{},{isFetching:!1,categories:va});case"FETCH_PRODUCTS_FAILURE":return Object(Oa.a)(Object(Oa.a)({},e),{},{isFetching:!1,error:"Error occured"});default:return e}}}),Ra=c.d,ja=Object(c.e)(Ga,Ra(Object(c.a)(m.a)));i.a.render(r.a.createElement(o.a,{store:ja},r.a.createElement(la,null,r.a.createElement(Sa.a,null),r.a.createElement(fa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[121,1,2]]]);
//# sourceMappingURL=main.7b3c5ce1.chunk.js.map