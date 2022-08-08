import { Typography } from "antd";

const ManageNumberCount = (): JSX.Element => (
    <div className="manage-numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-0">CẤP SỐ MỚI</Typography.Title>
            <div className="form-box">Form</div>
            <div className="button-group">
                <div className="button button-1">Button 1</div>
                <div className="button button-2">Button 2</div>
            </div>
        </div>
    </div>
);

export default ManageNumberCount;