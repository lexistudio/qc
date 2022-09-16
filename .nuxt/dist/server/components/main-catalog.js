exports.ids = [15,4];
exports.modules = {

/***/ 112:
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

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainCatalog.vue?vue&type=template&id=6665ad17&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "catalog-wrapper"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('Title', {
    attrs: {
      "sub": "Каталог",
      "title": "Каталог продукции"
    }
  }), _vm._ssrNode(" "), _c('CatalogBox', {
    attrs: {
      "catalogs": _vm.catalogs
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"center\">", "</div>", [_c('n-link', {
    staticClass: "btn btn--primary",
    attrs: {
      "to": "/catalog"
    }
  }, [_vm._v(" Посмотреть все ")])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MainCatalog.vue?vue&type=template&id=6665ad17&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainCatalog.vue?vue&type=script&lang=js&
/* harmony default export */ var MainCatalogvue_type_script_lang_js_ = ({
  props: {
    catalogs: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/MainCatalog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainCatalogvue_type_script_lang_js_ = (MainCatalogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/MainCatalog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MainCatalogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1972de25"
  
)

/* harmony default export */ var MainCatalog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(52).default,CatalogBox: __webpack_require__(112).default})


/***/ })

};;
//# sourceMappingURL=main-catalog.js.map