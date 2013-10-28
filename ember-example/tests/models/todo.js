/*global Ember, Todos */

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
    'intern/order!todo/models/store',
    'intern/order!todo/controllers/todos_controller'
], function (registerSuite, assert) {
    registerSuite({
        name: 'todo model',

        teardown: function () {
            window.localStorage.removeItem('todos-emberjs');
        },

        'default properties': function () {
            var todo = Todos.Todo.createRecord({
                isCompleted: false
            });
            assert.isFalse(todo.get('isCompleted'), 'A new todo record should properly register default properties.');
        },

        'store access': function () {
            var todo = Todos.Todo.createRecord();
            assert.isTrue(todo.get('store') instanceof Todos.Store, 'A new todo record should have access to the store.');
        },

        'title autoSave': function () {
            var todo = Todos.Todo.createRecord({
                    title: ''
                }),
                stubbedCommit = todo.get('store').commit,
                updateCalled = false;

            todo.get('store').commit = function () {
                updateCalled = true;
            };

            Ember.run(function () {
                todo.set('title', 'a new title');
            });
            
            assert.isTrue(updateCalled, 'When a todo record title changes, it should be persisted automatically.');
            todo.get('store').commit = stubbedCommit;
        },

        'isCompleted autoSave': function () {
            var todo = Todos.Todo.createRecord({
                    isCompleted: false
                }),
                stubbedCommit = todo.get('store').commit,
                updateCalled = false;

            todo.get('store').commit = function () {
                updateCalled = true;
            };

            Ember.run(function () {
                todo.set('isCompleted', true);
            });
            
            assert.isTrue(updateCalled, 'When a todo record isCompleted property changes, it should be persisted automatically.');
            todo.get('store').commit = stubbedCommit;
        }
    });
});