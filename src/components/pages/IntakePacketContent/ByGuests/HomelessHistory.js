import React from 'react';
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Checkbox,
  Card,
} from 'antd';
const HomelessHistory = ({ navigation, tempFormStyle }) => {
  const { previous, next } = navigation;
  return (
    <div style={tempFormStyle}>
      <Card title="History" bordered={false} style={{ width: 800 }}>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>
        <Form layout="vertical">
          <Form.Item label="Last permanent address (last address you lived where you did not consider yourself to be homeless">
            <Input />
          </Form.Item>
          <Form.Item label="Where did you stay last night? How long were you at this location?">
            <Input.Group style={{ display: 'flex' }}>
              <Form.Item label="Location">
                <Input />
              </Form.Item>
              <Form.Item label="Days">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Months">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Years">
                <InputNumber />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Aprroximately when did you become homeless?">
            <DatePicker format="DD/MM/YYYY" />
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
        </Form>
      </Card>
    </div>
  );
};

export default HomelessHistory;
