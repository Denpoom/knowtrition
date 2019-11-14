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
		//alert("In");
		wrap[0].style.left = "0px";
		window.scrollTo(0,0);
		// console.log("nav active");
	}else{
		//alert("Out"+check);
		wrap[0].style.left = "100%";
	}
}

function myClick() {
	document.getElementById('nav').checked = false;
	//alert("myClick() " +document.getElementById('nav').checked);
	wrap[0].style.left = "100%";
	window.scrollTo(0,0);
	
}

var imgLink = document.getElementById('image');
imgLink.onclick = function() {
    window.location.href = '../index.html';
}

if(!document.getElementById('id1')) {
    var link = document.createElement('link');
    link.id = 'id1';
	link.rel = 'shortcut icon';
	link.type = "image/x-icon";
	link.href = '../nav/title_logo2.ico';
	document.head.appendChild(link);
	document.querySelector('title').innerText = document.querySelector('.boxtopic').innerText+ ' - Knowtrition เว็บไซต์เพื่อเรียนรู้เกี่ยวกับวัตถุดิบ';
}

