import 'backbone.localstorage';
import { Collection, LocalStorage  } from 'backbone';
import Todo from '../models/todo';

// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote
// server.
export default class Todos extends Collection<Todo> {
	constructor(models?: Todo[], options?: any) {
		super(models, options);

		this.model = Todo;

		// Todos are sorted by their original insertion order.
		this.comparator = todo => todo.get('order');
	}

	// Filter down the list of all todo items that are finished.
	completed() {
		return this.where({completed: true});
	}

	// Save all of the todo items under the `"todos"` namespace.
	localStorage() {
		return new LocalStorage('todos-backbone');
	}

	// Filter down the list to only todo items that are still not finished.
	remaining() {
		return this.where({completed: false});
	}

	// We keep the Todos in sequential order, despite being saved by unordered
	// GUID in the database. This generates the next order number for new items.
	nextOrder() {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	}
}
