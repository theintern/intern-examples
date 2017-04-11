const assert = intern.getAssertions('assert');
const { registerSuite } = intern.getInterface('object');

registerSuite({
	name: 'Application',

	beforeEach() {
		return this.remote.refresh();
	},

	tests: {
		initialized() {
			return this.remote.getPageTitle()
				.then(title => assert.equal(title, 'Redux TodoMVC Example'));
		},

		'add item'() {
			return this.remote
				.setFindTimeout(5000)
				.findByCssSelector('input.new-todo')
				.click()
				.pressKeys('Task 1\n')
				.pressKeys('Task 2\n')
				.pressKeys('Task 3')
				.getSpecAttribute('value')
				.then(val => assert.include(val, 'Task 3'));
		}
	}
});
