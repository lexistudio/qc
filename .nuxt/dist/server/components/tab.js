exports.ids = [17];
exports.modules = {

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tab.vue?vue&type=template&id=7ba4b0c5&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tab"
  }, [_vm._ssrNode("<div class=\"tab__box\">" + _vm._ssrList(_vm.items, function (item, index) {
    return "<div" + _vm._ssrClass("tab__item", {
      active: _vm.tabIndex == index
    }) + ">" + _vm._ssrEscape("\n      " + _vm._s(item.name) + "\n    ") + "</div>";
  }) + "</div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Tab.vue?vue&type=template&id=7ba4b0c5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tab.vue?vue&type=script&lang=js&
/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  data: () => {
    return {
      tabIndex: 0
    };
  },
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    tabClick(i) {
      this.tabIndex = i;
      this.$emit('tabIndex', i);
    }

  }
});
// CONCATENATED MODULE: ./components/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Tab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2183d81a"
  
)

/* harmony default export */ var Tab = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tab.js.map