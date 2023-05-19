import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Planet {
  name: string;
  population: string;
  climate: string;
  terrain: string;
}

const PlanetsList = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { isLoading, isError, data } = useQuery(
    ["planets", pageIndex],
    async () => {
      const response = await fetch(
        `https://swapi.dev/api/planets/?page=${pageIndex}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      return json.results;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching planets</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.map((planet: Planet) => (
        <Link key={planet.name} to={`/planets/${planet.name}`}>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
            <h3 className="text-lg font-medium text-gray-800">{planet.name}</h3>
            <p>Population: {planet.population}</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlanetsList;
