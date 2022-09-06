exports.ids = [22,7];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/_id.vue?vue&type=template&id=0ec7289b&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h1 class=\"title-card\">" + _vm._ssrEscape(_vm._s(_vm.catalogsItem.name)) + "</h1> "), _vm._ssrNode("<div class=\"card\">", "</div>", [_vm._ssrNode("<div class=\"card__left\"><div class=\"card__img\">" + (!_vm.catalogsItem.img ? "<div class=\"card__noimg\"><i class=\"fas fa-camera\"></i></div>" : "<div class=\"card__details\"><img" + _vm._ssrAttr("src", `https://api.qlc-it.ru${_vm.catalogsItem.img.url}`) + _vm._ssrAttr("alt", _vm.catalogsItem.name) + "></div>") + "</div> <div class=\"card__info\"><p><strong>Внимание!</strong> Пожалуйста, сверяйте информацию о данном\n          товаре с информацией на официальном сайте производителя и уточняйте\n          спецификацию, наличие на складе и цену товара у менеджеров нашей\n          компании. Внешний вид изделия, его комплектация и характеристики\n          могут изменяться производителем без предварительного уведомления. Не\n          является публичной офертой. Определяемой положениями статьи 437(2)\n          ГК РФ.\n        </p></div></div> "), _vm._ssrNode("<div class=\"card__right\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode((_vm.catalogsItem.description ? "<p>" + _vm._ssrEscape(_vm._s(_vm.catalogsItem.description)) + "</p>" : "<!---->") + " <p>" + (_vm.catalogsItem.brend ? "<span class=\"card__span\"><strong>Бренд:</strong> <span>" + _vm._ssrEscape(_vm._s(_vm.catalogsItem.brend.name)) + "</span></span>" : "<!---->") + " " + (_vm.catalogsItem.vendorCode ? "<span class=\"card__span\"><strong>Артикул:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.catalogsItem.vendorCode) + "\n          ") + "</span>" : "<!---->") + " <span class=\"card__span\"><strong>Цена:</strong> " + (!_vm.catalogsItem.price || parseInt(_vm.catalogsItem.price) === 0 ? "<span>\n              по запросу\n            </span>" : "<span>" + _vm._ssrEscape(_vm._s(_vm.catalogsItem.price) + " руб.") + "</span>") + "</span> <span class=\"card__span\"><strong>Кол-во:</strong> " + (!_vm.catalogsItem.count || parseInt(_vm.catalogsItem.count) === 0 ? "<span>\n              Запрашивайте\n            </span>" : "<span>" + _vm._ssrEscape(_vm._s(_vm.catalogsItem.count) + " шт.") + "</span>") + "</span> " + (_vm.catalogsItem.delivery ? "<span class=\"card__span\"><strong>" + _vm._ssrEscape("\n              " + _vm._s(_vm.catalogsItem.delivery) + "\n            ") + "</strong></span>" : "<!---->") + " <span class=\"card__span\"><strong>Гарантия:</strong> <span> 12 месяцев </span></span></p> <p>Доставка по Москве и в пределах МКАД осуществляется бесплатно при сумме заказа от 20 000 руб. Доставка за МКАД осуществляется отдельно.</p> " + (_vm.catalogsItem.characteristics.length ? "<div><h2 class=\"card__subtitle\">Характеристики</h2> <div class=\"card__table\">" + _vm._ssrList(_vm.catalogsItem.characteristics, function (item) {
    return "<div class=\"card__row\"><div class=\"card__td\">" + _vm._ssrEscape(_vm._s(item.name)) + "</div> <div class=\"card__td\">" + _vm._ssrEscape(_vm._s(item.value)) + "</div></div>";
  }) + "</div></div>" : "<!---->") + " <div class=\"card__btn-group\"><div class=\"card__btn\"><a href=\"#\" class=\"btn btn--primary\">\n              Узнать стоимость и наличие\n            </a></div></div> "), _c('transition', {
    attrs: {
      "name": "modals"
    }
  }, [_vm.isActive ? _c('Modal', {
    on: {
      "close": function ($event) {
        _vm.isActive = false;
      }
    }
  }, [_c('ContactsFromOrder', {
    attrs: {
      "name": _vm.catalogsItem.name,
      "vendorCode": _vm.catalogsItem.vendorCode
    }
  })], 1) : _vm._e()], 1)], 2)])], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/catalog/_id.vue?vue&type=template&id=0ec7289b&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: "work",
  computed: Object(external_vuex_["mapGetters"])({
    catalogsItem: "catalogs/getCatalogsItem"
  }),
  data: () => ({
    isActive: false
  }),

  async fetch({
    store,
    route
  }) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
    await store.dispatch("catalogs/catalogsItems", route.params.id);
  }

});
// CONCATENATED MODULE: ./pages/catalog/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var catalog_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/catalog/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  catalog_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "90afcb78"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ContactsFromOrder: __webpack_require__(92).default,Modal: __webpack_require__(35).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactsFromOrder.vue?vue&type=template&id=a4c2ea40&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('form', {
    staticClass: "form",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.send.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"form__item\"><input type=\"text\" placeholder=\"Имя\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.firstName) + " class=\"form-fields\"></div> <div class=\"form__item\"><input type=\"email\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.form.email) + " class=\"form-fields\"></div> "), _vm._ssrNode("<div class=\"form__item\">", "</div>", [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone,
      expression: "form.phone"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '+7 (###) ###-##-##',
      expression: "'+7 (###) ###-##-##'"
    }],
    staticClass: "form-fields",
    attrs: {
      "type": "text",
      "placeholder": "+7 (###) ###-##-##",
      "required": ""
    },
    domProps: {
      "value": _vm.form.phone
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "phone", $event.target.value);
      }
    }
  }, [])]), _vm._ssrNode(" <div class=\"form__item\"><textarea required=\"required\" placeholder=\"Ваше сообщение\" class=\"form-fields form-fields--textarea\">" + _vm._ssrEscape(_vm._s(_vm.form.txt)) + "</textarea></div> " + (_vm.mess.length != 0 ? "<div class=\"success\">" + _vm._ssrEscape("\n    " + _vm._s(this.mess) + "\n  ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form__item center\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/info"
    }
  }, [_vm._v("\n      Политика компании в отношении персональных данных.\n    ")])], 1), _vm._ssrNode(" <div class=\"form__btn\"><button type=\"submit\" class=\"btn btn--primary\">Отправить</button></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactsFromOrder.vue?vue&type=template&id=a4c2ea40&

// EXTERNAL MODULE: external "vue-dadata"
var external_vue_dadata_ = __webpack_require__(17);
var external_vue_dadata_default = /*#__PURE__*/__webpack_require__.n(external_vue_dadata_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactsFromOrder.vue?vue&type=script&lang=js&

/* harmony default export */ var ContactsFromOrdervue_type_script_lang_js_ = ({
  components: {
    VueDadata: external_vue_dadata_default.a
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    vendorCode: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      form: {
        firstName: "",
        email: "",
        txt: "",
        phone: ""
      },
      mess: ""
    };
  },
  methods: {
    send() {
      const url = "https://api.telegram.org/bot1605529503:AAEMGX6DbT5OOhQwFT11przbZhXJ8mlDqLQ/sendMessage";
      const mess = `
        Имя:${this.form.firstName},
        Email:${this.form.email},
        Сообщение:${this.form.txt},
        Тел: ${this.form.phone},
        Название товара: ${this.name},
        Артикул: ${this.vendorCode}
      `;
      fetch(`${url}?chat_id=257800690&text=${mess}`);
      fetch(`${url}?chat_id=385143338&text=${mess}`);
      this.mess = "Спасибо! Ваше сообщение  отправлено";
      this.form.firstName = "";
      this.form.email = "";
      this.form.txt = "";
      this.form.phone = "";
    },

    addChange(e) {
      this.form.firstName = e.value;
    }

  }
});
// CONCATENATED MODULE: ./components/ContactsFromOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactsFromOrdervue_type_script_lang_js_ = (ContactsFromOrdervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ContactsFromOrder.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactsFromOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12788e76"
  
)

/* harmony default export */ var ContactsFromOrder = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map