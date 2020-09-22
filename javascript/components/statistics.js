$(document).ready(function(){

	var statistics = $(".statistic .count");
	statistics.each(function(index) {
		var elm = $(this);
		var count = $(this).attr('data-count');
		var countUp = new CountUp(statistics[index], 0, count);

		// Trigger count on scroll
		var controller = new ScrollMagic.Controller();
		new ScrollMagic.Scene({triggerElement: '.statistics', triggerHook: 1})
			.addTo(controller)
			.on("start", function () {
			countUp.start();
		});
	});

});