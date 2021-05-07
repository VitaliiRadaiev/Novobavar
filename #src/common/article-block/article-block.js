let articleBLock = document.querySelector('.article-block');
if(articleBLock) {
    let asideList = document.querySelector('.aside-article-list');
    let asideListWrap = document.querySelector('.article-block__aside');

    if(asideList) {
        window.addEventListener('scroll', () => {
            if(document.documentElement.clientWidth > 991) {
                if(asideListWrap.getBoundingClientRect().top < 121) {
                    asideList.classList.add('_fixed');
                    asideList.style.top = '121px';
                    asideList.style.maxWidth = (asideListWrap.clientWidth - 20) + 'px';
                    asideList.style.right = (document.documentElement.clientWidth - asideListWrap.getBoundingClientRect().right) + 'px';
                }else if(asideListWrap.getBoundingClientRect().top >= 121) {
                    asideList.classList.remove('_fixed');
                }

                console.log(document.documentElement.clientWidth - asideListWrap.getBoundingClientRect().right);
                

                if(asideListWrap.getBoundingClientRect().bottom <= asideList.clientHeight + 121) {
                    asideList.classList.add('_static');
                    asideListWrap.classList.add('_flex-end');
                } else {
                    asideList.classList.remove('_static');
                    asideListWrap.classList.remove('_flex-end');
                }
            }
        })
    }

    let $p = document.querySelectorAll('.article-page .article-block p');
    if($p.length) {
        $p.forEach(item => {
            for(i of item.childNodes) {
                if(i.nodeName === 'IMG') {
                    item.classList.add('_img-gallery');
                    item.innerHTML = item.innerHTML.replace(/&nbsp;/g, '');
                    return
                }
            }
        })
    }
}