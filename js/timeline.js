$(document).ready(function() {

	var controller = new ScrollMagic.Controller();
	var event = Array.prototype.slice.call(document.querySelectorAll(".timeline .event"));
	var self = this;

	event.forEach(function(self) {

		var h2 = self.querySelectorAll(".content h2");
		var p = self.querySelectorAll(".content p");
		var img = self.querySelectorAll(".thumbnail img");
		var circle = self.querySelectorAll(".content svg.circle circle");
		var border = self.querySelectorAll(".content svg.border line");

		var tl = gsap.timeline();

		tl
		.from(h2, {duration: .5, autoAlpha: 0, y: 40, ease: "power1.out"}, "0")
		.from(p, {duration: .5, autoAlpha: 0, y: 40, ease: "power1.out"}, "0.2")
		.from(img, {duration: .5, autoAlpha: 0, x: -40, ease: "power1.out"}, "0")
		.fromTo(circle, {drawSVG: "0% 0%"}, {duration: .2, drawSVG: "0% 100%"}, "0")
		.to(circle, {duration: .2, fill:"#334154", ease: "power1.out"}, "0.2")
		.fromTo(border, {drawSVG: "0% 0%"}, {duration: .3, drawSVG: "0% 100%"}, "0.2")

		// var scene = new ScrollMagic.Scene({triggerElement: self, triggerHook: 'onEnter', offset: 100, duration: 400})
		var scene = new ScrollMagic.Scene({triggerElement: self, triggerHook: 'onEnter', offset: 100, reverse: false})
		.setTween(tl)
		.setClassToggle(self, "active")
		.addTo(controller);

	});

});