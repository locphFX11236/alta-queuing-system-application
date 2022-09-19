import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import { initAdd, status } from "./items";
import { EquipDataType } from "./equipType";

const { Option } = Select;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: EquipDataType = location.state;
    const initValues: EquipDataType = statusUrl === 'upd' ? updRecord : initAdd;
    console.log(updRecord);

    const onFinish = (values: EquipDataType) => {
        console.log('Sucess:', values);
        navigate('/');
    }

    const Cancel = () => {
        console.log('Cancel');
        navigate('/equip');
    };

    return (
        <Form
            name='mana-equ-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={initValues}
        >
            <Row className="main-box">
                <Typography.Title className="title-lv-2">Thông tin thiết bị</Typography.Title>

                <div className="form-box">
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="Mã thiết bị:"
                                name='code'
                                wrapperCol={{ span: 23 }}
                                rules={[{ required: true, message: 'Please input code!' }]}
                            >
                                <Input placeholder="Nhập mã thiết bị" />
                            </Form.Item>

                            <Form.Item
                                label="Tên thiết bị:"
                                name='name'
                                wrapperCol={{ span: 23 }}
                                rules={[{ required: true, message: 'Please input name!' }]}
                            >
                                <Input placeholder="Nhập tên thiết bị" />
                            </Form.Item>

                            <Form.Item
                                label="Địa chỉ IP:"
                                name='IPAddress'
                                wrapperCol={{ span: 23 }}
                                rules={[{ required: true, message: 'Please input IP address!' }]}
                            >
                                <Input placeholder="Nhập địa chỉ IP" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Loại thiết bị:"
                                name='type'
                                labelCol={{ span: 23, offset: 1 }}
                                wrapperCol={{ span: 23, offset: 1 }}
                                rules={[{ required: true, message: 'Please select type!' }]}
                            >
                                <Select placeholder="Nhập loại thiết bị" suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>} >
                                    <Option value="kiosk">Kiosk</Option>
                                    <Option value="counter">Display counter</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Tên đăng nhập:"
                                name='userId'
                                labelCol={{ span: 23, offset: 1 }}
                                wrapperCol={{ span: 23, offset: 1 }}
                                rules={[{ required: true, message: 'Please input userId!' }]}
                            >
                                <Input placeholder="Nhập tên đăng nhập" />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu:"
                                name='password'
                                labelCol={{ span: 23, offset: 1 }}
                                wrapperCol={{ span: 23, offset: 1 }}
                                rules={[{ required: true, message: 'Please input password!' }]}
                            >
                                <Input placeholder="Nhập mật khẩu" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Dịch vụ sử dụng:"
                        name='usedService'
                        rules={[{ required: true, message: 'Please select used service!' }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Nhập dịch vụ sử dụng"
                        >
                            <Option key="rhm" value="rhm">Khám răng hàm mặt</Option>
                            <Option key="m" value="m">Khám mắt</Option>
                            <Option key="tmh" value="tmh">Khám tai mũi họng</Option>
                            <Option key="tm" value="tm">Khám tim mạch</Option>
                            <Option key="s-pk" value="s-pk">Khám sản - Phụ khoa</Option>
                            <Option key="hh" value="hh">Khám hô hấp</Option>
                            <Option key="tq" value="tq">Khám tổng quát</Option>
                        </Select>
                    </Form.Item>

                    <p><span style={{ color: 'red' }}>*</span> Là trường thông tin bắt buộc</p>
                </div>
            </Row>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">{status[statusUrl]}</Button>
            </Row>
        </Form>
    );
};

export default Manage;