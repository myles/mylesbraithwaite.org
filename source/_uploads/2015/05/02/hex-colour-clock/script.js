/*jslint bitwise: true */
/*global $, document */

function invertColor(hexColor) {
    'use strict';
    // By: Salman A.
    // From: http://stackoverflow.com/a/9601429
    var color = hexColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;
    return color;
}

function hexColorClock() {
    'use strict';

    var now = new Date(),
        nowYear = now.getFullYear(),
        nowMonth = now.getMonth(),
        nowDay = now.getDate(),
        nowHours = now.getHours(),
        nowMinutes = now.getMinutes(),
        nowSeconds = now.getSeconds(),
        hexCodeDay,
        hexCodeTime;

    nowYear = nowYear.toString().substring(2);
    nowMonth = (nowMonth < 10 ? "0" : "") + nowMonth;
    nowDay = (nowDay < 10 ? "0" : "") + nowDay;
    nowHours = (nowHours < 10 ? "0" : "") + nowHours;
    nowMinutes = (nowMinutes < 10 ? "0" : "") + nowMinutes;
    nowSeconds = (nowSeconds < 10 ? "0" : "") + nowSeconds;

    hexCodeDay = "#" + nowYear + nowMonth + nowDay;
    hexCodeTime = "#" + nowHours + nowMinutes + nowSeconds;

    $('.day').css({
        'background-color': hexCodeDay,
        'color': invertColor(hexCodeDay)
    });

    $('.day h1').text(hexCodeDay);

    $('.day p').text(now.toLocaleDateString());

    $('.time').css({
        'background-color': hexCodeTime,
        'color': invertColor(hexCodeTime)
    });

    $('.time h1').text(hexCodeTime);

    $('.time p').text(now.toLocaleTimeString());
}

$(document).ready(function () {
    'use strict';

    $("h1").fitText(0.9);
    $("p").fitText(1.5);

    setInterval(function () { hexColorClock(); }, 1000);
});