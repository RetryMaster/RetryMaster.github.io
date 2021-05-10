

$(document).ready(function(){
    $('.burger').on('click', function(event){
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header_menu-element').on('click', function(){
        $('.menu , .burger').removeClass('active');
    });
    $('.offer_btn').on('click' , function(){
        $('.call_wrap').addClass('current');
        $('body').addClass('lock');
    });
    $('.close').on('click',function(){ 
        $('.call_wrap').removeClass('current');
        $('body').removeClass('lock');
    }); 
});





$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      nav: true,
      navText: ['&#8592;', '&#8594;']
  });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:3,
      loop: true,
      autoplay: true,
      nav: true,
      navText: ['&#8592;', '&#8594;']
  });
});



  
