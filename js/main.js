$(function() {
    $('.timeline-panel > .timeline-body').hide()
    $.scrollIt();
});

$(document).ready(function(e) {
    $('.timeline-panel').hover(function() {
        $('.timeline-panel:hover > .timeline-heading').css("text-align", "left");
        $('.timeline-panel:hover > .timeline-body').toggle("slow");
    }, function() {
        $('.timeline-panel:hover > .timeline-body').toggle("slow")
    });
});
