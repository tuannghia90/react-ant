import React, { useState } from 'react';
import {  UserOutlined ,MailOutlined,PhoneOutlined,ReloadOutlined,MessageOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function AppContact() {

  return (
    <div id ='contact' className="contactBlock ">
      <div className="container-fluid">
      <div className="titleHolder">
          <h2>Get in Touch</h2>
        </div>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
  
    >
      <Form.Item
        name="Full Name"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined/>} placeholder="Full Name" />
      </Form.Item>

      <Form.Item
        name="Email Address"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
      >
        <Input prefix={<MailOutlined /> } placeholder="Email Address" />
      </Form.Item>

      <Form.Item
        name="Telephone"
        rules={[
          {
            required: true,
            message: 'Please input your Telephone!',
          },
        ]}
      >
        <Input prefix={<PhoneOutlined />} placeholder="Telephone" />
      </Form.Item>

      <Form.Item
        name="Subject"
        rules={[
          {
            required: true,
            message: 'Please input your Subject!',
          },
        ]}
      >
        <Input prefix={<ReloadOutlined />} placeholder="Subject" />
      </Form.Item>
      <textarea prefix={<MessageOutlined />} placeholder="Message" class="ant-input"></textarea>
        <Form.Item noStyle>
          <Checkbox>I agree with terms and conditions.</Checkbox>
        </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
      </Form.Item>
    </Form>

      </div>
    </div>  
  );
}

export default AppContact;
