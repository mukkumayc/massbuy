(this.webpackJsonpmassbuy=this.webpackJsonpmassbuy||[]).push([[0],{123:function(e,t,a){e.exports=a(143)},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(43),o=a.n(c),l=a(13),i=a(6),s=a(91),u=function(e){var t=e.component,a=e.appProps,n=(e.isAuthenticated,Object(s.a)(e,["component","appProps","isAuthenticated"]));return r.a.createElement(i.d,Object.assign({},n,{render:function(e){return(null===a||void 0===a?void 0:a.isAuthenticated)?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(i.c,{to:"/login"})}}))},m=function(e){var t=e.component,a=e.appProps,n=(e.isAuthenticated,Object(s.a)(e,["component","appProps","isAuthenticated"]));return r.a.createElement(i.d,Object.assign({},n,{render:function(e){return(null===a||void 0===a?void 0:a.isAuthenticated)?r.a.createElement(i.c,{to:"/"}):r.a.createElement(t,Object.assign({},e,a))}}))},d=a(77),p=a(145),f=a(151),h=a(33),E=function(e){var t=e.id,a=e.title,n=e.cover;return r.a.createElement(f.a,{border:"primary",className:"course-card",style:{minWidth:"300px",margin:"0.2em",minHeight:"276px"}},r.a.createElement(h.Link,{to:"/course/"+t},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,a)),r.a.createElement(f.a.Img,{variant:"bottom",src:n,alt:"noimage"})))},v=15,b=a(103),g=a(70),y=function(e){return r.a.createElement(b.a,null,function(e){var t,a=new URLSearchParams(window.location.search);try{t=new URL("/massbuy").pathname}catch(l){t="/massbuy"}var n=[];if(e<100)for(var c=1;c<=e;++c){a.set("page",c);var o=window.location.pathname.startsWith(t)?window.location.pathname.substr(t.length):window.location.pathname;n.push(r.a.createElement(g.LinkContainer,{key:c,to:"".concat(o,"?").concat(a.toString())},r.a.createElement(b.a.Item,null,c)))}return n}(e.pagesNum))},w=function(e){var t=e.courses,a=new URLSearchParams(window.location.search).get("page")||1;return r.a.createElement(d.a,{className:"courses",fluid:!0},r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(y,{pagesNum:Math.ceil((null===t||void 0===t?void 0:t.length)/v)})),r.a.createElement(p.a,{className:"justify-content-center"},null===t||void 0===t?void 0:t.slice(v*(a-1),v*a).map((function(e,t){return r.a.createElement(E,{key:e.id,id:e.id,title:e.title,cover:e.cover})}))))},j=a(63),O=a.n(j),S=a(78),N=function(){var e=Object(S.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("https://18.193.129.17"),t=null,e.next=4,fetch("https://18.193.129.17/courses").then((function(e){return e.json()})).then((function(e){t=e.courses})).catch((function(e){console.error(e)}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){var t=e.courses,a=e.setCourses,c=Object(n.useState)(!0),o=Object(l.a)(c,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){N().then((function(e){a(e)})).catch((function(e){console.error(e)})).then((function(){return s(!1)}))}),[a]),r.a.createElement(d.a,{className:"home",fluid:!0},!i&&r.a.createElement(w,{courses:t}))},C=function(){return r.a.createElement(d.a,{className:"not-found"},r.a.createElement(p.a,{className:"justify-content-center mt-5"},r.a.createElement("h2",null,"Page not found")))},k=a(108),A=a(109),P=a(122),B=a(120),I=a(30),M=a(14),T=a(113),L=a(148),V=function(e){Object(P.a)(a,e);var t=Object(B.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={errorMsg:""},e.handleSubmit=function(t,a){fetch("https://18.193.129.17/login",{method:"post",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({credentials:t})}).then((function(t){t.ok?e.props.userHasAuthenticated(!0):t.json().then((function(t){e.setState({errorMsg:t.error}),a(!1)}))})).catch((function(t){e.setState({errorMsg:t.toString()}),a(!1)}))},e}return Object(A.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{className:"login",fluid:!0},r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(T.a,{sm:10,md:8,lg:4},r.a.createElement(I.b,{initialValues:{email:"",password:""},validationSchema:M.b().shape({email:M.c().required("Email is required").email("Invalid email"),password:M.c().required("Password is required")}),onSubmit:function(t,a){var n=a.setSubmitting;return e.handleSubmit(t,n)}},(function(t){var a=t.isSubmitting,n=t.handleSubmit,c=t.handleChange;return r.a.createElement(L.a,{onSubmit:n},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,{htmlFor:"login-email"},"Email"),r.a.createElement(L.a.Control,{type:"email",name:"email",id:"login-email",onChange:c})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,{htmlFor:"login-password"},"Password"),r.a.createElement(L.a.Control,{type:"password",name:"password",id:"login-password",onChange:c})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:a},"Sign in"),e.state.errorMsg?r.a.createElement("div",{className:"alert alert-danger m-3"},e.state.errorMsg):null)})))))}}]),a}(n.Component),F=a(146),R=a(147),q=function(e){var t=e.show,a=e.handleHide,n=e.handleAccept,c=e.handleCancel,o=e.bodyText,l=e.acceptButtonVariant,i=e.acceptButtonText;return r.a.createElement(R.a,{show:t,onHide:a||c||function(){console.error("There is no hide function")},animation:!1},r.a.createElement(R.a.Body,null," ",o," "),r.a.createElement(R.a.Footer,null,c&&r.a.createElement(F.a,{variant:"secondary",onClick:c},"Cancel"),n&&r.a.createElement(F.a,{variant:l||"primary",onClick:n},i||"Accept")))},H=(a(136),function(e){var t=e.cart,a=e.course,c=Object(n.useState)(!1),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),d=m[0],p=m[1];return r.a.createElement(f.a,{className:"actions footer-on-small-devices"},r.a.createElement(f.a.Body,null,r.a.createElement(I.b,{initialValues:{platform:""},validationSchema:M.b().shape({platform:M.c().required("Please select a platform")}),onSubmit:function(e,n){var r=n.setSubmitting;if(s(!1),r(!0),t.getItem(a.id))return p("Already in the cart"),s(!0),void r(!1);var c=e.platform,o={id:a.id,title:a.title,cover:a.cover,platforms:a.platforms,platform:c,price:a.platforms.find((function(e){return e.name===c})).price,count:1};t.setItem(a.id,o),p("Added to the cart"),s(!0),r(!1)}},(function(e){var t,n=e.values,c=e.handleChange,o=e.handleSubmit,l=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{onSubmit:o,id:"select-platform-input"},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Control,{as:"select",name:"platform",onChange:c,defaultValue:"default"},r.a.createElement("option",{disabled:!0,value:"default",key:-1},"-- select an platform --"),a.platforms.map((function(e,t){return r.a.createElement("option",{key:t},e.name)})))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"price"},(null===(t=a.platforms.find((function(e){return e.name===n.platform})))||void 0===t?void 0:t.price)||r.a.createElement("div",{className:"text-secondary font-weight-light"},"Select to see price")),r.a.createElement(F.a,{type:"submit",disabled:l},"Add to cart"))),r.a.createElement(q,{show:i,handleHide:function(){return s(!1)},handleAccept:function(){return s(!1)},bodyText:d,acceptButtonText:"Ok"}))}))))}),J=function(e){var t=e.course;return r.a.createElement(f.a,{className:"about"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,t.title)),r.a.createElement(f.a.Text,null,t.description)))},U=(a(137),function(e){var t=e.cart,a=Object(n.useState)(!0),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)({}),u=Object(l.a)(s,2),m=u[0],f=u[1];return Object(n.useEffect)((function(){var e=window.location.pathname.split("/");e=e[e.length-1],fetch("https://18.193.129.17/course/"+e).then((function(e){return e.json()})).then((function(e){f(e),i(!1)})).catch((function(e){console.error(e),i(!1)}))}),[]),r.a.createElement(d.a,{className:"course"},!o&&r.a.createElement(p.a,null,r.a.createElement(T.a,{sm:"8"},r.a.createElement(J,{course:m})),r.a.createElement(T.a,{sm:"4"},r.a.createElement(H,{course:m,cart:t}))))}),D=a(73),G=a(152),z=function(e){var t=e.count,a=e.setCount,n=e.setDeleting;return r.a.createElement("div",{className:"d-flex flex-row align-items-center counter"},r.a.createElement(F.a,{className:"py-0 px-1 counter-button",variant:"danger",onClick:function(){return t>1?a(t-1):n(!0)}},"-"),r.a.createElement("span",{className:"mx-2"},t),r.a.createElement(F.a,{className:"py-0 px-1 counter-button",variant:"success",onClick:function(){return a(t+1)}},"+"))},W=(a(138),function(e){var t,a=e.cart,c=e.title,o=e.count,i=e.platforms,s=e.values,u=e.index,m=e.handleChange,d=e.deleteItem,p=e.setFieldValue,f=Object(n.useState)(!1),h=Object(l.a)(f,2),E=h[0],v=h[1],b=(s||{}).courses;return r.a.createElement(G.a.Item,null,r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement("h3",null,c),s?r.a.createElement(z,{count:b[u].count,setCount:function(e){p("courses[".concat(u,"].count"),e),a.setItem(s.courses[u].id,Object(D.a)(Object(D.a)({},s.courses[u]),{},{count:e}))},setDeleting:v}):o),r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement("div",{className:"price"},null===i||void 0===i||null===(t=i.find((function(e){return e.name===b[u].platform})))||void 0===t?void 0:t.price)),r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement(L.a.Control,{id:"platform-input",as:"select",name:"courses[".concat(u,"].platform"),onChange:m,defaultValue:b[u].platform},null===i||void 0===i?void 0:i.map((function(e,t){return r.a.createElement("option",{key:t},"".concat(e.name))}))),d&&r.a.createElement(F.a,{className:"ml-3",variant:"danger",onClick:function(){return v(!0)}},"Delete")),r.a.createElement(q,{show:E,acceptButtonVariant:"danger",acceptButtonText:"Delete",bodyText:"Are you sure you want to delete?",handleCancel:function(){return v(!1)},handleAccept:function(){d(),v(!1)}}))}),K=function(e){var t=e.cart,a=e.values,n=e.handleChange,c=e.setFieldValue;return r.a.createElement(I.a,{name:"courses"},(function(e){var o=e.remove;return r.a.createElement(f.a,null,r.a.createElement(G.a,{variant:"flush"},function(){var e=Array.from(t.data(),(function(e,t){return e[1]})).map((function(e,l){return r.a.createElement(W,Object.assign({index:l,key:e.id},e,{deleteItem:function(){t.removeItem(e.id)?o(l):console.error("Not found the item in cart to delete")},handleChange:n,values:a,setFieldValue:c,cart:t}))}));return 0===e.length&&(e=r.a.createElement(f.a.Body,null,r.a.createElement("h5",null,"Empty. Go and add something to the cart!"))),e}()))}))},Q=function(e){var t=e.values;return r.a.createElement(f.a,{className:"footer-on-small-devices"},r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"price"},"Total:"," ",t.courses.reduce((function(e,t){return e+parseFloat(t.price)*t.count}),0).toFixed(2)),r.a.createElement(F.a,{type:"submit"},"Buy"))))},X=(a(139),function(e){var t=e.cart;return r.a.createElement(d.a,{className:"cart"},r.a.createElement(I.b,{initialValues:{courses:Array.from(t.data(),(function(e,t){return e[1]})).map((function(e,t){return Object(D.a)({},e)}))},validationSchema:M.b().shape({courses:M.a().of(M.b().shape({id:M.c().required(),platform:M.c().required()})).min(1,"Minimum 1 course")}),onSubmit:function(e){alert(JSON.stringify(e,null,2))}},(function(e){return r.a.createElement(L.a,{onSubmit:e.handleSubmit},r.a.createElement(p.a,null,r.a.createElement(T.a,{sm:"8"},r.a.createElement(K,Object.assign({cart:t},e))),r.a.createElement(T.a,{sm:"4"},r.a.createElement(Q,{values:e.values}))))})))}),Y=(a(140),function(e){var t=e.search;if(t)return r.a.createElement(I.b,{initialValues:{term:new URLSearchParams(window.location.search).get("term")},validationSchema:M.b().shape({term:M.c().required()}),onSubmit:function(e,a){var n=a.setSubmitting;n(!0),t({values:e}).then((function(e){n(!1)}))}},(function(e){var t=e.handleChange,a=e.handleSubmit,n=e.isSubmitting,c=e.values;return r.a.createElement(L.a,{onSubmit:a,inline:!0,className:"search-bar"},r.a.createElement("div",{className:"d-flex search-wrapper",style:{width:"100%",border:"1px solid var(--primary)",borderRadius:".25rem"}},r.a.createElement(L.a.Control,{className:"p-2",id:"search-input",name:"term",type:"text",placeholder:"Search for courses",onChange:t,value:c.term||"",style:{border:0,width:"100%"}}),r.a.createElement(F.a,{className:"p-2",variant:"outline-primary",type:"submit",disabled:n,style:{borderRadius:"0 .1rem .1rem 0",borderWidth:"0 0 0 1px"}},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-search",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})))))}));console.error("No search function, don't know what to do")}),Z=function(e){var t=e.history,a=e.courses,c=e.setCourses,o=Object(n.useState)([]),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(!0),p=Object(l.a)(m,2),f=p[0],h=p[1],E=Object(n.useCallback)(function(){var e=Object(S.a)(O.a.mark((function e(n){var r,o,l,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return h(!1),e.abrupt("return");case 3:if(t.push("/search?term=".concat(n)),0!==(null===(r=l=a)||void 0===r?void 0:r.length)){e.next=10;break}return e.next=8,N();case 8:l=e.sent,c(l);case 10:return i=null===(o=l)||void 0===o?void 0:o.filter((function(e){return e.title.includes(n)})),u(i),h(!1),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,t,c]);return Object(n.useEffect)((function(){E(new URLSearchParams(window.location.search).get("term"))}),[E]),r.a.createElement(d.a,{className:"search",fluid:!0},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(Y,{search:function(e){var t=e.values;return E(t.term)}})),f||r.a.createElement(w,{courses:s}))},$=function(e){var t=e.appProps;return r.a.createElement(i.g,null,r.a.createElement(u,{path:"/",exact:!0,component:x,appProps:t}),r.a.createElement(u,{path:"/course/:id",exact:!0,component:U,appProps:t}),r.a.createElement(m,{path:"/login",exact:!0,component:V,appProps:t}),r.a.createElement(u,{path:"/cart",exact:!0,component:X,appProps:t}),r.a.createElement(u,{path:"/search",exact:!0,component:Z,appProps:t}),r.a.createElement(i.d,{component:C}))},_=a(149),ee=a(150),te=Object(i.o)((function(e){return r.a.createElement(_.a,{bg:"light",expand:"lg"},r.a.createElement(g.LinkContainer,{to:"/"},r.a.createElement(_.a.Brand,{href:"/"},"Massbuy")),r.a.createElement(_.a.Toggle,{"aria-controls":"navbar-nav"}),r.a.createElement(_.a.Collapse,{id:"navbar-nav"},r.a.createElement(ee.a,{className:"mr-auto"},r.a.createElement(g.LinkContainer,{to:"/cart"},r.a.createElement(ee.a.Link,{href:"/cart"},"Cart"))),!window.location.pathname.includes("/search")&&r.a.createElement(Y,Object.assign({},e,{search:function(t){var a=t.values;e.history.push("/search?term=".concat(a.term))}}))))})),ae=a(121);function ne(){var e=localStorage.getItem("cart");this.cart=e?new Map(JSON.parse(e)):new Map}ne.prototype.save=function(){localStorage.setItem("cart",JSON.stringify(Object(ae.a)(this.cart)))},ne.prototype.setItem=function(e,t){this.cart.set(e,t),this.save()},ne.prototype.getItem=function(e){return this.cart.get(e)},ne.prototype.removeItem=function(e){var t=this.cart.delete(e);return this.save(),t},ne.prototype.data=function(){return this.cart};var re=ne,ce=(a(141),new re);var oe=Object(i.o)((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),f=p[0],h=p[1],E={isAuthenticated:c,userHasAuthenticated:o,cart:ce,courses:f,setCourses:h};return Object(n.useEffect)((function(){fetch("https://18.193.129.17/checktoken",{credentials:"include"}).then((function(e){o(e.ok),m(!1)})).catch((function(e){console.error(e),m(!1)}))}),[]),r.a.createElement("div",{className:"App"},!u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(te,E),r.a.createElement($,{appProps:E})))}));a(142);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.BrowserRouter,{basename:"/massbuy"},r.a.createElement(oe,null))),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.87ac8e2e.chunk.js.map