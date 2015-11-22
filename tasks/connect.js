module.exports = function (grunt) {
    'use strict';

    var config = {
        server: {
            options: {
                port: 4000,
                base: 'build'
            }
        }
    };

    grunt.config.set('connect', config);
};
