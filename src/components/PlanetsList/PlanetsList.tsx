import React, { Dispatch, SetStateAction } from "react";
import { Input, List } from "antd";
import { Planet } from "../../api/types";
import { PlanetsListItem } from "./PlanetsListItem";

interface PlanetsListProps {
  count: number;
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
      dataSource={data}
      renderItem={(planet: Planet) => {
        return <PlanetsListItem planet={planet} isLoading={isLoading} />;
      }}
    />
  );
};
