module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            accessKeyId: "<%= aws.accessKeyId %>",
            secretAccessKey: "<%= aws.secretAccessKey %>",
            bucket: "mylesbraithwaite.org",
            enableWeb: true
        },
        website: {
            cwd: "build",
            src: "**"
        },
        well_known: {
            options: {
                gzip: false
            },
            cwd: "build",
            src: ".well-known/**/*"
        }
    };

    grunt.config.set('s3', config);
};
