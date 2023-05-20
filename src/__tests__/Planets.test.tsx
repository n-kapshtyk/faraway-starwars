import { render, waitFor } from "@testing-library/react";
import React from "react";
import Planets from "../pages/Planets";
import { mockUseGetPlanets } from "./mockApi/planet.api.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

test("Renders main page correctly", async () => {
  const query = mockUseGetPlanets();
  // Setup
  const component = render(
    <QueryClientProvider client={new QueryClient()}>
      <Planets />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(query.isDone).toBeTruthy();
  });

  expect(component.getByTestId("planet-list-item").textContent).toBe("123");
});
