module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        aws: grunt.file.readJSON('.aws.json'),
        config: grunt.file.readYAML('_config.yml')
    });

    // Load all the grunt packages.
    Object.keys(
        require('./package.json').devDependencies
    ).forEach(function (dep) {
        if (dep.substring(0, 6) === 'grunt-') {
            grunt.loadNpmTasks(dep);
        }
    });

    grunt.task.loadTasks('./tasks/');
};
