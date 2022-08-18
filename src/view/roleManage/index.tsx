import { Typography } from "antd";
import { Link } from "react-router-dom";

const RoleList = (): JSX.Element => (
    <div className="role">
        <Typography.Title className="title-lv-1">Danh sách vai trò</Typography.Title>
        <div className="input input-search">Search box</div>
        <div className="table main-list">
            Table
            <div className="affix-group">
                <Link to='/setting/role/rol-manage-upd'>Cập nhật</Link>
            </div>
        </div>
        <div className="affix-group">
            <Link to='/setting/role/rol-manage-add'>Thêm vai trò</Link>
        </div>
    </div>
);

export default RoleList;