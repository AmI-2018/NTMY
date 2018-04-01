var transHeight = 100;

function makeNavTransp() {
    $("#navbar-main").css("background-color", "rgba(48, 52, 56, 0)");
}

function makeNavSolid() {
    $("#navbar-main").css("background-color", "rgba(48, 52, 56, 0.95)");
}

function scrollingActions() {
    var scrollTop = $(window).scrollTop();
    var homeOuterHeight = $("#home").outerHeight();
    
    /* jumbotron content fade */
    if (scrollTop <= homeOuterHeight) {
        $("#home-container").css("opacity", 1 - scrollTop/homeOuterHeight);
    }

    /* navbar coloring */
    if (scrollTop > transHeight) {
        makeNavSolid();
    } else {
        makeNavTransp();
    }
}

$(document).ready(function() {
    /* scrolling actions */
    scrollingActions();
    $(window).on("scroll", function() {
        scrollingActions();
    });

    /* make navbar solid on mobile toggle */
    $(".navbar-toggler").on("click", function() {
        if ($(".navbar-collapse").hasClass("show") && $(window).scrollTop() <= transHeight) {
            makeNavTransp();
        } else {
            makeNavSolid();
        }
    });
});