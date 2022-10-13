import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch } from "../../core/featuresRedux/redux";
import { NCFetchAPI } from "../../core/featuresRedux/slice/numberCount";
import { AddNum } from "../../shared/components/affix";
import { SearchNc5 } from "../../shared/components/filter/search";
import { SelectNc1, SelectNc2, SelectNc3 } from "../../shared/components/filter/select";
import { RangeNumCou } from "../../shared/components/filter/time";
import { NumCouTable } from "../../shared/components/table";

const NumberCountList = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch( NCFetchAPI() );
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="numberCount">
            <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
            <div className="input input-1">
                <label>Tên dịch vụ</label>
                <SelectNc1 />
            </div>
            <div className="input input-2">
                <label>Tình trạng</label>
                <SelectNc2 />
            </div>
            <div className="input input-3">
                <label>Nguồn cấp</label>
                <SelectNc3 />
            </div>
            <div className="input input-4">
                <label>Chọn thời gian</label>
                <RangeNumCou />
            </div>
            <div className="input input-search">
                <label>Từ khóa</label>
                <SearchNc5 />
            </div>
            <NumCouTable />
            <Space className="affix-group">
                <Link to='num-manage-add'>
                    <AddNum />
                </Link>
            </Space>
        </div>
    );
};
export default NumberCountList;