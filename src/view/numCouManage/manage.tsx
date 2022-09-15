import { Typography } from "antd";
import { AddNumForm } from "../../shared/components/form/numberCount";

const ManageNumberCount = (): JSX.Element => (
    <div className="manage-numberCount">
        <Typography.Title className="title-lv-1">Quản lý cấp số</Typography.Title>
        <AddNumForm />
    </div>
);

export default ManageNumberCount;