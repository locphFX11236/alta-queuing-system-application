import { Link } from "react-router-dom";
import { Avatar, Typography } from "antd";

import BreadcrumbComponent from "../../shared/components/breadcrumb";
import NotiComponent from "../../shared/components/notification";
import { SelectUserState } from "../../core/featuresRedux/hookRedux";

const TopBar = (): JSX.Element => {
    const userState = SelectUserState().userData;

    return (
        <div className="top-bar">
            <BreadcrumbComponent />
            <NotiComponent />
            <Link
                className="acc"
                to='/infor'
                replace={true}
            >
                <Avatar className="avatar-bar" src={userState.imgUrl} />;
                <div className="acc-bar">
                    <p className="text">Xin Chào</p>
                    <Typography.Title className="name-bar" level={5}>{userState.name}</Typography.Title>
                </div>
            </Link>
        </div>
    );
};

export default TopBar;