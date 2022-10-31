import { AccountDataType } from "./accountType";

export const initAdd: AccountDataType = {
    userID: 'A12345',
    name: 'Nguyễn Văn A',
    phoneNumber: '0912345678',
    email: 'aaa@axaxxx.com',
    position: 'Bác sĩ',
    password: '123456',
    passwordConfirm: '123456',
    status: true,
};

export const status: Record<string, string> = {
    add: 'Thêm',
    upd: 'Cập nhật'
};