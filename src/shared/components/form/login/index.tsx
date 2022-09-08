import { Button, Form, Input } from "antd";

import './formLogin.css'
import { useAppDispatch } from "../../../../core/features/hookRedux";
import { login } from "../../../../core/features/userSlice";
import type { PayloadUser } from "../../../../core/features/redux";

const FormLogin = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const logInPayload: PayloadUser = {
        userId: 'Admin'
    };

    const onFinish = (values: any) => {
        console.log('Sucess:', values)
        dispatch( login( logInPayload ));
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Form
            className='form-login _center'
            name="login"
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormLogin;