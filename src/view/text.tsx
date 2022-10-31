import { Upload, message, Avatar, Button } from 'antd';
import { useState } from 'react';
import { CameraOutlined } from '@ant-design/icons';

import { AvatarUrl } from '../shared/components/account';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';

function getBase64Encoder(img: any, callback: any) { // Encoder image vs Base64 -> backend has to decoder
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result) ); // Lấy kết quả file sau encoder
  reader.readAsDataURL(img);
};

function checkFile(file: any) {
  const isMatchType = (file.type === 'image/jpeg' || file.type === 'image/png');
  const isMatchSize = (file.size / 1024 / 1024) < 2; // Size < 2MB, file.size is byte

  if (!isMatchType) message.error('You can only upload JPG/PNG file!');
  if (!isMatchSize) message.error('Image must smaller than 2MB!');
  return (isMatchType && isMatchSize);
};

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(AvatarUrl());
  
  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    console.log(info.file.originFileObj)
    getBase64Encoder(
      info.file.originFileObj,
      (imageUrl: any) => setImageUrl(imageUrl))
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

export default App;