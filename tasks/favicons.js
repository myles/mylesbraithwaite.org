module.exports = function (grunt) {
    var config = {
        options: {
            coast: true,
            firefox: true,
            windowsTile: true,
            tileBlackWhite: true,
            tileColor: '#477dca',
            androidHomescreen: true,
            appleTouchBackgroundColor: '#477dca',
            precomposed: false,
            // indent: '        ',
            // html: 'source/_includes/head_favicons.html',
            // HTMLPrefix: '/assets/icons/'
        },
        icons: {
            src: './source/_assets/images/beaker.png',
            dest: 'build/assets/icons/'
        }
    };
    
    grunt.config.set('favicons', config);
};
