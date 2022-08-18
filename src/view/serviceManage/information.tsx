import { Typography } from "antd";
import { Link } from "react-router-dom";

const InforService = (): JSX.Element => (
    <div className="infor-service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin dịch vụ</Typography.Title>
            <div className="infor-box">Information</div>
            <Typography.Title className="title-lv-2">Quy tắc cấp số</Typography.Title>
            <div className="infor-box">Information</div>
        </div>
        <div className="main-box">
            <div className="input input-1">Input 1</div>
            <div className="input input-2">Input 2</div>
            <div className="input input-search">Search box</div>
            <div className="table main-list">Table</div>
            <div className="pagination">Pagination</div>
        </div>
        <div className="affix-group">
            <Link to='/service/ser-manage-upd'>Cập nhật</Link>
        </div>
    </div>
);

export default InforService;