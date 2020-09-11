$(document).ready(function() {

	// Fade up animation on scroll

	if($('.fade-up').length) {

		var controller = new ScrollMagic.Controller();
		var card = Array.prototype.slice.call(document.querySelectorAll(".fade-up"));
		var self = this;

		card.forEach(function(self) {

			var fadetween = gsap.from(self, {duration: 1.5, autoAlpha: 0, y: 20, ease: "back.out(4)"});

			var fadescene = new ScrollMagic.Scene({triggerElement: self, triggerHook: 'onEnter', offset: 200, reverse: false})
			.setTween(fadetween)
			.setClassToggle(self, "active")
			.addTo(controller)

		});

	}

});