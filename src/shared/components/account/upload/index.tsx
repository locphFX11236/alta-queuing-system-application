import { Upload, Avatar, Button } from 'antd';
import { useState } from 'react';
import { CameraOutlined } from '@ant-design/icons';

import { AvatarUrl } from '..';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import { checkFile, getBase64Encoder } from './items';

const UploadImg = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string>(AvatarUrl());
  
  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    getBase64Encoder(
      info.file.originFileObj, // File img đang upload
      (imageUrl: any) => setImageUrl(imageUrl) // Calback thay đổi avatar
    )
  };

  return (
    <>
      <Avatar className="avatar-member" src={imageUrl} />
      <Upload
        name="avatar"
        listType="picture"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // Post lên đường link
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