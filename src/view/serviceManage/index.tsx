import { Typography } from "antd";

const ServiceList = (): JSX.Element => (
    <div className="service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-search">Search box</div>
        <div className="table main-list">Table</div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">Affix</div>
    </div>
);

export default ServiceList;