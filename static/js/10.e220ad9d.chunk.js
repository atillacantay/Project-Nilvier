(this["webpackJsonpproject-nilvier"]=this["webpackJsonpproject-nilvier"]||[]).push([[10],{219:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return d}));var o=a(26),n=a.n(o),r=a(44),i=a(37),c=a(59),l=a.n(c),s=function(e,t){return function(){var a=Object(r.a)(n.a.mark((function a(o){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o({type:i.b,payload:{}}),a.prev=1,a.next=4,l.a.get("http://www.omdbapi.com/?s=".concat(e,"&page=").concat(t,"&apikey=1d359387&"));case 4:r=a.sent,o({type:i.c,payload:{result:r.data,term:e}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),o({type:i.a,payload:{}});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i.e,payload:{}}),t.prev=1,t.next=4,l.a.get("http://www.omdbapi.com/?i=".concat(e,"&apikey=1d359387&"));case 4:o=t.sent,a({type:i.f,payload:o.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:i.d,payload:{}});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},223:function(e,t,a){"use strict";var o=a(1),n=a(2),r=a(0),i=(a(6),a(4)),c=a(5),l=a(117),s=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.focusVisibleClassName,u=Object(n.a)(e,["children","classes","className","focusVisibleClassName"]);return r.createElement(l.a,Object(o.a)({className:Object(i.a)(c.root,s),focusVisibleClassName:Object(i.a)(d,c.focusVisible),ref:t},u),a,r.createElement("span",{className:c.focusHighlight}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(s)},285:function(e,t,a){"use strict";a.r(t);var o=a(18),n=a(0),r=a.n(n),i=a(43),c=a(219),l=a(20),s=a(159),d=a(165),u=a(186),p=a(223),m=a(191),b=a(76),g=Object(s.a)((function(e){return Object(d.a)({movieCardRoot:{},media:{height:300},movieCardDetails:{marginTop:e.spacing(1),display:"flex",justifyContent:"space-between"},margin:{marginLeft:e.spacing(1)}})})),h=function(e){var t=e.movie,a=g(),i=Object(n.useState)(!1),c=Object(o.a)(i,2),s=c[0],d=c[1],h=function(){d((function(e){return!e}))};return r.a.createElement("div",{className:a.movieCardRoot},r.a.createElement(l.b,{to:"/movies/".concat(t.imdbID)},r.a.createElement(u.a,{raised:s,onMouseEnter:h,onMouseLeave:h},r.a.createElement(p.a,null,r.a.createElement(m.a,{component:"img",className:a.media,alt:t.Title,image:"N/A"!==t.Poster?t.Poster:"",title:t.Title})))),r.a.createElement("div",{className:a.movieCardDetails},r.a.createElement(b.a,{variant:"body2"},t.Title),r.a.createElement("div",null,r.a.createElement(b.a,{variant:"body2",className:a.margin},t.Type),r.a.createElement(b.a,{variant:"body2",className:a.margin},t.Year))))},v=a(185),f=a(251),y=a(245),O=a(244),j=a(231),x=a(1),C=a(2),E=(a(6),a(4)),k=a(5),N=a(32),w=a(29),$=a(79);var z=a(11),M=a(23),P=a(117),R=a(78),B=Object(R.a)(n.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),L=Object(R.a)(n.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),S=Object(R.a)(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),V=Object(R.a)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),T=a(7),I=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.color,i=void 0===r?"standard":r,c=e.component,l=e.disabled,s=void 0!==l&&l,d=e.page,u=e.selected,p=void 0!==u&&u,m=e.shape,b=void 0===m?"round":m,g=e.size,h=void 0===g?"medium":g,v=e.type,f=void 0===v?"page":v,y=e.variant,O=void 0===y?"text":y,j=Object(C.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),k=("rtl"===Object(M.a)().direction?{previous:V,next:S,last:B,first:L}:{previous:S,next:V,first:B,last:L})[f];return"start-ellipsis"===f||"end-ellipsis"===f?n.createElement("div",{ref:t,className:Object(E.a)(a.root,a.ellipsis,s&&a.disabled,"medium"!==h&&a["size".concat(Object(T.a)(h))])},"\u2026"):n.createElement(P.a,Object(x.a)({ref:t,component:c,disabled:s,focusVisibleClassName:a.focusVisible,className:Object(E.a)(a.root,a.page,a[O],a[b],o,"standard"!==i&&a["".concat(O).concat(Object(T.a)(i))],s&&a.disabled,p&&a.selected,"medium"!==h&&a["size".concat(Object(T.a)(h))])},j),"page"===f&&d,k?n.createElement(k,{className:a.icon}):null)})),A=Object(k.a)((function(e){return{root:Object(x.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(z.c)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(z.c)(e.palette.primary.main,.5)),backgroundColor:Object(z.c)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(z.c)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(z.c)(e.palette.secondary.main,.5)),backgroundColor:Object(z.c)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(z.c)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(I);function F(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var H=n.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,o=e.className,r=e.color,i=void 0===r?"standard":r,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),l=void 0===c?F:c,s=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),d=void 0===s?function(e){return n.createElement(A,e)}:s,u=e.shape,p=void 0===u?"round":u,m=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),b=void 0===m?"medium":m,g=e.variant,h=void 0===g?"text":g,v=Object(C.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,r=e.count,i=void 0===r?1:r,c=e.defaultPage,l=void 0===c?1:c,s=e.disabled,d=void 0!==s&&s,u=e.hideNextButton,p=void 0!==u&&u,m=e.hidePrevButton,b=void 0!==m&&m,g=e.onChange,h=e.page,v=e.showFirstButton,f=void 0!==v&&v,y=e.showLastButton,O=void 0!==y&&y,j=e.siblingCount,E=void 0===j?1:j,k=Object(C.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),z=Object($.a)({controlled:h,default:l,name:n,state:"page"}),M=Object(w.a)(z,2),P=M[0],R=M[1],B=function(e,t){h||R(t),g&&g(e,t)},L=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},S=L(1,Math.min(a,i)),V=L(Math.max(i-a+1,a+1),i),T=Math.max(Math.min(P-E,i-a-2*E-1),a+2),I=Math.min(Math.max(P+E,a+2*E+2),V[0]-2),A=[].concat(Object(N.a)(f?["first"]:[]),Object(N.a)(b?[]:["previous"]),Object(N.a)(S),Object(N.a)(T>a+2?["start-ellipsis"]:a+1<i-a?[a+1]:[]),Object(N.a)(L(T,I)),Object(N.a)(I<i-a-1?["end-ellipsis"]:i-a>a?[i-a]:[]),Object(N.a)(V),Object(N.a)(p?[]:["next"]),Object(N.a)(O?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return P-1;case"next":return P+1;case"last":return i;default:return null}},H=A.map((function(e){return"number"===typeof e?{onClick:function(t){B(t,e)},type:"page",page:e,selected:e===P,disabled:d,"aria-current":e===P?"true":void 0}:{onClick:function(t){B(t,F(e))},type:e,page:F(e),selected:!1,disabled:d||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?P>=i:P<=1)}}));return Object(x.a)({items:H},k)}(Object(x.a)({},e,{componentName:"Pagination"})).items;return n.createElement("nav",Object(x.a)({"aria-label":"pagination navigation",className:Object(E.a)(a.root,o),ref:t},v),n.createElement("ul",{className:a.ul},f.map((function(e,t){return n.createElement("li",{key:t},d(Object(x.a)({},e,{color:i,"aria-label":l(e.type,e.page,e.selected),shape:p,size:b,variant:h})))}))))})),W=Object(k.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(H),D=a(205),q=Object(s.a)((function(e){return Object(d.a)({movieRoot:{display:"flex",margin:e.spacing(2)}})}));t.default=function(){var e=q(),t=Object(i.d)(),a=Object(i.e)((function(e){return e.movie}),i.c),l=a.term,s=a.isFetching,d=a.result,u=a.error,p=Object(j.a)({defaultValues:{term:"pokemon"}}),m=p.register,b=p.handleSubmit,g=p.errors,x=Object(n.useState)(1),C=Object(o.a)(x,2),E=C[0],k=C[1];Object(n.useEffect)((function(){t(Object(c.b)("pokemon",E))}),[t]);var N=b((function(e){var a=e.term;k(1),t(Object(c.b)(a,1))}));return r.a.createElement("div",{className:e.movieRoot},r.a.createElement(v.a,{container:!0,spacing:4},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement("form",{onSubmit:N,autoComplete:"off"},r.a.createElement(f.a,{name:"term",variant:"outlined",placeholder:"Enter a movie name...",fullWidth:!0,InputProps:{endAdornment:r.a.createElement(y.a,{position:"end"},s&&r.a.createElement(O.a,{color:"inherit",size:32}))},inputRef:m({required:{value:!0,message:"Movie name is required"}}),error:!!g.term,helperText:g.term&&g.term.message}))),!s&&!u&&d.Search.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(W,{count:Math.round(parseInt(d.totalResults)/10),page:E,onChange:function(e,a){k(a),t(Object(c.b)(l,a))},variant:"outlined"})),d.Search.map((function(e){return r.a.createElement(v.a,{key:e.imdbID+Math.random().toString(36).substring(7),item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(h,{movie:e}))}))):u&&r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(D.a,{severity:"error"},u))))}}}]);
//# sourceMappingURL=10.e220ad9d.chunk.js.map