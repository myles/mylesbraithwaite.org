module.exports = function (grunt) {
    'use strict';

    var config = {
        devel: {
            files: [
                'source/*',
                'source/**/*',
                '!source/_uploads'
            ],
            tasks: [
                'jekyll:build'
            ],
            options: {
                livereload: true
            }
        }
    };

    grunt.config.set('watch', config);
};
