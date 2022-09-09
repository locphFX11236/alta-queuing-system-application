import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';

import './equip.css';

const { Option } = Select;

const ManEquForm = (): JSX.Element => {
    const onFinish = (values: any) => {
        console.log('Sucess:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const Cancel = () => {
        console.log('Cancel');
    };

    return (
        <Form
            name='man-equ-form'
            layout="vertical"
            colon={true}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                        <Select placeholder="Nhập dịch vụ sử dụng" showArrow={false} tagRender={({value}) => <p>{value}</p>}>
                            <Option key="all" value="all">Tất cả</Option>
                            <Option key="rhm" value="rhm">Khám răng hàm mặt</Option>
                            <Option key="tmh" value="tmh">Khám tai mũi họng</Option>
                            <Option key="tm" value="tm">Khám tim mạch</Option>
                            <Option key="spk" value="spk">Khám sản - Phụ khoa</Option>
                            <Option key="hh" value="hh">Khám hô hấp</Option>
                            <Option key="tq" value="tq">Khám tổng quát</Option>
                        </Select>
                    </Form.Item>

                    <p><span style={{ color: 'red' }}>*</span> Là trường thông tin bắt buộc</p>
                </div>
            </Row>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">Thêm thiết bị</Button>
            </Row>
        </Form>
    );
};

export default ManEquForm;