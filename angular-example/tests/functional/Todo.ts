const { describe, before, it } = intern.getInterface('bdd');
const { expect } = intern.getPlugin('chai');

describe('functional/Todo', () => {
	before(async ({ remote }) => {
		await remote.get('index.html');
		await remote.setFindTimeout(5000);
		await remote.findDisplayedByCssSelector('todo-app');
	});

	it('should submit form', async ({ remote }) => {

		const input = remote.findByCssSelector('input.new-todo');
		await input.click();
		await input.pressKeys('Task 1');
		await input.pressKeys('\n');
		await input.pressKeys('Task 2');
		await input.pressKeys('\n');
		await input.pressKeys('Task 3');
		await input.pressKeys('\n');

		const todos = await remote.findAllByCssSelector('.todo-list > li');
		expect(todos).to.have.lengthOf(3);

		expect(await todos[0].getVisibleText()).to.equal('Task 1');
		expect(await todos[1].getVisibleText()).to.equal('Task 2');
		expect(await todos[2].getVisibleText()).to.equal('Task 3');
	});
});
