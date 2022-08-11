import { Typography } from "antd";

const AccountList = (): JSX.Element => (
    <div className="account">
        <Typography.Title className="title-lv-1">Danh sách tài khoản</Typography.Title>
        <div className="input input-1">Input</div>
        <div className="input input-search">Search box</div>
        <div className="table main-list">Table</div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">Affix</div>
    </div>
);

export default AccountList;