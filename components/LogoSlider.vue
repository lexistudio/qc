<template>
  <div class="container">
    <div class="logos-group">
      <Swiper :options="options" class="logos-group-slider">
        <SwiperSlide
          v-for="brend in brends"
          :key="brend.id"
          class="logos-group-slider__slide"
        >
          <img
            v-if="brend.img"
            :src="`https://api.qlc-it.ru/${brend.img.url}`"
            :alt="brend.name"
          />
          <img
            v-else
            :alt="brend.name"
          />
        </SwiperSlide>
      </Swiper>

      <SliderButton
        slot="button-prev"
        class="logos-group-slider-prev js-logos-slide-prev"
      />
      <SliderButton
        slot="button-prev"
        :next="true"
        class="logos-group-slider-next js-logos-slide-next"
      />
    </div>
  </div>
</template>

<script>
export default {
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
          delay: 5000,
        },
        navigation: {
          nextEl: ".js-logos-slide-next",
          prevEl: ".js-logos-slide-prev",
        },
        breakpoints: {
          980: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          765: {
            slidesPerView: 5,
          },
          320: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      },
    };
  },
};
</script>
