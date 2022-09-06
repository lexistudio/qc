<template>
  <section class="logos-main">
    <div class="container">
      <Title sub="Latest Info" title="Наши клиенты" />
      <Swiper :options="options" class="logos-client-slider">
        <SwiperSlide
          v-for="logo in logos"
          :key="logo.id"
          class="logos-client-slider__slide"
        >
          <img
            v-if="logo.img"
            :src="`https://api.qlc-it.ru${logo.img.url}`"
            :alt="logo.name"
            :title="logo.name"
          />
          <img
            v-else
            :alt="logo.name"
          />
        </SwiperSlide>
      </Swiper>

      <div class="logos-client-slider-controls">
        <SliderButton slot="button-prev" class="logos-client-slider-controls__prev js-logos-slide-client-prev" />
        <div class="logos-client-slider-controls__pagination js-logos-slide-client-pagination"></div>
        <SliderButton slot="button-prev" :next="true" class="logos-client-slider-controls__next js-logos-slide-client-next" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
          prevEl: ".js-logos-slide-client-prev",
        },
        breakpoints: {
          980: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          765: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 2,
          },
        },
      },
    }
  }
};
</script>
