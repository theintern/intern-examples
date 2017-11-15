import { Model } from 'backbone';

// Todo Model
// ----------

// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
export default class Todo extends Model {
	// Default attributes for the todo
	// and ensure that each todo created has `title` and `completed` keys.
	defaults() {
		return {
			title: '',
			completed: false
		}
	}

	// Toggle the `completed` state of this todo item.
	toggle() {
		this.save({
			completed: !this.get('completed')
		});
	}
}
