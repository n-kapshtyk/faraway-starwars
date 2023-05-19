import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Modal, Form, Input, Button, Spin } from "antd";
import { useParams } from "react-router";
import { useGetPlanetById } from "../api/planet.api";
import { Link } from "react-router-dom";
import { AppLink } from "../components/AppLink";

const PlanetInfo: React.FC = () => {
  const planetId = useParams().id as string;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isLoading, error, data } = useGetPlanetById({ planetId });

  const handleEdit = (values: any) => {
    console.log(values);
    setIsModalVisible(false);
  };

  if (isLoading) return <Spin />;
  if (error) return <div>Error: {error as string}</div>;

  return (
    <>
      <AppLink to="/">Back to planets list</AppLink>
      <h1>{data?.name}</h1>
      <p>Climate: {data?.climate}</p>
      <p>Terrain: {data?.terrain}</p>
      <p>Population: {data?.population}</p>
      <Button onClick={() => setIsModalVisible(true)}>Edit planet</Button>
      <Modal
        title="Edit planet"
        visible={isModalVisible}
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
