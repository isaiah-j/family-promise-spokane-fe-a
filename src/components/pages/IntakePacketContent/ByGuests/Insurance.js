import React from 'react';
import { Form, Input, Button, Checkbox, Select, InputNumber, Card } from 'antd';

const Insurance = ({ navigation, tempFormStyle, formData, setForm }) => {
  const { previous, next } = navigation;
  const { familyInfo, familyMember } = formData;

  const insuranceSources = [
    'State',
    'Private',
    'Employment',
    'Medicaid',
    'Medicare',
    'Other',
  ];
  console.log(familyInfo.insurance.members_covered);
  return (
    <div style={tempFormStyle}>
      <Card title="Family Members" bordered={false} style={{ width: 800 }}>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>
        <h1>Insurance</h1>
        <Form
          layout="vertical"
          style={{ maxWidth: '800px', alignItems: 'center' }}
        >
          <Form.Item>
            <Checkbox>Do you have insurance?</Checkbox>
          </Form.Item>
          <Form.Item label="Health insurance source ">
            <Select>
              {insuranceSources.map((source, key) => (
                <Select.Option key={key}>{source}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Household Members covered">
            <InputNumber
              name="familyInfo.insurance.members_covered"
              value={familyInfo.insurance.members_covered}
              onChange={setForm}
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Insurance;
