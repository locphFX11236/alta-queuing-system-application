import { Col, Form, Row, Typography } from "antd";
import { Location, useLocation } from "react-router-dom";

import { EquipDataType } from "./equipType";
import { addInforRecord, RenderValue } from "./items";

const Information = (): JSX.Element => {
    const location: Location = useLocation();
    const inforRecord: EquipDataType = Object.assign({}, location.state, addInforRecord);

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
                                label="Mã thiết bị"
                                name='code'
                                labelAlign='left'
                                labelCol={{ span: 12 }}
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.code}</span>
                            </Form.Item>

                            <Form.Item
                                label="Tên thiết bị"
                                name='name'
                                labelAlign='left'
                                labelCol={{ span: 12 }}
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.name}</span>
                            </Form.Item>

                            <Form.Item
                                label="Địa chỉ IP"
                                name='IPAddress'
                                labelAlign='left'
                                labelCol={{ span: 12 }}
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.IPAddress}</span>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Loại thiết bị"
                                name='type'
                                labelAlign='left'
                                labelCol={{ span: 12 }}
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{ RenderValue[inforRecord.type] }</span>
                            </Form.Item>

                            <Form.Item
                                label="Tên đăng nhập"
                                name='userId'
                                labelAlign='left'
                                labelCol={{ span: 12 }}
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.userId}</span>
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name='password'
                                labelAlign='left'
                                labelCol={{ span: 12 }}
                                wrapperCol={{ span: 12 }}
                            >
                                <span>{inforRecord.password}</span>
                            </Form.Item>
                        </Col>
                    </Row>

                    <label>Dịch vụ sử dụng:</label>
                    <p>{inforRecord.usedService.map((a: any) => RenderValue[a]).join(', ')}.</p>
                </div>
            </Row>
        </Form>
    );
};

export default Information;