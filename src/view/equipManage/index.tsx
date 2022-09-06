import { Typography } from "antd";
import { Link } from "react-router-dom";
import { EquipTable } from "../../shared/components/table";

const EquipList = (): JSX.Element => (
    <div className="equip">
        <Typography.Title className="title-lv-1">Danh sách thiết bị</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-search">Search box</div>
        <EquipTable />
        <div className="affix-group">
            <Link to='/equip/equ-manage-add'>Thêm thiết bị</Link>
        </div>
    </div>
);

export default EquipList;