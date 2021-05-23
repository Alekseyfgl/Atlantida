let burger = document.querySelector('.header-burger');

burger.addEventListener('click', function(){
    let menu = document.querySelector('.header');
    let btn = document.querySelector('.header-burger');
    let body = document.querySelector('body');

    menu.classList.toggle('active');
    btn.classList.toggle('active');
    body.classList.toggle('lock');
})