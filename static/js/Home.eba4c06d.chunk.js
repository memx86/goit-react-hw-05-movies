"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[268],{459:function(t,e,n){n.d(e,{Z:function(){return i}});var r={btn:"Button_btn__RBtNK",center:"Button_center__afHOB Button_btn__RBtNK",small:"Button_small__QdkfY Button_btn__RBtNK",current:"Button_current__7YQVH Button_small__QdkfY Button_btn__RBtNK"},a=n(184);var i=function(t){var e=t.text,n=t.onClick,i=t.type,c=void 0===i?"button":i,o=t.className,s=void 0===o?"btn":o;return(0,a.jsx)("button",{type:c,className:r[s],onClick:n,children:e})}},829:function(t,e,n){n.d(e,{Z:function(){return _}});var r=n(683),a=n(885),i=n(501),c=n(871),o="MovieCard_item__c3tx6",s="MovieCard_link__EvibY",u="MovieCard_img__YZsvZ",l="MovieCard_text__NNMdE",f=n(184);var d=function(t){var e=t.movie,n=t.pathname,d=(0,c.TH)(),v=(0,i.lr)(),_=(0,a.Z)(v,1)[0].get("query"),p=e.id,h=e.title,m=e.name,Z=e.poster_path,b=e.release_date,j=e.first_air_date,g=new Date(b||j).getFullYear()||"";return(0,f.jsx)("li",{className:o,children:(0,f.jsxs)(i.rU,{to:"".concat(n,"/").concat(p),state:(0,r.Z)((0,r.Z)({},d),{},{query:_}),className:s,children:[(0,f.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(Z),alt:null!==h&&void 0!==h?h:m}),(0,f.jsxs)("p",{className:l,children:[null!==h&&void 0!==h?h:m,", ",g]})]})})},v="MovieList_list__yjDCC";var _=function(t){var e=t.movies,n=void 0===e?[]:e,r=t.pathname;return(0,f.jsx)("ul",{className:v,children:n.map((function(t){return(0,f.jsx)(d,{movie:t,pathname:r},t.id)}))})}},235:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(459),a="Pagination_list__t7oBK",i=n(184);var c=function(t){var e=t.page,n=t.setPage,c=t.totalPages,o=function(t){n(t<c?t:c)};return(0,i.jsxs)("div",{className:a,children:[e>1&&(0,i.jsx)(r.Z,{text:"<",onClick:function(){return o(e-1)},className:"small"}),e>1&&(0,i.jsx)(r.Z,{text:"1",onClick:function(){return n(1)},className:"small"}),e-2>2&&(0,i.jsx)("span",{children:"..."}),e-2>1&&(0,i.jsx)(r.Z,{text:e-2,onClick:function(){return o(e-2)},className:"small"}),e-1>1&&(0,i.jsx)(r.Z,{text:e-1,onClick:function(){return o(e-1)},className:"small"}),(0,i.jsx)(r.Z,{text:e,onClick:function(){},className:"current"}),e+1<c&&(0,i.jsx)(r.Z,{text:e+1,onClick:function(){return o(e+1)},className:"small"}),e+2<c&&(0,i.jsx)(r.Z,{text:e+2,onClick:function(){return o(e+2)},className:"small"}),e+2<c-1&&(0,i.jsx)("span",{children:"..."}),e<c&&(0,i.jsx)(r.Z,{text:c,onClick:function(){return o(c)},className:"small"}),e<c&&(0,i.jsx)(r.Z,{text:">",onClick:function(){return o(e+1)},className:"small"})]})}},418:function(t,e,n){n.d(e,{Z:function(){return i}});var r={section:"Section_section__Z2PLw",search:"Section_search__Yd9dR"},a=n(184);var i=function(t){var e=t.type,n=void 0===e?"section":e,i=t.children;return(0,a.jsx)("section",{className:r[n],children:i})}},992:function(t,e,n){var r=n(671),a=n(144),i=n(274),c=n(359),o=(0,c.Z)("BASE_URL"),s=(0,c.Z)("KEY"),u=(0,c.Z)("PARAMS"),l=(0,c.Z)("query"),f=(0,c.Z)("page"),d=(0,c.Z)("fetchUrl"),v=function(){function t(){var e=this;(0,r.Z)(this,t),Object.defineProperty(this,d,{value:_}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),this.getTrending=function(){var n="".concat(t.ENDPOINTS.TRENDING,"?page=").concat((0,i.Z)(e,f)[f],"&");return(0,i.Z)(e,d)[d](n)},(0,i.Z)(this,f)[f]=1}return(0,a.Z)(t,[{key:"getMovies",value:function(){var e=new URLSearchParams({query:(0,i.Z)(this,l)[l],page:(0,i.Z)(this,f)[f]}),n="".concat(t.ENDPOINTS.SEARCH,"?").concat(e,"&");return(0,i.Z)(this,d)[d](n)}},{key:"getMovie",value:function(e){var n="".concat(t.ENDPOINTS.MOVIE).concat(e,"?");return(0,i.Z)(this,d)[d](n)}},{key:"getCast",value:function(e){var n="".concat(t.ENDPOINTS.MOVIE).concat(e,"/credits?");return(0,i.Z)(this,d)[d](n).then((function(t){return t.cast}))}},{key:"getReviews",value:function(e){var n="".concat(t.ENDPOINTS.MOVIE).concat(e,"/reviews?");return(0,i.Z)(this,d)[d](n).then((function(t){return t.results}))}},{key:"query",get:function(){return(0,i.Z)(this,l)[l]},set:function(t){(0,i.Z)(this,l)[l]=t}},{key:"page",get:function(){return(0,i.Z)(this,f)[f]},set:function(t){(0,i.Z)(this,f)[f]=t>0?t:1}}]),t}();function _(t){return fetch("".concat((0,i.Z)(v,o)[o]).concat(t).concat((0,i.Z)(v,u)[u])).then((function(t){return t.ok?t.json():Promise.reject(t)}))}Object.defineProperty(v,o,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(v,s,{writable:!0,value:"fadfbb72581e18342bb7490adda20bdd"}),Object.defineProperty(v,u,{writable:!0,value:new URLSearchParams({api_key:(0,i.Z)(v,s)[s],language:"en-US"})}),v.ENDPOINTS={SEARCH:"search/movie",MOVIE:"movie/",TRENDING:"trending/all/day"};var p=new v;e.Z=p},52:function(t,e,n){n.r(e);var r=n(885),a=n(791),i=n(933),c=n(418),o=n(87),s=n(908),u=n(992),l=n(829),f=n(235),d=n(184);e.default=function(){var t=(0,a.useState)(1),e=(0,r.Z)(t,2),n=e[0],v=e[1],_=(0,a.useState)(1),p=(0,r.Z)(_,2),h=p[0],m=p[1],Z=(0,i.useQuery)(["trending",n],(function(){return u.Z.page=n,u.Z.getTrending()})),b=Z.data,j=Z.isLoading,g=null===b||void 0===b?void 0:b.total_pages;return(0,a.useEffect)((function(){g&&m(g)}),[g]),j?(0,d.jsx)(s.Z,{}):(0,d.jsx)(c.Z,{children:(0,d.jsxs)(o.Z,{children:[(0,d.jsx)("h1",{className:"trending-title",children:"Trending today"}),(0,d.jsx)(l.Z,{movies:b.results,pathname:"/movies"}),(0,d.jsx)(f.Z,{page:n,setPage:v,totalPages:h})]})})}},671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},274:function(t,e,n){function r(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}n.d(e,{Z:function(){return r}})},359:function(t,e,n){n.d(e,{Z:function(){return a}});var r=0;function a(t){return"__private_"+r+++"_"+t}},144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return a}})},683:function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=Home.eba4c06d.chunk.js.map