

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');

	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});


			// ==== ADD PADDING-TOP ================================
			// {
			// 	let wrapper = document.querySelector('.wrapper');
			// 	if (wrapper) {
			// 		let header = document.querySelector('.header');
			// 		if(header) {
			// 			let headerHeight = header.clientHeight;
			// 			wrapper.style.paddingTop = headerHeight + 'px';
			// 		}
					
			// 	}
			// }
			// ==== AND ADD PADDING-TOP ================================

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================









//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Possibly fall back to event handlers here
	}
});
// === // lazy load ==================================================================


if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href")
	  var destination = $(elementClick).offset().top;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}


;
	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
	// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// function form_submit(e) {
// 	let btn = event.target;
// 	let form = btn.closest('form');
// 	let message = form.getAttribute('data-message');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		//SendForm
// 		form_clean(form);
// 		if (message) {
// 			popup_open('message-' + message);
// 			e.preventDefault();
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		event.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];

			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				let maskValue = input.dataset.mask;
				input.classList.add('_mask');
				Inputmask(maskValue, {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
			if (input.classList.contains('_date')) {
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}

			//const input_g_value = input.getAttribute('data-value');
			//input_placeholder_add(input);
			// if (input.value != '' && input.value != input_g_value) {
			// 	input_focus_add(input);
			// }
			// input.addEventListener('focus', function (e) {
			// 	if (input.value == input_g_value) {
			// 		input_focus_add(input);
			// 		input.value = '';
			// 	}
			// 	if (input.getAttribute('data-type') === "pass") {
			// 		input.setAttribute('type', 'password');
			// 	}
			// 	if (input.classList.contains('_date')) {
			// 		/*
			// 		input.classList.add('_mask');
			// 		Inputmask("99.99.9999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 		*/
			// 	}
			// 	if (input.classList.contains('_phone')) {
			// 		//'+7(999) 999 9999'
			// 		//'+38(999) 999 9999'
			// 		//'+375(99)999-99-99'
			// 		input.classList.add('_mask');
			// 		Inputmask("+375 (99) 9999999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	if (input.classList.contains('_digital')) {
			// 		input.classList.add('_mask');
			// 		Inputmask("9{1,}", {
			// 			"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	form_remove_error(input);
			// });
			// input.addEventListener('blur', function (e) {
			// 	if (input.value == '') {
			// 		input.value = input_g_value;
			// 		input_focus_remove(input);
			// 		if (input.classList.contains('_mask')) {
			// 			input_clear_mask(input, input_g_value);
			// 		}
			// 		if (input.getAttribute('data-type') === "pass") {
			// 			input.setAttribute('type', 'text');
			// 		}
			// 	}
			// });
			// if (input.classList.contains('_date')) {
			// 	datepicker(input, {
			// 		customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			// 		formatter: (input, date, instance) => {
			// 			const value = date.toLocaleDateString()
			// 			input.value = value
			// 		},
			// 		onSelect: function (input, instance, date) {
			// 			input_focus_add(input.el);
			// 		}
			// 	});
			// }
		}
	}
}
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// ==  QUANTITY =====================================================
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// == // QUANTITY =====================================================

// == PRICE SLIDER =====================================================
let priceSlider = document.querySelector('.price-filter');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// == // PRICE SLIDER =====================================================;
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		let classNameElem = document.querySelector('.burger').dataset.activel;
		document.querySelector(`.${classNameElem}`).classList.add('_open');
		document.body.classList.add('lock');
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	;
	{
    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 20) {
                header.classList.add('_is-scroll');
            } else {
                header.classList.remove('_is-scroll');
            }
        })

        let menu = document.querySelector('.menu');
        let body = document.body;
        let btnClose = document.querySelector('.menu__close');
        let btnSwipeClose = document.querySelector('.menu__close-swipe');

        let closeMenu = () => {
            menu.classList.remove('_open');
            body.classList.remove('lock');
        }

        btnClose.addEventListener('click', closeMenu);
        btnSwipeClose.addEventListener('click', closeMenu);
        btnSwipeClose.addEventListener('swiped-up', closeMenu);
    }
};
	{
    let postsBlock = document.querySelector('.posts-block');
    if(postsBlock) {
        let slider_about = new Swiper(postsBlock.querySelector('.posts-block__slider'), {

            speed: 800,
            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            lazy: {
                loadPrevNext: true,
            },
            // Dotts
            //pagination: {
            //	el: '.slider-quality__pagging',
            //	clickable: true,
            //},
            // Arrows
            navigation: {
                nextEl: postsBlock.querySelector('.posts-block__slider-btn-next'),
                prevEl: postsBlock.querySelector('.posts-block__slider-btn-prev'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                }
            },
            on: {
                init: (slider) => {
                
                    slider.slides.forEach(slid => {
                        let card = slid.querySelector('.card-post');
                        let text = slid.querySelector('.card-post__text');

                        card.addEventListener('mouseenter', function() {
                            if(document.documentElement.clientWidth >= 992) {
                                this.classList.add('_scale');
                                _slideDown(text,600)
                            }
                        })
                        card.addEventListener('mouseleave', function() {
                            if(document.documentElement.clientWidth >= 992) {
                                this.classList.remove('_scale');
                                _slideUp(text,100)
                            }
                        })
                    })
                }
            }
            
        });

        function cardPostHoverHandler() {
            let postsBlockSimple = document.querySelector('.posts-block_simple');
            if(postsBlockSimple) {
                let cards = postsBlockSimple.querySelectorAll('.card-post');
                if(cards.length) {
                    cards.forEach(card => {
                        let text = card.querySelector('.card-post__text');
           

                        card.addEventListener('mouseenter', function() {
                            if(document.documentElement.clientWidth >= 992) {
                                if(text) {
                                     _slideDown(text,600)
                                }
                            }

                            
                        })
                        card.addEventListener('mouseleave', function() {
                            if(document.documentElement.clientWidth >= 992) {
                                if(text) {
                                     _slideUp(text,100);
                                }
                            }
                        })

                    })
                }
            }
        }

        cardPostHoverHandler();

        
        // let list = document.querySelector('.posts-block .posts-block__list');
        // if(list) {
        //     if(document.documentElement.clientWidth < 768) {
        //         let btn = document.querySelector('.posts-block__bottom .learn-more-btn');
        //         let arr = [...list.querySelectorAll('.posts-block__item')];
        //         if(arr.length > 4) {
        //             arr = arr.slice(4, arr.length);
        //             let div = document.createElement('div');
        //             div.className = '_toggleWrap';
        //             div.append(...arr);
        
        //             //let container = list.querySelector('.container')
        //             list.append(div);
        
        //         }

        //         btn.addEventListener('click', (e) => {
        //             e.preventDefault();
        //             let block = list.querySelector('._toggleWrap');
        //             _slideDown(block, 600);
        //             btn.style.display = 'none';
        //         })
                
        //     }
        // }
        
        
    }
}
;
	{
    let stockBlocks = document.querySelectorAll('.stock-block');
    if(stockBlocks.length) {
        stockBlocks.forEach(stockBlock => {
            let title = stockBlock.querySelector('.stock-block__title');
            let textWrap = stockBlock.querySelector('.stock-block__text-wrap');
            let div = document.createElement('div');
            div.className = '_height';
            textWrap.prepend(div);

            div.style.height = title.clientHeight + 'px';

            window.addEventListener('resize', () => {
                div.style.height = title.clientHeight + 'px';
            })
        })
    }
}
;
	let articleBLock = document.querySelector('.article-block');
if(articleBLock) {
    let asideList = document.querySelector('.aside-article-list');
    let asideListWrap = document.querySelector('.article-block__aside');

    if(asideList) {
        window.addEventListener('scroll', () => {
            if(document.documentElement.clientWidth > 991) {
                if(asideListWrap.getBoundingClientRect().top < 121) {
                    asideList.classList.add('_fixed');
                    asideList.style.top = '121px';
                    asideList.style.maxWidth = (asideListWrap.clientWidth - 20) + 'px';
                    asideList.style.right = (document.documentElement.clientWidth - asideListWrap.getBoundingClientRect().right) + 'px';
                }else if(asideListWrap.getBoundingClientRect().top >= 121) {
                    asideList.classList.remove('_fixed');
                }

                console.log(document.documentElement.clientWidth - asideListWrap.getBoundingClientRect().right);
                

                if(asideListWrap.getBoundingClientRect().bottom <= asideList.clientHeight + 121) {
                    asideList.classList.add('_static');
                    asideListWrap.classList.add('_flex-end');
                } else {
                    asideList.classList.remove('_static');
                    asideListWrap.classList.remove('_flex-end');
                }
            }
        })
    }

    let $p = document.querySelectorAll('.article-page .article-block p');
    if($p.length) {
        $p.forEach(item => {
            for(i of item.childNodes) {
                if(i.nodeName === 'IMG') {
                    item.classList.add('_img-gallery');
                    item.innerHTML = item.innerHTML.replace(/&nbsp;/g, '');
                    return
                }
            }
        })
    }
};
	const animItems = document.querySelectorAll('.products-block__column');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 1.5;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset - (animItemPoint / 4))) {
				animItem.classList.add('_active');

			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
;
	let images = document.querySelectorAll('.text-head-block__row-2 .text-head-block__img');
if(images.length) {
    images.forEach(img => {
        img.insertAdjacentHTML('afterbegin', `  
        <div class="circle-decor">
            <span class="circle-decor__circle circle-decor__circle_rotate"></span>
            <span class="circle-decor__icon">
                
            </span>
        </div>`)
    })
}

let p = document.querySelectorAll('.text-content p');
if(p.length) {
    p.forEach(item => {
        if(item.innerHTML === '&nbsp;') {
            item.style.display = 'none';
        }
    })
}
;
	
	
	

{
    let partnersBlock = document.querySelector('.for-partners-block');
    if(partnersBlock) {
        let links = document.querySelectorAll('.for-partners-block__text-wrap');
        if(links.length) {
            links.forEach(link => {
                let parent = link.closest('.for-partners-block__item');
                link.addEventListener('mouseenter', () => {
                    if(document.documentElement.clientWidth >= 992) {
                        parent.classList.add('_hover');
                    }
                })
                link.addEventListener('mouseleave', () => {
                    if(document.documentElement.clientWidth >= 992) {
                        parent.classList.remove('_hover');
                    }
                })
            })
        }
    }
};
	// {
//     // == fix float whis dots in to ul =========
//     let textContent = document.querySelectorAll('.text-content');
//     if(textContent.length) {
//         textContent.forEach(item => {
//             let $lists = item.querySelectorAll('ul');
//             if($lists.length) {
//                 $lists.forEach(list => {
//                     list.style.display = 'inline-block';

//                     let div = document.createElement('div');
//                     list.after(div);
//                     div.append(list);
//                 })
//             }
//         })
//     }
//     // == // fix float whis dots in to ul =========
// }
;
	let productsBlockV2 = document.querySelector('.products-block-v2');
if (productsBlockV2) {
    let mySwiper;

    function mobileSlider() {
        let slider = productsBlockV2.querySelector('.products-block-v2__slider');
        if (document.documentElement.clientWidth > 767 && slider.dataset.mobile == 'false') {
            mySwiper = new Swiper(slider, {
                slidesPerView: 3,
                centeredSlides: true,
                speed: 600,
                loop: true,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: productsBlockV2.querySelector('.products-block-v2__slider-btn-next'),
                    prevEl: productsBlockV2.querySelector('.products-block-v2__slider-btn-prev'),
                },
            });

            slider.dataset.mobile = 'true';

            //mySwiper.slideNext(0);
        }

        if (document.documentElement.clientWidth <= 767) {
            slider.dataset.mobile = 'false';

            if (slider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
        mobileSlider();
    })

    const productsMobileHandler = () => {
        let products = productsBlockV2.querySelectorAll('.swiper-slide');
        if (products.length) {
            const animItems = products;

            if (animItems.length > 0) {
                window.addEventListener('scroll', animOnScroll);
                function animOnScroll() {
                    for (let index = 0; index < animItems.length; index++) {
                        const animItem = animItems[index];
                        const animItemHeight = animItem.offsetHeight;
                        const animItemOffset = offset(animItem).top;
                        const animStart = 1.5;

                        let animItemPoint = window.innerHeight - animItemHeight / animStart;
                        if (animItemHeight > window.innerHeight) {
                            animItemPoint = window.innerHeight - window.innerHeight / animStart;
                        }

                        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset - (animItemPoint / 4))) {
                            animItem.classList.add('_active');

                        } else {
                            if (!animItem.classList.contains('_anim-no-hide')) {
                                animItem.classList.remove('_active');
                            }
                        }
                    }
                }
                function offset(el) {
                    const rect = el.getBoundingClientRect(),
                        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
                }

                setTimeout(() => {
                    animOnScroll();
                }, 300);
            }
        }
    }

    productsMobileHandler();
};
	{
    
    let productBlock = document.querySelector('.product');
    if(productBlock) {
        let sliderInfo;
        let sliderImages;
        let sliderHistory;
        let productNav = productBlock.querySelector('.product__nav');
        let ctaBlocks = document.querySelectorAll('.cta-block');
        let foodBlocks = document.querySelectorAll('.food-block');

        let slides = productBlock.querySelectorAll('.product__slider-info .swiper-slide');
        let startSlid;

        slides.forEach((item, index) => {
            if(item.classList.contains('_active-slide')) {
                startSlid = index;
            }
        });

        if(ctaBlocks.length) {
            let activeCta = document.querySelector(`#cta-slide-${startSlid+1}`);
            if(activeCta) {
                activeCta.classList.add('_active');
            }
        }

        if(foodBlocks.length) {
            let activeFood = document.querySelector(`#food-slide-${startSlid+1}`);
            if(activeFood) {
                activeFood.classList.add('_active');
            }
        }


        sliderImages = new Swiper(productBlock.querySelector('.product__slider-images'), {
            
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1000,
        });

        sliderHistory = new Swiper(productBlock.querySelector('.product__slider-history'), {
            
            effect: 'fade',
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1000,
        });

        sliderInfo = new Swiper(productBlock.querySelector('.product__slider-info'), {
            
            effect: 'fade',
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1000,
            initialSlide: startSlid,
            on: {
                slideChange: function(data) {
                    sliderHistory.slideTo(data.activeIndex);
                    let activeTab = productNav.children[data.activeIndex];
                    activeTab.classList.add('active');


                    if(ctaBlocks.length) {
                        let activeCta = document.querySelector(`#cta-slide-${data.activeIndex+1}`);
                        if(activeCta) {
                            activeCta.classList.add('_active');
                        }

                        for(let j = 0; j < ctaBlocks.length; j++) {
                            if(ctaBlocks[j] == activeCta) {
                                continue;
                            }                        
                            ctaBlocks[j].classList.remove('_active');
                        }

                    }
            
                    if(foodBlocks.length) {
                        let activeFood = document.querySelector(`#food-slide-${data.activeIndex+1}`);
                        if(activeFood) {
                            activeFood.classList.add('_active');
                        }

                        for(let j = 0; j < foodBlocks.length; j++) {
                            if(foodBlocks[j] == activeFood) {
                                continue;
                            }                        
                            foodBlocks[j].classList.remove('_active');
                        }
      
                    }

                   
                    for(let j = 0; j < productNav.children.length; j++) {
                        if(productNav.children[j] == activeTab) {
                            continue;
                        }                        
                        productNav.children[j].classList.remove('active');
                    }

                }
            }
        });

         sliderInfo.controller.control = sliderImages;
         sliderImages.controller.control = sliderInfo;
        

        
        if(productNav) {
            productNav.children[startSlid].classList.add('active');

            for(let i = 0; i < productNav.children.length; i++) {
                let text = productNav.children[i].innerText;

                if(!productNav.children[i].classList.contains('active')) {
                    productNav.children[i].innerText = text.slice(0, 6) + '...';
                }

                productNav.children[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    this.classList.add('active');
                    sliderInfo.slideTo(i)

                    setTimeout(() => {
                        productNav.children[i].innerText = text;

                    },400)

                    for(let j = 0; j < productNav.children.length; j++) {
                        if(productNav.children[j] == this) {
                            continue;
                        }                        
                        productNav.children[j].classList.remove('active');
                        productNav.children[j].innerText = productNav.children[j].innerText.slice(0, 6) + '...';
                    }
                })
            }
        }


        if(document.documentElement.clientWidth < 768) {
            let infoSlides = document.querySelectorAll('.product-info-slider .swiper-slide');
            let imagesSlides = document.querySelectorAll('.product-images-slider .swiper-slide');

            if(infoSlides.length && imagesSlides.length) {
                infoSlides.forEach((slide, index) => {
                    let supTitleHeight =  slide.querySelector('.product-info-slider__suptitle').clientHeight;
                    let titleHeight = slide.querySelector('.product-info-slider__title').clientHeight;
                    let subTitleHeight  = slide.querySelector('.product-info-slider__subtitle').clientHeight;
                    let img = imagesSlides[index].querySelector('.product-images-slider__img');
                    
                    img.style.marginTop = (supTitleHeight + titleHeight + subTitleHeight + 20) + 'px';
                })
            }
        }
    }





    let foodBlocks = document.querySelectorAll('.food-block');
    if(foodBlocks.length) {
        foodBlocks.forEach(foodBlock => {
            let dataSlider;
            dataSlider = new Swiper(foodBlock.querySelector('.food-block__slider'), {
                slidesPerView: 1,
                speed: 1000,
                navigation: {
                    nextEl: foodBlock.querySelector('.food-block__slider-btn-next'),
                    prevEl: foodBlock.querySelector('.food-block__slider-btn-prev'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
    
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
    
                },
            });
    
            let btnLeft = foodBlock.querySelector('.food-block__btn-left');
            let btnRight = foodBlock.querySelector('.food-block__btn-right');
            if(btnLeft) {
                btnLeft.addEventListener('click', () => {
                    dataSlider.slidePrev();
                })
            }
            if(btnRight) {
                btnRight.addEventListener('click', () => {
                    dataSlider.slideNext();
                })
            }
        })
    }
};


	let btnUp = document.querySelector('.btn-to-up');
	if(btnUp) {
		window.addEventListener('scroll', () => {
			if(window.pageYOffset > document.documentElement.clientHeight) {
				btnUp.style.display = 'block';
			} else {
				btnUp.style.display = 'none';
			}
		})

	}


	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
		  var $svg = $(data).find('svg');
		  if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		  }
		  $svg = $svg.removeAttr('xmlns:a');
		  if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		  }
		  $img.replaceWith($svg);
		}, 'xml');
	  });
	  
	
});

{

	var globalMarkers = {
		"1": {
			"1": [
				50.4501,
				30.5234
			],
			"2": [
				47.8388,
				35.139567
			]
		},
		"2": {
			"3": [
				46.482526,
				30.7233095
			],
			"4": [
				49.9935,
				36.230383
			]
		},
		"3": {
			"5": [
				47.097133,
				37.543367
			],
			"6": [
				49.839683,
				24.029717
			]
		}
	}






		var map;
		var map2;
		var markersPosition;
		
		var center = {
			lat: 49.07715,
			lng: 33.42683,
		}

		if(document.getElementById('map')) {
			var iconUrl = document.getElementById('map').dataset.set;

		}

		if(document.getElementById('map2')) {
			var iconUrl2 = document.getElementById('map2').dataset.set;

		}
		


		var markers = [];

		function initMap() {
			const createAray = () => {
				let arr = [];
	
				if(globalMarkers) {
					for(let item in globalMarkers) {
						arr.push(globalMarkers[item]);
					}
				}
	
				return arr.map(obj => {
					let arr = [];
					for(let item in obj) {
						arr.push(new google.maps.LatLng(obj[item][0], obj[item][1]))
					}
					return arr;
				})
				
			}

			var markersArr = createAray();

			window.onload = () => {

				let mapNav = document.querySelector('.map-block__nav');
				if(mapNav) {
					let items = mapNav.querySelectorAll('.map-block__nav-item');
		
		
					items.forEach((item, index) => {
						item.addEventListener('click', (e) => {
							e.preventDefault();
							item.classList.add('active');
		
							markersPosition = markersArr[index];
							updateMarkers();
		
							items.forEach(i => {
								if(i == item) {
									return
								}
		
								i.classList.remove('active');
							})
						})
					})
				}
			}


			markersPosition = markersArr[0];

			if(document.getElementById('map')) {
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: center.lat, lng: center.lng},
	
					zoom: 6,
	
					styles: [
						{
						  "featureType": "administrative.country",
						  "elementType": "labels.text.fill",
						  "stylers": [
							{
							  "color": "#121212"
							}
						  ]
						},
						{
						  "featureType": "administrative.locality",
						  "elementType": "labels.text.fill",
						  "stylers": [
							{
							  "color": "#fba13d"
							}
						  ]
						},
						{
						  "featureType": "landscape.natural",
						  "elementType": "geometry.fill",
						  "stylers": [
							{
							  "color": "#ffffff"
							}
						  ]
						},
						{
						  "featureType": "poi",
						  "elementType": "geometry.fill",
						  "stylers": [
							{
							  "color": "#fafafa"
							}
						  ]
						},
						{
						  "featureType": "road.highway",
						  "elementType": "geometry.stroke",
						  "stylers": [
							{
							  "color": "#ffffff"
							}
						  ]
						},
						{
						  "featureType": "water",
						  "elementType": "geometry.fill",
						  "stylers": [
							{
							  "color": "#ededed"
							}
						  ]
						}
					  ]
				});

				drop();
			}



			if(document.getElementById('map2')) {
				map2 = new google.maps.Map(document.getElementById('map2'), {
					center: {lat: 49.95591090900552, lng: 36.16249347011773},
				
					zoom: 15,
	
					//styles: ,
				});
	
				var markersPosition2 = new google.maps.Marker({
				position: {lat: 49.95591090900552, lng: 36.16249347011773},
				map: map2,
				//icon: iconUrl2,
				})
			}



			
		}

		const contentString = '<div class="test">test</div>';

		var info = [];

		function setInfo(length) {

			for (let i = 0; i < length; i++) 
			{
			  info.push(new google.maps.InfoWindow({
				content: `<div class="map-card">
							<h2>Сільпо ${i}</h2>
							<p>Супермаркет - Московський проспект, 256</p>
							<h3>Відкрито до 23:00</h3>
							<ul>
								<li>
									<div class="map-card__icons active">
										<img class="map-card__icon-check" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/check-green.svg" alt="">
										<img class="map-card__icon-cross" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/cross.svg" alt="">
									</div>
									Покупки в магазині
								</li>
								<li>
									<div class="map-card__icons">
										<img class="map-card__icon-check" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/check-green.svg" alt="">
										<img class="map-card__icon-cross" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/cross.svg" alt="">
									</div>
									Замовити онлайн
								</li>
							</ul>
							<div class="map-card__decor">
								<div class="map-card__decor-circle"></div>
							</div>
							<img class="map-card__decor-icon" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/map-icon.svg" alt="">
						</div>`,
			  }));
			}
		}

		function drop() {
			for (let i = 0; i < markersPosition.length; i++) 
			 {
			   markers.push(new google.maps.Marker({
			   position: markersPosition[i],
			   map: map,
			   icon: iconUrl,
			   }));
			 }

			 setInfo(markers.length);
			 addClick(); 
		}

		function addClick() {
			// if(document.documentElement.clientWidth < 992) {
			// 	for (let i = 0; i < markers.length; i++) {
			// 		markers[i].addListener('click', () => {
			// 			info[i].open(map, markers[i]);
			// 		})
			// 	}
			// } else {
			// 	for (let i = 0; i < markers.length; i++) {
			// 		markers[i].addListener('mouseover', () => {
			// 			info[i].open(map, markers[i]);
			// 		})
			// 		markers[i].addListener('mouseout', () => {
			// 			info[i].close();
			// 		})
			// 	}
			// }

			for (let i = 0; i < markers.length; i++) {
				markers[i].addListener('click', () => {
					info[i].open(map, markers[i]);
				})
			}
		}

		function setMapOnAll(map) {
			for (let i = 0; i < markers.length; i++) {
			  markers[i].setMap(map);
			}
		  }
		  

		function updateMarkers() {
			setMapOnAll(null)
			markers = [];

			for (var i = 0; i < markersPosition.length; i++) 
			{
			  markers.push(new google.maps.Marker({
			  position: markersPosition[i],
			  map: map,
			  icon: iconUrl,
			  }));
			}

			info = [];

			setInfo(markers.length);
			addClick(); 
		
		}
	
};
