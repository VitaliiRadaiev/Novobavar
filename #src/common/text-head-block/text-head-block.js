let images = document.querySelectorAll('.text-head-block__row-2 .text-head-block__img');
if(images.length) {
    images.forEach(img => {
        img.insertAdjacentHTML('afterbegin', `  
        <div class="circle-decor">
            <span class="circle-decor__circle circle-decor__circle_rotate"></span>
            <span class="circle-decor__icon">
                
            </span>
        </div>`)
    })
}

let p = document.querySelectorAll('.text-content p');
if(p.length) {
    p.forEach(item => {
        if(item.innerHTML === '&nbsp;') {
            item.style.display = 'none';
        }
    })
}
