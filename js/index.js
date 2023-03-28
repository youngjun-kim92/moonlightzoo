$(document).ready(function() {
    // swiper 시작
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        /*on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }*/
    });
    // swiper 종료
    $('.s4_box').hover(function () {
        $(this).css('border','3px solid #ff0');
        $(this).children('.s4_icon').css({
            'transform':'rotateY('+180+'deg)'
        });
    }, function () {
        $(this).css('border','1px solid rgba(255,255,255,0.4)');
        $(this).children('.s4_icon').css({
            'transform':'rotateY('+0+'deg)'
        });
    });
    $('.s2_box').hover(function () {
        $(this).find('.s2_icon').find('img').css({
            'transform':'rotateY('+180+'deg)'
        });
        $(this).find('.s2_btn').find('p').css({
            'marginRight':30
        });
    },function () {
        $(this).find('.s2_icon').find('img').css({
            'transform':'rotateY('+0+'deg)'
        });
        $(this).find('.s2_btn').find('p').css({
            'marginRight':0
        });
    });
});    