import Todo from 'src/models/todo';
import * as jQuery from 'jquery';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

let todo;
let ajax;

class Model extends Todo {
	urlRoot = 'mockUrlRoot';
}

registerSuite('todo model', {
	before() {
		// Mock the jquery ajax method for now
		ajax = jQuery.ajax;
		(<any>jQuery).ajax = <any>(function () {});
	},

	after() {
		(<any>jQuery).ajax = ajax;
	},

	beforeEach() {
		todo = new Model();
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
