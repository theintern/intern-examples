define({

	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '2.30.0'
	},

	environments: [
		{ browserName: 'firefox', version: ['17', '18', '19', '20'],
			platform: [ 'Linux', 'Mac 10.6', 'Windows 2003', 'Windows 2012' ] },

		{ browserName: 'safari', version: ['3', '4'], platform: [ 'Windows 2003' ] },
		{ browserName: 'safari', version: '5', platform: [ 'Mac 10.6', 'Windows 2003', 'Windows 2008' ] },
		{ browserName: 'safari', version: '6', platform: [ 'Mac 10.8' ] },

		{ browserName: 'ipad', version: '5.1', platform: [ 'Mac 10.8' ] },
		{ browserName: 'ipad', version: '6', platform: [ 'Mac 10.8' ] },
		{ browserName: 'ipad', version: '4.3', platform: [ 'Mac 10.6' ] },
		{ browserName: 'ipad', version: '5', platform: [ 'Mac 10.6' ] },

		{ browserName: 'iphone', version: '5.1', platform: [ 'Mac 10.8' ] },
		{ browserName: 'iphone', version: '6', platform: [ 'Mac 10.8' ] },
		{ browserName: 'iphone', version: '5', platform: [ 'Mac 10.6' ] },

		{ browserName: 'opera', version: ['11'], platform: [ 'Windows 2003', 'Windows 2008', 'Windows 2012' ] },
		{ browserName: 'opera', version: '12', platform: [ 'Linux', 'Windows 2003', 'Windows 2008' ] },

		{ browserName: 'chrome', platform: [ 'Mac 10.6', 'Mac 10.8', 'Windows 2003', 'Windows 2008' ] },

		{ browserName: 'internet explorer', version: '6', platform: ['Windows 2003'] },
		{ browserName: 'internet explorer', version: ['7','8'], platform: ['Windows 2003', 'Windows 2008'] },
		{ browserName: 'internet explorer', version: '9', platform: ['Windows 2008'] },
		{ browserName: 'internet explorer', version: '10', platform: ['Windows 2012'] },

		{ browserName: 'android', version: '4', platform: ['Linux'] }
	],

	maxConcurrency: 3,
	useSauceConnect: true,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4445
	},

	// Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
	// used here
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ 'travis-ci-example' ]
	},

	functionalSuites: [ ],

	// Non-functional test suite(s) to run in each browser
	suites: [ 'test/lib/demo' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^travis-ci-example\/tests\//
});
