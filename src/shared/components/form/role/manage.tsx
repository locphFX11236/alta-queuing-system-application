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
                    <Col className="mana-role-form__col1">
                        <Form.Item
                            label="Tên vai trò"
                            name='position'
                            rules={[{ required: true, message: 'Please input role!' }]}
                        >
                            <Input placeholder="Nhập tên vai trò" />
                        </Form.Item>

                        <Form.Item
                            label="Mô tả:"
                            name='description'
                        >
                            <TextArea rows={7} placeholder="Nhập mô tả" />
                        </Form.Item>

                        <p className="note">Là trường thông tin bắt buộc</p>

                    </Col>
                    <Col className="mana-role-form__col2">
                        <Form.Item
                            name='functions'
                            label='Phân quyền chức năng'
                            rules={[{ required: true, message: 'Please check below!' }]}
                        >
                            <Checkbox.Group className="check-box" >
                                <div className="group">
                                    <h2>Nhóm chức năng A</h2>
                                    <Row  >
                                        <Checkbox value="A" />
                                        <span>Tất cả</span>
                                    </Row>
                                    <Row  >
                                        <Checkbox value="Ax" />
                                        <span>Chức năng x</span>
                                    </Row>
                                    <Row  >
                                        <Checkbox value="Ay" />
                                        <span>Chức năng y</span>
                                    </Row>
                                    <Row  >
                                        <Checkbox value="Az" />
                                        <span>Chức năng z</span>
                                    </Row>
                                </div>
                                <div className="group">
                                    <h2>Nhóm chức năng B</h2>
                                    <Row  >
                                        <Checkbox value="B" />
                                        <span>Tất cả</span>
                                    </Row>
                                    <Row  >
                                        <Checkbox value="Bx" />
                                        <span>Chức năng x</span>
                                    </Row>
                                    <Row  >
                                        <Checkbox value="By" />
                                        <span>Chức năng y</span>
                                    </Row>
                                    <Row  >
                                        <Checkbox value="Cz" />
                                        <span>Chức năng z</span>
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