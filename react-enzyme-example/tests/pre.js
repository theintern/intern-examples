/* global intern */
if (intern.environment === 'webdriver') {
	var existsSync = require('fs').existsSync;
	var serve = require('serve');
	var server;

	intern.on('beforeRun', function () {
		if (!existsSync('build')) {
			throw new Error('Project must be built first');
		}
		else {
			server = serve('build', {
				port: 10543,
				silent: true
			});
		}
	});

	intern.on('afterRun', function () {
		server.stop();
	});
}
