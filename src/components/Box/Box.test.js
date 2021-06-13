import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Box from "./";

describe("<Box />", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Box
        title="title"
        followers={200}
        user="test_user"
        isLoading={false}
      ></Box>
    );
  });
  test("should render", () => {
    component.getByText("title");
    component.getByText("200");
    component.getByText("test_user");
  });
});
