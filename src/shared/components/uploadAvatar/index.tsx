import { Upload, Avatar, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';

import { checkFile, getBase64Encoder } from './items';
import { SelectUserState } from '../../../core/featuresRedux/hookRedux';
import { AppDispatch } from '../../../core/typescript/reduxState';
import { avatarChangeUser } from '../../../core/featuresRedux/slice/user';
import { UpdAccAvatar } from '../../../core/featuresRedux/slice/account';
import { getUrlItem } from '../../../core/data/api';

const UploadImg = (): JSX.Element => {
    const userState = SelectUserState().userData;
    const dispatch: AppDispatch = useDispatch();
    
    const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
        getBase64Encoder(
            info.file.originFileObj, // File img đang upload
            (imageUrl: any) => {
                dispatch(avatarChangeUser(imageUrl));
                dispatch(UpdAccAvatar({user: userState, imgSrc: imageUrl}));
            } // Calback thay đổi avatar
        )
  };

    return (
        <>
            <Avatar className="avatar-member" src={userState.imgUrl} />
            <Upload
                name="avatar"
                listType="picture"
                showUploadList={false}
                action={ getUrlItem('imgStore').url } // Post lên đường link
                beforeUpload={checkFile} // Kiểm tra file update
                onChange={handleChange} // Hiển thị image trên thẻ img
            >
                <Button
                    className="avatar-change"
                    icon={<CameraOutlined />}
                    shape='circle'
                />
            </Upload>
        </>
    );
};

export default UploadImg;