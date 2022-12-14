import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { SelectE1, SelectE2 } from "../../shared/components/filter/select";
import { SearchE3 } from "../../shared/components/filter/search";
import { EquipTable } from "../../shared/components/table";
import { AddEquip } from "../../shared/components/affix";

const EquipList = (): JSX.Element => (
    <div className="equip">
        <Typography.Title className="title-lv-1">Danh sách thiết bị</Typography.Title>
        <div className="input input-1">
            <label>Trạng thái hoạt động</label>
            <SelectE1 />
        </div>
        <div className="input input-2">
            <label>Trạng thái kết nối</label>
            <SelectE2 />
        </div>
        <div className="input input-search">
            <label>Từ khóa</label>
            <SearchE3 />
        </div>
        <EquipTable />
        <Space className="affix-group">
            <Link to='equ-manage-add'>
                <AddEquip />
            </Link>
        </Space>
    </div>
);

export default EquipList;