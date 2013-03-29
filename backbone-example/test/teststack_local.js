define([
	'./teststack'
], function (teststack) {
	// simply override the main config file and adjust it to suite the local env

	// disable Sauce Connect for local config
	teststack.useSauceConnect = false;

	// adjust the local Selenium port
	teststack.webdriver.port = 4444;

	// local machines will probably not have a wide range of browsers like
	// Sauce Labs, so we simplify the environments list.
	teststack.environments = [
		{ browserName: 'firefox' }
	];

	return teststack;
});
