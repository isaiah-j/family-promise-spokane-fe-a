import React from 'react';
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const FamilyMembers = () => {
  return (
    <>
      <h1>Family Members</h1>
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
                  <Form.Item label="Relationship">
                    <Select placeholder="Please select an option">
                      <option value="spouse">Self</option>
                      <option value="spouse">Spouse</option>
                      <option value="child">Child</option>
                      <option value="sibling">Sibling</option>
                      <option value="other">Other</option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Gender">
                    <Select placeholder="Please select an option">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Birthdate">
                    <DatePicker format="DD/MM/YYYY" />
                  </Form.Item>
                  <Form.Item label="Last 4 of SSN">
                    <Input placeholder="0000" />
                  </Form.Item>
                  <Form.Item
                    label="Income Source (monthly)"
                    required
                    tooltip="An income source can be a Job, TANF, SSI, SSDI, ChildSupport, etc..."
                  >
                    <Input.Group compact>
                      <Form.Item name={['address', 'source']}>
                        <Input placeholder="Income source" />
                      </Form.Item>
                      <Form.Item>
                        <InputNumber formatter={value => `$ ${value}`} />
                      </Form.Item>
                    </Input.Group>
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

export default FamilyMembers;
