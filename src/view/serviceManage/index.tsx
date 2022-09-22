import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { SelectS1 } from "../../shared/components/filter/select";
import { ServiceTable } from "../../shared/components/table";
import { AddService } from "../../shared/components/affix";

const ServiceList = (): JSX.Element => (
    <div className="service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <div className="input input-1">
            <label>Trạng thái hoạt động</label>
            <SelectS1 />
        </div>
        <div className="input input-2">Input 2</div>
        <div className="input input-search">Search box</div>
        <ServiceTable />
        <Space className="affix-group">
            <Link to='ser-manage-add'>
                <AddService />
            </Link>
        </Space>
    </div>
);

export default ServiceList;