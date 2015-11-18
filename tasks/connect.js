module.exports = function (grunt) {
    var config = {
        server: {
            options: {
                port: 4000,
                base: 'build'
            }
        }
    };
    
    grunt.config.set('connect', config);
};
