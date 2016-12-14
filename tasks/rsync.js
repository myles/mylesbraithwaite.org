module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            args: ["--verbose"]
        },
        prod: {
            options: {
                src: "./build/",
                dest: "/srv/www/mylesbraithwaite.org/www/html",
                host: "bear.mylesbraithwaite.com",
                delete: true,
                recursive: true,
                ssh: true
            }
        }
    };

    grunt.config.set('rsync', config);
};
