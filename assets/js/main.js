$(document).ready(function () {
    //#region loader
    $('.loader').fadeOut('slow')
    //#endregion
    
    //#region carousel
    //owl-carousel options
    if ($('.owl-carousel').length) {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: false,
            touchDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            769: {
                items: 1
            }
        });
    }
    //when click image, carousel appear
    $('.image-popup').on('click', () => {
        $('.owl-carousel').fadeIn('slow');
        $('body').addClass('overflow');
    })
    //when click close button, carousel disappear
    $('.close-button').on('click', () => {
        $('.owl-carousel').fadeOut('slow');
        $('body').removeClass('overflow');

    })
    //when click anywhere except slides , carousel disappear
    $('.owl-item').on('click', function (e) {
        $('.owl-carousel').fadeOut('slow');
        $('body').removeClass('overflow');
    });

    $('.owl-item div').on('click', function (e) {
        e.stopPropagation();
    });
    //#endregion

    //#region header
    // for the display of header
    function header() {
        if ($(document).scrollTop() > 0) {
            $('header').addClass('white')
        } else {
            $('header').removeClass('white');
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
        $('.nav-coll').toggleClass('showing');
    })
    //#endregion

    //#region auto-scroll
    //auto scroll when clicking navbar
    //scroll to cloud-services section
    $('.features-button').click(() => {
        $('.navbar-toggler').removeClass('coll');
        $('.nav-coll').removeClass('showing');
        $('html').animate({ scrollTop: $('#cloud-services').offset().top }, 700);
        return false;

    })
    //scroll to our-team section
    $('.team-button').click(() => {
        $('.navbar-toggler').removeClass('coll');
        $('.nav-coll').removeClass('showing');
        $('html').animate({ scrollTop: $('#our-team').offset().top }, 700);
        return false;

    })
    //scroll to  pricing section
    $('.pricing-button').click(() => {
        $('.navbar-toggler').removeClass('coll');
        $('.nav-coll').removeClass('showing');
        $('html').animate({ scrollTop: $('#pricing').offset().top }, 700);
        return false;

    })
    //scroll to latest-blogs section
    $('.blogs-button').click(() => {
        $('.navbar-toggler').removeClass('coll');
        $('.nav-coll').removeClass('showing');
        $('html').animate({ scrollTop: $('#latest-blogs').offset().top }, 700);
        return false;

    })
    //#endregion

    //#region statistic-count-up
    let totalSecond = 1500;
    //counting up
    function counter() {
        $('.count').each(function () {
            let num = $(this).data("count");
            let start = 0;
            let interval = setInterval(() => {
                if (start < num) {
                    start++;
                    $(this).find(".number-count").text(start);
                } else {
                    clearInterval(interval);
                }
            }, totalSecond / num);
        });
    }
    let isScrolled = false;
    //count up if section seems on window
    function view() {
        if ($('#parallax-statistic').length) {
            $('#parallax-statistic .count').each((index) => {
                const viewTop = $(document).scrollTop();
                const viewBottom = viewTop + $(window).height()
                const sectionTop = $('#parallax-statistic .count').eq(index).offset().top;
                if (viewTop < sectionTop && viewBottom > sectionTop) {
                    if (!isScrolled) {
                        counter();
                        isScrolled = true;
                    }
                }
            })
        }
    }
    //count up when scroll
    $(document).scroll(() => {
        view();
    })
    //count up when page load
    $(window).on('load', () => {
        view();
    })
    //#endregion

    //#region changed-parallaxes
    //changing of parallaxes backgrounds on about page 
    function changeParallax() {
        if ($(document).scrollTop() > $('.changed-parallax').height()) {
            $('.parallax-2nd').css('z-index', '-1')
        } else {
            $('.parallax-2nd').css('z-index', '-3')
        }
    }
    $(document).on('scroll', () => {
        changeParallax();
    })
    $(window).on('load',()=>{
        changeParallax();
    })
    //#endregion

    //#region faq
    //to make the faq content appear
    $('.faq-header').each(function (index, item) {
        $('.faq-header').eq(index).click(() => {
            $('.faq-content').not(':eq(' + index + ')').removeClass('show');
            $('.faq-content').eq(index).toggleClass('show')
            $('.faq-header').eq(index).toggleClass('collapsed')

        })
    });
    //#endregion

    //#region scroll effects
    //effects when scroll down
    function scrollDown() {
        if ($('.services-main').length) {
            $('.services-main .service').each((index) => {
                const viewTop = $(document).scrollTop();
                const viewBottom = viewTop + $(window).height()
                const sectionTop = $('.services-main .service').eq(index).offset().top;
                if (viewTop < sectionTop && viewBottom > sectionTop) {
                    $('.services-main .service').eq(index).css('transform', 'translateY(0px)');
                    $('.services-main .service').eq(index).css('opacity', '1');
                    $('.services-main .service').eq(index).css('transition-delay', `${0.1 * index}s`);
                }
            })

        }
        if ($('#cloud-services').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('#cloud-services .image').offset().top;
            if (viewTop < sectionTop && viewBottom > sectionTop) {
                $('#cloud-services .image').css('transform', 'translateX(0px)');
                $('#cloud-services .image').css('opacity', '1');
            }
        }
        if ($('#development-services').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('#development-services .image').offset().top;
            if (viewTop < sectionTop && viewBottom > sectionTop) {
                $('#development-services .image').css('transform', 'translateX(0px)');
                $('#development-services .image').css('opacity', '1');
            }
        }
        if ($('#pricing').length) {
            $('#pricing .plan').each((index) => {
                const viewTop = $(document).scrollTop();
                const viewBottom = viewTop + $(window).height()
                const sectionTop = $('#pricing .plan').eq(index).offset().top;
                if (viewTop < sectionTop && viewBottom > sectionTop) {
                    $('#pricing .plan').eq(index).css('transform', 'translateY(0px)');
                    $('#pricing .plan').eq(index).css('opacity', '1');
                    $('#pricing .plan').eq(index).css('transition-delay', `${0.1 * index}s`);
                }
            })

        }
    }

    //call function when scroll
    $(document).scroll(() => {
        scrollDown();
    })
    //call function when page load
    $(window).on('load', () => {
        scrollDown();
    })
    //#endregion
});