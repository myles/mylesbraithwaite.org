module.exports = function (grunt) {
    var config = {
		options: {
			bundleExec: true,
			config: '_config.yml'
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
                config: '_config.yml'
            }
        },
        staging: {
            options: {
                build: true,
                config: '_config.yml,_config.staging.yml',
                dest: '~/Sites/sites/mylesbraithwaite-org/html/'
            }
        },
        heroku: {
            options: {
                build: true,
                config: '_config.yml,_config.heroku.yml'
            }
        },
        prod: {
            options: {
                build: true,
                config: '_config.yml,_config.production.yml'
            }
        }
    };
    
    grunt.config.set('jekyll', config);
};
