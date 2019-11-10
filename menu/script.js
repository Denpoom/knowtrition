var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var nav = document.getElementsByTagName('NAV')[0];

	var currentScrollPos = window.pageYOffset;
	var top = window.scrollTop;
	var img = document.getElementById('image');
	if (currentScrollPos === 0) {
		nav.classList.remove('black');
		img.src = "image/logo.png";
		//nav.style.background = "red";
	}
	else if (prevScrollpos > currentScrollPos) {
		nav.classList.add('black');
		nav.style.top = "0";
		img.src = "image/logo_white.png";
	} else {
		nav.style.top = "-90px";
	}
	prevScrollpos = currentScrollPos;
}
