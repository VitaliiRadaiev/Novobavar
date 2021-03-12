if(document.documentElement.clientWidth >= 992) {
    let asideList = document.querySelector('.aside-article-list');
    let asideColumn = document.querySelector('.article-block__aside');

    window.addEventListener('scroll', () => {
        let {left,top} = asideList.getBoundingClientRect();
        let colTop = asideColumn.getBoundingClientRect().top;
        if(colTop < 130) {
            asideList.style.position = "fixed";
            asideList.style.top ='140px';
            asideList.style.left = left + 'px';
        } else {
            asideList.style.position = "static";
        }
    })

    window.addEventListener('resize', () => {
        if(document.documentElement.clientWidth < 992) {
            asideList.style.position = "static";
            return;
        }
        asideList.style.position = "static";
        let {left} = asideList.getBoundingClientRect();
        asideList.style.position = "fixed";
        asideList.style.left = left + 'px';
    })
}
