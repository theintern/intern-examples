require('babel-register');
if (intern.config.showConfig) {
	console.log(JSON.stringify(intern.config, null, '  '));
	process.exit(0);
}
