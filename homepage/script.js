
		
		window.addEventListener("scroll", function (event) {
			var scroll = Math.floor(this.scrollY);
	

			var change = false;

			
			
			if(scroll < window.innerHeight){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 2/(scroll*0.01);
				if(this.document.querySelector('source').src != 'http://10.0.15.12/wtprojects/wtpg23/asset/coverr-red-apples-1566725031062.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = 'http://10.0.15.12/wtprojects/wtpg23/asset/coverr-red-apples-1566725031062.mp4';
				
			}
			else if(scroll < window.innerHeight*2){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 0.35+2/((scroll%window.innerHeight)*0.01);
				if(this.document.querySelector('source').src != 'http://10.0.15.12/wtprojects/wtpg23/asset/food_foottage.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = 'http://10.0.15.12/wtprojects/wtpg23/asset/food_foottage.mp4';
				
				
			}else if(scroll < window.innerHeight*3){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 0.35+2/((scroll%window.innerHeight)*0.01);
				if(this.document.querySelector('source').src != 'http://10.0.15.12/wtprojects/wtpg23/asset/coverr-red-apples-1566725031062.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = 'http://10.0.15.12/wtprojects/wtpg23/asset/coverr-red-apples-1566725031062.mp4';
				
				
			}else{
				this.document.querySelector('.fullscreen-bg video').style.opacity = 1;
			}
			if(change){
					
					$(".fullscreen-bg video")[0].load();
					this.console.log("load");
						
				
			}
			
			
		});
		

function change(element,value) {
	element.parentElement.setAttribute('data-select',value);

};


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var nav = document.getElementsByTagName('NAV')[0];
	var btn = document.getElementsByClassName('nav-btn');

	var currentScrollPos = window.pageYOffset;
	var top = window.scrollTop;
	var img = document.getElementById('image');
	if (currentScrollPos === 0) {
		nav.classList.remove('black');
		img.src = "nav/logo.png";
		//nav.style.background = "red";
	}
	else if (prevScrollpos > currentScrollPos) {
		nav.classList.add('black');
		nav.style.top = "0";
		img.src = "nav/logo_white.png";
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
	if (check) {
		//alert("In");
		wrap[0].style.left = "0px";
	} else {
		//alert("Out" + check);
		wrap[0].style.left = "100%";
	}
}

function myClick() {
	document.getElementById('nav').checked = false;
	//alert("myClick() " +document.getElementById('nav').checked);
	wrap[0].style.left = "100%";
}


/*if(!document.getElementById('id1')) {
    var link = document.createElement('link');
    link.id = 'id1';
	link.rel = 'shortcut icon';
	link.type = "image/x-icon";
	link.href = '../nav/title_logo2.ico';
	document.head.appendChild(link);
	document.querySelector('title').innerText = document.querySelector('.boxtopic').innerText+ ' - Knowtrition เว็บไซต์เพื่อเรียนรู้เกี่ยวกับวัตถุดิบ';
}*/
