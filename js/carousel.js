$(document).ready(function(){

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
});