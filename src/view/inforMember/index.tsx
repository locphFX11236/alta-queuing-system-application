import { Typography } from "antd";
import { SelectUserState } from "../../core/featuresRedux/hookRedux";

import InforMemberForm from "../../shared/components/form/inforMember";
import UploadImg from "../../shared/components/uploadAvatar";

const InforMember = (): JSX.Element => {
    const userState = SelectUserState().userData;
    
    return (
        <div className="main-box infor-member">
            <div className="left-infor"><UploadImg /></div>
            <Typography.Title className="name-infor">{userState.name}</Typography.Title>
            <div className="right-infor"><InforMemberForm /></div>
        </div>
    );
};
export default InforMember;