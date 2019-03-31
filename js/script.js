"use strict";

function GetHeightCss() {
    var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

    var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
    var css = "";
    var fullh = 0;
    var fullhSingle = 0;
    var guttersize = 0;
    var mobile_guttersize = 0;
    fullh = h - (guttersize * 2);
    fullhSingle = h - mobile_guttersize;
    var smallh = h / 2;
    var halfh = fullh;
    if ((halfh % 2) == 0) { halfh = halfh / 2; }
    else { halfh = (halfh - 1) / 2; }
    css = '.height-one-one { height: ' + fullh + 'px;}';
    css += '.height-one-half { height: ' + halfh + 'px;}';
    css += '@media screen and (max-width:1024px){';
    css += '.height-one-one {height: auto;}';
    css += '.height-one-half {height: auto;}';
    css += '.row.main-container.height-one-one { height: auto;}';
    css += '.comming-soon-page .height-one-one {height: ' + fullh + 'px;}';
    css += '}';
    var cssEle = document.getElementById('heightStyle');

    if (cssEle == null) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute("id", "heightStyle");
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));

        }
        head.appendChild(style);
    }
    else {
        cssEle.innerHTML = css;
    }

}
GetHeightCss();
$(window).resize(function () {
    GetHeightCss();
});

