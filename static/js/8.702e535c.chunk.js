(this["webpackJsonpproject-nilvier"]=this["webpackJsonpproject-nilvier"]||[]).push([[8],{209:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},210:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},219:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var r=a(26),n=a.n(r),i=a(44),o=a(37),c=a(59),s=a.n(c),l=function(e,t){return function(){var a=Object(i.a)(n.a.mark((function a(r){var i;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:o.b,payload:{}}),a.prev=1,a.next=4,s.a.get("https://www.omdbapi.com/?s=".concat(e,"&page=").concat(t,"&apikey=1d359387&"));case 4:i=a.sent,r({type:o.c,payload:{result:i.data,term:e}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r({type:o.a,payload:{}});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:o.e,payload:{}}),t.prev=1,t.next=4,s.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=1d359387&"));case 4:r=t.sent,a({type:o.f,payload:r.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:o.d,payload:{}});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},225:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(0),o=(a(6),a(4)),c=a(5),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(n.a)(e,["classes","className","component"]);return i.createElement(l,Object(r.a)({ref:t,className:Object(o.a)(a.root,c)},d))}));t.a=Object(c.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},226:function(e,t,a){"use strict";var r=a(2),n=a(1),i=a(0),o=(a(6),a(4)),c=a(5),s=a(210),l=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,d=void 0===l?"table":l,p=e.padding,u=void 0===p?"default":p,m=e.size,f=void 0===m?"medium":m,b=e.stickyHeader,h=void 0!==b&&b,v=Object(r.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=i.useMemo((function(){return{padding:u,size:f,stickyHeader:h}}),[u,f,h]);return i.createElement(s.a.Provider,{value:g},i.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:t,className:Object(o.a)(a.root,c,h&&a.stickyHeader)},v)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(l)},227:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(0),o=(a(6),a(4)),c=a(5),s=a(209),l=a(11),d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,d=void 0===l?"tr":l,p=e.hover,u=void 0!==p&&p,m=e.selected,f=void 0!==m&&m,b=Object(n.a)(e,["classes","className","component","hover","selected"]),h=i.useContext(s.a);return i.createElement(d,Object(r.a)({ref:t,className:Object(o.a)(a.root,c,h&&{head:a.head,footer:a.footer}[h.variant],u&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},b))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},228:function(e,t,a){"use strict";var r=a(2),n=a(1),i=a(0),o=(a(6),a(4)),c=a(5),s=a(7),l=a(11),d=a(210),p=a(209),u=i.forwardRef((function(e,t){var a,c,l=e.align,u=void 0===l?"inherit":l,m=e.classes,f=e.className,b=e.component,h=e.padding,v=e.scope,g=e.size,y=e.sortDirection,x=e.variant,j=Object(r.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=i.useContext(d.a),k=i.useContext(p.a),w=k&&"head"===k.variant;b?(c=b,a=w?"columnheader":"cell"):c=w?"th":"td";var E=v;!E&&w&&(E="col");var N=h||(O&&O.padding?O.padding:"default"),D=g||(O&&O.size?O.size:"medium"),R=x||k&&k.variant,C=null;return y&&(C="asc"===y?"ascending":"descending"),i.createElement(c,Object(n.a)({ref:t,className:Object(o.a)(m.root,m[R],f,"inherit"!==u&&m["align".concat(Object(s.a)(u))],"default"!==N&&m["padding".concat(Object(s.a)(N))],"medium"!==D&&m["size".concat(Object(s.a)(D))],"head"===R&&O&&O.stickyHeader&&m.stickyHeader),"aria-sort":C,role:a,scope:E},j))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(l.e)(Object(l.c)(e.palette.divider,1),.88):Object(l.a)(Object(l.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},229:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(0),o=(a(6),a(4)),c=a(5),s=a(209),l={variant:"body"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,p=void 0===d?"tbody":d,u=Object(n.a)(e,["classes","className","component"]);return i.createElement(s.a.Provider,{value:l},i.createElement(p,Object(r.a)({className:Object(o.a)(a.root,c),ref:t,role:"tbody"===p?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},244:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(0),o=(a(6),a(4)),c=a(5),s=a(7);function l(e){var t,a,r;return t=e,a=0,r=1,e=(Math.min(Math.max(a,t),r)-a)/(r-a),e=(e-=1)*e*e+1}var d=i.forwardRef((function(e,t){var a,c=e.classes,d=e.className,p=e.color,u=void 0===p?"primary":p,m=e.disableShrink,f=void 0!==m&&m,b=e.size,h=void 0===b?40:b,v=e.style,g=e.thickness,y=void 0===g?3.6:g,x=e.value,j=void 0===x?0:x,O=e.variant,k=void 0===O?"indeterminate":O,w=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),E={},N={},D={};if("determinate"===k||"static"===k){var R=2*Math.PI*((44-y)/2);E.strokeDasharray=R.toFixed(3),D["aria-valuenow"]=Math.round(j),"static"===k?(E.strokeDashoffset="".concat(((100-j)/100*R).toFixed(3),"px"),N.transform="rotate(-90deg)"):(E.strokeDashoffset="".concat((a=(100-j)/100,a*a*R).toFixed(3),"px"),N.transform="rotate(".concat((270*l(j/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(r.a)({className:Object(o.a)(c.root,d,"inherit"!==u&&c["color".concat(Object(s.a)(u))],{indeterminate:c.indeterminate,static:c.static}[k]),style:Object(r.a)({width:h,height:h},N,v),ref:t,role:"progressbar"},D,w),i.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(o.a)(c.circle,f&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[k]),style:E,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},282:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(43),o=a(159),c=a(165),s=a(185),l=a(244),d=a(186),p=a(191),u=a(225),m=a(115),f=a(226),b=a(229),h=a(227),v=a(228),g=a(219),y=a(15),x=a(205),j=Object(o.a)((function(e){return Object(c.a)({movieDetailsRoot:{margin:e.spacing(2)},media:{height:0,paddingTop:"100%"}})}));t.default=function(){var e=j(),t=Object(i.d)(),a=Object(i.e)((function(e){return e.movie}),i.c),o=a.isFetching,c=a.movieDetails,O=a.error,k=Object(y.f)().pathname;return Object(r.useEffect)((function(){t(Object(g.a)(k.split("/")[2]))}),[t]),n.a.createElement("div",{className:e.movieDetailsRoot},n.a.createElement(s.a,{container:!0,spacing:4},o?n.a.createElement(l.a,null):"True"===c.Response?n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{item:!0,xs:12,sm:3,md:4},n.a.createElement(d.a,null,n.a.createElement(p.a,{image:c.Poster,className:e.media}))),n.a.createElement(s.a,{item:!0,xs:12,sm:9,md:8},n.a.createElement(u.a,{component:m.a,elevation:4},n.a.createElement(f.a,null,n.a.createElement(b.a,null,Object.entries(c).map((function(e,t){return"string"===typeof e[1]&&!["Response","Poster","Website"].includes(e[0])&&n.a.createElement(h.a,{key:t},n.a.createElement(v.a,{component:"th",scope:"row"},e[0]),n.a.createElement(v.a,{align:"right"},e[1]))}))))))):O&&n.a.createElement(s.a,{item:!0,xs:12},n.a.createElement(x.a,{severity:"error"},O))))}}}]);
//# sourceMappingURL=8.702e535c.chunk.js.map