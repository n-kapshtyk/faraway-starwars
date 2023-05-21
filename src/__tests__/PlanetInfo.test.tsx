import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { firstPlanet, mockUseGetPlanetById } from "./mockApi/planet.api.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlanetInfo from "../pages/PlanetInfo";
import { BrowserRouter } from "react-router-dom";
import { formatNumber } from "../utils/misc";

test("Renders planet detail page correctly", async () => {
  const query = mockUseGetPlanetById();

  const component = render(
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <PlanetInfo />
      </QueryClientProvider>
    </BrowserRouter>
  );

  //check get planet query is done
  await waitFor(() => {
    expect(query.isDone).toBeTruthy();
  });

  //check planet info
  await waitFor(() => {
    expect(component.getByTestId("planet-detail-name").textContent).toEqual(
      firstPlanet.name
    );
    expect(component.getByTestId("planet-detail-climate").textContent).toEqual(
      firstPlanet.climate
    );
    expect(component.getByTestId("planet-detail-terrain").textContent).toEqual(
      firstPlanet.terrain
    );
    expect(
      component.getByTestId("planet-detail-population").textContent
    ).toEqual(formatNumber(firstPlanet.population));
  });

  //opening modal and changing values
  fireEvent.click(component.getByText(/Edit/));

  fireEvent.change(component.getByLabelText("Name"), {
    target: { value: "New Name" },
  });
  fireEvent.change(component.getByLabelText("Climate"), {
    target: { value: "Temperate" },
  });
  fireEvent.change(component.getByLabelText("Terrain"), {
    target: { value: "Mountains" },
  });
  fireEvent.change(component.getByLabelText("Population"), {
    target: { value: "3,000,000,000" },
  });

  fireEvent.submit(component.getByRole("button", { name: "Save planet" }));

  //check updated values from edit modal form
  await waitFor(() => {
    expect(component.getByTestId("planet-detail-name").textContent).toEqual(
      "New Name"
    );
    expect(component.getByTestId("planet-detail-climate").textContent).toEqual(
      "Temperate"
    );
    expect(component.getByTestId("planet-detail-terrain").textContent).toEqual(
      "Mountains"
    );
    expect(
      component.getByTestId("planet-detail-population").textContent
    ).toEqual("3,000,000,000");
  });
});
