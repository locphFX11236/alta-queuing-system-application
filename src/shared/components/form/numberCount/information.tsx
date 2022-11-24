import { Col, Form, Row, Typography } from "antd";
import { Location, useLocation } from "react-router-dom";

import { StatusTag } from "../../badgeTag";
import { RenderSources, RenderUseServices } from "./items";
import { NuCoDataType } from "./NuCoType";

const Information = (): JSX.Element => {
    const location: Location = useLocation();
    const inforRecord: NuCoDataType = location.state;

    return (
        <Form
            colon
            className="main-box"
            name='infor-num-form'
            size='large'
        >
            <Typography.Title className="title-lv-2">Thông tin cấp số</Typography.Title>

            <Row className="infor-box">
                <Col className="infor-box__col1">
                    <Form.Item
                        label="Họ tên"
                        name='name'
                        labelAlign='left'
                    >
                        <span>{inforRecord.name}</span>
                    </Form.Item>

                    <Form.Item
                        label="Tên dịch vụ"
                        name='useService'
                        labelAlign='left'
                    >
                        <span>{ RenderUseServices[inforRecord.useService] }</span>
                    </Form.Item>

                    <Form.Item
                        label="Số thứ tự"
                        name='key'
                        labelAlign='left'
                    >
                        <span>{inforRecord.countNumber}</span>
                    </Form.Item>

                    <Form.Item
                        label="Thời gian cấp"
                        name='startTime'
                        labelAlign='left'
                    >
                        <span>{inforRecord.startTime}</span>
                    </Form.Item>

                    <Form.Item
                        label="Hạn sử dụng"
                        name='endTime'
                        labelAlign='left'
                    >
                        <span>{inforRecord.endTime}</span>
                    </Form.Item>
                </Col>
                <Col className="infor-box__col2">
                    <Form.Item
                        label="Nguồn cấp"
                        name='source'
                        labelAlign='left'
                    >
                        <span>{ RenderSources[inforRecord.source] }</span>
                    </Form.Item>

                    <Form.Item
                        label="Trạng thái"
                        name='status'
                        labelAlign='left'
                    >
                        <span><StatusTag s={inforRecord.status} /></span>
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name='phoneNumber'
                        labelAlign='left'
                    >
                        <span>{inforRecord.phoneNumber}</span>
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ Email"
                        name='emailAddress'
                        labelAlign='left'
                    >
                        <span>{inforRecord.email}</span>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default Information;