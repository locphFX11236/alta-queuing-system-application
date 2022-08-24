import data from '../../../data/user.json'

type dataUser = {
    id: string,
    fullName: string,
    phoneNumber: string,
    email: string,
    imgUrl: string,
    userName: string,
    password: string,
    position: string,
    status: boolean
};

const userJSON = JSON.stringify(data); // Chuyển đổi tạm để xử lý data

const UserData = (id: string) => {
    const dataObj = JSON.parse(userJSON);
    const userData = dataObj.find((u: dataUser) => u.id === id);
    return userData;
};

export const AvatarUrl = () => UserData('NV01').imgUrl;

export const FullName = () => UserData('NV01').fullName;

export const HandleChangeAvatar = () => console.log(UserData('NV01').imgUrl);

export const InforComponent = () => (
    <div style={{ width: '100%', height: 'auto' }} >Form Information</div>
);