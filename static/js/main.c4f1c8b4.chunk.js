(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),o=a.n(r),s=(a(27),a(13)),i=a(4),u=a(7),l=a(1);var j=function(e){var t=e.handleSubmit,a=Object(c.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""===r&&u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),t(r),o("")},children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{name:"query",value:r,onChange:function(e){o(e.currentTarget.value)},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=document.querySelector("#modal-root");var m=function(e){var t=e.largeImageURL,a=e.alt,n=e.toggleModal;Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&n()};return Object(r.createPortal)(Object(l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(l.jsx)("div",{className:"Modal",children:Object(l.jsx)("img",{src:t,alt:a})})}),b)};var d=function(e){var t=e.image,a=Object(c.useState)(!1),n=Object(i.a)(a,2),r=n[0],o=n[1],s=function(){o(!r)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{className:"ImageGalleryItem",onClick:function(){s()},children:Object(l.jsx)("img",{src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image"})}),r&&Object(l.jsx)(m,{toggleModal:s,largeImageURL:t.largeImageURL,alt:t.tags})]})};var O=function(e){var t=e.images;return Object(l.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(l.jsx)(d,{image:e},e.id)}))})},f=a(22),h=a.n(f);var g=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(h.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})};var p=function(e){var t=e.loadMore;return Object(l.jsx)("button",{className:"Button",onClick:t,children:"Load More"})},v=a(12),x=a.n(v);x.a.defaults.baseURL="https://pixabay.com/api";var S={getPictures:function(e,t){return x.a.get("/?q=".concat(e,"&page=").concat(t,"&key=").concat("23129737-24f03c8dbe97b8724820f585e","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}};a(67);var y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),b=o[0],m=o[1],d=Object(c.useState)(1),f=Object(i.a)(d,2),h=f[0],v=f[1],x=Object(c.useState)(!1),y=Object(i.a)(x,2),N=y[0],w=y[1],F=Object(c.useState)(null),I=Object(i.a)(F,2),k=I[0],E=I[1];Object(c.useEffect)((function(){""!==a&&L()}),[a]),Object(c.useEffect)((function(){2!==h&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[h]);var L=function(){w(!0),S.getPictures(a,h).then((function(e){m([].concat(Object(s.a)(b),Object(s.a)(e))),v(h+1)})).catch((function(){return E(!0)})).finally((function(){return w(!1)}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{handleSubmit:function(e){n(e),v(1),m([]),E(null)}}),k&&u.b.error("\u041d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 ".concat(a,":(")),Object(l.jsx)(O,{images:b}),b.length>0&&Object(l.jsx)(p,{loadMore:L}),N&&Object(l.jsx)(g,{}),Object(l.jsx)(u.a,{autoClose:3e3})]})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.c4f1c8b4.chunk.js.map