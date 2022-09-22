import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { AddNum } from "../../shared/components/affix";
import { SelectNc1, SelectNc2, SelectNc3 } from "../../shared/components/filter/select";
import { NumCouTable } from "../../shared/components/table";

const NumberCountList = (): JSX.Element => (
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
        <div className="input input-4">Input 4</div>
        <div className="input input-search">Search box</div>
        <NumCouTable />
        <Space className="affix-group">
            <Link to='num-manage-add'>
                <AddNum />
            </Link>
        </Space>
    </div>
);

export default NumberCountList;