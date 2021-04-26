import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodo from './NewTodo';
import { act } from "react-dom/test-utils";



describe("Todo", () => {
  const {getByText, container} = render(<NewTodo />);

  test('renders the correct initial DOM', () => {
    getByText(/Todo List/i);
  });

  // test1: Make sure it creates a todo when a user types
  // something in the input and clicks the create button.
  test('it creates a new todo', async () => {
    const {getByText, container} = render(<NewTodo />);

    const inputElement = container.querySelector('#todo')
    const createButtonElement = container.querySelector('#submit-button')

    // Create the todo.
    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'Feed my dog.' } });
      fireEvent.click(createButtonElement);
    });
    
    // The name should be in the document as "Feed my dog."
    getByText(/Feed my dog/i);
  });
})
