$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('nav').addClass('black');
		$('a').addClass('white');
		$('i').addClass('white');
	}
	else {
		$('nav').removeClass('black');
		$('a').removeClass('white');
		$('i').removeClass('white');
	}
});
