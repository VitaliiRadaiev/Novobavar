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
                init: () => {
                    let cards = postsBlock.querySelectorAll('.card-post');
                    if(cards.length) {
                        cards.forEach(card => {
                            let text = card.querySelector('.card-post__text');

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
            }
            
        });
        
    }
}


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
}