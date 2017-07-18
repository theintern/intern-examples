SystemJS.config({
	map: {
		'sinon': 'node_modules/sinon/pkg/sinon.js'
	},
	packages: {
		'@angular/animations/browser/testing': {
			main: '../../bundles/animations-browser-testing.umd.js'
		},
		'@angular/core/testing': {
			main: '../bundles/core-testing.umd.js'
		},
		'@angular/common/testing': {
			main: '../bundles/common-testing.umd.js'
		},
		'@angular/common/http/testing': {
			main: '../../bundles/common-http-testing.umd.js'
		},
		'@angular/compiler/testing': {
			main: '../bundles/compiler-testing.umd.js'
		},
		'@angular/platform-browser/testing': {
			main: '../bundles/platform-browser-testing.umd.js'
		},
		'@angular/platform-browser-dynamic/testing': {
			main: '../bundles/platform-browser-dynamic-testing.umd.js'
		},
		'@angular/router/testing': {
			main: '../bundles/router-testing.umd.js'
		},
		'@angular/forms/testing': {
			main: '../bundles/forms-testing.umd.js'
		}
	}
});
