$(document).ready(function(){
	$('.header_bottomMenu__dropdown').hover (
	 function() {
		$('.header_blur').toggleClass('active');
		$('.header_bottomMenu__dropdown__menu').toggleClass('open');
	});

	$('.header_bottomMenu__searchForm__textArea').focus(
	 function() {
		$('.header_bottomMenu__searchForm__noResult').addClass('visible');
		$('.header_blur').addClass('active');
	});

	$('.header_bottomMenu__searchForm__textArea').focusout(
	 function() {
		$('.header_bottomMenu__searchForm__noResult').removeClass('visible');
		$('.header_blur').removeClass('active');
	});
});