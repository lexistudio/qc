exports.ids = [3,18];
exports.modules = {

/***/ 113:
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

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bookmark.vue?vue&type=template&id=4b61171f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "bookmark"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('Tab', {
    attrs: {
      "items": _vm.tab
    },
    on: {
      "tabIndex": _vm.tabIndexEmit
    }
  }), _vm._ssrNode(" <div class=\"bookmark-box\">" + _vm._ssrList(_vm.tab, function (item, index) {
    return "<div class=\"bookmark-box__item\"" + _vm._ssrStyle(null, null, {
      display: _vm.tabIndex == index ? '' : 'none'
    }) + ">" + _vm._s(item.txt) + "</div>";
  }) + "</div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Bookmark.vue?vue&type=template&id=4b61171f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bookmark.vue?vue&type=script&lang=js&
/* harmony default export */ var Bookmarkvue_type_script_lang_js_ = ({
  data: () => {
    return {
      tab: [{
        name: "Наша миссия",
        txt: `<p>Наша компания нацелена на дальнейшее развитие, чтобы упростить задачу руководителям IT отделов, системным администраторам и автоматизировать закупки IT-техники.</p><p>Мы работаем по договору и всегда готовы предоставить ряд необходимых документов для его заключения, чтобы вы были уверены в нашей надежности.</p><p>Благодаря отлаженной работе отдела закупок и устоявшимся связям с крупными поставщиками мы готовы предоставить вам лучшие цены.</p>
          `
      }, {
        name: "Наши партнеры",
        txt: `<p>Компания QLC-IT является авторизованным партнером таких компаний как:</p><p>HP, Dell, Microsoft, Cisco, Kyocera, APC, Lenovo, Intel, IBM, Yealink, Samsung, Xerox, Brother.</p>`
      }, {
        name: "Наш ассортимент",
        txt: `<p>Мы имеем широкий ассортимент продукции:</p><p>Мониторы, МФУ, принтеры, серверы, рабочие станции, ноутбуки, атс и телефония, расходные материалы, программное обеспечение, сетевое оборудование, комплектующие, телевизоры, клавиатуры и мыши, тонкие клиенты, источники бесперебойного питания, СХД, моноблоки и т.д.</p><p>Купите ноутбуки оптом, компьютерные рабочие станции, серверы и сетевое оборудование в нашей компании на выгодных условиях.</p>
          `
      }],
      tabIndex: 0
    };
  },
  methods: {
    tabIndexEmit(i) {
      this.tabIndex = i;
    }

  }
});
// CONCATENATED MODULE: ./components/Bookmark.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bookmarkvue_type_script_lang_js_ = (Bookmarkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Bookmark.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Bookmarkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "765e5efe"
  
)

/* harmony default export */ var Bookmark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Tab: __webpack_require__(113).default})


/***/ })

};;
//# sourceMappingURL=bookmark.js.map