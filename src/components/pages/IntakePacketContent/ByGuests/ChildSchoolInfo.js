import React from 'react';
import { Form, Input, Button, Space, Select, Checkbox, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const ChildSchoolInfo = ({ navigation, tempFormStyle }) => {
  const { previous, next } = navigation;
  const { TextArea } = Input;
  return (
    <div style={tempFormStyle}>
      <Card title="School Verification" bordered={false}>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>
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
                    <Form.Item label="Childs name">
                      <Input placeholder="First Last" />
                    </Form.Item>
                    <Form.Item label="Highestgrade completed">
                      <Select placeholder="Please select an option">
                        <option value="spouse">Self</option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Currently Enrolled?">
                      <Checkbox />
                    </Form.Item>
                    <Form.Item label="Attendence Status">
                      <Select placeholder="Please select an option">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="School Type">
                      <Select placeholder="Please select an option">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="School Name">
                      <Input placeholder="ex. Soap Lake MSHS" />
                    </Form.Item>
                    <Form.Item label="Connected w/ McKinney-Vento School">
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
          <Form.Item label="IF YOUR CHILD(REN) IS/ARE NOT ENROLLED IN SCHOOL AT THIS TIME PLEASE INDICATE THE REASON WHY BELOW">
            <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ChildSchoolInfo;
