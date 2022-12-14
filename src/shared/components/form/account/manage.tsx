import { Button, Col, Form, Input, message, Row, Select, SelectProps, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { initAdd, status } from "./items";
import { AccountDataType } from "./accountType";
import { AddAcc, UpdAcc } from "../../../../core/featuresRedux/slice/account";
import { AppDispatch } from "../../../../core/typescript/reduxState";
import { SelectAccState, SelectRoleState } from "../../../../core/featuresRedux/hookRedux";
import { CountUpd } from "../../../../core/featuresRedux/slice/role";

const { Option } = Select;

const Manage = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const roleState = SelectRoleState().data;
    const accState = SelectAccState().data;
    const statusUrl: string = location.pathname.slice(-3);
    const updRecord: AccountDataType = location.state;
    const initValues: AccountDataType = statusUrl === 'upd' ? updRecord : initAdd;
    const options: SelectProps['options'] = [];
    const Cancel = () => navigate('/setting/account');
    const onFinish = (values: AccountDataType) => {
        const { passwordConfirm, ...rest } = values;
        if (rest.password === passwordConfirm) {
            const newAccArr = [ ...accState ]
            if (statusUrl !== 'upd') {
                rest.key = accState.length + 1;
                newAccArr.push(rest)
                dispatch( AddAcc(rest) );
                dispatch( CountUpd(newAccArr));
            } else {
                const index = accState.findIndex((d: any) => d.key === updRecord.key);
                newAccArr.splice(index, 1, rest)
                dispatch( UpdAcc({ ...updRecord, ...rest }) );
                dispatch( CountUpd(newAccArr));
            }
            navigate('/setting/account');
        } else {
            message.error('Vui l??ng nh???p l???i password confirm');
            Cancel();
        }
    };

    roleState.forEach((d: any) => options.push({
        label: d.position,
        value: d.position,
    }));

    return (
        <Form
            name='man-acc-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={initValues}
        >
            <div className="main-box">
                <Typography.Title className="title-lv-2">Th??ng tin t??i kho???n</Typography.Title>
                <Row className="form-box">
                    <Col className="man-acc-form__col">
                        <Form.Item
                            label="H??? t??n"
                            name='name'
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Nh???p h??? t??n" />
                        </Form.Item>

                        <Form.Item
                            label="S??? ??i???n tho???i"
                            name='phoneNumber'
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input placeholder="Nh???p s??? ??i???n tho???i" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name='email'
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Nh???p email" />
                        </Form.Item>

                        <Form.Item
                            label="T??n vai tr??"
                            name='position'
                            rules={[{ required: true, message: 'Please input role!' }]}
                        >
                            <Select
                                placeholder="Nh???p lo???i thi???t b???"
                                options={options}
                                suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>}
                            />
                        </Form.Item>

                        <p className="note">L?? tr?????ng th??ng tin b???t bu???c</p>

                    </Col>
                    <Col className="man-acc-form__col">
                        <Form.Item
                            label="T??n ????ng nh???p"
                            name="userID"
                            rules={[{ required: true, message: 'Please input your user name!' }]}
                        >
                            <Input placeholder="Nh???p t??n ????ng nh???p" />
                        </Form.Item>

                        <Form.Item
                            label="M???t kh???u"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Nh???p m???t kh???u" />
                        </Form.Item>

                        <Form.Item
                            label="Nh???p l???i m???t kh???u"
                            name="passwordConfirm"
                            rules={[{ required: true, message: 'Please input confirm password!' }]}
                        >
                            <Input.Password placeholder="Nh???p l???i m???t kh???u" />
                        </Form.Item>

                        <Form.Item
                            label="T??nh tr???ng"
                            name="status"
                            rules={[{ required: true }]}
                        >
                            <Select suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>} >
                                <Option value={true} >Ho???t ?????ng</Option>
                                <Option value={false}>Ng??ng ho???t ?????ng</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>H???y b???</Button>
                <Button className="button button-2" type="primary" htmlType="submit">{status[statusUrl]}</Button>
            </Row>
        </Form>
    );
};

export default Manage;