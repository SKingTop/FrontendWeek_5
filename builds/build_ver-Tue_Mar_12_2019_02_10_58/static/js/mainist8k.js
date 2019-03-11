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


$(document).ready(function(){ 
// Выпадающее меню
	$('.header_bottomMenu__dropdownMenu').on( 'click', function() {
		closeAll();
		$(this).addClass('open');
		$('.blur').addClass('visible');
		$('.dropdownMenu_container').addClass('visible');
	});
// Окно без результатов поиска
	// $('.searchForm_textArea').on( 'click', function() {
	// 	closeAll();
	// 	$('.searchForm_noSearchResult').addClass('visible');
	// 	$('.blur').addClass('visible');
	// });
// Окно с результатами поиска
	$('.searchForm_textArea').on( 'click', function() {
		closeAll();
		$('.searchForm_searchResults').addClass('visible');
		$('.blur').addClass('visible');
	});
// Пустая корзина
	// $('.header_bottomMenu__basket').on( 'click', function() {
	// 	closeAll();
	// 	$(this).addClass('active');
	// 	$('.blur').addClass('visible');
	// 	$('.basket_emptyBasket').addClass('visible');
	// });
// Корзина с товаром
	$('.header_bottomMenu__basket').on( 'click', function() {
		closeAll();
		$(this).addClass('active');
		$('.blur').addClass('visible');
		$('.basket_fullBasket').addClass('visible');
	});
// Удаление с корзины
	$('.deleteProduct__icon').on( 'click', function() {
		$('.deleteFromBasket').addClass('visible');
	});
// Закрытие корзины
	//На крестик
	$('.deleteFromBasket_content__close').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
	});
	//На кнопку удалить
	$('.deleteFromBasket_delete').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
	});
	//На кнопку отмена
	$('.deleteFromBasket_cancel').on( 'click', function() {
		$('.deleteFromBasket').removeClass('visible');
	});
//Закрытие по клюку на блюр
	$('.blur').on( 'click', function() {
		closeAll();
	});
//Закрытие всего, функция для переключения между доп окнами
	function closeAll() {
		$('.blur').removeClass('visible');	
		$('.dropdownMenu_container').removeClass('visible');
		$('.searchForm_searchResults').removeClass('visible');
		$('.searchForm_noSearchResult').removeClass('visible');
		$('.basket_fullBasket').removeClass('visible');
		$('.basket_emptyBasket').removeClass('visible');
		$('.subscribe_thanks').removeClass('visible');
		$('.header_bottomMenu__basket').removeClass('active');
		$('.header_bottomMenu__dropdownMenu').removeClass('open');
	}
//Гамбургер открытие/закрытие меню
	$('.header_hamburgerMenu').on( 'click', function() {
		$(this).toggleClass('open');
		$('.header_topMenuBackgound').toggleClass('open');
	});
});

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
