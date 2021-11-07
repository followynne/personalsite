/* eslint-disable @typescript-eslint/no-unused-vars */
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import SimpleLightbox from 'simplelightbox';
import Swiper, { EffectCards, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../css/swiper.scss';

const attachLbox = () => {
  const selectGalleries = document.querySelectorAll('.gallery');
  selectGalleries.forEach((element) => {
    const classLists = [...element.classList].join('.');
    const e = new SimpleLightbox(`.${classLists} .swiper-slide .card-image a`, {
      uniqueImages: false,
    });
  });
};
attachLbox();

// configure Swiper to use modules
Swiper.use([EffectCards, Navigation, Pagination]);
// init Swiper:
const _ = new Swiper('.swiper', {
  // Optional parameters
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
