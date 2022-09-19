import { Typography } from "antd";
import { ManaRoleForm } from "../../shared/components/form/role";

const ManageRole = (): JSX.Element => (
    <div className="manage-role">
        <Typography.Title className="title-lv-1">Quản lý vai trò</Typography.Title>
        <ManaRoleForm />
    </div>
);

export default ManageRole;