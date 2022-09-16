exports.ids = [10];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filters.vue?vue&type=template&id=054c817f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"filter-btn\">" + (!_vm.isFilter ? "<span>Все</span>" : "<span>Скрыть</span>") + "\n    категории\n  </div> <ul" + _vm._ssrClass("filter", {
    active: _vm.isFilter
  }) + ">" + _vm._ssrList(_vm.categories, function (categorie, index) {
    return "<li class=\"filter__li\"><div" + _vm._ssrClass("filter__name", {
      active: !categorie.categories.length
    }) + ">" + _vm._ssrEscape("\n        " + _vm._s(categorie.name) + "\n      ") + "</div> " + (categorie.categories.length ? "<ul class=\"filter-two\">" + _vm._ssrList(categorie.categories, function (categori, ind) {
      return "<li class=\"filter-two__li\">" + (categori.catalog.catalogs.length ? "<a href=\"#\" class=\"filter-two__name\">" + _vm._ssrEscape("\n            " + _vm._s(categori.name) + "\n          ") + "</a>" : "<span>" + _vm._ssrEscape("\n            " + _vm._s(categori.name) + "\n          ") + "</span>") + "</li>";
    }) + "</ul>" : "<!---->") + " " + (categorie.brend.length && categorie.brend[0].brends.length ? "<ul class=\"filter-two\">" + _vm._ssrList(categorie.brend[0].brends, function (brend) {
      return "<li class=\"filter-two__li\"><a href=\"#\" class=\"filter-two__name\">" + _vm._ssrEscape("\n            " + _vm._s(brend.name) + "\n          ") + "</a></li>";
    }) + "</ul>" : "<!---->") + "</li>";
  }) + "</ul>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Filters.vue?vue&type=template&id=054c817f&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filters.vue?vue&type=script&lang=js&

/* harmony default export */ var Filtersvue_type_script_lang_js_ = ({
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    isFilter: false
  }),
  methods: Object(external_vuex_["mapActions"])({
    sortCategories: 'catalogs/sortCategories',
    sortBrend: 'catalogs/sortBrend'
  })
});
// CONCATENATED MODULE: ./components/Filters.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Filtersvue_type_script_lang_js_ = (Filtersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Filters.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Filtersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "947bca00"
  
)

/* harmony default export */ var Filters = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=filters.js.map