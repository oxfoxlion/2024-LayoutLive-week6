import './assets/scss/all.scss';

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 2,
    spaceBetween: 48,
    slidesPerGroup:1,
    pagination: {
      el:".swiper-pagination-custom",
      type: "fraction"
    },
    navigation: {
          nextEl: ".swiper-next1",
          prevEl: ".swiper-prev1",
        },
   });

   const swiper1a = new Swiper('.swiper1a', {
    slidesPerView: 1,
    spaceBetween: 48,
    slidesPerGroup:1,
    pagination: {
      el:".swiper-pagination-custom1a",
      type: "fraction"
    },
    navigation: {
          nextEl: ".swiper-next1a",
          prevEl: ".swiper-prev1a",
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

   const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 48,
    slidesPerGroup:1,
   });


   const hoverUps = document.querySelectorAll(".hoverUp");

hoverUps.forEach(hoverUp => {
  hoverUp.addEventListener('mouseenter', () => {
      gsap.to(hoverUp, { y:-10 });
  });

  hoverUp.addEventListener('mouseleave', () => {
      gsap.to(hoverUp, { y:0 });
  });
});