/*global $, document, SVGInjector */

$(document).ready(function () {
    'use strict';

    var inject_me = $('img.inject_me');

    new SVGInjector(inject_me);
});
