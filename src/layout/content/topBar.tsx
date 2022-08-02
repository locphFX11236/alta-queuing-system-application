import AccComponent from "../../shared/components/account";
import BreadcrumbComponent from "../../shared/components/breadcrumb";
import NotiComponent from "../../shared/components/notification";

const TopBar = (): JSX.Element => (
    <div className="top-bar">
        <div className="breadcrumb">
            <BreadcrumbComponent />
        </div>
        <div className="right-top">
            <NotiComponent />
            <AccComponent />
        </div>
    </div>
);

export default TopBar;