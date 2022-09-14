import { Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import { BackService, UpdService } from "../../shared/components/affix";
import { InfoServForm } from "../../shared/components/form/serviceForm";
import { SetNumTable } from "../../shared/components/table";

const InforService = (): JSX.Element => (
    <div className="infor-service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <InfoServForm />
        <div className="main-box">
            <div className="input input-1">Input 1</div>
            <div className="input input-2">Input 2</div>
            <div className="input input-search">Search box</div>
            <SetNumTable />
        </div>
        <Space className="affix-group">
            <Link to='/service/ser-manage-upd' state={useLocation().state}>
                <UpdService />
            </Link>
            <Link to='/service'>
                <BackService />
            </Link>
        </Space>
    </div>
);

export default InforService;