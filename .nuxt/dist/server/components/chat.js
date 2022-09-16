exports.ids = [6];
exports.modules = {

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chat.vue?vue&type=template&id=7ef0645a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "chat"
  }, [_vm._ssrNode((!_vm.isActive ? "<div class=\"chat__btn\"><div><i class=\"fas fa-comment-dots\"></i></div></div>" : "<!---->") + " " + (_vm.isActive ? "<div class=\"chat__box\"><div class=\"chat__close\"><i class=\"fas fa-times\"></i></div> <div class=\"chat__head\">Онлайн чат</div> <div class=\"chat__body\"><div class=\"chat__mess\">" + _vm._ssrList(_vm.chates, function (chat) {
    return "<div class=\"chat__mess-item\"><span>" + _vm._ssrEscape(_vm._s(chat.message.text)) + "</span></div>";
  }) + "</div></div> <div class=\"chat__fields\"><form><input type=\"text\" placeholder=\"Сообщение\"" + _vm._ssrAttr("value", _vm.mess) + " class=\"chat__field\"> <button type=\"submit\" class=\"chat__send\"><i class=\"fas fa-paper-plane\"></i></button></form></div></div>" : "<!---->"))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Chat.vue?vue&type=template&id=7ef0645a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chat.vue?vue&type=script&lang=js&
/* harmony default export */ var Chatvue_type_script_lang_js_ = ({
  data: () => {
    return {
      isActive: false,
      mess: '',
      chates: []
    };
  },
  methods: {
    add() {
      this.isActive = this.isActive != true ? true : false;
    },

    updates() {
      const url = 'https://api.telegram.org/bot1605529503:AAEMGX6DbT5OOhQwFT11przbZhXJ8mlDqLQ/getUpdates';
      fetch(url).then(async resp => {
        const r = await resp.json();
        this.chates = r.result;
      });
    },

    send() {
      this.updates();
      const el = document.createElement("div");
      el.className = 'chat__mess-item active';
      el.innerHTML = `<span>${this.mess}</span>`;
      this.$refs.mess.insertAdjacentElement("beforeend", el);
      this.mess = '';
    }

  },

  mounted() {
    this.updates();
  }

});
// CONCATENATED MODULE: ./components/Chat.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Chatvue_type_script_lang_js_ = (Chatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Chat.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Chatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c558a1ba"
  
)

/* harmony default export */ var Chat = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chat.js.map