let productsBlockV2 = document.querySelector('.products-block-v2');
if(productsBlockV2) {
    let mySwiper;

    function mobileSlider() {
        let slider = productsBlockV2.querySelector('.products-block-v2__slider');
        if(document.documentElement.clientWidth > 767 && slider.dataset.mobile == 'false') {
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

        if(document.documentElement.clientWidth <= 767) {
            slider.dataset.mobile = 'false';

            if(slider.classList.contains('swiper-container-initialized')) {
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
        if(products.length) {
            products.forEach(item => {
                item.addEventListener('click', function() {
                    if(document.documentElement.clientWidth < 768) {
                        this.classList.add('_active');

                        products.forEach(item => {
                            if(item == this) {
                                return
                            }

                            item.classList.remove('_active');
                        })
                    }
                })
            })
        }
    }

    productsMobileHandler();
}