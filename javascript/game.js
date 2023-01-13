// $(document).ready(function() {
//     let roll = 1;
//     setInterval(function(){
//         roll++;
//         if(roll > 3) {
//             roll = 1;
//         }
//     $('.roll').attr('src', '/imges/banner_' + roll + '.png');
//     }, 3000);
// })

$(function() {
    $('#banner_change').slick({
        slide: 'img',
        isFinite: true,
        slideToShow: 1,
        speed: 1000,
        autoplay : true,
        autoplaySpeed : 3000,
        fade : true
    })
})

$(function() {
    $('#banner_change1').slick({
        slide: 'img',
        isFinite: true,
        slideToShow: 1,
        speed: 1000,
        autoplay : true,
        autoplaySpeed : 3000,
        dots : true,
        fade : true
    })
})