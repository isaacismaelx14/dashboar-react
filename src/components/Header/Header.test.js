import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Header from "./";

describe("<Header />", () => {
  let component;
  beforeEach(() => {
    component = render(<Header />);
  });

  test("should render", () => {
    component.getByTestId("headerComponent");
  });

  test("clicked config button", () => {
    const button = component.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveAttribute("data-clicked", "true");
  });
});
