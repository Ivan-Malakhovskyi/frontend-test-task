import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "./scss/main.scss";

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_arrow_next",
    prevEl: ".swiper_arrow_prev",
  },

  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  grid: {
    fill: "row",
  },
});

console.log(swiper);
