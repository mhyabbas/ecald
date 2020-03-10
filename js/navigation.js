$(function() {
	$(".toggle a").on("click", function(e) {
		e.preventDefault();
		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(this).html("<i class='material-icons'>menu</i> <span>Menu</span>");
		} else {
			$(".item").addClass("active");
			$(this).html("<i class='material-icons'>close</i> <span>Menu</span>");
		}
	});
});