$(document).ready(function() {

	// Header wave animation
	if($('.wave1').length) {
		var wave = document.querySelector(".wave1 path")
		var wave2 = document.querySelector(".wave2 path")
		var wave3 = document.querySelector(".wave3 path")

		var tl = gsap.timeline({repeat: -1, yoyo: true})

		tl
		.to(wave, {duration: 5, morphSVG: ".wave-morph1 path", ease: "power1.inOut"}, 0)
		.to(wave2, {duration: 7, morphSVG: ".wave-morph2 path", ease: "power1.inOut"}, 0)
		.to(wave3, {duration: 9, morphSVG: ".wave-morph3 path", ease: "power1.inOut"}, 0);
	}

	// Header circle animation

	if($('#circles').length) {
		gsap.set('#circles circle', {transformOrigin: 'center center'});

		var $circle = $('#circles circle');

		$circle.each(function(index) {
			gsap.fromTo(this, { scale: 1 }, {duration: 2, scale: 1.1, ease: Back.easeOut, delay: index/9, yoyo: true, repeat: -1 });
		})
	}

	// Header text draw animation

	if($('#letters').length) {
		var c_outer = document.querySelector("#letters #C-outer")
		var c_inner = document.querySelector("#letters #C-inner")
		var a1 = document.querySelector("#letters #A-1")
		var a2 = document.querySelector("#letters #A-2")
		var a3 = document.querySelector("#letters #A-3")

		var drawtl = gsap.timeline({repeat: -1, yoyo: true});

		drawtl
		.fromTo(c_outer, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(c_inner, {drawSVG: "100% 100%"}, {duration: 7, drawSVG: "0% 100%"}, 0.5)
		.fromTo(a1, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(a2, {drawSVG: "100% 100%"}, {duration: 7, drawSVG: "0% 100%"}, 0.5)
		.fromTo(a3, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
	}

	// Header timeline animation

	if($('#timeline').length) {
		var line = $("#timeline #line");
		var c1 = $('#timeline circle.tl1');
		var c2 = $('#timeline circle.tl2');
		var c3 = $('#timeline circle.tl0');
		var c4 = $('#timeline path.tl1');

		gsap.set(c1, {autoAlpha: 0, transformOrigin: 'center center'});
		gsap.set(c2, {autoAlpha: 0, transformOrigin: 'center center'});
		gsap.set(c3, {autoAlpha: 0, transformOrigin: 'center center'});
		gsap.set(c4, {autoAlpha: 0, transformOrigin: 'center center'});

		var timelinetl = gsap.timeline({repeat: -1, yoyo: true});

		timelinetl
		.fromTo(line, {drawSVG: "0% 0%"}, {duration: 1, drawSVG: "0% 100%"}, 0)
		.fromTo(c1, {scale: 0 }, {duration: 1, autoAlpha: 1, scale: 1, stagger: 0.2}, 1)
		.fromTo(c2, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1, stagger: 0.2}, 1.5)
		.fromTo(c3, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1, stagger: 0.2}, 2)
		.fromTo(c4, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1, stagger: 0.2}, 2.5)
	}

	// Header slide and fade animation

	var slidefadetl = gsap.timeline();
	
	slidefadetl
	.from(".slide-in", {duration: 0.7, autoAlpha:0, x: -100, ease: "power1.inOut"}, 0)
	.from(".fade-in", {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.7)

	// SVG icon animation

	var hand = document.querySelector("#hand")
	var star1 = document.querySelector("#star1")
	var star2 = document.querySelector("#star2")
	var star3 = document.querySelector("#star3")

	var icontl = gsap.timeline({repeat: -1, repeatDelay: 1})

	icontl
	.from(hand, {duration: 1.2, x: -60, ease: "power1.inOut"}, 0)
	.from(star1, {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.3)
	.from(star2, {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.6)
	.from(star3, {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.9);

});