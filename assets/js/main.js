$(document).ready(function () {
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
        $('html').animate({ scrollTop: $('#cloud-services').offset().top }, 700);
        return false;
    })
    //scroll to our-team section
    $('.team-button').click(() => {
        $('html').animate({ scrollTop: $('#our-team').offset().top }, 700);
        return false;
    })
    //scroll to  pricing section
    $('.pricing-button').click(() => {
        $('html').animate({ scrollTop: $('#pricing').offset().top }, 700);
        return false;
    })
    //scroll to latest-blogs section
    $('.blogs-button').click(() => {
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
        if ($('#parallax').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('#parallax').offset().top;
            const sectionBottom = sectionTop + $('#parallax').height();
            if (viewTop < sectionTop && viewBottom > sectionBottom) {
                if (!isScrolled) {
                    counter();
                    isScrolled = true;
                }
            }
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

    //#region about page parallaxes
    //changing of parallaxes backgrounds on about page 
    $(document).on('scroll', () => {
        if ($(document).scrollTop() > $('#parallax-about').height()) {
            $('.parallax-2nd').css('z-index', '-1')
        } else {
            $('.parallax-2nd').css('z-index', '-3')
        }
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
    $(document).scroll(() => {
        if ($('.services-main').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('.services-main ').offset().top;
            const sectionBottom = sectionTop + $('.services-main').height();
            if (viewTop < sectionTop && viewBottom > sectionBottom) {
                $('.services-main .service').css('transform', 'translateY(0px)');
                $('.services-main .service').css('opacity', '1');
                $('.services-main .service').each((index) => {
                    $('.services-main .service').eq(index).css('transition-delay', `${0.1 * index}s`);
                })
            }
        }
    })
    $(document).scroll(() => {
        if ($('#cloud-services').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('#cloud-services').offset().top;
            const sectionBottom = sectionTop + $('#cloud-services').height();
            if (viewTop < sectionTop && viewBottom > sectionBottom) {
                $('#cloud-services .image').css('transform', 'translateX(0px)');
                $('#cloud-services .image').css('opacity', '1');
            }
        }
    })
    $(document).scroll(() => {
        if ($('#development-services').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('#development-services').offset().top;
            const sectionBottom = sectionTop + $('#development-services').height();
            if (viewTop < sectionTop && viewBottom > sectionBottom) {
                $('#development-services .image').css('transform', 'translateX(0px)');
                $('#development-services .image').css('opacity', '1');
            }
        }
    })
    $(document).scroll(() => {
        if ($('#pricing').length) {
            const viewTop = $(document).scrollTop();
            const viewBottom = viewTop + $(window).height()
            const sectionTop = $('#pricing .head').offset().top;
            const sectionBottom = sectionTop + $('#pricing .head').height();
            if (viewTop < sectionTop && viewBottom > sectionBottom) {
                $('.plan').css('transform', 'translateY(0px)');
                $('.plan').css('opacity', '1');
                $('.plan').each((index) => {
                    $('.plan').eq(index).css('transition-delay', `${0.1 * index}s`);
                })

            }
        }
    })
    //#endregion

    //#region loader
    $(window).on('load', () => {
        $('.loader').fadeOut('slow')
    })
    //#endregion

});