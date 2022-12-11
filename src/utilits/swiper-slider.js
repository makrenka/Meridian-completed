import Swiper, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';

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

    modules: [Navigation, Pagination],
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  new Swiper('.homepage-main__in-stock-slider-adapt', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,

    modules: [Scrollbar],
  
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

    modules: [Navigation, Pagination],
  
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

    modules: [Navigation, Pagination],
  
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

    modules: [Navigation, Pagination, Thumbs],
  
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

  new Swiper(".product-main__product-section-slider-adapt", {
    spaceBetween: 10,

    modules: [Pagination],
  
    pagination: {
      el: ".product-section-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    
  });
  
  
  // Product page reviews slider 
  
  new Swiper(".product-main__reviews-slider", {
    slidesPerView: 1,

    modules: [Navigation, Pagination],
  
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