exports.ids = [26];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/request.vue?vue&type=template&id=38a36013&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"request-progress\"><div" + _vm._ssrClass("request-progress__bar", `request-progress__bar--${_vm.cl}`) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.cl) + "%\n    ") + "</div></div> <div class=\"request\"><h1 class=\"request-title\">В разработке...</h1> <h1 class=\"request-title\">Подберём IT оборудование по вашим потребностям!</h1> <p class=\"request-sub-title\">Данный подбор позволит получить скидку на всё оборудование.</p> <h2 class=\"request-title\">Выберете ваш вариант</h2> <input type=\"radio\"> Физ лицо\n    <input type=\"radio\"> Юр лицо\n\n    <h2 class=\"request-title\">Выберите категорию</h2> <input type=\"radio\"> Серверное оборудование\n    <input type=\"radio\"> Сетевое оборудование\n    <input type=\"radio\"> Источники бесперебойного питания\n    <input type=\"radio\"> Переферийное оборудование и запчасти\n    <input type=\"text\" placeholder=\"Другое\"> <h2 class=\"request-title\">Выберите ваш вариант</h2> <h2 class=\"request-title\">Ваш вариант</h2> <h2 class=\"request-title\">Оставьте свои контакты для связи с вами!</h2> <pre>" + _vm._ssrEscape("      " + _vm._s(_vm.list) + "\n    ") + "</pre></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/request.vue?vue&type=template&id=38a36013&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/request.vue?vue&type=script&lang=js&
/* harmony default export */ var requestvue_type_script_lang_js_ = ({
  data: () => ({
    curr: 0,
    cl: 0,
    list: [{
      title: 'Подберём IT оборудование по вашим потребностям!',
      txt: 'Данный подбор позволит получить скидку на всё оборудование.'
    }, {
      title: 'Выберете ваш вариант',
      vars: [{
        title: "Физ лицо",
        type: 'radio'
      }, {
        title: "Юр лицо",
        type: 'radio'
      }]
    }, {
      title: 'Выберите категорию',
      vars: [{
        title: "Серверное оборудование",
        type: 'radio'
      }, {
        title: "Сетевое оборудование",
        type: 'radio'
      }, {
        title: "Источники бесперебойного питания",
        type: 'radio'
      }, {
        title: "Переферийное оборудование и запчасти",
        type: 'radio'
      }, {
        title: "Другое",
        type: 'text'
      }]
    }, {
      title: 'Выберите ваш вариант'
    }, {
      title: 'Ваш вариант'
    }]
  }),
  methods: {
    test() {
      this.curr = this.curr + 1;

      if (this.curr == 2) {
        this.cl = 33;
      } else if (this.curr == 3) {
        this.cl = 56;
      } else if (this.curr == 4) {
        this.cl = 78;
      } else if (this.curr == 5) {
        this.cl = 95;
      } else if (this.curr == 6) {
        this.cl = 100;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/request.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_requestvue_type_script_lang_js_ = (requestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/request.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_requestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "641e1848"
  
)

/* harmony default export */ var request = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=request.js.map