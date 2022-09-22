import { EquipDataType } from "./equipType";

export const initAdd: EquipDataType = {
    code: 'KIO_0909',
    name: 'Kiosk_0909',
    IPAddress: '192.168.1.10',
    type: 'kiosk',
    userId: 'aaaa',
    password: '1234',
    usedService: ['rhm', 'tmh', 'tm', "s-pk", "hh", "tq"],
};

export const status: Record<string, string> = {
    add: 'Thêm thiết bị',
    upd: 'Cập nhật'
};

export const addInforRecord = {
    type: 'counter',
    userId: 'A12345',
    password: '123456'
};

export const RenderValue: Record<string, string> = {
    'm': 'Khám mắt',
    'rhm': 'Khám răng hàm mặt',
    'tmh': 'Khám tai mũi họng',
    'tm': 'Khám tim mạch',
    "s-pk": 'Khám sản - Phụ khoa',
    "hh": 'Khám hô hấp',
    "tq": 'Khám tổng quát',
    "kiosk": 'Kiosk',
    "counter": 'Display counter'
};