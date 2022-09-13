exports.ids = [22];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacts.vue?vue&type=template&id=31a466d6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "maps-box"
  }, [_c('yandex-map', {
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
  }, [_c('strong', [_vm._v(_vm._s(_vm.contacts[0].title))]), _c('br'), _vm._v(" "), _vm._l(_vm.contacts[0].children, function (mps) {
    return _c('p', {
      key: mps.id
    }, [_vm._v("\n          " + _vm._s(mps.title) + "\n        ")]);
  })], 2)])], 1), _vm._ssrNode(" <div class=\"container\"><div class=\"contacts\">" + _vm._ssrList(_vm.contacts, function (item) {
    return "<div class=\"contacts__item\"><h2 class=\"contacts__title\">" + _vm._ssrEscape(_vm._s(item.title)) + "</h2> <ul class=\"contacts__ul\">" + _vm._ssrList(item.children, function (itm) {
      return "<li class=\"contacts__li\"><span>" + _vm._s(itm.title) + "</span></li>";
    }) + "</ul></div>";
  }) + "</div></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contacts.vue?vue&type=template&id=31a466d6&

// EXTERNAL MODULE: external "vue-yandex-maps"
var external_vue_yandex_maps_ = __webpack_require__(78);

// EXTERNAL MODULE: ./mixins/contacts.ts
var contacts = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacts.vue?vue&type=script&lang=js&


/* harmony default export */ var contactsvue_type_script_lang_js_ = ({
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

/***/ })

};;
//# sourceMappingURL=contacts.js.map