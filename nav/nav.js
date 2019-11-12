var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var nav = document.getElementsByTagName('NAV')[0];
	var btn = document.getElementsByClassName('nav-btn');

	var currentScrollPos = window.pageYOffset;
	var top = window.scrollTop;
	var img = document.getElementById('image');
	if (currentScrollPos === 0) {
		nav.classList.remove('black');
		img.src = "../nav/logo.png";
		//nav.style.background = "red";
	}
	else if (prevScrollpos > currentScrollPos) {
		nav.classList.add('black');
		nav.style.top = "0";
		img.src = "../nav/logo_white.png";
		btn[0].top = "0px";
	} else {
		nav.style.top = "-90px";
		btn[0].top = "-90px";
	}
	prevScrollpos = currentScrollPos;
}


var wrap = document.getElementsByClassName('nav-wrapper');

function myFunction() {
	var check = document.getElementById('nav').checked;
	if(check) {	
		wrap[0].style.left = "0px";
	} else{
		wrap[0].style.left = "400px";
	}
}

function myClick() {
	var check = document.getElementById('nav').checked;
	wrap[0].style.left = "400px";
	
}
