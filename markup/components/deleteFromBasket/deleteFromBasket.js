$(document).ready(function(){ 
// Удаление с корзины
	$('.deleteProduct__icon').on( 'click', function() {
		$('.deleteFromBasket').addClass('visible');
		$('.blur').addClass('LV2');
	});
// Закрытие корзины
	//На крестик
	$('.deleteFromBasket_content__close').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
		$('.blur').removeClass('LV2');
	});
	//На кнопку удалить
	$('.deleteFromBasket_delete').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
		$('.blur').removeClass('LV2');
	});
	//На кнопку отмена
	$('.deleteFromBasket_cancel').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
		$('.blur').removeClass('LV2');
	});
//Отключение окна при клике на блюр 2ур.
	$('.blur').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
		$(this).removeClass('LV2');
	});
});