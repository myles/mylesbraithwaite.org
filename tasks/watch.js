module.exports = function (grunt) {
    var config = {
        development: {
            files: [
                'source/*',
                'source/**/*'
            ],
            tasks: ['jekyll:build'],
            options: {
                livereload: true
            }
        },
        staging: {
            files: [
                'source/*',
                'source/**/*'
            ],
            tasks: ['jekyll:staging'],
            options: {
                livereload: true
            }
        }
    };
    
    grunt.config.set('watch', config);
};
