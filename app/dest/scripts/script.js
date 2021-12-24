var dialog = document.querySelector('dialog');

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

    var mixer = mixitup('.products__inner-box');


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

        $(".js-range-slider").ionRangeSlider({
          type: "double",
          min: 0,
          max: 1000,
          from: 200,
          to: 500,
          grid: true
      });


      }); 

        $(".products-slider__inner").slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
        });

        
        

