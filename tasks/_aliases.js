module.exports = function (grunt) {
	grunt.registerTask('run', ['jekyll:serve']);
	
    grunt.registerTask('build', ['jekyll:build']);
    
    grunt.registerTask('staging', [
        'jekyll:staging'
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