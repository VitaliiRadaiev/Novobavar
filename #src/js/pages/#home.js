

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