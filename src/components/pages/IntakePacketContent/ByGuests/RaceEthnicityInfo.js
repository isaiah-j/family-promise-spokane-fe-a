import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
const RaceEthnicityInfo = () => {
  return (
    <>
      <h1>Race/Ethnicity Info</h1>
      <h3>
        Please answer the following questions about race. Check all that apply
        for EACH family member.
      </h3>
      <Form layout="vertical">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item label="Fullname">
                    <Input placeholder="First Last" />
                  </Form.Item>
                  <Form.Item label="Hispanic/Latino">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="AmericanIndian orAlaska Native">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="Asian">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="Black orAfricanAmerican">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="NativeHawaiianOr PacificIslander">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="White">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="Unknown">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item label="Refuse">
                    <Checkbox />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RaceEthnicityInfo;
