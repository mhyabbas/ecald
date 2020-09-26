$(document).ready(function() {

	// Divider animation on scroll
	if($('#divider').length) {
		MorphSVGPlugin.convertToPath("rect");
		var divider = document.querySelector("#divider .divider")
		var controller = new ScrollMagic.Controller();
		var tween = gsap.to(divider, {morphSVG: ".divider-curve", ease: "power1.in"})

		var scene = new ScrollMagic.Scene({triggerElement: '#divider', duration: 500})
		.setTween(tween)
		.addTo(controller)
	}

	if($('#divider2').length) {
		MorphSVGPlugin.convertToPath("rect");
		var divider2 = document.querySelector("#divider2 .divider")
		var controller2 = new ScrollMagic.Controller();
		var tween2 = gsap.to(divider2, {morphSVG: ".divider-curve", ease: "power1.in"})

		var scene2 = new ScrollMagic.Scene({triggerElement: '#divider2', duration: 500})
		.setTween(tween2)
		.addTo(controller2)
	}

	// Divider draw and fill animation on scroll

	if($('#divider-alt').length) {
		MorphSVGPlugin.convertToPath("rect");
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
	}

});