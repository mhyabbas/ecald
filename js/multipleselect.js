$(document).ready(function() {

    if($('.search select').length) {
        $(function () {
            $(".search select").multipleSelect({
                selectAll: false,
                ellipsis: true,
                onClick: function () {
                    var count = $("#search-comp + .ms-parent li.selected").length;
                    $("#search-comp + .ms-parent li:first-of-type label").attr('data-before', count + ' selected');
                }
            });

            $("#search-comp + .ms-parent li:first-of-type label").attr('data-before', '0 selected'); 

            $("input[value='Clear']").click(function(){
                $("#search-comp").multipleSelect('uncheckAll');
                $("#search-comp + .ms-parent li:first-of-type label").attr('data-before', '0 selected');  
            });
        })
    }

});