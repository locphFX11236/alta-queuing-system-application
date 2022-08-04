import { Typography } from "antd";

const EquipmentList = (): JSX.Element => (
    <div className="equip-list">
        <Typography.Title className="title-1">Danh sách thiết bị</Typography.Title>
        <div className="input-equip-1">Input 1</div>
        <div className="input-equip-2">Input 2</div>
        <div className="input-equip-3">Input 3</div>
        <div className="table-equip">Table</div>
        <div className="pagination-equip">Pagination</div>
        <div className="affix-equip">Affix</div>
    </div>
);

export default EquipmentList;