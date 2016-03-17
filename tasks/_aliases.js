module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('run', [
        'jekyll:development',
        'copy:build',
        'connect',
        'watch:development'
    ]);

    grunt.registerTask('build', [
        'jekyll:build',
        'copy:build'
    ]);

    grunt.registerTask('staging', [
        'jekyll:staging',
        'copy:staging',
        'watch:staging'
    ]);

    grunt.registerTask('draft', [
        'jekyll:draft',
        'copy:draft',
        'watch:draft'
    ]);

    grunt.registerTask('heroku', [
        'jekyll:heroku',
        'copy:build'
    ]);

    grunt.registerTask('deploy', [
        'clean',
        'favicons',
        'jekyll:prod',
        'favicons',
        'copy:build',
        // 'prettify',
        'rsync:prod',
        's3',
        'clean'
    ]);

    grunt.registerTask('default', ['run']);
};
