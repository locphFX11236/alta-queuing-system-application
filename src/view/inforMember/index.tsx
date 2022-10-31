import { Typography } from "antd";

import { InforComponent, FullName } from "../../shared/components/account";
import UploadImg from "../../shared/components/account/upload";

const InforMember = (): JSX.Element => (
    <div className="main-box infor-member">
        <div className="left-infor"><UploadImg /></div>
        <Typography.Title className="name-infor">{FullName()}</Typography.Title>
        <div className="right-infor"><InforComponent /></div>
    </div>
);

export default InforMember;