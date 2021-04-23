import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewTodo from './NewTodo';


describe("Todo", () => {
test('renders the correct initial DOM', () => {
  const doc = render(<NewTodo />);

  // const inputElement = doc.getByTestId('input');
  // const todoCountElement = doc.getByTestId('todoCount');
  // const todos = doc.queryAllByTestId('todo');

  screen.getByText(/Todo List/i);
});

// test1: Make sure it creates a todo when a user types
// something in the input and clicks the create button.
// test('it creates a new todo', () => {
//   const doc = render(<NewTodo />);

//   const inputElement = doc.querySelector('#todo')
//   const createButtonElement = doc.getByText(/submit/i);

//   // Create the todo.
//   fireEvent.change(inputElement, { target: { value: 'Feed my dog.' } });
//   fireEvent.click(createButtonElement);

//   // const todos = doc.getAllByTestId('todo');
//   // const todo = doc.getByTestId('todo');
//    const todoNameElement = todo.firstChild;

//   // The name should be in the document as "Feed my dog."
//   expect(todoNameElement.textContent).toBe('Feed my dog.');

//   // The text should show "1 todos"
//   //expect(todoCountElement).toHaveTextContent('1 todos');

//   // The input field should be blank.
//   //expect(inputElement.value).toBe('');

//   // The todo should be in the document.
//   //expect(todo).toBeInTheDocument();

//   // There should be 1 todo in the document.
//   //expect(todos.length).toBe(1);
// });
})
