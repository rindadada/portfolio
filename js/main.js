$(function () {
    // 헤더
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 0) {
            $('.menu-nav').addClass('on')
            $('.menu-nav .menu-ul li').addClass('on')
            $('.header-intro').addClass('on')
        } else {
            $('.menu-nav').removeClass('on')
            $('.menu-nav .menu-ul li').removeClass('on')
            $('.header-intro').removeClass('on')
        }
    })
    // 웹 이동
    const menus = $('.menu-nav .menu-ul li')
    const mobiles = $('.mobile-nav .mobile-ul li')
    const contents = $('.container > div')

    menus.click(function (e) {
        e.preventDefault()
        menus.removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        let div = contents.eq(idx)
        let divDistance = div.offset().top - (100)

        $('html, body').animate({
            scrollTop: divDistance
        })
    })
    mobiles.click(function (e) {
        e.preventDefault()
        menus.removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        let div = contents.eq(idx)
        let divDistance = div.offset().top - (100)

        $('html, body').animate({
            scrollTop: divDistance
        })
    })
    $(window).scroll(function () {
        contents.each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 120) {
                let idx = $(this).index()
                menus.removeClass('on')
                menus.eq(idx).addClass('on')
            }
        })
    })
    // 스크롤 탑
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1000) {
            $('.go-top').fadeIn()
        } else {
            $('.go-top').fadeOut()
        }
    })
    $('.go-top').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0'
        }, 1000)
    })

    // 모바일 반응형
    $('.hamburger').click(function () {
        $('.mobile-nav').slideToggle(500)
    })
    $('.mobile-nav').mouseleave(function () {
        $('.mobile-nav').slideUp()
    })

    // popup
    $('.other-design').click(function (e) {
        $('.other-popup').scrollTop(0)
        $('.other-popup').addClass('on')
        $('.popup-close').addClass('on')

        let otheridx = $(this).index()
        let imgSrcidx = ["images/other/detailpage1.jpg",
            "images/other/detailpage2.jpg",
            "images/other/detailpage3.png",
            "images/other/blossom.jpg",
            "images/other/logo-designpage.png",
            "images/other/winter.jpg",
            "../images/other/other7.jpg",
            "images/other/redesign.png"]

        $('.other-popup .popupimg img').attr('src', imgSrcidx[otheridx])
    })
    $('.popup-close').click(function () {
        $('.other-popup').removeClass('on')
        $('.popup-close').removeClass('on')
    })
    // dark mod
    const darkOnBtn = document.getElementById('dark-on');
    const darkOffBtn = document.getElementById('dark-off');

    darkOnBtn.addEventListener('click', () => {
        document.body.classList.add('dark');
    });

    darkOffBtn.addEventListener('click', () => {
        document.body.classList.remove('dark');
    });
})