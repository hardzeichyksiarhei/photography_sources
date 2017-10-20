//Fonts
import '../fonts/fonts.sass';

//Common style
import './common.sass';

$(function () {

    let
        $window = $(window),
        windowHeight = 0,
        topLine = $('.top-line');

    //---------------- Methods -----------------
    //------------------------------------------

    function onResize() {
        windowHeight = $(window).height();
    }onResize();

    let arrowRotate = () => {
        if ($window.scrollTop() > windowHeight / 2) {
            $('.arrow-link').css({
                'transform': 'rotate(180deg)'
            });
        }
        else {
            $('.arrow-link').css({
                'transform': 'rotate(0)'
            });
        }
    };arrowRotate();

    let initTopLine = () => {
        if ($window.scrollTop() > 0) {
            topLine.addClass('active');
        }
        else {
            topLine.removeClass('active');
        }
    };initTopLine();

    //------------------------------------------
    //------------------------------------------



    //---------------- Events ------------------
    //------------------------------------------

    $window.on('scroll', function () {
        arrowRotate();
        initTopLine();
    });

    $window.on('resize', function () {
        onResize();
    });

    //------------------------------------------
    //------------------------------------------

});

