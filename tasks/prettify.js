module.exports = function (grunt) {
    'use strict';

    var config = {
        html: {
            expand: true,
            cwd: 'build',
            ext: '.html',
            src: [
                '**/*.html',
                '!uploads/**/*.html'
            ],
            brace_style: 'expand',
            unformatted: [
                'pre',
                'code'
            ],
            dest: 'build'
        }
    };

    grunt.config.set('prettify', config);
};
