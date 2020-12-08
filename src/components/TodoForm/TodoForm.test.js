import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm tests", () => {
  it("should render", () => {
    expect(render(<TodoForm />)).toBeTruthy();
  });
});
