$(function() {
	$(".toggle").on("click", function() {
		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(this).find("a").html("<i class='material-icons'>menu</i> <span>Menu</span>");
		} else {
			$(".item").addClass("active");
			$(this).find("a").html("<i class='material-icons'>close</i> <span>Menu</span>");
		}
	});
});