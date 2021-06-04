ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [53.902295, 27.561783],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([54.000812, 27.580929], {

            balloonContentHeader:'<img class="map-pic" src="./img/icon/icon-logo.png"> <span class="map-red"> Atlantida </span>',
            balloonContentBody: 'Южная улица, 11',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './img/index/maps/img-map.png',
            iconImageSize: [120, 120],
            iconImageOffset: [-30, -90],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });

        myMap.behaviors.disable(['scrollZoom']);
        myMap.geoObjects.add(myPlacemarkWithContent);
});