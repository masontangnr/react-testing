import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './CopyTodo.jsx';
import '@testing-library/jest-dom/extend-expect'


// test0: Make sure the output has the correct important
// DOM nodes and the correct values.
test('renders the correct initial DOM', () => {
  const { getByText, container, getByTestId } = render(<TodoList />);  

  const inputElement = getByTestId('input');
  const todoCountElement = container.querySelector('.todoCount')

  getByText(/0 todos/);

  // The text should show "0 todos"
  expect(todoCountElement.textContent).toBe('0 todos');

  // The input should be blank.
   expect(inputElement.getAttribute('value')).toBe('');

});

// test1: Make sure it creates a todo when a user types
// something in the input and clicks the create button.
test('it creates a new todo', () => {
  const { getByText, container, getAllByTestId } = render(<TodoList />);  


  const inputElement = container.querySelector('#todoInput');
  const createButtonElement = container.querySelector('.createButton');
  const todoCountElement = container.querySelector('.todoCount');

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: 'Feed my dog.' } });
  fireEvent.click(createButtonElement);

  const todos = getAllByTestId('todo');

  // The name should be in the document as "Feed my dog."
  getByText(/Feed my dog/i);

  // The text should show "1 todos"
  expect(todoCountElement.textContent).toBe('1 todos');

  // The input field should be blank.
  expect(inputElement.value).toBe('');

  // There should be 1 todo in the document.
  expect(todos.length).toBe(1);
});

// test2: Make sure that after creating a todo, if the
// user clicks the delete button, a todo goes away.
test('it deletes a todo', () => {
  const { container,  queryAllByTestId, toBeInTheDocument } = render(<TodoList />);

  const inputElement = container.querySelector('#todoInput');
  const createButtonElement = container.querySelector('.createButton');
  const todoCountElement = container.querySelector('.todoCount');

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: 'Feed my cat.' } });
  fireEvent.click(createButtonElement);

  // Get the newly created todo.
  const todo = container.querySelector('#todo');

  // Click the delete button on the todo.
  const todoDeleteButton = container.querySelector('.deleteButton');
  fireEvent.click(todoDeleteButton);

  // queryByTestId / queryAllByTestId is for when you don't
  // think there will be any matches for the query. Whereas
  // getByTestId / getAllByTestId throws an error if there
  // are no matched elements, query* does not.
  const todos = queryAllByTestId('todo');

  // The text should be "0 todos"
  expect(todoCountElement.textContent).toBe('0 todos');

  // The todo we created should not be in the document.
  expect(todo).not.toBeInTheDocument();

  // There should be 0 todos found in the document.
  expect(todos.length).toBe(0);
});
