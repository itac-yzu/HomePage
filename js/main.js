$(function() {

    $.scrollIt();
});


$(document).ready(function(e) {
    headerHide();
    if (typeof window.orientation === 'undefined') {
        $('.timeline-panel > .timeline-body').hide()
        $('.timeline-panel').hover(function() {
            $('.timeline-panel:hover > .timeline-heading').css("text-align", "left");
            $('.timeline-panel:hover > .timeline-body').toggle("slow");
        }, function() {
            $('.timeline-panel:hover > .timeline-body').toggle("slow")
        });
    } else {
        $('.timeline-title').css("text-align", "left");

    }
});

var headerHide = function() {
    var docElem = document.documentElement;
    var header = $('.navbar-header');
    var menu = $('#navigation');
    var didScroll = false;
    var hideHeaderOn = 70;

    function init() {
        window.addEventListener('scroll', function(event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 100);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= hideHeaderOn) {
            header.addClass('logo-hide');
            menu.addClass('navigation-short');
        } else {
            header.removeClass('logo-hide');
            menu.removeClass('navigation-short');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    if($(window).width() >= 768)
        init();
}
