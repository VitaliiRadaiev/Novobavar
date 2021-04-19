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
}