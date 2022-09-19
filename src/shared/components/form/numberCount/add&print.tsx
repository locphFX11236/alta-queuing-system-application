import { Button, Form, Row, Select, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { NavigateFunction, useNavigate } from "react-router-dom";

import { openNotification } from "../../popUp";
import { NuCoDataType } from "./NuCoType";

const { Option } = Select;

const addItem: NuCoDataType = { useService: 'tmh' };

const NumberPrint = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const onFinish = (values: NuCoDataType) => {
        console.log('Sucess:', values);
        openNotification(values); // Nên để ở reducer
    }

    const Cancel = () => {
        console.log('Cancel');
        navigate('/number-count');
    };

    return (
        <Form
            className="main-box"
            name='add-num-form'
            layout="vertical"
            onFinish={onFinish}
            initialValues={addItem}
        >
            <Typography.Title className="title-lv-0">CẤP SỐ MỚI</Typography.Title>
            <div className="form-box">
                <p style={{ textAlign: 'center', marginBottom: 12 }}>Dịch vụ khách hàng lựa chọn</p>

                <Form.Item name='useService' >
                    <Select
                        placeholder="Chọn dịch vụ"
                        suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>} 
                    >
                        <Option key="rhm" value="rhm">Khám răng hàm mặt</Option>
                        <Option key="m" value="m">Khám mắt</Option>
                        <Option key="tmh" value="tmh">Khám tai mũi họng</Option>
                        <Option key="tm" value="tm">Khám tim mạch</Option>
                        <Option key="s-pk" value="s-pk">Khám sản - Phụ khoa</Option>
                        <Option key="hh" value="hh">Khám hô hấp</Option>
                        <Option key="tq" value="tq">Khám tổng quát</Option>
                    </Select>
                </Form.Item>
            </div>
            <Row className="button-group">
                <Button className="button button-1" type="primary" onClick={Cancel}>Hủy bỏ</Button>
                <Button className="button button-2" type="primary" htmlType="submit">In số</Button>
            </Row>
        </Form>
    )
};

export default NumberPrint;