$(document).ready(function(){
    $('.popup-btn').on('click', function(event){
      event.preventDefault();
      $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup').fadeOut();
    });
    /*****dop******/
    /****feedback*/
    $('.feedback-slider').slick({
      prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev"><img src="imgs/feedback/prev-arrow-yellow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="feedback-slider-btn feedback-next"><img src="imgs/feedback/next-arrow-yellow.svg" alt=""></button>',
    });
    $('.features-slider, .products-slider, .services-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
           {
             breakpoint: 991,
             settings: {
               slidesToShow: 2,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 1
             }
           }
         ]
    });
     $('.popular-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
           {
             breakpoint: 991,
             settings: {
               slidesToShow: 2,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 1
             }
           }
         ]
    });
});