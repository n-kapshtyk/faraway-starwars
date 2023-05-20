import React from "react";
import { Planet } from "../../api/types";
import { getPlanetIdFromUrl } from "../../utils/planet";
import { List, Skeleton, Statistic } from "antd";
import { Link } from "react-router-dom";

interface PlanetsListItemProps {
  planet: Planet;
  isLoading: boolean;
}

export const PlanetsListItem: React.FC<PlanetsListItemProps> = ({
  planet,
  isLoading,
}) => {
  const url = getPlanetIdFromUrl(planet.url ?? "");
  return (
    <Skeleton loading={isLoading} active>
      <Link to={url}>
        <List.Item className="group hover:bg-gray-100 cursor-pointer rounded border-b border-b-gray-500">
          <List.Item.Meta
            title={
              <span
                data-ui-purpose="planet-list-item"
                className="text-xl underline group-hover:text-[#00b96b]"
              >
                {planet.name}
              </span>
            }
            description={
              <div className="space-x-1">
                <span className="font-semibold">Population:</span>
                <span>
                  <Statistic
                    value={
                      planet.population === "unknown" ? "-" : planet.population
                    }
                  />
                </span>
              </div>
            }
          />
        </List.Item>
      </Link>
    </Skeleton>
  );
};
