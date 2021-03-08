// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		let classNameElem = document.querySelector('.burger').dataset.activel;
		document.querySelector(`.${classNameElem}`).classList.add('_open');
		document.body.classList.add('lock');
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	