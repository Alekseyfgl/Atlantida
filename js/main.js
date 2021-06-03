const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container-client');

let mySwiper = new Swiper(slider, {
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

let mySwiper1 = new Swiper(slider1, {
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
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let burger = document.querySelector('.header-burger');
burger.addEventListener('click', function () {
    let menu = document.querySelector('.header');
    let btn = document.querySelector('.header-burger');
    let body = document.querySelector('body');
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    body.classList.toggle('lock');
});
let menuList = document.querySelector('.menuList')
let listArr = menuList.children
for (let i = 0; i < listArr.length; i++) {
    listArr[i].addEventListener('click', function () {
        let menu = document.querySelector('.header');
        let body = document.querySelector('body');
        body.classList.remove('lock');
        menu.classList.remove('active');
    })
}



