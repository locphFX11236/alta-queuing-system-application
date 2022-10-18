import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import './formLogin.css';
import { login } from "../../../../core/featuresRedux/slice/user";
import type { AppDispatch, PayloadUser } from "../../../../core/typescript/reduxState";

const FormLogin = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

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
            
            <Link to='/forget'>Quên mật khẩu?</Link>

        </Form>
    );
};

export default FormLogin;