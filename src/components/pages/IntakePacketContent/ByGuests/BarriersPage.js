import React from 'react';
import { Form, Input, Button, Space, Checkbox, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const BarriersPage = ({ navigation }) => {
  const { previous, next } = navigation;
  const { TextArea } = Input;
  const options = [
    'Alcohol Abuse',
    'Developmental Disability',
    'Chronis Health Issues',
    'Drug Abuse',
    'HIV/AIDS',
    'Mental Illness',
    'Physical Disability',
    'Are any conditions indefinite?',
  ];
  return (
    <>
      <h1>Barriers</h1>
      <h3>
        Please answer the following questions about b arriers. Check all that
        apply for EACH family member.
      </h3>
      <Form layout="vertical">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="text-top"
                >
                  <Form.Item label="Fullname">
                    <Input placeholder="First Last" />
                  </Form.Item>
                  <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                      {options.map((race, key) => (
                        <Col span={3}>
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
        <Form.Item label="Please list any documented disabilities or chronic health issues as well as any major allergies">
          <TextArea autoSize={{ minRows: 3, maxRows: 5 }}></TextArea>
        </Form.Item>
        <Form.Item label="Please list Indefinite Conditions for each family member (Alcohol Abuse, Developmental Disability, Chronic Health Issue, Mental Illness, ....)">
          <TextArea autoSize={{ minRows: 3, maxRows: 5 }}></TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="submit" onClick={next}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BarriersPage;
