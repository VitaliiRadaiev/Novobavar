{
    
    let productBlock = document.querySelector('.product');
    if(productBlock) {
        let sliderInfo;
        let sliderImages;
        let sliderHistory;
        let productNav = productBlock.querySelector('.product__nav');


        sliderInfo = new Swiper(productBlock.querySelector('.product__slider-info'), {
            
            effect: 'fade',
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1000,
            on: {
                slideChange: function(data) {
                    sliderHistory.slideTo(data.activeIndex);
                    let activeTab = productNav.children[data.activeIndex];
                    activeTab.classList.add('active');

                    for(let j = 0; j < productNav.children.length; j++) {
                        if(productNav.children[j] == activeTab) {
                            continue;
                        }                        
                        productNav.children[j].classList.remove('active');
                    }

                }
            }
        });

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

         sliderInfo.controller.control = sliderImages;
         sliderImages.controller.control = sliderInfo;
        

        
        if(productNav) {
            for(let i = 0; i < productNav.children.length; i++) {
                productNav.children[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    this.classList.add('active');
                    sliderInfo.slideTo(i)
                    for(let j = 0; j < productNav.children.length; j++) {
                        if(productNav.children[j] == this) {
                            continue;
                        }                        
                        productNav.children[j].classList.remove('active');
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





    let foodBlock = document.querySelector('.food-block');
    if(foodBlock) {
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
    }
}