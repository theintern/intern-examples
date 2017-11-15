import { View, ViewOptions } from 'backbone';
import * as JQuery from 'jquery';
import { template } from 'underscore';
import Router from '../routers/router';
import Todo from '../models/todo';

// Todo Item View
// --------------

// The DOM element for a todo item
export default class TodoView extends View<Todo> {
	// Cache the template function for a single item.
	template: (...args: any[]) => string;

	$input: JQuery<HTMLElement>;
	router: Router;

	constructor(options: TodoViewOptions) {
		super({ tagName: 'li', ...<ViewOptions<Todo>>options });

		this.router = options.router;
		this.template = template($('#item-template').html());

		// The TodoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		this.listenTo(this.model, 'change', () => this.render());
		this.listenTo(this.model, 'destroy', () => this.remove());
		this.listenTo(this.model, 'visible', () => this.toggleVisible());
	}

	// The DOM events specific to an item.
	events() {
		return {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'blur .edit': 'close'
		}
	}

	// Re-render the titles of the todo item.
	render() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.toggleClass('completed', this.model.get('completed'));
		this.toggleVisible();
		this.$input = $('.edit');
		return this;
	}

	toggleVisible() {
		this.$el.toggleClass('hidden', this.isHidden());
	}

	isHidden() {
		var isCompleted = this.model.get('completed');
		const filter = this.router.filter;
		return (// hidden cases only
			(!isCompleted && filter === 'completed') ||
			(isCompleted && filter === 'active')
		);
	}

	// Toggle the `"completed"` state of the model.
	toggleCompleted() {
		this.model.toggle();
	}

	// Switch this view into `"editing"` mode, displaying the input field.
	edit() {
		this.$el.addClass('editing');
		this.$input.focus();
	}

	// Close the `"editing"` mode, saving changes to the todo.
	close() {
		const trimmedValue = (<string>this.$input.val()).trim();
		this.$input.val(trimmedValue);

		if (trimmedValue) {
			this.model.save({ title: trimmedValue });
		} else {
			this.clear();
		}

		this.$el.removeClass('editing');
	}

	// If you hit `enter`, we're through editing the item.
	updateOnEnter(e) {
		if (e.which === 13) {
			this.close();
		}
	}

	// Remove the item, destroy the model from *localStorage* and delete its view.
	clear() {
		this.model.destroy();
	}
}

export interface TodoViewOptions extends ViewOptions<Todo> {
	router: Router;
}
