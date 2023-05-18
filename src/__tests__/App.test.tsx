// Imports
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";
import React from "react";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");

  // Pre Expcations
  expect(buttonCount.innerHTML).toBe("count is: 0");

  // Init

  // Post Expctations
  expect(true).toBeTruthy();
});
