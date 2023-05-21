import React from "react";
import { Button, Spin } from "antd";
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

  if (!count && isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Spin />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center space-x-2">
        <span>Error fetching planets.</span>
        <Button onClick={() => refetch()}>Try Again</Button>
      </div>
    );
  }

  return (
    <PlanetsList
      count={count}
      isLoading={isLoading}
      search={search}
      setPage={setPage}
      setSearch={setSearch}
      data={data?.results}
    />
  );
};

export default Planets;
