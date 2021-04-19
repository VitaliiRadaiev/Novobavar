{
    let stockBlocks = document.querySelectorAll('.stock-block');
    if(stockBlocks.length) {
        stockBlocks.forEach(stockBlock => {
            let title = stockBlock.querySelector('.stock-block__title');
            let textWrap = stockBlock.querySelector('.stock-block__text-wrap');
            let div = document.createElement('div');
            div.className = '_height';
            textWrap.prepend(div);

            div.style.height = title.clientHeight + 'px';

            window.addEventListener('resize', () => {
                div.style.height = title.clientHeight + 'px';
            })
        })
    }
}
