import { Typography } from "antd";

const InforEquipment = (): JSX.Element => (
    <div className="infor-equip">
        <Typography.Title className="title-lv-1">Quản lý thiết bị</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin thiết bị</Typography.Title>
            <div className="infor-box">Information</div>
        </div>
        <div className="affix-group">Affix</div>
    </div>
);

export default InforEquipment;