

$(document).ready(function(){
    $('.burger').on('click', function(event){
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('.lock');
    });
    $('.header_menu-element').on('click', function(){
        $('.menu , .burger').removeClass('active');
    });
});