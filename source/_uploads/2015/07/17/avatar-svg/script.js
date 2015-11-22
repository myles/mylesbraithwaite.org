/*global $, document, SVGInjector */

$(document).ready(function () {
    'use strict';

    var inject_me = $('img.inject_me');

    SVGInjector(inject_me);

    function hide_all() {
        $('.list-group #naked').removeClass('active');

        $('.list-group #suite-and-tie').removeClass('active');
        $('.avatar .suite-and-tie').hide();

        $('.list-group #hipster').removeClass('active');
        $('.avatar .hipster').hide();

        $('.list-group #formal').removeClass('active');
        $('.avatar .formal').hide();
    }

    $(".list-group #naked").on("click", function () {
        hide_all();
        $('.list-group #naked').addClass('active');
    });

    $(".list-group #suite-and-tie").on("click", function () {
        hide_all();
        $('.avatar .suite-and-tie').show();
        $('.list-group #suite-and-tie').addClass('active');
    });

    $(".list-group #hipster").on("click", function () {
        hide_all();
        $('.avatar .hipster').show();
        $('.list-group #hipster').addClass('active');
    });

    $(".list-group #formal").on("click", function () {
        hide_all();
        $('.avatar .formal').show();
        $('.list-group #formal').addClass('active');
    });
});
