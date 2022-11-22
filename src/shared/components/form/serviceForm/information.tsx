import { Form, Input, Typography } from "antd";
import { Location, useLocation } from "react-router-dom";
import { ServiceDataType } from "./serviceType";

const Information = (): JSX.Element => {
    const location: Location = useLocation();
    const inforRecord: ServiceDataType = location.state;

    const isHidden = (a: string) => {
        if (!inforRecord.setting.mode) return false;
        if (inforRecord.setting.mode.includes(a)) return false;
        else return true
    };

    return (
        <Form
            className="main-box"
            name='infor-serv-form'
            colon={true}
        >
            <Typography.Title className="title-lv-2">Thông tin dịch vụ</Typography.Title>

            <div className="infor-box">
                <Form.Item
                    label="Mã dịch vụ"
                    name='code'
                    labelAlign='left'
                >
                    <span>{inforRecord.code}</span>
                </Form.Item>

                <Form.Item
                    label="Tên dịch vụ"
                    labelAlign='left'
                >
                    <span>{inforRecord.name}</span>
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name='description'
                    labelAlign='left'
                >
                    <span>{inforRecord.description}</span>
                </Form.Item>
            </div>

            <Typography.Title className="title-lv-2">Quy tắc cấp số</Typography.Title>

            <div className="infor-box">
                <Form.Item
                    label="Tăng tự động"
                    hidden={isHidden('v1')}
                    labelAlign='left'
                >
                    <Input
                        value={inforRecord.setting.values.v1.from}
                        readOnly
                    />

                    <span>đến</span>

                    <Input
                        value={inforRecord.setting.values.v1.to}
                        readOnly
                        
                    />
                </Form.Item>

                <Form.Item
                    label="Prefix"
                    hidden={isHidden('v2')}
                    labelAlign='left'
                >
                    <Input
                        value={inforRecord.setting.values.v2}
                        readOnly
                    />
                </Form.Item>
                
                <Form.Item
                    label="Surfix"
                    hidden={isHidden('v3')}
                    labelAlign='left'
                >
                    <Input
                        value={inforRecord.setting.values.v3}
                        readOnly
                    />
                </Form.Item>
                
                <Form.Item
                    colon={false}
                    label="Reset mỗi ngày."
                    hidden={isHidden('v4')}
                    labelAlign='left'
                />
            </div>
        </Form>
    );
};

export default Information;