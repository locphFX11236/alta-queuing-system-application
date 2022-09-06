import { ReportTable } from "../../shared/components/table";

const ReportList = (): JSX.Element => (
    <div className="report">
        <div className="input input-1">Input</div>
        <ReportTable />
        <div className="affix-group">Tải về</div>
    </div>
);

export default ReportList;