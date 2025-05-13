import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: "test@example.com" },
  });
});
