import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { Planet } from "../../api/types";
import { formatNumber } from "../../utils/misc";

interface PlanetInfoModalProps {
  planetData: Planet | null;
  handleEdit: (values: Planet) => void;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const PlanetInfoModal: React.FC<PlanetInfoModalProps> = ({
  planetData,
  handleEdit,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <Modal
      title="Edit planet"
      open={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={null}
    >
      <Form layout="vertical" onFinish={handleEdit}>
        <Form.Item label="Name" name="name" initialValue={planetData?.name}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Climate"
          name="climate"
          initialValue={planetData?.climate}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Terrain"
          name="terrain"
          initialValue={planetData?.terrain}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Population"
          name="population"
          initialValue={planetData?.population}
        >
          <InputNumber
            className="w-full"
            formatter={(value) => formatNumber(value as string)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        <Button htmlType="submit">Save planet</Button>
      </Form>
    </Modal>
  );
};
