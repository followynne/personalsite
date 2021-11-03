import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';
import '../css/swiper.scss';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
new Swiper('.swiper', {
  // Optional parameters
  autoplay: true,
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
  freeMode: true,
  grabCursor: true,
  lazy: true,
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
