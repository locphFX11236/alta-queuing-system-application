import { Link } from "react-router-dom";
import { Avatar, Typography } from "antd";

import { AvatarUrl, FullName } from "../../shared/components/account";
import BreadcrumbComponent from "../../shared/components/breadcrumb";
import NotiComponent from "../../shared/components/notification";

const TopBar = (): JSX.Element => (
    <div className="top-bar">
        <BreadcrumbComponent />
        <NotiComponent />
        <Link
            className="acc"
            to='/infor'
            replace={true}
        >
            <Avatar className="avatar-bar" src={AvatarUrl()} />;
            <div className="acc-bar">
                <p className="text">Xin Chào</p>
                <Typography.Title className="name-bar" level={5}>{FullName()}</Typography.Title>
            </div>
        </Link>
    </div>
);

export default TopBar;