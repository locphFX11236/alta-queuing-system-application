import { Typography } from "antd";
import { Link } from "react-router-dom";

const AccountList = (): JSX.Element => (
    <div className="account">
        <Typography.Title className="title-lv-1">Danh sách tài khoản</Typography.Title>
        <div className="input input-1">Input</div>
        <div className="input input-search">Search box</div>
        <div className="table main-list">
            Table
            <div className="affix-group">
                <Link to='/setting/account/acc-manage-upd'>Cập nhật</Link>
            </div>
        </div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">
            <Link to='/setting/account/acc-manage-add'>Thêm tài khoản</Link>
        </div>
    </div>
);

export default AccountList;