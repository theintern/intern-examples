define({

	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '2.30.0'
	},

	environments: [
		{ browserName: 'firefox', version: '19', platform: [ 'Linux', 'Mac 10.6', 'Windows 2012' ]  }
	],

	maxConcurrency: 3,
	useSauceConnect: true,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4445,
		SAUCE_USERNAME: 'intern-example-ci',
		SAUCE_ACCESS_KEY: '89ac3089-17b3-4e9b-aaf3-c475b27fa441'
	},

	// Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
	// used here
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ 'travis-ci-example' ]
	},

	functionalSuites: [ ],

	// Non-functional test suite(s) to run in each browser
	suites: [ 'tests/lib/demo' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^/
});
