module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            trueColor: true,
            precomposed: true,
            appleTouchBackgroundColor: "#f7f7f7",
            coast: true,
            windowsTile: true,
            tileBlackWhite: false,
            tileColor: "#f7f7f7",
            appleTouchPadding: 20,
            firefox: true,
            androidHomescree: true,
            html: 'source/_includes/head_favicons.html',
            HTMLPrefix: '/',
            indent: ''
        },
        icons: {
            src: './source/_assets/images/beaker.500x500.png',
            dest: 'build/'
        }
    };

    grunt.config.set('favicons', config);
};
