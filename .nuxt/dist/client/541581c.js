(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{428:function(t,e,n){"use strict";var r=n(8),c=n(429);r({target:"String",proto:!0,forced:n(430)("small")},{small:function(){return c(this,"small","","")}})},429:function(t,e,n){var r=n(6),c=n(35),o=n(20),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=o(c(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(o(r),l,"&quot;")+'"'),f+">"+m+"</"+e+">"}},430:function(t,e,n){var r=n(7);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},439:function(t,e,n){"use strict";n.r(e);n(428),n(34);var r=n(5),c=(n(26),n(15),n(77),n(90)),o={components:{Modal:n(259).default},layout:"work",head:{title:"Нас рекомендуют"},computed:Object(c.c)({getRecommendeds:"recommended/getRecommendeds"}),fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,new Promise((function(t){return setTimeout((function(){return t()}),500)}));case 3:return e.next=5,n.dispatch("recommended/fetch");case 5:case"end":return e.stop()}}),e)})))()}},l=n(17),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"doc"},t._l(t.getRecommendeds,(function(t){return e("div",{key:t.id,staticClass:"doc__item"},[e("img",{attrs:{src:"https://api.qlc-it.ru".concat(t.img.formats.small.url),alt:t.name}})])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);