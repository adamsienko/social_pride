'use strict';
//DOTS

jQuery(document).ready(function ($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function () {
        $('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function () {
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate({
                'scrollTop': target.offset().top
            },
            600
        );
    }
});


$(function () {

    //SIEDEBAR

    $('.menu').click(function () {
        $(this).toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');

    });


    $('.sidebar a').click(function () {
        $('.menu').toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');
    });



    //SMOOTH SCROLL

    $(".sidebar a, nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //    BLOG SHOW / HIDE

    $('#see-all').click(function () {
        $('#blog-all').slideToggle('slow');

    });

    $("#button").click(function () {
        if ($(this).children("#see-all").text() == "zobacz wszystkie") {
            $(this).children("#see-all").text("zwiń");
        } else {
            $(this).children("#see-all").text("zobacz wszystkie");
        }
    });
    
//    CHANGING LOGO
   $("#blog").scroll(function(){
        $("#logo-blog").fadeIn();
        $("#logo-blog").fadeIn("slow");
        $("#logo-blog").fadeIn(3000);
    });
});
    

