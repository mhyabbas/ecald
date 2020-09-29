$(document).ready(function() {

	// Banner wave animation
	
	if($('.wave1').length) {
		var wave = document.querySelector(".wave1 path")
		var wave2 = document.querySelector(".wave2 path")
		var wave3 = document.querySelector(".wave3 path")

		var tl = gsap.timeline({repeat: -1, yoyo: true})

		tl
		.to(wave, {duration: 5, morphSVG: ".wave-morph1 path", ease: "power1.inOut"}, 0)
		.to(wave2, {duration: 7, morphSVG: ".wave-morph2 path", ease: "power1.inOut"}, 0)
		.to(wave3, {duration: 9, morphSVG: ".wave-morph3 path", ease: "power1.inOut"}, 0);
	}

	// Banner circle animation

	if($('#circles').length) {
		gsap.set('#circles circle', {transformOrigin: 'center center'});

		var $circle = $('#circles circle');

		$circle.each(function(index) {
			gsap.fromTo(this, { scale: 1 }, {duration: 2, scale: 1.1, ease: Back.easeOut, delay: index/9, yoyo: true, repeat: -1 });
		})
	}

	// Banner text draw animation

	if($('#letters').length) {
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
	}

	// Banner timeline animation

	if($('#timeline').length) {
		var line = $("#timeline #line");
		var c1 = $('#timeline circle.tl1');
		var c2 = $('#timeline circle.tl2');
		var c3 = $('#timeline circle.tl0');

		gsap.set(c1, {autoAlpha: 0, transformOrigin: 'center center'});
		gsap.set(c2, {autoAlpha: 0, transformOrigin: 'center center'});
		gsap.set(c3, {autoAlpha: 0, transformOrigin: 'center center'});

		var timelinetl = gsap.timeline({repeat: -1, yoyo: true});

		timelinetl
		.fromTo(line, {drawSVG: "0% 0%"}, {duration: 1, drawSVG: "0% 100%"}, 0)
		.fromTo(c1, {scale: 0 }, {duration: 1, autoAlpha: 1, scale: 1, stagger: 0.2}, 1)
		.fromTo(c2, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1, stagger: 0.2}, 1.5)
		.fromTo(c3, {scale: 0.4 }, {duration: .5, autoAlpha: 1, scale: 1, stagger: 0.2}, 2)
	}

	// Banner celebration timeline animation

	if($('#balloons').length) {
		function random(num) {
			return Math.floor(Math.random()*num)
		}
		var headerHeight = $("header").outerHeight();

		function createBalloons(num) {
			var balloons = $("#balloons");
			var balloon = $("#balloon");

			for (var i = num; i > 0; i--) {
				var top = headerHeight;
				newBalloon = balloon.clone().removeAttr('id');
				newBalloon.css({"top": top});
				balloons.prepend(newBalloon);
			}
		}

		function createBalloonBunch(num) {
			var balloons = $("#balloons");
			var balloonBunch = $("#balloonBunch");

			for (var i = num; i > 0; i--) {
				var top = headerHeight;
				newBalloonBunch = balloonBunch.clone().removeAttr('id');
				newBalloonBunch.css({"top": top});
				balloons.prepend(newBalloonBunch);
			}
		}

		createBalloons(10);
		createBalloonBunch(5);

		setTimeout(function(){
			if($('#balloons').length) {
				// Variables
				var yMove = -(headerHeight + 500);
				var $balloon = $('#balloons .balloon');
				var $balloonBunch = $('#balloons .balloonBunch');
				var b1 = $(".balloon1"), b2 = $(".balloon2"), b3 = $(".balloon3"), b4 = $(".balloon4"), b5 = $(".balloon5");

				// Single balloon animation
				gsap.set($balloon, {x:"random(0, 1400, 140)"});

				gsap.to($balloon, {
					duration: 12,
					y: yMove,
					stagger: {
						each: 1,
						from: "random",
						repeat: -1
					}
				});

				// Balloon bunch animation
				gsap.set($balloonBunch, {x:"random(0, 1400, 240)"});

				gsap.to($balloonBunch, {
					duration: 10,
					y: yMove,
					stagger: {
						each: 2,
						from: "random",
						repeat: -1
					}
				});

				var tl = gsap.timeline({repeat: -1, yoyo:true});
				gsap.set(b1, {transformOrigin: 'center bottom'});
				gsap.set(b2, {transformOrigin: 'center bottom'});
				gsap.set(b3, {transformOrigin: 'center bottom'});
				gsap.set(b4, {transformOrigin: 'center bottom'});
				gsap.set(b5, {transformOrigin: 'center bottom'});

				tl
				.to(b1, {duration: 2, rotation: 3, ease: "power1.inOut"}, 0)
				.to(b1, {duration: 2, rotation: -3, ease: "power1.inOut"}, 2)
				.to(b2, {duration: 2, rotation: -3, ease: "power1.inOut"}, 1)
				.to(b2, {duration: 2, rotation: 0, ease: "power1.inOut"}, 3)
				.to(b3, {duration: 2, rotation: 3, ease: "power1.inOut"}, 0)
				.to(b3, {duration: 2, rotation: 1, ease: "power1.inOut"}, 2)
				.to(b4, {duration: 2, rotation: 3, ease: "power1.inOut"}, 1)
				.to(b4, {duration: 2, rotation: 1, ease: "power1.inOut"}, 3)
				.to(b5, {duration: 2, rotation: 2, ease: "power1.inOut"}, 0)
				.to(b5, {duration: 2, rotation: 2, ease: "power1.inOut"}, 2)
			}
		}, 10);
	}

	// Banner slide and fade animation

	if($('.slide-in').length) {
		var slidetl = gsap.timeline();
		
		slidetl
		.from(".slide-in", {duration: 0.7, autoAlpha:0, x: -100, ease: "power1.inOut"}, 0)
	}

	if($('.fade-in').length) {
		var fadetl = gsap.timeline();
		
		fadetl
		.from(".fade-in", {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.7)
	}

	// Banner SVG icon animation

	if($('#hand').length) {
		var hand = document.querySelector("#hand")
		var star1 = document.querySelector("#star1")
		var star2 = document.querySelector("#star2")
		var star3 = document.querySelector("#star3")

		var icontl = gsap.timeline({repeat: -1, repeatDelay: 1})

		icontl
		.from(hand, {duration: 1.2, x: -60, ease: "power1.inOut"}, 0)
		.from(star1, {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.3)
		.from(star2, {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.6)
		.from(star3, {duration: 0.3, autoAlpha:0, ease: "power1.inOut"}, 0.9);
	}

});