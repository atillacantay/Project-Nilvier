(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(55),i=a(31),m=a(80),s=(a(108),a(35)),u=a(11),d=a(81),p=a.n(d),h=(a(109),a(157)),E=a(179),g=a(178),f=a(56),b=a(160),v=Object(h.a)((function(e){return Object(E.a)({button:{marginRight:e.spacing(2)}})})),O=function(){var e=v();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement(g.a,{mb:2},r.a.createElement(f.a,{variant:"h6"},"Welcome to my portfolio"),r.a.createElement(f.a,{variant:"caption"},"This website is powered by React / Redux / TypeScript")),r.a.createElement(g.a,{display:"flex",m:1},r.a.createElement(b.a,{component:s.b,to:"/about",color:"inherit",variant:"outlined",className:e.button},"show about"),r.a.createElement(b.a,{component:s.b,to:"/giphy",color:"inherit",variant:"outlined"},"giphy"))))},x=a(169),y=a(14),j=a(16),w=a(3),T=a(161),N=a(162),S=a(163),C=a(164),k=a(165),F=a(166),_=a(167),H=a(168),I=a(54),R=a.n(I),U=a(85),G=a.n(U),P=Object(h.a)((function(e){return Object(E.a)({root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})}));function A(){var e=P(),t=r.a.useState(!1),a=Object(j.a)(t,2),n=a[0],c=a[1];return r.a.createElement(T.a,{className:e.root},r.a.createElement(N.a,{title:"Atilla Cantay G\xfcl",subheader:"May 25, 1998"}),r.a.createElement(S.a,null,r.a.createElement(C.a,{className:e.media,image:"/static/images/cards/paella.jpg",title:"me"})),r.a.createElement(k.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),r.a.createElement(F.a,{disableSpacing:!0},r.a.createElement(_.a,{"aria-label":"share"},r.a.createElement(R.a,null)),r.a.createElement(_.a,{className:Object(w.a)(e.expand,Object(y.a)({},e.expandOpen,n)),onClick:function(){c(!n)},"aria-expanded":n,"aria-label":"show more"},r.a.createElement(G.a,null))),r.a.createElement(H.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(k.a,null,r.a.createElement(f.a,{paragraph:!0},"Method:"),r.a.createElement(f.a,{paragraph:!0},"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."))))}var Y=Object(h.a)((function(e){return Object(E.a)({aboutRoot:{display:"flex",flexDirection:"column",alignItems:"center"}})})),W=function(){var e=Y();return r.a.createElement("div",{className:e.aboutRoot},r.a.createElement(g.a,null,r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(A,null)))),r.a.createElement(b.a,{component:s.b,to:"/"},"Back"))},B=a(15),L=a.n(B),D=a(22),M=a(86),Q=a.n(M),q=a(90),J=Object(h.a)((function(e){return Object(E.a)({root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})})),V=function(e){var t=e.gif,a=J();return r.a.createElement(T.a,{className:a.root,elevation:4},r.a.createElement(N.a,{title:t.title||"Unknown",subheader:t.import_datetime}),r.a.createElement(S.a,null,r.a.createElement(C.a,{className:a.media,image:t.images.original.url,title:"me"})),r.a.createElement(k.a,null,t.title),r.a.createElement(F.a,{disableSpacing:!0},r.a.createElement(_.a,{"aria-label":"share"},r.a.createElement(R.a,null))))},z=a(177),K=a(170),X=a(171),$=Object(h.a)((function(e){return Object(E.a)({giphyRoot:{margin:e.spacing(2)},textField:{margin:e.spacing(2,0)}})})),Z=function(e){var t=e.gifs,a=e.isFetching,n=e.error,c=e.giphyCall,l=$(),o=Object(q.a)(),i=o.register,m=o.handleSubmit,s=o.errors,u=m((function(e){var t=e.term;c(t)}));return r.a.createElement("div",{className:l.giphyRoot},r.a.createElement("div",null,r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement("form",{onSubmit:u,autoComplete:"off"},r.a.createElement(z.a,{name:"term",variant:"outlined",placeholder:"Search",fullWidth:!0,className:l.textField,defaultValue:"",inputRef:i({required:{value:!0,message:"Enter a search term"}}),error:!!s.term,helperText:s.term&&s.term.message}))),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(K.a,null)),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(g.a,{m:2},a&&r.a.createElement(X.a,{color:"primary"}),!n&&t.length>0&&r.a.createElement(x.a,{container:!0,spacing:4},t.length>0?t.map((function(e){return r.a.createElement(x.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(V,{gif:e}))})):"null"))))))},ee={giphyCall:function(e){return function(){var t=Object(D.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_GIPHY_REQUEST",payload:{}}),t.prev=1,t.next=4,Q.a.get("http://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=").concat("PEOi0nLVxKDUHucBbp7UQsp4BHXotYUn"));case 4:n=t.sent,a({type:"FETCH_GIPHY_SUCCESS",payload:{gifs:n.data.data}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"FETCH_GIPHY_FAILURE",payload:{}});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},te=Object(o.b)((function(e){var t=e.giphy;return{gifs:t.gifs,isFetching:t.isFetching,error:t.error}}),ee)(Z),ae=a(172),ne=Object(h.a)((function(e){return Object(E.a)({indicator:{height:5}})})),re=function(e){var t=ne(),a=Object(n.useState)(!0),c=Object(j.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){o(!1)}),[]),l?r.a.createElement(ae.a,{className:t.indicator}):e.children},ce=a(174),le=a(175),oe=a(173),ie=a(89);var me={lightTheme:Object(ie.a)({palette:{type:"light"}}),darkTheme:Object(ie.a)({palette:{type:"dark"}})},se=Object(n.createContext)(void 0),ue=function(e){var t=localStorage.getItem("theme")||"lightTheme",a=Object(n.useState)(t),c=Object(j.a)(a,2),l=c[0],o=c[1],i=function(e){return me[e]}(l);return console.log(i),r.a.createElement(se.Provider,{value:{themeName:l,_setThemeName:function(){"lightTheme"===t?(window.localStorage.setItem("theme","darkTheme"),o("darkTheme")):"darkTheme"===t&&(window.localStorage.setItem("theme","lightTheme"),o("lightTheme"))}}},r.a.createElement(oe.a,{theme:i},e.children))},de=a(87),pe=a.n(de),he=a(88),Ee=a.n(he),ge=Object(h.a)((function(){return Object(E.a)({root:{flexGrow:1},title:{flexGrow:1}})})),fe=function(){var e=ge(),t=Object(n.useContext)(se);return r.a.createElement("div",{className:e.root},r.a.createElement(ce.a,{position:"static"},r.a.createElement(le.a,null,r.a.createElement(f.a,{variant:"h6",className:e.title},"Project Nilvier"),r.a.createElement(_.a,{color:"inherit",onClick:function(){return null===t||void 0===t?void 0:t._setThemeName()}},"lightTheme"===(null===t||void 0===t?void 0:t.themeName)?r.a.createElement(pe.a,null):r.a.createElement(Ee.a,null)))))},be=Object(h.a)((function(){return Object(E.a)({root:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},wrapper:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}})})),ve=function(e){var t=e.children,a=be();return r.a.createElement("div",{className:a.root},r.a.createElement(fe,null),r.a.createElement("div",{className:a.wrapper},r.a.createElement("div",{className:a.contentContainer},r.a.createElement("div",{className:a.content},t))))},Oe=function(){return r.a.createElement(re,null,r.a.createElement(s.a,null,r.a.createElement(ve,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:O}),r.a.createElement(u.a,{exact:!0,path:"/about",component:W}),r.a.createElement(u.a,{exact:!0,path:"/giphy",component:te})))))},xe=a(176);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(37),je={gifs:[],isFetching:!1,error:void 0};var we=Object(i.c)({giphy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GIPHY_REQUEST":return Object(ye.a)(Object(ye.a)({},e),{},{isFetching:!0,error:void 0});case"FETCH_GIPHY_SUCCESS":return Object(ye.a)(Object(ye.a)({},e),{},{isFetching:!1,gifs:t.payload.gifs});case"FETCH_GIPHY_FAILURE":return Object(ye.a)(Object(ye.a)({},e),{},{isFetching:!1,error:"Error occured"});default:return e}}}),Te=i.d,Ne=Object(i.e)(we,Te(Object(i.a)(m.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Ne},r.a.createElement(ue,null,r.a.createElement(xe.a,null),r.a.createElement(Oe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},99:function(e,t,a){e.exports=a(130)}},[[99,1,2]]]);
//# sourceMappingURL=main.6a7ffc66.chunk.js.map