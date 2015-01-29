$(function() {

    $.scrollIt();
});


$(document).ready(function(e) {
    if(typeof window.orientation === 'undefined') {
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
