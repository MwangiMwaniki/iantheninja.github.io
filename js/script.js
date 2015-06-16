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


$('.text').addClass('animated fadeInLeft');
$('.first-card').addClass('animated slideInRight');
$('.button-collapse').sideNav()
//$(window).scroll(function(){
//    $("nav").hide();
//});


$(window).scroll(function() {
    $("nav").hide();
    clearTimeout($.data( this, "scrollCheck" ) );
    $.data(this, "scrollCheck", setTimeout(function() {
        $("nav").show("nav");
    }, 250) );

});
