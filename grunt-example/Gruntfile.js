module.exports = function (grunt) {

	grunt.initConfig({
		intern: {
			local: {
				options: {
					teststackDir: './intern',
					config: 'tests/intern.js'
				}
			}
		}
	});

	grunt.loadTasks('./intern/grunt');

	// Register a test task
	grunt.registerTask('test', ['intern']);

	// By default we just test
	grunt.registerTask('default', ['test']);
};
