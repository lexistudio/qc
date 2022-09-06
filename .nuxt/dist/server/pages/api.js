exports.ids = [20];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/api.vue?vue&type=template&id=29ec9bed&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('DIV', {
    staticStyle: {
      "padding": "100px"
    }
  }, [_c('div', {
    staticStyle: {
      "border": "1px solid #000",
      "padding": "20px",
      "margin-bottom": "40px"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "Поиск по парт номеру"
    }
  }), _vm._v("\n    или по категориям\n    "), _c('select', [_c('option', {
    attrs: {
      "value": "dell"
    }
  }, [_vm._v("dell")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hp"
    }
  }, [_vm._v("hp")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "huawei"
    }
  }, [_vm._v("huawei")])]), _vm._v(" "), _c('select', [_c('option', {
    attrs: {
      "value": "операьтивная память"
    }
  }, [_vm._v("операьтивная память")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "жесткие диски<"
    }
  }, [_vm._v("жесткие диски")])])]), _vm._v(" "), _c('ul', _vm._l(_vm.json, function (jso) {
    return _c('li', {
      key: jso
    }, [_vm._v("\n      " + _vm._s(jso.name) + "\n      "), _c('ul', {
      staticStyle: {
        "padding-left": "40px",
        "margin-bottom": "40px"
      }
    }, _vm._l(jso.cat, function (js) {
      return _c('li', {
        key: js
      }, [_vm._v("\n          " + _vm._s(js.name) + "\n          "), _c('ul', {
        staticStyle: {
          "padding-left": "40px"
        }
      }, _vm._l(js.ct, function (j) {
        return _c('li', {
          key: j
        }, [_vm._v("\n              " + _vm._s(j.name) + "\n            ")]);
      }), 0)]);
    }), 0)]);
  }), 0)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/api.vue?vue&type=template&id=29ec9bed&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/api.vue?vue&type=script&lang=js&
/* harmony default export */ var apivue_type_script_lang_js_ = ({
  data: () => ({
    json: [{
      name: 'Серверное оборудование',
      cat: [{
        name: 'Жесткие Диски',
        ct: [{
          name: 'зщы 1'
        }, {
          name: 'зщы 2'
        }, {
          name: 'зщы 3'
        }]
      }, {
        name: 'Оперативная память',
        ct: [{
          name: 'зщы 1'
        }, {
          name: 'зщы 2'
        }, {
          name: 'зщы 3'
        }]
      }]
    }, {
      name: 'Сетевое оборудование',
      cat: [{
        name: 'Контроллеры',
        ct: [{
          name: 'зщы 1'
        }, {
          name: 'зщы 2'
        }, {
          name: 'зщы 3'
        }]
      }, {
        name: 'Маршрутизаторы',
        ct: [{
          name: 'зщы 1'
        }, {
          name: 'зщы 2'
        }, {
          name: 'зщы 3'
        }]
      }]
    }, {
      name: 'Источники бесперебойного питания',
      cat: [{
        name: 'samsung',
        ct: [{
          name: 'зщы 1'
        }, {
          name: 'зщы 2'
        }, {
          name: 'зщы 3'
        }]
      }, {
        name: 'dell',
        ct: [{
          name: 'зщы 1'
        }, {
          name: 'зщы 2'
        }, {
          name: 'зщы 3'
        }]
      }]
    }]
  })
});
// CONCATENATED MODULE: ./pages/api.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_apivue_type_script_lang_js_ = (apivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/api.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_apivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75802067"
  
)

/* harmony default export */ var api = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=api.js.map