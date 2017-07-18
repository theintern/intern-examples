import { Injectable } from '@angular/core';
import { Todo, TodoObject } from '../models/todo';
import { LocalStorageService } from './localStorage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export { Todo, TodoObject }

@Injectable()
export class TodoService {
	constructor(private storage: LocalStorageService<TodoObject[]>) {}

	get(): Observable<Todo[]> {
		const objects = this.storage.get() || [];
		return Observable.of(objects.map(object => new Todo(object)));
	}

	add(title: string): Observable<Todo[]> {
		const objects = this.storage.get() || [];
		objects.push(new Todo({ title }));

		this.storage.set(objects);

		return this.get();
	}

	update(todo: Todo): Observable<Todo[]> {
		const objects = this.storage.get() || [];
		const index = objects.findIndex(object => object.id === todo.id);

		if (index === -1) {
			objects.push(todo);
		} else {
			objects.splice(index, 1, todo);
		}

		this.storage.set(objects);

		return this.get();
	}

	set(todos: Todo[]): Observable<Todo[]> {
		this.storage.set(todos);
		return this.get();
	}

	delete(todos: Todo | Todo[]): Observable<Todo[]> {
		if (!Array.isArray(todos)) {
			todos = [ todos ];
		}

		const ids = new Set(todos.map(todo => todo.id));
		const objects = (this.storage.get() || []).filter(todo => !ids.has(todo.id));

		this.storage.set(objects);

		return this.get();
	}
}
