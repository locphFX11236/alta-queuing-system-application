import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { SelectS1 } from "../../shared/components/filter/select";
import { SearchS3 } from "../../shared/components/filter/search";
import { ServiceTable } from "../../shared/components/table";
import { AddService } from "../../shared/components/affix";
import { RangeSerList } from "../../shared/components/filter/time";

const ServiceList = (): JSX.Element => (
    <div className="service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <div className="input input-1">
            <label>Trạng thái hoạt động</label>
            <SelectS1 />
        </div>
        <div className="input input-2">
            <label>Chọn thời gian</label>
            <RangeSerList />
        </div>
        <div className="input input-search">
            <label>Từ khóa</label>
            <SearchS3 />
        </div>
        <ServiceTable />
        <Space className="affix-group">
            <Link to='ser-manage-add'>
                <AddService />
            </Link>
        </Space>
    </div>
);

export default ServiceList;