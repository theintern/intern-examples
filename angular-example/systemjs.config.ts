SystemJS.config({
	map: {
		'rxjs': 'node_modules/rxjs',
		'@angular': 'node_modules/@angular',
		'app': 'dist/app',
		'tslib': 'node_modules/tslib/tslib.js'
	},
	// packages tells the System loader how to load when no filename and/or no extension
	packages: {
		'@angular/common': { main: 'bundles/common.umd.js' },
		'@angular/common/http': { main: '../bundles/common-http.umd.js' },
		'@angular/core': { main: 'bundles/core.umd.js' },
		'@angular/compiler': { main: 'bundles/compiler.umd.js' },
		'@angular/platform-browser': { main: 'bundles/platform-browser.umd.js' },
		'@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js' },
		'@angular/router': { main: 'bundles/router.umd.js' },
		'@angular/forms': { main: 'bundles/forms.umd.js' },
		app: {
			main: 'bootstrap.js',
			defaultExtension: 'js',
			meta: {
				'./*.js': {
					loader: 'dist/systemjs-angular-loader.js'
				}
			}
		},
		rxjs: {
			defaultExtension: 'js'
		}
	}
});
