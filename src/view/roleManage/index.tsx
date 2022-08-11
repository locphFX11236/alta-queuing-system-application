import { Typography } from "antd";

const RoleList = (): JSX.Element => (
    <div className="role">
        <Typography.Title className="title-lv-1">Danh sách vai trò</Typography.Title>
        <div className="input input-search">Search box</div>
        <div className="table main-list">Table</div>
        <div className="affix-group">Affix</div>
    </div>
);

export default RoleList;