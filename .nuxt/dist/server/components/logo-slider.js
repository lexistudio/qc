exports.ids = [12,16];
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoSlider.vue?vue&type=template&id=76bf77b6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"logos-group\">", "</div>", [_c('Swiper', {
    staticClass: "logos-group-slider",
    attrs: {
      "options": _vm.options
    }
  }, _vm._l(_vm.brends, function (brend) {
    return _c('SwiperSlide', {
      key: brend.id,
      staticClass: "logos-group-slider__slide"
    }, [brend.img ? _c('img', {
      attrs: {
        "src": `https://api.qlc-it.ru/${brend.img.url}`,
        "alt": brend.name
      }
    }) : _c('img', {
      attrs: {
        "alt": brend.name
      }
    })]);
  }), 1), _vm._ssrNode(" "), _c('SliderButton', {
    staticClass: "logos-group-slider-prev js-logos-slide-prev",
    attrs: {
      "slot": "button-prev"
    },
    slot: "button-prev"
  }), _vm._ssrNode(" "), _c('SliderButton', {
    staticClass: "logos-group-slider-next js-logos-slide-next",
    attrs: {
      "slot": "button-prev",
      "next": true
    },
    slot: "button-prev"
  })], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogoSlider.vue?vue&type=template&id=76bf77b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoSlider.vue?vue&type=script&lang=js&
/* harmony default export */ var LogoSlidervue_type_script_lang_js_ = ({
  name: "carrousel",
  props: {
    brends: {
      type: Array,
      default: []
    }
  },
  data: () => {
    return {
      options: {
        spaceBetween: 15,
        slidesPerView: 6,
        effect: "slide",
        loop: true,
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: ".js-logos-slide-next",
          prevEl: ".js-logos-slide-prev"
        },
        breakpoints: {
          980: {
            slidesPerView: 6,
            spaceBetween: 15
          },
          765: {
            slidesPerView: 5
          },
          320: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/LogoSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LogoSlidervue_type_script_lang_js_ = (LogoSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/LogoSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LogoSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "df550412"
  
)

/* harmony default export */ var LogoSlider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SliderButton: __webpack_require__(82).default})


/***/ })

};;
//# sourceMappingURL=logo-slider.js.map