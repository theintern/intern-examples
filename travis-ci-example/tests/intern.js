define({

	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '2.39.0'
	},

	environments: [
	],

	maxConcurrency: 3,
	useSauceConnect: false,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4445,
		SAUCE_USERNAME: 'intern-example-ci',
		SAUCE_ACCESS_KEY: 'a4eb8d67-ef84-444e-a436-b588abb7faef'
	},

	// Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
	// used here
	loaderOptions: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ 'travis-ci-example' ]
	},

	functionalSuites: [ ],

	// Non-functional test suite(s) to run in each browser
	suites: [ 'tests/lib/demo' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /./
});
