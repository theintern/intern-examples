const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

import keys from '@theintern/leadfoot/keys';

registerSuite('Todo (functional)', {
	'submit form'() {
		return this.remote
			.get('index.html')
			.findByCssSelector('.new-todo')
			.type('Task 1')
			.type(keys.RETURN)
			.type('Task 2')
			.type(keys.RETURN)
			.type('Task 3')
			.getSpecAttribute('value')
			.then(value => {
				assert.ok(
					value.indexOf('Task 3') > -1,
					'Task 3 should remain in the new todo'
				);
			});
	}
});
