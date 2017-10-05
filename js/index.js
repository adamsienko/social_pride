$(function () {
    //   CLICLABLE LIST STYLE DOTS

    $('li').css('cursor', 'pointer')

        .click(function () {
            window.location = $('a', this).attr('href');
            return false;
        });


    //SIEDEBAR

    $('.menu').click(function () {
        $(this).toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');

    });


    $('.sidebar a').click(function () {
        $('.menu').toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');
    });



    //    BLOG SHOW / HIDE

/*    $('#see-all').click(function () {
        $('#blog-all').slideToggle('slow');

    });

    $("#button").click(function () {
        if ($(this).children("#see-all").text() == "zobacz wszystkie") {
            $(this).children("#see-all").text("zwiń");
        } else {
            $(this).children("#see-all").text("zobacz wszystkie");
        }
    });*/

    /*HIDE MOBILE MENU AFTER CLICK  */

    $('.nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

});

/*FULL PAGE JS*/

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['main', 'about', 'offer', 'blog', 'contact'],
        menu: '#myMenu',
        
        

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            if (anchorLink == 'main') {
                $('.dotstyle li:nth-child(1)').addClass('active current');
                $('.dotstyle li:not(:nth-child(1))').removeClass('active current');
            }
            if (anchorLink == 'about') {
                $('.dotstyle li:nth-child(2)').addClass('active current');
                $('.dotstyle li:not(:nth-child(2))').removeClass('active current');
            }
            if (anchorLink == 'offer') {
                $('.dotstyle li:nth-child(3)').addClass('active current');
                $('.dotstyle li:not(:nth-child(3))').removeClass('active current');
            }
            if (anchorLink == 'blog') {
                 $('.dotstyle li:nth-child(4)').addClass('active current');
                $('.dotstyle li:not(:nth-child(4))').removeClass('active current');
            }  
  
            if (anchorLink == 'contact') {
                  $('.dotstyle li:nth-child(5)').addClass('active current');
                $('.dotstyle li:not(:nth-child(5))').removeClass('active current');
            }
        }
    })
});