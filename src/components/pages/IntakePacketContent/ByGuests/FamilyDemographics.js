import React from 'react';
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  DatePicker,
  InputNumber,
  Card,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
const FamilyDemographics = ({
  navigation,
  formData,
  setForm,
  tempFormStyle,
}) => {
  const { previous, next } = navigation;

  return (
    <div style={tempFormStyle}>
      <Card title="Family Demographics" bordered={false}>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>
        <Form layout="vertical">
          <Form.Item>
            <Checkbox>Someone in my household is a sex offender.</Checkbox>
          </Form.Item>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <Space
                    key={field.key}
                    style={{ display: 'flex', marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item label="Gender">
                      <Select placeholder="Please select an option">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
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
                    onClick={add}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Card>
    </div>
  );
};

export default FamilyDemographics;
