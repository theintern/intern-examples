define([
    'intern!object',
    'intern/chai!assert',
    'todo/utils'
], function (registerSuite, assert) {
    registerSuite({
        name: 'utils',

        uuid: function () {
            var uuid = window.Utils.uuid(),
                validUUIDRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

            assert.isTrue(validUUIDRegex.test(uuid), 'identifier should be a valid UUID');
        },

        pluralize: function () {
            assert.strictEqual(window.Utils.pluralize(1, 'todo'), 'todo', 'Word should be singular with singular count.');
            assert.strictEqual(window.Utils.pluralize(2, 'todo'), 'todos', 'Word should be plural with count greater than 1.');
            assert.strictEqual(window.Utils.pluralize(0, 'todo'), 'todos', 'Word should be plural with zero count.');
        },

        store: function (namespace, data) {
            window.localStorage.removeItem('test-store');
            var store = window.Utils.store('test-store');
            assert.strictEqual(store.length, 0, 'Creating a new store should result in an empty array.');
            store.push('anItem');
            window.Utils.store('test-store', store);
            assert.strictEqual(window.Utils.store('test-store').length, 1, 'Store should contain one item after adding one.');
        }
    });
});