"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[465],{465:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(433),a=n(861),u=n(439),c=n(757),i=n.n(c),o=n(791),s="Searchform_searchbar__756E7",l="Searchform_form__-nmYl",f="Searchform_button__V0B16",p="Searchform_button_label__QWQlK",h="Searchform_input__8bqfI",d=n(184),m=function(e){var t=e.onSubmit,n=(0,o.useState)(""),r=(0,u.Z)(n,2),a=r[0],c=r[1];return(0,d.jsx)("header",{className:s,children:(0,d.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),t(a)},children:[(0,d.jsx)("button",{type:"submit",className:f,children:(0,d.jsx)("span",{className:p,children:"Search"})}),(0,d.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(e){c(e.target.value)}})]})})},v=n(87),b=n(422),g=function(e){var t=e.place,n=void 0===t?"":t,c=(0,o.useState)(""),s=(0,u.Z)(c,2),l=s[0],f=s[1],p=(0,o.useState)([]),h=(0,u.Z)(p,2),g=h[0],S=h[1],j=(0,o.useState)(null),_=(0,u.Z)(j,2),x=_[0],y=_[1];(0,o.useEffect)((function(){if(l)try{var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.XT)(l);case 2:t=e.sent,n=t.movieData,S((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(x){y(x.message)}}),[l]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(m,{onSubmit:function(e){""===e?alert("Please enter a query"):(f(e),S([]))}}),g.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(v.rU,{to:n?"movies/".concat(e.id):"".concat(e.id),children:e.title})},e.id)})),x&&(0,d.jsxs)(d.Fragment,{children:["Sorry. ",x," ... \ud83d\ude2d"]})]})}},422:function(e,t,n){n.d(t,{XT:function(){return o},pg:function(){return s},yK:function(){return l}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc"}},o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.next=3,(0,c.Z)(n,i);case 3:return r=e.sent,a=r.data.results,e.abrupt("return",{movieData:a.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US",e.next=3,(0,c.Z)("https://api.themoviedb.org/3/trending/all/day?language=en-US",i);case 3:return t=e.sent,n=t.data.results,e.abrupt("return",{trendingData:n.map((function(e){return{id:e.id,title:e.title}}))});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.next=3,(0,c.Z)(n,i);case 3:return r=e.sent,a=r.data.results,console.log(a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=465.e16a1a30.chunk.js.map