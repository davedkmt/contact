/*global $*/
"use strict";
var win = $(window);

//after window loaded
win.on("load", function () {
    // loader fadeout after page is loaded
    $("#loading").fadeOut(500, function () {
        
        // header animations after page is loaded
        $("#intro").css({
            top: 0,
            opacity: 1
        });
        $("#job").delay(800).queue(function () {
            $(this).css({
                left: 0,
                opacity: 1
            });
        });
        $("#header-buttons").delay(1300).queue(function () {
            $(this).css({
                bottom: 0,
                opacity: 1
            });
        });
    });
});
// when document is reagy
$(document).ready(function () {
    var nav = $("#top-nav"),
        body = $('body, html'),
        navIcon = $("#menu-icon"),
        navLinks = $("#nav-links"),
        about = $("#about"),
        services = $("#services"),
        portfolio = $("#portfolio"),
        team = $("#team"),
        blogs = $("#blogs"),
        pricing = $("#pricing"),
        contact = $("#contact"),
        toTopButton = $("#to-top"),
        navlink = $("#top-nav ul li a"),
        navLink1 = $("#top-nav ul li:nth-of-type(1)"),
        navLink2 = $("#top-nav ul li:nth-of-type(2)"),
        navLink3 = $("#top-nav ul li:nth-of-type(3)"),
        navLink4 = $("#top-nav ul li:nth-of-type(4)"),
        navLink5 = $("#top-nav ul li:nth-of-type(5)"),
        navLink6 = $("#top-nav ul li:nth-of-type(6)"),
        navLink7 = $("#top-nav ul li:nth-of-type(7)"),
        navLink8 = $("#top-nav ul li:nth-of-type(8)"),
        flag1 = 0,
        flag2 = 0;
    
    // nav bar links on click
    navLink1.on("click", function () {
        body.animate({
			scrollTop: 0
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
        
    });
    
    navLink2.on("click", function () {
        body.animate({
			scrollTop: about.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    navLink3.on("click", function () {
        body.animate({
			scrollTop: services.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    navLink4.on("click", function () {
        body.animate({
			scrollTop: portfolio.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    navLink5.on("click", function () {
        body.animate({
			scrollTop: team.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    navLink6.on("click", function () {
        body.animate({
			scrollTop: blogs.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    navLink7.on("click", function () {
        body.animate({
			scrollTop: pricing.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    navLink8.on("click", function () {
        body.animate({
			scrollTop: contact.offset().top - 70
		}, 800);
        
        if (navIcon.css('display') === 'block') {
            navLinks.slideUp(500);
        }
    });
    
    // header buttons on click
    $("#see-works-button").on("click", function () {
        body.animate({
			scrollTop: portfolio.offset().top - 70
		}, 800);
    });
    $("#get-in-touch-button").on("click", function () {
        body.animate({
			scrollTop: contact.offset().top - 70
		}, 800);
    });
    $("#down-icon").on("click", function () {
        body.animate({
			scrollTop: about.offset().top - 70
		}, 800);
    });
    
    // work-wz-me on click
    $("#work-wz-me-button").on("click", function () {
        body.animate({
			scrollTop: contact.offset().top - 70
		}, 800);
    });
    
    // menu icon on click
    navIcon.on("click", function () {
        navLinks.slideToggle(500);
    });
    
    // to top button on click
    toTopButton.on("click", function () {
        body.animate({
			scrollTop: 0
		}, 800);
    });
    
    // about contact button on click
    $("#about-contact").on("click", function () {
        body.animate({
			scrollTop: contact.offset().top - 70
		}, 800);
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
        
        // navbar active link
        if (win.scrollTop() < about.offset().top - 70) {
            navLink1.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= about.offset().top - 70) {
            navLink2.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= services.offset().top - 70) {
            navLink3.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= portfolio.offset().top - 70) {
            navLink4.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= team.offset().top - 70) {
            navLink5.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= blogs.offset().top - 70) {
            navLink6.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= pricing.offset().top - 70) {
            navLink7.addClass("active").siblings().removeClass("active");
        }
        
        if (win.scrollTop() >= contact.offset().top - 71) {
            navLink8.addClass("active").siblings().removeClass("active");
        }
        
        // skills section animation
        if (win.scrollTop() >= $("#skills").offset().top - 200 && flag1 === 0) {
            flag1 = 1;
            $("#skill1").stop(700).animate({
                width: '95%'
            }, 700);
            $("#skill2").stop(700).animate({
                width: '89%'
            }, 700);
            $("#skill3").stop(700).animate({
                width: '93%'
            }, 700);
            $("#skill4").stop(700).animate({
                width: '97%'
            }, 700);
            $("#skill5").stop(700).animate({
                width: '95%'
            }, 700);
            $("#skill6").stop(700).animate({
                width: '99%'
            }, 700);
        }
        
        // statistics section counting 
        if (win.scrollTop() >= $("#statistics").offset().top - 100 && flag2 === 0) {
            flag2 = 1;
            $('#counter1').countTo({
                from: 22500,
                to: 22950,
                speed: 4000
            });
            
            $('#counter2').countTo({
                from: 350,
                to: 860,
                speed: 4000
            });
            
            $('#counter3').countTo({
                from: 215,
                to: 637,
                speed: 4000
            });
            
            $('#counter4').countTo({
                from: 1112,
                to: 1645,
                speed: 4000
            });
            
        }
        
        // to top button
        if (win.scrollTop() >= 500) {
            toTopButton.css({
                opacity: 1,
                right: 20
            });
        } else {
            toTopButton.css({
                opacity: 0,
                right: -50
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
    // trigger masonry
    $(".grid").imagesLoaded(function () {
        $(".grid").masonry({
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            percentPosition: true

        });
    });
    
    
    // magnific popup trigger
    
    $('.popup-link').magnificPopup({
        type: 'inline'
    });
    
    // trigger owl coursel slider for team section
	$("#team-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 4,
        loop: true,
        autoplay: true,
		autoplayTimeout : 3500,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1191: {
                items: 4
            }
        }
	});
    
    // trigger owl coursel slider for blogs section
	$("#blogs-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            690: {
                items: 2
            },
            992: {
                items: 3
            }
        }
	});
    
    // trigger owl coursel slider for testimonials
	$("#comments").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 1,
        loop: true,
        autoplay: true,
		autoplayTimeout : 3500
	});
    
    // trigger owl coursel slider for partners
	$("#partners-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 5,
        loop: true,
        autoplay: true,
		autoplayTimeout : 2800,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            327: {
                items: 2
            },
            619: {
                items: 3
            },
            941: {
                items: 4
            },
            1119: {
                items: 5
            }
        }
	});
    
});