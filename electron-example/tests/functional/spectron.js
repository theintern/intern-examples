// A simple test to verify a visible window is opened with a title
import { Application } from 'spectron';

const assert = intern.getPlugin('chai.assert');
const { registerSuite } = intern.getPlugin('interface.object');

let app;

registerSuite('Application', {
	beforeEach() {
		app = new Application({
			path: 'node_modules/electron/dist/Electron.app/Contents/MacOS/Electron',
			args: ['build/bootstrap.js']
		});
		return app.start();
	},

	afterEach() {
		return app.stop().then(() => {
			app = null;
		});
	},

	tests: {
		initialized() {
			return app.browserWindow.isVisible()
				.then(isVisible => assert.isTrue(isVisible))
				.then(() => app.client.getTitle())
				.then(title => assert.equal(title, 'Redux TodoMVC Example'))
		},

		'add item'() {
			return app.client
				.setValue('input.new-todo', 'Task 1\n')
				.setValue('input.new-todo', 'Task 2\n')
				.setValue('input.new-todo', 'Task 3')
				.getValue('input.new-todo')
				.then(val => assert.include(val, 'Task 3'));
		}
	}
});
