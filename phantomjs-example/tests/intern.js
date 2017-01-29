// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
// These default settings work OK for most people. The options that *must* be changed below are the packages, suites,
// excludeInstrumentation, and (if you want functional tests) functionalSuites
define({
	// Browsers to run integration testing against. Options that will be permutated are browserName, version, platform,
	// and platformVersion; any other capabilities options specified for an environment will be copied as-is. Note that
	// browser and platform names, and version number formats, may differ between cloud testing systems.
	environments: [ { browserName: 'phantomjs' } ],

	// Name of the tunnel class to use for WebDriver tests.
	// See <https://theintern.github.io/intern/#option-tunnel> for built-in options
	tunnel: 'SeleniumTunnel',

	// Unit test suite(s) to run in each browser
	suites: [ 'tests/test_example.js' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
	// to completely disable code coverage.
	excludeInstrumentation: true
});