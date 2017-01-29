// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
// These default settings work OK for most people. The options that *must* be changed below are the packages, suites,
// excludeInstrumentation, and (if you want functional tests) functionalSuites
define({
	// Functional test suite(s) to execute against each browser once unit tests are completed
	suites: ['tests/lib/demo'],

	// A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
	// to completely disable code coverage.
	excludeInstrumentation: true
});