$(function() {
    $('.nav_ul li').click(function() {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.silder-button').click(function() {
        showSlider()

    })
    $('.mask').click(function() {
        hideSlider()
    })

    function showSlider() {
        $('.mask').fadeIn()
        $('.silder').css('right', 0)
    }

    function hideSlider() {
        $('.mask').fadeOut()
        $('.silder').css('right', -500)
    }

    $(window).scroll(
        function() {
            if ($(window).scrollTop() > 100) {
                $('.top').fadeIn()
            } else {
                $('.top').fadeOut()
            }
        }
    )


})