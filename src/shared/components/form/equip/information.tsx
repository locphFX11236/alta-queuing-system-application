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

                <Row className="infor-equ-form__row1">
                    <Col className="infor-equ-form__row1__col1" span={12}>
                        <Form.Item
                            label="Mã thiết bị"
                            name='code'
                            labelAlign='left'
                        >
                            <span>{inforRecord.code}</span>
                        </Form.Item>

                        <Form.Item
                            label="Tên thiết bị"
                            name='name'
                            labelAlign='left'
                        >
                            <span>{inforRecord.name}</span>
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ IP"
                            name='IPAddress'
                            labelAlign='left'
                        >
                            <span>{inforRecord.IPAddress}</span>
                        </Form.Item>
                    </Col>

                    <Col className="infor-equ-form__row1__col2" span={12}>
                        <Form.Item
                            label="Loại thiết bị"
                            name='type'
                            labelAlign='left'
                        >
                            <span>{ RenderValue[inforRecord.type] }</span>
                        </Form.Item>

                        <Form.Item
                            label="Tên đăng nhập"
                            name='userId'
                            labelAlign='left'
                        >
                            <span>{inforRecord.userId}</span>
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name='password'
                            labelAlign='left'
                        >
                            <span>{inforRecord.password}</span>
                        </Form.Item>
                    </Col>
                </Row>

                <label className="infor-equ-form__row2">Dịch vụ sử dụng:</label>
                <p className="infor-equ-form__row3">{inforRecord.usedService.map((a: any) => RenderValue[a]).join(', ')}.</p>
            </Row>
        </Form>
    );
};

export default Information;