import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { BackNum } from "../../shared/components/affix";
import { InforNumForm } from "../../shared/components/form/numberCount";

const InforNumberCount = (): JSX.Element => (
    <div className="infor-numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <InforNumForm />
        <Space className="affix-group">
            <Link to='/number-count'>
                <BackNum />
            </Link>
        </Space>
    </div>
);

export default InforNumberCount;