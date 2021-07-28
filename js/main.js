(function ($) { 
    "use strict";

    var  mainStatus  = $('#status'),
     mainBody = $('body'),
     mainPreloader  = $('#preloader');

     window.onload = function() {
      mainStatus.fadeOut();
      mainPreloader.delay(500).fadeOut('slow');
      mainBody.delay(500).css({
          'overflow': 'visible'
      });
     }



    //slider
    $(document).ready(function(){   
    $('.owl').owlCarousel({
        animateOut: 'fadeOut',
        items:1,
         lazyLoad:true,
         loop:true,
        smartSpeed:500,
        autoplay:true,
       
    });
    $( ".owl-prev").html('<span class="fa fa-angle-left"></span>');
 $( ".owl-next").html('<span class="fa fa-angle-right"></span>');

})

$(document).ready(function () {
    $(".dropdown").on("hide.bs.dropdown", function () {
        $(".btnn_1").html('English <span  <span class="fa fa-angle-down"></span>');
    });
    $(".dropdown").on("show.bs.dropdown", function () {
        $(".btnn_1").html('English  <span class="fa fa-angle-up"></span>');
    });

    $(".clck_1").hover(function(){

        $(".btnn_1").html('English <span  <span class="fa fa-angle-down"></span>');
   
    });

    $(".clck_2").hover(function(){

        $(".btnn_1").html('Arabic <span  <span class="fa fa-angle-down"></span>');
   
    });

    $(".clck_1").click(function(){
    $("._eng_").css("display","block");
    $("._arab_").css("display","none");

    });

    $(".clck_2").click(function(){
        $("._eng_").css("display","none");
        $("._arab_").css("display","block");
        });

});

$(document).ready(function () {
    $(".dropdown").on("hide.bs.dropdown", function () {
        $(".btnn_2").html('عربي <span  <span class="fa fa-angle-down"></span>');
    });
    $(".dropdown").on("show.bs.dropdown", function () {
        $(".btnn_2").html('عربي  <span class="fa fa-angle-up"></span>');
    });
    $(".clck_1").hover(function(){

        $(".btnn_2").html('انجليزي <span  <span class="fa fa-angle-down"></span>');
   
    });

    $(".clck_2").hover(function(){

        $(".btnn_2").html('عربي <span  <span class="fa fa-angle-down"></span>');
   
    });

    $(".clck_1").click(function(){
    $("._eng_").css("display","block");
    $("._arab_").css("display","none");

    });

    $(".clck_2").click(function(){
        $("._eng_").css("display","none");
        $("._arab_").css("display","block");
        });

});




//sticky nav bar
$(document).ready(function () {
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
  
    $(window).scroll(function (e) {
        e.preventDefault();
  
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
        } else {
            $sticky.removeClass('is-fixed');
        }
    });
  });
 //testimonials
  $(document).ready(function(){   
    $('.owl_2').owlCarousel({
        animateOut: 'fadeOut',
        animateIn:'fadeIn',
        items:1,
         lazyLoad:true,
         loop:true,
        smartSpeed:400,
        autoplay:false,
       
    });
    $( ".owl-prev").html('<span class="fa fa-angle-left"></span>');
 $( ".owl-next").html('<span class="fa fa-angle-right"></span>');

})

//first lignhgallery 
$(document).ready(function() {
    $('#lightgallery').lightGallery({
      pager: true,
      thumbnail:true,
      useLeft:true	
  
    });
  });
  $(document).ready(function() {
    var $lightgallery = $('#lightgallery');
    $lightgallery.lightGallery();
    var data = $lightgallery.data('lightGallery');
    
    $lightgallery.on('onBeforeSlide.lg', function(event, prevIndex, index){
      var img = data.$items.eq(index).attr('data-src');
      $('.lg-backdrop').css('background-image', 'url('+img+')');
    });
  });
  

  //second menu
  $(document).ready(function() {
    
  $('.first_one').click(function(){

    

    $(".col_2").css('display','block');
    $(".col_1").css('display','none');
  });
  $('.second_one').click(function(){
    $(".col_2").css('display','none');
    $(".col_1").css('display','block');

  });
  $(".li_1").click(function(){
    $(".col_1").css('display','block');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none'); 
    $(".col_11").css('display','none'); 
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');             
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')

});
$(".li_2").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','block');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');    
    $(".col_11").css('display','none');   
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');     
    $(".li_1").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});
$(".li_3").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','block');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');   
    $(".col_11").css('display','none');   
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');      
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});

$(".li_4").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','block');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');   
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none'); 
    $(".col_11").css('display','none');     
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');      
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});

$(".li_5").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','block');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');    
    $(".col_11").css('display','none'); 
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');       
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});

$(".li_6").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','block');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none'); 
    $(".col_11").css('display','none'); 
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');          
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});
$(".li_7").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','block');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');  
    $(".col_11").css('display','none');   
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');       
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});

$(".li_8").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','block');
    $(".col_10").css('display','none');  
    $(".col_11").css('display','none'); 
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');         
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')
});

$(".li_9").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','block');    
    $(".col_11").css('display','none');    
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');    
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});

$(".li_10").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');    
    $(".col_11").css('display','block');    
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');    
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});
$(".li_11").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');    
    $(".col_11").css('display','none');    
    $(".col_12").css('display','block');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','none');    
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_12").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')


});


$(".li_12").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');    
    $(".col_11").css('display','none');    
    $(".col_12").css('display','none');       
    $(".col_13").css('display','block');       
    $(".col_14").css('display','none');    
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_13").removeClass('active');
    $(this).addClass('active')
});

$(".li_13").click(function(){
    $(".col_1").css('display','none');
    $(".col_2").css('display','none');
    $(".col_3").css('display','none');
    $(".col_4").css('display','none');
    $(".col_5").css('display','none');
    $(".col_6").css('display','none');
    $(".col_7").css('display','none');
    $(".col_8").css('display','none');
    $(".col_9").css('display','none');
    $(".col_10").css('display','none');    
    $(".col_11").css('display','none');    
    $(".col_12").css('display','none');       
    $(".col_13").css('display','none');       
    $(".col_14").css('display','block');    
    $(".li_1").removeClass('active');
    $(".li_2").removeClass('active');
    $(".li_3").removeClass('active');
    $(".li_4").removeClass('active');
    $(".li_5").removeClass('active');
    $(".li_6").removeClass('active');
    $(".li_7").removeClass('active');
    $(".li_8").removeClass('active');
    $(".li_9").removeClass('active');
    $(".li_10").removeClass('active');
    $(".li_11").removeClass('active');
    $(".li_12").removeClass('active');
    $(this).addClass('active')
});






});

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
           
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  
//$(document).ready(function(){

//var  mainGfload = $('#gf_load'),
   //  mainMen2 = $('.col_2'),
    // mainPreloder  = $('#preloding');
    // mainGfload.fadeOut();

//$(".li_2").click(function(){
     //   mainGfload.fadeOut();
      //  mainPreloder.delay(350).fadeOut('slow');
      //  mainMen2.delay(350).css({
       //   'overflow': 'visible'
     // });
   // });
   // })

//wow  .js
new WOW().init();


//side nav bar
$(document).ready(function(){
    $(".nav-toggle").click(function(){
      $(".mysidenav").toggleClass("actve");
      $(".nav-toggle.expanded").addClass("actvee");
      $("._header_one").toggleClass("actveee ");
    });
  });
    $(document).ready(function(){

      $(".mysidenav").click(function(){
      $(this).toggleClass("actve");
        $(".nav-toggle").removeClass("expanded");
      });
  });
  
})(jQuery);
