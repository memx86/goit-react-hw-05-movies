"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[268],{829:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(683),a=n(885),i=n(501),s=n(871),o=n(205),c=n(894),l="MovieCard_item__c3tx6",u="MovieCard_link__EvibY",f="MovieCard_img__YZsvZ",p="MovieCard_text__NNMdE",d=n(184);var m=function(e){var t=e.movie,n=e.pathname,m=(0,s.TH)(),g=(0,i.lr)(),v=(0,a.Z)(g,1)[0].get("query"),j=t.id,x=t.title,_=t.name,h=t.poster_path,b=t.release_date,Z=t.first_air_date,P=new Date(b||Z).getFullYear()||"",y=h?"https://image.tmdb.org/t/p/w300".concat(h):o,O=h?"https://image.tmdb.org/t/p/w500".concat(h):c;return(0,d.jsx)("li",{className:l,children:(0,d.jsxs)(i.rU,{to:"".concat(n,"/").concat(j),state:(0,r.Z)((0,r.Z)({},m),{},{query:v}),className:u,children:[(0,d.jsxs)("picture",{children:[(0,d.jsx)("source",{srcSet:"".concat(y," 1x, ").concat(O," 2x")}),(0,d.jsx)("img",{className:f,src:y,alt:null!==x&&void 0!==x?x:_})]}),(0,d.jsxs)("p",{className:p,children:[null!==x&&void 0!==x?x:_,", ",P]})]})})},g="MovieList_list__yjDCC";var v=function(e){var t=e.movies,n=void 0===t?[]:t,r=e.pathname;return(0,d.jsx)("ul",{className:g,children:n.map((function(e){return(0,d.jsx)(m,{movie:e,pathname:r},e.id)}))})}},235:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(459),a="Pagination_list__t7oBK",i=n(184);var s=function(e){var t=e.page,n=e.setPage,s=e.totalPages,o=function(e){n(e<s?e:s)};return(0,i.jsxs)("div",{className:a,children:[t>1&&(0,i.jsx)(r.Z,{text:"<",onClick:function(){return o(t-1)},className:"small"}),t>1&&(0,i.jsx)(r.Z,{text:"1",onClick:function(){return n(1)},className:"small"}),t-2>2&&(0,i.jsx)("span",{children:"..."}),t-2>1&&(0,i.jsx)(r.Z,{text:t-2,onClick:function(){return o(t-2)},className:"small"}),t-1>1&&(0,i.jsx)(r.Z,{text:t-1,onClick:function(){return o(t-1)},className:"small"}),(0,i.jsx)(r.Z,{text:t,onClick:function(){},className:"current"}),t+1<s&&(0,i.jsx)(r.Z,{text:t+1,onClick:function(){return o(t+1)},className:"small"}),t+2<s&&(0,i.jsx)(r.Z,{text:t+2,onClick:function(){return o(t+2)},className:"small"}),t+2<s-1&&(0,i.jsx)("span",{children:"..."}),t<s&&(0,i.jsx)(r.Z,{text:s,onClick:function(){return o(s)},className:"small"}),t<s&&(0,i.jsx)(r.Z,{text:">",onClick:function(){return o(t+1)},className:"small"})]})}},993:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(418),a=n(87),i=n(791),s=n(933),o=n(908),c=n(829),l=n(235),u=n(992),f="Trending_title__3-P7p",p=n(184);var d=function(e){var t=e.page,n=e.totalPages,r=e.setPage,a=e.setTotalPages,d=(0,s.useQuery)(["trending",t],(function(){return u.Z.page=t,u.Z.getTrending()})),m=d.data,g=d.isLoading;(0,i.useEffect)((function(){r(1)}),[r]);var v=null===m||void 0===m?void 0:m.total_pages;return(0,i.useEffect)((function(){v&&a(v)}),[v,a]),g?(0,p.jsx)(o.Z,{}):(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("h1",{className:f,children:"Trending today"}),(null===m||void 0===m?void 0:m.results)&&(0,p.jsx)(c.Z,{movies:m.results,pathname:"/movies"}),(0,p.jsx)(l.Z,{page:t,setPage:r,totalPages:n})]})};var m=function(e){var t=e.page,n=e.totalPages,i=e.setPage,s=e.setTotalPages;return(0,p.jsx)(r.Z,{children:(0,p.jsx)(a.Z,{children:(0,p.jsx)(d,{page:t,setPage:i,totalPages:n,setTotalPages:s})})})}},671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},274:function(e,t,n){function r(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}n.d(t,{Z:function(){return r}})},359:function(e,t,n){n.d(t,{Z:function(){return a}});var r=0;function a(e){return"__private_"+r+++"_"+e}},144:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return a}})},683:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=Home.bc7ee827.chunk.js.map