"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{580:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(433),a=n(861),u=n(439),i=n(757),c=n.n(i),o=n(791),s="Searchform_searchbar__756E7",l="Searchform_form__-nmYl",f="Searchform_button__V0B16",p="Searchform_button_label__QWQlK",h="Searchform_input__8bqfI",m=n(184),d=function(e){var t=e.onSubmit,n=(0,o.useState)(""),r=(0,u.Z)(n,2),a=r[0],i=r[1];return(0,m.jsx)("header",{className:s,children:(0,m.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),t(a)},children:[(0,m.jsx)("button",{type:"submit",className:f,children:(0,m.jsx)("span",{className:p,children:"Search"})}),(0,m.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(e){i(e.target.value)}})]})})},v=n(87),g=n(689),b=n(422),_="Movies_list__nhUXd",x="Movies_item__gEafQ",y=function(){var e=(0,o.useState)([]),t=(0,u.Z)(e,2),n=t[0],i=t[1],s=(0,o.useState)(null),l=(0,u.Z)(s,2),f=l[0],p=l[1],h=(0,v.lr)(),y=(0,u.Z)(h,2),S=y[0],j=y[1],Z=S.get("query"),w=(0,g.TH)();(0,o.useEffect)((function(){if(Z)try{var e=function(){var e=(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.XT)(Z);case 2:t=e.sent,n=t.movieData,i((function(){return(0,r.Z)(n)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(f){p(f.message)}}),[Z]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(d,{onSubmit:function(e){""===e?alert("Please enter a query"):(j({query:e}),i([]))}}),(0,m.jsx)("ul",{className:_,children:n.map((function(e){return(0,m.jsx)("li",{className:x,children:(0,m.jsx)(v.rU,{state:w,to:"/movies/".concat(e.id),children:e.title})},e.id)}))}),f&&(0,m.jsxs)(m.Fragment,{children:["Sorry. ",f," ... \ud83d\ude2d"]})]})}},422:function(e,t,n){n.d(t,{IQ:function(){return f},XT:function(){return o},lg:function(){return p},pg:function(){return s},yK:function(){return l}});var r=n(861),a=n(757),u=n.n(a),i=n(243),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc"}},o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data.results,e.abrupt("return",{movieData:a.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?language=en-US",e.next=3,(0,i.Z)("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 3:return t=e.sent,n=t.data.results,e.abrupt("return",{trendingData:n.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),e.next=3,(0,i.Z)(n,c);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=580.e3533c28.chunk.js.map