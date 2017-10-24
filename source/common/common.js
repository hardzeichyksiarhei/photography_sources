//Fonts
import './../fonts/fonts.sass';

// Bootstrap style
import "./../libs/bootstrap/bootstrap.css"

//Common style
import './common.sass';

import infoXML from '../xml/info.xml';

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
            if ($(".top-nav-mobile").css('display') !== 'block') topLine.removeClass('active');
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

    $(".hamburger--collapse").click(function () {
        $(this).toggleClass("is-active");

        if ($window.scrollTop() === 0)
            $('.top-line').toggleClass('active');

        setTimeout(() => {
            $(".top-nav-mobile").slideToggle();
        }, 200);
        return false;
    });

    //------------------------------------------
    //------------------------------------------

    let infoXMLContent = "<table class='info-table'>";

    let dataXML = infoXML.items.item[0];

    infoXMLContent += "<tr><td><span>ФИО: </span>" + dataXML['fio'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Факультет:  </span>" + dataXML['faculty'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Специальность: </span>" + dataXML['specialty'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Курс: </span>" + dataXML['class'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Группа: </span>" + dataXML['group'] + "</td></tr>";

    infoXMLContent += "</table>";

    $('.info-table-wrapper').append(infoXMLContent);

});

