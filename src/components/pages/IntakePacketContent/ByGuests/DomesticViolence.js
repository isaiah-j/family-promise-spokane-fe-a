import React from 'react';
import { Form, Button, DatePicker, Checkbox, Radio } from 'antd';

const DomesticViolence = ({ navigation, tempFormStyle, formData, setForm }) => {
  const { previous, next } = navigation;
  const { familyInfo } = formData;

  return (
    <div style={tempFormStyle}>
      <h1>Domestic DomesticViolence</h1>
      <Form layout="vertical">
        <Form.Item label="Are you Currently fleeing a DV situation?">
          <Radio.Group>
            <Checkbox>Y</Checkbox>
            <Checkbox>N</Checkbox>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="If so do you wish to be entered in HMIS anonymously? ">
          <Checkbox>Y</Checkbox>
          <Checkbox>N</Checkbox>
        </Form.Item>
        <Form.Item label="Date of most recent DV incident">
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
        <Form.Item label="Is there a No Contact or any other Court Order in place?">
          <Checkbox>Y</Checkbox>
          <Checkbox>N</Checkbox>
        </Form.Item>
        <Form.Item label="If you are fleeing DV, have you contacted the YWCA?">
          <Checkbox>Y</Checkbox>
          <Checkbox>N</Checkbox>
        </Form.Item>
        <p>If not, please ask supervisor for the YWCA phone number to call.</p>
        <p style={{ maxWidth: '800px' }}>
          If you wish to be anonymous AND you have registered with the HFCA, we
          will need your HMIS # - This number is assigned to you by the HFCA -
          If you have not registered with the HFCA we can assign you an
          anonymous HMIS{' '}
        </p>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={previous}>
            Previous
          </Button>
          <Button type="primary" htmlType="button" onClick={next}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DomesticViolence;
