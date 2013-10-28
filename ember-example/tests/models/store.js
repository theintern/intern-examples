/*global Todos, DS */

define([
	'intern!object',
	'intern/chai!assert',
	'intern/order!jquery/jquery',
	'intern/order!handlebars/handlebars',
	'intern/order!ember/ember',
	'intern/order!todo/libs/ember-data',
	'intern/order!emberStorage/localstorage_adapter',
	'intern/order!todo/app',
	'intern/order!todo/models/todo',
	'intern/order!todo/controllers/todos_controller'
], function (registerSuite, assert) {
	registerSuite({
		name: 'store',

		teardown: function () {
			window.localStorage.removeItem('todos-emberjs');
		},

		'default store alias': function () {
            assert.isTrue(DS.get('defaultStore') instanceof DS.Store, 'Todos.Store should be the default store.');
        },

		'createRecord proxy': function () {
			var stubbedCreateRecord = DS.get('defaultStore').createRecord,
				createCalled = false;

			DS.get('defaultStore').createRecord = function () {
				createCalled = true;
			};

			Todos.Todo.createRecord({title: 'someTitle'});
			assert.isTrue(createCalled, 'Model should proxy the store when creating a record.');
			DS.get('defaultStore').createRecord = stubbedCreateRecord;
		}
	});
});