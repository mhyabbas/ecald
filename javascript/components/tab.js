$(document).ready(function() {

	// Tab dropdown
	$('.tabs svg').click(function() {
		$(this).parent().toggleClass('active');
	});

	$('.tab-list').click(function() {
		$(this).parent().toggleClass('active');
	});

	// Tab panels

	$('.tab-list li').click(function(){
		$('li').removeClass('active');
		$(this).addClass('active');

		var tablist = $(".tab-list li");
		var tabpanels = $(".tab-panel");

		tablist.each(function(index) {
			var element = $(this);

			if ($(this).hasClass("active")) {
				tabpanels.eq([index]).css("height", "auto").css("overflow", "auto");
			} else {
				tabpanels.eq([index]).css("height", 0).css("overflow", "hidden");
			}
		});
	});
});