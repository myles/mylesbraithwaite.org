module.exports = function (grunt) {
    var config = {
        options: {
            coast: true,
            firefox: true,
            windowsTile: true,
            tileBlackWhite: true,
            tileColor: '#477dca',
            androidHomescreen: true,
            appleTouchBackgroundColor: 'none'
        },
        icons: {
            src: 'source/_assets/images/beaker.png',
            dest: 'build/assets/icons/'
        }
    };
    
    grunt.config.set('favicons', config);
};
