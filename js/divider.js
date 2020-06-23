$(document).ready(function() {

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

});