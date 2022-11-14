import { Col, Form, Input, Row } from 'antd';

import './style.css';
import { SelectUserState } from '../../../../core/featuresRedux/hookRedux';

const InforMemberForm = (): JSX.Element => {
    const data = SelectUserState().userData;

    return (
        <Form
            className='infor-member-form'
            name='infor-member'
            layout="vertical"
            initialValues={data}
            disabled={true}
        >
            <Row className='infor-member-form__row'>
                <Col className='infor-member-form__row__col'>
                    <Form.Item
                        label="Tên người dùng:"
                        name="name"
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại:"
                        name='phoneNumber'
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Email:"
                        name='email'
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col className='infor-member-form__row__col'>
                    <Form.Item
                        label="Tên đăng nhập:"
                        name='userID'
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu:"
                        name='password'
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Vai trò:"
                        name='position'
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default InforMemberForm;