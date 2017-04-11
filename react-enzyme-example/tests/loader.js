/* global intern, Promise, SystemJS */
intern.registerLoader(function (config) {
	if (intern.environment === 'browser') {
        return intern.loadScript('node_modules/systemjs/dist/system.src.js').then(function () {
			SystemJS.config({
				baseURL: '/',
				map: {
					'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
					'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
				},
				packages: {
					src: {
						defaultExtension: 'js'
					}
				},
				transpiler: 'plugin-babel'
			});
			return Promise.all(config.suites.map(function (suite) {
				return SystemJS.import(suite);
			}));
		});
	}
	else {
		require('babel-register');
		return intern.loadScript(config.suites);
	}
});
