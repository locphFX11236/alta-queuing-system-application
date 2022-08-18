import { Typography } from "antd";

import { AvatarComponent, NameComponent } from "../../shared/components/account";
import BreadcrumbComponent from "../../shared/components/breadcrumb";
import NotiComponent from "../../shared/components/notification";

const TopBar = (): JSX.Element => (
    <div className="top-bar">
        <BreadcrumbComponent />
        <div className="noti"><NotiComponent /></div>
        <div className="acc">
            <div className="avatar-bar"><AvatarComponent /></div>
            <div className="acc-bar">
                <p className="text">Xin Chào</p>
                <Typography.Title className="name-bar" level={5}><NameComponent /></Typography.Title>
            </div>
        </div>
    </div>
);

export default TopBar;