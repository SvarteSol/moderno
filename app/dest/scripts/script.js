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
      }); 

        $(".products-slider__inner").slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
        });

    


