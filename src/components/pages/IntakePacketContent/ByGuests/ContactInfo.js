import React, { useState } from 'react';
import { Form, Input, Space, Button } from 'antd';

import Checkbox from 'antd/lib/checkbox/Checkbox';

const ContactInfo = () => {
  return (
    <>
      <h1>Contact Info</h1>
      <Form layout="vertical">
        <h3>Please included both adults personal phone numbers:</h3>
        <Space style={{ display: 'flex' }} align="baseline">
          <Form.Item>
            <Input placeholder="Full Name"></Input>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Number"></Input>
          </Form.Item>
        </Space>
        <Form.Item>
          {/*onchange function takes in param of number toattach checkbox to num */}
          <Checkbox>Safe to leave message</Checkbox>
        </Form.Item>
        <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
          <Form.Item>
            <Input placeholder="Full Name"></Input>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Number"></Input>
          </Form.Item>
        </Space>
        <Form.Item>
          <Checkbox>Safe to leave message</Checkbox>
        </Form.Item>
        <h3>Safe alternitive contact:</h3>
        <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
          <Form.Item>
            <Input placeholder="Full Name"></Input>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Number"></Input>
          </Form.Item>
        </Space>
        <h3>Emergancy Contact</h3>
        <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
          <Form.Item>
            <Input placeholder="Full Name"></Input>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Number"></Input>
          </Form.Item>
        </Space>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactInfo;
