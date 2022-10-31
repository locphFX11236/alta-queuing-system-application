import { message } from 'antd';

export function getBase64Encoder(img: any, callback: any) { // Encoder image vs Base64 -> backend has to decoder
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result) ); // Lấy kết quả file sau encoder
    reader.readAsDataURL(img);
};

export function checkFile(file: any) {
    const isMatchType = (file.type === 'image/jpeg' || file.type === 'image/png');
    const isMatchSize = (file.size / 1024 / 1024) < 2; // Size < 2MB, file.size is byte

    if (!isMatchType) message.error('You can only upload JPG/PNG file!');
    if (!isMatchSize) message.error('Image must smaller than 2MB!');
    return (isMatchType && isMatchSize);
};