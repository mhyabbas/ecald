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

    // Calendar Filter: Create course select HTML markup based on available calendar item

    var $items = $('.card.calendar');

    // Calendar Filter: Apply filter

    function applyFilter() { // go through all calendar items and hide/show
        courseActiveFilters = $('[data-filter="course"] select').multipleSelect('getSelects');
        monthActiveFilters = $('[data-filter="month"] select').multipleSelect('getSelects');

        $items.each(function(){
            var courseFilter = $(this).attr("data-course");
            var monthFilter = $(this).attr("data-month");
            
            if (courseActiveFilters.length == 0 && monthActiveFilters.length == 0) { // show all items if active filter is empty
                showItem($items);
            } else if (courseActiveFilters.length > 0 && monthActiveFilters.length > 0) { // if both filters are active
                if (courseActiveFilters.indexOf(courseFilter) > -1 && monthActiveFilters.indexOf(monthFilter) > -1) {
                    if($(this).is(':visible')) {
                        showExistingItem($(this));
                    } else {
                        showItem($(this));
                    }
                } else {
                    hideItem($(this));
                }
             } else if (courseActiveFilters.length > 0 && monthActiveFilters.length == 0) { // if only course filter is active
                if (courseActiveFilters.indexOf(courseFilter) > -1) {
                    if($(this).is(':visible')) {
                        showExistingItem($(this));
                    } else {
                        showItem($(this));
                    }
                } else {
                    hideItem($(this));
                }
             } else if (courseActiveFilters.length == 0 && monthActiveFilters.length > 0) { // if only month filter is active
                if (monthActiveFilters.indexOf(monthFilter) > -1) {
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

    // Calendar Filter: GSAP animation functions

    function showExistingItem(item) {
        gsap.fromTo(item, {y:20}, {duration: 0.5, y:0, ease: Power3.easeOut});
    }

    function showItem(item) {
        gsap.set(item, {display:'block'});
        gsap.fromTo(item, {scale: 0, autoAlpha: 0}, {duration: 0.5, scale:1, autoAlpha:1, ease: Power3.easeOut});
    }

    function hideItem(item) {
        gsap.set(item, {display:'none'});
    }

    if($('[data-filter]').length) {
        // Calendar Filter: Create course filter
        var courseActiveFilters;
        setTimeout(function(){
            $('[data-filter="course"] select').multipleSelect({
                filter: true,
                filterPlaceholder: 'Search',
                showClear: true,
                selectAll: false,
                minimumCountSelected: 3,
                onClick: function () {
                    var count = $("[placeholder='All courses'] + .ms-parent li.selected").length;
                    if (count > 0) {
                        $("[placeholder='All courses'] + .ms-parent").find(".icon-close").show();
                    } else {
                        $("[placeholder='All courses'] + .ms-parent").find(".icon-close").hide();
                    }
                    applyFilter();
                    clearFilter();
                },
                onClear: function () {
                    applyFilter();
                    clearFilter();
                },
                onFocus: function () {
                    clearFilter();
                },
                onFilter: function () {
                    clearFilter();
                },
                formatCountSelected: function (count) {
                    return count + " selected";
                },
                onAfterCreate: function () {
                    $("[placeholder='All courses'] + .ms-parent").find(".icon-close").append("<i class='material-icons'>&#xe5cd;</i>");
                    clearFilter();
                },
            });
            function clearFilter() { // clear filters function
                button = $("[placeholder='All courses'] + .ms-parent").find(".ms-choice");
                button.on("click", function(e) {
                    e.stopPropagation();
                    var x = e.clientX, y = e.clientY,
                    clear = document.elementFromPoint(x, y);
                    if(clear.className == "material-icons") {
                        $("[placeholder='All courses'] + .ms-parent").find(".icon-close").hide();
                        $("[placeholder='All courses']").multipleSelect('close');
                        $("[placeholder='All courses']").multipleSelect('uncheckAll');
                        applyFilter();
                    } 
                })
            }
        }, 10);

        // Calendar Filter: Create month filter
        var monthActiveFilters;
        $('[data-filter="month"] select').multipleSelect({
            filter: true,
            filterPlaceholder: 'Search',
            showClear: true,
            selectAll: false,
            minimumCountSelected: 3,
            onClick: function () {
                var count = $("[placeholder='All months'] + .ms-parent li.selected").length;
                if (count > 0) {
                    $("[placeholder='All months'] + .ms-parent").find(".icon-close").show();
                } else {
                    $("[placeholder='All months'] + .ms-parent").find(".icon-close").hide();
                }
                applyFilter();
                clearFilter();
            },
            onClear: function () {
                applyFilter();
                clearFilter();
            },
            onFocus: function () {
                clearFilter();
            },
            onFilter: function () {
                clearFilter();
            },
            formatCountSelected: function (count) {
                return count + " selected";
            },
            onAfterCreate: function () {
                $("[placeholder='All months'] + .ms-parent").find(".icon-close").append("<i class='material-icons'>&#xe5cd;</i>");
                clearFilter();
            },
        });
        function clearFilter() { // clear filters function
            button = $("[placeholder='All months'] + .ms-parent").find(".ms-choice");
            button.on("click", function(e) {
                e.stopPropagation();
                var x = e.clientX, y = e.clientY,
                clear = document.elementFromPoint(x, y);
                if(clear.className == "material-icons") {
                    $("[placeholder='All months'] + .ms-parent").find(".icon-close").hide();
                    $("[placeholder='All months']").multipleSelect('close');
                    $("[placeholder='All months']").multipleSelect('uncheckAll');
                    applyFilter();
                } 
            })
        }
    } else {
        // Mulitple Select and clear button
        $('.search select').each(function() {
            var attr = $(this).attr('placeholder');

            $(this).multipleSelect({
                filter: true,
                filterPlaceholder: 'Search',
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
                    clearFilter(attr);
                },
                onFocus: function () {
                    clearFilter(attr);
                },
                onFilter: function () {
                    clearFilter(attr);
                },
                onClear: function () {
                    clearFilter(attr);
                },
                formatCountSelected: function (count) {
                    return count + " selected";
                },
                onAfterCreate: function () {
                    $("[placeholder='" + attr + "'] + .ms-parent").find(".icon-close").append("<i class='material-icons'>&#xe5cd;</i>");
                    clearFilter(attr);
                },
            });

            function clearFilter(attr) { // clear filters function
                button = $("[placeholder='" + attr + "'] + .ms-parent").find(".ms-choice");
                button.on("click", function(e) {
                    e.stopPropagation();
                    var x = e.clientX, y = e.clientY,
                    clear = document.elementFromPoint(x, y);
                    if(clear.className == "material-icons") {
                        $("[placeholder='" + attr + "'] + .ms-parent").find(".icon-close").hide();
                        $("[placeholder='" + attr + "']").multipleSelect('close');
                        $("[placeholder='" + attr + "']").multipleSelect('uncheckAll');
                    } 
                })
            }
        });
    }

    // Date picker and clear button

    if($('input.date').length) {
        $('input.date').on('keypress', function(e) {
            var keyPressed = String.fromCharCode(event.keyCode);
            var pattern = /^[0-9\/]+$/gi;
            if(!pattern.test(keyPressed)) {
                return false;
            }
        });

        $("input.date").datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            validateOnBlur: true,
            onSelectDate:function(dp,$input){
                $input.next("i").show();
            }
        });
    }
});