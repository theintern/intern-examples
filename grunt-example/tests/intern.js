define({

	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '2.39.0'
	},

	environments: [
		{ browserName: 'firefox' }
	],

	maxConcurrency: 3,
	useSauceConnect: false,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4444
	},

	// Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
	// used here
	loader: { },

	// Non-functional test suite(s) to run in each browser
	suites: [ 'tests/lib/add', 'tests/lib/get' ],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^/
});