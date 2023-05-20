import React, { Dispatch, SetStateAction } from "react";
import { Input, List } from "antd";
import { Planet } from "../../api/types";
import { PlanetsListItem } from "./PlanetsListItem";

const skeletonList = Array.from(
  Array(10)
    .fill({
      name: "Planet",
      rotation_period: "",
      orbital_period: "",
      diameter: "",
      climate: "",
      gravity: "",
      terrain: "",
      surface_water: "",
      population: "",
      residents: [],
      films: [],
      created: "",
      edited: "",
      url: "",
    })
    .map((planet, index) => ({ ...planet, name: planet.name + index }))
);
interface PlanetsListProps {
  count: number | null;
  setPage: Dispatch<SetStateAction<number | null>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data?: Planet[];
  isLoading: boolean;
}

export const PlanetsList: React.FC<PlanetsListProps> = ({
  count,
  setPage,
  setSearch,
  search,
  data,
  isLoading,
}) => {
  return (
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        defaultPageSize: 10,
        total: count ?? 0,
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
      rowKey={"name"}
      dataSource={data ?? skeletonList}
      renderItem={(planet: Planet) => {
        return <PlanetsListItem planet={planet} isLoading={isLoading} />;
      }}
    />
  );
};
