import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { initAdd, status } from "./items";
import { EquipDataType } from "./equipType";
import { AppDispatch } from "../../../../core/typescript/reduxState";
import { AddEquip, UpdEquip } from "../../../../core/featuresRedux/slice/equipment";

const { Option } = Select;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: EquipDataType = location.state;
    const initValues: EquipDataType = statusUrl === 'upd' ? updRecord : initAdd;
    const Cancel = () => navigate('/equip');
    const onFinish = (values: EquipDataType) => {
        if (statusUrl !== 'upd') dispatch( AddEquip(values) );
        else dispatch( UpdEquip({ ...updRecord, ...values }) );
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

                <Row className="mana-equ-form__row1">
                    <Col className="mana-equ-form__row1__col1">
                        <Form.Item
                            label="Mã thiết bị:"
                            name='code'
                            rules={[{ required: true, message: 'Please input code!' }]}
                        >
                            <Input placeholder="Nhập mã thiết bị" />
                        </Form.Item>

                        <Form.Item
                            label="Tên thiết bị:"
                            name='name'
                            rules={[{ required: true, message: 'Please input name!' }]}
                        >
                            <Input placeholder="Nhập tên thiết bị" />
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ IP:"
                            name='IPAddress'
                            rules={[{ required: true, message: 'Please input IP address!' }]}
                        >
                            <Input placeholder="Nhập địa chỉ IP" />
                        </Form.Item>
                    </Col>

                    <Col className="mana-equ-form__row1__col2">
                        <Form.Item
                            label="Loại thiết bị:"
                            name='type'
                            rules={[{ required: true, message: 'Please select type!' }]}
                        >
                            <Select placeholder="Nhập loại thiết bị" showAction={['click']} suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>} >
                                <Option value="kiosk">Kiosk</Option>
                                <Option value="counter">Display counter</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Tên đăng nhập:"
                            name='userId'
                            rules={[{ required: true, message: 'Please input userId!' }]}
                        >
                            <Input placeholder="Nhập tên đăng nhập" />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu:"
                            name='password'
                            rules={[{ required: true, message: 'Please input password!' }]}
                        >
                            <Input placeholder="Nhập mật khẩu" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row className="mana-equ-form__row2">
                    <Form.Item
                        label="Dịch vụ sử dụng:"
                        name='usedService'
                        rules={[{ required: true, message: 'Please select used service!' }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Nhập dịch vụ sử dụng"
                        >
                            <Option key="all" value="all">Tất cả</Option>
                            <Option key="rhm" value="rhm">Khám răng hàm mặt</Option>
                            <Option key="m" value="m">Khám mắt</Option>
                            <Option key="tmh" value="tmh">Khám tai mũi họng</Option>
                            <Option key="tm" value="tm">Khám tim mạch</Option>
                            <Option key="s-pk" value="s-pk">Khám sản - Phụ khoa</Option>
                            <Option key="hh" value="hh">Khám hô hấp</Option>
                            <Option key="tq" value="tq">Khám tổng quát</Option>
                        </Select>
                    </Form.Item>
                </Row>

                <p className="note">Là trường thông tin bắt buộc</p>
            </Row>  
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">{status[statusUrl]}</Button>
            </Row>
        </Form>
    );
};

export default Manage;