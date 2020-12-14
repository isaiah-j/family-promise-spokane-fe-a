import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';

const Insurance = () => {
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
    <>
      <h1>Insurance</h1>
      <Form layout="vertical">
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Insurance;
