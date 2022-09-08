import { Col, Form, Input, Row } from 'antd';

const InforMemberForm = ({data}: any): JSX.Element => (
    <Form
        className='infor-member-form'
        name='infor-member'
        layout="vertical"
        colon={true}
        initialValues={data}
        disabled={true}
        size='large'
    >
        <Row >
            <Col span={12}>
                <Form.Item
                    label="Tên người dùng:"
                    name="fullName"
                    wrapperCol={{ span: 23 }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại:"
                    name='phoneNumber'
                    wrapperCol={{ span: 23 }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Email:"
                    name='email'
                    wrapperCol={{ span: 23 }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Tên đăng nhập:"
                    name='userName'
                    labelCol={{ span: 23, offset: 1 }}
                    wrapperCol={{ span: 23, offset: 1 }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu:"
                    name='password'
                    labelCol={{ span: 23, offset: 1 }}
                    wrapperCol={{ span: 23, offset: 1 }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Vai trò:"
                    name='position'
                    labelCol={{ span: 23, offset: 1 }}
                    wrapperCol={{ span: 23, offset: 1 }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
            </Col>
        </Row>
    </Form>
);

export default InforMemberForm;