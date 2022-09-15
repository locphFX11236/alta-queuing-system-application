import { Space } from "antd";
import { DownReport } from "../../shared/components/affix";
import CSVExport from "../../shared/components/csvExport";
import { ReportTable } from "../../shared/components/table";

const ReportList = (): JSX.Element => (
    <div className="report">
        <div className="input input-1">Input</div>
        <ReportTable />
        <Space className="affix-group">
            <CSVExport>
                <DownReport />
            </CSVExport>
        </Space>
    </div>
);

export default ReportList;