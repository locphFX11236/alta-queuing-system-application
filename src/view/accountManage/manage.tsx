import { Typography } from "antd";

import { ManAccForm } from "../../shared/components/form/account";

const ManageAccount = (): JSX.Element => (
    <div className="manage-account">
        <Typography.Title className="title-lv-1">Quản lý tài khoản</Typography.Title>
        <ManAccForm />
    </div>
);

export default ManageAccount;