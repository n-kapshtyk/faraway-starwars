import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPlanets } from "../api/planet.api";
import { Input, List, Skeleton } from "antd";
import { getPlanetIdFromUrl } from "../utils/planet";
import { Planet } from "../api/types";

const PlanetsList = () => {
  const [page, setPage] = useState<number | null>(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);

  const { isLoading, isError, data } = useGetPlanets({
    page: search.length > 0 ? null : page,
    search,
  });

  useEffect(() => {
    if (data?.count) {
      setCount((prev) => (prev !== data.count ? data.count : prev));
    }
  }, [data]);

  if (isError) {
    return <div>Error fetching planets</div>;
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
          const url = getPlanetIdFromUrl(planet.url ?? "");
          return (
            <Skeleton loading={isLoading} active>
              <Link to={url}>
                <List.Item className="group hover:bg-gray-100 cursor-pointer border-b border-b-gray-500">
                  <List.Item.Meta
                    title={
                      <span className="group-hover:text-[#00b96b]">
                        {planet.name}
                      </span>
                    }
                    description={`${planet.population}-${planet.terrain}`}
                  />
                </List.Item>
              </Link>
            </Skeleton>
          );
        }}
      />
    </div>
  );
};

export default PlanetsList;
