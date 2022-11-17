import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { useDispatch } from "react-redux";
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import { initAdd, status } from "./items";
import { RoleDataType } from "./roleType";
import { AddRole, UpdRole } from "../../../../core/featuresRedux/slice/role";
import { AppDispatch } from "../../../../core/typescript/reduxState";
import { UpdAccRole } from "../../../../core/featuresRedux/slice/account";

const { TextArea } = Input;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: RoleDataType = location.state;
    const initValues: RoleDataType = statusUrl === 'upd' ? updRecord : initAdd;
    const Cancel = () => navigate('/setting/role');
    const onFinish = (values: RoleDataType) => {
        if (statusUrl !== 'upd') dispatch( AddRole(values) );
        else {
            dispatch( UpdRole({ ...updRecord, ...values }) )
            if (updRecord.position !== values.position) dispatch(UpdAccRole([
                updRecord.position,
                values.position
            ]));
        };
        navigate('/setting/role');
    };

    return (
        <Form
            name='mana-role-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={initValues}
        >
            <div className="main-box">
                <Typography.Title className="title-lv-2">Thông tin vai trò</Typography.Title>
                <Row className="form-box">
                    <Col span={12} >
                        <Form.Item
                            label="Tên vai trò"
                            name='position'
                            wrapperCol={{ span: 23 }}
                            rules={[{ required: true, message: 'Please input role!' }]}
                        >
                            <Input placeholder="Nhập tên vai trò" />
                        </Form.Item>

                        <Form.Item
                            label="Mô tả:"
                            name='description'
                            wrapperCol={{ span: 23 }}
                        >
                            <TextArea rows={7} placeholder="Nhập mô tả" />
                        </Form.Item>

                        <p className="note">Là trường thông tin bắt buộc</p>

                    </Col>
                    <Col span={12} >
                        <Form.Item
                            name='functions'
                            label='Phân quyền chức năng'
                            labelCol={{ span: 23, offset: 1 }}
                            rules={[{ required: true, message: 'Please check below!' }]}
                        >
                            <Checkbox.Group className="check-box" >
                                <div style={{ margin: 24 }} >
                                    <h3>Nhóm chức năng A</h3>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="A" style={{ marginRight: 5 }} />
                                        Tất cả
                                    </Row>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="Ax" style={{ marginRight: 5 }} />
                                        Chức năng x
                                    </Row>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="Ay" style={{ marginRight: 5 }} />
                                        Chức năng y
                                    </Row>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="Az" style={{ marginRight: 5 }} />
                                        Chức năng z
                                    </Row>
                                </div>
                                <div style={{ margin: 24 }} >
                                    <h3>Nhóm chức năng B</h3>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="B" style={{ marginRight: 5 }} />
                                        Tất cả
                                    </Row>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="Bx" style={{ marginRight: 5 }} />
                                        Chức năng x
                                    </Row>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="By" style={{ marginRight: 5 }} />
                                        Chức năng y
                                    </Row>
                                    <Row style={{ lineHeight: '24px', margin: '12px 0' }} >
                                        <Checkbox value="Cz" style={{ marginRight: 5 }} />
                                        Chức năng z
                                    </Row>
                                </div>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">{status[statusUrl]}</Button>
            </Row>
        </Form>
    );
};

export default Manage;