import { Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import { InforEquiForm } from "../../shared/components/form/equip";
import { UpdEquip } from "../../shared/components/affix";

const InforEquipment = (): JSX.Element => (
    <div className="infor-equip">
        <Typography.Title className="title-lv-1">Quản lý thiết bị</Typography.Title>
        <InforEquiForm />
        <Space className="affix-group">
            <Link to='/equip/equ-manage-upd' state={useLocation().state}>
                <UpdEquip />
            </Link>
        </Space>
    </div>
);

export default InforEquipment;