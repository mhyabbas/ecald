$(function() {

	// Burger menu toggle

	$(".toggle a").on("click", function(e) {
		e.preventDefault();
		if ($(".nav").hasClass("active")) {
			$(".nav").removeClass("active");
			$("body").removeClass("nav-open");
		} else {
			$(".nav").addClass("active");
			$("body").addClass("nav-open");
		}

		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(this).html("<i class='material-icons'>&#xe5d2;</i> <span>Menu</span>");
		} else {
			$(".item").addClass("active");
			$(this).html("<i class='material-icons'>&#xe5cd;</i> <span>Menu</span>");
		}
	});

	// Mobile navigation
	
	$(".main-nav ul li a svg").on("click", function(e) {
		e.preventDefault();
		if ($(this).parent().parent().hasClass("current")) {
			$(".item").removeClass("current");
		} else {
			$(".item").removeClass("current");
			$(this).parent().parent().addClass("current");
		}
	});

	// Search toggle
	
	// $("#search-toggle").click(function(e){
	// 	e.preventDefault();
	// 	$("#search").addClass("show");
	// 	$(".nav > ul > li.item").addClass("hide");
	// 	setTimeout(function() {$("#search input").focus();}, 400);
	// });

	// $("#search a").click(function(e){
	// 	e.preventDefault();
	// 	$("#search").removeClass("show");
	// 	$(".nav > ul > li.item").removeClass("hide");
	// });

});