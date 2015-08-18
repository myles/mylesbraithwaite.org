module.exports = function (grunt) {
    var config = {
        options: {
            coast: true,
            firefox: true,
            firefoxRound: true,
            androidHomescreen: true
        },
        icons: {
            src: 'source/_assets/images/beaker-512x512.png',
            dest: 'build/assets/icons/'
        }
    };
    
    grunt.config.set('favicons', config);
};
