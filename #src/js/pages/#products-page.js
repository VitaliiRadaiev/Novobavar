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
}