/*jshint node:true */
module.exports = function (grunt) {
	grunt.initConfig({
		intern: {
			options: {
				excludeInstrumentation: true,
				preload: 'app/Block.js',
				suites: [ 'tests/lib/add.js', 'tests/lib/get.js' ]
			},
			node: {
				options: {}
			},
			browser: {
				options: {
					webdriver: true,
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
	grunt.registerTask('test:browser', ['intern:webdriver']);

	// By default we just test
	grunt.registerTask('default', ['test']);
};
