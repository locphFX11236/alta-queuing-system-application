import { Typography } from "antd";

import ManEquForm from "../../shared/components/form/equip/manage";

const ManageEquip = (): JSX.Element => (
    <div className="manage-equip">
        <Typography.Title className="title-lv-1">Quản lý thiết bị</Typography.Title>
        <ManEquForm />
    </div>
);

export default ManageEquip;