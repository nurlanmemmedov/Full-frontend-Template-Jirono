$(document).ready(function () {
    // for the display of header
    function header() {
        if ($(document).scrollTop() > 0) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky');
        }
    }
    header();

    //when scroll header's display will be sticky
    $(document).on('scroll', () => {
        header();
    })

    //responsive header's opening
    $('.navbar-toggler').click(() => {
        $('.navbar-toggler').toggleClass('coll');
        $('form').css('display', 'none')
    })

    //auto scroll with clicking navbar
    $('.features-button').click(() => {
        $('html').animate({ scrollTop: $('#cloud').offset().top }, 700);
        return false;
    })
    $('.team-button').click(() => {
        $('html').animate({ scrollTop: $('#our-team').offset().top }, 700);
        return false;
    })
    $('.pricing-button').click(() => {
        $('html').animate({ scrollTop: $('#pricing').offset().top }, 700);
        return false;
    })
    $('.blogs-button').click(() => {
        $('html').animate({ scrollTop: $('#latest-blogs').offset().top }, 700);
        return false;
    })

    //counter
    var num = 0;
    function counter() {
        for (let i = 0; i < $('.count').length; i++) {
            var time = 200;
            var duration = time / $('.count').eq(i).data('count');
            setInterval(() => {
                if (num < $('.count').eq(i).data('count')) {
                    num += 1;
                    $('.number-count').eq(i).html(num)
                }

            }, duration);
        }
    }

    //when scrolling counter began count
    var viewTop = $(document).scrollTop();
    var viewBottom = viewTop + $(window).height()
    var sectionTop = $('#parallax').scrollTop();
    var sectionBottom = sectionTop + $('#parallax').height();
    if (viewTop < sectionTop || viewBottom > sectionBottom) {
        counter();
    }


    //changing of parallaxes backgrounds on about page 
    $(document).on('scroll', () => {
        if ($(document).scrollTop() > $('#parallax-about').height()) {
            $('.parallax-2nd').css('z-index', '-1')
        } else {
            $('.parallax-2nd').css('z-index', '-3')
        }
    })

    //to make the faq content appear
    // for(let i=0; i<$('.faq-header').length; i++){
    //     $('.faq-header')[i].click(()=>{
    //         $('.faq-content')[i].toggleClass('show');
    //     })
    // }
    // $('.faq-header').click(()=>{
    //     $('.faq-content').toggleClass('show');
    // })


    $('.faq-header').each(function(index,item){
        $('.faq-header').eq(index).click(()=>{
            $('.faq-content').not(':eq('+index +')').removeClass('show');
            $('.faq-content').eq(index).toggleClass('show')
            $('.faq-header').eq(index).toggleClass('collapsed')

        })
     });







});