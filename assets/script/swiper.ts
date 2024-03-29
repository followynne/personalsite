/* eslint-disable @typescript-eslint/no-unused-vars */
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import SimpleLightBox from 'simplelightbox';
import * as swipy from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../css/swiper.scss';

const attachLbox = () => {
  const selectGalleries = document.querySelectorAll('.gallery');
  selectGalleries.forEach((element) => {
    const classLists = [...element.classList].join('.');
    const e = new SimpleLightBox(`.${classLists} .swiper-slide .card-image a`, {
      uniqueImages: false,
      captionPosition: 'outside',
    });
  });
};

// configure Swiper to use modules
swipy.Swiper.use([swipy.Navigation, swipy.Pagination]);
// init Swiper:
const swiper = new swipy.Swiper('.swiper', {
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

attachLbox();
