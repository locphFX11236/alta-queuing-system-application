import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../core/features/hookRedux';
import { PayloadUser } from '../core/features/redux';
import { login } from '../core/features/userSlice';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
 
    const logInPayload: PayloadUser = {
        userId: 'Admin'
    };

    const onFinish = (values: any) => dispatch( login( logInPayload ));

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
          name="login"
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;