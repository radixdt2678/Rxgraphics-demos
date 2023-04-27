var swiper1 = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*  */
  $(".crd-slick-1").slick({
    slidesToShow: 2,
     slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
   
    autoplay: false,    
    autoplaySpeed: 2000,
    infinite: true,
      // dots: false, Boolean
     // arrows: false, Boolean
     responsive: [
      {
        breakpoint: 768,
        settings: {
          
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
   });
  $(".testimonials").slick({
    slidesToShow: 2,
     slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
   
    autoplay: false,    
    autoplaySpeed: 2000,
    infinite: true,
      // dots: false, Boolean
     // arrows: false, Boolean
     responsive: [
      {
        breakpoint: 768,
        settings: {
          
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
   });
   /*  */


/* streams */

var streamsSlider = new Swiper('[data-slider-1="true"]', {
  autoplay: false,
  loop:true,
 
  navigation: {
      nextEl: '[data-next]',
      prevEl: '[data-prev]',
  },
  slidesPerView: 1,
spaceBetween: -80,
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      350: {
          slidesPerView: 2,
      },
      750: {
          slidesPerView: 4.5,
      }
  }
});
/*  */
var streamsSlider = new Swiper('[data-slider-2="true"]', {
  autoplay: false,
  loop:true,
 
  navigation: {
      nextEl: '[data-next]',
      prevEl: '[data-prev]',
  },
  slidesPerView: 4,
  slidesPerGroup: 1,
spaceBetween: -80,
   breakpoints: {
       0: {
          slidesPerView: 2,
       },
       350: {
           slidesPerView: 2,
       },
       750: {
           slidesPerView: 4,
       }
   }
});

/*  */
   
