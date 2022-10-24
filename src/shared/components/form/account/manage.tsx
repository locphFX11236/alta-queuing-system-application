import { Button, Col, Form, Input, message, Row, Select, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { initAdd, status } from "./items";
import { AccountDataType } from "./accountType";
import { AddAcc, UpdAcc } from "../../../../core/featuresRedux/slice/account";
import { AppDispatch } from "../../../../core/typescript/reduxState";

const { Option } = Select;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: AccountDataType = location.state;
    const initValues: AccountDataType = statusUrl === 'upd' ? updRecord : initAdd;

    const Cancel = () => {
        console.log('Cancel');
        navigate('/setting/account');
    };

    const onFinish = (values: AccountDataType) => {
        if (values.password === values.passwordConfirm) {
            if (statusUrl !== 'upd') dispatch( AddAcc(values) );
            else dispatch( UpdAcc({ ...updRecord, ...values }) );
            navigate('/setting/account');
        } else {
            message.error('Vui lòng nhập lại password confirm');
            Cancel();
        }
    };

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
                            <Select placeholder="Nhập loại thiết bị" suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>} >
                                <Option value="Kế toán">Kế toán</Option>
                                <Option value="Bác sĩ">Bác sĩ</Option>
                                <Option value="Lễ tân">Lễ tân</Option>
                                <Option value="Quản lý">Quản lý</Option>
                                <Option value="Admin">Admin</Option>
                                <Option value="Supper Admin">Supper Admin</Option>
                            </Select>
                        </Form.Item>

                        <p><span style={{ color: 'red' }}>*</span> Là trường thông tin bắt buộc</p>
                    </Col>
                    <Col span={12} >
                        <Form.Item
                            label="Tên đăng nhập"
                            name="ID"
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