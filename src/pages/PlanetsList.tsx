import React from "react";
import { Button, Input, List } from "antd";
import { Planet } from "../api/types";
import { usePlanetsList } from "../components/PlanetsList/usePlanetsList";
import { ListItem } from "../components/PlanetsList/ListItem";

const PlanetsList = () => {
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
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          defaultPageSize: 10,
          total: count,
          position: "top",
          onChange: (pageNumber) => setPage(pageNumber),
          showSizeChanger: false,
        }}
        header={
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by planets"
          />
        }
        dataSource={data?.results ?? Array.from(Array(10).keys())}
        renderItem={(planet: Planet) => {
          return <ListItem planet={planet} isLoading={isLoading} />;
        }}
      />
    </div>
  );
};

export default PlanetsList;
