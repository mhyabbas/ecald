$(function() {

	// Search toggle
	
	$("#search-toggle").click(function(e){
		e.preventDefault();
		$(".nav .top-nav li.item").addClass("hide");
	});

	$("#search a").click(function(e){
		e.preventDefault();
		$(".nav .top-nav li.item").removeClass("hide");
	});

});