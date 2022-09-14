import { Typography } from "antd";
import { ManaServForm } from "../../shared/components/form/serviceForm";

const ManageService = (): JSX.Element => (
    <div className="manage-service">
        <Typography.Title className="title-lv-1">Quản lý dịch vụ</Typography.Title>
        <ManaServForm />
    </div>
);

export default ManageService;