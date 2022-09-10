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