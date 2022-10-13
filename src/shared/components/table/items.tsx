import { Badge } from 'antd';
import { StringTag } from '../badgeTag/badgeTageType';

export const CustomTag = ({s}: StringTag): JSX.Element => {
    if(s === 'Đã sử dụng') return <p><Badge color={'#34CD26'} /> Đã hoàn thành</p>;
    if(s === 'Đang chờ') return <p><Badge color={'#5490EB'} /> Đang thực hiện</p>;
    else  return <p><Badge color={'#6C7585'} /> Vắng</p>;
};

export const RenderItem: Record<string, string> = {
    'm': 'Khám mắt',
    'rhm': 'Khám răng hàm mặt',
    'tmh': 'Khám tai mũi họng',
    'tm': 'Khám tim mạch',
    "s-pk": 'Khám sản - Phụ khoa',
    "hh": 'Khám hô hấp',
    "tq": 'Khám tổng quát',
    "kio": 'Kiosk',
    "sys": 'Hệ thống'
};