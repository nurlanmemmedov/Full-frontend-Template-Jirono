$(document).ready(function () {
    $(document).on('scroll', () => {
        if ($(document).scrollTop() > 0) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky');
        }
    })

    $('.navbar-toggler').click(() => {
        $('.navbar-toggler').toggleClass('coll');
        $('form').css('display', 'none')
    })


    var viewTop = $(document).scrollTop();
    var viewBottom = viewTop + $(window).height()
    var sectionTop = $('#parallax').scrollTop();
    var sectionBottom = sectionTop + $('#parallax').height();
    var num = 0;
    if (viewTop < sectionTop || viewBottom > sectionBottom) {
        counter();
    }
        function counter() {
            for (let i = 0; i < $('.count').data('count'); i++) {
                num += 1;
                $('.count h1').text(num);
            }
        }
    




});