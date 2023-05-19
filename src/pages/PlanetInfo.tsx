import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Spin,
  Row,
  Col,
  Statistic,
  Skeleton,
} from "antd";
import { useParams } from "react-router";
import { useGetPlanetById } from "../api/planet.api";
import { AppLink } from "../components/AppLink";
import { Planet } from "../api/types";

const PlanetInfo: React.FC = () => {
  const planetId = useParams().id as string;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [planetData, setPlanetData] = useState<Planet | null>(null);
  const { isLoading, error, data } = useGetPlanetById({ planetId });

  const handleEdit = (values: Planet) => {
    setPlanetData(values);
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (data) {
      setPlanetData(data);
    }
  }, [data]);

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
      <Skeleton active loading={isLoading}>
        <h1 className="w-full text-2xl font-semibold py-4 flex items-center space-x-2">
          <span>{planetData?.name}</span>
          <Button onClick={() => setIsModalVisible(true)}>Edit</Button>
        </h1>
        <Row gutter={16} className="space-y-2">
          <Col span={24}>
            <Statistic title="Climate" value={planetData?.climate} />
          </Col>
          <Col span={24}>
            <Statistic title="Terrain" value={planetData?.terrain} />
          </Col>
          <Col span={24}>
            <Statistic title="Population" value={planetData?.population} />
          </Col>
        </Row>
      </Skeleton>

      <Modal
        title="Edit planet"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleEdit}>
          <Form.Item label="Name" name="name" initialValue={data?.name}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Climate"
            name="climate"
            initialValue={data?.climate}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Terrain"
            name="terrain"
            initialValue={data?.terrain}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Population"
            name="population"
            initialValue={data?.population}
          >
            <Input />
          </Form.Item>
          <Button htmlType="submit">Save planet</Button>
        </Form>
      </Modal>
    </>
  );
};

export default PlanetInfo;
