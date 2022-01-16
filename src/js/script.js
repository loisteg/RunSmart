$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: false,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/Slider_left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/Slider_right_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
      });
  });



