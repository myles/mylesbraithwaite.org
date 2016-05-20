module.exports = function (grunt) {
    'use strict';

    var config = {
        uploads: {
            files: [{
                expand: true,
                cwd: 'source/_uploads/',
                src: ['**'],
                dest: 'build/uploads/'
            }]
        }
    };

    grunt.config.set('copy', config);
};
