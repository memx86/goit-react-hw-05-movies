"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[816],{852:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var c=t(933),r=t(501),i=t(871),o=t(418),a=t(87),s={btn:"Button_btn__RBtNK",center:"Button_center__afHOB Button_btn__RBtNK"},u=t(184);var l=function(n){var e=n.text,t=n.onClick,c=n.type,r=void 0===c?"button":c,i=n.className,o=void 0===i?"btn":i;return(0,u.jsx)("button",{type:r,className:s[o],onClick:t,children:e})},d=t(992),v="Movie_wrapper__ab4g-",_="Movie_img__WUHrV",h="Movie_content__TZWZo",f="Movie_genres__y-BLu",m="Movie_information__7+iT3",x="Movie_list__sqWn9";var j=function(){var n,e,t=(0,i.s0)(),s=(0,i.TH)(),j=(0,i.UO)().movieId,p=(0,c.useQuery)("".concat(j),(function(){return d.HI(j)}),{placeholderData:{release_date:"1970",genres:[]},retry:!1,onError:function(){return t("/")}}).data,g=p.poster_path,b=p.title,w=p.release_date,k=p.vote_average,y=p.overview,N=p.genres,U=w.slice(0,4),B=g?"".concat("https://www.themoviedb.org/t/p/w300_and_h450_bestv2").concat(g):"/300x450.png";return(0,u.jsx)(o.Z,{children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(l,{text:"Go back",onClick:function(){var n,e,c=null!==(n=null===s||void 0===s||null===(e=s.state)||void 0===e?void 0:e.pathname)&&void 0!==n?n:"/";t(c)}}),(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("img",{src:B,alt:b,className:_}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsxs)("h1",{children:[b," (",U,")"]}),(0,u.jsxs)("p",{children:["User score: ",Math.round(10*k),"%"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:y}),(0,u.jsx)("h3",{children:"Genres"}),N.length&&(0,u.jsx)("ul",{className:f,children:N.map((function(n){var e=n.id,t=n.name;return(0,u.jsx)("li",{children:t},e)}))})]})]}),(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{className:x,children:[(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(j,"/cast"),state:null!==(n=null===s||void 0===s?void 0:s.state)&&void 0!==n?n:s,children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(j,"/reviews"),state:null!==(e=null===s||void 0===s?void 0:s.state)&&void 0!==e?e:s,children:"Reviews"})})]})]}),(0,u.jsx)(i.j3,{context:[j]})]})})}},418:function(n,e,t){t.d(e,{Z:function(){return i}});var c={section:"Section_section__Z2PLw",search:"Section_search__Yd9dR"},r=t(184);var i=function(n){var e=n.type,t=void 0===e?"section":e,i=n.children;return(0,r.jsx)("section",{className:c[t],children:i})}},992:function(n,e,t){t.d(e,{XT:function(){return o},HI:function(){return a},IQ:function(){return s},Jh:function(){return u},Hg:function(){return l}});var c="https://api.themoviedb.org/3/",r="fadfbb72581e18342bb7490adda20bdd";function i(n){return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(n)}))}function o(n){var e="?query=".concat(n);return i("".concat(c).concat("search/movie").concat(e,"&api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}function a(n){var e="movie/".concat(n);return i("".concat(c).concat(e,"?api_key=").concat(r,"&language=en-US"))}function s(n){var e="movie/".concat(n);return i("".concat(c).concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.cast}))}function u(n){var e="movie/".concat(n);return i("".concat(c).concat(e,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}function l(){return i("".concat(c,"trending/all/day?api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}}}]);
//# sourceMappingURL=Movie.c8d1099c.chunk.js.map