var w = $('.galimg').width();

$('.galimg').height(w);



$('.galimg img').each(function() {

	var imgw = $(this).width();
	var imgh = $(this).height();


	if ( imgh > imgw ) {
		$(this).addClass('portrait');
		$(this).css('bottom', ($(this).height() - w) / 2)
	}

	else {
		$(this).addClass('landscape');
		$(this).css('right', ($(this).width() - w) / 2)
	}

	

});