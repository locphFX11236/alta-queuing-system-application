import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { AddAcc } from "../../shared/components/affix";
import { AccountTable } from "../../shared/components/table";

const AccountList = (): JSX.Element => (
    <div className="account">
        <Typography.Title className="title-lv-1">Danh sách tài khoản</Typography.Title>
        <div className="input input-1">Input</div>
        <div className="input input-search">Search box</div>
        <AccountTable />
        <Space className="affix-group">
            <Link to='acc-manage-add'>
                <AddAcc />
            </Link>
        </Space>
    </div>
);

export default AccountList;