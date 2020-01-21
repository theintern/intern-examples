import { View, ViewOptions } from 'backbone';
import * as JQuery from 'jquery';
import { invoke, template, debounce } from 'underscore';

import Router from '../routers/router';
import Todos from '../collections/todos';
import TodoView from './todo-view';

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
export default class AppView extends View<any> {
	allCheckbox: HTMLInputElement;
	$input: JQuery<HTMLElement>;
	$footer: JQuery<HTMLElement>;
	$main: JQuery<HTMLElement>;
	$list: JQuery<HTMLElement>;

	router: Router;
	todos: Todos;

	// Our template for the line of statistics at the bottom of the app.
	statsTemplate: (...args: any[]) => string;

	constructor(options?: ViewOptions<any>) {
		super(options);

		this.todos = new Todos();
		this.router = new Router({ todos: this.todos });

		this.allCheckbox = <HTMLInputElement>$('.toggle-all')[0];
		this.$input = $('.new-todo');
		this.$footer = $('.footer');
		this.$main = $('.main');
		this.$list = $('.todo-list');

		this.statsTemplate = template($('.stats-template').html());

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		const todos = this.todos;
		this.listenTo(todos, 'add', this.addOne);
		this.listenTo(todos, 'reset', this.addAll);
		this.listenTo(todos, 'change:completed', this.filterOne);
		this.listenTo(todos, 'filter', this.filterAll);
		this.listenTo(todos, 'all', debounce(this.render, 0));

		todos.fetch();
	}

	// Delegated events for creating new items, and clearing completed ones.
	events() {
		return {
			'keypress .new-todo': 'createOnEnter',
			'click .clear-completed': 'clearCompleted',
			'click .toggle-all': 'toggleAllComplete'
		}
	}

	// Re-rendering the App just means refreshing the statistics -- the rest
	// of the app doesn't change.
	render() {
		const completed = this.todos.completed().length;
		const remaining = this.todos.remaining().length;

		if (this.todos.length) {
			this.$main.show();
			this.$footer.show();

			this.$footer.html(this.statsTemplate({
				completed: completed,
				remaining: remaining
			}));

			this.$('.filters li a')
				.removeClass('selected')
				.filter('[href="#/' + (this.router.filter || '') + '"]')
				.addClass('selected');
		} else {
			this.$main.hide();
			this.$footer.hide();
		}

		this.allCheckbox.checked = !remaining;

		return this;
	}

	// Add a single todo item to the list by creating a view for it, and
	// appending its element to the `<ul>`.
	addOne(todo) {
		const view = new TodoView({ model: todo, router: this.router });
		this.$list.append(view.render().el);
	}

	// Add all items in the **Todos** collection at once.
	addAll() {
		this.$list.html('');
		this.todos.each(this.addOne, this);
	}

	filterOne(todo) {
		todo.trigger('visible');
	}

	filterAll() {
		this.todos.each(this.filterOne, this);
	}

	// Generate the attributes for a new Todo item.
	newAttributes() {
		return {
			title: (<string>this.$input.val()).trim(),
			order: this.todos.nextOrder(),
			completed: false
		};
	}

	// If you hit return in the main input field, create new **Todo** model,
	// persisting it to *localStorage*.
	createOnEnter(e) {
		if (e.which !== 13 || !(<string>this.$input.val()).trim()) {
			return;
		}

		this.todos.create(this.newAttributes());
		this.$input.val('');
	}

	// Clear all completed todo items, destroying their models.
	clearCompleted() {
		invoke(this.todos.completed(), 'destroy');
		return false;
	}

	toggleAllComplete() {
		const completed = this.allCheckbox.checked;
		this.todos.each(todo => {
			todo.save({ 'completed': completed });
		});
	}
}
