//Выпадающее меню
$(document).ready(function(){ 
	$('.header_bottomMenu__dropdown').on( 'click', function() {
		$('.header_blur').toggleClass('active');
		$('.header_bottomMenu__dropdown__menu').toggleClass('open');
	});
// Вывод окна об отсутствии результатов###################################
	// $('.header_bottomMenu__searchForm__textArea').focus(
	//  function() {
	// 	$('.header_bottomMenu__searchForm__noSearchResult').addClass('visible');
	// 	$('.header_blur').addClass('active');
	// });
// Скрытие окна об отсутствии результатов###################################
	// $('.header_bottomMenu__searchForm__textArea').focusout(
	//  function() {
	// 	$('.header_bottomMenu__searchForm__noSearchResult').removeClass('visible');
	// 	$('.header_blur').removeClass('active');
	// });
	// ####################################################
	// Вывод окна результатов###################################
	$('.header_bottomMenu__searchForm__textArea').focus(
	 function() {
		$('.header_bottomMenu__searchForm__searchResults').addClass('visible');
		$('.header_blur').addClass('active');
	});
// Скрытие окна результатов###################################
	$('.header_bottomMenu__searchForm__textArea').focusout(
	 function() {
		$('.header_bottomMenu__searchForm__searchResults').removeClass('visible');
		$('.header_blur').removeClass('active');
	});
	// ####################################################
});