import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch } from "../../core/typescript/reduxState";
import { AccFetchAPI } from "../../core/featuresRedux/slice/account";
import { AddAcc } from "../../shared/components/affix";
import { SearchA2 } from "../../shared/components/filter/search";
import { SelectA1 } from "../../shared/components/filter/select";
import { AccountTable } from "../../shared/components/table";

const AccountList = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch( AccFetchAPI() );
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
    <div className="account">
        <Typography.Title className="title-lv-1">Danh sách tài khoản</Typography.Title>
        <div className="input input-1">
            <label>Tên vai trò</label>
            <SelectA1 />
        </div>
        <div className="input input-search">
            <label>Từ khóa</label>
            <SearchA2 />
        </div>
        <AccountTable />
        <Space className="affix-group">
            <Link to='acc-manage-add'>
                <AddAcc />
            </Link>
        </Space>
    </div>
);
};
export default AccountList;