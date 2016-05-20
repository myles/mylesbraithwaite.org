module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('develop', [
        'jekyll:devel',
        'copy:build',
        'connect',
        'watch:devel'
    ]);

    grunt.registerTask('build', [
        'clean',
        'jekyll:prod',
        'favicons',
        'copy:uploads'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'rsync:prod',
        'clean'
    ]);

    grunt.registerTask('default', ['develop']);
};
