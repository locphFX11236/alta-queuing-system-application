import { Space } from "antd";
import { DownReport } from "../../shared/components/affix";
import { ReportTable } from "../../shared/components/table";

const ReportList = (): JSX.Element => (
    <div className="report">
        <div className="input input-1">Input</div>
        <ReportTable />
        <Space className="affix-group" onClick={() => console.log('Download document')}>
            <DownReport />
        </Space>
    </div>
);

export default ReportList;