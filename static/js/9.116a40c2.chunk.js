(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{272:function(e,t,a){"use strict";a.r(t);var r=a(41),n=a(27),i=a.n(n),c=a(44),l=a(37),o=a(45),s=a.n(o),u=a(22),m=a(0),p=a.n(m),f=a(235),g=a(156),d=a(161),h=a(183),E=a(228),y=a.n(E),b=a(186),v=a(114),x=a(200),O=a(193),j=a(72),w=a(190),k=a(261),C=a(262),T=a(263),F=a(264),M=Object(g.a)((function(){return Object(d.a)({insideCard:{height:"100%",display:"flex",flex:1,flexDirection:"column",backgroundColor:"rgb(0, 0, 0, 0.2)"},header:{display:"flex",alignItems:"center",justifyContent:"space-between"}})})),S=function(e){var t,a,r=e.raised,n=e.gif,i=M(),c=Object(m.useState)(!1),l=Object(u.a)(c,2),o=l[0],s=l[1];return Object(m.useEffect)((function(){o&&setTimeout((function(){return s(!1)}),2e3)}),[o]),p.a.createElement(b.a,{in:r,timeout:500},p.a.createElement("div",{className:i.insideCard},p.a.createElement("div",{className:i.header},p.a.createElement(v.a,null,p.a.createElement(x.a,{title:o?"Copied":"Copy url",arrow:!0},p.a.createElement(y.a,{text:n.images.original.url,onCopy:function(){return s(!0)}},p.a.createElement(O.a,{disableTouchRipple:!0,disableFocusRipple:!0},o?p.a.createElement(k.a,{style:{fill:"greenyellow"}}):p.a.createElement(C.a,{style:{fill:"white"}})))),p.a.createElement(x.a,{title:"Open in new tab",arrow:!0},p.a.createElement(O.a,{href:n.images.original.url,target:"_blank"},p.a.createElement(T.a,{style:{fill:"white"}})))),p.a.createElement(v.a,{mr:1,display:"flex",alignItems:"center"},(null===(t=n.user)||void 0===t?void 0:t.is_verified)&&p.a.createElement(F.a,{style:{fill:"white"}}),p.a.createElement(j.a,{style:{color:"white"},variant:"caption"},p.a.createElement(w.a,{href:null===(a=n.user)||void 0===a?void 0:a.profile_url,target:"_blank",color:"inherit"},n.username.toLowerCase())))),p.a.createElement(v.a,{flex:1}),p.a.createElement(v.a,{ml:1,mb:1},p.a.createElement(j.a,{style:{color:"white"},variant:"body2"},n.title.toLowerCase()))))},H=Object(g.a)((function(){return Object(d.a)({root:{height:"300px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}})})),N=function(e){var t=e.gif,a=H(),r=Object(m.useState)(!1),n=Object(u.a)(r,2),i=n[0],c=n[1],l=function(){c(!i)};return p.a.createElement(h.a,{className:a.root,raised:i,onMouseEnter:l,onMouseLeave:l,title:t.title,style:{backgroundImage:"url(".concat(t.images.original.url,")")}},p.a.createElement(S,{raised:i,gif:t}))},R=a(182),U=a(232),_=function(){return p.a.createElement(R.a,{item:!0,xs:12},p.a.createElement(v.a,{m:1,display:"flex",justifyContent:"center"},p.a.createElement(U.a,null)))},L=a(277),q=a(268),B=a(215),I=a(199),P=Object(g.a)((function(e){return Object(d.a)({giphyRoot:{height:"100%",overflow:"hidden auto",padding:e.spacing(2)},margin:{margin:e.spacing(2,0)}})})),D=function(e){var t=e.giphyCall,a=e.fetchMoreGifs,r=e.term,n=e.isFetching,i=e.isFetchingMore,c=e.data,l=e.error,o=P(),s=Object(m.useState)(0),g=Object(u.a)(s,2),d=g[0],h=g[1],E=Object(f.a)(),y=E.register,b=E.handleSubmit,v=E.errors,x=b((function(e){var a=e.term;t(a)}));return Object(m.useEffect)((function(){d&&a(r,d)}),[d,r,a]),p.a.createElement("div",{className:o.giphyRoot,onScroll:function(e){e.currentTarget.scrollHeight-e.currentTarget.scrollTop===e.currentTarget.clientHeight&&h(d+25)}},p.a.createElement(R.a,{container:!0},p.a.createElement(R.a,{item:!0,xs:12},p.a.createElement("form",{onSubmit:x,autoComplete:"off"},p.a.createElement(L.a,{name:"term",variant:"outlined",placeholder:"Enter a keyword to search gifs...",defaultValue:r,fullWidth:!0,className:o.margin,InputProps:{endAdornment:p.a.createElement(q.a,{position:"end"},n&&p.a.createElement(U.a,{color:"inherit",size:32}))},inputRef:y({required:{value:!0,message:"Term is required"}}),error:!!v.term,helperText:v.term&&v.term.message}))),p.a.createElement(R.a,{item:!0,xs:12},p.a.createElement(B.a,null)),p.a.createElement(R.a,{item:!0,xs:12},p.a.createElement(R.a,{container:!0,spacing:4},!l&&c.length>0?c.map((function(e){return p.a.createElement(R.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},p.a.createElement(N,{gif:e}))})):l&&p.a.createElement(R.a,{item:!0,xs:12},p.a.createElement(I.a,{severity:"error",className:o.margin},l)),i&&p.a.createElement(_,null)))))},V={giphyCall:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var a=Object(c.a)(i.a.mark((function a(r){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:l.b,payload:{}}),a.prev=1,a.next=4,s.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=").concat("PEOi0nLVxKDUHucBbp7UQsp4BHXotYUn"));case 4:n=a.sent,r({type:l.c,payload:{result:n.data,term:e,page:t}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r({type:l.a,payload:{}});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},fetchMoreGifs:function(e,t){return function(){var a=Object(c.a)(i.a.mark((function a(r){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:l.e,payload:{}}),a.prev=1,a.next=4,s.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=").concat("PEOi0nLVxKDUHucBbp7UQsp4BHXotYUn","&offset=").concat(t));case 4:n=a.sent,r({type:l.f,payload:n.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r({type:l.d,payload:{}});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}};t.default=Object(r.b)((function(e){var t=e.giphy;return{term:t.term,data:t.result.data,pagination:t.result.pagination,isFetching:t.isFetching,isFetchingMore:t.isFetchingMore,error:t.error}}),V)(D)}}]);
//# sourceMappingURL=9.116a40c2.chunk.js.map