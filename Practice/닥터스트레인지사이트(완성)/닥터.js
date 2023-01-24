$(function() {
    $('.slide').slick({
        slide: 'img',
        isFinite: true,
        slideToShow: 1,
        speed: 1000,
        autoplay : false,
        autoplaySpeed : 3000,
        prevArrow : $('.pre'), 
        nextArrow : $('.next')
    })
})