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

	gsap.set('circle', {transformOrigin: 'center center'});

	var $circle = $('circle');

	$circle.each(function(index) {
		gsap.fromTo(this, { scale: 1, opacity: 0.9 }, {duration: 2, scale: 1.1, opacity: 1, ease: Back.easeOut, delay: index/9, yoyo: true, repeat: -1 });
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