
		
		window.addEventListener("scroll", function (event) {
			var scroll = Math.floor(this.scrollY);
			
			console.log("scroll mod  "+scroll%this.window.innerHeight);
			console.log("scroll opacity  "+1/((scroll%window.innerHeight)*0.01));

			var change = false;
			
			var opa = scroll%this.window.innerHeight;
			
			
			if(scroll < window.innerHeight){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 2/(scroll*0.01);
				if(this.document.querySelector('source').src.slice(30) != '/asset/coverr-red-apples-1566725031062.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = './asset/coverr-red-apples-1566725031062.mp4';
				
			}
			else if(scroll < window.innerHeight*2){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 0.35+2/((scroll%window.innerHeight)*0.01);
				if(this.document.querySelector('source').src.slice(30) != '/asset/food_foottage.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = './asset/food_foottage.mp4';
				
				
			}else if(scroll < window.innerHeight*3){
				this.document.querySelector('.fullscreen-bg video').style.opacity = 0.35+2/((scroll%window.innerHeight)*0.01);
				if(this.document.querySelector('source').src.slice(30) != '/asset/coverr-red-apples-1566725031062.mp4'){
					change = true;
				}
				this.document.querySelector('source').src = './asset/coverr-red-apples-1566725031062.mp4';
				
				
			}else{
				this.document.querySelector('.fullscreen-bg video').style.opacity = 1;
			}
			if(change){
					
					$(".fullscreen-bg video")[0].load();
					
					
				
			}
			
			
		});
		

function change(element,value) {
	element.parentElement.setAttribute('data-select',value);

};


<<<<<<< HEAD

=======
>>>>>>> 6de7d3af72bb361fe8603fe12860c333c6a2e46e


