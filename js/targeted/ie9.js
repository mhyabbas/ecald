$(function() {

	// Search toggle
	
	$("#search-toggle").click(function(e){
		e.preventDefault();
		$(".nav .top-nav li.item").addClass("hide");
	});

	$("#search a").click(function(e){
		e.preventDefault();
		$(".nav .top-nav li.item").removeClass("hide");
	});

	// Header timeline animation

	if($('#timeline').length) {
		var line = $("#timeline #line")
		var c1 = $('#timeline circle.tl1');
		var c2 = $('#timeline circle.tl2');
		var c3 = $('#timeline circle.tl0');
		var c4 = $('#timeline path.tl1');

		gsap.set(c1, {transformOrigin: 'center center'});
		gsap.set(c2, {transformOrigin: 'center center'});
		gsap.set(c3, {transformOrigin: 'center center'});
		gsap.set(c4, {transformOrigin: 'center center'});

		var timelinetl = gsap.timeline({repeat: -1, yoyo: true});

		timelinetl
		.fromTo(line, {drawSVG: "0% 0%"}, {duration: 1, drawSVG: "0% 100%"}, 0)
		.fromTo(c1, {autoAlpha: 0, scale: 0 }, {duration: 1, autoAlpha: 1, scale: 1}, 1)
		.fromTo(c2, {autoAlpha: 0, scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1}, 1.5)
		.fromTo(c3, {autoAlpha: 0, scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1}, 2)
		.fromTo(c4, {autoAlpha: 0, scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1}, 2.5)
	}

});