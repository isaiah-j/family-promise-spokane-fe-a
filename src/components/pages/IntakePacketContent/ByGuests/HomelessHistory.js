import React from 'react';
import { Form, Input, InputNumber, DatePicker, Button, Checkbox } from 'antd';
const HomelessHistory = () => {
  return (
    <>
      <h1>History</h1>
      <Form layout="vertical">
        <Form.Item label="Last permanent address (last address you lived where you did not consider yourself to be homeless">
          <Input />
        </Form.Item>
        <Form.Item label="Where did you stay last night? How long were you at this location?">
          <Input.Group>
            <Form.Item label="">
              <Input>Thing</Input>
            </Form.Item>
            <Form.Item label="">
              <InputNumber />
            </Form.Item>
            <Form.Item label="">
              <InputNumber />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Aprroximately when did you become homeless?">
          <DatePicker />
        </Form.Item>
        <Form.Item label="How many times in the last 3 years have you been homeless?">
          <InputNumber />
        </Form.Item>
        <Form.Item label="How many total months in those 3 years have you been homeless?">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Have you used our shelter before?">
          <Checkbox>Y</Checkbox>
          <Checkbox>N</Checkbox>
        </Form.Item>
        <Form.Item label=" If yes when?">
          <Input />
        </Form.Item>

        <Form.Item label="">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default HomelessHistory;
