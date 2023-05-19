import React from "react";
import { Planet } from "../../api/types";
import { getPlanetIdFromUrl } from "../../utils/planet";
import { List, Skeleton } from "antd";
import { Link } from "react-router-dom";

interface ListItemProps {
  planet: Planet;
  isLoading: boolean;
}

export function ListItem({ planet, isLoading }: ListItemProps) {
  const url = getPlanetIdFromUrl(planet.url ?? "");
  return (
    <Skeleton loading={isLoading} active>
      <Link to={url}>
        <List.Item className="group hover:bg-gray-100 cursor-pointer rounded border-b border-b-gray-500">
          <List.Item.Meta
            title={
              <span className="group-hover:text-[#00b96b]">{planet.name}</span>
            }
            description={`${planet.population}-${planet.terrain}`}
          />
        </List.Item>
      </Link>
    </Skeleton>
  );
}
