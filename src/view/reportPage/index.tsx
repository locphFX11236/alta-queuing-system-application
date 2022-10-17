import { Space } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CSVExport from "../../shared/components/csvExport";
import { AppDispatch } from "../../core/featuresRedux/redux";
import { ReportFetchAPI } from "../../core/featuresRedux/slice/report";
import { DownReport } from "../../shared/components/affix";
import { RangeReport } from "../../shared/components/filter/time";
import { ReportTable } from "../../shared/components/table";

const ReportList = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch( ReportFetchAPI() );
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="report">
            <div className="input input-1">
                <label>Chọn thời gian</label>
                <RangeReport />
            </div>
            <ReportTable />
            <Space className="affix-group">
                <CSVExport>
                    <DownReport />
                </CSVExport>
            </Space>
        </div>
    );
};

export default ReportList;