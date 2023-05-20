import { Planet, PlanetsListResponse } from "../../api/types";
import { getPlanetIdFromUrl } from "../../utils/planet";
import { getNock } from "../utils";

export const firstPlanet: Planet = {
  name: "Kamino",
  rotation_period: "27",
  orbital_period: "463",
  diameter: "19720",
  climate: "temperate",
  gravity: "1 standard",
  terrain: "ocean",
  surface_water: "100",
  population: "1000000000",
  residents: [
    "https://swapi.dev/api/people/22/",
    "https://swapi.dev/api/people/72/",
    "https://swapi.dev/api/people/73/",
  ],
  films: ["https://swapi.dev/api/films/5/"],
  created: "2014-12-10T12:45:06.577000Z",
  edited: "2014-12-20T20:58:18.434000Z",
  url: "https://swapi.dev/api/planets/10/",
};

const secondPlanet: Planet = {
  name: "Coruscant",
  rotation_period: "24",
  orbital_period: "368",
  diameter: "12240",
  climate: "temperate",
  gravity: "1 standard",
  terrain: "cityscape, mountains",
  surface_water: "unknown",
  population: "1000000000000",
  residents: [
    "https://swapi.dev/api/people/34/",
    "https://swapi.dev/api/people/55/",
    "https://swapi.dev/api/people/74/",
  ],
  films: [
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/",
  ],
  created: "2014-12-10T11:54:13.921000Z",
  edited: "2014-12-20T20:58:18.432000Z",
  url: "https://swapi.dev/api/planets/9/",
};

const getPlanetsResponse: PlanetsListResponse = {
  count: 2,
  next: null,
  previous: null,
  results: [firstPlanet, secondPlanet],
};

export function mockUseGetPlanets(
  response: PlanetsListResponse = getPlanetsResponse
) {
  return getNock().get(`/planets?page=1&search=`).reply(200, response);
}

export function mockUseGetPlanetById(planet: Planet = firstPlanet) {
  const planetId = getPlanetIdFromUrl(planet.url);

  return getNock().get(`/planets/${planetId}`).reply(200, planet);
}
