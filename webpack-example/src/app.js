/*global $ */
/*jshint unused:false */
require('./models/todo');
require('./collections/todos.js');
require('./routers/router');
require('./views/todo-view.js');
require('./views/app-view.js');

var app = window.app = window.app || {};
window.ENTER_KEY = 13;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});
