import { Component } from '@angular/core';
import { TodoService } from './services/store';
import { Todo } from './models/todo';

@Component({
	selector: 'todo-app',
	templateUrl: './app.html'
})
export class TodoApp {
	private todoStore: TodoService;
	private todos: Todo[] = [];

	private remaining = 0;
	private completed = 0;

	newTodoText = '';

	constructor(todoStore: TodoService) {
		this.todoStore = todoStore;
	}

	ngOnInit() {
		this.todoStore.get().subscribe(todos => this.initialize(todos));
	}

	private initialize(todos: Todo[]) {
		this.todos = todos;

		this.remaining = 0;
		this.completed = 0;

		todos.forEach(todo => {
			if (todo.completed) {
				this.completed++;
			} else {
				this.remaining++;
			}
		});
	}

	setAllTo(value: boolean) {
		this.todoStore.set(
				this.todos.map(todo => {
					todo.completed = value;
					return todo;
				})
			)
			.subscribe(todos => this.initialize(todos))
		;
	}

	cancelEditingTodo(todo: Todo) {
		todo.editing = false;
	}

	updateEditingTodo(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		let observable;
		if (editedTitle.length === 0) {
			observable = this.todoStore.delete(todo);
		} else {
			todo.title = editedTitle;
			observable = this.todoStore.update(todo);
		}

		observable.subscribe(todos => this.initialize(todos));
	}

	editTodo(todo: Todo) {
		todo.editing = true;
	}

	removeCompleted() {
		this.todoStore.delete(this.todos.filter(todo => todo.completed))
			.subscribe(todos => this.initialize(todos))
		;
	}

	toggleCompletion(todo: Todo) {
		todo.completed = !todo.completed;
		this.todoStore.set(this.todos)
			.subscribe(todos => this.initialize(todos))
		;
	}

	remove(todo: Todo){
		this.todoStore.delete(todo)
			.subscribe(todos => this.initialize(todos))
		;
	}

	addTodo() {
		if (this.newTodoText.trim().length) {
			this.todoStore.add(this.newTodoText)
				.subscribe(todos => this.initialize(todos))
			;
			this.newTodoText = '';
		}
	}
}
