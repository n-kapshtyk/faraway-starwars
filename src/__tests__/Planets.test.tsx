import { render, waitFor } from "@testing-library/react";
import React from "react";
import Planets from "../pages/Planets";
import { mockUseGetPlanets } from "./mockApi/planet.api.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

test("Renders planets page correctly", async () => {
  const query = mockUseGetPlanets();
  // Setup
  const component = render(
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <Planets />
      </QueryClientProvider>
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(query.isDone).toBeTruthy();
  });

  const planets = await waitFor(() =>
    component.getAllByTestId("planet-list-item")
  );

  expect(planets).toHaveLength(2);
  expect(planets.map((planet) => planet.textContent)).toEqual([
    "Kamino",
    "Coruscant",
  ]);
});
