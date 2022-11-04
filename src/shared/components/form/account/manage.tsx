import { Button, Col, Form, Input, message, Row, Select, SelectProps, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { initAdd, status } from "./items";
import { AccountDataType } from "./accountType";
import { AddAcc, UpdAcc } from "../../../../core/featuresRedux/slice/account";
import { AppDispatch } from "../../../../core/typescript/reduxState";
import { SelectAccState, SelectRoleState } from "../../../../core/featuresRedux/hookRedux";
import { CountUpd } from "../../../../core/featuresRedux/slice/role";

const { Option } = Select;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const roleState = SelectRoleState().data;
    const accState = SelectAccState().data;
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: AccountDataType = location.state;
    const initValues: AccountDataType = statusUrl === 'upd' ? updRecord : initAdd;
    const options: SelectProps['options'] = [];
    const Cancel = () => navigate('/setting/account');
    const onFinish = (values: AccountDataType) => {
        const { passwordConfirm, ...rest } = values;
        if (rest.password === passwordConfirm) {
            const newAccArr = [ ...accState ]
            if (statusUrl !== 'upd') {
                rest.key = accState.length + 1;
                newAccArr.push(rest)
                dispatch( AddAcc(rest) );
                dispatch( CountUpd(newAccArr));
            } else {
                const index = accState.findIndex((d: any) => d.key === updRecord.key);
                newAccArr.splice(index, 1, rest)
                dispatch( UpdAcc({ ...updRecord, ...rest }) );
                dispatch( CountUpd(newAccArr));
            }
            navigate('/setting/account');
        } else {
            message.error('Vui lòng nhập lại password confirm');
            Cancel();
        }
    };

    roleState.forEach((d: any) => options.push({
        label: d.position,
        value: d.position,
    }));

    return (
        <Form
            name='man-acc-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={initValues}
        >
            <div className="main-box">
                <Typography.Title className="title-lv-2">Thông tin tài khoản</Typography.Title>
                <Row className="form-box">
                    <Col span={12} >
                        <Form.Item
                            label="Họ tên"
                            name='name'
                            wrapperCol={{ span: 23 }}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Nhập họ tên" />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name='phoneNumber'
                            wrapperCol={{ span: 23 }}
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name='email'
                            wrapperCol={{ span: 23 }}
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Nhập email" />
                        </Form.Item>

                        <Form.Item
                            label="Tên vai trò"
                            name='position'
                            wrapperCol={{ span: 23 }}
                            rules={[{ required: true, message: 'Please input role!' }]}
                        >
                            <Select
                                placeholder="Nhập loại thiết bị"
                                options={options}
                                suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>}
                            />
                        </Form.Item>

                        <p><span style={{ color: 'red' }}>*</span> Là trường thông tin bắt buộc</p>
                    </Col>
                    <Col span={12} >
                        <Form.Item
                            label="Tên đăng nhập"
                            name="userID"
                            rules={[{ required: true, message: 'Please input your user name!' }]}
                        >
                            <Input placeholder="Nhập tên đăng nhập" />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Nhập mật khẩu" />
                        </Form.Item>

                        <Form.Item
                            label="Nhập lại mật khẩu"
                            name="passwordConfirm"
                            rules={[{ required: true, message: 'Please input confirm password!' }]}
                        >
                            <Input.Password placeholder="Nhập lại mật khẩu" />
                        </Form.Item>

                        <Form.Item
                            label="Tình trạng"
                            name="status"
                            rules={[{ required: true }]}
                        >
                            <Select suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>} >
                                <Option value={true} >Hoạt động</Option>
                                <Option value={false}>Ngưng hoạt động</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">{status[statusUrl]}</Button>
            </Row>
        </Form>
    );
};

export default Manage;