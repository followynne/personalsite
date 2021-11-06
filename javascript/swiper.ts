import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
// import Swiper and modules styles
import '@fortawesome/fontawesome-free/css/solid.min.css';
import Swiper, { Autoplay, EffectCards, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../css/swiper.scss';

// configure Swiper to use modules
Swiper.use([Autoplay, EffectCards, Navigation, Pagination]);

// init Swiper:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _ = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1.5,
    },
  },
  centeredSlides: true,
  direction: 'horizontal',
  effect: 'cards',
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.5,
  spaceBetween: 10,
});
