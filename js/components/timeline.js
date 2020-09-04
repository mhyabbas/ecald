$(document).ready(function() {

	var controller = new ScrollMagic.Controller();
	var event = Array.prototype.slice.call(document.querySelectorAll(".timeline .event"));
	var self = this;

	event.forEach(function(self) {

		var detail = self.querySelectorAll(".content .detail");
		var img = self.querySelectorAll(".thumbnail img");
		var circle = self.querySelectorAll(".content svg.circle circle");

		var tl = gsap.timeline();

		tl
		.from(detail, {duration: .5, autoAlpha: 0, y: 40, ease: "power1.out"}, "0")
		.from(img, {duration: .5, autoAlpha: 0, x: -40, ease: "power1.out"}, "0")
		.fromTo(circle, {drawSVG: "0% 0%"}, {duration: .2, drawSVG: "0% 100%"}, "0")
		.to(circle, {duration: .2, fill:"#334154", ease: "power1.out"}, "0.2")
		.call(function() {
			$(self).find(".content").toggleClass("active");
		}, null, null, "0");

		var scene = new ScrollMagic.Scene({triggerElement: self, triggerHook: 'onEnter', offset: 100, duration: 300})
		.setTween(tl)
		.setClassToggle(self, "active")
		.addTo(controller);

	});

});