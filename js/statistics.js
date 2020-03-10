$(document).ready(function(){

	// Init count
	var visitor = new CountUp("visitor-count", 0, 2774);
	var country = new CountUp("country-count", 0, 159);
	var subscriber = new CountUp("subscriber-count", 0, 12768);

	// Trigger count on scroll
	var controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({triggerElement: "#visitor-count", triggerHook: 1})
	.addTo(controller)
	.on("start", function () {
		visitor.start();
	});

	new ScrollMagic.Scene({triggerElement: "#country-count", triggerHook: 1})
	.addTo(controller)
	.on("start", function () {
		country.start();
	});

	new ScrollMagic.Scene({triggerElement: "#subscriber-count", triggerHook: 1})
	.addTo(controller)
	.on("start", function () {
		subscriber.start();
	});

});