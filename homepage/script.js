// $(window).on('scroll', function(){
// 	if($(window).scroll()) {
// 		$('nav').addClass('black');
// 		document.getElementById("logo1").scr = 'logo.png';
// 		//$('nav').removeClass('white');
// 	}
// 	else {
// 		$('nav').removeClass('black');
// 		document.getElementById("logo1").scr = 'logo_white.png';
// 		//$('nav').addClass('white');

// 	}
// });
		// var prevScrollpos = window.pageYOffset;
		// window.onscroll = function() {
		// var currentScrollPos = window.pageYOffset;
		// if (prevScrollpos > currentScrollPos) {
		// 	document.getElementsByClassName("nav-btn").style.top = "0";
		// 	document.getElementsByClassName("nav-wrapper").style.top = "0";
		// 	document.getElementById("nav-stripe").style.top = "10px";
		// } else {
		// 	document.getElementById("nav-btn").style.top = "-80px";
		// 	document.getElementById("nav-wrapper").style.top = "-80px";
		// 	document.getElementById("nav-stripe").style.top = "-80px";
		// }
		// prevScrollpos = currentScrollPos;
		// }
		
		window.addEventListener("scroll", function (event) {
			var scroll = Math.floor(this.scrollY);
			
			console.log("scroll mod  "+scroll%this.window.innerHeight);
			console.log("scroll opacity  "+1/((scroll%window.innerHeight)*0.01));

			var change = false;
			
			var opa = scroll%this.window.innerHeight;
			
			
			if(scroll < window.innerHeight){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 1/(scroll*0.01);
				if(this.document.querySelector('source').src.slice(30) != '/asset/coverr-red-apples-1566725031062.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = './asset/coverr-red-apples-1566725031062.mp4';
				
			}
			else if(scroll < window.innerHeight*2){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 1/((scroll%window.innerHeight)*0.01);
				if(this.document.querySelector('source').src.slice(30) != '/asset/food_foottage.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = './asset/food_foottage.mp4';
				
				
			}else if(scroll < window.innerHeight*3){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 1/((scroll%window.innerHeight)*0.01);
				if(this.document.querySelector('source').src.slice(30) != '/asset/videoplayback.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = './asset/videoplayback.mp4';
				
				
			}else{
				this.document.querySelector('.fullscreen-bg video').style.opacity = 1;
			}
			if(change){
					
					$(".fullscreen-bg video")[0].load();
					console.log("load");
					
				
			}
			
			
		});
		

function change(element,value) {
	element.parentElement.setAttribute('data-select',value);

};


$('choice1').on('click', function() { // when you click the div
  $(this).removeClass('hover'); // add the class 'no-hover'
});

$('choice2').on('click', function() { // when you click the div
  $(this).unbind("mouseenter mouseleave"); // add the class 'no-hover'
});


