import { Typography } from "antd";

const ManageEquip = (): JSX.Element => (
    <div className="manage-equip">
        <Typography.Title className="title-lv-1">Quản lý thiết bị</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin thiết bị</Typography.Title>
            <div className="form-box">Form</div>
        </div>
        <div className="button-group">
            <div className="button button-1">Button 1</div>
            <div className="button button-2">Button 2</div>
        </div>
    </div>
);

export default ManageEquip;