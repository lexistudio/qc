export default {
  data: () => {
    return {
      options: {
        spaceBetween: 30,
        slidesPerView: 1,
        effect: "slide",
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".js-pagination",
          bulletClass: 'carusel__bulet',
          bulletActiveClass: 'carusel__bulet--active',
          clickable: true
        },
        navigation: {
          nextEl: ".js-slide-next",
          prevEl: ".js-slide-prev",
        },
      },
    }
  }
}