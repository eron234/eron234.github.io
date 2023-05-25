let btnAside = document.querySelector('.btn-aside');
        let leftPanel = document.querySelector('.left-panel');
        let contentDiv = document.querySelector('.content');

        btnAside.onclick = function () {
            leftPanel.classList.toggle('hide-panel');
            btnAside.classList.toggle('btn-out');
            btnAside.classList.toggle('btn-hrest');
            contentDiv.classList.toggle('move-content');
        }
       

 // -----         каруселька   
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');


// let sliderItem = document.querySelectorAll('.slider-item')


toLeft.addEventListener('click', function () {
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth;
    }
    else {
        slider.scrollLeft -= 400;
    }

})



toRight.addEventListener('click', function () {
    let maxScrollRight = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollRight - 1) {
        slider.scrollLeft -= slider.scrollWidth;
    }
    else {
        slider.scrollLeft += 400;
    }
})
