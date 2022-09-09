import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const PassConfirm = (): JSX.Element => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Sucess:', values)
        navigate('/login')
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Form
            className='pass-forget _center'
            name="login"
            layout='vertical'
            size='large'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h3>Đặt lại mật khẩu mới</h3>

            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Nhập lại mật khẩu"
                name="passwordConfirm"
                rules={[{ required: true, message: 'Please input confirm password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Xác nhận</Button>
            </Form.Item>
        </Form>
    );
};

export default PassConfirm;