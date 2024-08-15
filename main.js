import './assets/scss/all.scss';

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 48,
    slidesPerGroup:1,
    pagination: {
      el:".swiper-pagination-custom",
      type: "fraction"
    },
    navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
   });