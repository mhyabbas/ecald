$(function() {

	// Search toggle
	
	$("#search-toggle").click(function(e){
		e.preventDefault();
		$(".top-nav li.item").hide();
	});

	$("#search a").click(function(e){
		e.preventDefault();
		$(".top-nav li.item").show();
	});

});