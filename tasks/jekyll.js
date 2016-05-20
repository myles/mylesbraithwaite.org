module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            bundleExec: true,
            config: 'config/base.yml'
        },
        build: {
            options: {
                build: true
            }
        },
        serve: {
            options: {
                serve: true,
                auto: true
            }
        },
        devel: {
            options: {
                build: true,
                config: 'config/base.yml,config/devel.yml'
            }
        },
        prod: {
            options: {
                build: true,
                config: 'config/base.yml,config/prod.yml'
            }
        }
    };

    grunt.config.set('jekyll', config);
};
