import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { AddRole } from "../../shared/components/affix";
import { RoleTable } from "../../shared/components/table";

const RoleList = (): JSX.Element => (
    <div className="role">
        <Typography.Title className="title-lv-1">Danh sách vai trò</Typography.Title>
        <div className="input input-search">Search box</div>
        <RoleTable />
        <Space className="affix-group">
            <Link to='rol-manage-add'>
                <AddRole />
            </Link>
        </Space>
    </div>
);

export default RoleList;