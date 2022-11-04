import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../../../core/featuresRedux/slice/user";
import { AppDispatch } from "../../../../core/typescript/reduxState";

const PassConfirm = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);
    const onFinish = (values: any) => {
        const { password, passwordConfirm } = values;
        if (password !== passwordConfirm) return message.warning('Password confirm không phù hợp với password!');
        else {
            dispatch(changePassword(password));
            navigate('/login');
        }
    }


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