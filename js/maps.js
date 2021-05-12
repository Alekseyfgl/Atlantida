ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.902295, 27.561783],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        // что это????
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([54.000812, 27.580929], {
             // баллун
            balloonContentHeader:'<img class="map-pic" src="./img/icon/icon-logo.png"> <span class="map-red">Штаб Atlantida </span>',
            balloonContentBody: 'Текст балуна ',
            balloonContentFooter: 'место не очень:)',
            hintContent: ' лучше здесь не работать)',
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
        .add(myPlacemarkWithContent);
});