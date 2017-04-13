/* global intern, SystemJS, Promise */

declare const SystemJS: any;

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
		SystemJS.config({
			baseURL: typeof document !== 'undefined' ? '/' : '',
			map: {
				rxjs: 'node_modules/rxjs',
				'@angular': 'node_modules/@angular',
				tests: 'dist/tests',
				app: 'dist/app'
			},
			packages: {
				'@angular/common': { main: 'bundles/common.umd.js' },
				'@angular/core': { main: 'bundles/core.umd.js' },
				'@angular/compiler': { main: 'bundles/compiler.umd.js' },
				'@angular/platform-browser': { main: 'bundles/platform-browser.umd.js' },
				'@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js' },
				'@angular/http': { main: 'bundles/http.umd.js' },
				'@angular/router': { main: 'bundles/router.umd.js' },
				'@angular/forms': { main: 'bundles/forms.umd.js' },
				app: {
					main: 'bootstrap.js',
					defaultExtension: 'js'
				},
				rxjs: {
					defaultExtension: 'js'
				}
			}
		});

		return Promise.all(config.suites.map((suite: string) => {
			return SystemJS.import(suite);
		})).then(() => {});
	});
});
