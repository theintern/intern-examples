/* global intern */
var existsSync = require('fs').existsSync;
var serve = require('serve');
var server;

intern.on('beforeRun', function () {
	var config = intern.config;

	if (!existsSync('build')) {
		throw new Error('Project must be built first');
	}
	else if (config.environments.length > 0) {
		server = serve('build', {
			port: 10543,
			silent: true
		});
	}
});

intern.on('afterRun', function () {
	server.stop();
});
