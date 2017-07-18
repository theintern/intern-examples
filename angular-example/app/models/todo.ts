export interface TodoObject {
	completed?: boolean;
	editing?: boolean;
	readonly id?: number;
	title: string;
}

export class Todo implements TodoObject {
	readonly id: number;
	completed: boolean;
	editing: boolean;
	title: string;

	constructor({ title, id = Date.now(), editing = false, completed = false }: TodoObject) {
		this.id = id;
		this.completed = completed;
		this.editing = editing;
		this.title = title.trim();
	}
}
