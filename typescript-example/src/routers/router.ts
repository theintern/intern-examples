import { Router, RouterOptions, history } from 'backbone';
import Todos from '../collections/todos';

// Todo Router
// ----------
export default class TodoRouter extends Router {
	filter: string;
	todos: Todos;

	constructor(options: TodoRouterOptions) {
		super(<RouterOptions>options);
		this.todos = options.todos;
		if (options.disableHistory !== false) {
			history.start();
		}
	}

	routes: {
		'*filter': 'setFilter'
	}

	setFilter(param) {
		// Set the current filter to be used
		this.filter = param || '';

		// Trigger a collection filter event, causing hiding/unhiding
		// of Todo view items
		this.todos.trigger('filter');
	}
}

export interface TodoRouterOptions extends Partial<RouterOptions> {
	todos: Todos;
	disableHistory?: boolean;
}
