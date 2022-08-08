import { Typography } from "antd";

import { AvatarComponent, ChangeAvatarComponent, InforComponent, NameComponent } from "../../shared/components/account";

const InforMember = (): JSX.Element => (
    <div className="main-box infor-member">
        <div className="left-infor">
            <div className="avatar-member"><AvatarComponent /></div>
            <div className="avatar-change"><ChangeAvatarComponent /></div>
        </div>
        <Typography.Title className="name-infor"><NameComponent /></Typography.Title>
        <div className="right-infor"><InforComponent /></div>
    </div>
);

export default InforMember;