var dialog = document.querySelector('dialog');

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

    


    $(function () {


      


 
        $(".rate-star").rateYo({
          rating: 5,
          readOnly: true,
          starWidth: "12px"
        });
        $(".rating__item").rateYo({
          rating: 5,
          readOnly: true,
          starWidth: "12px"
        });

        $('.menu__btn').on('click', function(){
          $('.menu__list').slideToggle();
        });


        $('.header__svg-btn').on('click', function() {
          $('.header__box').toggleClass('active ');
        });

        $(".js-range-slider").ionRangeSlider({
          type: "double",
          min: 0,
          max: 1000,
          from: 0,
          to: 600,
          prefix: "$"
      });


        $('.th-list').on('click', function(){
          $('.product__item').addClass('list');
          $('.thlist').addClass('active');
          $('.thlarge').removeClass('active')

        });

        $('.th-large').on('click', function(){
          $('.product__item').removeClass('list');
          $('.thlarge').addClass('active');
          $('.thlist').removeClass('active')
        });
 
      }); 

        $(".products-slider__inner").slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
        });





        var mixer = mixitup('.products__inner-box');
     
        // $('.th-list').on('click', function(){
        //   $('.products__item').classList.add('list')
        // });
        
        