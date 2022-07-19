import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export function renderSlider() {
  const sliders = document.querySelectorAll('.js-slider');
  sliders.forEach(function (slider) {
    initSlider(slider);
  });

  function initSlider(item) {
    const sliderItem = item.querySelector('.slider__swiper');

    let swiper = new Swiper(sliderItem, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".slider__arrow--next",
        prevEl: ".slider__arrow--prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });
  }
}