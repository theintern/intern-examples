define({

	proxyPort: 9057,
	proxyUrl: 'http://localhost:9057/',

	capabilities: {
		'selenium-version': '2.39.0'
	},

	environments: [
		{ browserName: 'firefox' }
	],

	maxConcurrency: 3,

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