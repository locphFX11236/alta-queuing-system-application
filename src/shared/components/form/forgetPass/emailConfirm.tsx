import { Button, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { UserHandle } from "../../../../core/featuresRedux/slice/user";
import { AppDispatch } from "../../../../core/typescript/reduxState";
import { Acc } from "./item";

const EmailConfirm = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const Cancel = () => navigate('/login');
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);
    const onFinish = (values: any) => dispatch(UserHandle({...values, status: 'emailConfirm'}));

    return(
        <Form
            className='email-forget _center'
            name="login"
            layout='vertical'
            size='large'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{email: Acc.email}}
        >
            <Typography.Title className="email-forget__h">
                Đặt lại mật khẩu
            </Typography.Title>

            <Form.Item
                className="email-forget__form"
                label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item className="email-forget__button-group">
                <Button
                    className="email-forget__button-group__cancel"
                    type="primary"
                    onClick={Cancel}
                >
                    Hủy
                </Button>
                <Button
                    className="email-forget__button-group__submit"
                    type="primary"
                    htmlType="submit"
                >
                    Tiếp tục
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EmailConfirm;