import { Button, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import './style.css';
import { initValues } from "./item";
import { UserHandle } from "../../../../core/featuresRedux/slice/user";
import type { AppDispatch } from "../../../../core/typescript/reduxState";

const FormLogin = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);
    const onFinish = (values: any) => dispatch( UserHandle({ ...values, status: 'login'}) ); // Login

    return (
        <Form
            className='form-login _center'
            name="login"
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={initValues}
        >
            <Form.Item
                className="form-login__id-input"
                label="Tên đăng nhập"
                name="userID"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className="form-login__pass-input"
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Space className="form-login__button-group">
                <Form.Item className="form-login__button-group__button">
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
                
                <Link className="form-login__button-group__link" to='/forget'>Quên mật khẩu?</Link>
            </Space>

        </Form>
    );
};

export default FormLogin;