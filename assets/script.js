var transHeight = 100;

function makeNavTransp() {
    $(".navbar").css("background-color", "rgba(248, 252, 256, 0)");
    $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
}

function makeNavSolid() {
    $(".navbar").css("background-color", "rgba(248, 252, 256, 0.95)");
    $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
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

function resizingAction() {
    /* center footer elements on smaller screens */
    if (window.innerWidth < 768) {
        $("#footer-col-left").removeClass("text-left").addClass("text-center");
        $("#footer-col-right").removeClass("text-right").addClass("text-center");
    } else {
        $("#footer-col-left").addClass("text-left").removeClass("text-center");
        $("#footer-col-right").addClass("text-right").removeClass("text-center");
    }
}

$(document).ready(function() {
    /* scrolling actions */
    scrollingActions();
    $(window).on("scroll", function() {
        scrollingActions();
    });

    /* resizing actions */
    resizingAction();
    $(window).on("resize", function() {
        resizingAction();
    });

    $(".navbar-toggler").on("click", function() {
        if ($(".navbar-collapse").hasClass("show") && $(window).scrollTop() == transHeight) {
            makeNavTransp();
        } else {
            makeNavSolid();
        }
    });
});