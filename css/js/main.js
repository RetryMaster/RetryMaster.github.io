



$(window).scroll(function() {
	$('.h2').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__zoomIn");
	    }
	});
})

$(window).scroll(function() {
	$('.wrapper2').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__zoomInLeft");
	    }
	});
})

$(window).scroll(function() {
	$('.h2form').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__flipInX");
	    }
	});
})

$(window).scroll(function() {
	$('.btn2').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__fadeInUpBig");
	    }
	});
})

$(window).scroll(function() {
	$('.name_input ').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__fadeInTopRight");
	    }
	});
})

$(window).scroll(function() {
	$('.email_inputtn2').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__fadeInTopRight");
	    }
	});
})

$(window).scroll(function() {
	$('.tel_input').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__fadeInBottomLeft");
	    }
	});
})

$(window).scroll(function() {
	$('.text_input').each(function(){
	     var imagePos = $(this).offset().top;

	     var topOfWindow = $(window).scrollTop();
	     if (imagePos < topOfWindow+650) {
	        $(this).addClass("animate__fadeInBottomRight");
	    }
	});
})