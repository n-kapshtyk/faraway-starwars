import { render, waitFor } from "@testing-library/react";
import React from "react";
import Planets from "../pages/Planets";
import { mockUseGetPlanets } from "./mockApi/planet.api.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

test("Renders planets page correctly", async () => {
  const query = mockUseGetPlanets();

  const component = render(
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <Planets />
      </QueryClientProvider>
    </BrowserRouter>
  );

  //Check get planets query is done
  await waitFor(() => {
    expect(query.isDone).toBeTruthy();
  });

  //Check number of planets in list and their content
  const planets = await waitFor(() =>
    component.getAllByTestId("planet-list-item")
  );
  const planetsTitles = await waitFor(() =>
    component.getAllByTestId("planet-list-item-title")
  );

  expect(planets).toHaveLength(2);
  expect(planets[0]).toHaveAttribute("href", "/9");
  expect(planets[1]).toHaveAttribute("href", "/10");
  expect(planetsTitles.map((planet) => planet.textContent)).toEqual([
    "Kamino",
    "Coruscant",
  ]);
});
