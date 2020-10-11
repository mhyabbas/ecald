$(document).ready(function(){

	// Carousel

	var options = {
		arrows: true,
		speed: 500,
		prevArrow: '<a class="btn arrow white prev" href=""><i class="material-icons">&#xe5c4;</i></a>', 
		nextArrow: '<a class="btn arrow white next" href=""><i class="material-icons">&#xe5c8;</i></a>'
	};

	if($('.carousel .card').length > 1) {
		options.dots = true;
	}

	$('.carousel').slick(options);

	// Carousel - Full width with bleeding

	var fulloptions = {
		autoplay: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		speed: 500,
		prevArrow: '<a class="btn arrow prev" href=""><i class="material-icons">&#xe5c4;</i></a>', 
		nextArrow: '<a class="btn arrow next" href=""><i class="material-icons">&#xe5c8;</i></a>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 700,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 1
			}
		}
		]
	};

	if($('.carousel-full .card').length > 1) {
		fulloptions.dots = true;
	}

	$('.carousel-full').slick(fulloptions);

});