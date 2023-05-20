import React from "react";
import { AppLink } from "../components/AppLink";
import { PlanetInfoModal } from "../components/PlanetInfo/PlanetInfoModal";
import { PlanetDetail } from "../components/PlanetInfo/PlanetDetail";
import { usePlanet } from "../components/PlanetInfo/usePlanet";

const PlanetInfo: React.FC = () => {
  const {
    error,
    handleEdit,
    isLoading,
    isModalVisible,
    planetData,
    setIsModalVisible,
  } = usePlanet();

  if (error)
    return (
      <div className="flex items-center space-x-2">
        <span>Error: {error as string}</span>
        <AppLink to="/">Back to planets list</AppLink>
      </div>
    );

  return (
    <>
      <AppLink to="/">Back to planets list</AppLink>
      <PlanetDetail
        isLoading={isLoading}
        planetData={planetData}
        setIsModalVisible={setIsModalVisible}
      />
      <PlanetInfoModal
        planetData={planetData}
        handleEdit={handleEdit}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default PlanetInfo;
