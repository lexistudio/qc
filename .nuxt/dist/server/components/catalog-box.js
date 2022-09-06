exports.ids = [4];
exports.modules = {

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CatalogBox.vue?vue&type=template&id=ba3dc13c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div" + _vm._ssrClass("catalog", _vm.classes) + ">", "</div>", _vm._l(_vm.catalogs, function (catalog) {
    return _c('n-link', {
      key: catalog.id,
      staticClass: "catalog__item",
      attrs: {
        "to": `catalog/${catalog.id}`
      }
    }, [_c('div', {
      staticClass: "catalog__img"
    }, [!catalog.img ? _c('div', {
      staticClass: "catalog__noimg"
    }, [_c('i', {
      staticClass: "fas fa-camera"
    })]) : _c('div', {
      staticClass: "catalog__img-details"
    }, [_c('img', {
      attrs: {
        "src": `https://api.qlc-it.ru${catalog.img.url}`,
        "alt": catalog.name
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "catalog__body"
    }, [_c('h3', {
      staticClass: "catalog__title"
    }, [_vm._v("\n          " + _vm._s(catalog.name) + "\n        ")])])]);
  }), 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CatalogBox.vue?vue&type=template&id=ba3dc13c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CatalogBox.vue?vue&type=script&lang=js&
/* harmony default export */ var CatalogBoxvue_type_script_lang_js_ = ({
  props: {
    classes: {
      type: String,
      default: ""
    },
    catalogs: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/CatalogBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CatalogBoxvue_type_script_lang_js_ = (CatalogBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/CatalogBox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CatalogBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b22a6106"
  
)

/* harmony default export */ var CatalogBox = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=catalog-box.js.map