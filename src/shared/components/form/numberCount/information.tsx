import { Col, Form, Row, Typography } from "antd";
import { Location, useLocation } from "react-router-dom";

import { StatusTag } from "../../badgeTag";
import { NuCoDataType } from "./NuCoType";

const Information = (): JSX.Element => {
    const location: Location = useLocation();
    const inforRecord: NuCoDataType = location.state;

    inforRecord.phoneNumber = '0123456789 (Add sdt)';
    inforRecord.emailAddress = 'aaa@axa.com (Add email)';

    return (
        <Form
            colon
            className="main-box"
            name='infor-num-form'
            size='large'
        >
            <Typography.Title className="title-lv-2">Thông tin cấp số</Typography.Title>

            <Row className="infor-box">
                <Col span={12}>
                    <Form.Item
                        label="Họ tên"
                        name='name'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.name}</span>
                    </Form.Item>

                    <Form.Item
                        label="Tên dịch vụ"
                        name='useService'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.useService}</span>
                    </Form.Item>

                    <Form.Item
                        label="Số thứ tự"
                        name='key'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.key}</span>
                    </Form.Item>

                    <Form.Item
                        label="Thời gian cấp"
                        name='startTime'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.startTime}</span>
                    </Form.Item>

                    <Form.Item
                        label="Hạn sử dụng"
                        name='endTime'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.endTime}</span>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Nguồn cấp"
                        name='source'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.source}</span>
                    </Form.Item>

                    <Form.Item
                        label="Trạng thái"
                        name='status'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span><StatusTag s={inforRecord.status} /></span>
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name='phoneNumber'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.phoneNumber}</span>
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ Email"
                        name='emailAddress'
                        labelAlign='left'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <span>{inforRecord.emailAddress}</span>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default Information;