import { TodoStore } from 'app/services/store';

const registerSuite = intern.getInterface('object').registerSuite;
const assert = intern.getAssertions('assert');

registerSuite({
	name: 'TodoStore',

	before() {
		const globalVar: any = typeof window !== 'undefined' ? window : global;
		if (!globalVar.localStorage) {
			globalVar.localStorage = {
				getItem() { return '[]'; },
				setItem() { }
			};
		}
	},

	tests: {
		create() {
			const store = new TodoStore();
			assert.isNotNull(store);
		}
	}
});
