import React, { useState } from 'react';
import { Form, Input, Space, Button } from 'antd';

import Checkbox from 'antd/lib/checkbox/Checkbox';
const ContactInfo = ({ navigation, formData, setForm, tempFormStyle }) => {
  const { previous, next } = navigation;
  const { familyInfo, familyMember } = formData;

  return (
    <div style={tempFormStyle}>
      <h1>Contact Info</h1>
      <Form layout="vertical">
        <h3>Please included both adults personal phone numbers:</h3>
        <Space style={{ display: 'flex' }}>
          <Form.Item>
            <Input
              placeholder="Full Name"
              name="familyInfo.phone_one.name"
              value={familyInfo.phone_one.name}
              onChange={setForm}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Number"
              name="familyInfo.phone_one.number"
              value={familyInfo.phone_one.number}
              onChange={setForm}
            ></Input>
          </Form.Item>
        </Space>
        <Form.Item>
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
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactInfo;
