import 'justifiedGallery/dist/css/justifiedGallery.css'

import './index.sass';

import 'justifiedGallery/dist/js/jquery.justifiedGallery';

$(function () {

    //---------------- Plugins -----------------
    //------------------------------------------

    $('#portfolio-grid').justifiedGallery({
        rowHeight: 320,
        margins: 20
    });

    //------------------------------------------
    //------------------------------------------

});
