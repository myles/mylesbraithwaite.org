module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            args: ["--verbose"]
        },
        prod: {
            options: {
                src: "./build/",
                dest: "/srv/www/org_mylesbraithwaite_www/html",
                host: "panda",
                delete: true,
                recursive: true,
                ssh: true
            }
        }
    };

    grunt.config.set('rsync', config);
};
