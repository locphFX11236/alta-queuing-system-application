import { Typography } from "antd";

import { AvatarComponent, NameComponent } from "../../shared/components/account";
import BreadcrumbComponent from "../../shared/components/breadcrumb";
import NotiComponent from "../../shared/components/notification";

const TopBar = (): JSX.Element => (
    <div className="top-bar">
        <div className="breadcrumb"><BreadcrumbComponent /></div>
        <div className="noti"><NotiComponent /></div>
        <div className="acc">
            <div className="avatar-bar"><AvatarComponent /></div>
            <div className="name-bar">
                <p>Xin Chào</p>
                <Typography.Title className="title-1" level={5}><NameComponent /></Typography.Title>
            </div>
        </div>
    </div>
);

export default TopBar;