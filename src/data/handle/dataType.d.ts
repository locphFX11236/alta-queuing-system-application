type EquipType = {
    code: string,
    name: string,
    IPAddress: string,
    type: string,
    userId: string,
    password: string,
    usedService: Array<string>
};

type ServiceType = {
    code: string,
    name: string,
    description: string,
    setting: {
        mode: Array<string> | [],
        values?: {
            v1: {
                from?: number,
                to?: number
            },
            v2?: number,
            v3?: number
        }
    }
};

export type DataType = any | null |ServiceType | EquipType;
export type Datas = DataType[];