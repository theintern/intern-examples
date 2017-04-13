import React from 'react'
import { shallow, render } from 'enzyme'
import Header from '../../../src/components/Header'
import TodoTextInput from '../../../src/components/TodoTextInput'

const { describe, it } = intern.getInterface('bdd');
const expect = intern.getAssertions('expect');

const setup = () => {
	const addTodo = () => { addTodo.called = true; }
	addTodo.called = false;
	return addTodo;
}

describe('components', () => {
	describe('Header', () => {
		it('should render correctly', () => {
			const addTodo = setup();
			const component = shallow(<Header addTodo={addTodo} />);

			expect(component.type()).to.equal('header');
			expect(component.prop('className')).to.equal('header');

			const h1 = component.childAt(0);
			const input = component.childAt(1);

			expect(h1.type()).to.equal('h1');
			expect(h1.prop('children')).to.equal('todos');

			expect(input.type()).to.equal(TodoTextInput);
			expect(input.prop('newTodo')).to.equal(true);
			expect(input.prop('placeholder')).to.equal('What needs to be done?');
		});

		it('should call addTodo if length of text is greater than 0', () => {
			const addTodo = setup();
			const component = shallow(<Header addTodo={addTodo} />);

			const input = component.childAt(1);
			input.prop('onSave')('');

			// Use `component.instance().props` to get at `addTodo` since `addTodo` isn't a rendered property
			expect(component.instance().props.addTodo.called).to.not.be.true;

			input.prop('onSave')('Use Redux');
			expect(component.instance().props.addTodo.called).to.be.true;
		});
	});
});
