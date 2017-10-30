define([
	'require',
	'todo/form/CheckBox'
], function (require, CheckBox) {
	var registerSuite = intern.getInterface('object').registerSuite;
	var assert = intern.getPlugin('chai').assert;
	var checkbox;

	registerSuite('CheckBox', {
		setup: function () {
			checkbox = new CheckBox();
		},

		tests: {
			'get value': function () {
				checkbox.set('value', 'arbitraryTitle');
				checkbox.set('checked', true);
				assert.strictEqual(checkbox.get('value'), true);
			},

			'set checked': function () {
				checkbox.set('checked', true);
				assert.strictEqual(checkbox.get('checked'), true);
			}
		}
	});
});
