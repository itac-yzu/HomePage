/*
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

*/
$(function() {
	$('.timeline-panel > .timeline-body').hide()
    $.scrollIt();
});

$(document).ready(function(e) {
    $('.timeline-panel').hover(function() {
    	$('.timeline-panel:hover > .timeline-heading').css("text-align", "left")
        $('.timeline-panel:hover').animate({
            width: "46%"
        }, 500, function() {
            if($('.timeline-panel:hover > .timeline-body').is(":hidden"))
            {
            	$('.timeline-panel:hover > .timeline-body').toggle("show")
            }
        });
    });
});
