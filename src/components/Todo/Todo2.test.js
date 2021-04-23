import React from "react";
import ReactDOM from 'react-dom';
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Todo from "./Todo";
import { mount, shallow, render } from 'enzyme'


describe("Todo", () => {

  it('can render App shallow component', () => {
     render(<Todo />)
  })
	
	// it("should render todo page", async () => {
  //   ReactDOM.render(<Todo />, container);
	// 	screen.getByText(/Todo/i);
	// });

  // it('add items todo list', () => {
  //   const wrapper = mount(<Todo />)
  //   wrapper.find('input').simulate('change', {
  //     target: { value: 'hello' }
  //   })
  //   fireEvent.click(screen.getByText(/submit/i));
  //   expect(screen.getByText("hello"));
  // })
	// it("allows users to add items to their list", async () => {
  //   act(() => {
  //     ReactDOM.render(<Todo />, container);
  //   }); 

  //   act(() => {
  //     fireEvent.input(
  //       screen.getByRole("textbox", { name: /what needs to be done/i }),
  //       {
  //         target: {
  //           value: "test@mail.com",
  //         },
  //       }
  //     );
  //     fireEvent.click(screen.getByText(/submit/i));
  //   })
		
	// 	expect(screen.getByText("test@mail.com"));
	// });
});
