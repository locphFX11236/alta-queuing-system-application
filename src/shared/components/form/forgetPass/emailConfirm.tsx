import { Button, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";

const EmailConfirm = ({onOk}: any): JSX.Element => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Sucess:', values)
        onOk(true);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const Cancel = () => {
        navigate('/login');
    };

    return(
        <Form
            className='email-forget _center'
            name="login"
            layout='vertical'
            size='large'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h3>Đặt lại mật khẩu</h3>

            <Form.Item
                label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" onClick={Cancel}>Hủy</Button>
                <Button type="primary" htmlType="submit">Tiếp tục</Button>
            </Form.Item>
        </Form>
    );
};

export default EmailConfirm;