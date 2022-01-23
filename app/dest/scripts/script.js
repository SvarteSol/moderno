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


        $('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
          var id = $(this).attr('data-id');
            $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs, settings__tabs .tab').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
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
        
        