import { Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import { InforEquiForm } from "../../shared/components/form/equip";

const InforEquipment = (): JSX.Element => (
    <div className="infor-equip">
        <Typography.Title className="title-lv-1">Quản lý thiết bị</Typography.Title>
        <InforEquiForm />
        <div className="affix-group">
            <Link to='/equip/equ-manage-upd' state={useLocation().state}>Cập nhật</Link>
        </div>
    </div>
);

export default InforEquipment;