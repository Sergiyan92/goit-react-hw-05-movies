"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{44:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n.p+"static/media/default.076c685af4ae52f50919.png",i="Carditem_carditem__NLjbs",c="Carditem_img__MnV65",u=n(184),s=function(e){var t,n=e.card;return(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("img",{className:c,src:n.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(n.backdrop_path):a,alt:n.original_title}),(0,u.jsx)("h3",{children:n.original_title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Overview"}),(0,u.jsx)("p",{children:n.overview})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("ul",{children:null===(t=n.genres)||void 0===t?void 0:t.map((function(e,t){return(0,u.jsx)("span",{children:e.name},t)}))})]})]})},o=n(87),d=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)(o.rU,{to:"cast",children:"Cast"}),(0,u.jsx)(o.rU,{to:"reviews",children:"Reviews"})]})]})},l=n(791),p=n(689),h=n(422),f=function(){var e=(0,p.UO)().movieId,t=(0,l.useState)(null),n=(0,r.Z)(t,2),a=n[0],i=n[1];if((0,l.useEffect)((function(){(0,h.yK)(e).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[e]),a)return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.rU,{to:"/",children:"Back"}),(0,u.jsx)(s,{card:a}),(0,u.jsx)(d,{}),(0,u.jsx)(p.j3,{})]})}},422:function(e,t,n){n.d(t,{IQ:function(){return l},XT:function(){return s},lg:function(){return p},pg:function(){return o},yK:function(){return d}});var r=n(861),a=n(757),i=n.n(a),c=n(243),u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc"}},s=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.next=3,(0,c.Z)(n,u);case 3:return r=e.sent,a=r.data.results,e.abrupt("return",{movieData:a.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?language=en-US",e.next=3,(0,c.Z)("https://api.themoviedb.org/3/trending/movie/day?language=en-US",u);case 3:return t=e.sent,n=t.data.results,e.abrupt("return",{trendingData:n.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.next=3,(0,c.Z)(n,u);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),e.next=3,(0,c.Z)(n,u);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),e.next=3,(0,c.Z)(n,u);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=294.b8c1920a.chunk.js.map