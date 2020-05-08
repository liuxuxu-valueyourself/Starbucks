(function () {
    $('.my-left ul li').on('mouseenter', function () {
        var oSpan = $(this).find('span');
        $(oSpan).css({
            width: '100%'
        })
    })
    $('.my-left ul li').on('mouseleave', function () {
        var oSpan = $(this).find('span');
        $(oSpan).css({
            width: '0%'
        })
    })
    $('#open').on('click', function () {
    
        $('.my-list').fadeIn(100);
        $('.my-list').css({
            transform: 'scale(1.0)'
        });
        showBar();
    })
    $('#close').on('click', function () {
        $('.my-list').fadeOut(100);
        $('.my-list').css({
            transform: 'scale(2)',
        });
        setTimeout(function () {
            $('.my-list').css({
                display: 'none'
            });
            showBar();
        }, 500)
    })
    
    $(window).resize(function () {
        showBar();
    });
    
    function showBar() {
        if ($(window).innerWidth() <= 992 && $('.my-list').css('display') === 'block') {
            console.log('ok')
            $('body').css({
                overflow: 'hidden'
            })
        } else {
            $('body').css({
                overflow: 'auto'
            })
        }
    }
    var len = 0;
    $('#next').on('click', function () {
        if (len === -300) {
            $('#next').hide(300);
        } else {
            $('#prev').show();
            $('.culture ul').animate({
                left: len -= 100
            }, 300)
        }
    })
    $('#prev').on('click', function () {
        if (len === 0) {
            $('#prev').hide(300);
        } else {
            $('#next').show();
            $('.culture ul').animate({
                left: len += 100
            }, 300)
        }
    })
} ())