$(function() {
    $('.main_img').slick({
        slide: 'img',
        isFinite: true,
        slideToShow: 1,
        speed: 1000,
        autoplay : true,
        autoplaySpeed : 3000,
        prevArrow : $('.pre'), 
        nextArrow : $('.next'),
        dots : true,
        dotsClass : "dotS"
    })
})