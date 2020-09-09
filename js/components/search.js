$(document).ready(function() {

    // Clear button

    $(".has-clear input").after("<i class='material-icons'>&#xe5cd;</i>");

    $(".has-clear").each(function() {
        var $input = $(this).find("input")
        var $clear = $(this).find("i");

        $input.on("input", function(){
            $clear.toggle(!!this.value);
        });
      
        $clear.on("touchstart click", function(e) {
            e.preventDefault();
            $input.val("").trigger("input");
        });
    });

    // Mulitple Select and clear button

    $('.search select').each(function() {
        if($(this).length) {

            var attr = $(this).attr('placeholder');

            $(this).multipleSelect({
                showClear: true,
                selectAll: false,
                minimumCountSelected: 3,
                onClick: function () {
                    var count = $("[placeholder='" + attr + "'] + .ms-parent li.selected").length;
                    if (count > 0) {
                        $("[placeholder='" + attr + "'] + .ms-parent").find(".icon-close").show();
                    } else {
                        $("[placeholder='" + attr + "'] + .ms-parent").find(".icon-close").hide();
                    }
                },
                formatCountSelected: function (count) {
                    return count + " selected";
                }
            });

            $(this).parent().find(".icon-close").append("<i class='material-icons'>&#xe5cd;</i>");

            $(this).parent().find(".icon-close").click(function(e) {
                e.stopPropagation();
                $(this).hide();
            })
        }
    });

});