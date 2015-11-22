module.exports = function (grunt) {
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
    
    grunt.registerTask('heroku', [
        'jekyll:heroku',
        'copy:build'
    ]);
    
	grunt.registerTask('deploy', [
        'clean',
        'jekyll:prod',
        'copy:build',
        'favicons',
        's3:website',
        'rsync:prod'
    ]);
	
	grunt.registerTask('default', ['run']);
};
