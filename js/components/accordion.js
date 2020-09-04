$(document).ready(function() {
	
	$(".accordion .button").on("click", function(e) {
		e.preventDefault();
		e.stopPropagation();
		if ($(this).hasClass("active")) {
			$(".button").removeClass("active");
			$(".panel").slideUp();
		} else {
			$(".button").removeClass("active");
			$(this).addClass("active");
			$(".panel").slideUp();
			$(this).next(".panel").slideDown();
		}
	});

});