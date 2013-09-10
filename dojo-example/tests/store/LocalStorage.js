define([
	'intern!object',
	'intern/chai!assert',
	'todo/store/LocalStorage'
], function (registerSuite, assert, LocalStorage) {
	var store;

	registerSuite({
		name: 'LocalStorage Store',

		setup: function () {
			store = new LocalStorage({
				data: [
					{id: 1, name: 'one', prime: false},
					{id: 2, name: 'two', even: true, prime: true},
					{id: 3, name: 'three', prime: true},
					{id: 4, name: 'four', even: true, prime: false},
					{id: 5, name: 'five', prime: true}
				]
			});
		},

		get: function () {
			assert.strictEqual(store.get(4).name, 'four');
			assert.isTrue(store.get(5).prime);
		},

		getIdentity: function () {
			var item = store.get(3);
			assert.strictEqual(store.getIdentity(item), 3);
		},

		'put': function () {
			var four = store.get(4);
			four.square = true;
			store.put(four);
			four = store.get(4);
			assert.isTrue(four.square);
		},

		'add': function () {
			store.put({
				id: 6,
				perfect: true
			});
			assert.isTrue(store.get(6).perfect);
		}
	});
});