$(document).ready(function() {

    $('.search select').each(function() {

        if($(this).length) {
            if($(this).children('option:first').val() == 'Clear') {

                var attr = $(this).attr('placeholder');
                $(this).parent().addClass("has-clear");

                $(this).multipleSelect({
                    selectAll: false,
                    ellipsis: true,
                    onClick: function () {
                        var count = $("[placeholder='" + attr + "'] + .ms-parent li.selected").length;
                        $("[placeholder='" + attr + "'] + .ms-parent li:first-of-type label").attr('data-before', count + ' selected');
                    }
                });

                $(this).parent().find(".ms-parent li:first-of-type label").attr('data-before', '0 selected');

                $(this).parent().find("input[value='Clear']").click(function(){
                    $("[placeholder='" + attr + "']").multipleSelect('uncheckAll');
                    $("[placeholder='" + attr + "'] + .ms-parent li:first-of-type label").attr('data-before', '0 selected');
                });

            } else {
                $(this).multipleSelect();
            }
        }

    })

});