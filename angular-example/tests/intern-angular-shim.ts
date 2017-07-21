interface AngularShimConfig {
	appConfig?: string | SystemJSLoader.Config;
	testConfig?: string | SystemJSLoader.Config;
	require?: string | string[];
}

intern.registerPlugin('angular-shim', async (config: AngularShimConfig) => {
	async function configureLoader(config: string | SystemJSLoader.Config) {
		if (config) {
			if (typeof config === "string") {
				await intern.loadScript(config);
			} else {
				SystemJS.config(config);
			}
		}
	}

	async function initTestEnv() {
		const { TestBed } = await SystemJS.import('@angular/core/testing');
		const { BrowserDynamicTestingModule, platformBrowserDynamicTesting } = await SystemJS.import('@angular/platform-browser-dynamic/testing');

		TestBed.initTestEnvironment(
			BrowserDynamicTestingModule,
			platformBrowserDynamicTesting()
		);

		intern.on('suiteAdd', suite => {
			suite['afterEach'] = () => {
				TestBed.resetTestingModule();
			};
		});
	}

	await configureLoader(config.appConfig);
	await configureLoader(config.testConfig);

	if (config.require && config.require.length) {
		await intern.loadScript(config.require);
	}

	await initTestEnv();
});
