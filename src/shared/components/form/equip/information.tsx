import { Col, Form, Row, Typography } from "antd";
import { Location, useLocation } from "react-router-dom";

import { EquipDataType } from "./equipType";

const Information = (): JSX.Element => {
    const location: Location = useLocation();
    const inforRecord: EquipDataType = location.state;

    return (
        <Form
            name='infor-equ-form'
            colon={true}
        >
            <Row className="main-box">
                <Typography.Title className="title-lv-2">Thông tin thiết bị</Typography.Title>

                <div className="infor-box">
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="Mã thiết bị:"
                                name='code'
                                labelCol={{ span: 12 }}
                                labelAlign='left'
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.code}</span>
                            </Form.Item>

                            <Form.Item
                                label="Tên thiết bị:"
                                name='name'
                                labelCol={{ span: 12 }}
                                labelAlign='left'
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.name}</span>
                            </Form.Item>

                            <Form.Item
                                label="Địa chỉ IP:"
                                name='IPAddress'
                                labelCol={{ span: 12 }}
                                labelAlign='left'
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.IPAddress}</span>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Loại thiết bị:"
                                name='type'
                                labelCol={{ span: 12 }}
                                labelAlign='left'
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.type}</span>
                            </Form.Item>

                            <Form.Item
                                label="Tên đăng nhập:"
                                name='userId'
                                labelCol={{ span: 12 }}
                                labelAlign='left'
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.userId}</span>
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu:"
                                name='password'
                                labelCol={{ span: 12 }}
                                labelAlign='left'
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.password}</span>
                            </Form.Item>
                        </Col>
                    </Row>

                    <label>Dịch vụ sử dụng:</label>
                    <p>{inforRecord.usedService.join(', ')}.</p>
                </div>
            </Row>
        </Form>
    );
};

export default Information;