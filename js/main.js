const slider = document.querySelector('.swiper-container');
const sliderClient = document.querySelector('.swiper-container-client');

new Swiper(slider, {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    simulateTouch: false,
    touchRatio: 0,
    touchAngle: 45,
    grabCursor: false,
    slideToClickedSlide: true,
    autoHeight: false,
    spaceBetween: 0,
    slidesPerGroup: 1,
    initialSlide: 0,
    slidesPerColumn: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 1600,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

 new Swiper(sliderClient, {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination-client',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: false,
    slideToClickedSlide: true,
    autoHeight: false,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,
    slidesPerColumn: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 2000,
    effect: 'slide',
});



const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



const header = document.getElementsByClassName('header')[0];

header.addEventListener('click', (event) => {
    const target = event.target;
    const body = document.getElementsByTagName('body')[0];
    const btnBurger = document.getElementsByClassName('header-burger')[0];


    if (target.classList.contains('header-burger')) {
        btnBurger.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('lock')

    } else if (target.tagName === 'LI' || target.tagName === 'A') {
        btnBurger.classList.remove('active');
        header.classList.remove('active');
        body.classList.remove('lock')
    }
});






