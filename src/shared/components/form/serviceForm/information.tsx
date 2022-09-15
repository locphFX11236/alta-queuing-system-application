import { Form, Input, Typography } from "antd";
import { Location, useLocation } from "react-router-dom";
import { AddSetting } from "./items";
import { ServiceDataType } from "./serviceType";

const Information = (): JSX.Element => {
    const location: Location = useLocation();
    const inforRecord: ServiceDataType = location.state;

    inforRecord.setting = AddSetting;

    const isHidden = (a: string) => {
        if (!inforRecord.setting.mode) return false;
        if (inforRecord.setting.mode.includes(a)) return false;
        else return true
    };

    return (
        <Form
            colon
            className="main-box"
        >
            <Typography.Title className="title-lv-2">Thông tin dịch vụ</Typography.Title>
            <div className="infor-box">
                <Form.Item
                    label="Mã dịch vụ"
                    name='code'
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                >
                    <span>{inforRecord.code}</span>
                </Form.Item>

                <Form.Item
                    label="Tên dịch vụ"
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                >
                    <span>{inforRecord.name}</span>
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name='description'
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                >
                    <span>{inforRecord.description}</span>
                </Form.Item>
            </div>
            <Typography.Title className="title-lv-2">Quy tắc cấp số</Typography.Title>
            <div className="infor-box">
                <Form.Item
                    label="Tăng tự động từ"
                    hidden={isHidden('v1')}
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input
                        style={{ width: '35%', margin: 5 }}
                        value={inforRecord.setting.values.v1.from}
                        readOnly
                    />
                    <span>đến</span>
                    <Input
                        style={{ width: '35%', margin: 5 }}
                        value={inforRecord.setting.values.v1.to}
                        readOnly
                        
                    />
                </Form.Item>

                <Form.Item
                    label="Prefix"
                    hidden={isHidden('v2')}
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input
                        style={{ width: '35%', margin: 5 }}
                        value={inforRecord.setting.values.v2}
                        readOnly
                    />
                </Form.Item>
                
                <Form.Item
                    label="Surfix"
                    hidden={isHidden('v3')}
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input
                        style={{ width: '35%', margin: 5 }}
                        value={inforRecord.setting.values.v3}
                        readOnly
                    />
                </Form.Item>
                
                <Form.Item
                    colon={false}
                    label="Reset mỗi ngày"
                    hidden={isHidden('v4')}
                    labelAlign='left'
                    labelCol={{ span: 12 }}
                />
            </div>
        </Form>
    );
};

export default Information;