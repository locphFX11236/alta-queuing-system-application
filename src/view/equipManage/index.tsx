import { Typography } from "antd";
import { Link } from "react-router-dom";

const EquipList = (): JSX.Element => (
    <div className="equip">
        <Typography.Title className="title-lv-1">Danh sách thiết bị</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-search">Search box</div>
        <div className="table main-list">
            Table
            <div className="affix-group">
                <Link to='/equip/equ-infor'>Chi tiết</Link>
            </div>
        </div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">
            <Link to='/equip/equ-manage-add'>Thêm thiết bị</Link>
        </div>
    </div>
);

export default EquipList;