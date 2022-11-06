import { Button, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectUserState } from "../../../../core/featuresRedux/hookRedux";

import { UserHandle } from "../../../../core/featuresRedux/slice/user";
import { AppDispatch } from "../../../../core/typescript/reduxState";

const PassConfirm = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const user = SelectUserState();
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);
    const onFinish = (values: any) => {
        dispatch(UserHandle({
            status: 'changePassword',
            ...values ,
            userID: user.userID
        }));
        navigate('/login');
    }


    return(
        <Form
            className='pass-forget _center'
            name="login"
            layout='vertical'
            size='large'
            requiredMark={false}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Typography.Title className="pass-forget__h">
                Đặt lại mật khẩu mới
            </Typography.Title>

            <Form.Item
                className="pass-forget__pass"
                label="Mật khẩu"
                name="password"
                required={true}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                className="pass-forget__confi"
                label="Nhập lại mật khẩu"
                name="passwordConfirm"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Button
                className="pass-forget__button"
                type="primary"
                htmlType="submit"
            >
                Xác nhận
            </Button>
        </Form>
    );
};

export default PassConfirm;