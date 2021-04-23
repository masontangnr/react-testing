import { render, fireEvent } from "@testing-library/react";
import List from "./List";

//check if the page loaded
test("renders List page", () => {
  const { getByText } = render(<List />);  
  getByText(/List/i);
});
