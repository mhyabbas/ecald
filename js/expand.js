$(document).ready(function() {

	$(".expand a").click(function(e) {
		e.preventDefault();
		parent = $(this).parent().parent().parent();
		parent.find(".panel-hide").fadeIn();
		$(this).parent().fadeOut();
	});

});