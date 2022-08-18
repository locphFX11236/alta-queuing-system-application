import { Typography } from "antd";
import { Link } from "react-router-dom";

const ServiceList = (): JSX.Element => (
    <div className="service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <div className="input input-1">Input 1</div>
        <div className="input input-2">Input 2</div>
        <div className="input input-search">Search box</div>
        <div className="table main-list">
            Table
            <div className="affix-group">
                <Link to='/service/ser-infor'>Chi tiết</Link>
            </div>
        </div>
        <div className="pagination">Pagination</div>
        <div className="affix-group">
            <Link to='/service/ser-manage-add'>Thêm dịch vụ</Link>
        </div>
    </div>
);

export default ServiceList;