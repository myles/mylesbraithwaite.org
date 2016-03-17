module.exports = function (grunt) {
    'use strict';

    var config = {
        build: {
            files: [{
                expand: true,
                cwd: 'source/_uploads/',
                src: ['**'],
                dest: 'build/uploads/'
            }]
        },
        staging: {
            files: [{
                expand: true,
                cwd: 'source/_uploads/',
                src: ['**'],
                dest: '/Users/Myles/Sites/sites/mylesbraithwaite-org/html/uploads/'
            }]
        },
        draft: {
            files: [{
                expand: true,
                cwd: 'source/_uploads/',
                src: ['**'],
                dest: '/srv/www/mylesbraithwaite.org/draft/uploads/'
            }]
        }
    };

    grunt.config.set('copy', config);
};
