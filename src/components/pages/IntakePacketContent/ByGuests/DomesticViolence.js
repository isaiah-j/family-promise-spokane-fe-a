import React from 'react';
import { Form, Button, DatePicker, Checkbox } from 'antd';

const DomesticViolence = () => {
  return (
    <>
      <h1>Domestic DomesticViolence</h1>
      <Form>
        <Form.Item label="Are you Currently fleeing a DV situation?">
          <Checkbox>Y</Checkbox>
          <Checkbox>N</Checkbox>
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
        <p>
          If you wish to be anonymous AND you have registered with the HFCA, we
          will need your HMIS # - This number is assigned to you by the HFCA -
          If you have not registered with the HFCA we can assign you an
          anonymous HMIS{' '}
        </p>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DomesticViolence;
