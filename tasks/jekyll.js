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
        development: {
            options: {
                build: true,
                config: 'config/base.yml,config/development.yml'
            }
        },
        staging: {
            options: {
                build: true,
                config: 'config/base.yml,config/staging.yml',
                dest: '~/Sites/sites/mylesbraithwaite-org/html/'
            }
        },
        draft: {
            options: {
                build: true,
                draft: true,
                config: 'config/base.yml,config/staging.yml',
                dest: '/srv/www/mylesbraithwaite.org/draft/html/'
            }
        },
        heroku: {
            options: {
                build: true,
                config: 'config/base.yml,config/heroku.yml'
            }
        },
        prod: {
            options: {
                build: true,
                config: 'config/base.yml,config/production.yml'
            }
        }
    };

    grunt.config.set('jekyll', config);
};
