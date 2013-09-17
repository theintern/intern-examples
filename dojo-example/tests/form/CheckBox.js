define([
	'intern!object',
	'intern/chai!assert',
	'todo/form/CheckBox'
], function (registerSuite, assert, CheckBox) {
	var checkbox;

	registerSuite({
		name: 'CheckBox',

		setup: function () {
			checkbox = new CheckBox();
		},

		'get value': function () { 
			checkbox.set('value', 'arbitraryTitle');
			checkbox.set('checked', true);
			assert.strictEqual(checkbox.get('value'), true);
		},

		'set checked': function () {
			checkbox.set('value', 'arbitraryTitle');
			checkbox.set('checked', true);
			assert.strictEqual(checkbox.get('value'), true);
		}
	});
});