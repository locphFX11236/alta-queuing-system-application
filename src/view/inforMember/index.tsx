import { Avatar, Button, Typography } from "antd";
import { CameraOutlined } from '@ant-design/icons';

import { AvatarUrl, HandleChangeAvatar, InforComponent, FullName } from "../../shared/components/account";

const InforMember = (): JSX.Element => (
    <div className="main-box infor-member">
        <div className="left-infor">
            <Avatar className="avatar-member" src={AvatarUrl()} />
            <Button
                className="avatar-change"
                icon={<CameraOutlined />}
                shape='circle'
                onClick={() => HandleChangeAvatar()}
            />
        </div>
        <Typography.Title className="name-infor">{FullName()}</Typography.Title>
        <div className="right-infor"><InforComponent /></div>
    </div>
);

export default InforMember;