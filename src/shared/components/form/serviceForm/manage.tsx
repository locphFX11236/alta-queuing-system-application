import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { initAdd, status } from "./items";
import { ServiceDataType } from './serviceType';
import { AddServ, UpdServ } from '../../../../core/featuresRedux/slice/service';
import { AppDispatch } from '../../../../core/typescript/reduxState';

const { TextArea } = Input;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: ServiceDataType = location.state;
    const initValues: ServiceDataType = statusUrl === 'upd' ? updRecord : initAdd;

    const onFinish = (values: ServiceDataType) => {
        if (statusUrl !== 'upd') dispatch( AddServ(values) );
        else dispatch( UpdServ({ ...updRecord, ...values }) );
        navigate('/service');
    };
    const Cancel = () => navigate('/service');


    return (
        <Form
            name='mana-serv-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={initValues}
        >
            <Row className="main-box">
                <Typography.Title className="title-lv-2">Thông tin dịch vụ</Typography.Title>
                
                <Row className='mana-serv-form__row1'>
                    <Col className='mana-serv-form__row1__col1'>
                        <Form.Item
                            label="Mã dịch vụ:"
                            name='code'
                            rules={[{ required: true, message: 'Please input code!' }]}
                        >
                            <Input placeholder="Nhập mã dịch vụ" />
                        </Form.Item>

                        <Form.Item
                            label="Tên dịch vụ:"
                            name='name'
                            rules={[{ required: true, message: 'Please input name!' }]}
                        >
                            <Input placeholder="Nhập tên dịch vụ" />
                        </Form.Item>
                    </Col>
                    <Col className='mana-serv-form__row1__col2'>
                        <Form.Item
                            label="Mô tả:"
                            name='description'
                        >
                            <TextArea rows={5} placeholder="Mô tả dịch vụ" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row className='mana-serv-form__row2'>
                    <Form.Item
                        label='Quy tắc cấp số'
                        name={[ 'setting', 'mode' ]}
                    >
                        <Checkbox.Group >
                            <Row>
                                <Col>
                                    <Checkbox value="v1"/>
                                    <span>Tăng tự động từ:</span>
                                </Col>
                                <Col>
                                    <Form.Item
                                        noStyle
                                        rules={[{ type: 'number', message: '' }]}
                                        name={['setting', 'values', 'v1', 'from']}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <span>đến</span>
                                    <Form.Item
                                        noStyle
                                        rules={[{ type: 'number', message: '' }]}
                                        name={['setting', 'values', 'v1', 'to']}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Checkbox value="v2"/>
                                    <span>Prefix:</span>
                                </Col>
                                <Col>
                                    <Form.Item
                                        noStyle
                                        rules={[{ type: 'number', message: '' }]}
                                        name={['setting', 'values', 'v2']}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Checkbox value="v3"/>
                                    <span>Surfix:</span>
                                </Col>
                                <Col>
                                    <Form.Item
                                        noStyle
                                        rules={[{ type: 'number', message: '' }]}
                                        name={['setting', 'values', 'v3']}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Checkbox value="v4"/>
                                    <span>Reset mỗi ngày.</span>
                                </Col>
                            </Row>
                        </Checkbox.Group>
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
}
export default Manage;