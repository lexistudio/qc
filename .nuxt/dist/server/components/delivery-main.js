exports.ids = [9,18];
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DeliveryMain.vue?vue&type=template&id=710e104c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "delivery-main"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('Title', {
    attrs: {
      "sub": "Бесплатная доставка до терминала ТК",
      "title": "Работаем по всей России"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"delivery-tab\">", "</div>", [_c('Tab', {
    attrs: {
      "items": _vm.tab
    },
    on: {
      "tabIndex": _vm.tabIndexEmit
    }
  })], 1), _vm._ssrNode(" <div class=\"delivery\"><div class=\"delivery__item\"><h3 class=\"delivery__title\">Со склада</h3> <p>\n          Доставка товаров со склада осуществляется в течении 3х рабочих дней\n        </p> <h3 class=\"delivery__title\">Под заказ</h3> <p>Доставка товара под заказ 2-4 недели</p></div> " + _vm._ssrList(_vm.tab, function (item, index) {
    return "<div class=\"delivery__item\"" + _vm._ssrStyle(null, null, {
      display: _vm.tabIndex == index ? '' : 'none'
    }) + "><h3 class=\"delivery__title\">" + _vm._ssrEscape("\n          " + _vm._s(item.name) + "\n        ") + "</h3> <p>" + _vm._ssrEscape("\n          " + _vm._s(item.txt) + "\n        ") + "</p></div>";
  }) + "</div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DeliveryMain.vue?vue&type=template&id=710e104c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DeliveryMain.vue?vue&type=script&lang=js&
/* harmony default export */ var DeliveryMainvue_type_script_lang_js_ = ({
  data: () => {
    return {
      tab: [{
        name: "По России",
        txt: "Доставка по России осуществляется любой транспортной компанией, которую укажет заказчик, доставка до ТК бесплатная, услуги ТК заказчик оплачивает самостоятельно, если это не было обговорено за ранее."
      }, {
        name: "В пределах МКАД",
        txt: "Доставка по Москве и в пределах МКАД осуществляется бесплатно при сумме заказа от 20 000 руб. Доставка за МКАД осуществляется отдельно."
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
// CONCATENATED MODULE: ./components/DeliveryMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DeliveryMainvue_type_script_lang_js_ = (DeliveryMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/DeliveryMain.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DeliveryMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19fd1bd0"
  
)

/* harmony default export */ var DeliveryMain = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(52).default,Tab: __webpack_require__(113).default})


/***/ })

};;
//# sourceMappingURL=delivery-main.js.map