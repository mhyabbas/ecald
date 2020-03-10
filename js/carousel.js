$(document).ready(function(){
	$('.carousel').slick({
		arrows: true,
		dots: true,
		speed: 500,
		prevArrow: '<a class="btn arrow white prev" href=""><i class="material-icons">arrow_back</i></a>', 
		nextArrow: '<a class="btn arrow white next" href=""><i class="material-icons">arrow_forward</i></a>'
	});
});