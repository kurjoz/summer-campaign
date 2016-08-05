$(document).ready(function() {
    $('#secSlider').fullpage({
        anchors:['topSection', 'paySection', 'advSection', 'regSection'],
        menu: '#sliderMenu',
        scrollingSpeed: 1000,
        autoScrolling: true,
        slidesNavigation: true,
        responsiveWidth: 768,
        scrollBar: true
    });
});
