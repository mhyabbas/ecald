$(document).ready(function() {

	// Header wave animation

	var wave = document.querySelector(".wave1 path")
	var wave2 = document.querySelector(".wave2 path")
	var wave3 = document.querySelector(".wave3 path")

	var tl = gsap.timeline({repeat: -1, yoyo: true})

	tl
	.to(wave, {duration: 5, morphSVG: ".wave-morph1 path", ease: "power1.inOut"}, 0)
	.to(wave2, {duration: 7, morphSVG: ".wave-morph2 path", ease: "power1.inOut"}, 0)
	.to(wave3, {duration: 9, morphSVG: ".wave-morph3 path", ease: "power1.inOut"}, 0)

	// Header circle animation

	gsap.set('#circles circle', {transformOrigin: 'center center'});

	var $circle = $('#circles circle');

	$circle.each(function(index) {
		gsap.fromTo(this, { scale: 1 }, {duration: 2, scale: 1.1, ease: Back.easeOut, delay: index/9, yoyo: true, repeat: -1 });
	})

	// Header text draw animation

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

	// Header timeline animation

	var line = $("#timeline #line")
	var c1 = $('#timeline circle.tl1');
	var c2 = $('#timeline circle.tl2');
	var c3 = $('#timeline circle.tl0');
	var c4 = $('#timeline path.tl1');
	var lineDown = $('#timeline line.tl0');

	gsap.set(line, {autoAlpha: 0, transformOrigin: 'center center'});
	gsap.set(c1, {autoAlpha: 0, transformOrigin: 'center center'});
	gsap.set(c2, {autoAlpha: 0, transformOrigin: 'center center'});
	gsap.set(c3, {autoAlpha: 0, transformOrigin: 'center center'});
	gsap.set(c4, {autoAlpha: 0, transformOrigin: 'center center'});
	gsap.set(lineDown, {autoAlpha: 0});

	var timelinetl = gsap.timeline({repeat: -1, yoyo: true});

	timelinetl
	.fromTo(line, {drawSVG: "50% 50%"}, {duration: 1, autoAlpha: 1, drawSVG: "0% 100%"}, 0)
	.fromTo(c1, {scale: 0 }, {duration: 1, autoAlpha: 1, scale: 1}, 1)
	.fromTo(c2, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1}, 1.5)
	.fromTo(c3, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1}, 2)
	.fromTo(lineDown, {drawSVG: "0% 0%"}, {duration: .5, autoAlpha: 1, drawSVG: "0% 100%"}, 2.5)
	.fromTo(c4, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1}, 3)

	// Divider animation on scroll

	MorphSVGPlugin.convertToPath("rect");

	var divider = document.querySelector("#divider .divider")
	var controller = new ScrollMagic.Controller();
	var tween = gsap.to(divider, {morphSVG: ".divider-curve", ease: "power1.in"})

	var scene = new ScrollMagic.Scene({triggerElement: '#divider', duration: 500})
	.setTween(tween)
	.addTo(controller)

	var divider2 = document.querySelector("#divider2 .divider")
	var controller2 = new ScrollMagic.Controller();
	var tween2 = gsap.to(divider2, {morphSVG: ".divider-curve", ease: "power1.in"})

	var scene2 = new ScrollMagic.Scene({triggerElement: '#divider2', duration: 500})
	.setTween(tween2)
	.addTo(controller2)

	// Divider draw and fill animation on scroll

	var dividerline = document.querySelector("#divider-alt #line")
	var dividerline2 = document.querySelector("#divider-alt2 #line")
	var dividerbg = document.querySelector("#divider-alt #bg")
	var fillanimation = document.querySelector(".fill-animation")
	var controller3 = new ScrollMagic.Controller();

	var tl2 = gsap.timeline()

	tl2
	.fromTo(dividerline, {autoAlpha: 0, drawSVG: "0% 0%"}, {duration: 1, autoAlpha: 1, drawSVG: "0% 100%"}, 0)
	.fromTo(dividerline2, {autoAlpha: 0, drawSVG: "0% 0%"}, {duration: 1, autoAlpha: 1, drawSVG: "0% 100%"}, 1)
	.to(dividerbg, {duration: 1, fill: "#F6F9FC"}, 2)
	.to(fillanimation, {duration: 1, css: {backgroundColor: "#F6F9FC"}}, 2)

	var scene3 = new ScrollMagic.Scene({triggerElement: '#divider-alt', duration: 700})
	.setTween(tl2)
	.addTo(controller3)

});