"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[249],{829:function(n,e,t){t.d(e,{Z:function(){return v}});var a=t(501),r=t(871),c="MovieCard_item__c3tx6",o="MovieCard_link__EvibY",i="MovieCard_img__YZsvZ",u="MovieCard_text__NNMdE",s=t(184);var l=function(n){var e=n.movie,t=n.pathname,l=(0,r.TH)(),_=e.id,v=e.title,h=e.name,m=e.poster_path,d=e.release_date,f=e.first_air_date,p=new Date(d||f).getFullYear()||"";return(0,s.jsx)("li",{className:c,children:(0,s.jsxs)(a.rU,{to:"".concat(t,"/").concat(_),state:l,className:o,children:[(0,s.jsx)("img",{className:i,src:"https://image.tmdb.org/t/p/w500".concat(m),alt:null!==v&&void 0!==v?v:h}),(0,s.jsxs)("p",{className:u,children:[null!==v&&void 0!==v?v:h,", ",p]})]})})},_="MovieList_list__yjDCC";var v=function(n){var e=n.movies,t=n.pathname;return(0,s.jsx)("ul",{className:_,children:e.map((function(n){return(0,s.jsx)(l,{movie:n,pathname:t},n.id)}))})}},418:function(n,e,t){t.d(e,{Z:function(){return c}});var a={section:"Section_section__Z2PLw",search:"Section_search__Yd9dR"},r=t(184);var c=function(n){var e=n.type,t=void 0===e?"section":e,c=n.children;return(0,r.jsx)("section",{className:a[t],children:c})}},992:function(n,e,t){t.d(e,{XT:function(){return o},HI:function(){return i},IQ:function(){return u},Jh:function(){return s},Hg:function(){return l}});var a="https://api.themoviedb.org/3/",r="fadfbb72581e18342bb7490adda20bdd";function c(n){return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(n)}))}function o(n){var e="?query=".concat(n);return c("".concat(a).concat("search/movie").concat(e,"&api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}function i(n){var e="movie/".concat(n);return c("".concat(a).concat(e,"?api_key=").concat(r,"&language=en-US"))}function u(n){var e="movie/".concat(n);return c("".concat(a).concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.cast}))}function s(n){var e="movie/".concat(n);return c("".concat(a).concat(e,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}function l(){return c("".concat(a,"trending/all/day?api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}},29:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var a=t(418),r=t(87),c=t(885),o=t(791),i=t(501),u="SearchForm_form__o80os",s="SearchForm_label__GvSVH",l="SearchForm_btn__TXrR3",_="SearchForm_input__HOxJo",v=t(134),h="IconButton_search__qfkbX IconButton_btn__PoeXD",m=t(184);var d=function(n){var e=n.type,t=void 0===e?"button":e;return"search"===n.icon?(0,m.jsx)("button",{type:t,className:h,"aria-label":"search",children:(0,m.jsx)(v.RB5,{style:{width:"40"}})}):(0,m.jsx)("button",{type:t,"aria-label":"button"})};var f=function(n){var e=(0,o.useState)(""),t=(0,c.Z)(e,2),a=t[0],r=t[1],v=(0,i.lr)(),h=(0,c.Z)(v,2)[1],f=function(){return r("")};return(0,m.jsx)("form",{className:u,onSubmit:function(n){n.preventDefault();var e=n.target.query.value.trim().toLowerCase();h(e?{query:e}:{}),f()},children:(0,m.jsxs)("label",{className:s,children:[(0,m.jsx)("span",{className:l,children:(0,m.jsx)(d,{type:"submit",icon:"search"})}),(0,m.jsx)("input",{className:_,type:"text",name:"query",placeholder:"Search movies",value:a,onInput:function(n){var e=n.target.value;r(e)}})]})})},p=t(933),x=t(871),g=t(829),j=t(908),b=t(992);var y=function(){var n=(0,i.lr)(),e=(0,c.Z)(n,1)[0].get("query"),t=(0,p.useQuery)(["movies",e],(function(){return e?b.XT(e):[]})),a=t.data,r=t.isLoading,o=(0,x.TH)().pathname;return r?(0,m.jsx)(j.Z,{}):(0,m.jsx)(g.Z,{movies:a,pathname:o})};var S=function(){return(0,m.jsx)(a.Z,{children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(f,{}),(0,m.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=Movies.4a6d6d95.chunk.js.map