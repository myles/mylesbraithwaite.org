/*global $, document, SVGInjector */

$(document).ready(function () {
    'use strict';

    var inject_me = $('img.inject_me');

    SVGInjector(inject_me);
});
