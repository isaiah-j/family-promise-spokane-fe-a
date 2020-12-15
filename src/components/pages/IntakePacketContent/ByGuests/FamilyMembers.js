import React from 'react';
import { Form, Input, Button, Space, Select, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const FamilyMembers = ({ navigation, formData, setForm, tempFormStyle }) => {
  const { previous, next } = navigation;
  const addMember = fullname => {
    const famMem = {
      key: {
        demographics: {
          first_name: '',
          last_name: '',
          gender: '',
          relationship: '',
          DOB: '',
          SSN: '',
          income: '',
          employer: '',
          race: '',
        },
        bearers: {
          alcohol_abuse: false,
          developmental_disabilities: false,
          chronic_health_issues: false,
          drug_abuse: false,
          'HIV-AIDs': false,
          mental_illness: false,
          physical_disabilities: false,
          list_indefinite_conditions: null,
          list_issues: null,
        },
        schools: {
          highest_grade_completed: '',
          enrolled_status: true,
          reason_not_enrolled: '',
          attendance_status: '',
          school_type: '',
          school_name: '',
          mckinney_school: false,
        },
        flag: '',
        pet: 0,
      },
    };
    famMem[fullname] = famMem['key'];
    delete famMem['key'];
    formData.familyMember.push(famMem);
  };

  return (
    <div style={tempFormStyle}>
      <Card title="Family Members" bordered={false}>
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
                    style={{
                      display: 'flex',
                      marginBottom: 8,
                      align: 'baseline',
                    }}
                  >
                    <Form.Item label="Fullname">
                      <Input placeholder="First Last" />
                    </Form.Item>
                    <Form.Item label="Relationship">
                      <Select placeholder="Please select an option">
                        <Select.Option value="self">Self</Select.Option>
                        <Select.Option value="spouse">Spouse</Select.Option>
                        <Select.Option value="child">Child</Select.Option>
                        <Select.Option value="sibling">Sibling</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                      </Select>
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

export default FamilyMembers;
