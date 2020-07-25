$(document).ready(function() {

	// Header wave animation
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

	// Header circle animation

	if($('#circles').length) {
		gsap.set('circle', {transformOrigin: 'center center'});

		var $circle = $('circle');

		$circle.each(function(index) {
			gsap.fromTo(this, { scale: 1, opacity: 0.9 }, {duration: 2, scale: 1.1, opacity: 1, ease: Back.easeOut, delay: index/9, yoyo: true, repeat: -1 });
		})
	}

	// Header text draw animation

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

	// Slide and Fade animation

	var slideincontroller = new ScrollMagic.Controller();
	var fadeincontroller = new ScrollMagic.Controller();
	var slidein = Array.prototype.slice.call(document.querySelectorAll(".slide-in"));
	var fadein = Array.prototype.slice.call(document.querySelectorAll(".fade-in"));
	var self = this;

	slidein.forEach(function(self) {

		var slideintween = gsap.from(self, {duration: 0.7, autoAlpha:0, x: -100, ease: "power1.inOut"});

		var slideinscene = new ScrollMagic.Scene({triggerElement: self, triggerHook: 'onEnter', reverse: false})
		.setTween(slideintween)
		.setClassToggle(self, "active")
		.addTo(slideincontroller)

	});

	fadein.forEach(function(self) {

		var fadeintween = gsap.from(self, {duration: 0.3, autoAlpha:0, delay:0.7, ease: "power1.inOut"});

		var fadeinscene = new ScrollMagic.Scene({triggerElement: self, triggerHook: 'onEnter', reverse: false})
		.setTween(fadeintween)
		.setClassToggle(self, "active")
		.addTo(fadeincontroller)

	});

	// SVG icon animation

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

	// Search filter

	$(function () {
		$(".search select").multipleSelect({
			selectAll: false,
			ellipsis: true,
			onClick: function () {
				var count = $("#search-comp + .ms-parent li.selected").length;
				$("#search-comp + .ms-parent li:first-of-type label").attr('data-before', count + ' selected');
			}
		});

		$("#search-comp + .ms-parent li:first-of-type label").attr('data-before', '0 selected'); 

		$("input[value='Clear']").click(function(){
			$("#search-comp").multipleSelect('uncheckAll');
			$("#search-comp + .ms-parent li:first-of-type label").attr('data-before', '0 selected');  
		});

	})

});