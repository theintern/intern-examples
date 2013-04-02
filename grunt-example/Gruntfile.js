module.exports = function (grunt) {

	grunt.initConfig({
		teststack: {
			local: {
				options: {
					teststackDir: './dojo2-teststack',
					config: 'test/teststack.js'
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	// TODO: grunt.loadNpmTasks('grunt-intern');
	grunt.loadNpmTasks('grunt-teststack');

	// Register a test task
	grunt.registerTask('test', ['teststack']);

	// By default we just test
	grunt.registerTask('default', ['test']);
};
