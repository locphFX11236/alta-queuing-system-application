import { Typography } from "antd";

const ManageAccount = (): JSX.Element => (
    <div className="manage-account">
        <Typography.Title className="title-lv-1">Quản lý tài khoản</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin tài khoản</Typography.Title>
            <div className="form-box">Form</div>
        </div>
        <div className="button-group">
            <div className="button button-1">Button 1</div>
            <div className="button button-2">Button 2</div>
        </div>
    </div>
);

export default ManageAccount;