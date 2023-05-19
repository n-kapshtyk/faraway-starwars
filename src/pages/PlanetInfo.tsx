import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Modal, Form, Input, Button } from "antd";
import { useParams } from "react-router";

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const PlanetInfo: React.FC = () => {
  const planetId = useParams().id as string;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isLoading, error, data } = useQuery<Planet>(
    ["planet", planetId],
    async () => {
      const response = await fetch(`https://swapi.dev/api/planets/${planetId}`);
      return response.json();
    }
  );

  const handleEdit = (values: any) => {
    console.log(values);
    // отправка формы на сервер или какие-то другие действия по редактированию планеты
    setIsModalVisible(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error as string}</div>;

  return (
    <>
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
