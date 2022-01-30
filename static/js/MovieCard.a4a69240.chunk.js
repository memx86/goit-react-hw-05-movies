"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[856],{459:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var c=t(885),r=t(791),a=t(501),i=t(871),o=t(909),s=t(240),u={btn:"Button_btn__RBtNK",center:"Button_center__afHOB Button_btn__RBtNK"},l=t(184);var d=function(n){var e=n.text,t=n.onClick,c=n.type,r=void 0===c?"button":c,a=n.className,i=void 0===a?"btn":a;return(0,l.jsx)("button",{type:r,className:u[i],onClick:t,children:e})},_=t(992),v="MovieCard_wrapper__UNKq4",h="MovieCard_img__YZsvZ",f="MovieCard_content__1bWZZ",j="MovieCard_genres__EDNHv",m="MovieCard_information__DyslR",x="MovieCard_list__Sduoj";var g=function(n){var e=(0,r.useState)((function(){return{release_date:"1970",genres:[]}})),t=(0,c.Z)(e,2),u=t[0],g=t[1],p=(0,i.s0)(),b=(0,i.UO)().movieId;(0,r.useEffect)((function(){_.HI(b).then(g).catch((function(){return p("/")}))}),[b,p]);var w=u.poster_path,k=u.title,N=u.release_date,C=u.vote_average,y=u.overview,U=u.genres,S=N.slice(0,4),Z=w?"".concat("https://www.themoviedb.org/t/p/w300_and_h450_bestv2").concat(w):"/300x450.png";return(0,l.jsx)(s.Z,{children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(d,{text:"Go back",onClick:function(){return p(-1)}}),(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)("img",{src:Z,alt:k,className:h}),(0,l.jsxs)("div",{className:f,children:[(0,l.jsxs)("h1",{children:[k," (",S,")"]}),(0,l.jsxs)("p",{children:["User score: ",Math.round(10*C),"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:y}),(0,l.jsx)("h3",{children:"Genres"}),U.length&&(0,l.jsx)("ul",{className:j,children:U.map((function(n){var e=n.id,t=n.name;return(0,l.jsx)("li",{children:t},e)}))})]})]}),(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{className:x,children:[(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(b,"/cast"),children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(b,"/reviews"),children:"Reviews"})})]})]}),(0,l.jsx)(i.j3,{context:[b]})]})})}},240:function(n,e,t){t.d(e,{Z:function(){return a}});var c={section:"Section_section__Z2PLw",search:"Section_search__Yd9dR"},r=t(184);var a=function(n){var e=n.type,t=void 0===e?"section":e,a=n.children;return(0,r.jsx)("section",{className:c[t],children:a})}},992:function(n,e,t){t.d(e,{XT:function(){return i},HI:function(){return o},IQ:function(){return s},Jh:function(){return u},Hg:function(){return l}});var c="https://api.themoviedb.org/3/",r="fadfbb72581e18342bb7490adda20bdd";function a(n){return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(n)}))}function i(n){var e="?query=".concat(n);return a("".concat(c).concat("search/movie").concat(e,"&api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}function o(n){var e="movie/".concat(n);return a("".concat(c).concat(e,"?api_key=").concat(r,"&language=en-US"))}function s(n){var e="movie/".concat(n);return a("".concat(c).concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.cast}))}function u(n){var e="movie/".concat(n);return a("".concat(c).concat(e,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}function l(){return a("".concat(c,"trending/all/day?api_key=").concat(r,"&language=en-US")).then((function(n){return n.results}))}}}]);
//# sourceMappingURL=MovieCard.a4a69240.chunk.js.map