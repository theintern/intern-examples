intern.on('beforeRun', () => {
	if (!require('fs').existsSync('build')) {
		throw new Error('Project must be built');
	}
});
