import { Space } from "antd";
import { DownReport } from "../../shared/components/affix";
import CSVExport from "../../shared/components/csvExport";
import { RangeReport } from "../../shared/components/filter/time";
import { ReportTable } from "../../shared/components/table";

const ReportList = (): JSX.Element => (
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

export default ReportList;