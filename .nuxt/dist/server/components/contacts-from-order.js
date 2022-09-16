exports.ids = [7];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactsFromOrder.vue?vue&type=template&id=2fd467b3&
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
  }, [_vm._ssrNode("<div class=\"form__item\"><div class=\"form-title\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.name) + "\n    ") + "</div></div> <div class=\"form__item\"><input type=\"text\" placeholder=\"Имя\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.firstName) + " class=\"form-fields\"></div> <div class=\"form__item\"><input type=\"email\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.form.email) + " class=\"form-fields\"></div> "), _vm._ssrNode("<div class=\"form__item\">", "</div>", [_c('input', {
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

// CONCATENATED MODULE: ./components/ContactsFromOrder.vue?vue&type=template&id=2fd467b3&

// EXTERNAL MODULE: external "vue-dadata"
var external_vue_dadata_ = __webpack_require__(25);
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
//# sourceMappingURL=contacts-from-order.js.map