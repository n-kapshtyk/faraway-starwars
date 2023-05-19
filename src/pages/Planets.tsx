import React from "react";
import { Button } from "antd";
import { usePlanetsList } from "../components/PlanetsList/usePlanetsList";
import { PlanetsList } from "../components/PlanetsList/PlanetsList";

const Planets = () => {
  const {
    count,
    data,
    isError,
    isLoading,
    refetch,
    search,
    setPage,
    setSearch,
  } = usePlanetsList();

  if (isError) {
    return (
      <div className="flex items-center space-x-2">
        <span>Error fetching planets.</span>
        <Button onClick={() => refetch()}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-3 bg-white rounded-xl p-5">
      <PlanetsList
        count={count}
        isLoading={isLoading}
        search={search}
        setPage={setPage}
        setSearch={setSearch}
        data={data?.results ?? Array.from(Array(10).keys())}
      />
    </div>
  );
};

export default Planets;
