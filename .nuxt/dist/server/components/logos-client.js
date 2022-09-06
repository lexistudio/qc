exports.ids = [13,16];
exports.modules = {

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SliderButton.vue?vue&type=template&id=5b7906d8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode(_vm.next ? "<i class=\"fas fa-chevron-right\"></i>" : "<i class=\"fas fa-chevron-left\"></i>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SliderButton.vue?vue&type=template&id=5b7906d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SliderButton.vue?vue&type=script&lang=js&
/* harmony default export */ var SliderButtonvue_type_script_lang_js_ = ({
  props: {
    next: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/SliderButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SliderButtonvue_type_script_lang_js_ = (SliderButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/SliderButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SliderButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a0052be"
  
)

/* harmony default export */ var SliderButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogosClient.vue?vue&type=template&id=2cc3fc38&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "logos-main"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('Title', {
    attrs: {
      "sub": "Latest Info",
      "title": "Наши клиенты"
    }
  }), _vm._ssrNode(" "), _c('Swiper', {
    staticClass: "logos-client-slider",
    attrs: {
      "options": _vm.options
    }
  }, _vm._l(_vm.logos, function (logo) {
    return _c('SwiperSlide', {
      key: logo.id,
      staticClass: "logos-client-slider__slide"
    }, [logo.img ? _c('img', {
      attrs: {
        "src": `https://api.qlc-it.ru${logo.img.url}`,
        "alt": logo.name,
        "title": logo.name
      }
    }) : _c('img', {
      attrs: {
        "alt": logo.name
      }
    })]);
  }), 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"logos-client-slider-controls\">", "</div>", [_c('SliderButton', {
    staticClass: "logos-client-slider-controls__prev js-logos-slide-client-prev",
    attrs: {
      "slot": "button-prev"
    },
    slot: "button-prev"
  }), _vm._ssrNode(" <div class=\"logos-client-slider-controls__pagination js-logos-slide-client-pagination\"></div> "), _c('SliderButton', {
    staticClass: "logos-client-slider-controls__next js-logos-slide-client-next",
    attrs: {
      "slot": "button-prev",
      "next": true
    },
    slot: "button-prev"
  })], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogosClient.vue?vue&type=template&id=2cc3fc38&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogosClient.vue?vue&type=script&lang=js&
/* harmony default export */ var LogosClientvue_type_script_lang_js_ = ({
  name: "carrousel",
  props: {
    logos: {
      type: Array,
      default: []
    }
  },
  data: () => {
    return {
      options: {
        spaceBetween: 50,
        slidesPerView: 6,
        effect: "slide",
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".js-logos-slide-client-pagination",
          bulletClass: 'logos-client-slider-controls__bulet',
          bulletActiveClass: 'logos-client-slider-controls__bulet--active',
          clickable: true
        },
        navigation: {
          nextEl: ".js-logos-slide-client-next",
          prevEl: ".js-logos-slide-client-prev"
        },
        breakpoints: {
          980: {
            slidesPerView: 6,
            spaceBetween: 50
          },
          765: {
            slidesPerView: 4
          },
          320: {
            slidesPerView: 2
          }
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/LogosClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LogosClientvue_type_script_lang_js_ = (LogosClientvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/LogosClient.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LogosClientvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8f7202d0"
  
)

/* harmony default export */ var LogosClient = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(33).default,SliderButton: __webpack_require__(82).default})


/***/ })

};;
//# sourceMappingURL=logos-client.js.map