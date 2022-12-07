import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

let swiper = new Swiper('.homepage-main__in-stock-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
  
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    modules: [Navigation, Pagination, Scrollbar],
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 250,
    },
  
  });
  
  new Swiper('.homepage-main__in-stock-slider-adapt', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 250,
    },
  
  });
  
  new Swiper(".homepage-main__comment-section-slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  new Swiper(".homepage-main__comment-section-slider-adapt", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  // Product slider
  
  new Swiper(".product-main__product-section-slider", {
    spaceBetween: 10,
  
    pagination: {
      el: ".product-section-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: {
        el: '.product-main__product-section-slider2',
        slidesPerView: 5,
      },
    },
  });
  
  
  // Product page reviews slider 
  
  new Swiper(".product-main__reviews-slider", {
    slidesPerView: 1,
  
    pagination: {
      el: ".reviews-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".reviews-slider-btn-next",
      prevEl: ".reviews-slider-btn-prev",
    },
  });