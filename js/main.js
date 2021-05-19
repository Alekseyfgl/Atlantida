const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container-client');

let mySwiper = new Swiper(slider, {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    // pagination: {
    //     // el: '.swiper-pagination',
    //     // // Буллеты (точки)
    //     //     clickable: true,
    //     //     // Динамичские буллеты
    //     //     dynamicBullets: true,
    //     //     // Кастомный буллет
    //     //     renderBullet: function (index, className) {
    //     //     return '<span class="' + className + '">' + (index +1) + '</span>';
    //     // },


    //     // Фракция
    //     // type: 'fraction',
    //     // // Кастомный вывод фракции
    //     // renderFraction: function (currentClass, totalClass) {
    //     //     return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + ' <span class="' + totalClass + '"></span>';
    //     // },

    //     // // Прогрессбар
    //     // type: 'progressbar'
    // },
    // Скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // Возможность перетаскивать скролл
    //     draggable: false
    // },

    // Включение/отключение
    // Перетаскивание на ПК
    simulateTouch: true,
    // Чувствительность слайда (0-выкл, чтобы увеличить 1 и более)
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: false,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    // hashNavigation: {
    //     // Отслеживать состояние
    //     watchState: true,
    // },


    // Управление клавиатурой
    // keyboard: {
    //     // Вкл/выкл
    //     enabled: true,

    //     // Вкл/Выкл
    //     // только когда слайдер в пределай вьюпорта 
    //     // (листается когда до него доскролили)
    //     onlyInViewport: true,
        
    //     // Вкл/Выкл
    //     // управление клавишами
    //     // pageUp, pageDown
    //     pageUpDown: true,
    // },

    // Управление колесом мыши
    // mousewheel: {
    // // Чувствительность колеса мыши
    // sensitivity: 2,
    // // Класс объекта на котором будет срабатывать прокрутка мыью.
    // // (Если у нас много одинаковый слайдеров, крутя мышкой переключаться будут все, поэтому тогда лучше стоит оставлять этот параметр по умолчанию.)
    // // eventsTarget: ".image-slider"
    // },



    // ---Настройка слайдера по выводу----

    //Автовысота
    autoHeight: false,
    
    // Количетсво слайдов для показа
    // slidesPerView: 'auto', не работает если больше чем 1 ряд для показа
    slidesPerView: 1,

    // Отключение функционала
    // если слайдов меньше чем нужно
    // watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 0,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд (то есть 1) по центру
    // (по умолчанию слево = false)
    centeredSlides: true, 

    // Стартовый слайд 
    // (первый слайд = 0, второй = 1)
    initialSlide: 0,

    // Мультирядность(кол-во отображ рядов в слайде)
    // для корректной работы отключить автовысоту и в css тоже  
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Свободный режим
    // freeMode: true,  


    // Автопрокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 3000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: false
    },

    // Скорость прокрутки 
    speed: 2000,

    // Вертикальный слайдер
    // direction: 'vertical',






// -----------------------------------------------
    //     Эффекты переключения слайдов
//  ---------------------------------------------
    // По умолчанию
    // effect: 'slide',


    // Смена прозрачности
    effect: 'fade',
        // Дополнения к fade
        fadeEffect: {
            // Параллельная смена прозрачности
            crossFade: true
        },

    // Переворот
    // effect: 'flip',
    // // дополнительно к flip
    // flipEffect: {
    //     slideShadows: false,
    //     // Показ только активного слайда
    //     limitRotation: true
    // },

    // Куб
    // effect: 'cube',
    // // Дополнение к cube
    // cubeEffect: {
    //     // настройки тени
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 50,
    //     shadowScale: 0.94
    // },

    // Эффект потока
    // effect: 'coverflow', 
    // // Дополнения к coverflow
    //     coverflowEffect: {
    //     // Угол
    //     rotate: 20,
    //     // Наложение
    //     stretch: 50,
    //     // Тень
    //     slideShadows: true,
    // }, 
    
    
    // -------------Адаптив-----------//
    // Ширина экрана
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView:3,
    //     }
    // }
});
// ===================================


































let mySwiper1 = new Swiper(slider1, {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination-client',
        // Буллеты (точки)
            clickable: true,
            // // Динамичские буллеты
            // dynamicBullets: true,
            // Кастомный буллет
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index +1) + '</span>';
        },


        // // Фракция
        // type: 'fraction',
        // // Кастомный вывод фракции
        // renderFraction: function (currentClass, totalClass) {
        //     return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + ' <span class="' + totalClass + '"></span>';
        // },

        // // Прогрессбар
        // type: 'progressbar'
    },
    // Скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // Возможность перетаскивать скролл
    //     draggable: false
    // },

    // Включение/отключение
    // Перетаскивание на ПК
    simulateTouch: true,
    // Чувствительность слайда (0-выкл, чтобы увеличить 1 и более)
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: false,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    // hashNavigation: {
    //     // Отслеживать состояние
    //     watchState: true,
    // },


    // Управление клавиатурой
    // keyboard: {
    //     // Вкл/выкл
    //     enabled: true,

    //     // Вкл/Выкл
    //     // только когда слайдер в пределай вьюпорта 
    //     // (листается когда до него доскролили)
    //     onlyInViewport: true,
        
    //     // Вкл/Выкл
    //     // управление клавишами
    //     // pageUp, pageDown
    //     pageUpDown: true,
    // },

    // Управление колесом мыши
    // mousewheel: {
    // // Чувствительность колеса мыши
    // sensitivity: 2,
    // // Класс объекта на котором будет срабатывать прокрутка мыью.
    // // (Если у нас много одинаковый слайдеров, крутя мышкой переключаться будут все, поэтому тогда лучше стоит оставлять этот параметр по умолчанию.)
    // // eventsTarget: ".image-slider"
    // },



    // ---Настройка слайдера по выводу----

    //Автовысота
    autoHeight: false,
    
    // Количетсво слайдов для показа
    // slidesPerView: 'auto', не работает если больше чем 1 ряд для показа
    slidesPerView: 1,

    // Отключение функционала
    // если слайдов меньше чем нужно
    // watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 0,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд (то есть 1) по центру
    // (по умолчанию слево = false)
    centeredSlides: true, 

    // Стартовый слайд 
    // (первый слайд = 0, второй = 1)
    initialSlide: 0,

    // Мультирядность(кол-во отображ рядов в слайде)
    // для корректной работы отключить автовысоту и в css тоже  
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Свободный режим
    // freeMode: true,  


    // Автопрокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 3000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: false
    },

    // Скорость прокрутки 
    speed: 2000,

    // Вертикальный слайдер
    // direction: 'vertical',





// -----------------------------------------------
    //     Эффекты переключения слайдов
//  ---------------------------------------------
    // По умолчанию
    effect: 'slide',


    // Смена прозрачности
    // effect: 'fade',
    //     // Дополнения к fade
    //     fadeEffect: {
    //         // Параллельная смена прозрачности
    //         crossFade: true
    //     },

    // Переворот
    // effect: 'flip',
    // // дополнительно к flip
    // flipEffect: {
    //     slideShadows: false,
    //     // Показ только активного слайда
    //     limitRotation: true
    // },

    // Куб
    // effect: 'cube',
    // // Дополнение к cube
    // cubeEffect: {
    //     // настройки тени
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 50,
    //     shadowScale: 0.94
    // },

    // Эффект потока
    // effect: 'coverflow', 
    // // Дополнения к coverflow
    //     coverflowEffect: {
    //     // Угол
    //     rotate: 20,
    //     // Наложение
    //     stretch: 50,
    //     // Тень
    //     slideShadows: true,
    // }, 
    
    
    // -------------Адаптив-----------//
    // Ширина экрана
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView:3,
    //     }
    // }
});




