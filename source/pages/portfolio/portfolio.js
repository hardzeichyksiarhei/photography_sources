import 'justifiedGallery/dist/css/justifiedGallery.css'

import './portfolio.sass';

import 'justifiedGallery/dist/js/jquery.justifiedGallery';

$(function () {

    //---------------- Plugins -----------------
    //------------------------------------------

    $('#portfolio-grid').justifiedGallery({
        rowHeight: 200,
        margins: 20,
        lastRow: 'justify'
    });

    //------------------------------------------
    //------------------------------------------

});