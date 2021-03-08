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
}