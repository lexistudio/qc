exports.ids = [27];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recommended.vue?vue&type=template&id=0ce928d0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"doc\">" + _vm._ssrList(_vm.getRecommendeds, function (recommended) {
    return "<div class=\"doc__item\"><img" + _vm._ssrAttr("src", `https://api.qlc-it.ru${recommended.img.formats.small.url}`) + _vm._ssrAttr("alt", recommended.name) + "></div>";
  }) + "</div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/recommended.vue?vue&type=template&id=0ce928d0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Modal.vue + 4 modules
var Modal = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recommended.vue?vue&type=script&lang=js&


/* harmony default export */ var recommendedvue_type_script_lang_js_ = ({
  components: {
    Modal: Modal["default"]
  },
  layout: "work",
  head: {
    title: "Нас рекомендуют"
  },
  computed: Object(external_vuex_["mapGetters"])({
    getRecommendeds: 'recommended/getRecommendeds'
  }),

  async fetch({
    store
  }) {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
    await store.dispatch('recommended/fetch');
  }

});
// CONCATENATED MODULE: ./pages/recommended.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_recommendedvue_type_script_lang_js_ = (recommendedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/recommended.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_recommendedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "297011b0"
  
)

/* harmony default export */ var recommended = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=recommended.js.map