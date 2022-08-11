import { Typography } from "antd";

const InforNumberCount = (): JSX.Element => (
    <div className="infor-numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin cấp số</Typography.Title>
            <div className="infor-box">Information</div>
        </div>
        <div className="affix-group">Affix</div>
    </div>
);

export default InforNumberCount;