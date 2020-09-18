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

    // Date picker and clear button

    if($('input.date').length) {
        $("input.date").datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            onSelectDate:function(dp,$input){
                $input.next("i").show();
            }
        });
    }

    // Calendar search filter

    var $items = $('.card.calendar'); // find the calendar items
    var $allFilters = $('[data-filter]'); // get all filter types
    var count = $allFilters.length;

    var filtersActive = new Array(count); // an array to store the active filters
    for (var i = 0; i < filtersActive.length; i++) {
        filtersActive[i] = new Array();
    }

    $allFilters.each(function(index) { // loop through each filter type
        var filterName = $(this).attr('data-filter'); // get filter type name
        var $filters = $(this).find('.ms-parent .ms-drop li input'); // find the filters
        var clear = $(this).find('.ms-parent').find("i"); // clear filters
        var filter, filterData; // declare a variable to store the filter and one for the data to filter by

        $filters.click(function() { // if filters are clicked
            filter = $(this);
            filterData = filter.val(); // read filter value
            setFilter();
            applyFilter();
        });

        clear.click(function() { // clear filters
            filtersActive[index] = [];
            removeActiveFilter(filterName + "-" + filterData);
            applyFilter();
        });

        function setFilter() { // add/remove filters from active filter array
            if (filter.parent().parent().hasClass('selected')) {
                filtersActive[index].push(filterName + "-" + filterData);
            } else {
                removeActiveFilter(filterName + "-" + filterData);
            }
        }

        // remove deselected filters from the ActiveFilter array
        function removeActiveFilter(item) {
            var i = filtersActive[index].indexOf(item);
            if (i > -1) {
                filtersActive[index].splice(i, 1);
            }
        }
    });

    function applyFilter() { // go through all calendar items and hide/show
        $items.each(function(){
            var courseFilter = $(this).attr("data-course");
            var monthFilter = $(this).attr("data-month");

            // Check if active filter array is empty
            var isEmpty = filtersActive.every(function(a) { return !a.length });

            if (isEmpty) { // show all items if active filter is empty
                showItem($items);
            } else if (filtersActive[0].length > 0 && filtersActive[1].length > 0) { // if both filters are active
                if (filtersActive[0].indexOf("course-" + courseFilter) > -1 && filtersActive[1].indexOf("month-" + monthFilter) > -1) {
                    if($(this).is(':visible')) {
                        showExistingItem($(this));
                    } else {
                        showItem($(this));
                    }
                } else {
                    hideItem($(this));
                }
             } else if (filtersActive[0].length > 0 && filtersActive[1].length == 0) { // if only course filter is active
                if (filtersActive[0].indexOf("course-" + courseFilter) > -1) {
                    if($(this).is(':visible')) {
                        showExistingItem($(this));
                    } else {
                        showItem($(this));
                    }
                } else {
                    hideItem($(this));
                }
             } else if (filtersActive[0].length == 0 && filtersActive[1].length > 0) { // if only month filter is active
                if (filtersActive[1].indexOf("month-" + monthFilter) > -1) {
                    if($(this).is(':visible')) {
                        showExistingItem($(this));
                    } else {
                        showItem($(this));
                    }
                } else {
                    hideItem($(this));
                }
            }
        });
    }

    // gsap animation functions
    function showExistingItem(item) {
        gsap.from(item, {duration: 0.5, y:20, ease: Power3.easeOut})
    }

    function showItem(item) {
        gsap.set(item, {display:'block'});
        gsap.fromTo(item, {scale: 0, autoAlpha: 0}, {duration: 0.5, scale:1, autoAlpha:1, ease: Power3.easeOut});
    }

    function hideItem(item) {
        gsap.set(item, {display:'none'});
    }
});