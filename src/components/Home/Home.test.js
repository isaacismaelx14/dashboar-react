import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "./";

describe("<Home/>", () => {
  test("should render", () => {
    const component = render(<Home />);
    component.getByTestId("MainComponent");
  });
});
