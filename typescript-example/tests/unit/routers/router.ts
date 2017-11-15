import Router from 'src/routers/router';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('router', {
	route() {
		let triggerType: string;
		const router = new Router({ todos: <any>{
			trigger(type: string) {
				triggerType = type;
			}
		}, disableHistory: true });
		router.setFilter('foo');
		assert.equal(router.filter, 'foo');
		assert.equal(triggerType, 'filter');
	}
});
