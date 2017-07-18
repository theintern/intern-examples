import TodoApp from 'app/app';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('TodoApp', {
	create() {
		const fakeStore: any = {};
		const app = new TodoApp(fakeStore);
		assert.isNotNull(app);
	}
});
