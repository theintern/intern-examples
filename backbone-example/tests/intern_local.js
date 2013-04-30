define([
	'./intern'
], function (intern) {
	// simply override the main config file and adjust it to suite the local env

	// disable Sauce Connect for local config
	intern.useSauceConnect = false;

	// adjust the local Selenium port
	intern.webdriver.port = 4444;

	// local machines will probably not have a wide range of browsers like
	// Sauce Labs, so we simplify the environments list.
	intern.environments = [
		{ browserName: 'firefox' }
	];

	return intern;
});
