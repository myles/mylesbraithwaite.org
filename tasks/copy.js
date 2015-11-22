module.exports = function (grunt) {
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
        }
    };
    
    grunt.config.set('copy', config);
};
