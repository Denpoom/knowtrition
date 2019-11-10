/*$(window).on('scroll', function () {
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
*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var nav = document.getElementsByTagName('NAV')[0];

	var currentScrollPos = window.pageYOffset;
	var top = window.scrollTop;
	if (currentScrollPos === 0) {
		nav.classList.remove('black');
		//nav.style.background = "red";
	}
	else if (prevScrollpos > currentScrollPos) {
		nav.classList.add('black');
		nav.style.top = "0";
	} else {
		nav.style.top = "-90px";
	}
	prevScrollpos = currentScrollPos;
}

