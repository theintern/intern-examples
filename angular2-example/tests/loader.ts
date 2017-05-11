/* global intern, SystemJS, Promise */

intern.registerLoader(config => {
	let scripts = [
		'node_modules/systemjs/dist/system.src.js'
	];

	// Load some extra dependencies if we're in a browser
	if (intern.environment === 'browser') {
		scripts.unshift('node_modules/reflect-metadata/Reflect.js');
		scripts.unshift('node_modules/zone.js/dist/zone.js');
	}

	return intern.loadScript(scripts).then(() => {
		if (intern.environment !== 'browser') {
			SystemJS.config({
				baseURL: './node_modules',
				map: {
					tests: './dist/tests',
					app: './dist/app',
					istanbul: './dist/tests/systemjs-istanbuljs.js',
					fs: '@node/fs',
					babylon: '@node/babylon',
					'babel-types': '@node/babel-types',
					'babel-traverse': '@node/babel-traverse',
					'babel-template': '@node/babel-template',
					'babel-generator': '@node/babel-generator',
					crypto: '@node/crypto',
					path: '@node/path',
					url: '@node/url'
				},
				packageConfigPaths: [
					'./node_modules/*/package.json',
					'./node_modules/@angular/*/package.json'
				],
				packages: {
					app: {
						main: './bootstrap.js',
						defaultExtension: 'js'
					},
					rxjs: {
						defaultExtension: 'js'
					}
				},
				meta: {
					'app/*': {
						loader: 'istanbul'
					}
				}
			});
		}
		else {
			SystemJS.config({
				baseURL: '/node_modules',
				map: {
					tests: './dist/tests',
					app: './dist/app'
				},
				packageConfigPaths: [
					'./node_modules/*/package.json',
					'./node_modules/@angular/*/package.json'
				],
				packages: {
					app: {
						main: 'bootstrap.js',
						defaultExtension: 'js'
					},
					rxjs: {
						defaultExtension: 'js'
					}
				}
			});
		}

		return Promise.all(config.suites.map((suite: string) => {
			return SystemJS.import(suite);
		})).then(() => {});
	});
});
