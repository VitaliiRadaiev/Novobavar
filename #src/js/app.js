

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

	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('../common/burger/burger.js');
	@@include('../common/header/header.js');
	@@include('../common/posts-block/posts-block.js');
	@@include('../common/stock-block/stock-block.js');
	
	
	@@include('pages/#home.js');
	@@include('pages/#article.js');
	@@include('pages/#products-page.js');
	@@include('pages/#product-cart.js');


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

@@include('blocks/map.js');
