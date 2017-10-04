$(function () {
//    DOTS


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

    /*HIDE MOBILE MENU AFTER CLICK  */

    $('.nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

});

/*FULL PAGE JS*/

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['main', 'about', 'offer', 'blog', 'blog2', 'contact'],
        menu: '#myMenu'

    });
});

