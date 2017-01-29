// Small example file of config
define({
	environments: [
		{ browserName: 'chrome' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 1,

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: true
});