import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { AppDispatch } from "../../core/typescript/reduxState";
import { NCFetchAPI } from "../../core/featuresRedux/slice/numberCount";
import { BackService, UpdService } from "../../shared/components/affix";
import { SearchSI3 } from "../../shared/components/filter/search";
import { SelectSI1 } from "../../shared/components/filter/select";
import { RangeSerInfo } from "../../shared/components/filter/time";
import { InfoServForm } from "../../shared/components/form/serviceForm";
import { SetNumTable } from "../../shared/components/table";

const InforService = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch( NCFetchAPI() );
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="infor-service">
            <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
            <InfoServForm />
            <div className="main-box">
                <div className="input input-1">
                    <label>Trạng thái</label>
                    <SelectSI1 />
                </div>
                <div className="input input-2">
                    <label>Chọn thời gian</label>
                    <RangeSerInfo />
                </div>
                <div className="input input-search">
                    <label>Từ khóa</label>
                    <SearchSI3 />
                </div>
                <SetNumTable />
            </div>
            <Space className="affix-group">
                <Link to='/service/ser-manage-upd' state={useLocation().state}>
                    <UpdService />
                </Link>
                <Link to='/service'>
                    <BackService />
                </Link>
            </Space>
        </div>
    );
};
export default InforService;