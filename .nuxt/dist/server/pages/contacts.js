exports.ids = [24,11];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts.7befab8.png";

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacts.vue?vue&type=template&id=5dfb0168&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"content-half contacts-page\">", "</div>", [_vm._ssrNode("<div class=\"content-half__item full-width-phone\">", "</div>", _vm._l(_vm.contacts, function (item) {
    return _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<h2 class=\"title-contacts\">" + _vm._ssrEscape(_vm._s(item.title)) + "</h2> "), _vm._ssrNode("<ul style=\"padding-top: 15px\">", "</ul>", _vm._l(item.children, function (itm) {
      return _c('LiItem', {
        key: itm.id
      }, [_c('span', {
        domProps: {
          "innerHTML": _vm._s(itm.title)
        }
      })]);
    }), 1)], 2);
  }), 0), _vm._ssrNode(" <div class=\"content-half__item hide-phone\"><img" + _vm._ssrAttr("src", __webpack_require__(104)) + " alt=\"Контакты\" class=\"img-content img-content--custom\" style=\"border-radius: 100%\"></div>")], 2)])]), _vm._ssrNode(" "), _c('yandex-map', {
    ref: "map",
    staticClass: "yandex-maps",
    attrs: {
      "controls": ['zoomControl'],
      "settings": _vm.settings,
      "coords": [55.570405, 37.588611]
    }
  }, [_c('ymapMarker', {
    attrs: {
      "marker-id": 0,
      "coords": [55.570405, 37.588611]
    }
  }, [_c('div', {
    attrs: {
      "slot": "balloon"
    },
    slot: "balloon"
  }, [_c('strong', [_vm._v("Фактический адрес")]), _c('br'), _vm._v("\n        117628, г. Москва, ул. Старокачаловская, д.18, помещ. IIIБ, ком. 6\n      ")])])], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contacts.vue?vue&type=template&id=5dfb0168&

// EXTERNAL MODULE: external "vue-yandex-maps"
var external_vue_yandex_maps_ = __webpack_require__(79);

// EXTERNAL MODULE: ./mixins/contacts.ts
var contacts = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacts.vue?vue&type=script&lang=js&


/* harmony default export */ var contactsvue_type_script_lang_js_ = ({
  layout: "work",
  components: {
    yandexMap: external_vue_yandex_maps_["yandexMap"],
    ymapMarker: external_vue_yandex_maps_["ymapMarker"]
  },
  mixins: [contacts["a" /* default */]],
  head: {
    title: "Контакты"
  },
  data: () => ({
    settings: {
      apiKey: "",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1",
      suppressMapOpenBlock: false
    }
  })
});
// CONCATENATED MODULE: ./pages/contacts.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactsvue_type_script_lang_js_ = (contactsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/contacts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b536c54"
  
)

/* harmony default export */ var pages_contacts = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LiItem: __webpack_require__(81).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LiItem.vue?vue&type=template&id=8dc686c6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('li', [_vm._ssrNode("<i class=\"fa fa-check\"></i> "), _vm._t("default")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LiItem.vue?vue&type=template&id=8dc686c6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/LiItem.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "621d653b"
  
)

/* harmony default export */ var LiItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contacts.js.map