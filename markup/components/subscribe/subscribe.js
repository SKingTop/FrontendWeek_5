$(document).ready(function(){ 
	$('.subscribeForm_btn').on( 'click', function() {
		$('.subscribe_thanks').addClass('visible');
		$('.blur').addClass('visible');
	});

	$('.thanks_content__close').on( 'click', function() {
		$('.subscribe_thanks').removeClass('visible');
		$('.blur').removeClass('visible');
	});

	$('.thanks_btn').on( 'click', function() {
		$('.subscribe_thanks').removeClass('visible');
		$('.blur').removeClass('visible');
	});
});
