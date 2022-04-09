"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[249],{459:function(t,e,n){n.d(e,{Z:function(){return i}});var a={btn:"Button_btn__RBtNK",center:"Button_center__afHOB Button_btn__RBtNK",small:"Button_small__QdkfY Button_btn__RBtNK",current:"Button_current__7YQVH Button_small__QdkfY Button_btn__RBtNK"},r=n(184);var i=function(t){var e=t.text,n=t.onClick,i=t.type,s=void 0===i?"button":i,c=t.className,o=void 0===c?"btn":c;return(0,r.jsx)("button",{type:s,className:a[o],onClick:n,children:e})}},829:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(683),r=n(885),i=n(501),s=n(871),c="MovieCard_item__c3tx6",o="MovieCard_link__EvibY",u="MovieCard_img__YZsvZ",l="MovieCard_text__NNMdE",v=n(184);var _=function(t){var e=t.movie,n=t.pathname,_=(0,s.TH)(),f=(0,i.lr)(),m=(0,r.Z)(f,1)[0].get("query"),d=e.id,h=e.title,Z=e.name,x=e.poster_path,p=e.release_date,j=e.first_air_date,N=new Date(p||j).getFullYear()||"";return(0,v.jsx)("li",{className:c,children:(0,v.jsxs)(i.rU,{to:"".concat(n,"/").concat(d),state:(0,a.Z)((0,a.Z)({},_),{},{query:m}),className:o,children:[(0,v.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(x),alt:null!==h&&void 0!==h?h:Z}),(0,v.jsxs)("p",{className:l,children:[null!==h&&void 0!==h?h:Z,", ",N]})]})})},f="MovieList_list__yjDCC";var m=function(t){var e=t.movies,n=void 0===e?[]:e,a=t.pathname;return(0,v.jsx)("ul",{className:f,children:n.map((function(t){return(0,v.jsx)(_,{movie:t,pathname:a},t.id)}))})}},235:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(459),r="Pagination_list__t7oBK",i=n(184);var s=function(t){var e=t.page,n=t.setPage,s=t.totalPages,c=function(t){n(t<s?t:s)};return(0,i.jsxs)("div",{className:r,children:[e>1&&(0,i.jsx)(a.Z,{text:"<",onClick:function(){return c(e-1)},className:"small"}),e>1&&(0,i.jsx)(a.Z,{text:"1",onClick:function(){return n(1)},className:"small"}),e-2>2&&(0,i.jsx)("span",{children:"..."}),e-2>1&&(0,i.jsx)(a.Z,{text:e-2,onClick:function(){return c(e-2)},className:"small"}),e-1>1&&(0,i.jsx)(a.Z,{text:e-1,onClick:function(){return c(e-1)},className:"small"}),(0,i.jsx)(a.Z,{text:e,onClick:function(){},className:"current"}),e+1<s&&(0,i.jsx)(a.Z,{text:e+1,onClick:function(){return c(e+1)},className:"small"}),e+2<s&&(0,i.jsx)(a.Z,{text:e+2,onClick:function(){return c(e+2)},className:"small"}),e+2<s-1&&(0,i.jsx)("span",{children:"..."}),e<s&&(0,i.jsx)(a.Z,{text:s,onClick:function(){return c(s)},className:"small"}),e<s&&(0,i.jsx)(a.Z,{text:">",onClick:function(){return c(e+1)},className:"small"})]})}},418:function(t,e,n){n.d(e,{Z:function(){return i}});var a={section:"Section_section__Z2PLw",search:"Section_search__Yd9dR"},r=n(184);var i=function(t){var e=t.type,n=void 0===e?"section":e,i=t.children;return(0,r.jsx)("section",{className:a[n],children:i})}},992:function(t,e,n){var a=n(671),r=n(144),i=n(274),s=n(359),c=(0,s.Z)("BASE_URL"),o=(0,s.Z)("KEY"),u=(0,s.Z)("PARAMS"),l=(0,s.Z)("query"),v=(0,s.Z)("page"),_=(0,s.Z)("fetchUrl"),f=function(){function t(){var e=this;(0,a.Z)(this,t),Object.defineProperty(this,_,{value:m}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),this.getTrending=function(){var n="".concat(t.ENDPOINTS.TRENDING,"?page=").concat((0,i.Z)(e,v)[v],"&");return(0,i.Z)(e,_)[_](n)},(0,i.Z)(this,v)[v]=1}return(0,r.Z)(t,[{key:"getMovies",value:function(){var e=new URLSearchParams({query:(0,i.Z)(this,l)[l],page:(0,i.Z)(this,v)[v]}),n="".concat(t.ENDPOINTS.SEARCH,"?").concat(e,"&");return(0,i.Z)(this,_)[_](n)}},{key:"getMovie",value:function(e){var n="".concat(t.ENDPOINTS.MOVIE).concat(e,"?");return(0,i.Z)(this,_)[_](n)}},{key:"getCast",value:function(e){var n="".concat(t.ENDPOINTS.MOVIE).concat(e,"/credits?");return(0,i.Z)(this,_)[_](n).then((function(t){return t.cast}))}},{key:"getReviews",value:function(e){var n="".concat(t.ENDPOINTS.MOVIE).concat(e,"/reviews?");return(0,i.Z)(this,_)[_](n).then((function(t){return t.results}))}},{key:"query",get:function(){return(0,i.Z)(this,l)[l]},set:function(t){(0,i.Z)(this,l)[l]=t}},{key:"page",get:function(){return(0,i.Z)(this,v)[v]},set:function(t){(0,i.Z)(this,v)[v]=t>0?t:1}}]),t}();function m(t){return fetch("".concat((0,i.Z)(f,c)[c]).concat(t).concat((0,i.Z)(f,u)[u])).then((function(t){return t.ok?t.json():Promise.reject(t)}))}Object.defineProperty(f,c,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(f,o,{writable:!0,value:"fadfbb72581e18342bb7490adda20bdd"}),Object.defineProperty(f,u,{writable:!0,value:new URLSearchParams({api_key:(0,i.Z)(f,o)[o],language:"en-US"})}),f.ENDPOINTS={SEARCH:"search/movie",MOVIE:"movie/",TRENDING:"trending/all/day"};var d=new f;e.Z=d},29:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(418),r=n(87),i=n(885),s=n(791),c=n(501),o="SearchForm_form__o80os",u="SearchForm_label__GvSVH",l="SearchForm_btn__TXrR3",v="SearchForm_input__HOxJo",_=n(134),f="IconButton_search__qfkbX IconButton_btn__PoeXD",m=n(184);var d=function(t){var e=t.type,n=void 0===e?"button":e;return"search"===t.icon?(0,m.jsx)("button",{type:n,className:f,"aria-label":"search",children:(0,m.jsx)(_.RB5,{style:{width:"40"}})}):(0,m.jsx)("button",{type:n,"aria-label":"button"})};var h=function(t){var e=(0,s.useState)(""),n=(0,i.Z)(e,2),a=n[0],r=n[1],_=(0,c.lr)(),f=(0,i.Z)(_,2)[1],h=function(){return r("")};return(0,m.jsx)("form",{className:o,onSubmit:function(t){t.preventDefault();var e=t.target.query.value.trim().toLowerCase();f(e?{query:e}:{}),h()},children:(0,m.jsxs)("label",{className:u,children:[(0,m.jsx)("span",{className:l,children:(0,m.jsx)(d,{type:"submit",icon:"search"})}),(0,m.jsx)("input",{className:v,type:"text",name:"query",placeholder:"Search movies",value:a,onInput:function(t){var e=t.target.value;r(e)}})]})})},Z=n(933),x=n(871),p=n(829),j=n(908),N=n(992),b=n(235);var g=function(){var t=(0,c.lr)(),e=(0,i.Z)(t,1)[0].get("query"),n=(0,s.useState)(1),a=(0,i.Z)(n,2),r=a[0],o=a[1],u=(0,s.useState)(1),l=(0,i.Z)(u,2),v=l[0],_=l[1],f=(0,Z.useQuery)(["movies",e,r],(function(){return e?(N.Z.query=e,N.Z.page=r,N.Z.getMovies()):[]})),d=f.data,h=f.isLoading,g=(0,x.TH)().pathname,y=null===d||void 0===d?void 0:d.total_pages;return(0,s.useEffect)((function(){y&&_(y)}),[y]),h?(0,m.jsx)(j.Z,{}):(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(p.Z,{movies:d.results,pathname:g}),e&&(0,m.jsx)(b.Z,{page:r,setPage:o,totalPages:v})]})};var y=function(){return(0,m.jsx)(a.Z,{children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(h,{}),(0,m.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=Movies.b93987b1.chunk.js.map