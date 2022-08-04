import { Typography } from "antd";

import { AvatarComponent, ChangeAvatarComponent, InforComponent, NameComponent } from "../../shared/components/account";

const Information = (): JSX.Element => (
    <div className="infor">
        <div className="left-infor">
            <div className="avatar-infor"><AvatarComponent /></div>
            <div className="change-avatar"><ChangeAvatarComponent /></div>
            <Typography.Title className="name-infor title-1"><NameComponent /></Typography.Title>
        </div>
        <div className="right-infor"><InforComponent /></div>
    </div>
);

export default Information;