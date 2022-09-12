import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { BackNum } from "../../shared/components/affix";

const InforNumberCount = (): JSX.Element => (
    <div className="infor-numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <div className="main-box">
            <Typography.Title className="title-lv-2">Thông tin cấp số</Typography.Title>
            <div className="infor-box">Information</div>
        </div>
        <Space className="affix-group">
            <Link to='/number-count'>
                <BackNum />
            </Link>
        </Space>
    </div>
);

export default InforNumberCount;