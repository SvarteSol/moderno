var dialog = document.querySelector('dialog');

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}


$(function(){

    $(function () {
 
        $(".rate-star").rateYo({
          rating: 5,
          readOnly: true,
          starWidth: "12px"
        });
      }); 

        // $(".product-slider__inner").slick({
        //     dots: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 4,
        //     arrows: false,
        //     centerMode: true,
        //     draggable: true,

        // });










    var mixer = mixitup('.products__inner-box');
});

