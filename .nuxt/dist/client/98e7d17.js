(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{462:function(t,e,n){"use strict";n.r(e);var c=n(3),r=(n(28),n(16),{data:function(){return{isActive:!1,mess:"",chates:[]}},methods:{add:function(){this.isActive=1!=this.isActive},updates:function(){var t=this;fetch("https://api.telegram.org/bot1605529503:AAEMGX6DbT5OOhQwFT11przbZhXJ8mlDqLQ/getUpdates").then(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:c=e.sent,t.chates=c.result;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},send:function(){this.updates();var t=document.createElement("div");t.className="chat__mess-item active",t.innerHTML="<span>".concat(this.mess,"</span>"),this.$refs.mess.insertAdjacentElement("beforeend",t),this.mess=""}},mounted:function(){this.updates()}}),o=r,l=n(23),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chat"},[t.isActive?t._e():e("div",{staticClass:"chat__btn",on:{click:t.add}},[t._m(0)]),t._v(" "),t.isActive?e("div",{staticClass:"chat__box"},[e("div",{staticClass:"chat__close",on:{click:t.add}},[e("i",{staticClass:"fas fa-times"})]),t._v(" "),e("div",{staticClass:"chat__head"},[t._v("Онлайн чат")]),t._v(" "),e("div",{staticClass:"chat__body"},[e("div",{ref:"mess",staticClass:"chat__mess"},t._l(t.chates,(function(n){return e("div",{key:n.update_id,staticClass:"chat__mess-item"},[e("span",[t._v(t._s(n.message.text))])])})),0)]),t._v(" "),e("div",{staticClass:"chat__fields"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mess,expression:"mess"}],staticClass:"chat__field",attrs:{type:"text",placeholder:"Сообщение"},domProps:{value:t.mess},on:{input:function(e){e.target.composing||(t.mess=e.target.value)}}}),t._v(" "),t._m(1)])])]):t._e()])}),[function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fas fa-comment-dots"})])},function(){var t=this._self._c;return t("button",{staticClass:"chat__send",attrs:{type:"submit"}},[t("i",{staticClass:"fas fa-paper-plane"})])}],!1,null,null,null);e.default=component.exports}}]);