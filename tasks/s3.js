module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            accessKeyId: "<%= aws.accessKeyId %>",
            secretAccessKey: "<%= aws.secretAccessKey %>",
            bucket: "mylesbraithwaite.org"
        },
        website: {
            cwd: "build",
            src: "**"
        }
    };

    grunt.config.set('s3', config);
};
