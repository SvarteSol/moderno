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
        
        