$(function() {

	// Burger menu toggle

	$(".toggle a").on("click", function(e) {
		e.preventDefault();
		if ($(".nav").hasClass("active")) {
			$(".nav").removeClass("active");
		} else {
			$(".nav").addClass("active");
		}

		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(this).html("<i class='material-icons'>menu</i> <span>Menu</span>");
		} else {
			$(".item").addClass("active");
			$(this).html("<i class='material-icons'>close</i> <span>Menu</span>");
		}
	});

	// Mobile navigation
	
	$(".main-nav ul li").on("click", function(e) {
		e.preventDefault();
		if ($(this).hasClass("current")) {
			$(".item").removeClass("current");
		} else {
			$(".item").removeClass("current");
			$(this).addClass("current");
		}
	});

	// Search toggle
	
	$("#search-toggle").click(function(e){
		e.preventDefault();
		$("#search").addClass("show");
		$(".nav > ul > li.item").addClass("hide");
		setTimeout(function() {$("#search input").focus();}, 400);
	});

	$("#search a").click(function(e){
		e.preventDefault();
		$("#search").removeClass("show");
		$(".nav > ul > li.item").removeClass("hide");
	});

});