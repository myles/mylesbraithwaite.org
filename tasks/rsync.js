module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            args: ["--verbose"],
            recursive: true
        },
        prod: {
            options: {
                src: "./build/",
                dest: "/srv/www/org_mylesbraithwaite_www/html",
                host: "myles@panda.mylesbraithwaite.com",
                port: "2222",
                delete: true,
            }
        }
    };

    grunt.config.set('rsync', config);
};
