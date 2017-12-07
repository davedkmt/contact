/*global $*/
"use strict";
// after window is loaded
var win = $(window);
win.on("load", function () {
    $("#loading").fadeOut(500);
});

// after document is ready functions
$(document).ready(function () {
    var nav = $("#top-nav"),
        navIcon = $("#menu-icon"),
        navLinks = $("#nav-links");
    // menu icon on click
    navIcon.on("click", function () {
        navLinks.slideToggle(500);
    });
    
    // on scrolling functions
    win.on("scroll", function () {
        // navbar change
        if (win.scrollTop() >= 300) {
            nav.css({
                position: 'fixed',
                backgroundColor: '#0f0f0f'
            });
        } else {
            nav.css({
                position: 'absolute',
                backgroundColor: 'transparent'
            });
        }
    });
    
    // on resizing functions
    win.on("resize", function () {
        if (navIcon.css('display') === 'none') {
            navLinks.css('display', 'block');
        } else {
            navLinks.css('display', 'none');
        }
    });
});