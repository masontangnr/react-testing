import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("renders todo page", () => {
	const { getByText, getByLabelText } = render(<Todo />);

	getByText(/Todo/i);
});

// test("allows users to add items to their list", () => {
//   act(() => {
//     ReactDOM.render(<Todo />, container);
//   });

// 	const input = screen.getByLabelText("What needs to be done");
// 	fireEvent.change(input, { target: { value: "hi" } });

//   act(() => {
//     fireEvent.click(screen.getByText(/submit/i));
//   })
//   expect(screen.getByRole('input')).toHaveValue('hi')
// });
