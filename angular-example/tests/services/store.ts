const { describe, it, beforeEach } = intern.getInterface('bdd');
const { expect } = intern.getPlugin('chai');

import { TodoService, TodoObject, Todo } from 'app/services/store';
import { LocalStorageService } from 'app/services/localStorage';

import 'rxjs/add/operator/toPromise';

let objects: Todo[];
class MockLocalStorageService {
	get() {
		return objects;
	}

	set(value: any[]) {
		objects = value;
	}

	clear() {
		objects = [];
	}
}

describe('TodoStore', () => {
	let service: TodoService;
	let localStorage: MockLocalStorageService;

	beforeEach(() => {
		objects = [
			new Todo({ id: 1, title: 'one' }),
			new Todo({ id: 2, title: 'two' }),
			new Todo({ id: 3, title: 'three' })
		];
		localStorage = new MockLocalStorageService();
		service = new TodoService(localStorage as any);
	});

	it('should create a service', () => {
		expect(service).not.to.be.null;
	});

	it('should return an Observable of Todos', async () => {
		const result = await service.get().toPromise();
		expect(result).to.deep.equal(objects);
		expect(result).not.to.equal(objects);
	});

	it('should add a new Todo', async () => {
		const result = await service.add('four').toPromise();
		expect(result).to.have.lengthOf(4);
		expect(result[3].title).to.equal('four');
	});

	it('should update a Todo', async () => {
		const todo = objects[1];
		todo.title = 'two edited';
		const result = await service.update(todo).toPromise();
		expect(result).to.have.lengthOf(3);
		expect(result[1]).to.deep.equal(todo);
		expect(result[1]).not.to.equal(todo);
	});

	it('should set new Todos', async () => {
		const todos = [
			new Todo({ title: 'foo' }),
			new Todo({ title: 'bar' })
		];
		const result = await service.set(todos).toPromise();
		expect(result).to.have.lengthOf(2);
		expect(result).to.be.deep.equal(todos);
		expect(result).not.to.equal(todos);
	});

	it('should delete a Todo', async () => {
		const original = [...objects];
		const result = await service.delete(objects[1]).toPromise();
		expect(result).to.have.lengthOf(2);
		expect(result[0]).to.deep.equal(original[0]);
		expect(result[1]).to.deep.equal(original[2]);
	});
});
