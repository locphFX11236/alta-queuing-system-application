import { Button, Form, message, Row, Select, Typography } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { NuCoDataType } from "./NuCoType";
import { SelectNCState, SelectServState } from "../../../../core/featuresRedux/hookRedux";
import { AppDispatch } from "../../../../core/typescript/reduxState";
import { AddNC } from "../../../../core/featuresRedux/slice/numberCount";
import moment from "moment";
import { StartCount } from "./items";

const { Option } = Select;

const addItem: NuCoDataType = { useService: 'tmh' };

const NumberPrint = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const OldNCState = SelectNCState().data;
    const ServState = SelectServState().data;
    const today = moment();
    const SetCount = ServState[ServState.length - 1].setting;
    const toDateNC = OldNCState.filter((s: any) => today.isSame(s.startTime.slice(-10)));
    // const lastNC = 20110000 // Test số cuối được cấp
    const lastNC = SetCount.mode.includes('v4') ? // Nếu có reset mỗi ngày
        (toDateNC[(toDateNC.length - 1) ?? 0]?.countNumber ?? StartCount(SetCount)) : // Lấy sô thứ tự cuối trước đó, nếu không lấy stt lại từ prefix
        (OldNCState[OldNCState.length - 1].countNumber + 1); // Lấy số thứ tự từ hôm trước
    const Cancel = () => {
        console.log('Cancel');
        navigate('/number-count');
    };
    const onFinish = (values: NuCoDataType) => {
        // Kiểm số cuối
        if (SetCount.mode.includes('v3') && ((lastNC - 20100000) >= SetCount.values.v3)) {
            message.error(`Không thể cấp số, STT cuối trong ngày là ${SetCount.values.v3 + 20100000}`)
            Cancel();
        } else {
            values.name = 'Lê Quỳnh Ái Vân';
            values.phoneNumber = "0123456789";
            values.email = "aaa@axa.com";
            values.countNumber = toDateNC.length === 0 ? lastNC : (lastNC + 1);
            values.startTime = today.format('HH:mm MM/DD/YYYY');
            values.endTime = today.format('17:30 MM/DD/YYYY');
            dispatch( AddNC(values) );
            navigate('/number-count');
        }
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