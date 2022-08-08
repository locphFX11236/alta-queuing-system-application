import { Typography } from "antd";

const EquipList = (): JSX.Element => (
    <div className="equip">
        <Typography.Title className="title-lv-1">Danh sách thiết bị</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-3">Input 3</div>
        <div className="table main-list">Table</div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">Affix</div>
    </div>
);

export default EquipList;