import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';

const Insurance = ({ navigation, tempFormStyle }) => {
  const { previous, next } = navigation;
  const { TextArea } = Input;
  const insuranceSources = [
    'State',
    'Private',
    'Employment',
    'Medicaid',
    'Medicare',
    'Other',
  ];

  return (
    <div style={tempFormStyle}>
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
            {insuranceSources.map(source => (
              <option>{source}</option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Household Members covered">
          <TextArea />
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
    </div>
  );
};

export default Insurance;
