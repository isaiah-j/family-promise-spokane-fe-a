import React from 'react';
import { Form, Input, Button, Space, Checkbox, Row, Col, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const RaceEthnicityInfo = ({ navigation, tempFormStyle }) => {
  const { previous, next } = navigation;
  const options = [
    'Hispanic/Latino',
    'American Indian or Alaska Native',
    'Asian',
    'Black orAfricanAmerican',
    'NativeHawaiianOr PacificIslander',
    'White',
    'Unknown',
    'Refuse',
  ];
  return (
    <div style={tempFormStyle}>
      <Card title="Race/Ethnicity Info" bordered={false} style={{ width: 800 }}>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>

        <Form layout="vertical">
          <h3>
            Please answer the following questions about race. Check all that
            apply for EACH family member.
          </h3>

          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <Space key={field.key}>
                    <p>Name Full</p>
                    <Checkbox.Group>
                      <Row>
                        {options.map((race, key) => (
                          <Col span={3} style={{ display: 'inline-block' }}>
                            <Form.Item label={race}>
                              <Checkbox value={key} />
                            </Form.Item>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>

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
        </Form>
      </Card>
    </div>
  );
};

export default RaceEthnicityInfo;
