$(function() {


    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', './particles.json', function(err) {console.log(err)});


    // sidebar and mobile-nav
    $(".btn-sidebar").click(function() {
        $(".sidebar").toggleClass("sidebar--isActive");
        $(".overlay").toggleClass("overlay--isActive");
    });

    $(".sidebar__btn").click(function() {
        $(".sidebar").removeClass("sidebar--isActive");
        $(".overlay").removeClass("overlay--isActive");
    });

    $(".btn-mobile-nav").click(function() {
        $(".mobile-nav").toggleClass("mobile-nav--isActive");
        $(".overlay").toggleClass("overlay--isActive");
    });

    $(".mobile-nav__link").click(function() {
        $(".mobile-nav").removeClass("mobile-nav--isActive");
        $(".overlay").removeClass("overlay--isActive");
    });

    $(".mobile-nav__btn").click(function() {
        $(".mobile-nav").removeClass("mobile-nav--isActive");
        $(".overlay").removeClass("overlay--isActive");
    });

    $(".overlay").click(function() {
        $(".sidebar").removeClass("sidebar--isActive");
        $(".overlay").removeClass("overlay--isActive");
        $(".mobile-nav").removeClass("mobile-nav--isActive");
    });


    // waypointHeader
    var waypointHeader = new Waypoint({
        element: document.getElementById('header'),
        handler: function(direction) {
            $(".header__bar").toggleClass("header__bar--sticky");
            $(".btn").toggleClass("btn--small");
        },
        offset: "-70%"
    });


    // waypointActiveLink
    var waypoints = $('#about').waypoint({
        handler: function(direction) {
            $(".header__nav li a[href=#about]").toggleClass("isActive")
        },
        offset: "50%"
    })
    var waypoints = $('#portfolio').waypoint({
        handler: function(direction) {
            $(".header__nav li a[href=#about]").toggleClass("isActive")
            $(".header__nav li a[href=#portfolio]").toggleClass("isActive")
        },
        offset: "50%"
    })
    var waypoints = $('#contacts').waypoint({
        handler: function(direction) {
            $(".header__nav li a[href=#portfolio]").toggleClass("isActive")
            $(".header__nav li a[href=#contacts]").toggleClass("isActive")
        },
        offset: "50%"
    })





    // smoothScroll
    $("nav a, .header__logo, .about__profile a, .home__link").smoothScroll({
        offset: -40,
        speed: 1000,
    });


    // mixItUp
    $('#Container').mixItUp();


    //  wow.js
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    new WOW().init();


    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': false
    });

    if ($(".lb-image")) {
        $(".lb-image").click(function() {
            var src = $(".lb-image").attr("src");
            window.open(src, "_blank");
        });
    }



});
