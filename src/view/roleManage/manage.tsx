import { Typography } from "antd";

const ManageRole = (): JSX.Element => (
    <div className="manage-role">
        <Typography.Title className="title-lv-1">Quản lý vai trò</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin vai trò</Typography.Title>
            <div className="form-box">
                Form
                <div className="check-box">Check box</div>
            </div>
        </div>
        <div className="button-group">
            <div className="button button-1">Button 1</div>
            <div className="button button-2">Button 2</div>
        </div>
    </div>
);

export default ManageRole;