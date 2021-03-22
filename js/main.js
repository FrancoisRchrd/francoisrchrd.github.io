
/* Declarations */
	let html = document.querySelector("html");
	let body = document.querySelector("body");
	let footer = document.querySelector("footer");
	let h1 = document.querySelectorAll("h1");
	let h4 = document.querySelectorAll("h4");
	let p = document.querySelectorAll("p");
	let span = document.querySelectorAll("span");

	let overlay_img = document.getElementsByClassName("overlay-img");

	let name = document.getElementById("name-header");
	let nav = document.getElementsByClassName("menu_button");
	let nav_menu = document.getElementById("nav-menu");
	let darklight_btn = document.getElementById("darklight-btn");
	let darklight_img = darklight_btn.querySelector("img");
	let langage_btn = document.getElementById("langage-btn"); 
	let up_btn = document.getElementById("up");

	let name_content = document.getElementsByClassName("name-content");
	let name_content_bis = document.getElementsByClassName("name-content-bis");
	let part = document.getElementsByClassName("part");

	let about_name = document.getElementsByClassName("about_name");

	let paragraph = document.getElementsByClassName("paragraph");
	let para_bar = document.getElementsByClassName("para-bar");
	let para_desc = document.querySelectorAll(".para-description>li");

	let stuff_done = document.querySelectorAll(".stuff-done>span");

	let skills = document.getElementById("skillsPart");
	let percents = skills.querySelectorAll(".percent");

	let social = document.getElementsByClassName("social");
	
	let annotateME_show = document.getElementById("annotateME_show");
	let annotateME_demo = document.getElementById("annotateME_demo");

	let dejavu_img_aller = document.getElementById("dejavu_img_aller");
	let dejavu_img_retour = document.getElementById("dejavu_img_retour");
	var dejavu_snd = document.getElementById("dejavu_snd");
	var dejavu_crissement = document.getElementById("dejavu_crissement");



/* Clean URL #anchor */
	nav_menu.addEventListener("click", function(){ 
		setTimeout(function(){
			history.pushState(null, null, window.location.href.split('#')[0]);
		},1);
	});
	up_btn.addEventListener("click", function(){ 
		setTimeout(function(){
			history.pushState(null, null, window.location.href.split('#')[0]);
		},1);
	});


/* Color switch for Dark/Light mode */
	function changeTransition(elem, transition) {
		elem.style.webkitTransition = transition;
		elem.style.mozTransition = transition;
		elem.style.oTransition = transition;
		elem.style.transition = transition;
	};

/* Color switch for Dark/Light mode */
	function changeTransform(elem, transform) {
		elem.style.webkitTransform = transform;
		elem.style.mozTransform = transform;
		elem.style.oTransform = transform;
		elem.style.transform = transform;
	};


/* Color switch for Dark/Light mode */
	function darklight_colorSwitch(elem, carac, color) {
		for(let i=0; i<elem.length;i++){
			elem[i].style[carac] = color;
		}
	};


/* Social networks zoom loop */
	function socialLoop() {
    	for(let i=0; i<social.length;i++){
			setTimeout(function(){
				changeTransform(social[i], "scale(1.5)");

				setTimeout(function(){
					changeTransform(social[i], "scale(1)");
				},2000);

			},2000*i);			
		}
	};


/* Dark/Light mode color switch */
	function darkLight_colorSwitch() {
		darklight_btn.classList.toggle('light');


		if (darklight_btn.classList.contains('light')) {
			html.style.backgroundColor = "#f5f6fa"; 
			darklight_colorSwitch(name_content, "color", "#313133");
			darklight_colorSwitch(h1, "color","#313133");
			darklight_colorSwitch(h4, "color","#313133");
			darklight_colorSwitch(p, "color","#313133");
			darklight_colorSwitch(span, "color","#313133");
			darklight_colorSwitch(para_bar, "borderLeft", "3px solid #313133");
			darklight_colorSwitch(stuff_done, "backgroundColor","#feca57");
			darklight_colorSwitch(para_desc, "color", "#313133");
			darklight_colorSwitch(about_name, "color", "grey");
			darklight_colorSwitch(up_btn, "backgroundColor", "#2d3436");
			darklight_img.src = "../data/moon.png";
			localStorage.setItem('darkmode_used', 'false');
		}
		else{
			html.style.backgroundColor = "#313133";
			darklight_colorSwitch(name_content, "color", "#f5f6fa");
			darklight_colorSwitch(h1, "color","#747d8c");
			darklight_colorSwitch(h4, "color","#747d8c");
			darklight_colorSwitch(p, "color", "#f5f6fa");
			darklight_colorSwitch(span, "color", "#f5f6fa");
			darklight_colorSwitch(para_bar, "borderLeft", "3px solid #747d8c");
			darklight_colorSwitch(stuff_done, "backgroundColor","#e67e22");
			darklight_colorSwitch(para_desc, "color", "#f5f6fa");
			darklight_colorSwitch(about_name, "color", "#f5f6fa");
			darklight_colorSwitch(up_btn, "backgroundColor", "#ee5a24");
			darklight_img.src = "../data/sun.png";
			localStorage.setItem('darkmode_used', 'true');
		}
	}




document.addEventListener("DOMContentLoaded",function(){
/* Go Top a every refresh */
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

	for(let percent of percents) {
		percent.style.visibility =  "hidden";
	}


/* Dark/Light mode color switch */
	if(localStorage.getItem('darkmode_used') =="true"){
		darkLight_colorSwitch();
	}
	darklight_btn.addEventListener("click", function() {
		darkLight_colorSwitch();
	});




/* Dynamic height for para_bar based on paragraph's height + 20px */
	for(let i=0; i<paragraph.length;i++){
		para_bar[i].style.height = paragraph[i].clientHeight+20+"px";
	}




/* Animation Overlay */
	setTimeout(function(){
		for(let i=0; i<overlay_img.length; i++){
			setTimeout(function(){
				overlay_img[i].style.opacity = "1";		
			},600*i);			
		}
	},500);




/* Animation Nav */
	setTimeout(function(){
		name.style.left = "0";
	},500);
	setTimeout(function(){
		if(window.innerWidth > 1200){
			for(let i=0; i<nav.length;i++){
				setTimeout(function(){
					nav[i].style.top = "-35px";
					setTimeout(function(){
						nav[i].style.top = "-50px";					
					},450);			
				},400*(i*0.4));			
				setInterval(function(){
					if(html.style.width > '1200px'){
						nav[i].style.top = "-55px";
					}
				},100);
			}
		}else{
			for(let i=0; i<nav.length;i++){
				nav[i].style.top = "-600px";
			}		
		}
	},500);




/* Animation burger */
	let burger = document.querySelector("#burger");
	document.querySelector("#burger").addEventListener("click", function() { 

		burger.classList.toggle('open');

		/* If burger is open */
		if (burger.classList.contains('open')) {
			nav_menu.style.visibility = "visible";

			langage_btn.style.visibility = "visible";
			langage_btn.style.opacity = "1";

			darklight_btn.style.visibility = "visible";
			darklight_btn.style.opacity = "1";		

			for(let i=0; i<nav.length;i++){
				nav[i].style.visibility = "visible";
				setTimeout(function(){
					nav[i].style.top = 0;		
				},400*(i*0.4));
				/* If we click on a burger nav button => close it */
				nav[i].addEventListener("click", function() {
					if (burger.classList.contains('open')){
						burger.classList.toggle('open');
					}
					nav_menu.style.visibility = "hidden";

					langage_btn.style.visibility = "hidden";
					langage_btn.style.opacity = "0";

					darklight_btn.style.visibility = "hidden";
					darklight_btn.style.opacity = "0";

					for(let i=0; i<nav.length;i++){
						nav[i].style.top = "-800px";
					}			
				});
			}

			darklight_btn.addEventListener("click", function() {
				if (burger.classList.contains('open')){
					burger.classList.toggle('open');
				}
				nav_menu.style.visibility = "hidden";

				langage_btn.style.visibility = "hidden";
				langage_btn.style.opacity = "0";

				darklight_btn.style.visibility = "hidden";
				darklight_btn.style.opacity = "0";

				for(let i=0; i<nav.length;i++){
					nav[i].style.top = "-800px";
				}			
			});
			
		}else{
			nav_menu.style.visibility = "hidden";

			langage_btn.style.visibility = "hidden";
			langage_btn.style.opacity = "0";

			darklight_btn.style.visibility = "hidden";
			darklight_btn.style.opacity = "0";

			for(let i=0; i<nav.length;i++){
				nav[i].style.top = "-800px";	
			}			
		}
	});	
	setTimeout(function(){
		setInterval(function(){
			if(window.innerWidth > 1200){
				for(let i=0; i<nav.length;i++){
					nav[i].style.top = "-50px";	
				}	
			}
		},100);
	},3000);




/* Menu button hover */
	var isOnNav = false; /* Check if mouse in nav */
	var nav_id = null; /* Check wich button got mouse inside */
	var last_nav = 0; 
	setInterval(function(e){
		for(let i=0; i<nav.length;i++){
			nav[i].addEventListener("mouseenter",function(){ isOnNav = true; nav_id = i; });
			nav[i].addEventListener("mouseout",function(){ isOnNav = false; nav_id = null; });
			if(isOnNav == true && i == nav_id){
				nav[i].style.backgroundColor = "#ee5a24";
			}else{
				nav[i].style.backgroundColor = "#2d3436";
			}
		}
		for(let i=0; i<nav.length-1;i++){
			/* Part subtitle translation */
			if(window.innerWidth > 1200){
				changeTransform(name_content_bis[i], 'translateX('+Math.abs(window.pageYOffset)/200+'%) translateY('+Math.abs(window.pageXOffset)/20+'%)');
			}
			/* If we are on a part => change the nav button color */
			if (window.innerWidth > 1200 && part[i].getBoundingClientRect().y < 400 && -part[i].getBoundingClientRect().y < part[i].offsetHeight-400){
				nav[i].style.backgroundColor = "#ee5a24";
				last_nav = i;
			}
			else if (window.innerWidth <= 1200 && part[i].getBoundingClientRect().y < 400 && -part[i].getBoundingClientRect().y < part[i].offsetHeight-100){
				nav[i].style.backgroundColor = "#ee5a24";
				last_nav = i;
			}
			else{
				nav[last_nav].style.backgroundColor = "#ee5a24";
			}
		}
	},50);




/* Animation skills */
	let skillsDisplayed = false;
	setTimeout(function(){
		window.addEventListener("scroll", function() {
			if (skills.getBoundingClientRect().y < 300 && skills.getBoundingClientRect().y > -skills.clientHeight && !skillsDisplayed) {
				skillsDisplayed = true;
				for(let percent of percents) {
					percent.style.visibility =  "visible";
					percent.style.width =  percent.innerHTML+"%";
				}
			}
		});
	},1000);




/* Animation project AnnotateME */
	annotateME_show.addEventListener("click", function() { 
		annotateME_show.classList.toggle('open');
		if (annotateME_show.classList.contains('open')) {
			if(window.innerWidth > 1200){
				annotateME_demo.style.marginTop = "0px";
				setTimeout(function(){
					annotateME_demo.style.opacity = "1";
				},500);
			}else{
				annotateME_demo.style.display = "inline-block";
			}
		}else{
			if(window.innerWidth > 1200){
				annotateME_demo.style.opacity = "0";
				setTimeout(function(){
					annotateME_demo.style.marginTop = "-500px";
				},500);
			}else{
				annotateME_demo.style.display = "none";
			}
		}		
	});
	



/* Animation social networks */
	window.addEventListener("scroll",function(){
		if (footer.getBoundingClientRect().y - window.innerHeight < -170) {				
			for(let i=0; i<social.length;i++){
				setTimeout(function(){
					social[i].style.opacity = "1";							
				},500*i);			
			}
		}
	});
	/* Social networks loop */
	setTimeout(function(){
		socialLoop();
		setInterval(socialLoop, 10000);
	}, 4000);




/* Animation Go Top Button */
	window.addEventListener("scroll",function(){
		if (body.getBoundingClientRect().y < -600){
			up_btn.style.opacity = "1";		
		}else{
			up_btn.style.opacity = "0";
		}						
	});




/* Konami code */
	var dejavu = new Konami(function() {
		dejavu_snd.play();
		setTimeout(function(){
			dejavu_img_aller.style.top = "15vw";
			changeTransition(dejavu_img_aller, "all 8s");
			dejavu_img_aller.style.left = "120vw";

			dejavu_img_retour.style.top = "15vw";
			dejavu_img_retour.style.left = "120vw";
		},500);  
		setTimeout(function(){
			dejavu_crissement.volume = 0.2;
			dejavu_crissement.play();
		},5800);
		setTimeout(function(){
			changeTransition(dejavu_img_aller, "all 0s");
			changeTransition(dejavu_img_retour, "all 8s");
			dejavu_img_aller.style.left = "-1000px";
			dejavu_img_retour.style.left = "-1200px";
		},8000);
		setTimeout(function(){
			changeTransition(dejavu_img_retour, "all 0s");
		},16000);
	});


});