"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{607:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(791),u=n(184),i=function(e){var t=e.review;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("h3",{children:[" Author: ",t.author]}),(0,u.jsx)("p",{children:t.content})]})},c=n(689),o=n(422),s="Reviews_review__0352W",p=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(),n=(0,r.Z)(t,2),p=n[0],f=n[1];return(0,a.useEffect)((function(){(0,o.lg)(e).then((function(e){return f(e)})).catch((function(e){return console.error(e)}))}),[e]),(0,u.jsx)("div",{className:s,children:null!==p&&void 0!==p&&p.results.length?p.results.map((function(e){return(0,u.jsx)(i,{review:e},e.id)})):(0,u.jsx)("p",{children:"We don't have ani reviews for this movie"})})}},422:function(e,t,n){n.d(t,{IQ:function(){return f},XT:function(){return o},lg:function(){return h},pg:function(){return s},yK:function(){return p}});var r=n(861),a=n(757),u=n.n(a),i=n(243),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc"}},o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data.results,e.abrupt("return",{movieData:a.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?language=en-US",e.next=3,(0,i.Z)("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 3:return t=e.sent,n=t.data.results,e.abrupt("return",{trendingData:n.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.af13a52f.chunk.js.map