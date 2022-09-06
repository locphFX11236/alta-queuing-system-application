import { Typography } from "antd";
import { Link } from "react-router-dom";
import { NumCouTable } from "../../shared/components/table";

const NumberCountList = (): JSX.Element => (
    <div className="numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-3">Input 3</div>
        <div className="input input-4">Input 4</div>
        <div className="input input-search">Search box</div>
        <NumCouTable />
        <div className="affix-group">
            <Link to='/number-count/num-manage-add'>Cấp số mới</Link>
        </div>
    </div>
);

export default NumberCountList;