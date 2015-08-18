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
        prod: {
            options: {
                build: true,
                config: '_config.yml,_config.production.yml'
            }
        }
    };
    
    grunt.config.set('jekyll', config);
};
