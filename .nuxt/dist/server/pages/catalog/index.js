exports.ids = [21,4,10];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/index.vue?vue&type=template&id=105968fa&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"title-work-head\"><h1 class=\"title-work\">\n      Каталог\n    </h1></div> <form class=\"search\"><input type=\"text\" placeholder=\"Поиск по парт номерам\" required=\"required\"" + _vm._ssrAttr("value", _vm.search) + " class=\"form-fields\"> <button class=\"search-btn\"><i class=\"fas fa-search\"></i></button></form> "), _c('Filters', {
    attrs: {
      "categories": _vm.categories
    },
    on: {
      "resetSearch": _vm.resetSearch
    }
  }), _vm._ssrNode(" "), _vm.catalogs.length ? _c('CatalogBox', {
    attrs: {
      "classes": "catalog--work",
      "catalogs": _vm.catalogs
    }
  }) : _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._v("Нет записей...")])])]), _vm._ssrNode(" " + (_vm.preloader ? "<div class=\"preloader\"></div>" : "<!---->") + " " + (_vm.count < _vm.counts && _vm.isPreloaderBtn ? "<div class=\"preloader-btn\">\n    Показать еще\n  </div>" : "<!---->"))], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/catalog/index.vue?vue&type=template&id=105968fa&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var catalogvue_type_script_lang_js_ = ({
  head: {
    title: "Каталог"
  },
  data: () => ({
    search: "",
    isPreloaderBtn: true
  }),
  computed: Object(external_vuex_["mapGetters"])({
    catalogs: "catalogs/getCatalogs",
    categories: "catalogs/getCategories",
    preloader: "catalogs/getPreloader",
    count: "catalogs/getCount",
    counts: "catalogs/getCounts"
  }),
  methods: { ...Object(external_vuex_["mapActions"])({
      searchCatalogs: "catalogs/searchCatalogs",
      pageCatalog: "catalogs/pageCatalog"
    }),

    resetSearch() {
      this.search = "", this.isPreloaderBtn = false;
    }

  },

  async fetch({
    store
  }) {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
    await store.dispatch("catalogs/fetch", {
      count: 8
    });
    await store.dispatch("catalogs/categories");
    await store.dispatch("catalogs/counts");
    await store.dispatch("catalogs/resetCount");
  }

});
// CONCATENATED MODULE: ./pages/catalog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_catalogvue_type_script_lang_js_ = (catalogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/catalog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_catalogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c418de48"
  
)

/* harmony default export */ var catalog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Filters: __webpack_require__(90).default,CatalogBox: __webpack_require__(81).default})


/***/ }),

/***/ 81:
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

/***/ 90:
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
var external_vuex_ = __webpack_require__(7);

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
//# sourceMappingURL=index.js.map