import { Button, Col, Row, Skeleton, Statistic } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { Planet } from "../../api/types";
import { formatNumber } from "../../utils/misc";

interface PlanetDetailProps {
  isLoading: boolean;
  planetData: Planet | null;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const PlanetDetail: React.FC<PlanetDetailProps> = ({
  isLoading,
  planetData,
  setIsModalVisible,
}) => {
  return (
    <Skeleton active loading={isLoading}>
      <h1 className="w-full text-2xl font-semibold py-4 flex items-center space-x-2">
        <span data-ui-purpose="planet-detail-name">{planetData?.name}</span>
        <Button onClick={() => setIsModalVisible(true)}>Edit</Button>
      </h1>
      <Row gutter={16} className="space-y-2">
        <Col span={24}>
          <Statistic
            title="Climate"
            formatter={(value) => (
              <span data-ui-purpose="planet-detail-climate">{value}</span>
            )}
            value={planetData?.climate}
          />
        </Col>
        <Col span={24}>
          <Statistic
            title="Terrain"
            formatter={(value) => (
              <span data-ui-purpose="planet-detail-terrain">{value}</span>
            )}
            value={planetData?.terrain}
          />
        </Col>
        <Col span={24}>
          <Statistic
            title="Population"
            formatter={(value) => (
              <span data-ui-purpose="planet-detail-population">
                {formatNumber(value)}
              </span>
            )}
            value={planetData?.population}
          />
        </Col>
      </Row>
    </Skeleton>
  );
};
