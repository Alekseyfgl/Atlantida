ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.902295, 27.561783],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            // iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([54.000812, 27.580929], {
            hintContent: 'Лучше здесь не работать:)',
            balloonContent: 'Папернянский сельсовет, 19',
            // iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/index/maps/img-map.png',
            // Размеры метки.
            iconImageSize: [120, 120],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -90],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        // Отключение скролла мышкой
        myMap.behaviors.disable(['scrollZoom']);

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});