import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch } from "../../core/typescript/reduxState";
import { RoleFetchAPI } from "../../core/featuresRedux/slice/role";
import { AddRole } from "../../shared/components/affix";
import { SearchR } from "../../shared/components/filter/search";
import { RoleTable } from "../../shared/components/table";

const RoleList = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch( RoleFetchAPI() );
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="role">
            <Typography.Title className="title-lv-1">Danh sách vai trò</Typography.Title>
            <div className="input input-search">
                <label>Từ khóa</label>
                <SearchR />
            </div>
            <RoleTable />
            <Space className="affix-group">
                <Link to='rol-manage-add'>
                    <AddRole />
                </Link>
            </Space>
        </div>
    );
};
export default RoleList;