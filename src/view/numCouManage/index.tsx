import { Typography } from "antd";

const NumberCountList = (): JSX.Element => (
    <div className="numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-3">Input 3</div>
        <div className="input input-4">Input 4</div>
        <div className="input input-search">Search box</div>
        <div className="table main-list">Table</div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">Affix</div>
    </div>
);

export default NumberCountList;