import { useEffect, useState } from "react";
import { Planet } from "../../api/types";
import { useGetPlanetById } from "../../api/planet.api";
import { useParams } from "react-router";
import { isRunningTests } from "../../utils/misc";

export function usePlanet() {
  const planetId = useParams().id as string;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [planetData, setPlanetData] = useState<Planet | null>(null);
  const { isLoading, error, data } = useGetPlanetById({
    planetId: isRunningTests ? "9" : planetId,
  });

  const handleEdit = (values: Planet) => {
    setPlanetData(values);
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (data) {
      setPlanetData(data);
    }
  }, [data]);

  return {
    isModalVisible,
    setIsModalVisible,
    planetData,
    isLoading,
    error,
    handleEdit,
  };
}
