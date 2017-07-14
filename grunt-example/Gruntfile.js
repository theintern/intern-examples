/*jshint node:true */
module.exports = function (grunt) {
	grunt.initConfig({
		intern: {
			options: {
				excludeInstrumentation: true,
				require: 'app/Block.js',
				suites: [ 'tests/lib/add.js', 'tests/lib/get.js' ],
				reporters: [ 'runner' ]
			},
			node: {
				options: {}
			},
			browser: {
				options: {
					environments: 'chrome'
				}
			}
		}
	});

	// Loading using a local git copy
	grunt.loadNpmTasks('intern');

	// Register a test task
	grunt.registerTask('test', ['intern:node']);

	// Register a task for webdriver tests
	grunt.registerTask('test:browser', ['intern:browser']);

	// By default we just test
	grunt.registerTask('default', ['test']);
};
