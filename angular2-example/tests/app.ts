import TodoApp from 'app/app';

const registerSuite = intern.getInterface('object').registerSuite;
const assert = intern.getAssertions('assert');

registerSuite({
	name: 'TodoApp',

	tests: {
		create() {
			const fakeStore: any = {};
			const app = new TodoApp(fakeStore);
			assert.isNotNull(app);
		}
	}
});
