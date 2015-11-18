module.exports = function (grunt) {
	grunt.registerTask('run', [
        'jekyll:development',
        'connect',
        'watch:development'
    ]);
	
    grunt.registerTask('build', ['jekyll:build']);
    
    grunt.registerTask('staging', [
        'jekyll:staging',
        'watch:staging'
    ]);
    
	grunt.registerTask('deploy', [
        'clean',
        'jekyll:prod',
        'favicons',
        's3:website',
        'rsync:prod'
    ]);
	
	grunt.registerTask('default', ['run']);
};
