$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {

//     window.addEventListener('scroll', function () {

//         if (window.scrollY > 200) {
//             document.getElementById('navbar_top').classList.add('fixed-top-bg');
//             // add padding top to show content behind navbar
//             navbar_height = document.querySelector('.navbar').offsetHeight;
//             document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//             document.getElementById('navbar_top').classList.remove('fixed-top-bg');
//             // remove padding top from body
//             document.body.style.paddingTop = '0';
//         }
//     });
// });
// DOMContentLoaded  end