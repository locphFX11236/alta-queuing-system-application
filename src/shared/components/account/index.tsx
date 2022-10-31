import HandleData from '../../../core/data/api/handleData';
import { accountJSON } from '../../../core/data/dummy';
import InforMemberForm from "../form/inforMember";

type dataUser = {
    key: number,
    name: string,
    phoneNumber: string,
    email: string,
    imgUrl: string,
    userID: string,
    password: string,
    position: string,
    status: boolean
};

const UserData = (id: string) => {
    const dataObj = HandleData(accountJSON);
    const userData = dataObj.find((u: dataUser) => u.userID === "lequynhaivan01");
    return userData;
};

export const AvatarUrl = () => UserData('NV01').imgUrl;

export const FullName = () => UserData('NV01').name;

export const InforComponent = () => <InforMemberForm data={UserData('NV01')} />;