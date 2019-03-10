$(document).ready(function(){ 
	$('.subscribeForm_btn').on( 'click', function() {
		$('.subscribe_thanks').addClass('visible');
		$('.blur').addClass('visible');
		$('.page').addClass('noScroll');
	});

	$('.thanks_content__close').on( 'click', function() {
		$('.subscribe_thanks').removeClass('visible');
		$('.blur').removeClass('visible');
		$('.page').removeClass('noScroll');
	});

	$('.thanks_btn').on( 'click', function() {
		$('.subscribe_thanks').removeClass('visible');
		$('.blur').removeClass('visible');
		$('.page').removeClass('noScroll');
	});
});
