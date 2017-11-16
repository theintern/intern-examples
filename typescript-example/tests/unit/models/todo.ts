import Todo from 'src/models/todo';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

let todo;

registerSuite('todo model', {
	beforeEach() {
		todo = new Todo();
		todo.sync = () => Promise.resolve({});
	},

	tests: {
		defaults() {
			assert.isFalse(
				todo.get('completed'),
				'A Todo model should default the completed property to false'
			);
			assert.strictEqual(
				todo.get('title'),
				'',
				'A Todo model should default the title property to an empty string'
			);
		},

		toggle() {
			todo.toggle();
			assert.isTrue(
				todo.get('completed'),
				'Completed property should switch to true after being toggled for the first time'
			);

			todo.toggle();
			assert.isFalse(
				todo.get('completed'),
				'Completed property should switch back to false after being toggled again'
			);
		}
	}
});
