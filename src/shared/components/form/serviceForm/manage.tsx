import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { initAdd, status } from "./items";
import { ServiceDataType } from './serviceType';

const { TextArea } = Input;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: ServiceDataType = location.state;
    const initValues: ServiceDataType = statusUrl === 'upd' ? updRecord : initAdd;

    const onFinish = (values: ServiceDataType) => {
        console.log('Sucess:', values);
        navigate('/');
    }

    const Cancel = () => {
        console.log('Cancel');
        navigate('/service');
    };


    return (
        <Form
            name='mana-serv-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={initValues}
        >
            <Row className="main-box">
                <Typography.Title className="title-lv-2">Thông tin dịch vụ</Typography.Title>
                <div className="form-box">
                    <Row>
                        <Col span={12} >
                            <Form.Item
                                label="Mã dịch vụ:"
                                name='code'
                                wrapperCol={{ span: 23 }}
                                rules={[{ required: true, message: 'Please input code!' }]}
                            >
                                <Input placeholder="Nhập mã dịch vụ" />
                            </Form.Item>

                            <Form.Item
                                label="Tên dịch vụ:"
                                name='name'
                                wrapperCol={{ span: 23 }}
                                rules={[{ required: true, message: 'Please input name!' }]}
                            >
                                <Input placeholder="Nhập tên dịch vụ" />
                            </Form.Item>
                        </Col>
                        <Col span={12} >
                            <Form.Item
                                label="Mô tả:"
                                name='description'
                                labelCol={{ span: 23, offset: 1 }}
                                wrapperCol={{ span: 23, offset: 1 }}
                            >
                                <TextArea rows={5} placeholder="Mô tả dịch vụ" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Item
                            label={<h2>Quy tắc cấp số</h2>}
                            name={[ 'setting', 'mode' ]}
                        >
                            <Checkbox.Group >
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="v1" style={{ lineHeight: '32px', margin: 5 }} />
                                        <span>Tăng tự động từ:</span>
                                    </Col>
                                    <Col span={16}>
                                        <Form.Item noStyle name={['setting', 'values', 'v1', 'from']} >
                                            <Input style={{ width: '20%', margin: '0 5px' }} type='number' />
                                        </Form.Item>
                                        <span>đến</span>
                                        <Form.Item noStyle name={['setting', 'values', 'v1', 'to']} >
                                            <Input style={{ width: '20%', margin: '0 5px' }} type='number' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="v2" style={{ lineHeight: '32px', margin: 5 }} />
                                        <span>Prefix:</span>
                                    </Col>
                                    <Col span={16}>
                                        <Form.Item noStyle name={['setting', 'values', 'v2']} >
                                            <Input style={{ width: '20%', margin: '0 5px' }} type='number' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="v3" style={{ lineHeight: '32px', margin: 5 }} />
                                        <span>Surfix:</span>
                                    </Col>
                                    <Col span={16}>
                                        <Form.Item noStyle name={['setting', 'values', 'v3']} >
                                            <Input style={{ width: '20%', margin: '0 5px' }} type='number' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Col span={8}>
                                    <Checkbox value="v4" style={{ lineHeight: '32px', margin: 5 }} />
                                    <span>Reset mỗi ngày</span>
                                </Col>
                            </Checkbox.Group>
                        </Form.Item>
                    </Row>

                    <p><span style={{ color: 'red' }}>*</span> Là trường thông tin bắt buộc</p>
                </div>
            </Row>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">{status[statusUrl]}</Button>
            </Row>
        </Form>
    );
}
export default Manage;