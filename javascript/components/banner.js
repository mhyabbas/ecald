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

	// Banner CALD text draw animation

	if($('#cald-letters').length) {
		var c_out = document.querySelector("#cald-letters #c-out")
		var c_in = document.querySelector("#cald-letters #c-in")
		var a1 = document.querySelector("#cald-letters #a1")
		var a2 = document.querySelector("#cald-letters #a2")
		var a3 = document.querySelector("#cald-letters #a3")
		var l_out = document.querySelector("#cald-letters #l-out")
		var l_in = document.querySelector("#cald-letters #l-in")
		var d_out = document.querySelector("#cald-letters #d-out")
		var d_in = document.querySelector("#cald-letters #d-in")

		var drawtl = gsap.timeline({repeat: -1, yoyo: true});

		drawtl
		.fromTo(c_out, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(c_in, {drawSVG: "100% 100%"}, {duration: 7, drawSVG: "0% 100%"}, 0.5)
		.fromTo(a1, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(a2, {drawSVG: "100% 100%"}, {duration: 7, drawSVG: "0% 100%"}, 0.5)
		.fromTo(a3, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(l_out, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(l_in, {drawSVG: "100% 100%"}, {duration: 7, drawSVG: "0% 100%"}, 0.5)
		.fromTo(d_out, {drawSVG: "0% 0%"}, {duration: 7, drawSVG: "0% 100%"}, 0)
		.fromTo(d_in, {drawSVG: "100% 100%"}, {duration: 7, drawSVG: "0% 100%"}, 0.5)
	}

	// Banner line pattern animation

	if($('#line-pattern').length) {
		var p1 = $("#pattern1 path");
		var p2 = $("#pattern2 path");
		var p3 = $("#pattern3 line");

		var tl = gsap.timeline({repeat: -1, yoyo: true});

		tl
		.fromTo(p1, {drawSVG: "0% 0%"}, {duration: 5, drawSVG: "0% 100%", stagger: 0.4}, 1)
		.fromTo(p2, {drawSVG: "100% 100%"}, {duration: 6, drawSVG: "0% 100%", stagger: 0.4}, 0)
		.fromTo(p3, {drawSVG: "100% 100%"}, {duration: 2, drawSVG: "0% 100%", stagger: 0.5}, 1)
	}

	// Banner topographic animation

	if($('#topographic').length) {
		var a1 = document.querySelector("#a1-start")
		var a2 = document.querySelector("#a2-start")
		var a3 = document.querySelector("#a3-start")
		var b1 = document.querySelector("#b1-start")
		var b2 = document.querySelector("#b2-start")
		var b3 = document.querySelector("#b3-start")
		var b4 = document.querySelector("#b4-start")
		var c1 = document.querySelector("#c1-start")
		var c2 = document.querySelector("#c2-start")

		var tl = gsap.timeline({repeat: -1, yoyo: true})

		tl
		.to(a1, {duration: 5, morphSVG: "#a1-end", ease: "power1.inOut"}, 0)
		.to(a2, {duration: 5, morphSVG: "#a2-end", ease: "power1.inOut"}, 1)
		.to(a3, {duration: 5, morphSVG: "#a3-end", ease: "power1.inOut"}, 2)
		.to(b1, {duration: 5, morphSVG: "#b1-end", ease: "power1.inOut"}, 0)
		.to(b2, {duration: 5, morphSVG: "#b2-end", ease: "power1.inOut"}, 1)
		.to(b3, {duration: 5, morphSVG: "#b3-end", ease: "power1.inOut"}, 2)
		.to(b4, {duration: 5, morphSVG: "#b4-end", ease: "power1.inOut"}, 3)
		.to(c1, {duration: 5, morphSVG: "#c1-end", ease: "power1.inOut"}, 0)
		.to(c2, {duration: 5, morphSVG: "#c2-end", ease: "power1.inOut"}, 1)
	}

	// Banner flax animation

	if($('#flax').length) {
		var $f1 = $(".1-slantdown line");
		var $f2 = $(".2-slantup line");
		var $f3 = $(".3-slantdown line");
		var $f4 = $(".4-slantup line");
		var $f5 = $(".5-slantdown line");
		var $f6 = $(".6-slantup line");
		var $f7 = $(".7-slantdown line");
		var $f8 = $(".8-slantup line");

		var tl = gsap.timeline({repeat: -1, yoyo: true});

		tl
		.fromTo($f1, {drawSVG: "50% 50%"}, {duration: 3, drawSVG: "0% 100%"}, 0)
		.fromTo($f2, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 1)
		.fromTo($f3, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 2)
		.fromTo($f4, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 3)
		.fromTo($f5, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 4)
		.fromTo($f6, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 5)
		.fromTo($f7, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 6)
		.fromTo($f8, {drawSVG: "0% 0%"}, {duration: 3, drawSVG: "0% 100%"}, 7)
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

	// Banner celebration animation

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
			gsap.set(b1, {transformOrigin: 'center 96%'});
			gsap.set(b2, {transformOrigin: 'center 96%'});
			gsap.set(b3, {transformOrigin: 'center 96%'});
			gsap.set(b4, {transformOrigin: 'center 96%'});
			gsap.set(b5, {transformOrigin: 'center 96%'});

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
		}, 10);
	}

	// Banner fireworks animation

	if($('#fireworks').length) {
		var headerHeight = $("header").outerHeight();

		function createFireworks(num) {
			var fireworks = $("#fireworks");
			var firework = $("#firework");

			for (var i = num; i > 0; i--) {
				newFirework = firework.clone().removeAttr('id');
				fireworks.prepend(newFirework);
			}
		}

		createFireworks(12);

		setTimeout(function(){
			var $firework = $('#fireworks .firework');
			$firework.css("display","block");

			gsap.set($firework, {x:"random(0, 1400, 200)",y:"random(-200, 200, 50)"});

			$firework.each(function(index) {
				var fireworkLine = this.querySelectorAll("line");

				var tl = gsap.timeline({delay:index,repeat:-1,repeatDelay:8});
				gsap.set(fireworkLine, {autoAlpha:0});

				tl
				.fromTo(fireworkLine, {drawSVG: "0% 0%"}, {duration: 1.5, autoAlpha: 1, drawSVG: "0% 100%", ease: "power2.in"}, 0)
				.fromTo(fireworkLine, {drawSVG: "0% 100%"}, {duration: .5, drawSVG: "99% 100%"}, 1)
				.to(fireworkLine, {duration: 3, y: 40, autoAlpha:0}, 1.5)
			})
		}, 10);
	}

	// Banner fireworks alternate animation
	if($('#fireworks2').length) {
		var headerHeight = $("header").outerHeight();

		function createFireworks(num) {
			var fireworks = $("#fireworks2");
			var firework = $("#firework2");

			for (var i = num; i > 0; i--) {
				newFirework = firework.clone().removeAttr('id');
				fireworks.prepend(newFirework);
			}
		}

		createFireworks(12);

		setTimeout(function(){
			var $firework = $('#fireworks2 .firework2');
			$firework.css("display","block");

			gsap.set($firework, {x:"random(-200, 1400, 50)",y:"random(-200, 200, 50)",scale:"random(0.4, 1.2, .4)"});

			$firework.each(function(index) {
				var fireworkLine = this.querySelectorAll('.fw0');

				var tl = gsap.timeline({delay:index,repeat:-1,repeatDelay:4});
				gsap.set(fireworkLine, {autoAlpha:0});

				tl
				.fromTo(fireworkLine, {drawSVG: "0% 0%"}, {duration: 1.5, autoAlpha: 1, drawSVG: "0% 100%", ease: "power2.in"}, 0)
				.fromTo(fireworkLine, {drawSVG: "0% 100%"}, {duration: .5, drawSVG: "99% 100%"}, 1)
				.to(fireworkLine, {duration: 3, y: 40, autoAlpha:0}, 1.5)
			})
		}, 10);
	}

	// Banner fairy lights animation

	if($('#lights').length) {
		var $lights = $('#lights .fl1:not(.ebulb)');
		var e1 = $('#lights #e1');
		var e2 = $('#lights #e2');
		var e3 = $('#lights #e3');
		var ebulb1 = $('#lights #ebulb1');
		var ebulb2 = $('#lights #ebulb2');
		var ebulb3 = $('#lights #ebulb3');

		gsap.set($lights, {autoAlpha:0.3});
		gsap.set(e1, {autoAlpha:0});
		gsap.set(e2, {autoAlpha:0});
		gsap.set(e3, {autoAlpha:0});
		gsap.set(ebulb1, {autoAlpha:0.05});
		gsap.set(ebulb2, {autoAlpha:0.05});
		gsap.set(ebulb3, {autoAlpha:0.05});

		var tl = gsap.timeline({repeat: -1, yoyo:true});
		
		tl
		.to(e1, {duration:1.5, autoAlpha:0.8}, 0)
		.to(ebulb1, {duration:1.5, autoAlpha:0.3}, 0)
		.to(e2, {duration:1.5, autoAlpha:0.8}, 3)
		.to(ebulb2, {duration:1.5, autoAlpha:0.3}, 3)
		.to(e3, {duration:1.5, autoAlpha:0.8}, 6)
		.to(ebulb3, {duration:1.5, autoAlpha:0.3}, 6)

		gsap.to($lights, {
			duration: 1.5,
			autoAlpha: 0.05,
			stagger: {
				each: 1,
				from: "random",
				yoyo: true,
				repeat: -1
			}
		})
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