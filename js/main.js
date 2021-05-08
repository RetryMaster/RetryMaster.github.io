

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
      items:1
  });
});