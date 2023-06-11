var offset = $('#menu').offset().top;
var $menu = $('#menu');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $menu.addClass('fixar');
    } else {
        $menu.removeClass('fixar');
    }
});
