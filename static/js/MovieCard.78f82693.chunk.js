"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[856],{459:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var c=t(885),r=t(791),a=t(501),i=t(871),o=t(909),s=t(240),u={btn:"Button_btn__RBtNK",center:"Button_center__afHOB Button_btn__RBtNK"},l=t(184);var d=function(n){var e=n.text,t=n.onClick,c=n.type,r=void 0===c?"button":c,a=n.className,i=void 0===a?"btn":a;return(0,l.jsx)("button",{type:r,className:u[i],onClick:t,children:e})},_=t(54),v=t(992),h="MovieCard_wrapper__UNKq4",f="MovieCard_img__YZsvZ",j="MovieCard_content__1bWZZ",x="MovieCard_genres__EDNHv",m="MovieCard_information__DyslR",g="MovieCard_list__Sduoj";var p=function(n){var e=(0,r.useState)((function(){return{release_date:"1970",genres:[]}})),t=(0,c.Z)(e,2),u=t[0],p=t[1],b=(0,r.useState)(!1),w=(0,c.Z)(b,2),k=w[0],N=w[1],y=(0,i.s0)(),C=(0,i.UO)().movieId;(0,r.useEffect)((function(){N(!0),v.HI(C).then(p).catch((function(){return y("/")})).finally((function(){return N(!1)}))}),[C,y]);var Z=u.poster_path,S=u.title,U=u.release_date,M=u.vote_average,B=u.overview,H=u.genres,R=U.slice(0,4),I=Z?"".concat("https://www.themoviedb.org/t/p/w300_and_h450_bestv2").concat(Z):"/300x450.png";return k?(0,l.jsx)(_.Z,{}):(0,l.jsx)(s.Z,{children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(d,{text:"Go back",onClick:function(){return y(-1)}}),(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("img",{src:I,alt:S,className:f}),(0,l.jsxs)("div",{className:j,children:[(0,l.jsxs)("h1",{children:[S," (",R,")"]}),(0,l.jsxs)("p",{children:["User score: ",Math.round(10*M),"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:B}),(0,l.jsx)("h3",{children:"Genres"}),H.length&&(0,l.jsx)("ul",{className:x,children:H.map((function(n){var e=n.id,t=n.name;return(0,l.jsx)("li",{children:t},e)}))})]})]}),(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{className:g,children:[(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(C,"/cast"),children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(C,"/reviews"),children:"Reviews"})})]})]}),(0,l.jsx)(i.j3,{context:[C]})]})})}},240:function(n,e,t){t.d(e,{Z:function(){return a}});var c={section:"Section_section__Z2PLw",search:"Section_search__Yd9dR"},r=t(184);var a=function(n){var e=n.type,t=void 0===e?"section":e,a=n.children;return(0,r.jsx)("section",{className:c[t],children:a})}},992:function(n,e,t){t.d(e,{XT:function(){return i},HI:function(){return o},Jh:function(){return s},_r:function(){return u},Hg:function(){return l}});var c="https://api.themoviedb.org/3/",r="fadfbb72581e18342bb7490adda20bdd";function a(n){return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(n)}))}function i(n){var e="?query=".concat(n);return a("".concat(c).concat("search/movie").concat(e,"&api_key=").concat(r,"&language=en-US"))}function o(n){var e="movie/".concat(n);return a("".concat(c).concat(e,"?api_key=").concat(r,"&language=en-US"))}function s(n){var e="movie/".concat(n);return a("".concat(c).concat(e,"/credits?api_key=").concat(r,"&language=en-US"))}function u(n){var e="movie/".concat(n);return a("".concat(c).concat(e,"/reviews?api_key=").concat(r,"&language=en-US"))}function l(){return a("".concat(c,"trending/all/day?api_key=").concat(r,"&language=en-US"))}}}]);
//# sourceMappingURL=MovieCard.78f82693.chunk.js.map