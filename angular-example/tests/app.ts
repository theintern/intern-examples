const { describe, it, beforeEach } = intern.getInterface('bdd');
const { expect } = intern.getPlugin('chai');
import { stub, SinonStub, SinonSpyCall } from 'sinon';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoApp } from 'app/app';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from 'app/services/store';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('TodoApp', () => {
	let component: TodoApp;
	let fixture: ComponentFixture<TodoApp>;
	let service: {
		get: SinonStub;
		add: SinonStub;
	};
	let objects: Todo[];
	let de: DebugElement;

	beforeEach(async () => {
		objects = [
			new Todo({ id: 1, title: 'one' }),
			new Todo({ id: 2, title: 'two' }),
			new Todo({ id: 3, title: 'three' })
		];

		const mockService = {
			get: stub().callsFake(() => new BehaviorSubject(objects)),
			add: stub().callsFake((newTodo) => {
				const newObjects = [...objects];
				newObjects.push(newTodo);
				return new BehaviorSubject(newObjects);
			})
		};

		await TestBed.configureTestingModule({
				imports: [ FormsModule ],
				declarations: [
					TodoApp
				],
				providers: [
					{ provide: TodoService, useValue: mockService }
				]
			})
			.compileComponents()
		;

		fixture = TestBed.createComponent(TodoApp);
		component = fixture.componentInstance;
		de = fixture.debugElement;
		service = TestBed.get(TodoService);
	});

	it('should create an app', () => {
		expect(component).to.be.instanceOf(TodoApp);
	});

	it('should call TodoService#get() on init', () => {
		fixture.detectChanges();

		expect(service.get.called).to.be.true;
	});

	it('should call TodoService#add() when adding a todo', async () => {
		fixture.detectChanges();

		const input = de.query(By.css('.new-todo'));
		input.triggerEventHandler('input', {
			target: {
				value: 'stuff'
			}
		});
		input.triggerEventHandler('keyup.enter', null);

		await fixture.whenStable();
		fixture.detectChanges();

		expect(service.add.calledOnce).to.be.true;
		expect(service.add.calledWith('stuff')).to.be.true;
	});
});
