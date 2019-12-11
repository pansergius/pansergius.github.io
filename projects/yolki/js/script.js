$(document).ready(function(){
    $('.popup-btn').on('click', function(event){
      event.preventDefault();
      $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup').fadeOut();
    });



   
    $('.navi__burger').click(function(event)  {
        $('.navi__burger,.navi__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    $('.about-slider').slick({
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



    $('.kits-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
           {
             breakpoint: 991,
             settings: {
               slidesToShow: 1,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 1
             }
           }
         ]
    });



    $('.production-slider').slick({
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
               slidesToScroll: 1
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

/*catalog-slider*/

    $('.catalog-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1
              }
            },
           {
             breakpoint: 991,
             settings: {
               slidesToShow: 2,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 1
             }
           },
           {
             breakpoint: 639,
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