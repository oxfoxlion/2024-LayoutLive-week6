import './assets/scss/all.scss';

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 2,
    spaceBetween: 48,
    slidesPerGroup:1,
    pagination: {
      el:".swiper-pagination-custom1",
      type: "fraction"
    },
    navigation: {
          nextEl: ".swiper-next1",
          prevEl: ".swiper-prev1",
        },
   });

   const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 48,
    slidesPerGroup:1,
    
    navigation: {
          nextEl: ".swiper-next2",
          prevEl: ".swiper-prev2",
        },
   });