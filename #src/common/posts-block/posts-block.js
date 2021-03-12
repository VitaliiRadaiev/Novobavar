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
                                _slideUp(text,600)
                            }
                        })
                    })
                }
            }
            
        });

        
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
