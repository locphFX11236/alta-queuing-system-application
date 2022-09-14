import { ServiceDataType } from "./serviceType";

export const status: Record<string, string> = {
    add: 'Thêm dịch vụ',
    upd: 'Cập nhật'
};

export const initAdd: ServiceDataType = {
    code: 'asd',
    name: 'asfsa',
    description: 'asd',
    setting: {
        mode: ['v1', 'v2', 'v3', 'v4'],
        values: {
            v1: {
                from: 1,
                to: 9999
            },
            v2: 100,
            v3: 1000
        }
    }
};