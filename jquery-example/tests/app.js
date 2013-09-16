define([
    'intern!object',
    'intern/chai!assert',
    'handlebars/handlebars',
    'jquery/jquery',
    'todo/app'
], function (registerSuite, assert) {
    registerSuite({
        name: 'App',


    });

    registerSuite({
        name: 'Utils',

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
            assert.equal([], )




            if (arguments.length > 1) {
                return localStorage.setItem(namespace, JSON.stringify(data));
            } else {
                var store = localStorage.getItem(namespace);
                return (store && JSON.parse(store)) || [];
            }
        }
    });
});